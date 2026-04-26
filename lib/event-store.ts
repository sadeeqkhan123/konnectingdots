import { Event, EventRegistration, eventDb } from "@/lib/db"
import { getSupabaseAdminClient, isSupabaseConfigured } from "@/lib/supabase"

type EventStatus = "upcoming" | "ongoing" | "completed" | "cancelled"
type EventFormat = "in-person" | "online" | "hybrid"

interface EventRow {
  id: string
  title: string
  description: string
  category: string
  date: string
  time: string
  location: string
  format: EventFormat
  price: number
  capacity: number
  registered: number
  status: EventStatus
  created_at: string
  updated_at: string
  image: string | null
  registration_duration?: string | null
  registration_outcomes?: string | null
  registration_certification?: string | null
  registration_investment_label?: string | null
  registration_payment_note?: string | null
}

interface EventRegistrationRow {
  id: string
  event_id: string
  name: string
  email: string
  phone: string
  company: string | null
  status: "pending" | "confirmed" | "cancelled"
  created_at: string
}

const mapRowToEvent = (row: EventRow): Event => ({
  id: row.id,
  title: row.title,
  description: row.description,
  category: row.category,
  date: row.date,
  time: row.time,
  location: row.location,
  format: row.format,
  price: Number(row.price),
  capacity: Number(row.capacity),
  registered: Number(row.registered),
  status: row.status,
  createdAt: row.created_at,
  image: row.image ?? undefined,
  registrationDuration: row.registration_duration ?? undefined,
  registrationOutcomes: row.registration_outcomes ?? undefined,
  registrationCertification: row.registration_certification ?? undefined,
  registrationInvestmentLabel: row.registration_investment_label ?? undefined,
  registrationPaymentNote: row.registration_payment_note ?? undefined,
})

const mapRegistrationRow = (row: EventRegistrationRow): EventRegistration => ({
  id: row.id,
  eventId: row.event_id,
  name: row.name,
  email: row.email,
  phone: row.phone,
  company: row.company ?? undefined,
  status: row.status,
  createdAt: row.created_at,
})

const isMissingEventTablesError = (message: string) =>
  /(event_registrations|events)/i.test(message) && /(relation|table|column)/i.test(message)

const canUseSupabase = isSupabaseConfigured

