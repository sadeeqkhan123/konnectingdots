import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Clock,
  Target,
  Brain,
  Heart,
  CheckCircle,
  Star,
  Calendar,
  MessageCircle,
  Award,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function OneOnOneCoachingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-100 text-teal-800 px-4 py-2">Personalized Transformation</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ONE on ONE <span className="text-teal-600">Coaching</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience personalized NLP and Hypnosis sessions designed specifically for your unique goals. Transform
              limiting beliefs, overcome challenges, and unlock your full potential with dedicated one-on-one guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4">
                  Book Your Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 bg-transparent"
                >
                  View Investment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What You'll Experience</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every session is tailored to your specific needs, combining proven NLP techniques with personalized
                hypnosis for maximum impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Brain className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">NLP Techniques</h3>
                  <p className="text-gray-600">
                    Advanced Neuro-Linguistic Programming methods to rewire thought patterns and create lasting
                    behavioral change.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Personalized Hypnosis</h3>
                  <p className="text-gray-600">
                    Custom hypnosis sessions designed for your specific goals, from confidence building to habit
                    transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Goal-Focused Approach</h3>
                  <p className="text-gray-600">
                    Every session is strategically designed to move you closer to your specific objectives and desired
                    outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    Sessions available in-person or virtually, scheduled around your busy lifestyle for maximum
                    convenience.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Safe Environment</h3>
                  <p className="text-gray-600">
                    Confidential, judgment-free space where you can explore and transform at your own pace.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Proven Results</h3>
                  <p className="text-gray-600">
                    Evidence-based techniques with a track record of helping clients achieve breakthrough
                    transformations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For You If */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Perfect For You If You're...</h2>
              <p className="text-xl text-gray-600">
                One-on-one coaching is ideal for individuals ready to make significant personal breakthroughs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Seeking Personal Breakthrough</h4>
                    <p className="text-gray-600">
                      Ready to overcome limiting beliefs and step into your full potential
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Dealing with Specific Challenges</h4>
                    <p className="text-gray-600">Facing anxiety, phobias, confidence issues, or unwanted habits</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Goal-Oriented Individual</h4>
                    <p className="text-gray-600">
                      Have clear objectives and want personalized strategies to achieve them
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Committed to Change</h4>
                    <p className="text-gray-600">Ready to invest time and energy in your personal transformation</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Prefer Personalized Attention</h4>
                    <p className="text-gray-600">Value individualized guidance over group settings</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Busy Professional</h4>
                    <p className="text-gray-600">Need flexible scheduling that works with your demanding lifestyle</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Privacy-Conscious</h4>
                    <p className="text-gray-600">Prefer confidential sessions to explore sensitive topics</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Results-Focused</h4>
                    <p className="text-gray-600">Want measurable outcomes and accelerated progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Session Details & Format</h2>
              <p className="text-xl text-gray-600">Flexible options designed to fit your schedule and preferences.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-teal-200 bg-teal-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <User className="mr-3 h-8 w-8 text-teal-600" />
                    In-Person Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-teal-600" />
                    <span>90 minutes per session</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-teal-600" />
                    <span>Flexible scheduling available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-teal-600" />
                    <span>Private, comfortable office setting</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Experience the full power of NLP and hypnosis in a dedicated, professional environment designed for
                    deep transformation work.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MessageCircle className="mr-3 h-8 w-8 text-blue-600" />
                    Virtual Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>75 minutes per session</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>Available worldwide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <span>High-quality video platform</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Receive the same powerful transformation from the comfort of your own space, with full privacy and
                    convenience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Investment Options</h2>
              <p className="text-xl text-gray-600">Choose the package that best fits your transformation goals.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Single Session */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">Single Session</CardTitle>
                  <p className="text-gray-600">Perfect for trying our approach</p>
                  <div className="text-4xl font-bold text-teal-600 mt-4">$297</div>
                  <p className="text-sm text-gray-500">per session</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>90-minute session (in-person)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>75-minute session (virtual)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Personalized session recording</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Follow-up email support</span>
                  </div>
                  <Link href="/contact" className="block mt-6">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Book Single Session</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Package of 3 */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-teal-200 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">Transformation Package</CardTitle>
                  <p className="text-gray-600">3 sessions for deeper change</p>
                  <div className="text-4xl font-bold text-teal-600 mt-4">$797</div>
                  <p className="text-sm text-gray-500">$266 per session</p>
                  <p className="text-sm text-green-600 font-semibold">Save $94</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>3 comprehensive sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Personalized hypnosis recordings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Email support between sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Progress tracking & adjustments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Bonus: Goal-setting worksheet</span>
                  </div>
                  <Link href="/contact" className="block mt-6">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Start Transformation</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* VIP Package */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2 flex items-center justify-center">
                    <Star className="mr-2 h-6 w-6 text-yellow-600" />
                    VIP Intensive
                  </CardTitle>
                  <p className="text-gray-600">6 sessions for complete transformation</p>
                  <div className="text-4xl font-bold text-yellow-600 mt-4">$1,497</div>
                  <p className="text-sm text-gray-500">$249 per session</p>
                  <p className="text-sm text-green-600 font-semibold">Save $285</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>6 comprehensive sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Custom hypnosis library</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Priority scheduling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>WhatsApp support access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Bonus: 30-day follow-up session</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Bonus: NLP techniques guide</span>
                  </div>
                  <Link href="/contact" className="block mt-6">
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Go VIP</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                All packages include a satisfaction guarantee. Not sure which option is right for you?
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about one-on-one coaching sessions.</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">How long does each session last?</h3>
                  <p className="text-gray-600">
                    In-person sessions are 90 minutes, while virtual sessions are 75 minutes. This allows sufficient
                    time for deep work while maintaining focus and effectiveness.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">What can I expect in my first session?</h3>
                  <p className="text-gray-600">
                    We'll start with a comprehensive consultation to understand your goals, challenges, and desired
                    outcomes. Then we'll begin with foundational NLP techniques tailored to your specific needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">How quickly will I see results?</h3>
                  <p className="text-gray-600">
                    Many clients experience shifts after the first session, with significant changes typically occurring
                    within 3-6 sessions. Results vary based on individual goals and commitment to the process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Is hypnosis safe?</h3>
                  <p className="text-gray-600">
                    Absolutely. Hypnosis is a natural state of focused relaxation. You remain in complete control
                    throughout the session and cannot be made to do anything against your will or values.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Do you offer payment plans?</h3>
                  <p className="text-gray-600">
                    Yes, we offer flexible payment options for our packages. Contact us to discuss arrangements that
                    work with your budget and timeline.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards the breakthrough you've been waiting for. Book your personalized session today
              and start your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4">
                  Book Your Session Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 bg-transparent"
                >
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
