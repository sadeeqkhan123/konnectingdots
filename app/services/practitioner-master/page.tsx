import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Award, CheckCircle, Star, BookOpen, Target, Users, Globe, Zap, Heart } from "lucide-react"
import BookingModal from "@/components/booking-modal"
import Link from "next/link"

export default function PractitionerMasterPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-500/30">
              NLP & Hypnotherapy Certification
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              NLP & Hypnotherapy Practitioner
              <span className="text-yellow-400"> & Master Practitioner</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Become a confident, skilled, and internationally certified NLP and Hypnotherapy Practitioner. This
              program is designed for deep personal transformation and professional practice with live training and
              ongoing mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Sign Up Now
                </Button>
              </BookingModal>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent"
              >
                Request Full Program Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Levels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Breakdown</h2>
              <p className="text-xl text-gray-600">
                Practitioner and Master Practitioner levels within one comprehensive 4-month journey
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* NLP Practitioner */}
              <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">NLP & Hypnosis Practitioner</h3>
                    <p className="text-gray-600">Foundations and practical application</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Foundations of NLP and communication</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Understanding mind, emotions, and behavior patterns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Hypnosis and hypnotherapy fundamentals</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Conducting safe and ethical client sessions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Live demonstrations and guided practice</span>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">Included</div>
                    <p className="text-gray-600">Part of the 4-month program</p>
                  </div>

                  <BookingModal>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Request Practitioner Details
                    </Button>
                  </BookingModal>
                </CardContent>
              </Card>

              {/* Master Practitioner */}
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-500 text-black font-semibold px-4 py-1">Most Popular</Badge>
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Master Practitioner</h3>
                    <p className="text-gray-600">Advanced integration and mastery</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span>Advanced NLP patterns and modeling</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span>Deep subconscious change work</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span>Mastery in hypnosis and hypnotherapy techniques</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span>Working with complex client issues</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span>Practitioner identity, confidence, and ethics</span>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">Included</div>
                    <p className="text-gray-600">Part of the 4-month program</p>
                  </div>

                  <BookingModal>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Request Master Details
                    </Button>
                  </BookingModal>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What is NLP */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What is NLP & Hypnotherapy?</h2>
              <p className="text-xl text-gray-600">
                A practical approach to understanding the mind, communication, and change
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">The Science of Success</h3>
                <p className="text-gray-700 mb-6">
                  NLP is the study of the structure of subjective experience and what can be calculated from that. It's
                  about understanding how we think, communicate, and behave, and how we can change these patterns to
                  achieve our desired outcomes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Brain className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Neuro</h4>
                      <p className="text-gray-600">How we use our nervous system to process information</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Linguistic</h4>
                      <p className="text-gray-600">How we use language to make sense of the world</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Programming</h4>
                      <p className="text-gray-600">How we sequence our actions to achieve our goals</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">NLP Applications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Personal Development",
                    "Business & Leadership",
                    "Therapy & Coaching",
                    "Education & Training",
                    "Sales & Persuasion",
                    "Sports Performance",
                    "Health & Wellness",
                    "Relationships",
                  ].map((application, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Zap className="h-4 w-4" />
                      <span className="text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Practitioner Level Focus</h2>
              <p className="text-xl text-gray-600">Core foundations and practical application</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Foundations of NLP",
                  topics: ["History & Principles", "Presuppositions", "Sensory Acuity", "Calibration"],
                },
                {
                  title: "Rapport & Communication",
                  topics: ["Building Rapport", "Matching & Mirroring", "Pacing & Leading", "Representational Systems"],
                },
                {
                  title: "Language Patterns",
                  topics: ["Meta Model", "Milton Model", "Presuppositions", "Embedded Commands"],
                },
                {
                  title: "Anchoring Techniques",
                  topics: ["State Management", "Resource Anchoring", "Chaining Anchors", "Collapsing Anchors"],
                },
                {
                  title: "Submodalities",
                  topics: [
                    "Visual Submodalities",
                    "Auditory Submodalities",
                    "Kinesthetic Submodalities",
                    "Change Work",
                  ],
                },
                {
                  title: "Timeline Therapy",
                  topics: ["Time Line Concepts", "Healing Past Events", "Creating Future Goals", "Releasing Emotions"],
                },
              ].map((module, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-600">{module.title}</h3>
                    <div className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Master Practitioner Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Master Practitioner Focus</h2>
              <p className="text-xl text-gray-600">Advanced mastery, integration, and professional confidence</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Advanced Language Patterns",
                  topics: [
                    "Sleight of Mouth",
                    "Advanced Milton Model",
                    "Conversational Hypnosis",
                    "Metaphors & Stories",
                  ],
                },
                {
                  title: "Modeling Excellence",
                  topics: [
                    "Modeling Methodology",
                    "Unconscious Competence",
                    "Strategy Elicitation",
                    "Installing Excellence",
                  ],
                },
                {
                  title: "Advanced Submodalities",
                  topics: ["Critical Submodalities", "Belief Change", "Value Elicitation", "Hierarchy of Ideas"],
                },
                {
                  title: "Meta Programs",
                  topics: ["Personality Patterns", "Motivation Filters", "Decision Making", "Influence Patterns"],
                },
                {
                  title: "Advanced Anchoring",
                  topics: [
                    "Spatial Anchoring",
                    "Gestalt Anchoring",
                    "Advanced State Management",
                    "Resource Installation",
                  ],
                },
                {
                  title: "Therapeutic Applications",
                  topics: ["Trauma Resolution", "Phobia Cure", "Parts Integration", "Reimprinting"],
                },
              ].map((module, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-600">{module.title}</h3>
                    <div className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Outcomes of the Program</h2>
              <p className="text-xl text-gray-600">
                Think and respond with clarity, work professionally with clients, and create deep, lasting change
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Clarity & Confidence",
                  description: "Think, communicate, and respond with greater clarity and confidence",
                },
                {
                  icon: Users,
                  title: "Professional Practice",
                  description: "Work professionally with clients using NLP and Hypnotherapy",
                },
                {
                  icon: Target,
                  title: "Lasting Change",
                  description: "Create deep, lasting change for yourself and others",
                },
                {
                  icon: Heart,
                  title: "Ongoing Support",
                  description: "Mentorship, revision sessions, and ongoing learning support",
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
              <p className="text-xl text-gray-600">Real transformations from our NLP certification programs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Jennifer Martinez",
                  role: "Life Coach",
                  program: "Master Practitioner Graduate",
                  testimonial:
                    "NLP gave me the tools to help my clients achieve breakthrough results. My coaching practice has tripled since certification.",
                },
                {
                  name: "Thomas Anderson",
                  role: "Sales Director",
                  program: "Practitioner Graduate",
                  testimonial:
                    "The communication skills I learned increased my sales by 150%. NLP is a game-changer for anyone in business.",
                },
                {
                  name: "Dr. Lisa Chen",
                  role: "Therapist",
                  program: "Master Practitioner Graduate",
                  testimonial:
                    "NLP techniques have revolutionized my therapy practice. I can help clients achieve results faster than ever before.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6">"{testimonial.testimonial}"</p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <Badge className="mt-2 bg-green-100 text-green-800 text-xs">{testimonial.program}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification & Accreditation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Certification & Recognition</h2>
            <p className="text-xl text-gray-600 mb-8">
              Upon completion, you receive triple certification and eligibility for international membership
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">ABH</h3>
                  <p className="text-sm text-gray-600">American Board of Hypnotherapy</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">PBH</h3>
                  <p className="text-sm text-gray-600">Professional Board of Hypnotherapy</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Konnecting Dots Pakistan</h3>
                  <p className="text-sm text-gray-600">Eligible for ANLP International CIC (UK)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Transformation Journey</h2>
            <p className="text-xl mb-8 text-green-100">
              Invest in your skills and your future practice with a complete pathway from learning to mastery
            </p>

            <div className="bg-white/10 rounded-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4">Investment & Payment Options</h3>
                  <div className="space-y-2">
                    <p className="text-green-100">Total Investment: PKR 350,000</p>
                    <p className="text-green-100">Special Program Fee: PKR 300,000</p>
                    <p className="text-green-100">Repeat the program free for 3 years</p>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4">Additional Support</h3>
                  <div className="space-y-2">
                    <p className="text-green-100">Dedicated mentorship and 1:1 support sessions</p>
                    <p className="text-green-100">Start coaching early after training</p>
                    <p className="text-green-100">Regular revision and recap sessions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Sign Up Now
                </Button>
              </BookingModal>
              <Link href="https://lnkd.in/dbNTGHgH" target="_blank" rel="noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                >
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