export const eventStore = {
  markPastEventsAsCompleted: async () => {
    const nowDate = new Date().toISOString().split("T")[0]

    if (!canUseSupabase) {
      const events = eventDb.getAll()
      for (const event of events) {
        if ((event.status === "upcoming" || event.status === "ongoing") && event.date < nowDate) {
          eventDb.update(event.id, { status: "completed" })
        }
      }
      return
    }

    try {
      const supabase = getSupabaseAdminClient()
      const { error } = await supabase
        .from("events")
        .update({ status: "completed" })
        .in("status", ["upcoming", "ongoing"])
        .lt("date", nowDate)
      if (error && !isMissingEventTablesError(error.message)) {
        throw new Error(error.message)
      }
    } catch (error: any) {
      if (isMissingEventTablesError(error?.message || "")) {
        const events = eventDb.getAll()
        for (const event of events) {
          if ((event.status === "upcoming" || event.status === "ongoing") && event.date < nowDate) {
            eventDb.update(event.id, { status: "completed" })
          }
        }
        return
      }
      throw error
    }
  },

  getAll: async (): Promise<Event[]> => {
    if (!canUseSupabase) return eventDb.getAll()

    try {
      const supabase = getSupabaseAdminClient()
      const { data, error } = await supabase.from("events").select("*").order("date", { ascending: true })
      if (error) throw new Error(error.message)
      return (data || []).map((row) => mapRowToEvent(row as EventRow))
    } catch (error: any) {
      if (isMissingEventTablesError(error?.message || "")) return eventDb.getAll()
      throw error
    }
  },

  getUpcoming: async (): Promise<Event[]> => {
    if (!canUseSupabase) return eventDb.getUpcoming()

    try {
      const supabase = getSupabaseAdminClient()
      const nowDate = new Date().toISOString().split("T")[0]
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("status", "upcoming")
        .gte("date", nowDate)
        .order("date", { ascending: true })
      if (error) throw new Error(error.message)
      return (data || []).map((row) => mapRowToEvent(row as EventRow))
    } catch (error: any) {
      if (isMissingEventTablesError(error?.message || "")) return eventDb.getUpcoming()
      throw error
    }
  },

  getById: async (id: string): Promise<Event | null> => {
    if (!canUseSupabase) return eventDb.getById(id)

    try {
      const supabase = getSupabaseAdminClient()
      const { data, error } = await supabase.from("events").select("*").eq("id", id).maybeSingle()
      if (error) throw new Error(error.message)
      if (!data) return null
      return mapRowToEvent(data as EventRow)
    } catch (error: any) {
      if (isMissingEventTablesError(error?.message || "")) return eventDb.getById(id)
      throw error
    }
  },

  create: async (event: Omit<Event, "id" | "registered" | "createdAt">): Promise<Event> => {
    if (!canUseSupabase) return eventDb.create(event)

    const payload = {
      title: event.title,
      description: event.description,
      category: event.category,
      date: event.date,
      time: event.time,
      location: event.location,
      format: event.format,
      price: event.price,
      capacity: event.capacity,
      status: event.status,
      image: event.image ?? null,
      registered: 0,
      registration_duration: event.registrationDuration?.trim() || null,
      registration_outcomes: event.registrationOutcomes?.trim() || null,
      registration_certification: event.registrationCertification?.trim() || null,
      registration_investment_label: event.registrationInvestmentLabel?.trim() || null,
      registration_payment_note: event.registrationPaymentNote?.trim() || null,
    }

    try {
      const supabase = getSupabaseAdminClient()
      const { data, error } = await supabase.from("events").insert(payload).select("*").single()
      if (error) throw new Error(error.message)
      return mapRowToEvent(data as EventRow)
    } catch (error: any) {
      if (isMissingEventTablesError(error?.message || "")) return eventDb.create(event)
      throw error
    }
  },

  update: async (id: string, updates: Partial<Event>): Promise<Event | null> => {
    if (!canUseSupabase) return eventDb.update(id, updates)

    const toNullIfEmpty = (s: string | undefined) => (s !== undefined ? s.trim() || null : undefined)

    const payload = {
      title: updates.title,
      description: updates.description,
      category: updates.category,
      date: updates.date,
      time: updates.time,
      location: updates.location,
      format: updates.format,
      price: updates.price,
      capacity: updates.capacity,
      registered: updates.registered,
      status: updates.status,
      image: updates.image,
      registration_duration: toNullIfEmpty(updates.registrationDuration),
      registration_outcomes: toNullIfEmpty(updates.registrationOutcomes),
      registration_certification: toNullIfEmpty(updates.registrationCertification),
      registration_investment_label: toNullIfEmpty(updates.registrationInvestmentLabel),
      registration_payment_note: toNullIfEmpty(updates.registrationPaymentNote),
      updated_at: new Date().toISOString(),
    }

    try {
      const supabase = getSupabaseAdminClient()
      const { data, error } = await supabase.from("events").update(payload).eq("id", id).select("*").maybeSingle()
      if (error) throw new Error(error.message)
      if (!data) return null
      return mapRowToEvent(data as EventRow)
    } catch (error: any) {
      if (isMissingEventTablesError(error?.message || "")) return eventDb.update(id, updates)
      throw error
    }
  },

  cancel: async (id: string): Promise<Event | null> => {
    return eventStore.update(id, { status: "cancelled" })
  },

  register: async (
    eventId: string,
    registration: Omit<EventRegistration, "id" | "eventId" | "status" | "createdAt">,
  ): Promise<{ event: Event; registration: EventRegistration }> => {
    if (!canUseSupabase) {
      const event = eventDb.getById(eventId)
      if (!event) throw new Error("Event not found")
      if (event.registered >= event.capacity) throw new Error("Event is full")
      if (event.status !== "upcoming") throw new Error("Event is not accepting registrations")
      const createdRegistration = eventDb.register(eventId, registration)
      const updatedEvent = eventDb.getById(eventId)
      if (!updatedEvent) throw new Error("Event not found after registration")
      return { event: updatedEvent, registration: createdRegistration }
    }

    try {
      const supabase = getSupabaseAdminClient()
      const { data: eventData, error: eventError } = await supabase.from("events").select("*").eq("id", eventId).maybeSingle()
      if (eventError) throw new Error(eventError.message)
      if (!eventData) throw new Error("Event not found")

      const currentEvent = mapRowToEvent(eventData as EventRow)
      if (currentEvent.registered >= currentEvent.capacity) throw new Error("Event is full")
      if (currentEvent.status !== "upcoming") throw new Error("Event is not accepting registrations")

      const { data: registrationData, error: registrationError } = await supabase
        .from("event_registrations")
        .insert({
          event_id: eventId,
          name: registration.name,
          email: registration.email,
          phone: registration.phone,
          company: registration.company ?? null,
          status: "pending",
        })
        .select("*")
        .single()
      if (registrationError) throw new Error(registrationError.message)

      const { data: updatedEventData, error: updateError } = await supabase
        .from("events")
        .update({
          registered: currentEvent.registered + 1,
          updated_at: new Date().toISOString(),
        })
        .eq("id", eventId)
        .select("*")
        .single()
      if (updateError) throw new Error(updateError.message)

      return {
        event: mapRowToEvent(updatedEventData as EventRow),
        registration: mapRegistrationRow(registrationData as EventRegistrationRow),
      }
    } catch (error: any) {
      if (isMissingEventTablesError(error?.message || "")) {
        const event = eventDb.getById(eventId)
        if (!event) throw new Error("Event not found")
        if (event.registered >= event.capacity) throw new Error("Event is full")
        if (event.status !== "upcoming") throw new Error("Event is not accepting registrations")
        const createdRegistration = eventDb.register(eventId, registration)
        const updatedEvent = eventDb.getById(eventId)
        if (!updatedEvent) throw new Error("Event not found after registration")
        return { event: updatedEvent, registration: createdRegistration }
      }
      throw error
    }
  },
}
