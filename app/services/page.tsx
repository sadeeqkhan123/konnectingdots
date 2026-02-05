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
                One-on-One
              </TabsTrigger>
              <TabsTrigger value="corporate" className="text-xs lg:text-sm">
                Corporate
              </TabsTrigger>
              <TabsTrigger value="dei" className="text-xs lg:text-sm">
                DEI Training
              </TabsTrigger>
              <TabsTrigger value="train-trainer" className="text-xs lg:text-sm">
                Train the Trainer
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">One-on-One Coaching</h2>
                  <p className="text-xl text-gray-600 mb-4">Personalized NLP & Hypnosis Sessions</p>
                  <div className="space-y-4 text-gray-600 mb-8">
                    <p className="text-lg">
                      Do you ever feel stuck, even though you know you are capable of more? Do certain fears, habits, or
                      thoughts keep repeating no matter how hard you try to change them?
                    </p>
                    <p className="text-lg">
                      Are you looking for real change, not just motivation or advice? One-on-one coaching is a safe,
                      focused space where we work directly on what is holding you back and help you move forward with
                      clarity and confidence.
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-yellow-600" />
                        Who Is This For?
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          You want to break through mental or emotional blocks
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          You feel limited by self-doubt, fear, or past experiences
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          You want better control over your emotions and reactions
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          You want to improve confidence, focus, or performance
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          You are dealing with anxiety, phobias, stress, or unwanted habits
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-yellow-600" />
                        How the Sessions Work
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span>Session length: 60-90 minutes</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span>Mode: In-person or online</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Video className="h-5 w-5 text-purple-600" />
                          <span>Schedule: Flexible</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-teal-600" />
                          <span>Sessions: Usually 4-12</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Star className="h-5 w-5 text-yellow-600" />
                          <span>Investment: 50 USD per session</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span>Packages are available</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-4">Each session is practical, focused, and tailored to you.</p>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                      Book Your FREE Call (30 min)
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-6">
                  <Card className="border-yellow-200 bg-yellow-50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="mr-2 h-5 w-5 text-yellow-600" />
                        A Safe, Focused Space
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        One-on-one coaching is a safe, focused space where we work directly on what is holding you back
                        and help you move forward with clarity and confidence.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>What Happens in Coaching?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Understanding You First:</strong> We start by understanding your situation,
                            challenges, and what you truly want to change.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Targeted Techniques:</strong> Using NLP and hypnosis, we work with the subconscious
                            patterns that influence your thoughts, emotions, and behavior.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Support Between Sessions:</strong> You may receive simple exercises, reflections, or
                            tools to support your progress.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Real, Noticeable Change:</strong> Clients often experience clearer thinking,
                            emotional relief, increased confidence, and better control over their responses.
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Corporate Training & Organizational Development Programs
                  </h2>
                  <p className="text-xl text-gray-600 mb-4">NLP, Leadership, Coaching & Workplace Excellence</p>
                  <div className="space-y-4 text-gray-600 mb-8">
                    <p className="text-lg">
                      Are your managers technically strong but struggling with people management? Do communication gaps
                      exist between leadership, managers, and frontline teams? Is stress, conflict, or disengagement
                      affecting performance and culture?
                    </p>
                    <p className="text-lg">
                      Our corporate programs are designed to build strong leaders, confident managers, emotionally
                      intelligent teams, and healthy workplace cultures using practical NLP-based tools and real-world
                      coaching approaches.
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-teal-600" />
                        Who These Programs Are For
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Senior leadership and executives
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          First-time and mid-level managers
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Team leaders and supervisors
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          HR, L&D, and people development teams
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Sales, customer service, and operations teams
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Organizations seeking performance and cultural transformation
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-teal-600" />
                        Program Format
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span>Duration: Half-day, full-day, or multi-day</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span>Delivery: Onsite, online, or hybrid</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Video className="h-5 w-5 text-purple-600" />
                          <span>Design: Fully customized</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-teal-600" />
                          <span>Methodology: Interactive and action-oriented</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                      Request a Proposal
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-600 mt-4">
                    Email:{" "}
                    <a href="mailto:yousif.mangi@konnectingdots.org" className="text-teal-700 underline">
                      yousif.mangi@konnectingdots.org
                    </a>
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-teal-200 bg-teal-50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="mr-2 h-5 w-5 text-teal-600" />
                        Why Organizations Choose These Programs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          Practical tools, not just theory
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          NLP-based behavior change methods
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          Customized to business realities
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          Measurable impact on performance and culture
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          Sustainable change beyond the training room
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Program Tracks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>Leadership & management development</div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>Communication excellence programs</div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>NLP-based communication & influence</div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>Emotional intelligence & wellbeing</div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>Anger, stress & pressure management</div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>Performance, productivity & mindset</div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>Diversity, equity & inclusion (DEI)</div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>Coaching at the workplace</div>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Train the Trainer Certification</h2>
                  <p className="text-xl text-gray-600 mb-4">NLP • Hypnosis • Corporate Trainer Program</p>
                  <div className="space-y-4 text-gray-600 mb-8">
                    <p className="text-lg">
                      Are you ready to move from learning techniques to professionally delivering trainings with
                      confidence? Do you want to work as a certified trainer in NLP, Hypnosis, and corporate development
                      programs?
                    </p>
                    <p className="text-lg">
                      This Train the Trainer Certification is a comprehensive, practice-based program designed to
                      prepare you to train individuals, groups, and organizations with credibility and skill.
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-blue-600" />
                        Who This Program Is For
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Existing coaches, trainers, and facilitators
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Corporate learning and development professionals
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Consultants and HR trainers
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          NLP & Hypnosis practitioners who want to teach
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Anyone ready to step into a professional trainer role
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-blue-600" />
                        Program Structure
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span>Duration: 03 Month Program</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span>Format: In-person training</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Video className="h-5 w-5 text-purple-600" />
                          <span>Training Style: Practical and experiential</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-teal-600" />
                          <span>Practice: Live demos and feedback</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Star className="h-5 w-5 text-yellow-600" />
                          <span>Support: Ongoing mentoring</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-4">
                        Investment: USD 5,000 (includes certifications, memberships, training materials, and ongoing
                        support).
                      </p>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-600 mt-4">
                    Apply now or request full program details at{" "}
                    <a href="mailto:yousif.mangi@konnectingdots.org" className="text-blue-700 underline">
                      yousif.mangi@konnectingdots.org
                    </a>
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="mr-2 h-5 w-5 text-blue-600" />
                        What You Will Learn
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-700">
                        <li>
                          <strong>Trainer Skills & Delivery:</strong> trainer mindset, adult learning, facilitation,
                          handling resistance, and stage presence.
                        </li>
                        <li>
                          <strong>NLP & Hypnosis Training Skills:</strong> teach concepts clearly, demonstrate techniques,
                          and guide safe practice.
                        </li>
                        <li>
                          <strong>Corporate Trainer Competencies:</strong> design corporate programs, customize content,
                          and maintain professional standards.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>What You Receive</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Three Professional Certifications:</strong> NLP Trainer, Hypnosis Trainer, and
                            Corporate Trainer.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Professional Memberships:</strong> ANLP, ABH, and PBH memberships (1 year each).
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Complete Trainer Toolkit:</strong> ready-to-use content, slides, manuals, and
                            exercises.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <strong>Ongoing Support:</strong> mentoring and guidance to grow your training practice.
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    NLP & Hypnotherapy Practitioner & Master Practitioner Certification
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Become a confident, skilled, and internationally certified NLP and Hypnotherapy Practitioner. This
                    comprehensive program is designed for deep personal transformation and professional practice,
                    combining practical skills, live training, and ongoing mentorship.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-green-600" />
                        Who This Program Is For
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Aspiring life coaches, therapists, and healers
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Business professionals seeking a mindset and performance edge
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Individuals passionate about personal growth and self-mastery
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Existing practitioners ready to deepen skills and credibility
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-green-600" />
                        Program Structure & Duration
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span>Total Duration: 4 Months (flexible timings)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span>Environment: Premium learning experience</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Video className="h-5 w-5 text-purple-600" />
                          <span>Learning Mode: Online (hybrid options available)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-teal-600" />
                          <span>Training Style: Live, interactive, practice-based</span>
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
                    <Link href="https://lnkd.in/dbNTGHgH" target="_blank" rel="noreferrer">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        Sign Up Now
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Investment: PKR 350,000 (Special Program Fee: PKR 300,000)
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Star className="mr-2 h-5 w-5 text-green-600" />
                        Certification & Recognition
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-700 mb-4">
                        <li>American Board of Hypnotherapy (ABH)</li>
                        <li>Professional Board of Hypnotherapy (PBH)</li>
                        <li>Konnecting Dots Pakistan</li>
                        <li>Eligible for ANLP International CIC (UK) membership</li>
                      </ul>
                      <p className="text-gray-700 text-sm">
                        These certifications allow you to practice internationally, subject to local regulations.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">NLP & Hypnosis Practitioner</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Foundations of NLP and communication
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Understanding mind, emotions, and behavior patterns
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Hypnosis and hypnotherapy fundamentals
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Conducting safe and ethical client sessions
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Master Practitioner</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Advanced NLP patterns and modeling
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Deep subconscious change work
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Mastery in hypnosis and hypnotherapy techniques
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Practitioner identity, confidence, and ethics
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
