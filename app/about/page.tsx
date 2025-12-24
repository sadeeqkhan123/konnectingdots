import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Heart,
  Users,
  Award,
  Calendar,
  Tv,
  Building,
  CheckCircle,
  ArrowRight,
  Globe,
  BookOpen,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-800">About Konnecting Dots</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Minds.
              <span className="text-teal-600"> Transforming Lives.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              For over 15 years, we've been at the forefront of personal and organizational transformation through the
              power of NLP, Hypnosis, and innovative training methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To create a world where every individual and organization can unlock their full potential, break
                  through limitations, and achieve extraordinary results through the transformative power of NLP and
                  conscious communication.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide world-class NLP, Hypnosis, and DEI training that empowers individuals to overcome limiting
                  beliefs, enhance their communication skills, and create positive change in their personal and
                  professional lives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Integrity & Authenticity
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Excellence & Innovation
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Inclusivity & Respect
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Continuous Growth
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Yousif Mangi Profile */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Yousif Mangi</h2>
              <p className="text-xl text-gray-600">Founder & Master Trainer</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gradient-to-br from-teal-400 to-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-16 w-16" />
                    </div>
                    <h3 className="text-2xl font-bold">Yousif Mangi</h3>
                    <p className="text-teal-100">Master NLP Trainer</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Transformational Leader & Advocate</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    With over 15 years of experience in personal development and organizational transformation, Yousif
                    Mangi has dedicated his life to helping individuals and organizations break through barriers and
                    achieve extraordinary results.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    As a passionate advocate for diversity, equity, and inclusion, Yousif combines cutting-edge NLP
                    techniques with deep cultural understanding to create programs that not only transform performance
                    but also build more inclusive and empowering environments.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Award className="mr-2 h-5 w-5 text-yellow-600" />
                      Certifications
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Master NLP Practitioner
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Certified Hypnotherapist
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        DEI Specialist Certification
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Corporate Training Expert
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Tv className="mr-2 h-5 w-5 text-blue-600" />
                      Media Appearances
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        CNN Business Expert
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        TEDx Speaker
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Forbes Contributor
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Podcast Host
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in our mission to transform lives</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">2009</h3>
                    <Badge variant="outline">Foundation</Badge>
                  </div>
                  <p className="text-gray-600">
                    Konnecting Dots was founded with a vision to make transformational NLP and hypnosis techniques
                    accessible to everyone.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">2012</h3>
                    <Badge variant="outline">Recognition</Badge>
                  </div>
                  <p className="text-gray-600">
                    Achieved international recognition for innovative NLP training methodologies and received first
                    industry awards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">2015</h3>
                    <Badge variant="outline">Corporate Expansion</Badge>
                  </div>
                  <p className="text-gray-600">
                    Launched corporate training division, partnering with Fortune 500 companies to transform
                    organizational culture.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">2018</h3>
                    <Badge variant="outline">DEI Leadership</Badge>
                  </div>
                  <p className="text-gray-600">
                    Pioneered comprehensive DEI training programs, becoming a leading voice in inclusive workplace
                    transformation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">2020</h3>
                    <Badge variant="outline">Global Reach</Badge>
                  </div>
                  <p className="text-gray-600">
                    Expanded globally with online programs, reaching clients in over 50 countries and training 10,000+
                    individuals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">2024</h3>
                    <Badge variant="outline">Innovation</Badge>
                  </div>
                  <p className="text-gray-600">
                    Launched cutting-edge hybrid training programs and AI-enhanced learning platforms for personalized
                    transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Collaborators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">Meet the professionals behind your transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-xl">YM</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Yousif Mangi</h3>
                <p className="text-gray-600 mb-4">Founder & Master Trainer</p>
                <p className="text-sm text-gray-500">15+ years experience in NLP, Hypnosis, and DEI training</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">DR</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. Sarah Rodriguez</h3>
                <p className="text-gray-600 mb-4">Senior NLP Trainer</p>
                <p className="text-sm text-gray-500">Clinical psychologist and certified Master Practitioner</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">MJ</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
                <p className="text-gray-600 mb-4">Corporate Training Director</p>
                <p className="text-sm text-gray-500">Former Fortune 500 executive and leadership development expert</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">LW</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Lisa Wang</h3>
                <p className="text-gray-600 mb-4">DEI Specialist</p>
                <p className="text-sm text-gray-500">Diversity consultant with expertise in inclusive leadership</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 font-bold text-xl">RP</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Robert Park</h3>
                <p className="text-gray-600 mb-4">Hypnotherapy Expert</p>
                <p className="text-sm text-gray-500">Certified clinical hypnotherapist and wellness coach</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-xl">AT</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Amanda Torres</h3>
                <p className="text-gray-600 mb-4">Program Coordinator</p>
                <p className="text-sm text-gray-500">Operations expert ensuring seamless training experiences</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Affiliations & Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Affiliations & Partners</h2>
            <p className="text-xl text-gray-600">Proud members and partners of leading organizations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">International NLP Association</h3>
                <p className="text-sm text-gray-600">Certified training provider</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">American Hypnosis Association</h3>
                <p className="text-sm text-gray-600">Professional member</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">Society for Human Resource Management</h3>
                <p className="text-sm text-gray-600">Corporate partner</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-bold mb-2">International Coach Federation</h3>
                <p className="text-sm text-gray-600">Approved provider</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-teal-100">Lives Transformed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-teal-100">Companies Trained</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Countries Reached</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-teal-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of a global community committed to personal growth, professional excellence, and positive
            change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-800 bg-transparent"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
