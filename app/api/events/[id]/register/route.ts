import { NextResponse } from "next/server"
import { eventDb } from "@/lib/db"
import { sendEventRegistrationConfirmation } from "@/lib/email"
import { z } from "zod"

const registrationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  company: z.string().optional(),
})

export async function POST(request: Request, { params }: { params: { id: string } | Promise<{ id: string }> }) {
  try {
    const paramsValue = params instanceof Promise ? await params : (params as { id: string })
    
    if (!paramsValue?.id) {
      return NextResponse.json({ success: false, error: "Missing event ID" }, { status: 400 })
    }
    
    const body = await request.json()
    const validated = registrationSchema.parse(body)

    // Get event
    const event = eventDb.getById(paramsValue.id)
    if (!event) {
      return NextResponse.json({ success: false, error: "Event not found" }, { status: 404 })
    }

    // Check if event is full
    if (event.registered >= event.capacity) {
      return NextResponse.json({ success: false, error: "Event is full" }, { status: 400 })
    }

    // Check if event is still accepting registrations
    if (event.status !== "upcoming") {
      return NextResponse.json({ success: false, error: "Event is not accepting registrations" }, { status: 400 })
    }

    // Register for event
    const registration = eventDb.register(paramsValue.id, {
      name: validated.name,
      email: validated.email,
      phone: validated.phone,
      company: validated.company,
    })

    // Send confirmation email
    try {
      await sendEventRegistrationConfirmation({
        eventTitle: event.title,
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        company: validated.company,
        date: event.date,
        time: event.time,
        location: event.location,
      })
    } catch (emailError) {
      console.error("Error sending event registration email:", emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully registered for event! Check your email for confirmation.",
        registration,
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
    console.error("Error registering for event:", error)
    return NextResponse.json({ success: false, error: "Failed to register for event" }, { status: 500 })
  }
}

