import { NextResponse } from "next/server"
import { bookingDb } from "@/lib/db"
import { sendBookingConfirmation } from "@/lib/email"
import { z } from "zod"

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  service: z.string().min(1, "Service is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validated = bookingSchema.parse(body)

    // Try to save booking to database (but don't fail if it doesn't work on Vercel)
    let booking = null
    try {
      booking = bookingDb.create({
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        service: validated.service,
        preferredDate: validated.preferredDate,
        preferredTime: validated.preferredTime,
        message: validated.message,
      })
    } catch (dbError) {
      console.error("Error saving booking to database (non-critical):", dbError)
      // Continue even if database save fails
    }

    // Send confirmation emails (this is the critical part)
    try {
      await sendBookingConfirmation({
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        service: validated.service,
        preferredDate: validated.preferredDate,
        message: validated.message,
      })
    } catch (emailError) {
      console.error("Error sending booking email:", emailError)
      // If email fails, we should return an error
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send confirmation email. Please try again or contact us directly.",
        },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking request submitted successfully. You'll receive a confirmation email shortly.",
        booking,
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
    console.error("Error processing booking:", error)
    return NextResponse.json({ success: false, error: "Failed to process booking request" }, { status: 500 })
  }
}
