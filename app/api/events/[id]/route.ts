import { NextResponse } from "next/server"
import { eventStore } from "@/lib/event-store"
import { z } from "zod"

const updateEventSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  date: z.string().min(1).optional(),
  time: z.string().min(1).optional(),
  location: z.string().min(1).optional(),
  format: z.enum(["in-person", "online", "hybrid"]).optional(),
  price: z.number().min(0).optional(),
  capacity: z.number().min(1).optional(),
  status: z.enum(["upcoming", "ongoing", "completed", "cancelled"]).optional(),
  image: z.string().optional(),
  registrationDuration: z.string().optional(),
  registrationOutcomes: z.string().optional(),
  registrationCertification: z.string().optional(),
  registrationInvestmentLabel: z.string().optional(),
  registrationPaymentNote: z.string().optional(),
})

// GET - Get a single event by ID
export async function GET(request: Request, { params }: { params: { id: string } | Promise<{ id: string }> }) {
  try {
    const paramsValue = params instanceof Promise ? await params : (params as { id: string })
    
    if (!paramsValue?.id) {
      return NextResponse.json({ success: false, error: "Missing event ID" }, { status: 400 })
    }
    
    const event = await eventStore.getById(paramsValue.id)
    if (!event) {
      return NextResponse.json({ success: false, error: "Event not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, event })
  } catch (error) {
    console.error("Error fetching event:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch event" }, { status: 500 })
  }
}

// PUT - Update an event
export async function PUT(request: Request, { params }: { params: { id: string } | Promise<{ id: string }> }) {
  try {
    const paramsValue = params instanceof Promise ? await params : (params as { id: string })
    
    if (!paramsValue?.id) {
      return NextResponse.json({ success: false, error: "Missing event ID" }, { status: 400 })
    }
    
    const body = await request.json()
    const validated = updateEventSchema.parse(body)

    const updatedEvent = await eventStore.update(paramsValue.id, validated)
    if (!updatedEvent) {
      return NextResponse.json({ success: false, error: "Event not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, event: updatedEvent })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: "Validation error", details: error.errors }, { status: 400 })
    }
    console.error("Error updating event:", error)
    return NextResponse.json({ success: false, error: "Failed to update event" }, { status: 500 })
  }
}

// DELETE - Delete an event
export async function DELETE(request: Request, { params }: { params: { id: string } | Promise<{ id: string }> }) {
  try {
    const paramsValue = params instanceof Promise ? await params : (params as { id: string })
    
    if (!paramsValue?.id) {
      return NextResponse.json({ success: false, error: "Missing event ID" }, { status: 400 })
    }
    
    const updatedEvent = await eventStore.cancel(paramsValue.id)
    if (!updatedEvent) {
      return NextResponse.json({ success: false, error: "Event not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, message: "Event cancelled successfully", event: updatedEvent })
  } catch (error) {
    console.error("Error cancelling event:", error)
    return NextResponse.json({ success: false, error: "Failed to cancel event" }, { status: 500 })
  }
}

