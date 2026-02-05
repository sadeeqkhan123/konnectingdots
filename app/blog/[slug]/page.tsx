import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, User, Share2, Bookmark, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
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
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">NLP Techniques</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              The Science Behind Rapid Personal Transformation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Discover how cutting-edge neuroscience research validates ancient NLP techniques and why some people
              achieve breakthrough results in days while others struggle for years.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span className="font-medium text-foreground">Yousif Mangi</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>March 15, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min read</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-lg flex items-center justify-center shadow-lg">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🧠</div>
                <p className="text-lg font-semibold text-muted-foreground">Featured Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Understanding the Neuroscience of Change</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For decades, psychologists and neuroscientists have debated the mechanisms behind rapid personal
              transformation. Traditional therapy often takes years to produce meaningful change, yet practitioners of
              Neuro-Linguistic Programming (NLP) have consistently reported breakthrough results in remarkably short
              timeframes.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Recent advances in neuroimaging have finally begun to reveal the science behind these seemingly miraculous
              transformations. What we're discovering is that the brain's neuroplasticity—its ability to rewire
              itself—is far more profound than previously thought.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12 text-foreground">The Power of Pattern Recognition</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              One of the key insights from NLP is the importance of recognizing and interrupting limiting patterns. The
              brain operates largely on autopilot, running pre-programmed sequences of thoughts, emotions, and
              behaviors. These patterns, once formed, can persist for decades—but they can also be changed in moments
              when approached correctly.
            </p>

            <Card className="my-8 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <p className="text-lg italic text-muted-foreground">
                  "The quality of your life is determined by the quality of the questions you ask yourself." - Tony
                  Robbins
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-4 mt-12 text-foreground">Three Key Principles for Rapid Change</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">1. State Management</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your emotional state determines your capabilities. When you're in a resourceful state, you have access to
              far more of your potential than when you're anxious, stressed, or depressed. NLP techniques like anchoring
              allow you to consciously shift your state in seconds.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">2. Reframing</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every experience has multiple meanings. The meaning you assign to an event determines your response to it.
              By learning to reframe experiences—to see them from different perspectives—you can transform problems into
              opportunities and obstacles into stepping stones.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">3. Modeling Excellence</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              One of the most powerful aspects of NLP is its focus on modeling—identifying what successful people do
              differently and replicating those patterns. Rather than spending years figuring things out through trial
              and error, you can compress decades into days by adopting proven strategies.
            </p>

            <Separator className="my-12" />

            <h2 className="text-3xl font-bold mb-4 text-foreground">The Research Validates the Practice</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Multiple studies have now demonstrated that brief interventions using NLP techniques can produce
              significant and lasting changes. A 2019 study published in the Journal of Applied Psychology found that
              participants who learned basic NLP techniques showed measurable improvements in emotional regulation,
              stress management, and goal achievement within just two weeks.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              What makes these results so remarkable is their durability. Follow-up studies six months later showed that
              the majority of participants had maintained their gains—and many had continued to improve. This suggests
              that NLP doesn't just create temporary changes but actually rewires neural pathways in lasting ways.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12 text-foreground">Practical Application</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              So how can you apply these principles in your own life? Start by identifying one limiting pattern you'd
              like to change. It might be a habitual negative thought, an emotional reaction, or a behavioral tendency
              that no longer serves you.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Next, become intensely curious about this pattern. When does it occur? What triggers it? What do you tell
              yourself in those moments? Simply bringing conscious awareness to automatic patterns begins to disrupt
              them.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Finally, experiment with interrupting the pattern. Try a different physical posture, ask yourself a
              different question, or imagine how someone you admire would handle the situation. You may be surprised at
              how quickly new patterns can replace old ones when you approach change with the right tools and mindset.
            </p>
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
                    <h3 className="text-2xl font-bold mb-2 text-foreground">About Yousif Mangi</h3>
                    <p className="text-muted-foreground mb-4">
                      Yousif Mangi, Founder and Chief Learning Officer at Konnecting Dots, is a seasoned professional in
                      personal development and organizational transformation. With a decade-long background in Learning
                      and Development, he has led 80+ workshops across sectors, impacting 10,000+ individuals and
                      coaching clients in 15 countries.
                    </p>
                    <Button variant="outline">View All Articles</Button>
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
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-4xl">🎯</div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary">NLP Techniques</Badge>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    5 NLP Anchoring Techniques That Actually Work
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Learn the most effective anchoring methods used by top practitioners.
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-4xl">💭</div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-secondary/50 text-secondary-foreground">Personal Development</Badge>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    The Power of Visualization in Goal Achievement
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Discover how mental imagery accelerates progress toward any goal.
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="text-4xl">🧘</div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-accent/50 text-accent-foreground">Hypnosis</Badge>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Debunking Common Hypnosis Myths</h3>
                  <p className="text-muted-foreground mb-4">
                    Separate fact from fiction about hypnosis and its benefits.
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
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
              Book a session with Yousif Mangi, Founder & Chief Learning Officer at Konnecting Dots, and discover what's
              possible when you have the right tools and guidance.
            </p>
            <Button size="lg" variant="secondary" className="text-lg">
              Book Your Session Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
