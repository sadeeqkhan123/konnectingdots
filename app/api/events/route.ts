import { NextResponse } from "next/server"
import { eventDb } from "@/lib/db"
import { z } from "zod"

const createEventSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  location: z.string().min(1),
  format: z.enum(["in-person", "online", "hybrid"]),
  price: z.number().min(0),
  capacity: z.number().min(1),
  status: z.enum(["upcoming", "ongoing", "completed", "cancelled"]).optional(),
  image: z.string().optional(),
})

// GET - Get all events
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const upcoming = searchParams.get("upcoming") === "true"

    let events = eventDb.getAll()

    if (upcoming) {
      events = eventDb.getUpcoming()
    } else if (status) {
      events = events.filter((event) => event.status === status)
    }

    // Sort by date
    events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return NextResponse.json({ success: true, events })
  } catch (error) {
    console.error("Error fetching events:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch events" }, { status: 500 })
  }
}

// POST - Create a new event
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validated = createEventSchema.parse(body)

    const newEvent = eventDb.create({
      title: validated.title,
      description: validated.description,
      category: validated.category,
      date: validated.date,
      time: validated.time,
      location: validated.location,
      format: validated.format,
      price: validated.price,
      capacity: validated.capacity,
      status: validated.status || "upcoming",
      image: validated.image,
    })

    return NextResponse.json({ success: true, event: newEvent }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: "Validation error", details: error.errors }, { status: 400 })
    }
    console.error("Error creating event:", error)
    return NextResponse.json({ success: false, error: "Failed to create event" }, { status: 500 })
  }
}

