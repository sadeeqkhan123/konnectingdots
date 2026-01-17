"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, Users, Video, Star } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Training Calendar</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming Events &<span className="text-blue-600"> Training Programs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our live training sessions, workshops, and certification programs. Transform your life and career
              with expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Training Events</h2>
            <p className="text-xl text-gray-600">Reserve your spot in our transformational programs</p>
          </div>

          <div className="space-y-8">
            {/* Featured Event */}
            <Card className="border-2 border-yellow-200 bg-yellow-50 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <Badge className="bg-yellow-500 text-white">Featured Event</Badge>
                  <Badge variant="outline" className="border-green-500 text-green-700">
                    <Users className="mr-1 h-3 w-3" />
                    12 spots left
                  </Badge>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold mb-4">NLP Practitioner Certification Program</h3>
                    <p className="text-gray-700 mb-6 text-lg">
                      Comprehensive 7-day intensive program to become a certified NLP Practitioner. Learn powerful
                      techniques for personal transformation and helping others achieve breakthrough results.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <p className="font-semibold">April 15-21, 2024</p>
                          <p className="text-sm text-gray-600">7 days intensive</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-green-600 mr-3" />
                        <div>
                          <p className="font-semibold">9:00 AM - 6:00 PM</p>
                          <p className="text-sm text-gray-600">Daily schedule</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                        <div>
                          <p className="font-semibold">Karachi, Pakistan</p>
                          <p className="text-sm text-gray-600">Luxury resort venue</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Video className="h-5 w-5 text-teal-600 mr-3" />
                        <div>
                          <p className="font-semibold">Hybrid Format</p>
                          <p className="text-sm text-gray-600">In-person + Online</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-green-600">$2,497</span>
                      <span className="text-lg text-gray-500 line-through ml-3">$3,497</span>
                      <Badge className="ml-3 bg-red-100 text-red-800">Early Bird Special</Badge>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border">
                    <h4 className="text-xl font-bold mb-4">Quick Registration</h4>
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault()
                        const formData = new FormData(e.currentTarget)
                        const eventId = "1" // This should be dynamic based on the event

                        try {
                          const response = await fetch(`/api/events/${eventId}/register`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              name: formData.get("name"),
                              email: formData.get("email"),
                              phone: formData.get("phone"),
                            }),
                          })

                          const data = await response.json()
                          if (data.success) {
                            alert("Registration successful! Check your email for confirmation.")
                            e.currentTarget.reset()
                          } else {
                            alert(data.error || "Failed to register")
                          }
                        } catch (error) {
                          console.error("Error registering:", error)
                          alert("Failed to register. Please try again.")
                        }
                      }}
                      className="space-y-4"
                    >
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" required placeholder="Enter your name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required placeholder="Enter your email" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" required placeholder="Enter your phone" />
                      </div>
                      <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700">
                        Register Now
                      </Button>
                      <p className="text-xs text-gray-600 text-center">
                        Secure payment • Full refund if cancelled 30 days prior
                      </p>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regular Events */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-teal-100 text-teal-800">Online Workshop</Badge>
                    <Badge variant="outline" className="border-orange-500 text-orange-700">
                      <Users className="mr-1 h-3 w-3" />5 spots left
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">Master Class: Advanced Hypnosis Techniques</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Deep dive into advanced hypnosis methods for experienced practitioners. Learn cutting-edge
                    techniques for rapid transformation.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-blue-600 mr-3" />
                      <span className="text-sm">March 28, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">2:00 PM - 6:00 PM EST</span>
                    </div>
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-purple-600 mr-3" />
                      <span className="text-sm">Live Online via Zoom</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-teal-600">$297</span>
                    <Button>Register Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-purple-100 text-purple-800">Corporate Training</Badge>
                    <Badge variant="outline" className="border-green-500 text-green-700">
                      <Users className="mr-1 h-3 w-3" />
                      Open enrollment
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">DEI Leadership Intensive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Transform your organization's culture with our comprehensive Diversity, Equity, and Inclusion
                    leadership program.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-blue-600 mr-3" />
                      <span className="text-sm">April 5-6, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-red-600 mr-3" />
                      <span className="text-sm">New York, NY</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">$1,497</span>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-100 text-blue-800">Certification</Badge>
                    <Badge variant="outline" className="border-yellow-500 text-yellow-700">
                      <Users className="mr-1 h-3 w-3" />8 spots left
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">Train the Trainer Certification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Become a certified trainer and learn to deliver impactful NLP and personal development programs to
                    others.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-blue-600 mr-3" />
                      <span className="text-sm">May 10-12, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-red-600 mr-3" />
                      <span className="text-sm">Los Angeles, CA</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">$1,997</span>
                    <Button>Register Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-100 text-green-800">Free Webinar</Badge>
                    <Badge variant="outline" className="border-blue-500 text-blue-700">
                      <Users className="mr-1 h-3 w-3" />
                      Unlimited
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">Introduction to NLP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Discover the fundamentals of Neuro-Linguistic Programming and how it can transform your personal and
                    professional life.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-blue-600 mr-3" />
                      <span className="text-sm">Every Wednesday</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-sm">7:00 PM - 8:30 PM EST</span>
                    </div>
                    <div className="flex items-center">
                      <Video className="h-4 w-4 text-purple-600 mr-3" />
                      <span className="text-sm">Live Online</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">FREE</span>
                    <Button className="bg-green-600 hover:bg-green-700">Join Webinar</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Past Event Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Event Highlights</h2>
            <p className="text-xl text-gray-600">See what participants experienced in our previous events</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">NLP Master Class 2023</h3>
                  <p className="text-sm">200+ Participants</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.9/5 rating</span>
                </div>
                <p className="text-gray-700 text-sm">
                  "Life-changing experience! The techniques I learned have transformed both my personal relationships
                  and business success."
                </p>
                <p className="text-xs text-gray-500 mt-2">- Sarah M., Participant</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">Corporate DEI Summit</h3>
                  <p className="text-sm">50+ Companies</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.8/5 rating</span>
                </div>
                <p className="text-gray-700 text-sm">
                  "Outstanding program that gave us practical tools to build a more inclusive workplace culture
                  immediately."
                </p>
                <p className="text-xs text-gray-500 mt-2">- David L., HR Director</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">Hypnosis Intensive</h3>
                  <p className="text-sm">75+ Practitioners</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.9/5 rating</span>
                </div>
                <p className="text-gray-700 text-sm">
                  "The most comprehensive hypnosis training I've ever attended. My practice has grown 300% since
                  completing this program."
                </p>
                <p className="text-xs text-gray-500 mt-2">- Michael R., Therapist</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-xl text-gray-600">
                Let us know your training needs and we'll create a custom program for you
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Custom Training Request</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div>
                  <Label htmlFor="company">Company/Organization (Optional)</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>

                <div>
                  <Label htmlFor="training">Training Interest</Label>
                  <Textarea
                    id="training"
                    placeholder="Describe the type of training you're interested in, number of participants, preferred dates, etc."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700">Submit Request</Button>

                <p className="text-sm text-gray-600 text-center">
                  We'll respond within 24 hours with a custom proposal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our next training event and experience the power of NLP, Hypnosis, and personal transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              View All Events
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
