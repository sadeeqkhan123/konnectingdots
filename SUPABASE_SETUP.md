# Supabase Setup

The project is now wired to use Supabase for:
- blog APIs through `lib/blog-store.ts`
- events APIs through `lib/event-store.ts`

## 1) Environment Variables

Create/update `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_key
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=onboarding@resend.dev
FROM_NAME=Konnecting Dots
ADMIN_EMAIL=Connect@konnectingdots.org
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Optional but recommended for secure server-side writes:

```env
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## 2) Create Blog + Events Tables

Open Supabase Dashboard -> SQL Editor, then run:

- `supabase-blog-schema.sql`

This creates:
- `public.blog_posts` table
- `public.events` table
- `public.event_registrations` table
- indexes
- auto-update trigger for `updated_at`
- temporary open RLS policies (for current no-auth admin flow)
- SEO columns (`seo_title`, `seo_description`, `seo_keywords`, `canonical_url`, `og_image`)

## 3) Restart Development Server

```bash
npm run dev
```

## 4) Verify

- Open `/blogadmin`
- Create a post
- Confirm it appears in Supabase table `blog_posts`
- Approve/reject and check status updates

## 5) Blog Pathway (Clear Flow)

- Admin dashboard path: `/blogadmin` (also aliased from `/blog-admin`)
- Admin actions call API: `/api/blog`, `/api/blog/[id]`
- Public blog route pattern: `/blog/[slug]`
- API endpoint for slug data: `/api/blog/slug/[slug]`
- Approval email link to dashboard uses `NEXT_PUBLIC_SITE_URL + /blogadmin`
- Publish email link uses `NEXT_PUBLIC_SITE_URL + /blog/{slug}`

## 6) Events Pathway (Clear Flow)

- Admin dashboard path: `/eventsadmin` (also aliased from `/events-admin`)
- Admin actions call API: `/api/events`, `/api/events/[id]`
- Public events page uses API: `/api/events?upcoming=true`
- Registration endpoint: `/api/events/[id]/register`
- Registration emails are sent to:
  - the participant email submitted in the form
  - `ADMIN_EMAIL`

- **Important:** If events are still not persisting after deployment, re-run `supabase-blog-schema.sql` in Supabase SQL Editor so `events` and `event_registrations` tables/policies exist.

## 7) Where To Put Keys In Production

- Local development: `.env.local`
- Vercel/hosting: Project Settings -> Environment Variables (same key names)
- Supabase keys go in app env only; table schema goes in Supabase SQL Editor
