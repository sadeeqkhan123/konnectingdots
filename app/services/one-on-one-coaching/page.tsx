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
            <Badge className="mb-6 bg-teal-100 text-teal-800 px-4 py-2">Personalized NLP & Hypnosis Sessions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              One-on-One <span className="text-teal-600">Coaching</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Do you ever feel stuck, even though you know you are capable of more? Do certain fears, habits, or
              thoughts keep repeating no matter how hard you try to change them? If you are looking for real change,
              one-on-one coaching provides a safe, focused space to move forward with clarity and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4">
                  Book Your FREE Call (30 min)
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Happens in Coaching?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each session is practical, focused, and tailored to you. We work directly with the patterns that shape
                your thoughts, emotions, and behavior.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Brain className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Understanding You First</h3>
                  <p className="text-gray-600">
                    We start by understanding your situation, challenges, and what you truly want to change.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Targeted Techniques</h3>
                  <p className="text-gray-600">
                    Using NLP and hypnosis, we work directly with subconscious patterns influencing your responses.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Support Between Sessions</h3>
                  <p className="text-gray-600">
                    You may receive simple exercises, reflections, or tools to support your progress.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Real, Noticeable Change</h3>
                  <p className="text-gray-600">
                    Clients often experience clearer thinking, emotional relief, and improved confidence and control.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Safe, Focused Space</h3>
                  <p className="text-gray-600">
                    A confidential environment where you can explore what is holding you back without judgment.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Tailored Sessions</h3>
                  <p className="text-gray-600">
                    Sessions are customized to your goals, making progress practical and measurable.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who Is This For?</h2>
              <p className="text-xl text-gray-600">This coaching is for you if:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Breaking Through Blocks</h4>
                    <p className="text-gray-600">You want to break through mental or emotional blocks</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Self-Doubt or Fear</h4>
                    <p className="text-gray-600">You feel limited by self-doubt, fear, or past experiences</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Emotional Control</h4>
                    <p className="text-gray-600">You want better control over your emotions and reactions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Confidence & Performance</h4>
                    <p className="text-gray-600">You want to improve confidence, focus, or performance</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Anxiety or Unwanted Habits</h4>
                    <p className="text-gray-600">You are dealing with anxiety, phobias, stress, or unwanted habits</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Seeking Real Change</h4>
                    <p className="text-gray-600">You want more than motivation or advice</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Personalized Support</h4>
                    <p className="text-gray-600">You want tailored guidance focused on your goals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Ready to Start</h4>
                    <p className="text-gray-600">You are ready to work on yourself at a deeper level</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How the Sessions Work</h2>
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
                    <span>60-90 minutes per session</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-teal-600" />
                    <span>Flexible scheduling available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-teal-600" />
                    <span>Safe, focused in-person environment</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    In-person sessions offer a dedicated space for deep, focused work on your goals.
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
                    <span>60-90 minutes per session</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>Available worldwide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <span>Secure online platform</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Receive the same powerful transformation from the comfort of your own space.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Investment</h2>
              <p className="text-xl text-gray-600">Clear, simple pricing with package options available.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Single Session */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">Single Session</CardTitle>
                  <p className="text-gray-600">Focused, personalized session</p>
                  <div className="text-4xl font-bold text-teal-600 mt-4">$50</div>
                  <p className="text-sm text-gray-500">per session</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>60-90 minutes per session</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>In-person or online</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Practical, focused work</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Tailored to your goals</span>
                  </div>
                  <Link href="/contact" className="block mt-6">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Book Single Session</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Package Options */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-teal-200 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1">
                  Packages Available
                </Badge>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">Session Packages</CardTitle>
                  <p className="text-gray-600">Usually 4-12 sessions</p>
                  <div className="text-4xl font-bold text-teal-600 mt-4">Custom</div>
                  <p className="text-sm text-gray-500">Based on your goals</p>
                  <p className="text-sm text-green-600 font-semibold">Designed for lasting change</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Flexible plan based on your goals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Progress tracking and adjustments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Support between sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Tailored exercises and tools</span>
                  </div>
                  <Link href="/contact" className="block mt-6">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Request Package Details</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Free Call */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2 flex items-center justify-center">
                    <Star className="mr-2 h-6 w-6 text-yellow-600" />
                    Free 30-Min Call
                  </CardTitle>
                  <p className="text-gray-600">Clarity session to map your goals</p>
                  <div className="text-4xl font-bold text-yellow-600 mt-4">FREE</div>
                  <p className="text-sm text-gray-500">30 minutes</p>
                  <p className="text-sm text-green-600 font-semibold">No commitment</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Discuss your goals and challenges</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Get a recommended session plan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Understand if this is right for you</span>
                  </div>
                  <Link href="/contact" className="block mt-6">
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Book Free Call</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Not sure which option is right for you? We will help you choose the best path.
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
              <p className="text-xl text-gray-600">Everything you need to know about one-on-one coaching.</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">How long does each session last?</h3>
                  <p className="text-gray-600">
                    Sessions are typically 60-90 minutes, depending on your goals and the work we are doing together.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">What can I expect in my first session?</h3>
                  <p className="text-gray-600">
                    We start by understanding your situation, challenges, and goals, then begin targeted NLP and
                    hypnosis techniques tailored to you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">How quickly will I see results?</h3>
                  <p className="text-gray-600">
                    Most clients see noticeable change over 4-12 sessions, depending on goals and commitment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Is hypnosis safe?</h3>
                  <p className="text-gray-600">
                    Yes. Hypnosis is a natural, focused state and you remain in control throughout the session.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">What is the investment?</h3>
                  <p className="text-gray-600">Investment is 50 USD per session. Packages are available.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin?</h2>
            <p className="text-xl mb-8 opacity-90">
              If you are ready to work on yourself at a deeper level and create lasting change, one-on-one coaching is
              the right place to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4">
                  Book Your FREE Call (30 min)
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
