import { NextResponse } from "next/server"
import { blogDb, BlogPost } from "@/lib/db"
import { z } from "zod"

const updatePostSchema = z.object({
  title: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  author: z.string().min(1).optional(),
  excerpt: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
  image: z.string().optional(),
  status: z.enum(["draft", "published"]).optional(),
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

    const updatedPost = blogDb.update(paramsValue.id, updates)
    if (!updatedPost) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 })
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

