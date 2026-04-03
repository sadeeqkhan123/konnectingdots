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
  submitted_by_email text
);

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
