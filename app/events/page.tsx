"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, Users, Video } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { trackGtmEvent } from "@/lib/gtm"
import { SiteTestimonialsGrid } from "@/components/site-testimonials-grid"

interface EventItem {
  id: string
  title: string
  description: string
  category: string
  date: string
  time: string
  location: string
  format: "in-person" | "online" | "hybrid"
  price: number
  capacity: number
  registered: number
  status: "upcoming" | "ongoing" | "completed" | "cancelled"
  registrationDuration?: string
  registrationOutcomes?: string
  registrationCertification?: string
  registrationInvestmentLabel?: string
  registrationPaymentNote?: string
}

export default function EventsPage() {
  const upcomingRef = useRef<HTMLDivElement>(null)
  const [events, setEvents] = useState<EventItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  })

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch("/api/events?upcoming=true")
        const data = await response.json()
        if (response.ok && data.success) {
          setEvents(data.events || [])
        }
      } catch (error) {
        console.error("Error loading events:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadEvents()
  }, [])

  const featuredEvent = events[0]
  const otherEvents = useMemo(() => events.slice(1), [events])
  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })

  const getFormatIcon = (format: EventItem["format"]) => (format === "in-person" ? MapPin : Video)
  const getSpotsText = (event: EventItem) => {
    const spotsLeft = Math.max(event.capacity - event.registered, 0)
    return spotsLeft > 0 ? `${spotsLeft} spots left` : "Fully booked"
  }
  const getCategoryClass = (category: string) => {
    const c = category.toLowerCase()
    if (c.includes("corporate")) return "bg-purple-100 text-purple-800"
    if (c.includes("webinar") || c.includes("online")) return "bg-teal-100 text-teal-800"
    if (c.includes("certification")) return "bg-blue-100 text-blue-800"
    return "bg-yellow-100 text-yellow-800"
  }

  const handleRegister = async (eventId: string) => {
    setIsSubmitting(true)
    try {
      const selected = events.find((item) => item.id === eventId) || selectedEvent
      const response = await fetch(`/api/events/${eventId}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...registrationForm,
          eventTitle: selected?.title,
          eventDate: selected?.date,
          eventTime: selected?.time,
          eventLocation: selected?.location,
          eventFormat: selected?.format,
          eventPrice: selected?.price,
          registrationDuration: selected?.registrationDuration,
          registrationOutcomes: selected?.registrationOutcomes,
          registrationCertification: selected?.registrationCertification,
          registrationInvestmentLabel: selected?.registrationInvestmentLabel,
          registrationPaymentNote: selected?.registrationPaymentNote,
        }),
      })
      const data = await response.json()
      if (response.ok && data.success) {
        trackGtmEvent("event_registration", {
          event_id: eventId,
          event_title: selected?.title || selectedEvent?.title || "unknown",
          page_path: window.location.pathname,
        })
        alert(`Registration successful! Confirmation was sent to ${registrationForm.email}.`)
        setRegistrationForm({ name: "", email: "", phone: "", company: "" })
        setSelectedEvent(null)
      } else {
        alert(data.error || "Failed to register")
      }
    } catch (error) {
      console.error("Error registering:", error)
      alert("Failed to register. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToUpcoming = () => upcomingRef.current?.scrollIntoView({ behavior: "smooth" })
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
      <section id="upcoming-events" ref={upcomingRef} className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Training Events</h2>
            <p className="text-xl text-gray-600">Reserve your spot in our transformational programs</p>
          </div>

          <div className="space-y-8">
            {featuredEvent && (
              <Card className="border-2 border-yellow-200 bg-yellow-50 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <Badge className="bg-yellow-500 text-white">Featured Event</Badge>
                    <Badge variant="outline" className="border-green-500 text-green-700">
                      <Users className="mr-1 h-3 w-3" />
                      {getSpotsText(featuredEvent)}
                    </Badge>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-3xl font-bold mb-4">{featuredEvent.title}</h3>
                      <p className="text-gray-700 mb-6 text-lg">{featuredEvent.description}</p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <p className="font-semibold">{formatDate(featuredEvent.date)}</p>
                            <p className="text-sm text-gray-600">{featuredEvent.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-green-600 mr-3" />
                          <div>
                            <p className="font-semibold">{featuredEvent.time}</p>
                            <p className="text-sm text-gray-600">Event schedule</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                          <div>
                            <p className="font-semibold">{featuredEvent.location}</p>
                            <p className="text-sm text-gray-600">Location</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Video className="h-5 w-5 text-teal-600 mr-3" />
                          <div>
                            <p className="font-semibold">{featuredEvent.format}</p>
                            <p className="text-sm text-gray-600">Delivery format</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        <span className="text-3xl font-bold text-green-600">
                          {featuredEvent.price > 0 ? `$${featuredEvent.price.toLocaleString()}` : "FREE"}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border">
                      <h4 className="text-xl font-bold mb-2">Register</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Secure your spot instantly. You will receive a confirmation email.
                      </p>
                      <Button className="w-full bg-yellow-600 hover:bg-yellow-700" onClick={() => setSelectedEvent(featuredEvent)}>
                        Register Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {otherEvents.length > 0 && (
              <div className="grid lg:grid-cols-2 gap-8">
                {otherEvents.map((event) => {
                  const FormatIcon = getFormatIcon(event.format)
                  return (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className={getCategoryClass(event.category)}>{event.category}</Badge>
                          <Badge variant="outline" className="border-green-500 text-green-700">
                            <Users className="mr-1 h-3 w-3" />
                            {getSpotsText(event)}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">{event.description}</p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-blue-600 mr-3" />
                            <span className="text-sm">{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-green-600 mr-3" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <FormatIcon className="h-4 w-4 text-purple-600 mr-3" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-teal-600">
                            {event.price > 0 ? `$${event.price.toLocaleString()}` : "FREE"}
                          </span>
                          <Button onClick={() => setSelectedEvent(event)}>Register Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}

            {!isLoading && events.length === 0 && (
              <Card>
                <CardContent className="p-6 text-center text-gray-600">
                  No upcoming events yet. The admin can add events from the events dashboard.
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Dialog open={Boolean(selectedEvent)} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register for {selectedEvent?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="reg-name">Full Name</Label>
              <Input
                id="reg-name"
                value={registrationForm.name}
                onChange={(e) => setRegistrationForm((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="reg-email">Email</Label>
              <Input
                id="reg-email"
                type="email"
                value={registrationForm.email}
                onChange={(e) => setRegistrationForm((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="reg-phone">Phone</Label>
              <Input
                id="reg-phone"
                value={registrationForm.phone}
                onChange={(e) => setRegistrationForm((prev) => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="reg-company">Company (optional)</Label>
              <Input
                id="reg-company"
                value={registrationForm.company}
                onChange={(e) => setRegistrationForm((prev) => ({ ...prev, company: e.target.value }))}
              />
            </div>
            <Button className="w-full" disabled={isSubmitting || !selectedEvent} onClick={() => selectedEvent && handleRegister(selectedEvent.id)}>
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success stories (same site-wide testimonials as home) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real transformations from real people</p>
          </div>

          <SiteTestimonialsGrid />
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
                <form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    const form = e.currentTarget
                    const formData = new FormData(form)
                    const firstName = (formData.get("firstName") as string) || ""
                    const lastName = (formData.get("lastName") as string) || ""
                    const email = formData.get("email") as string
                    const company = (formData.get("company") as string) || ""
                    const training = (formData.get("training") as string) || ""
                    const message = [
                      "Custom Training Request",
                      "",
                      "Training interest:",
                      training,
                      company ? `\nCompany/Organization: ${company}` : "",
                    ].join("\n")

                    try {
                      const response = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name: `${firstName} ${lastName}`.trim() || "Custom Training Enquiry",
                          email,
                          subject: "Custom Training Request",
                          message,
                          service: "Custom Training",
                        }),
                      })
                      const data = await response.json()
                      if (data.success) {
                        alert("Request sent! We'll respond within 24 hours with a custom proposal.")
                        form.reset()
                      } else {
                        alert(data.error || "Failed to send request. Please try again.")
                      }
                    } catch (err) {
                      console.error(err)
                      alert("Failed to send request. Please try again.")
                    }
                  }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="custom-firstName">First Name</Label>
                      <Input id="custom-firstName" name="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="custom-lastName">Last Name</Label>
                      <Input id="custom-lastName" name="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="custom-email">Email Address</Label>
                    <Input id="custom-email" name="email" type="email" placeholder="Enter your email" required />
                  </div>

                  <div>
                    <Label htmlFor="custom-company">Company/Organization (Optional)</Label>
                    <Input id="custom-company" name="company" placeholder="Enter your company name" />
                  </div>

                  <div>
                    <Label htmlFor="custom-training">Training Interest</Label>
                    <Textarea
                      id="custom-training"
                      name="training"
                      placeholder="Describe the type of training you're interested in, number of participants, preferred dates, etc."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                    Submit Request
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll respond within 24 hours with a custom proposal
                  </p>
                </form>
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
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" onClick={scrollToUpcoming}>
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
