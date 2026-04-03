import type { MetadataRoute } from "next"
import { blogStore } from "@/lib/blog-store"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://konnectingdots.org"

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/services",
  "/services/one-on-one-coaching",
  "/services/corporate-training",
  "/services/dei-training",
  "/services/train-the-trainer",
  "/services/practitioner-master",
  "/events",
  "/blog",
  "/resources",
  "/testimonials",
  "/faq",
  "/privacy",
  "/terms",
  "/cookies",
  "/success-stories/fortune-500-leadership",
  "/success-stories/overcoming-phobia",
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }))

  let blogUrls: MetadataRoute.Sitemap = []
  try {
    const publishedPosts = await blogStore.getPublished()
    blogUrls = publishedPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : now,
      changeFrequency: "weekly",
      priority: 0.7,
    }))
  } catch (error) {
    console.error("Failed to load published blogs for sitemap:", error)
  }

  return [...staticUrls, ...blogUrls]
}
