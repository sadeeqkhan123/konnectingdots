"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BookingModalProps {
  children: React.ReactNode
}

export default function BookingModal({ children }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-booking-email", {
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
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        })
        setStep(1)
        setIsOpen(false)
        toast({
          title: "Booking Submitted!",
          description: "Your booking request has been submitted. Check your email for confirmation.",
        })
      } else {
        throw new Error(data.error || "Failed to submit booking")
      }
    } catch (error) {
      console.error("Error submitting booking:", error)
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canProceedToStep2 = formData.name && formData.email && formData.phone
  const canProceedToStep3 = formData.service

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader className="space-y-4 pb-6 border-b border-border">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-3 text-3xl text-brand-primary">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="h-6 w-6 text-brand-primary" />
              </div>
              Book Your Transformation
            </DialogTitle>
          </div>
          <DialogDescription className="text-base text-muted-foreground">
            Take the first step toward your breakthrough. We'll confirm your session within 24 hours.
          </DialogDescription>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div
              className={`flex items-center gap-2 transition-all duration-300 ${step >= 1 ? "opacity-100" : "opacity-40"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  step >= 1
                    ? "bg-brand-primary text-brand-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step > 1 ? <CheckCircle2 className="h-4 w-4" /> : "1"}
              </div>
              <span className="text-xs font-medium hidden sm:inline">Personal Info</span>
            </div>
            <div className="w-12 h-0.5 bg-muted">
              <div className={`h-full bg-brand-primary transition-all duration-300 ${step >= 2 ? "w-full" : "w-0"}`} />
            </div>
            <div
              className={`flex items-center gap-2 transition-all duration-300 ${step >= 2 ? "opacity-100" : "opacity-40"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  step >= 2
                    ? "bg-brand-primary text-brand-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step > 2 ? <CheckCircle2 className="h-4 w-4" /> : "2"}
              </div>
              <span className="text-xs font-medium hidden sm:inline">Service</span>
            </div>
            <div className="w-12 h-0.5 bg-muted">
              <div className={`h-full bg-brand-primary transition-all duration-300 ${step >= 3 ? "w-full" : "w-0"}`} />
            </div>
            <div
              className={`flex items-center gap-2 transition-all duration-300 ${step >= 3 ? "opacity-100" : "opacity-40"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  step >= 3
                    ? "bg-brand-primary text-brand-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                3
              </div>
              <span className="text-xs font-medium hidden sm:inline">Schedule</span>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center gap-3 pb-3 border-b border-border">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <User className="h-5 w-5 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Personal Information</h3>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Smith"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!canProceedToStep2}
                  className="bg-brand-primary hover:bg-brand-primary/90 text-brand-primary-foreground font-semibold h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center gap-3 pb-3 border-b border-border">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Choose Your Service</h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-sm font-semibold">
                  Service Type *
                </Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one-on-one">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20"
                        >
                          Popular
                        </Badge>
                        ONE on ONE Coaching
                      </div>
                    </SelectItem>
                    <SelectItem value="corporate">Corporate Training</SelectItem>
                    <SelectItem value="dei">DEI Training</SelectItem>
                    <SelectItem value="train-trainer">Train the Trainer</SelectItem>
                    <SelectItem value="practitioner">NLP Practitioner Program</SelectItem>
                    <SelectItem value="consultation">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                          Free
                        </Badge>
                        Free Consultation
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" onClick={() => setStep(1)} variant="outline" className="h-12 px-8">
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!canProceedToStep3}
                  className="bg-brand-primary hover:bg-brand-primary/90 text-brand-primary-foreground font-semibold h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Scheduling */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center gap-3 pb-3 border-b border-border">
                <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-info" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Preferred Schedule</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm font-semibold">
                    Preferred Date
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="h-12 pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-sm font-semibold">
                    Preferred Time
                  </Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => handleInputChange("preferredTime", value)}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold">
                  Additional Information
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your goals, challenges, or any specific requirements..."
                  rows={4}
                  className="resize-none"
                />
              </div>

              <div className="bg-brand-primary/5 rounded-lg p-4 border border-brand-primary/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-foreground">
                    <strong>What happens next?</strong> We'll review your request and send you a confirmation email
                    within 24 hours with your session details and a calendar invite.
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" onClick={() => setStep(2)} variant="outline" className="h-12 px-8">
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-secondary-foreground font-bold h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Submitting..." : "Confirm Booking"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
      {/* </CHANGE> */}
    </Dialog>
  )
}
