import { NextResponse } from "next/server"
import { newsletterDb } from "@/lib/db"
import { sendNewsletterWelcome } from "@/lib/email"
import { z } from "zod"

const subscribeSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().optional(),
})

const unsubscribeSchema = z.object({
  email: z.string().email("Invalid email address"),
})

// POST - Subscribe to newsletter
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validated = subscribeSchema.parse(body)

    // Check if already subscribed
    const existing = newsletterDb.findByEmail(validated.email)
    if (existing && existing.status === "active") {
      return NextResponse.json(
        {
          success: true,
          message: "You're already subscribed to our newsletter!",
          subscriber: existing,
        },
        { status: 200 },
      )
    }

    // Subscribe
    const subscriber = newsletterDb.subscribe(validated.email, validated.name)

    // Send welcome email
    try {
      await sendNewsletterWelcome(validated.email, validated.name)
    } catch (emailError) {
      console.error("Error sending newsletter welcome email:", emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to our newsletter! Check your email for a welcome message.",
        subscriber,
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
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json({ success: false, error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}

// DELETE - Unsubscribe from newsletter
export async function DELETE(request: Request) {
  try {
    const body = await request.json()
    const validated = unsubscribeSchema.parse(body)

    const unsubscribed = newsletterDb.unsubscribe(validated.email)
    if (!unsubscribed) {
      return NextResponse.json(
        {
          success: false,
          error: "Email not found or already unsubscribed",
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Successfully unsubscribed from newsletter",
    })
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
    console.error("Error unsubscribing from newsletter:", error)
    return NextResponse.json({ success: false, error: "Failed to unsubscribe from newsletter" }, { status: 500 })
  }
}

// GET - Get all subscribers (admin only - should add auth in production)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")

    let subscribers = newsletterDb.getAll()

    if (status === "active") {
      subscribers = newsletterDb.getActive()
    } else if (status === "unsubscribed") {
      subscribers = subscribers.filter((sub) => sub.status === "unsubscribed")
    }

    return NextResponse.json({
      success: true,
      count: subscribers.length,
      subscribers,
    })
  } catch (error) {
    console.error("Error fetching newsletter subscribers:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch subscribers" }, { status: 500 })
  }
}

