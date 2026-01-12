-- Create portfolio projects table
create table if not exists public.portfolio_projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  category text not null,
  image_url text,
  client_name text,
  industry text,
  challenge text,
  solution text,
  results text,
  technologies text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Allow anyone to read portfolio
alter table public.portfolio_projects enable row level security;

create policy "allow_read_portfolio"
  on public.portfolio_projects for select
  using (true);
