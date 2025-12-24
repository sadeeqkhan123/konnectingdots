import { NextResponse } from "next/server"
import { eventDb } from "@/lib/db"
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
})

// GET - Get a single event by ID
export async function GET(request: Request, { params }: { params: { id: string } | Promise<{ id: string }> }) {
  try {
    const paramsValue = params instanceof Promise ? await params : (params as { id: string })
    
    if (!paramsValue?.id) {
      return NextResponse.json({ success: false, error: "Missing event ID" }, { status: 400 })
    }
    
    const event = eventDb.getById(paramsValue.id)
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

    const updatedEvent = eventDb.update(paramsValue.id, validated)
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
    
    // Note: We'd need to add a delete method to eventDb
    // For now, we'll just mark it as cancelled
    const updatedEvent = eventDb.update(paramsValue.id, { status: "cancelled" })
    if (!updatedEvent) {
      return NextResponse.json({ success: false, error: "Event not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, message: "Event cancelled successfully", event: updatedEvent })
  } catch (error) {
    console.error("Error cancelling event:", error)
    return NextResponse.json({ success: false, error: "Failed to cancel event" }, { status: 500 })
  }
}

