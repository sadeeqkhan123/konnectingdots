import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Quote, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Success Stories</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real People.
              <span className="text-purple-600"> Real Transformations.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how our clients have transformed their lives and businesses through NLP, Hypnosis, and our
              comprehensive training programs
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">Hear directly from our clients about their transformation journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Play className="mr-2 h-6 w-6" />
                    Play Video
                  </Button>
                </div>
                <Badge className="absolute top-4 left-4 bg-blue-100 text-blue-800">Corporate Training</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">JD</span>
                  </div>
                  <div>
                    <h3 className="font-bold">John Davidson</h3>
                    <p className="text-sm text-gray-600">CEO, TechCorp Solutions</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The NLP corporate training transformed our entire leadership team. We saw a 40% increase in
                  productivity and significantly improved team communication."
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Play className="mr-2 h-6 w-6" />
                    Play Video
                  </Button>
                </div>
                <Badge className="absolute top-4 left-4 bg-green-100 text-green-800">Personal Coaching</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">SM</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Sarah Mitchell</h3>
                    <p className="text-sm text-gray-600">Marketing Director</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "After struggling with anxiety for years, the hypnosis sessions completely changed my life. I now feel
                  confident and in control of my emotions."
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Play className="mr-2 h-6 w-6" />
                    Play Video
                  </Button>
                </div>
                <Badge className="absolute top-4 left-4 bg-purple-100 text-purple-800">NLP Practitioner</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">MR</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Michael Roberts</h3>
                    <p className="text-sm text-gray-600">Life Coach</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The NLP Practitioner program gave me the tools to not only transform my own life but to help hundreds
                  of clients achieve their goals."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before & After Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After Transformations</h2>
            <p className="text-xl text-gray-600">Witness the incredible journeys of personal and professional growth</p>
          </div>

          <div className="space-y-12">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 bg-red-50">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-red-100 text-red-800">Before</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-red-800">The Challenge</h3>
                    <p className="text-gray-700 mb-4">
                      "I was struggling with severe public speaking anxiety that was holding back my career. I would
                      avoid presentations and felt physically sick before any speaking engagement."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-red-800 font-bold">AL</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Amanda Lee</h4>
                        <p className="text-sm text-gray-600">Sales Manager</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-green-50">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-green-100 text-green-800">After</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-green-800">The Transformation</h3>
                    <p className="text-gray-700 mb-4">
                      "After 6 sessions of NLP and hypnosis, I now confidently speak to audiences of 500+ people. I was
                      promoted to Regional Director and regularly conduct training seminars."
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-green-600 font-medium">3 months later</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 bg-red-50">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-red-100 text-red-800">Before</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-red-800">The Challenge</h3>
                    <p className="text-gray-700 mb-4">
                      "Our team had poor communication, low morale, and high turnover. Projects were consistently
                      delayed and client satisfaction was declining."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-red-800 font-bold">DW</span>
                      </div>
                      <div>
                        <h4 className="font-bold">David Wilson</h4>
                        <p className="text-sm text-gray-600">Operations Director</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-green-50">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-green-100 text-green-800">After</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-green-800">The Transformation</h3>
                    <p className="text-gray-700 mb-4">
                      "The corporate NLP training revolutionized our workplace culture. Team collaboration improved by
                      60%, turnover dropped by 75%, and we exceeded all quarterly targets."
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-green-600 font-medium">6 months later</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Case Studies</h2>
            <p className="text-xl text-gray-600">In-depth analysis of transformation journeys</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Corporate Case Study</Badge>
                <h3 className="text-2xl font-bold mb-4">Fortune 500 Leadership Transformation</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800">Challenge:</h4>
                    <p className="text-gray-600">
                      Executive team struggling with communication and decision-making efficiency
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">Solution:</h4>
                    <p className="text-gray-600">12-week NLP leadership program with individual coaching sessions</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">Results:</h4>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li>40% improvement in decision-making speed</li>
                      <li>60% increase in team collaboration scores</li>
                      <li>$2.3M increase in quarterly revenue</li>
                      <li>95% executive retention rate</li>
                    </ul>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-purple-100 text-purple-800">Individual Case Study</Badge>
                <h3 className="text-2xl font-bold mb-4">Overcoming 20-Year Phobia</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800">Challenge:</h4>
                    <p className="text-gray-600">Client with severe flying phobia affecting career and personal life</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">Solution:</h4>
                    <p className="text-gray-600">8 sessions combining NLP techniques and hypnotherapy</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">Results:</h4>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li>Complete elimination of flying anxiety</li>
                      <li>Took first flight in 20 years</li>
                      <li>Accepted international job promotion</li>
                      <li>Improved overall confidence and life satisfaction</li>
                    </ul>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Text Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Authentic feedback from real transformations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-yellow-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">
                  "The DEI training program completely transformed our workplace culture. We went from having diversity
                  issues to being recognized as one of the most inclusive companies in our industry."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-yellow-600 font-bold">LT</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Lisa Thompson</h4>
                      <p className="text-sm text-gray-600">HR Director</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-teal-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">
                  "I became a certified NLP Practitioner through Konnecting Dots and it's been life-changing. I now run
                  my own successful coaching practice and help others transform their lives daily."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-teal-600 font-bold">RK</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Rachel Kim</h4>
                      <p className="text-sm text-gray-600">NLP Coach</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-purple-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">
                  "The Train the Trainer program equipped me with advanced facilitation skills. I now lead workshops for
                  major corporations and my confidence as a trainer has skyrocketed."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">JM</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">James Martinez</h4>
                      <p className="text-sm text-gray-600">Corporate Trainer</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of individuals and organizations who have transformed their lives through our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Start Your Transformation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-800 bg-transparent"
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
