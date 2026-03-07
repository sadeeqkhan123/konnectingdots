import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Fortune500CaseStudyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/testimonials" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Success Stories
        </Link>

        <Card>
          <CardContent className="p-8 md:p-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Corporate Case Study</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Fortune 500 Leadership Transformation</h1>

            <div className="space-y-8 prose prose-gray max-w-none">
              <div>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">The Challenge</h2>
                <p className="text-muted-foreground">
                  A Fortune 500 executive team was struggling with communication breakdowns and slow decision-making.
                  Siloed departments and conflicting priorities led to missed deadlines and declining team morale. The
                  leadership team needed to align on strategy while improving collaboration and efficiency at the top.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">Our Solution</h2>
                <p className="text-muted-foreground">
                  We designed and delivered a 12-week NLP leadership program tailored to the executive team. The program
                  combined group workshops with individual coaching sessions, focusing on communication patterns,
                  decision-making frameworks, and behavioral change. Key NLP techniques included rapport-building,
                  reframing limiting beliefs, and anchoring peak performance states.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">Results</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>40% improvement in decision-making speed</li>
                  <li>60% increase in team collaboration scores</li>
                  <li>$2.3M increase in quarterly revenue attributed to faster execution</li>
                  <li>95% executive retention rate over the following 18 months</li>
                </ul>
              </div>

              <p className="text-muted-foreground italic border-l-4 border-primary pl-4">
                &ldquo;The NLP leadership program didn&apos;t just change how we work—it changed how we think as a team.
                We now make decisions in hours that used to take weeks.&rdquo; — Executive participant
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact?subject=Corporate%20Leadership%20Program">Discuss Your Goals</Link>
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
