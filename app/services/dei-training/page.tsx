import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Target, TrendingUp, Clock, Award, BookOpen } from "lucide-react"

export default function DEITrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            Diversity, Equity & Inclusion Training
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Building Inclusive Workplaces
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your organization with comprehensive DEI training programs that foster belonging, drive
            innovation, and create lasting cultural change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Start Your DEI Journey
            </Button>
            <Button size="lg" variant="outline">
              Download DEI Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <p className="text-gray-600">Improvement in Employee Engagement</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
              <p className="text-gray-600">Participants Report Increased Awareness</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">78%</div>
              <p className="text-gray-600">Reduction in Workplace Conflicts</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <p className="text-gray-600">Organizations Transformed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DEI Training Matters */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why DEI Training Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations with diverse and inclusive cultures are more innovative, profitable, and resilient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Business Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>35% higher financial performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>70% more likely to capture new markets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Improved brand reputation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Employee Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Higher employee engagement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Reduced turnover rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Increased sense of belonging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Innovation & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Enhanced creativity and innovation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Better decision-making</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Competitive advantage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our DEI Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training solutions tailored to your organization's needs and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Unconscious Bias Training</CardTitle>
                <CardDescription>Recognize and address hidden biases</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Understanding cognitive biases</li>
                  <li>• Impact on decision-making</li>
                  <li>• Practical mitigation strategies</li>
                  <li>• Interactive exercises and scenarios</li>
                </ul>
                <div className="mt-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">4-8 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Inclusive Leadership</CardTitle>
                <CardDescription>Develop inclusive leadership skills</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Leading diverse teams effectively</li>
                  <li>• Creating psychological safety</li>
                  <li>• Inclusive communication strategies</li>
                  <li>• Building cultural competence</li>
                </ul>
                <div className="mt-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">1-2 days</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Target className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Microaggressions Workshop</CardTitle>
                <CardDescription>Address subtle forms of discrimination</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Identifying microaggressions</li>
                  <li>• Understanding impact vs. intent</li>
                  <li>• Bystander intervention strategies</li>
                  <li>• Creating supportive environments</li>
                </ul>
                <div className="mt-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">3-4 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Cultural Competency</CardTitle>
                <CardDescription>Navigate cultural differences effectively</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Cross-cultural communication</li>
                  <li>• Cultural intelligence development</li>
                  <li>• Global mindset cultivation</li>
                  <li>• Respectful workplace practices</li>
                </ul>
                <div className="mt-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">6-8 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Allyship Training</CardTitle>
                <CardDescription>Become an effective ally and advocate</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Understanding privilege and power</li>
                  <li>• Active allyship strategies</li>
                  <li>• Supporting underrepresented groups</li>
                  <li>• Creating inclusive spaces</li>
                </ul>
                <div className="mt-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">4-6 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Target className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>DEI Strategy Development</CardTitle>
                <CardDescription>Build comprehensive DEI initiatives</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• DEI assessment and planning</li>
                  <li>• Goal setting and metrics</li>
                  <li>• Implementation roadmaps</li>
                  <li>• Sustainability strategies</li>
                </ul>
                <div className="mt-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">2-3 days</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Investment in Your Future</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to fit your organization's size and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter Package</CardTitle>
                <CardDescription>Perfect for small teams</CardDescription>
                <div className="text-3xl font-bold text-purple-600 mt-4">$2,500</div>
                <p className="text-sm text-gray-600">Up to 25 participants</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>2 core training modules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>4-hour workshop</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Digital resources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>30-day email support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-transparent" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-300 hover:border-purple-400 transition-colors relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional Package</CardTitle>
                <CardDescription>Ideal for medium organizations</CardDescription>
                <div className="text-3xl font-bold text-purple-600 mt-4">$7,500</div>
                <p className="text-sm text-gray-600">Up to 100 participants</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>4 comprehensive modules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>2-day intensive workshop</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Leadership coaching session</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>90-day implementation support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Progress assessment tools</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Choose Professional</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise Package</CardTitle>
                <CardDescription>Complete transformation solution</CardDescription>
                <div className="text-3xl font-bold text-purple-600 mt-4">Custom</div>
                <p className="text-sm text-gray-600">Unlimited participants</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Full curriculum (6+ modules)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Multi-day program</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Executive coaching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>1-year ongoing support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Custom content development</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workplace Culture?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of organizations that have created more inclusive, innovative, and successful workplaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Download DEI Toolkit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
