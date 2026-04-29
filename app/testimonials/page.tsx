import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { allTestimonials } from "@/lib/testimonials"

const THEME_STYLES = {
  secondary: {
    header: "from-blue-500 to-indigo-600",
    rating: "text-blue-600",
    avatarBg: "bg-brand-secondary/10",
    avatarText: "text-brand-secondary",
  },
  primary: {
    header: "from-violet-500 to-fuchsia-600",
    rating: "text-violet-600",
    avatarBg: "bg-brand-primary/10",
    avatarText: "text-brand-primary",
  },
  accent: {
    header: "from-emerald-500 to-green-600",
    rating: "text-emerald-700",
    avatarBg: "bg-brand-accent/10",
    avatarText: "text-brand-accent",
  },
} as const

export default function TestimonialsPage() {
  const featured = allTestimonials.slice(0, 3)
  const moreStories = allTestimonials.slice(3)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Success Stories</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real People.
              <span className="text-purple-600"> Real Transformations.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how our clients have transformed their lives and businesses through NLP, Hypnosis, and our
              comprehensive training programs
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Program Stories</h2>
            <p className="text-xl text-gray-600">Different programs. Real learner experiences.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((item) => {
              const styles = THEME_STYLES[item.theme]
              return (
                <Card
                  key={item.id}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-r ${styles.header} text-white px-6 py-5`}>
                    <p className="font-bold text-xl leading-tight">{item.label}</p>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className={`text-sm font-medium ${styles.rating}`}>5.0/5 rating</span>
                    </div>
                    <p className="text-foreground/80 mb-6 italic">"{item.quote}"</p>
                    <div className="flex items-center">
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center mr-3 ${styles.avatarBg}`}>
                        <span className={`font-bold ${styles.avatarText}`}>{item.initials}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* More Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">More Real Testimonials</h2>
            <p className="text-xl text-gray-600">Additional voices from your real participants and professionals</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {moreStories.map((item) => {
              const styles = THEME_STYLES[item.theme]
              return (
                <Card key={item.id} className="border border-gray-200 bg-white">
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-gray-100 text-gray-700">{item.label}</Badge>
                    <p className="text-gray-700 italic mb-5">"{item.quote}"</p>
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${styles.avatarBg}`}>
                        <span className={`text-sm font-bold ${styles.avatarText}`}>{item.initials}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of individuals and organizations who have transformed their lives through our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Start Your Transformation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-800 bg-transparent"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
