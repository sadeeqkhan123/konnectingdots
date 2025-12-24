import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, HelpCircle, Shield, Brain, Calendar, Phone } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">Frequently Asked Questions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Questions
              <span className="text-green-600"> Answered</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to the most common questions about NLP, Hypnosis, our programs, and how to get started on
              your transformation journey
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="mr-2 h-5 w-5 text-green-600" />
                    FAQ Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-green-600">
                    <Brain className="mr-2 h-4 w-4" />
                    About NLP & Hypnosis
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Safety & Effectiveness
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Booking & Sessions
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Phone className="mr-2 h-4 w-4" />
                    Programs & Training
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* About NLP & Hypnosis */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Brain className="mr-3 h-6 w-6 text-green-600" />
                  About NLP & Hypnosis
                </h2>

                <div className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">What is NLP (Neuro-Linguistic Programming)?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        NLP is a psychological approach that involves analyzing strategies used by successful
                        individuals and applying them to reach personal goals. It relates thoughts, language, and
                        patterns of behavior learned through experience to specific outcomes. NLP practitioners believe
                        that by understanding how the mind works, we can reprogram limiting beliefs and behaviors to
                        achieve better results in life.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">How does hypnosis work?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        Hypnosis is a natural state of focused attention and heightened suggestibility. During hypnosis,
                        your conscious mind becomes relaxed while your subconscious mind becomes more receptive to
                        positive suggestions. This allows us to access and modify deep-seated patterns, beliefs, and
                        behaviors that may be holding you back. You remain in complete control throughout the process
                        and cannot be made to do anything against your will.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">
                        What's the difference between NLP and traditional therapy?
                      </span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        While traditional therapy often focuses on understanding the past and processing emotions, NLP
                        is more solution-focused and future-oriented. NLP techniques work to quickly identify and change
                        limiting patterns of thought and behavior. Sessions are typically shorter-term and focus on
                        practical strategies for achieving specific outcomes rather than extensive analysis of past
                        experiences.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">Can anyone learn NLP techniques?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        NLP techniques can be learned by anyone with an open mind and willingness to practice. Our
                        training programs are designed for people from all backgrounds - whether you're looking to
                        improve your personal life, enhance your career, or become a certified practitioner to help
                        others. No prior experience is necessary to get started.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>

              {/* Safety & Effectiveness */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Shield className="mr-3 h-6 w-6 text-blue-600" />
                  Safety & Effectiveness
                </h2>

                <div className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">Is hypnosis safe?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        Yes, hypnosis is completely safe when conducted by a trained professional. You cannot get
                        "stuck" in hypnosis, and you maintain complete control throughout the session. Hypnosis is
                        simply a natural state of relaxation and focused attention that we all experience daily (like
                        when absorbed in a good book or movie). All our practitioners are certified and follow strict
                        ethical guidelines.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">How effective are NLP and hypnosis techniques?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        Research shows that NLP and hypnosis can be highly effective for a wide range of issues
                        including anxiety, phobias, limiting beliefs, performance enhancement, and behavioral change.
                        Many clients experience significant improvements within just a few sessions. However, results
                        vary depending on individual commitment, the specific issue being addressed, and willingness to
                        implement the techniques learned.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">Are there any side effects?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        NLP and hypnosis are non-invasive approaches with no negative side effects when practiced
                        correctly. Some people may feel deeply relaxed after a session, similar to how you might feel
                        after a massage or meditation. Occasionally, clients report vivid dreams or increased
                        self-awareness as they process positive changes. These are normal and healthy responses to the
                        transformation process.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">How long do the results last?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        The changes achieved through NLP and hypnosis are designed to be permanent because they address
                        the root cause of issues rather than just symptoms. However, like any skill, the techniques work
                        best when practiced regularly. We provide you with tools and strategies to maintain and
                        reinforce your progress long after your sessions end.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>

              {/* Booking & Sessions */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Calendar className="mr-3 h-6 w-6 text-purple-600" />
                  Booking & Sessions
                </h2>

                <div className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">How do I book a session?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        Booking is easy! You can schedule a session through our website contact form, call us directly,
                        or send us a WhatsApp message. We offer a free 15-minute consultation to discuss your goals and
                        determine the best approach for your needs. During this call, we'll answer any questions and
                        help you choose the right program or session type.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">How long is each session?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        Individual coaching sessions typically last 60-90 minutes. The first session may be longer (up
                        to 2 hours) as we conduct a thorough assessment and begin the transformation process. Group
                        training sessions and workshops vary in length from half-day (4 hours) to multi-day intensive
                        programs depending on the specific program you choose.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">Do you offer online sessions?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        Yes! We offer both in-person and online sessions via secure video conferencing. Online sessions
                        are just as effective as in-person sessions for most applications. This allows us to work with
                        clients worldwide and provides flexibility for busy schedules. We also offer hybrid programs
                        that combine online and in-person elements.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">How many sessions will I need?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        The number of sessions varies depending on your goals and the complexity of the issues being
                        addressed. Many clients see significant results within 3-6 sessions. Simple phobias or specific
                        behavioral changes might be resolved in 1-3 sessions, while more complex personal development
                        goals may require 6-12 sessions. We'll discuss a personalized plan during your consultation.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>

              {/* Programs & Training */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-teal-600" />
                  Programs & Training
                </h2>

                <div className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">
                        What's included in the NLP Practitioner certification?
                      </span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        Our NLP Practitioner certification includes 7 days of intensive training, comprehensive course
                        materials, practice sessions, ongoing support, and official certification upon completion.
                        You'll learn core NLP techniques, communication skills, goal-setting strategies, and how to help
                        others achieve breakthrough results. The program also includes access to our member portal with
                        additional resources and alumni network.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">Can I use NLP certification professionally?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        Yes! Our certifications are internationally recognized and allow you to practice as an NLP
                        Practitioner or Master Practitioner. Many graduates use their certification to start coaching
                        practices, enhance their existing careers in therapy, counseling, sales, or leadership, or
                        simply to improve their personal effectiveness. We also provide business development support for
                        those wanting to start their own practice.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">What is your corporate training approach?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        Our corporate training programs are customized to meet each organization's specific needs. We
                        begin with an assessment of current challenges and goals, then design a program that addresses
                        leadership development, communication skills, team building, diversity and inclusion, or
                        performance enhancement. Programs can be delivered on-site, online, or in a hybrid format and
                        include follow-up support to ensure lasting change.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-left">Do you offer payment plans?</span>
                      <ChevronDown className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">
                        Yes, we understand that investing in your personal or professional development is a significant
                        decision. We offer flexible payment plans for most of our programs, including monthly
                        installment options. We also provide early bird discounts and occasional scholarships for
                        qualifying individuals. Contact us to discuss payment options that work for your situation.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help! Get in touch with our team for personalized answers to your questions.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Schedule a Call</h3>
                  <p className="text-gray-600 mb-4">
                    Book a free 15-minute consultation to discuss your specific needs
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">Book Free Consultation</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Contact Support</h3>
                  <p className="text-gray-600 mb-4">Send us a message and we'll respond within 24 hours</p>
                  <Link href="/contact">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                      Contact Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
