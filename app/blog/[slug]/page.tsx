import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogStore } from "@/lib/blog-store"

const formatDate = (dateString?: string) =>
  dateString
    ? new Date(dateString).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Recently published"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await blogStore.getBySlug(params.slug)
  if (!post || post.status !== "published") {
    return {
      title: "Blog Post Not Found | Konnecting Dots",
      description: "The requested blog post could not be found.",
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const canonicalUrl = post.canonicalUrl || `${siteUrl}/blog/${post.slug}`
  const seoTitle = post.seoTitle || `${post.title} | Konnecting Dots`
  const seoDescription = post.seoDescription || post.excerpt
  const keywords = post.seoKeywords
    ? post.seoKeywords.split(",").map((keyword) => keyword.trim())
    : undefined
  const ogImage = post.ogImage || post.image || "/placeholder.svg"

  return {
    title: seoTitle,
    description: seoDescription,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      type: "article",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [ogImage],
    },
  }
}

export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = await blogStore.getBySlug(params.slug)
  if (!post || post.status !== "published") {
    notFound()
  }

  const relatedPosts = (await blogStore.getPublished()).filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="min-h-screen pt-20">
      {/* Back Navigation */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span className="font-medium text-foreground">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(post.publishedAt || post.createdAt)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime ? `${post.readTime} min read` : "5 min read"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full aspect-video object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl shrink-0">
                    👤
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">About {post.author}</h3>
                    <p className="text-muted-foreground mb-4">
                      Thanks for reading this article. Explore more published insights from Konnecting Dots across NLP,
                      wellness, personal development, and corporate transformation.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/blog">View All Articles</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.length > 0 ? (
                relatedPosts.map((related) => (
                  <Card key={related.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-4xl">📘</div>
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-primary/10 text-primary">{related.category}</Badge>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{related.title}</h3>
                      <p className="text-muted-foreground mb-4">{related.excerpt}</p>
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                        <Link href={`/blog/${related.slug}`}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="md:col-span-3">
                  <CardContent className="p-6 text-center text-muted-foreground">
                    Publish more articles to see related posts here.
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Your Own Breakthrough?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book a session with the Konnecting Dots team and discover what's possible when you have the right tools
              and guidance.
            </p>
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <Link href="/contact">Book Your Session Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
