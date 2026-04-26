import { NextResponse } from "next/server"
import { eventStore } from "@/lib/event-store"
import { sendEventRegistrationConfirmation } from "@/lib/email"
import { z } from "zod"

const registrationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  company: z.string().optional(),
  eventTitle: z.string().optional(),
  eventDate: z.string().optional(),
  eventTime: z.string().optional(),
  eventLocation: z.string().optional(),
  eventFormat: z.enum(["in-person", "online", "hybrid"]).optional(),
  eventPrice: z.number().min(0).optional(),
  registrationDuration: z.string().optional(),
  registrationOutcomes: z.string().optional(),
  registrationCertification: z.string().optional(),
  registrationInvestmentLabel: z.string().optional(),
  registrationPaymentNote: z.string().optional(),
})

function defaultInvestmentLine(price: number | undefined): string {
  const p = price ?? 0
  if (p <= 0) return "Complimentary"
  return `PKR ${p.toLocaleString("en-PK")} (exclusive of taxes)`
}

export async function POST(request: Request, { params }: { params: { id: string } | Promise<{ id: string }> }) {
  try {
    const paramsValue = params instanceof Promise ? await params : (params as { id: string })
    
    if (!paramsValue?.id) {
      return NextResponse.json({ success: false, error: "Missing event ID" }, { status: 400 })
    }
    
    const body = await request.json()
    const validated = registrationSchema.parse(body)

    const event = await eventStore.getById(paramsValue.id)
    const fallbackEventFromClient = {
      title: validated.eventTitle || "Training Event",
      date: validated.eventDate || new Date().toISOString().split("T")[0],
      time: validated.eventTime || "To be confirmed",
      location: validated.eventLocation || "To be confirmed",
      format: validated.eventFormat || ("online" as const),
      price: validated.eventPrice ?? 0,
      registrationDuration: validated.registrationDuration,
      registrationOutcomes: validated.registrationOutcomes,
      registrationCertification: validated.registrationCertification,
      registrationInvestmentLabel: validated.registrationInvestmentLabel,
      registrationPaymentNote: validated.registrationPaymentNote,
    }

    if (!event && !validated.eventTitle) {
      return NextResponse.json({ success: false, error: "Event not found" }, { status: 404 })
    }

    let registration = null
    let registeredEvent = event
    try {
      if (event) {
        const result = await eventStore.register(paramsValue.id, {
          name: validated.name,
          email: validated.email,
          phone: validated.phone,
          company: validated.company,
        })
        registration = result.registration
        registeredEvent = result.event
      } else {
        registration = {
          id: Date.now().toString(),
          eventId: paramsValue.id,
          name: validated.name,
          email: validated.email,
          phone: validated.phone,
          company: validated.company,
          status: "pending",
          createdAt: new Date().toISOString(),
        }
      }
    } catch (dbError) {
      const message = dbError instanceof Error ? dbError.message : String(dbError)
      if (/event is full/i.test(message)) {
        return NextResponse.json({ success: false, error: "Event is full" }, { status: 400 })
      }
      if (/not accepting registrations/i.test(message)) {
        return NextResponse.json({ success: false, error: "Event is not accepting registrations" }, { status: 400 })
      }
      if (/event not found/i.test(message)) {
        return NextResponse.json({ success: false, error: "Event not found" }, { status: 404 })
      }

      console.error("Error saving event registration to database (non-critical):", dbError)
      registration = {
        id: Date.now().toString(),
        eventId: paramsValue.id,
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        company: validated.company,
        status: "pending",
        createdAt: new Date().toISOString(),
      }
    }

    // Send confirmation email (this is the critical part)
    try {
      const eventTitle = registeredEvent?.title || fallbackEventFromClient.title
      const investmentLine =
        registeredEvent?.registrationInvestmentLabel ||
        fallbackEventFromClient.registrationInvestmentLabel ||
        defaultInvestmentLine(registeredEvent?.price ?? fallbackEventFromClient.price)

      await sendEventRegistrationConfirmation({
        eventTitle,
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        company: validated.company,
        date: registeredEvent?.date || fallbackEventFromClient.date,
        time: registeredEvent?.time || fallbackEventFromClient.time,
        location: registeredEvent?.location || fallbackEventFromClient.location,
        format: registeredEvent?.format || fallbackEventFromClient.format,
        investmentLine,
        registrationDuration: registeredEvent?.registrationDuration || fallbackEventFromClient.registrationDuration,
        registrationOutcomes: registeredEvent?.registrationOutcomes || fallbackEventFromClient.registrationOutcomes,
        registrationCertification:
          registeredEvent?.registrationCertification || fallbackEventFromClient.registrationCertification,
        registrationPaymentNote:
          registeredEvent?.registrationPaymentNote || fallbackEventFromClient.registrationPaymentNote,
      })
    } catch (emailError) {
      console.error("Error sending event registration email:", emailError)
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

