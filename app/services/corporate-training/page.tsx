import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Users, Target, TrendingUp, BookOpen, Building, Lightbulb, Shield } from "lucide-react"

export default function CorporateTrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Corporate Training Programs</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Elevate Your Team's Performance
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive corporate training solutions that drive results, enhance productivity, and create
            high-performing teams across all levels of your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explore Training Solutions
            </Button>
            <Button size="lg" variant="outline">
              Request Custom Proposal
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Companies Trained</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">50,000+</div>
              <p className="text-gray-600">Professionals Developed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">40%</div>
              <p className="text-gray-600">Average Productivity Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Training Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From leadership development to technical skills, we offer training programs tailored to your
              organization's specific needs and goals.
            </p>
          </div>

          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="communication">Communication</TabsTrigger>
              <TabsTrigger value="sales">Sales & Marketing</TabsTrigger>
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="leadership" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Executive Leadership</CardTitle>
                    <CardDescription>Strategic leadership for C-suite executives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Strategic thinking and planning</li>
                      <li>• Change management</li>
                      <li>• Executive presence</li>
                      <li>• Board communication</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Target className="h-8 w-8 text-indigo-600 mb-2" />
                    <CardTitle>Middle Management</CardTitle>
                    <CardDescription>Essential skills for team leaders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Team building and motivation</li>
                      <li>• Performance management</li>
                      <li>• Conflict resolution</li>
                      <li>• Delegation strategies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>Emerging Leaders</CardTitle>
                    <CardDescription>Developing future leaders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Leadership fundamentals</li>
                      <li>• Emotional intelligence</li>
                      <li>• Decision-making skills</li>
                      <li>• Mentoring and coaching</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="communication" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <BookOpen className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Public Speaking</CardTitle>
                    <CardDescription>Master the art of presentation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Overcoming speaking anxiety</li>
                      <li>• Engaging storytelling</li>
                      <li>• Visual presentation design</li>
                      <li>• Q&A handling techniques</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Interpersonal Skills</CardTitle>
                    <CardDescription>Build stronger workplace relationships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Active listening techniques</li>
                      <li>• Empathy and rapport building</li>
                      <li>• Difficult conversations</li>
                      <li>• Cross-cultural communication</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Building className="h-8 w-8 text-orange-600 mb-2" />
                    <CardTitle>Business Writing</CardTitle>
                    <CardDescription>Professional written communication</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Email etiquette and efficiency</li>
                      <li>• Report and proposal writing</li>
                      <li>• Executive summaries</li>
                      <li>• Digital communication best practices</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sales" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Target className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>Sales Excellence</CardTitle>
                    <CardDescription>Advanced selling techniques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Consultative selling approach</li>
                      <li>• Objection handling</li>
                      <li>• Closing techniques</li>
                      <li>• Customer relationship management</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Lightbulb className="h-8 w-8 text-yellow-600 mb-2" />
                    <CardTitle>Digital Marketing</CardTitle>
                    <CardDescription>Modern marketing strategies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Social media marketing</li>
                      <li>• Content marketing strategies</li>
                      <li>• SEO and SEM fundamentals</li>
                      <li>• Analytics and measurement</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Customer Service</CardTitle>
                    <CardDescription>Exceptional customer experiences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Service excellence standards</li>
                      <li>• Complaint resolution</li>
                      <li>• Customer retention strategies</li>
                      <li>• Omnichannel support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="technical" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-red-600 mb-2" />
                    <CardTitle>Cybersecurity Awareness</CardTitle>
                    <CardDescription>Protect your organization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Threat identification</li>
                      <li>• Password security</li>
                      <li>• Phishing prevention</li>
                      <li>• Data protection protocols</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <BookOpen className="h-8 w-8 text-indigo-600 mb-2" />
                    <CardTitle>Software Training</CardTitle>
                    <CardDescription>Master essential business tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Microsoft Office Suite</li>
                      <li>• CRM systems</li>
                      <li>• Project management tools</li>
                      <li>• Industry-specific software</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Data Analytics</CardTitle>
                    <CardDescription>Make data-driven decisions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Excel advanced functions</li>
                      <li>• Data visualization</li>
                      <li>• Statistical analysis basics</li>
                      <li>• Business intelligence tools</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Delivery Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the training format that best fits your team's schedule and learning preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>In-Person Training</CardTitle>
                <CardDescription>Traditional classroom experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Face-to-face interaction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Hands-on activities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Team building opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Immediate feedback</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle>Virtual Training</CardTitle>
                <CardDescription>Interactive online sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Global accessibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Cost-effective delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Recording for later review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Interactive breakout rooms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Blended Learning</CardTitle>
                <CardDescription>Best of both worlds</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Self-paced online modules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Live practice sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Continuous reinforcement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure maximum impact and lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">Analyze current skills and identify training needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customization</h3>
              <p className="text-gray-600">Tailor content to your organization's specific needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">Execute training using your preferred format</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Evaluation</h3>
              <p className="text-gray-600">Measure results and provide ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our corporate training programs.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long are your typical training programs?</AccordionTrigger>
              <AccordionContent>
                Our training programs range from half-day workshops (4 hours) to comprehensive multi-day programs. Most
                popular formats include full-day sessions (8 hours) and 2-3 day intensive programs. We also offer
                ongoing development programs that span several weeks or months.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can you customize training content for our industry?</AccordionTrigger>
              <AccordionContent>
                We specialize in creating industry-specific content that addresses your unique challenges and
                requirements. Our team works closely with you to understand your business context, terminology, and
                specific scenarios to make the training highly relevant and practical.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What is the maximum group size for training sessions?</AccordionTrigger>
              <AccordionContent>
                For optimal interaction and engagement, we recommend groups of 12-20 participants for skills-based
                training. For awareness sessions or presentations, we can accommodate larger groups of up to 100
                participants. We can also run multiple sessions to train larger organizations while maintaining quality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do you provide training materials and resources?</AccordionTrigger>
              <AccordionContent>
                Yes, all participants receive comprehensive training materials including workbooks, reference guides,
                templates, and digital resources. We also provide access to our online learning portal with additional
                resources, videos, and tools for continued learning after the training session.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How do you measure training effectiveness?</AccordionTrigger>
              <AccordionContent>
                We use a multi-level evaluation approach including pre and post-training assessments, participant
                feedback, behavioral observation, and ROI measurement. We provide detailed reports showing skill
                improvements, engagement levels, and recommendations for continued development.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What ongoing support do you provide after training?</AccordionTrigger>
              <AccordionContent>
                Our support includes 30-90 days of email support, access to additional resources, follow-up coaching
                sessions, and refresher workshops. We also offer train-the-trainer programs to build internal capability
                and quarterly check-ins to ensure sustained application of learned skills.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Invest in Your Team's Success?</h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your organization with world-class training programs designed to deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Download Training Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
