"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
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
                <Input placeholder="Search articles..." className="pl-10 pr-4 py-3 text-lg" />
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
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">NLP Techniques</Badge>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  The Science Behind Rapid Personal Transformation
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Discover how cutting-edge neuroscience research validates ancient NLP techniques and why some people
                  achieve breakthrough results in days while others struggle for years.
                </p>

                <div className="flex items-center mb-6 text-sm text-muted-foreground">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">Yousif Mangi</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">March 15, 2024</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>8 min read</span>
                </div>

                <Link href="/blog/science-behind-rapid-transformation">
                  <Button size="lg">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Latest Articles</h2>
            <p className="text-xl text-muted-foreground">Stay updated with our newest insights and discoveries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary/10 text-primary">NLP Techniques</Badge>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  5 NLP Anchoring Techniques That Actually Work
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn the most effective anchoring methods used by top NLP practitioners to create lasting behavioral
                  change.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>March 12, 2024</span>
                  <span>6 min read</span>
                </div>
                <Link href="/blog/nlp-anchoring-techniques">
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <Heart className="h-12 w-12 text-secondary-foreground" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-secondary/50 text-secondary-foreground">Hypnosis</Badge>
                <h3 className="text-xl font-bold mb-3 text-foreground">Debunking Common Hypnosis Myths</h3>
                <p className="text-muted-foreground mb-4">
                  Separate fact from fiction and understand what hypnosis really is and how it can benefit your life.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>March 10, 2024</span>
                  <span>5 min read</span>
                </div>
                <Link href="/blog/hypnosis-myths">
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <TrendingUp className="h-12 w-12 text-accent-foreground" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-accent/50 text-accent-foreground">Corporate</Badge>
                <h3 className="text-xl font-bold mb-3 text-foreground">Building Inclusive Teams: A Practical Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Actionable strategies for creating workplace environments where everyone feels valued and heard.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>March 8, 2024</span>
                  <span>7 min read</span>
                </div>
                <Link href="/blog/building-inclusive-teams">
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <User className="h-12 w-12 text-primary" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary/10 text-primary">Personal Development</Badge>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  The Power of Visualization in Goal Achievement
                </h3>
                <p className="text-muted-foreground mb-4">
                  Discover how mental imagery can accelerate your progress toward any goal you set for yourself.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>March 5, 2024</span>
                  <span>8 min read</span>
                </div>
                <Link href="/blog/visualization-goal-achievement">
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-accent-foreground" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-accent/50 text-accent-foreground">Case Study</Badge>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  How One CEO Transformed Company Culture in 90 Days
                </h3>
                <p className="text-muted-foreground mb-4">
                  A detailed case study of rapid organizational transformation using NLP and leadership coaching.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>March 3, 2024</span>
                  <span>10 min read</span>
                </div>
                <Link href="/blog/ceo-culture-transformation">
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <Heart className="h-12 w-12 text-secondary-foreground" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-secondary/50 text-secondary-foreground">Wellness</Badge>
                <h3 className="text-xl font-bold mb-3 text-foreground">Stress Management Through Self-Hypnosis</h3>
                <p className="text-muted-foreground mb-4">
                  Learn simple self-hypnosis techniques you can use anywhere to manage stress and anxiety effectively.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>March 1, 2024</span>
                  <span>6 min read</span>
                </div>
                <Link href="/blog/stress-management-hypnosis">
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
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
                className="flex-1 bg-background/10 border-background/20 text-foreground placeholder:text-muted-foreground"
              />
              <Button type="submit" className="bg-background text-foreground hover:bg-background/90 font-semibold">
                Subscribe
              </Button>
            </form>

            <p className="text-sm mt-4 opacity-80">Join 10,000+ readers. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
