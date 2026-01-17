import fs from "fs"
import path from "path"

// Database file paths
const DB_DIR = path.join(process.cwd(), "data")
const BLOG_DB = path.join(DB_DIR, "blog.json")
const BOOKINGS_DB = path.join(DB_DIR, "bookings.json")
const CONTACTS_DB = path.join(DB_DIR, "contacts.json")
const NEWSLETTER_DB = path.join(DB_DIR, "newsletter.json")
const EVENTS_DB = path.join(DB_DIR, "events.json")

// Ensure data directory exists
try {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true })
  }
} catch (error) {
  console.error("Failed to create data directory:", error)
}

// Initialize database files if they don't exist
const initDb = (filePath: string, defaultValue: any) => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2))
    }
  } catch (error) {
    console.error(`Failed to initialize database file ${filePath}:`, error)
  }
}

// Initialize all databases
try {
  initDb(BLOG_DB, { posts: [] })
  initDb(BOOKINGS_DB, { bookings: [] })
  initDb(CONTACTS_DB, { contacts: [] })
  initDb(NEWSLETTER_DB, { subscribers: [] })
  initDb(EVENTS_DB, { events: [] })
} catch (error) {
  console.error("Failed to initialize databases:", error)
}

// Blog Post Types
export interface BlogPost {
  id: string
  title: string
  slug: string
  category: string
  author: string
  excerpt: string
  content: string
  image: string
  status: "draft" | "pending" | "published" | "rejected"
  createdAt: string
  updatedAt: string
  publishedAt?: string
  readTime?: number
  submittedBy?: string
  submittedByEmail?: string
}

// Booking Types
export interface Booking {
  id: string
  name: string
  email: string
  phone: string
  service: string
  preferredDate: string
  preferredTime?: string
  message?: string
  status: "pending" | "confirmed" | "cancelled" | "completed"
  createdAt: string
  confirmedAt?: string
}

// Contact Types
export interface Contact {
  id: string
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  service?: string
  status: "new" | "read" | "replied"
  createdAt: string
}

// Newsletter Types
export interface NewsletterSubscriber {
  id: string
  email: string
  name?: string
  subscribedAt: string
  status: "active" | "unsubscribed"
  unsubscribedAt?: string
}

// Event Types
export interface Event {
  id: string
  title: string
  description: string
  category: string
  date: string
  time: string
  location: string
  format: "in-person" | "online" | "hybrid"
  price: number
  capacity: number
  registered: number
  status: "upcoming" | "ongoing" | "completed" | "cancelled"
  createdAt: string
  image?: string
}

export interface EventRegistration {
  id: string
  eventId: string
  name: string
  email: string
  phone: string
  company?: string
  createdAt: string
  status: "pending" | "confirmed" | "cancelled"
}

