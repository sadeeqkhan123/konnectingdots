-- Run this in Supabase SQL Editor
-- It creates the blog_posts table and basic RLS policies.

create extension if not exists pgcrypto;

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null,
  author text not null,
  excerpt text not null,
  content text not null,
  image text not null default '/placeholder.svg',
  status text not null default 'pending' check (status in ('draft', 'pending', 'published', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz,
  read_time integer,
  submitted_by text,
  submitted_by_email text,
  seo_title text,
  seo_description text,
  seo_keywords text,
  canonical_url text,
  og_image text
);

alter table if exists public.blog_posts add column if not exists seo_title text;
alter table if exists public.blog_posts add column if not exists seo_description text;
alter table if exists public.blog_posts add column if not exists seo_keywords text;
alter table if exists public.blog_posts add column if not exists canonical_url text;
alter table if exists public.blog_posts add column if not exists og_image text;

create index if not exists blog_posts_status_idx on public.blog_posts (status);
create index if not exists blog_posts_created_at_idx on public.blog_posts (created_at desc);
create index if not exists blog_posts_published_at_idx on public.blog_posts (published_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_blog_posts_updated_at on public.blog_posts;
create trigger trg_blog_posts_updated_at
before update on public.blog_posts
for each row
execute function public.set_updated_at();

alter table public.blog_posts enable row level security;

-- Temporary open policies so the current app works without Supabase Auth.
-- Restrict these once you add authentication/authorization.
drop policy if exists "Open read access" on public.blog_posts;
create policy "Open read access"
on public.blog_posts
for select
to anon, authenticated
using (true);

drop policy if exists "Open insert access" on public.blog_posts;
create policy "Open insert access"
on public.blog_posts
for insert
to anon, authenticated
with check (true);

drop policy if exists "Open update access" on public.blog_posts;
create policy "Open update access"
on public.blog_posts
for update
to anon, authenticated
using (true)
with check (true);

drop policy if exists "Open delete access" on public.blog_posts;
create policy "Open delete access"
on public.blog_posts
for delete
to anon, authenticated
using (true);

-- -------------------------------------------------------------------
-- Events and event registrations (for /events + /eventsadmin)
-- -------------------------------------------------------------------

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  category text not null,
  date date not null,
  time text not null,
  location text not null,
  format text not null check (format in ('in-person', 'online', 'hybrid')),
  price numeric(10,2) not null default 0,
  capacity integer not null default 1,
  registered integer not null default 0,
  status text not null default 'upcoming' check (status in ('upcoming', 'ongoing', 'completed', 'cancelled')),
  image text,
  registration_duration text,
  registration_outcomes text,
  registration_certification text,
  registration_investment_label text,
  registration_payment_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  name text not null,
  email text not null,
  phone text not null,
  company text,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz not null default now()
);

create index if not exists events_date_idx on public.events (date asc);
create index if not exists events_status_idx on public.events (status);
create index if not exists event_registrations_event_id_idx on public.event_registrations (event_id);
create index if not exists event_registrations_email_idx on public.event_registrations (email);

drop trigger if exists trg_events_updated_at on public.events;
create trigger trg_events_updated_at
before update on public.events
for each row
execute function public.set_updated_at();

alter table public.events enable row level security;
alter table public.event_registrations enable row level security;

drop policy if exists "Open read access events" on public.events;
create policy "Open read access events"
on public.events
for select
to anon, authenticated
using (true);

drop policy if exists "Open insert access events" on public.events;
create policy "Open insert access events"
on public.events
for insert
to anon, authenticated
with check (true);

drop policy if exists "Open update access events" on public.events;
create policy "Open update access events"
on public.events
for update
to anon, authenticated
using (true)
with check (true);

drop policy if exists "Open delete access events" on public.events;
create policy "Open delete access events"
on public.events
for delete
to anon, authenticated
using (true);

drop policy if exists "Open read access event registrations" on public.event_registrations;
create policy "Open read access event registrations"
on public.event_registrations
for select
to anon, authenticated
using (true);

drop policy if exists "Open insert access event registrations" on public.event_registrations;
create policy "Open insert access event registrations"
on public.event_registrations
for insert
to anon, authenticated
with check (true);

drop policy if exists "Open update access event registrations" on public.event_registrations;
create policy "Open update access event registrations"
on public.event_registrations
for update
to anon, authenticated
using (true)
with check (true);

drop policy if exists "Open delete access event registrations" on public.event_registrations;
create policy "Open delete access event registrations"
on public.event_registrations
for delete
to anon, authenticated
using (true);
