import { NextResponse } from "next/server"
import { blogDb, BlogPost } from "@/lib/db"
import { z } from "zod"

// Validation schemas
const createPostSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  author: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  image: z.string().optional(),
  status: z.enum(["draft", "published"]).optional(),
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

    const newPost = blogDb.create({
      title: validated.title,
      slug,
      category: validated.category,
      author: validated.author,
      excerpt: validated.excerpt,
      content: validated.content,
      image: validated.image || "/placeholder.svg",
      status: validated.status || "draft",
      readTime,
    })

    return NextResponse.json({ success: true, post: newPost }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: "Validation error", details: error.errors }, { status: 400 })
    }
    console.error("Error creating blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to create blog post" }, { status: 500 })
  }
}

