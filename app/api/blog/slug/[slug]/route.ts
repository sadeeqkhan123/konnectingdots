import { NextResponse } from "next/server"
import { blogDb } from "@/lib/db"

// GET - Get a blog post by slug
export async function GET(request: Request, { params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  try {
    const paramsValue = params instanceof Promise ? await params : (params as { slug: string })
    
    if (!paramsValue?.slug) {
      return NextResponse.json({ success: false, error: "Missing slug" }, { status: 400 })
    }
    
    const post = blogDb.getBySlug(paramsValue.slug)
    if (!post) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, post })
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch blog post" }, { status: 500 })
  }
}

