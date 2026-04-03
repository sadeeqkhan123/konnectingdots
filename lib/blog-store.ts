import { BlogPost, blogDb } from "@/lib/db"
import { getSupabaseAdminClient, isSupabaseConfigured } from "@/lib/supabase"

type BlogStatus = "draft" | "pending" | "published" | "rejected"

interface BlogPostRow {
  id: string
  title: string
  slug: string
  category: string
  author: string
  excerpt: string
  content: string
  image: string
  status: BlogStatus
  created_at: string
  updated_at: string
  published_at: string | null
  read_time: number | null
  submitted_by: string | null
  submitted_by_email: string | null
}

const mapRowToBlogPost = (row: BlogPostRow): BlogPost => ({
  id: row.id,
  title: row.title,
  slug: row.slug,
  category: row.category,
  author: row.author,
  excerpt: row.excerpt,
  content: row.content,
  image: row.image,
  status: row.status,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
  publishedAt: row.published_at ?? undefined,
  readTime: row.read_time ?? undefined,
  submittedBy: row.submitted_by ?? undefined,
  submittedByEmail: row.submitted_by_email ?? undefined,
})

const useLocalFallback = !isSupabaseConfigured

export const blogStore = {
  getAll: async (): Promise<BlogPost[]> => {
    if (useLocalFallback) return blogDb.getAll()

    const supabase = getSupabaseAdminClient()
    const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })
    if (error) throw new Error(error.message)
    return (data || []).map((row) => mapRowToBlogPost(row as BlogPostRow))
  },

  getPublished: async (): Promise<BlogPost[]> => {
    if (useLocalFallback) return blogDb.getPublished()

    const supabase = getSupabaseAdminClient()
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })
    if (error) throw new Error(error.message)
    return (data || []).map((row) => mapRowToBlogPost(row as BlogPostRow))
  },

  getById: async (id: string): Promise<BlogPost | null> => {
    if (useLocalFallback) return blogDb.getById(id)

    const supabase = getSupabaseAdminClient()
    const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).maybeSingle()
    if (error) throw new Error(error.message)
    if (!data) return null
    return mapRowToBlogPost(data as BlogPostRow)
  },

  getBySlug: async (slug: string): Promise<BlogPost | null> => {
    if (useLocalFallback) return blogDb.getBySlug(slug)

    const supabase = getSupabaseAdminClient()
    const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).maybeSingle()
    if (error) throw new Error(error.message)
    if (!data) return null
    return mapRowToBlogPost(data as BlogPostRow)
  },

  create: async (post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): Promise<BlogPost> => {
    if (useLocalFallback) return blogDb.create(post)

    const supabase = getSupabaseAdminClient()
    const now = new Date().toISOString()

    const payload = {
      title: post.title,
      slug: post.slug,
      category: post.category,
      author: post.author,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      status: post.status,
      read_time: post.readTime ?? null,
      submitted_by: post.submittedBy ?? null,
      submitted_by_email: post.submittedByEmail ?? null,
      published_at: post.status === "published" ? now : null,
    }

    const { data, error } = await supabase.from("blog_posts").insert(payload).select("*").single()
    if (error) throw new Error(error.message)
    return mapRowToBlogPost(data as BlogPostRow)
  },

  update: async (id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> => {
    if (useLocalFallback) return blogDb.update(id, updates)

    const supabase = getSupabaseAdminClient()
    const existing = await blogStore.getById(id)
    if (!existing) return null

    const statusWasPublished = existing.status === "published"
    const statusWillBePublished = updates.status === "published"
    const publishedAt =
      statusWillBePublished && !statusWasPublished
        ? new Date().toISOString()
        : updates.status && updates.status !== "published"
          ? null
          : existing.publishedAt || null

    const payload = {
      title: updates.title,
      slug: updates.slug,
      category: updates.category,
      author: updates.author,
      excerpt: updates.excerpt,
      content: updates.content,
      image: updates.image,
      status: updates.status,
      read_time: updates.readTime,
      submitted_by: updates.submittedBy,
      submitted_by_email: updates.submittedByEmail,
      published_at: publishedAt,
      updated_at: new Date().toISOString(),
    }

    const { data, error } = await supabase
      .from("blog_posts")
      .update(payload)
      .eq("id", id)
      .select("*")
      .maybeSingle()
    if (error) throw new Error(error.message)
    if (!data) return null
    return mapRowToBlogPost(data as BlogPostRow)
  },

  delete: async (id: string): Promise<boolean> => {
    if (useLocalFallback) return blogDb.delete(id)

    const supabase = getSupabaseAdminClient()
    const { error, count } = await supabase
      .from("blog_posts")
      .delete({ count: "exact" })
      .eq("id", id)
    if (error) throw new Error(error.message)
    return (count || 0) > 0
  },
}
