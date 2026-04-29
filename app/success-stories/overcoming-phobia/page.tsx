import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getTestimonialById } from "@/lib/testimonials"

export default function OvercomingPhobiaCaseStudyPage() {
  const testimonial = getTestimonialById("aqsa-kamran")
  if (!testimonial) return null

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/testimonials" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Success Stories
        </Link>

        <Card>
          <CardContent className="p-8 md:p-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Featured Success Story</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Master Practitioner Success Story</h1>

            <div className="space-y-8 prose prose-gray max-w-none">
              <div>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">Participant</h2>
                <p className="text-muted-foreground">{testimonial.name} — {testimonial.role}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">Experience</h2>
                <p className="text-muted-foreground">
                  {testimonial.name.split(" ")[0]} completed the Master Practitioner of NLP and Hypnosis program with Yousif Mangi and highlighted
                  the interactive sessions, approachable trainer style, and smooth learning journey. She described the
                  process as empowering and transformational for both personal and professional development.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">Key Outcomes</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>High confidence from interactive and clear sessions</li>
                  <li>Empowered mindset and practical personal-growth tools</li>
                  <li>Better readiness for professional and coaching growth</li>
                  <li>Strong recommendation for others pursuing life and career development</li>
                </ul>
              </div>

              <p className="text-muted-foreground italic border-l-4 border-primary pl-4">
                &ldquo;{testimonial.quote}&rdquo; — {testimonial.name}
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact?subject=Master%20Practitioner%20Program">Book a Session</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/testimonials">View More Success Stories</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
