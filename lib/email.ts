import { Resend } from "resend"
import {
  bookingConfirmationTemplate,
  welcomeEmailTemplate,
  sessionReminderTemplate,
  newsletterTemplate,
} from "./email-templates"

// Initialize Resend client (only if API key is available)
// During build time, this might be undefined, so we'll handle it gracefully
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@konnectingdots.com"
const FROM_NAME = process.env.FROM_NAME || "Konnecting Dots"
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "yousifmangi32@gmail.com"

// Utility function to escape HTML to prevent XSS in email templates
const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

export interface SendEmailOptions {
  to: string | string[]
  subject: string
  html: string
  from?: string
  replyTo?: string
}

export const sendEmail = async (options: SendEmailOptions) => {
  try {
    // If no API key or resend client not initialized, log the email instead (for development/build)
    if (!process.env.RESEND_API_KEY || !resend) {
      console.log("📧 Email would be sent (RESEND_API_KEY not set):", {
        to: options.to,
        subject: options.subject,
      })
      return { success: true, id: "dev-mode" }
    }

    const result = await resend.emails.send({
      from: options.from || `${FROM_NAME} <${FROM_EMAIL}>`,
      to: Array.isArray(options.to) ? options.to : [options.to],
      subject: options.subject,
      html: options.html,
      reply_to: options.replyTo,
    })

    return { success: true, id: result.data?.id }
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

export const sendBookingConfirmation = async (bookingData: {
  name: string
  email: string
  phone: string
  service: string
  preferredDate: string
  message?: string
}) => {
  const emailHtml = bookingConfirmationTemplate(bookingData)

  // Send to customer
  await sendEmail({
    to: bookingData.email,
    subject: "Booking Confirmation - Konnecting Dots",
    html: emailHtml,
  })

  // Send notification to admin
  const adminEmailHtml = `
    <h2>New Booking Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(bookingData.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(bookingData.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(bookingData.phone)}</p>
    <p><strong>Service:</strong> ${escapeHtml(bookingData.service)}</p>
    <p><strong>Preferred Date:</strong> ${escapeHtml(bookingData.preferredDate)}</p>
    ${bookingData.message ? `<p><strong>Message:</strong> ${escapeHtml(bookingData.message)}</p>` : ""}
  `

  await sendEmail({
    to: ADMIN_EMAIL,
    subject: `New Booking Request: ${bookingData.name}`,
    html: adminEmailHtml,
    replyTo: bookingData.email,
  })

  return { success: true }
}

export const sendContactNotification = async (contactData: {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  service?: string
}) => {
  // Send to customer
  const customerEmailHtml = `
    <h2>Thank You for Contacting Konnecting Dots</h2>
    <p>Hello ${escapeHtml(contactData.name)},</p>
    <p>We've received your message and will get back to you within 24 hours.</p>
    <p>Your message:</p>
    <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">${escapeHtml(contactData.message)}</p>
    <p>Best regards,<br>The Konnecting Dots Team</p>
  `

  await sendEmail({
    to: contactData.email,
    subject: "We've Received Your Message - Konnecting Dots",
    html: customerEmailHtml,
  })

  // Send notification to admin
  const adminEmailHtml = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(contactData.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(contactData.email)}</p>
    ${contactData.phone ? `<p><strong>Phone:</strong> ${escapeHtml(contactData.phone)}</p>` : ""}
    ${contactData.subject ? `<p><strong>Subject:</strong> ${escapeHtml(contactData.subject)}</p>` : ""}
    ${contactData.service ? `<p><strong>Service Interest:</strong> ${escapeHtml(contactData.service)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">${escapeHtml(contactData.message)}</p>
  `

  await sendEmail({
    to: ADMIN_EMAIL,
    subject: `New Contact Form: ${contactData.subject || "No Subject"}`,
    html: adminEmailHtml,
    replyTo: contactData.email,
  })

  return { success: true }
}

export const sendWelcomeEmail = async (name: string, email: string) => {
  const emailHtml = welcomeEmailTemplate(name)

  await sendEmail({
    to: email,
    subject: "Welcome to Konnecting Dots!",
    html: emailHtml,
  })

  return { success: true }
}

export const sendNewsletterWelcome = async (email: string, name?: string) => {
  const emailHtml = `
    <h2>Welcome to Our Newsletter!</h2>
    <p>Hello ${name || "there"},</p>
    <p>Thank you for subscribing to the Konnecting Dots newsletter. You'll now receive:</p>
    <ul>
      <li>Latest insights on NLP and Hypnosis</li>
      <li>Exclusive tips and techniques</li>
      <li>Updates on upcoming events and training programs</li>
      <li>Special offers and resources</li>
    </ul>
    <p>We're excited to have you on this journey!</p>
    <p>Best regards,<br>The Konnecting Dots Team</p>
  `

  await sendEmail({
    to: email,
    subject: "Welcome to Konnecting Dots Newsletter",
    html: emailHtml,
  })

  return { success: true }
}

export const sendEventRegistrationConfirmation = async (eventData: {
  eventTitle: string
  name: string
  email: string
  date: string
  time: string
  location: string
  phone?: string
  company?: string
}) => {
  const emailHtml = `
    <h2>Event Registration Confirmed!</h2>
    <p>Hello ${escapeHtml(eventData.name)},</p>
    <p>Your registration for <strong>${escapeHtml(eventData.eventTitle)}</strong> has been confirmed!</p>
    <div style="background: #f3f4f6; padding: 20px; border-radius: 5px; margin: 20px 0;">
      <p><strong>Event:</strong> ${escapeHtml(eventData.eventTitle)}</p>
      <p><strong>Date:</strong> ${escapeHtml(eventData.date)}</p>
      <p><strong>Time:</strong> ${escapeHtml(eventData.time)}</p>
      <p><strong>Location:</strong> ${escapeHtml(eventData.location)}</p>
    </div>
    <p>We'll send you a reminder 24 hours before the event. We look forward to seeing you there!</p>
    <p>Best regards,<br>The Konnecting Dots Team</p>
  `

  // Send to customer
  await sendEmail({
    to: eventData.email,
    subject: `Registration Confirmed: ${escapeHtml(eventData.eventTitle)}`,
    html: emailHtml,
  })

  // Send notification to admin
  const adminEmailHtml = `
    <h2>New Event Registration</h2>
    <p><strong>Event:</strong> ${escapeHtml(eventData.eventTitle)}</p>
    <p><strong>Name:</strong> ${escapeHtml(eventData.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(eventData.email)}</p>
    ${eventData.phone ? `<p><strong>Phone:</strong> ${escapeHtml(eventData.phone)}</p>` : ""}
    ${eventData.company ? `<p><strong>Company:</strong> ${escapeHtml(eventData.company)}</p>` : ""}
    <p><strong>Date:</strong> ${escapeHtml(eventData.date)}</p>
    <p><strong>Time:</strong> ${escapeHtml(eventData.time)}</p>
    <p><strong>Location:</strong> ${escapeHtml(eventData.location)}</p>
  `

  await sendEmail({
    to: ADMIN_EMAIL,
    subject: `New Event Registration: ${escapeHtml(eventData.eventTitle)} - ${escapeHtml(eventData.name)}`,
    html: adminEmailHtml,
    replyTo: eventData.email,
  })

  return { success: true }
}

