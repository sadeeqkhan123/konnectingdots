import { NextResponse } from "next/server"
import { contactDb } from "@/lib/db"
import { sendContactNotification } from "@/lib/email"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  service: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validated = contactSchema.parse(body)

    // Try to save to database (but don't fail if it doesn't work on Vercel)
    let contact = null
    try {
      contact = contactDb.create({
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        subject: validated.subject,
        message: validated.message,
        service: validated.service,
      })
    } catch (dbError) {
      console.error("Error saving contact to database (non-critical):", dbError)
      // Continue even if database save fails
    }

    // Send emails (this is the critical part)
    let emailSent = false
    try {
      await sendContactNotification({
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        subject: validated.subject,
        message: validated.message,
        service: validated.service,
      })
      emailSent = true
    } catch (emailError) {
      console.error("Error sending contact email:", emailError)
      // If email fails, we should return an error
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email. Please try again or contact us directly.",
        },
        { status: 500 },
      )
    }

    // Return success if email was sent (database save is optional)
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. We'll get back to you within 24 hours.",
        contact,
      },
      { status: 201 },
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation error",
          details: error.errors,
        },
        { status: 400 },
      )
    }
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, error: "Failed to process contact form" }, { status: 500 })
  }
}

