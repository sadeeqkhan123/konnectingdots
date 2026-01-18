import { NextResponse } from "next/server"
import { blogDb, BlogPost } from "@/lib/db"
import { z } from "zod"
import { sendEmail } from "@/lib/email"

// Validation schemas
const createPostSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  author: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  image: z.string().optional(),
  status: z.enum(["draft", "pending", "published"]).optional(),
  submittedBy: z.string().optional(),
  submittedByEmail: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val || val.trim() === "") return true // Empty is allowed
        return z.string().email().safeParse(val).success // If provided, must be valid email
      },
      { message: "Invalid email format" },
    ),
})

// GET - Get all blog posts (with optional filtering)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const category = searchParams.get("category")

    let posts: BlogPost[] = blogDb.getAll()

    // Filter by status
    if (status === "published") {
      posts = blogDb.getPublished()
    } else if (status) {
      posts = posts.filter((post) => post.status === status)
    }

    // Filter by category
    if (category) {
      posts = posts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
    }

    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return NextResponse.json({ success: true, posts })
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch blog posts" }, { status: 500 })
  }
}

// POST - Create a new blog post
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validated = createPostSchema.parse(body)

    // Generate slug from title
    const slug = validated.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    // Calculate read time (average 200 words per minute)
    const wordCount = validated.content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / 200)

    const postStatus = validated.status || "pending"
    
    const newPost = blogDb.create({
      title: validated.title,
      slug,
      category: validated.category,
      author: validated.author,
      excerpt: validated.excerpt,
      content: validated.content,
      image: validated.image || "/placeholder.svg",
      status: postStatus,
      readTime,
      submittedBy: validated.submittedBy,
      submittedByEmail: validated.submittedByEmail,
    })

    // Send email to admin if status is pending
    if (postStatus === "pending") {
      try {
        const adminEmail = process.env.ADMIN_EMAIL || "Connect@konnectingdots.org"
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
        
        const emailHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
              .post-details { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #eab308; }
              .button { display: inline-block; padding: 12px 24px; background: #eab308; color: #000; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px 5px; }
              .button-reject { background: #ef4444; color: white; }
              .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Blog Post Submission</h1>
              </div>
              <div class="content">
                <p>A new blog post has been submitted and is awaiting your approval.</p>
                
                <div class="post-details">
                  <h3>${validated.title}</h3>
                  <p><strong>Category:</strong> ${validated.category}</p>
                  <p><strong>Author:</strong> ${validated.author}</p>
                  ${validated.submittedBy ? `<p><strong>Submitted by:</strong> ${validated.submittedBy}</p>` : ""}
                  ${validated.submittedByEmail ? `<p><strong>Email:</strong> ${validated.submittedByEmail}</p>` : ""}
                  <p><strong>Excerpt:</strong> ${validated.excerpt.substring(0, 200)}...</p>
                </div>
                
                <p>Review and approve this post:</p>
                <a href="${siteUrl}/blog-admin" class="button">Review in Dashboard</a>
              </div>
              <div class="footer">
                <p>© 2025 Konnecting Dots. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `
        
        await sendEmail({
          to: adminEmail,
          subject: `New Blog Post Pending Approval: ${validated.title}`,
          html: emailHtml,
        })
      } catch (emailError) {
        console.error("Error sending approval email:", emailError)
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json({ success: true, post: newPost }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: "Validation error", details: error.errors }, { status: 400 })
    }
    console.error("Error creating blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to create blog post" }, { status: 500 })
  }
}

