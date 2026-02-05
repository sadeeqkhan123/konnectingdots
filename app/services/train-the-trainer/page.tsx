import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  DollarSign,
  Globe,
} from "lucide-react"
import BookingModal from "@/components/booking-modal"

export default function TrainTheTrainerPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
              NLP • Hypnosis • Corporate Trainer Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Train the Trainer
              <span className="text-yellow-400"> Certification</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Are you ready to move from learning techniques to professionally delivering trainings with confidence?
              This comprehensive, practice-based program prepares you to train individuals, groups, and organizations
              with credibility and skill.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Apply Now
                </Button>
              </BookingModal>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
              >
                Download Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Overview</h2>
              <p className="text-xl text-gray-600">
                A complete pathway to become a certified trainer in NLP, Hypnosis, and corporate development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Duration</h3>
                  <p className="text-gray-600">03 Month Program</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Certifications</h3>
                  <p className="text-gray-600">NLP, Hypnosis, and Corporate Trainer</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Training Style</h3>
                  <p className="text-gray-600">Highly practical and experiential</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Will Learn</h2>
              <p className="text-xl text-gray-600">
                Trainer skills, NLP & hypnosis training mastery, and corporate trainer competencies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Trainer Skills & Delivery</h3>
                    <p className="text-gray-600">
                      Trainer mindset, adult learning principles, facilitation skills, and handling resistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">NLP & Hypnosis Training Skills</h3>
                    <p className="text-gray-600">
                      Teach NLP concepts clearly, demonstrate techniques, and guide safe practice sessions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Corporate Trainer Competencies</h3>
                    <p className="text-gray-600">
                      Design corporate training programs, customize content, and maintain professional standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Group Facilitation Skills</h3>
                    <p className="text-gray-600">
                      Manage different learning styles, group energy, and engagement with confidence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Program Design</h3>
                    <p className="text-gray-600">
                      Build professional training content and customize for organizations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Presence & Confidence</h3>
                    <p className="text-gray-600">
                      Build voice, stage presence, and a strong trainer identity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">3-Month Program Structure</h2>
              <p className="text-xl text-gray-600">Highly practical and experiential learning with live practice</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  day: "Month 1",
                  title: "Trainer Skills & Delivery",
                  topics: [
                    "Trainer mindset and presence",
                    "Adult learning principles",
                    "Group facilitation skills",
                    "Handling questions and resistance",
                  ],
                },
                {
                  day: "Month 2",
                  title: "NLP & Hypnosis Training Skills",
                  topics: [
                    "Teaching NLP concepts clearly",
                    "Demonstrating NLP techniques",
                    "Training hypnosis safely and ethically",
                    "Guiding practice sessions",
                  ],
                },
                {
                  day: "Month 3",
                  title: "Corporate Trainer Competencies",
                  topics: [
                    "Designing corporate training programs",
                    "Delivering leadership workshops",
                    "Customizing content for organizations",
                    "Professional behavior and ethics",
                  ],
                },
              ].map((day, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <Badge className="mb-2 bg-blue-100 text-blue-800">{day.day}</Badge>
                        <h3 className="text-xl font-bold">{day.title}</h3>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                      {day.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
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

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Receive</h2>
              <p className="text-xl text-gray-600">Certifications, memberships, and a complete trainer toolkit</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Three Certifications",
                  description: "NLP Trainer, Hypnosis Trainer, and Corporate Trainer",
                },
                {
                  icon: BookOpen,
                  title: "Trainer Toolkit",
                  description: "Ready-to-use content, slides, manuals, and exercises",
                },
                {
                  icon: Users,
                  title: "Professional Memberships",
                  description: "ANLP, ABH, and PBH memberships (1 year each)",
                },
                {
                  icon: Calendar,
                  title: "Live Practice & Feedback",
                  description: "Demonstrations, practice sessions, and feedback",
                },
                {
                  icon: Globe,
                  title: "Ongoing Support",
                  description: "Mentoring and guidance after certification",
                },
                {
                  icon: TrendingUp,
                  title: "Positioning Support",
                  description: "Help to start and grow your training practice",
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-blue-600" />
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">Hear from our certified trainers</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Michael Chen",
                  role: "Corporate Training Manager",
                  company: "Fortune 500 Company",
                  testimonial:
                    "This program transformed my ability to deliver impactful training. The practical skills and certification opened up incredible career opportunities.",
                },
                {
                  name: "Sarah Williams",
                  role: "Independent Trainer",
                  company: "Leadership Development",
                  testimonial:
                    "I went from being nervous about public speaking to confidently training executives. The support and materials are exceptional.",
                },
                {
                  name: "David Rodriguez",
                  role: "HR Director",
                  company: "Tech Startup",
                  testimonial:
                    "The Train the Trainer program gave me the skills to build our entire internal training program. ROI was immediate and substantial.",
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
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Enrollment */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become a Certified Trainer?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Step into your role as a professional trainer with credibility, confidence, and complete support
            </p>

            <div className="bg-white/10 rounded-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Program Investment</h3>
                  <div className="space-y-2">
                    <p className="text-blue-100">USD 5,000</p>
                    <p className="text-blue-100">Includes certifications, memberships, and training materials</p>
                    <p className="text-blue-100">Ongoing mentoring and guidance included</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Apply or Request Details</h3>
                  <div className="space-y-2">
                    <p className="text-blue-100">Email: yousif.mangi@konnectingdots.org</p>
                    <p className="text-blue-100">In-person training</p>
                    <p className="text-blue-100">Practice-based program</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Apply Now
                </Button>
              </BookingModal>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Schedule Info Session
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
