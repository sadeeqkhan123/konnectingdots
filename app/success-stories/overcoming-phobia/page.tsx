import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function OvercomingPhobiaCaseStudyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/testimonials" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Success Stories
        </Link>

        <Card>
          <CardContent className="p-8 md:p-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Individual Case Study</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Overcoming 20-Year Phobia</h1>

            <div className="space-y-8 prose prose-gray max-w-none">
              <div>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">The Challenge</h2>
                <p className="text-muted-foreground">
                  A client had lived with a severe flying phobia for over 20 years. It had limited career opportunities,
                  prevented family visits abroad, and caused significant anxiety whenever travel was discussed. Previous
                  attempts with conventional therapy had provided only short-term relief.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">Our Solution</h2>
                <p className="text-muted-foreground">
                  Over 8 sessions we combined NLP techniques with clinical hypnotherapy. We worked on identifying the root
                  cause of the phobia, reframing the associated beliefs and images, and installing new resourceful
                  states. The client learned self-anchoring and visualization techniques to use before and during travel.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">Results</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Complete elimination of flying anxiety</li>
                  <li>Took first flight in 20 years within 3 months of completing the program</li>
                  <li>Accepted an international job promotion that required regular travel</li>
                  <li>Improved overall confidence and life satisfaction</li>
                </ul>
              </div>

              <p className="text-muted-foreground italic border-l-4 border-primary pl-4">
                &ldquo;I never thought I would set foot on a plane again. The combination of NLP and hypnosis gave me my
                life back.&rdquo; — Client
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact?subject=Personal%20Coaching%20Inquiry">Book a Session</Link>
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
