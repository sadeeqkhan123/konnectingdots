-- Add per-event registration confirmation email fields (run once on existing DBs).
alter table public.events add column if not exists registration_duration text;
alter table public.events add column if not exists registration_outcomes text;
alter table public.events add column if not exists registration_certification text;
alter table public.events add column if not exists registration_investment_label text;
alter table public.events add column if not exists registration_payment_note text;
