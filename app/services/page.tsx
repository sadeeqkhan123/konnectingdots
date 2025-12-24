import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Award,
  Heart,
  TrendingUp,
  CheckCircle,
  Clock,
  MapPin,
  Video,
  Star,
  ArrowRight,
  Target,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-800">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Life with Our
              <span className="text-teal-600"> Expert Programs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose from our comprehensive range of NLP, Hypnosis, and Corporate Training programs designed to unlock
              your potential and drive success
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="one-on-one" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
              <TabsTrigger value="one-on-one" className="text-xs lg:text-sm">
                ONE on ONE
              </TabsTrigger>
              <TabsTrigger value="corporate" className="text-xs lg:text-sm">
                Corporate
              </TabsTrigger>
              <TabsTrigger value="dei" className="text-xs lg:text-sm">
                DEI Training
              </TabsTrigger>
              <TabsTrigger value="train-trainer" className="text-xs lg:text-sm">
                Train Trainer
              </TabsTrigger>
              <TabsTrigger value="practitioner" className="text-xs lg:text-sm">
                Practitioner
              </TabsTrigger>
            </TabsList>

            {/* ONE on ONE Coaching */}
            <TabsContent value="one-on-one" id="one-on-one">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-10 w-10 text-yellow-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">ONE on ONE Coaching</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Experience personalized transformation through individual NLP and Hypnosis sessions tailored
                    specifically to your unique goals and challenges.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-yellow-600" />
                        Who It's For
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Individuals seeking personal breakthrough
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Professionals wanting to enhance performance
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Anyone struggling with limiting beliefs
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          People seeking to overcome phobias or anxiety
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-yellow-600" />
                        Duration & Format
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span>60-90 minutes per session</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span>In-person or Online</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Video className="h-5 w-5 text-purple-600" />
                          <span>Flexible scheduling</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-teal-600" />
                          <span>3-12 sessions typically</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                      Book Your Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-6">
                  <Card className="border-yellow-200 bg-yellow-50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="mr-2 h-5 w-5 text-yellow-600" />
                        Success Story
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic mb-4">
                        "After just 5 sessions, I overcame my 20-year fear of public speaking and got promoted to a
                        leadership role that requires regular presentations."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center mr-3">
                          <span className="text-yellow-800 font-bold text-sm">AL</span>
                        </div>
                        <div>
                          <p className="font-semibold">Amanda Lee</p>
                          <p className="text-sm text-gray-600">Sales Manager</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>What You'll Experience</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Initial Assessment:</strong> Comprehensive evaluation of your goals and challenges
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Customized Techniques:</strong> Personalized NLP and hypnosis methods
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Ongoing Support:</strong> Resources and follow-up to maintain progress
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Measurable Results:</strong> Clear tracking of your transformation journey
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Corporate Training */}
            <TabsContent value="corporate" id="corporate">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                    <Briefcase className="h-10 w-10 text-teal-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Corporate Training Programs</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Transform your organization's culture and performance with cutting-edge NLP techniques and
                    leadership development programs.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-teal-600" />
                        Who It's For
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Leadership teams and executives
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Sales and customer service teams
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          HR and people development professionals
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Organizations seeking cultural transformation
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-teal-600" />
                        Duration & Format
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span>Half-day to multi-day programs</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span>Onsite delivery</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Video className="h-5 w-5 text-purple-600" />
                          <span>Online and hybrid options</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-teal-600" />
                          <span>Customized to your needs</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                      Request Proposal
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-6">
                  <Card className="border-teal-200 bg-teal-50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="mr-2 h-5 w-5 text-teal-600" />
                        Case Study
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic mb-4">
                        "Our leadership team's communication improved by 60% and we saw a $2.3M increase in quarterly
                        revenue after the NLP training program."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center mr-3">
                          <span className="text-teal-800 font-bold text-sm">JD</span>
                        </div>
                        <div>
                          <p className="font-semibold">John Davidson</p>
                          <p className="text-sm text-gray-600">CEO, Fortune 500 Company</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Program Components</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Leadership Excellence:</strong> Advanced communication and influence skills
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Team Dynamics:</strong> Building high-performance collaborative teams
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Change Management:</strong> Leading organizational transformation
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Performance Optimization:</strong> Maximizing individual and team potential
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* DEI Training */}
            <TabsContent value="dei" id="dei">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Heart className="h-10 w-10 text-purple-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Diversity, Equity & Inclusion Training</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Build truly inclusive workplaces through comprehensive DEI programs that create lasting cultural
                    change and drive business results.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-purple-600" />
                        Who It's For
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Organizations committed to inclusive culture
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Leadership teams and managers
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          HR and diversity professionals
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Companies seeking to improve employee engagement
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-purple-600" />
                        Duration & Format
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span>1-3 day intensive programs</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span>Interactive workshops</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Video className="h-5 w-5 text-purple-600" />
                          <span>Virtual and in-person options</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-teal-600" />
                          <span>Follow-up coaching included</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-6">
                  <Card className="border-purple-200 bg-purple-50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="mr-2 h-5 w-5 text-purple-600" />
                        Impact Story
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic mb-4">
                        "Our DEI training transformed our workplace culture. Employee satisfaction increased by 75% and
                        we became recognized as a top inclusive employer."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                          <span className="text-purple-800 font-bold text-sm">LT</span>
                        </div>
                        <div>
                          <p className="font-semibold">Lisa Thompson</p>
                          <p className="text-sm text-gray-600">Chief Diversity Officer</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Training Modules</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Unconscious Bias:</strong> Identifying and addressing hidden biases
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Inclusive Leadership:</strong> Leading diverse teams effectively
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Cultural Competency:</strong> Building cross-cultural understanding
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Systemic Change:</strong> Creating sustainable inclusive practices
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Train the Trainer */}
            <TabsContent value="train-trainer" id="train-trainer">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="h-10 w-10 text-blue-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Train the Trainer Certification</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Become a certified trainer and learn to deliver impactful NLP and personal development programs to
                    others with confidence and expertise.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-blue-600" />
                        Who It's For
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Existing coaches and trainers
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Corporate learning professionals
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Consultants and facilitators
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Anyone wanting to teach NLP techniques
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-blue-600" />
                        Duration & Format
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span>3-day intensive program</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span>In-person delivery</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Video className="h-5 w-5 text-purple-600" />
                          <span>Practice sessions included</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-teal-600" />
                          <span>Official certification</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href="/events">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      View Training Dates
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-6">
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="mr-2 h-5 w-5 text-blue-600" />
                        Graduate Success
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic mb-4">
                        "The Train the Trainer program gave me the confidence and skills to launch my own successful
                        training business. I now train executives at Fortune 500 companies."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-800 font-bold text-sm">JM</span>
                        </div>
                        <div>
                          <p className="font-semibold">James Martinez</p>
                          <p className="text-sm text-gray-600">Certified Corporate Trainer</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Certification Includes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Advanced Facilitation:</strong> Master the art of engaging group dynamics
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Program Design:</strong> Create compelling training curricula
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Business Development:</strong> Build your training practice
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Ongoing Support:</strong> Alumni network and continued education
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* NLP Practitioner */}
            <TabsContent value="practitioner" id="practitioner">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <GraduationCap className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">NLP Practitioner & Master Practitioner</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Achieve internationally recognized certification in Neuro-Linguistic Programming through our
                    comprehensive Practitioner and Master Practitioner programs.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-green-600" />
                        Who It's For
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Aspiring life coaches and therapists
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Business professionals seeking edge
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Anyone passionate about personal development
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Existing practitioners wanting mastery
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-green-600" />
                        Duration & Format
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span>7-day intensive programs</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span>Luxury resort venues</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Video className="h-5 w-5 text-purple-600" />
                          <span>Hybrid learning options</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-teal-600" />
                          <span>International certification</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/events">
                      <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                        View Upcoming Programs
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/member-login">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        Member Portal
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="mr-2 h-5 w-5 text-green-600" />
                        Practitioner Success
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic mb-4">
                        "The NLP Practitioner certification changed my life completely. I now run a successful coaching
                        practice and help hundreds of people achieve their dreams."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                          <span className="text-green-800 font-bold text-sm">RK</span>
                        </div>
                        <div>
                          <p className="font-semibold">Rachel Kim</p>
                          <p className="text-sm text-gray-600">Certified NLP Coach</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Practitioner Level</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Core NLP techniques
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Communication mastery
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Goal achievement strategies
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Basic coaching skills
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Master Level</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Advanced modeling
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Timeline therapy
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Unconscious patterns
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Master-level coaching
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the program that's right for you and take the first step toward unlocking your full potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/events">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-800 bg-transparent"
              >
                View Training Calendar
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
