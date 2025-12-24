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
              Professional Certification Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Train the Trainer
              <span className="text-yellow-400"> Certification</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Become a certified trainer and learn to deliver impactful NLP and leadership programs to others. Master
              the art of facilitation and transform lives through teaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Enroll Now
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
                Comprehensive training to become a world-class facilitator and trainer
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Duration</h3>
                  <p className="text-gray-600">5-Day Intensive Program</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Certification</h3>
                  <p className="text-gray-600">Internationally Recognized</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Class Size</h3>
                  <p className="text-gray-600">Maximum 16 Participants</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Master</h2>
              <p className="text-xl text-gray-600">
                Comprehensive skills to become an exceptional trainer and facilitator
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Advanced Facilitation Skills</h3>
                    <p className="text-gray-600">
                      Master the art of engaging audiences, managing group dynamics, and creating transformational
                      learning experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Program Design & Development</h3>
                    <p className="text-gray-600">
                      Learn to create compelling training programs, design learning objectives, and structure content
                      for maximum impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Assessment & Evaluation</h3>
                    <p className="text-gray-600">
                      Develop skills in measuring learning outcomes, providing effective feedback, and continuous
                      program improvement.
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
                    <h3 className="text-xl font-bold mb-2">Adult Learning Principles</h3>
                    <p className="text-gray-600">
                      Understand how adults learn best and apply proven methodologies to enhance knowledge retention and
                      application.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Virtual & Hybrid Training</h3>
                    <p className="text-gray-600">
                      Master online facilitation techniques, virtual engagement strategies, and hybrid learning
                      environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Development</h3>
                    <p className="text-gray-600">
                      Learn to market your training services, price programs effectively, and build a sustainable
                      training business.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">5-Day Curriculum</h2>
              <p className="text-xl text-gray-600">Intensive hands-on training with practical application</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  day: "Day 1",
                  title: "Foundation of Training Excellence",
                  topics: [
                    "Adult Learning Principles",
                    "Training Styles & Methodologies",
                    "Audience Analysis",
                    "Learning Objectives",
                  ],
                },
                {
                  day: "Day 2",
                  title: "Program Design & Content Development",
                  topics: [
                    "Curriculum Design",
                    "Content Structuring",
                    "Interactive Activities",
                    "Resource Development",
                  ],
                },
                {
                  day: "Day 3",
                  title: "Advanced Facilitation Techniques",
                  topics: ["Group Dynamics", "Difficult Situations", "Engagement Strategies", "Virtual Facilitation"],
                },
                {
                  day: "Day 4",
                  title: "Assessment & Continuous Improvement",
                  topics: ["Evaluation Methods", "Feedback Techniques", "Program Optimization", "ROI Measurement"],
                },
                {
                  day: "Day 5",
                  title: "Business Development & Certification",
                  topics: ["Marketing Your Services", "Pricing Strategies", "Client Relations", "Final Assessment"],
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Benefits</h2>
              <p className="text-xl text-gray-600">What you gain from this comprehensive certification program</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "International Certification",
                  description: "Receive globally recognized Train the Trainer certification",
                },
                {
                  icon: BookOpen,
                  title: "Complete Training Materials",
                  description: "Access to all training materials, templates, and resources",
                },
                {
                  icon: Users,
                  title: "Ongoing Support",
                  description: "12 months of post-certification support and mentoring",
                },
                {
                  icon: Calendar,
                  title: "Flexible Scheduling",
                  description: "Multiple program dates throughout the year",
                },
                {
                  icon: Globe,
                  title: "Online & In-Person Options",
                  description: "Choose from virtual, in-person, or hybrid formats",
                },
                {
                  icon: TrendingUp,
                  title: "Career Advancement",
                  description: "Open doors to new opportunities in training and development",
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
              Join our next cohort and transform your career in training and development
            </p>

            <div className="bg-white/10 rounded-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Program Investment</h3>
                  <div className="space-y-2">
                    <p className="text-blue-100">Early Bird: $2,997 (Save $500)</p>
                    <p className="text-blue-100">Regular Price: $3,497</p>
                    <p className="text-blue-100">Payment Plans Available</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Next Program Dates</h3>
                  <div className="space-y-2">
                    <p className="text-blue-100">March 15-19, 2024</p>
                    <p className="text-blue-100">June 10-14, 2024</p>
                    <p className="text-blue-100">September 16-20, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Enroll Now - Early Bird
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
