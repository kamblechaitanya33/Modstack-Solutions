-- Create contact submissions table
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Allow anyone to insert (for contact form)
alter table public.contact_submissions enable row level security;

create policy "allow_insert_contact_submissions"
  on public.contact_submissions for insert
  with check (true);

create policy "allow_read_own_contact_submissions"
  on public.contact_submissions for select
  using (true);
