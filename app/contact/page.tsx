"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: `HTTP error! status: ${response.status}` }))
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          service: "",
        })
      } else {
        setSubmitStatus("error")
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Error submitting contact form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform
              <span className="text-blue-600"> Your Life?</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Take the first step toward your transformation. Contact us today for a free consultation and discover how
              we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Interest</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a service</option>
                          <option value="one-on-one">ONE on ONE Coaching</option>
                          <option value="corporate">Corporate Training</option>
                          <option value="dei">DEI Training</option>
                          <option value="train-trainer">Train the Trainer</option>
                          <option value="practitioner">NLP Practitioner</option>
                          <option value="consultation">Free Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your goals, challenges, or questions..."
                        rows={5}
                        required
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                        <p className="font-semibold">Message sent successfully!</p>
                        <p className="text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                        <p className="font-semibold">Failed to send message.</p>
                        <p className="text-sm">Please try again or contact us directly.</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      We respect your privacy and will never share your information with third parties.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-blue-600" />
                    Phone & WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Main Office</p>
                      <a href="tel:+923311365146" className="text-gray-600 hover:text-blue-600 transition-colors">
                        +92 331 1365146
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-gray-600">+92 331 1365146</p>
                      <a href="https://wa.link/8ens4r" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Chat on WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-purple-600" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">General Inquiries</p>
                      <a href="mailto:Connect@konnectingdots.org" className="text-gray-600 hover:text-purple-600 transition-colors">
                        Connect@konnectingdots.org
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold">Corporate Training</p>
                      <a href="mailto:Connect@konnectingdots.org" className="text-gray-600 hover:text-purple-600 transition-colors">
                        Connect@konnectingdots.org
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold">Support</p>
                      <a href="mailto:Connect@konnectingdots.org" className="text-gray-600 hover:text-purple-600 transition-colors">
                        Connect@konnectingdots.org
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-green-600" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold">Headquarters</p>
                    <p className="text-gray-600">
                      Karachi, Pakistan
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-teal-600" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Us</h2>
            <p className="text-xl text-gray-600">Stay connected and get daily inspiration</p>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/share/1Cvf5iD3YT/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Facebook className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-center mt-2 text-sm font-medium">Facebook</p>
            </a>

            <Link href="#" className="group">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                <Twitter className="h-8 w-8 text-sky-600" />
              </div>
              <p className="text-center mt-2 text-sm font-medium">Twitter</p>
            </Link>

            <a href="https://www.instagram.com/konnectingdots_?igsh=eTc1YW55N2FxN3Bx" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                <Instagram className="h-8 w-8 text-pink-600" />
              </div>
              <p className="text-center mt-2 text-sm font-medium">Instagram</p>
            </a>

            <Link href="#" className="group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Linkedin className="h-8 w-8 text-blue-700" />
              </div>
              <p className="text-center mt-2 text-sm font-medium">LinkedIn</p>
            </Link>

            <Link href="#" className="group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <Youtube className="h-8 w-8 text-red-600" />
              </div>
              <p className="text-center mt-2 text-sm font-medium">YouTube</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">How quickly will I see results?</h3>
                  <p className="text-gray-600">
                    Many clients experience significant improvements within 3-6 sessions. However, results vary
                    depending on individual goals and commitment to the process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Do you offer online sessions?</h3>
                  <p className="text-gray-600">
                    Yes! We offer both in-person and online sessions via secure video conferencing. Online sessions are
                    just as effective as in-person sessions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">What's included in the free consultation?</h3>
                  <p className="text-gray-600">
                    Our 15-minute free consultation includes goal assessment, program recommendations, and answers to
                    your questions about our services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Do you offer payment plans?</h3>
                  <p className="text-gray-600">
                    Yes, we offer flexible payment plans for most programs. Contact us to discuss options that work for
                    your budget.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/faq">
                <Button variant="outline" size="lg">
                  View All FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait another day to begin your transformation. Book your free consultation now and take the first step
            toward the life you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <a href="https://wa.link/8ens4r" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