// Blog Database Functions
export const blogDb = {
  getAll: (): BlogPost[] => {
    try {
      if (!fs.existsSync(BLOG_DB)) {
        initDb(BLOG_DB, { posts: [] })
        return []
      }
      const data = JSON.parse(fs.readFileSync(BLOG_DB, "utf-8"))
      return data.posts || []
    } catch (error) {
      console.error("Error reading blog database:", error)
      return []
    }
  },

  getPublished: (): BlogPost[] => {
    return blogDb.getAll().filter((post) => post.status === "published")
  },

  getBySlug: (slug: string): BlogPost | null => {
    const posts = blogDb.getAll()
    return posts.find((post) => post.slug === slug) || null
  },

  getById: (id: string): BlogPost | null => {
    const posts = blogDb.getAll()
    return posts.find((post) => post.id === id) || null
  },

  create: (post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): BlogPost => {
    try {
      const posts = blogDb.getAll()
      const newPost: BlogPost = {
        ...post,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      posts.push(newPost)
      fs.writeFileSync(BLOG_DB, JSON.stringify({ posts }, null, 2))
      return newPost
    } catch (error) {
      console.error("Error creating blog post:", error)
      throw error
    }
  },

  update: (id: string, updates: Partial<BlogPost>): BlogPost | null => {
    try {
      const posts = blogDb.getAll()
      const index = posts.findIndex((post) => post.id === id)
      if (index === -1) return null

      const updatedPost: BlogPost = {
        ...posts[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      }

      // Set publishedAt when status changes to published for the first time
      if (updates.status === "published" && posts[index].status !== "published") {
        updatedPost.publishedAt = new Date().toISOString()
      }

      posts[index] = updatedPost
      try {
        fs.writeFileSync(BLOG_DB, JSON.stringify({ posts }, null, 2))
      } catch (writeError) {
        console.error("Error writing blog database:", writeError)
        throw writeError;
      }
      return posts[index]
    } catch (error) {
      console.error("Error updating blog post:", error)
      throw error
    }
  },

  delete: (id: string): boolean => {
    try {
      const posts = blogDb.getAll()
      const filtered = posts.filter((post) => post.id !== id)
      if (filtered.length === posts.length) return false
      fs.writeFileSync(BLOG_DB, JSON.stringify({ posts: filtered }, null, 2))
      return true
    } catch (error) {
      console.error("Error deleting blog post:", error)
      throw error
    }
  },
}

// Booking Database Functions
export const bookingDb = {
  getAll: (): Booking[] => {
    try {
      if (!fs.existsSync(BOOKINGS_DB)) {
        initDb(BOOKINGS_DB, { bookings: [] })
        return []
      }
      const data = JSON.parse(fs.readFileSync(BOOKINGS_DB, "utf-8"))
      return data.bookings || []
    } catch (error) {
      console.error("Error reading bookings database:", error)
      return []
    }
  },

  getById: (id: string): Booking | null => {
    const bookings = bookingDb.getAll()
    return bookings.find((booking) => booking.id === id) || null
  },

  create: (booking: Omit<Booking, "id" | "status" | "createdAt">): Booking => {
    try {
      const bookings = bookingDb.getAll()
      const newBooking: Booking = {
        ...booking,
        id: Date.now().toString(),
        status: "pending",
        createdAt: new Date().toISOString(),
      }
      bookings.push(newBooking)
      
      // Try to write to file, but don't fail if it's read-only (e.g., on Vercel)
      try {
        fs.writeFileSync(BOOKINGS_DB, JSON.stringify({ bookings }, null, 2))
      } catch (writeError) {
        console.warn("Could not write booking to file (filesystem may be read-only):", writeError)
        // Return the booking anyway - email will still be sent
      }
      
      return newBooking
    } catch (error) {
      console.error("Error creating booking:", error)
      throw error
    }
  },

  update: (id: string, updates: Partial<Booking>): Booking | null => {
    try {
      const bookings = bookingDb.getAll()
      const index = bookings.findIndex((booking) => booking.id === id)
      if (index === -1) return null

      bookings[index] = {
        ...bookings[index],
        ...updates,
      }
      fs.writeFileSync(BOOKINGS_DB, JSON.stringify({ bookings }, null, 2))
      return bookings[index]
    } catch (error) {
      console.error("Error updating booking:", error)
      throw error
    }
  },
}

// Contact Database Functions
export const contactDb = {
  getAll: (): Contact[] => {
    try {
      if (!fs.existsSync(CONTACTS_DB)) {
        initDb(CONTACTS_DB, { contacts: [] })
        return []
      }
      const data = JSON.parse(fs.readFileSync(CONTACTS_DB, "utf-8"))
      return data.contacts || []
    } catch (error) {
      console.error("Error reading contacts database:", error)
      return []
    }
  },

  create: (contact: Omit<Contact, "id" | "status" | "createdAt">): Contact => {
    try {
      const contacts = contactDb.getAll()
      const newContact: Contact = {
        ...contact,
        id: Date.now().toString(),
        status: "new",
        createdAt: new Date().toISOString(),
      }
      contacts.push(newContact)
      
      // Try to write to file, but don't fail if it's read-only (e.g., on Vercel)
      try {
        fs.writeFileSync(CONTACTS_DB, JSON.stringify({ contacts }, null, 2))
      } catch (writeError) {
        console.warn("Could not write contact to file (filesystem may be read-only):", writeError)
        // Return the contact anyway - email will still be sent
      }
      
      return newContact
    } catch (error) {
      console.error("Error creating contact:", error)
      throw error
    }
  },
}

// Newsletter Database Functions
export const newsletterDb = {
  getAll: (): NewsletterSubscriber[] => {
    try {
      if (!fs.existsSync(NEWSLETTER_DB)) {
        initDb(NEWSLETTER_DB, { subscribers: [] })
        return []
      }
      const data = JSON.parse(fs.readFileSync(NEWSLETTER_DB, "utf-8"))
      return data.subscribers || []
    } catch (error) {
      console.error("Error reading newsletter database:", error)
      return []
    }
  },

  getActive: (): NewsletterSubscriber[] => {
    return newsletterDb.getAll().filter((sub) => sub.status === "active")
  },

  findByEmail: (email: string): NewsletterSubscriber | null => {
    const subscribers = newsletterDb.getAll()
    return subscribers.find((sub) => sub.email.toLowerCase() === email.toLowerCase()) || null
  },

  subscribe: (email: string, name?: string): NewsletterSubscriber => {
    try {
      const subscribers = newsletterDb.getAll()
      const existing = newsletterDb.findByEmail(email)

      if (existing) {
        if (existing.status === "unsubscribed") {
          // Resubscribe
          const index = subscribers.findIndex((sub) => sub.id === existing.id)
          subscribers[index] = {
            ...existing,
            status: "active",
            subscribedAt: new Date().toISOString(),
            unsubscribedAt: undefined,
          }
          // Try to write to file, but don't fail if it's read-only (e.g., on Vercel)
          try {
            fs.writeFileSync(NEWSLETTER_DB, JSON.stringify({ subscribers }, null, 2))
          } catch (writeError) {
            console.warn("Could not write newsletter subscription to file (filesystem may be read-only):", writeError)
          }
          return subscribers[index]
        }
        return existing
      }

      const newSubscriber: NewsletterSubscriber = {
        id: Date.now().toString(),
        email: email.toLowerCase(),
        name,
        subscribedAt: new Date().toISOString(),
        status: "active",
      }
      subscribers.push(newSubscriber)
      // Try to write to file, but don't fail if it's read-only (e.g., on Vercel)
      try {
        fs.writeFileSync(NEWSLETTER_DB, JSON.stringify({ subscribers }, null, 2))
      } catch (writeError) {
        console.warn("Could not write newsletter subscription to file (filesystem may be read-only):", writeError)
      }
      return newSubscriber
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      throw error
    }
  },

  unsubscribe: (email: string): boolean => {
    try {
      const subscribers = newsletterDb.getAll()
      const subscriber = newsletterDb.findByEmail(email)
      if (!subscriber || subscriber.status === "unsubscribed") return false

      const index = subscribers.findIndex((sub) => sub.id === subscriber.id)
      subscribers[index] = {
        ...subscriber,
        status: "unsubscribed",
        unsubscribedAt: new Date().toISOString(),
      }
      fs.writeFileSync(NEWSLETTER_DB, JSON.stringify({ subscribers }, null, 2))
      return true
    } catch (error) {
      console.error("Error unsubscribing from newsletter:", error)
      throw error
    }
  },
}

// Event Database Functions
export const eventDb = {
  getAll: (): Event[] => {
    try {
      if (!fs.existsSync(EVENTS_DB)) {
        initDb(EVENTS_DB, { events: [] })
        return []
      }
      const data = JSON.parse(fs.readFileSync(EVENTS_DB, "utf-8"))
      return data.events || []
    } catch (error) {
      console.error("Error reading events database:", error)
      return []
    }
  },

  getUpcoming: (): Event[] => {
    const now = new Date()
    return eventDb
      .getAll()
      .filter((event) => event.status === "upcoming" && new Date(event.date) >= now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  },

  getById: (id: string): Event | null => {
    const events = eventDb.getAll()
    return events.find((event) => event.id === id) || null
  },

  create: (event: Omit<Event, "id" | "registered" | "createdAt">): Event => {
    try {
      const events = eventDb.getAll()
      const newEvent: Event = {
        ...event,
        id: Date.now().toString(),
        registered: 0,
        createdAt: new Date().toISOString(),
      }
      events.push(newEvent)
      
      // Try to write to file, but don't fail if it's read-only (e.g., on Vercel)
      try {
        fs.writeFileSync(EVENTS_DB, JSON.stringify({ events }, null, 2))
      } catch (writeError) {
        console.warn("Could not write event to file (filesystem may be read-only):", writeError)
        // Return the event anyway
      }
      
      return newEvent
    } catch (error) {
      console.error("Error creating event:", error)
      throw error
    }
  },

  update: (id: string, updates: Partial<Event>): Event | null => {
    try {
      const events = eventDb.getAll()
      const index = events.findIndex((event) => event.id === id)
      if (index === -1) return null

      events[index] = {
        ...events[index],
        ...updates,
      }
      fs.writeFileSync(EVENTS_DB, JSON.stringify({ events }, null, 2))
      return events[index]
    } catch (error) {
      console.error("Error updating event:", error)
      throw error
    }
  },

  register: (eventId: string, registration: Omit<EventRegistration, "id" | "eventId" | "status" | "createdAt">): EventRegistration => {
    try {
      const events = eventDb.getAll()
      const event = events.find((e) => e.id === eventId)
      if (!event) throw new Error("Event not found")

      // Increment registered count
      event.registered += 1
      
      // Try to write to file, but don't fail if it's read-only (e.g., on Vercel)
      try {
        fs.writeFileSync(EVENTS_DB, JSON.stringify({ events }, null, 2))
      } catch (writeError) {
        console.warn("Could not write event registration to file (filesystem may be read-only):", writeError)
        // Return the registration anyway - email will still be sent
      }

      // Store registration (in a separate file or append to event)
      const registrationData: EventRegistration = {
        ...registration,
        id: Date.now().toString(),
        eventId,
        status: "pending",
        createdAt: new Date().toISOString(),
      }

      // For simplicity, we'll store registrations in the bookings file
      // We can extend this later with a proper registrations table

      return registrationData
    } catch (error) {
      console.error("Error registering for event:", error)
      throw error
    }
  },
}

