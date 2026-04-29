import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { allTestimonials } from "@/lib/testimonials"

const THEME_STYLES = {
  secondary: {
    label: "text-brand-secondary",
    avatarBg: "bg-brand-secondary/10",
    avatarText: "text-brand-secondary",
  },
  primary: {
    label: "text-brand-primary",
    avatarBg: "bg-brand-primary/10",
    avatarText: "text-brand-primary",
  },
  accent: {
    label: "text-brand-accent",
    avatarBg: "bg-brand-accent/10",
    avatarText: "text-brand-accent",
  },
} as const

export default function TestimonialsPage() {

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

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real client experiences from our actual training and coaching programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((item) => {
              const styles = THEME_STYLES[item.theme]
              return (
              <Card key={item.id} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <p className={`text-sm font-semibold mb-3 ${styles.label}`}>{item.label}</p>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-brand-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-6">"{item.quote}"</p>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${styles.avatarBg}`}>
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
