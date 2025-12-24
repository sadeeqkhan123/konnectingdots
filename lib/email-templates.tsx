interface BookingData {
  name: string
  email: string
  phone: string
  service: string
  preferredDate: string
  message?: string
}

export const bookingConfirmationTemplate = (data: BookingData): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation - Konnecting Dots</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #f3f4f6;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .logo {
      max-width: 200px;
      height: auto;
      margin-bottom: 20px;
    }
    .header-text {
      color: #ffffff;
      font-size: 28px;
      font-weight: bold;
      margin: 0;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 18px;
      color: #1f2937;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .message {
      font-size: 16px;
      line-height: 1.6;
      color: #4b5563;
      margin-bottom: 30px;
    }
    .details-box {
      background-color: #f9fafb;
      border-left: 4px solid #eab308;
      padding: 20px;
      margin: 30px 0;
      border-radius: 4px;
    }
    .detail-row {
      display: flex;
      padding: 12px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .detail-row:last-child {
      border-bottom: none;
    }
    .detail-label {
      font-weight: 600;
      color: #374151;
      min-width: 140px;
    }
    .detail-value {
      color: #6b7280;
    }
    .cta-button {
      display: inline-block;
      background-color: #eab308;
      color: #000000;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 6px;
      font-weight: 600;
      margin: 20px 0;
      text-align: center;
    }
    .footer {
      background-color: #1e293b;
      padding: 30px;
      text-align: center;
      color: #94a3b8;
      font-size: 14px;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      display: inline-block;
      margin: 0 10px;
      color: #94a3b8;
      text-decoration: none;
    }
    .divider {
      height: 1px;
      background-color: #e5e7eb;
      margin: 30px 0;
    }
    @media only screen and (max-width: 600px) {
      .content {
        padding: 30px 20px;
      }
      .header {
        padding: 30px 20px;
      }
      .detail-row {
        flex-direction: column;
      }
      .detail-label {
        margin-bottom: 5px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <img src="/images/2.png" alt="Konnecting Dots" class="logo">
      <h1 class="header-text">Booking Confirmed!</h1>
    </div>

    <!-- Content -->
    <div class="content">
      <p class="greeting">Hello ${data.name},</p>
      
      <p class="message">
        Thank you for booking a session with Konnecting Dots! We're excited to begin this transformative journey with you.
      </p>

      <p class="message">
        Your booking request has been received and our team will review it shortly. You'll receive a confirmation email with the exact session details within 24 hours.
      </p>

      <!-- Booking Details -->
      <div class="details-box">
        <h3 style="margin-top: 0; color: #1f2937;">Your Booking Details</h3>
        <div class="detail-row">
          <span class="detail-label">Service:</span>
          <span class="detail-value">${data.service}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Preferred Date:</span>
          <span class="detail-value">${data.preferredDate}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Contact Email:</span>
          <span class="detail-value">${data.email}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Phone:</span>
          <span class="detail-value">${data.phone}</span>
        </div>
        ${
          data.message
            ? `
        <div class="detail-row">
          <span class="detail-label">Your Message:</span>
          <span class="detail-value">${data.message}</span>
        </div>
        `
            : ""
        }
      </div>

      <p class="message">
        <strong>What's Next?</strong><br>
        Our team will contact you within 24 hours to confirm your session time and provide any additional information you may need. In the meantime, feel free to explore our resources or reach out if you have any questions.
      </p>

      <center>
        <a href="https://konnectingdots.com/resources" class="cta-button">Explore Resources</a>
      </center>

      <div class="divider"></div>

      <p class="message" style="font-size: 14px;">
        Questions? Reach us at <a href="mailto:info@konnectingdots.com" style="color: #0d9488;">info@konnectingdots.com</a> or call <a href="tel:+15551234567" style="color: #0d9488;">+1 (555) 123-4567</a>
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <img src="/images/2.png" alt="Konnecting Dots" style="max-width: 150px; height: auto; margin-bottom: 20px;">
      
      <div class="social-links">
        <a href="#">Facebook</a> | 
        <a href="#">Twitter</a> | 
        <a href="#">Instagram</a> | 
        <a href="#">LinkedIn</a> | 
        <a href="#">YouTube</a>
      </div>

      <p style="margin: 20px 0;">
        Empowering minds and transforming lives through world-class NLP, Hypnosis, and Corporate Training programs.
      </p>

      <p style="margin: 10px 0; font-size: 12px;">
        © 2025 Konnecting Dots. All rights reserved.<br>
        Miami, FL
      </p>

      <p style="margin: 10px 0; font-size: 12px;">
        <a href="#" style="color: #94a3b8; text-decoration: none;">Unsubscribe</a> | 
        <a href="#" style="color: #94a3b8; text-decoration: none;">Privacy Policy</a> | 
        <a href="#" style="color: #94a3b8; text-decoration: none;">Terms of Service</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export const welcomeEmailTemplate = (name: string): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Konnecting Dots</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #f3f4f6;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .logo {
      max-width: 200px;
      height: auto;
      margin-bottom: 20px;
    }
    .header-text {
      color: #ffffff;
      font-size: 28px;
      font-weight: bold;
      margin: 0;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 18px;
      color: #1f2937;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .message {
      font-size: 16px;
      line-height: 1.6;
      color: #4b5563;
      margin-bottom: 20px;
    }
    .feature-box {
      background-color: #f0fdfa;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
      border: 1px solid #99f6e4;
    }
    .feature-box h3 {
      color: #0f766e;
      margin-top: 0;
    }
    .cta-button {
      display: inline-block;
      background-color: #eab308;
      color: #000000;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 6px;
      font-weight: 600;
      margin: 20px 0;
      text-align: center;
    }
    .footer {
      background-color: #1e293b;
      padding: 30px;
      text-align: center;
      color: #94a3b8;
      font-size: 14px;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      display: inline-block;
      margin: 0 10px;
      color: #94a3b8;
      text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
      .content {
        padding: 30px 20px;
      }
      .header {
        padding: 30px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="/images/2.png" alt="Konnecting Dots" class="logo">
      <h1 class="header-text">Welcome to Konnecting Dots!</h1>
    </div>

    <div class="content">
      <p class="greeting">Hello ${name},</p>
      
      <p class="message">
        Welcome to the Konnecting Dots community! We're thrilled to have you join us on this transformative journey of personal and professional growth.
      </p>

      <p class="message">
        At Konnecting Dots, we specialize in NLP, Hypnosis, and Corporate Training programs designed to unlock your full potential and create lasting positive change.
      </p>

      <div class="feature-box">
        <h3>What You Can Expect:</h3>
        <ul style="line-height: 1.8; color: #4b5563;">
          <li>Expert-led training programs and coaching sessions</li>
          <li>Proven NLP and Hypnosis techniques</li>
          <li>Access to exclusive resources and insights</li>
          <li>A supportive community of like-minded individuals</li>
          <li>Personalized guidance for your unique journey</li>
        </ul>
      </div>

      <p class="message">
        Ready to get started? Explore our services and resources, or book a complimentary consultation to discuss your goals.
      </p>

      <center>
        <a href="https://konnectingdots.com/services" class="cta-button">Explore Services</a>
      </center>

      <p class="message" style="margin-top: 30px;">
        Have questions? Our team is here to help. Reply to this email or reach out at <a href="mailto:info@konnectingdots.com" style="color: #0d9488;">info@konnectingdots.com</a>
      </p>

      <p class="message">
        Here's to your transformation!<br>
        <strong>The Konnecting Dots Team</strong>
      </p>
    </div>

    <div class="footer">
      <img src="/images/2.png" alt="Konnecting Dots" style="max-width: 150px; height: auto; margin-bottom: 20px;">
      
      <div class="social-links">
        <a href="#">Facebook</a> | 
        <a href="#">Twitter</a> | 
        <a href="#">Instagram</a> | 
        <a href="#">LinkedIn</a> | 
        <a href="#">YouTube</a>
      </div>

      <p style="margin: 20px 0;">
        Empowering minds and transforming lives through world-class NLP, Hypnosis, and Corporate Training programs.
      </p>

      <p style="margin: 10px 0; font-size: 12px;">
        © 2025 Konnecting Dots. All rights reserved.<br>
        Miami, FL
      </p>

      <p style="margin: 10px 0; font-size: 12px;">
        <a href="#" style="color: #94a3b8; text-decoration: none;">Unsubscribe</a> | 
        <a href="#" style="color: #94a3b8; text-decoration: none;">Privacy Policy</a> | 
        <a href="#" style="color: #94a3b8; text-decoration: none;">Terms of Service</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export const sessionReminderTemplate = (data: {
  name: string
  service: string
  date: string
  time: string
  location: string
}): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Session Reminder - Konnecting Dots</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #f3f4f6;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #eab308 0%, #f59e0b 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .logo {
      max-width: 200px;
      height: auto;
      margin-bottom: 20px;
    }
    .header-text {
      color: #000000;
      font-size: 28px;
      font-weight: bold;
      margin: 0;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 18px;
      color: #1f2937;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .message {
      font-size: 16px;
      line-height: 1.6;
      color: #4b5563;
      margin-bottom: 20px;
    }
    .reminder-box {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-radius: 12px;
      padding: 30px;
      margin: 30px 0;
      text-align: center;
    }
    .reminder-box h2 {
      color: #92400e;
      margin: 0 0 20px 0;
    }
    .session-details {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }
    .detail-row {
      display: flex;
      padding: 12px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .detail-row:last-child {
      border-bottom: none;
    }
    .detail-label {
      font-weight: 600;
      color: #374151;
      min-width: 120px;
    }
    .detail-value {
      color: #6b7280;
    }
    .cta-button {
      display: inline-block;
      background-color: #0d9488;
      color: #ffffff;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 6px;
      font-weight: 600;
      margin: 20px 0;
      text-align: center;
    }
    .footer {
      background-color: #1e293b;
      padding: 30px;
      text-align: center;
      color: #94a3b8;
      font-size: 14px;
    }
    @media only screen and (max-width: 600px) {
      .content {
        padding: 30px 20px;
      }
      .header {
        padding: 30px 20px;
      }
      .detail-row {
        flex-direction: column;
      }
      .detail-label {
        margin-bottom: 5px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="/images/1.png" alt="Konnecting Dots" class="logo">
      <h1 class="header-text">Session Reminder</h1>
    </div>

    <div class="content">
      <p class="greeting">Hello ${data.name},</p>
      
      <p class="message">
        This is a friendly reminder about your upcoming session with Konnecting Dots!
      </p>

      <div class="reminder-box">
        <h2>📅 Your Session is Coming Up!</h2>
        
        <div class="session-details">
          <div class="detail-row">
            <span class="detail-label">Service:</span>
            <span class="detail-value">${data.service}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Date:</span>
            <span class="detail-value">${data.date}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Time:</span>
            <span class="detail-value">${data.time}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Location:</span>
            <span class="detail-value">${data.location}</span>
          </div>
        </div>
      </div>

      <p class="message">
        <strong>Preparation Tips:</strong>
      </p>
      <ul style="line-height: 1.8; color: #4b5563;">
        <li>Arrive 5-10 minutes early to settle in</li>
        <li>Bring any materials or questions you'd like to discuss</li>
        <li>Come with an open mind and positive attitude</li>
        <li>Wear comfortable clothing</li>
      </ul>

      <p class="message">
        Need to reschedule? Please let us know at least 24 hours in advance.
      </p>

      <center>
        <a href="mailto:info@konnectingdots.com" class="cta-button">Contact Us</a>
      </center>

      <p class="message" style="margin-top: 30px;">
        We're looking forward to seeing you!<br>
        <strong>The Konnecting Dots Team</strong>
      </p>
    </div>

    <div class="footer">
      <img src="/images/2.png" alt="Konnecting Dots" style="max-width: 150px; height: auto; margin-bottom: 20px;">
      
      <p style="margin: 20px 0;">
        © 2025 Konnecting Dots. All rights reserved.<br>
        Miami, FL
      </p>

      <p style="margin: 10px 0; font-size: 12px;">
        <a href="mailto:info@konnectingdots.com" style="color: #94a3b8;">info@konnectingdots.com</a> | 
        <a href="tel:+15551234567" style="color: #94a3b8;">+1 (555) 123-4567</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export const newsletterTemplate = (content: {
  title: string
  excerpt: string
  articles: Array<{ title: string; description: string; link: string }>
}): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.title} - Konnecting Dots Newsletter</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #f3f4f6;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .logo {
      max-width: 200px;
      height: auto;
      margin-bottom: 20px;
    }
    .content {
      padding: 40px 30px;
    }
    .newsletter-title {
      font-size: 24px;
      color: #1f2937;
      margin-bottom: 15px;
      font-weight: bold;
    }
    .excerpt {
      font-size: 16px;
      line-height: 1.6;
      color: #4b5563;
      margin-bottom: 30px;
    }
    .article-card {
      background-color: #f9fafb;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
      border-left: 4px solid #eab308;
    }
    .article-card h3 {
      color: #1f2937;
      margin-top: 0;
    }
    .article-card p {
      color: #6b7280;
      line-height: 1.6;
    }
    .read-more {
      display: inline-block;
      color: #0d9488;
      text-decoration: none;
      font-weight: 600;
      margin-top: 10px;
    }
    .footer {
      background-color: #1e293b;
      padding: 30px;
      text-align: center;
      color: #94a3b8;
      font-size: 14px;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      display: inline-block;
      margin: 0 10px;
      color: #94a3b8;
      text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
      .content {
        padding: 30px 20px;
      }
      .header {
        padding: 30px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="/images/2.png" alt="Konnecting Dots" class="logo">
    </div>

    <div class="content">
      <h1 class="newsletter-title">${content.title}</h1>
      <p class="excerpt">${content.excerpt}</p>

      ${content.articles
        .map(
          (article) => `
        <div class="article-card">
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          <a href="${article.link}" class="read-more">Read More →</a>
        </div>
      `,
        )
        .join("")}

      <p style="margin-top: 40px; font-size: 14px; color: #6b7280;">
        Thank you for being part of the Konnecting Dots community. We're committed to bringing you valuable insights and resources for your personal and professional growth.
      </p>
    </div>

    <div class="footer">
      <img src="/images/2.png" alt="Konnecting Dots" style="max-width: 150px; height: auto; margin-bottom: 20px;">
      
      <div class="social-links">
        <a href="#">Facebook</a> | 
        <a href="#">Twitter</a> | 
        <a href="#">Instagram</a> | 
        <a href="#">LinkedIn</a> | 
        <a href="#">YouTube</a>
      </div>

      <p style="margin: 20px 0;">
        © 2025 Konnecting Dots. All rights reserved.<br>
        Miami, FL
      </p>

      <p style="margin: 10px 0; font-size: 12px;">
        <a href="#" style="color: #94a3b8; text-decoration: none;">Unsubscribe</a> | 
        <a href="#" style="color: #94a3b8; text-decoration: none;">Update Preferences</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}
