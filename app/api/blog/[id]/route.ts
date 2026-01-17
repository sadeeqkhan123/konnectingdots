import { NextResponse } from "next/server"
import { blogDb, BlogPost } from "@/lib/db"
import { z } from "zod"
import { sendEmail } from "@/lib/email"

const updatePostSchema = z.object({
  title: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  author: z.string().min(1).optional(),
  excerpt: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
  image: z.string().optional(),
  status: z.enum(["draft", "pending", "published", "rejected"]).optional(),
})

// GET - Get a single blog post by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } | Promise<{ id: string }> },
) {
  try {
    // Handle both sync (Next.js 14) and async (Next.js 15) params
    const paramsValue = params instanceof Promise ? await params : (params as { id: string })
    
    if (!paramsValue?.id) {
      return NextResponse.json({ success: false, error: "Missing post ID" }, { status: 400 })
    }
    
    const post = blogDb.getById(paramsValue.id)
    if (!post) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, post })
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch blog post" }, { status: 500 })
  }
}

// PUT - Update a blog post
export async function PUT(request: Request, { params }: { params: { id: string } | Promise<{ id: string }> }) {
  try {
    const paramsValue = params instanceof Promise ? await params : (params as { id: string })
    
    if (!paramsValue?.id) {
      return NextResponse.json({ success: false, error: "Missing post ID" }, { status: 400 })
    }
    const body = await request.json()
    const validated = updatePostSchema.parse(body)

    // Prepare updates object with proper typing
    const updates: Partial<BlogPost> = { ...validated }

    // If title is being updated, regenerate slug
    if (validated.title) {
      const slug = validated.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      updates.slug = slug
    }

    // Recalculate read time if content is updated
    if (validated.content) {
      const wordCount = validated.content.split(/\s+/).length
      const readTime = Math.ceil(wordCount / 200)
      updates.readTime = readTime
    }

    // Get the post before update to check status change
    const existingPost = blogDb.getById(paramsValue.id)
    if (!existingPost) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 })
    }

    const updatedPost = blogDb.update(paramsValue.id, updates)
    if (!updatedPost) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 })
    }

    // Send notification email if status changed to published or rejected
    if (validated.status && validated.status !== existingPost.status) {
      if (updatedPost.submittedByEmail && (validated.status === "published" || validated.status === "rejected")) {
        try {
          const statusMessage = validated.status === "published" 
            ? "Your blog post has been approved and published!" 
            : "Your blog post submission was not approved."
          
          const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
                .button { display: inline-block; padding: 12px 24px; background: #eab308; color: #000; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px 0; }
                .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>${validated.status === "published" ? "Blog Post Approved!" : "Blog Post Update"}</h1>
                </div>
                <div class="content">
                  <p>Hello ${updatedPost.submittedBy || updatedPost.author},</p>
                  <p>${statusMessage}</p>
                  <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 8px;">
                    <h3>${updatedPost.title}</h3>
                    <p><strong>Category:</strong> ${updatedPost.category}</p>
                  </div>
                  ${validated.status === "published" ? `<a href="${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/blog/${updatedPost.slug}" class="button">View Published Post</a>` : ""}
                </div>
                <div class="footer">
                  <p>© 2025 Konnecting Dots. All rights reserved.</p>
                </div>
              </div>
            </body>
            </html>
          `
          
          await sendEmail({
            to: updatedPost.submittedByEmail,
            subject: validated.status === "published" 
              ? `Your Blog Post Has Been Published: ${updatedPost.title}`
              : `Blog Post Submission Update: ${updatedPost.title}`,
            html: emailHtml,
          })
        } catch (emailError) {
          console.error("Error sending status update email:", emailError)
          // Don't fail the request if email fails
        }
      }
    }

    return NextResponse.json({ success: true, post: updatedPost })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: "Validation error", details: error.errors }, { status: 400 })
    }
    console.error("Error updating blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to update blog post" }, { status: 500 })
  }
}

// DELETE - Delete a blog post
export async function DELETE(request: Request, { params }: { params: { id: string } | Promise<{ id: string }> }) {
  try {
    const paramsValue = params instanceof Promise ? await params : (params as { id: string })
    
    if (!paramsValue?.id) {
      return NextResponse.json({ success: false, error: "Missing post ID" }, { status: 400 })
    }
    const deleted = blogDb.delete(paramsValue.id)
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, message: "Post deleted successfully" })
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to delete blog post" }, { status: 500 })
  }
}

