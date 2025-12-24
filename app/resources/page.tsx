import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Play, BookOpen, Headphones, Video, FileText } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-800">Free Resources</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Life with Our
              <span className="text-teal-600"> Free Resources</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access our collection of hypnosis audios, meditation guides, worksheets, and educational content
            </p>
          </div>
        </div>
      </section>

      {/* Free Hypnosis & Meditation Audios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Hypnosis & Meditation Audios</h2>
            <p className="text-xl text-gray-600">Experience the power of guided hypnosis and meditation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Headphones className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Stress Relief Hypnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">A 20-minute guided hypnosis session to release stress and tension</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: 20 min</span>
                  <Button size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Headphones className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Confidence Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Boost your self-confidence with this powerful hypnosis audio</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: 25 min</span>
                  <Button size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Headphones className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Sleep Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Drift into peaceful sleep with this calming meditation</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: 30 min</span>
                  <Button size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloadable Worksheets & Journals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Worksheets & Journals</h2>
            <p className="text-xl text-gray-600">Practical tools to support your transformation journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold mb-2">Goal Setting Workbook</h3>
                <p className="text-sm text-gray-600 mb-4">Complete guide to setting and achieving your goals</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-bold mb-2">Daily Reflection Journal</h3>
                <p className="text-sm text-gray-600 mb-4">Track your progress and insights daily</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">NLP Techniques Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Essential NLP techniques for beginners</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Mindfulness Planner</h3>
                <p className="text-sm text-gray-600 mb-4">Plan your mindfulness practice effectively</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Webinar Replays / Podcasts / Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Content</h2>
            <p className="text-xl text-gray-600">Webinar replays, podcasts, and insightful articles</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Webinar Replays */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Video className="mr-3 h-6 w-6 text-blue-600" />
                Webinar Replays
              </h3>
              <div className="space-y-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Introduction to NLP</h4>
                    <p className="text-sm text-gray-600 mb-3">Learn the fundamentals of Neuro-Linguistic Programming</p>
                    <Button size="sm" variant="ghost" className="p-0 h-auto text-blue-600">
                      Watch Replay
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Hypnosis Myths Debunked</h4>
                    <p className="text-sm text-gray-600 mb-3">Separating fact from fiction about hypnosis</p>
                    <Button size="sm" variant="ghost" className="p-0 h-auto text-blue-600">
                      Watch Replay
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Podcasts */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Headphones className="mr-3 h-6 w-6 text-green-600" />
                Podcasts
              </h3>
              <div className="space-y-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Mind Mastery Podcast</h4>
                    <p className="text-sm text-gray-600 mb-3">Weekly insights on personal development</p>
                    <Button size="sm" variant="ghost" className="p-0 h-auto text-green-600">
                      Listen Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Corporate Transformation</h4>
                    <p className="text-sm text-gray-600 mb-3">How NLP transforms workplace culture</p>
                    <Button size="sm" variant="ghost" className="p-0 h-auto text-green-600">
                      Listen Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Articles */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="mr-3 h-6 w-6 text-purple-600" />
                Articles
              </h3>
              <div className="space-y-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">The Science of Change</h4>
                    <p className="text-sm text-gray-600 mb-3">Understanding how the brain adapts and transforms</p>
                    <Button size="sm" variant="ghost" className="p-0 h-auto text-purple-600">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Building Inclusive Teams</h4>
                    <p className="text-sm text-gray-600 mb-3">DEI strategies that actually work</p>
                    <Button size="sm" variant="ghost" className="p-0 h-auto text-purple-600">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take your transformation to the next level with our comprehensive programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Explore Programs
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-800 bg-transparent"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
