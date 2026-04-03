"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  slug: string
  category: string
  author: string
  excerpt: string
  image: string
  createdAt: string
  publishedAt?: string
  readTime?: number
}

const getCategoryStyle = (category: string) => {
  const normalized = category.toLowerCase()
  if (normalized.includes("nlp")) {
    return {
      badgeClass: "bg-primary/10 text-primary",
      gradient: "from-primary/20 to-accent/20",
      Icon: BookOpen,
    }
  }
  if (normalized.includes("hypnosis") || normalized.includes("wellness")) {
    return {
      badgeClass: "bg-secondary/50 text-secondary-foreground",
      gradient: "from-secondary/20 to-accent/20",
      Icon: Heart,
    }
  }
  if (normalized.includes("corporate")) {
    return {
      badgeClass: "bg-accent/50 text-accent-foreground",
      gradient: "from-accent/20 to-primary/20",
      Icon: TrendingUp,
    }
  }
  return {
    badgeClass: "bg-primary/10 text-primary",
    gradient: "from-primary/20 to-secondary/20",
    Icon: User,
  }
}

const formatDate = (dateString?: string) => {
  if (!dateString) return "Recently published"
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [publishedPosts, setPublishedPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch("/api/blog?status=published")
        const data = await response.json()
        if (response.ok && data.success) {
          setPublishedPosts(data.posts || [])
        }
      } catch (error) {
        console.error("Error loading published posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()
  }, [])

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return publishedPosts
    const q = searchQuery.toLowerCase().trim()
    return publishedPosts.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q)
    )
  }, [publishedPosts, searchQuery])

  const featuredPost = publishedPosts[0]

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Insights & Articles</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Transform Your Mind with
              <span className="text-primary"> Expert Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the latest in NLP, Hypnosis, Personal Development, and Corporate Training through our expert
              articles and insights
            </p>

            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 text-lg"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  aria-label="Search articles"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Article</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-primary/20">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Featured Article</h3>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                {featuredPost ? (
                  <>
                    <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">{featuredPost.category}</Badge>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{featuredPost.excerpt}</p>

                    <div className="flex flex-wrap items-center mb-6 text-sm text-muted-foreground gap-x-4 gap-y-2">
                      <span className="inline-flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {featuredPost.author}
                      </span>
                      <span className="inline-flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(featuredPost.publishedAt || featuredPost.createdAt)}
                      </span>
                      <span className="inline-flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {featuredPost.readTime ? `${featuredPost.readTime} min read` : "5 min read"}
                      </span>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button size="lg">
                        Read Full Article
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Badge className="mb-4 bg-muted text-muted-foreground">No Published Posts Yet</Badge>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">Your featured article will appear here</h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Publish your first post from the admin dashboard to display it on the public blog.
                    </p>
                  </>
                )}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Article Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find articles that match your interests</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">NLP Techniques</h3>
                <p className="text-gray-600 mb-4">Master the art of Neuro-Linguistic Programming</p>
                <Badge variant="outline">24 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hypnosis & Healing</h3>
                <p className="text-gray-600 mb-4">Explore the therapeutic power of hypnosis</p>
                <Badge variant="outline">18 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Corporate Training</h3>
                <p className="text-gray-600 mb-4">Transform workplace culture and performance</p>
                <Badge variant="outline">15 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <User className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personal Development</h3>
                <p className="text-gray-600 mb-4">Strategies for continuous growth and success</p>
                <Badge variant="outline">21 Articles</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section id="latest-articles" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Latest Articles</h2>
            <p className="text-xl text-muted-foreground">Stay updated with our newest insights and discoveries</p>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} matching &quot;{searchQuery}&quot;
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const style = getCategoryStyle(article.category)
              const Icon = style.Icon
              return (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <div className={`aspect-video bg-gradient-to-br ${style.gradient} flex items-center justify-center`}>
                    <Icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardContent className="p-6">
                    <Badge className={`mb-3 ${style.badgeClass}`}>{article.category}</Badge>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{formatDate(article.publishedAt || article.createdAt)}</span>
                      <span>{article.readTime ? `${article.readTime} min read` : "5 min read"}</span>
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredArticles.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              {isLoading ? "Loading published posts..." : "No articles match your search. Try a different term."}
            </p>
          )}

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog#latest-articles">Load More Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#0d5c56] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="text-xl mb-8 text-white/95">
              Get the latest insights on NLP, Hypnosis, and Personal Development delivered to your inbox
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const email = formData.get("email") as string

                try {
                  const response = await fetch("/api/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                  })

                  const data = await response.json()
                  if (data.success) {
                    alert("Successfully subscribed! Check your email.")
                    e.currentTarget.reset()
                  } else {
                    alert(data.error || "Failed to subscribe")
                  }
                } catch (error) {
                  console.error("Error subscribing:", error)
                  alert("Failed to subscribe. Please try again.")
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 bg-white/15 border-white/30 text-white placeholder:text-white/70 focus-visible:ring-white"
              />
              <Button type="submit" className="bg-white text-[#0d5c56] hover:bg-white/90 font-semibold">
                Subscribe
              </Button>
            </form>

            <p className="text-sm mt-4 text-white/90">Join 10,000+ readers. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
