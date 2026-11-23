-- 诗词拾光：Supabase 数据库初始化脚本
-- 在 Supabase Dashboard -> SQL Editor -> New query 中执行。

create table if not exists public.poetry_user_library (
  user_id uuid not null references auth.users(id) on delete cascade,
  poem_id integer not null,
  is_favorite boolean not null default false,
  last_read_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, poem_id)
);

create table if not exists public.poetry_user_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default '未命名摘抄' check (char_length(title) <= 80),
  content text not null check (char_length(content) <= 5000),
  poem_id integer,
  created_at timestamptz not null default now()
);

create index if not exists poetry_user_library_user_idx on public.poetry_user_library(user_id);
create index if not exists poetry_user_notes_user_created_idx on public.poetry_user_notes(user_id, created_at desc);

alter table public.poetry_user_library enable row level security;
alter table public.poetry_user_notes enable row level security;

drop policy if exists "Users manage their own library" on public.poetry_user_library;
create policy "Users manage their own library" on public.poetry_user_library
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users manage their own notes" on public.poetry_user_notes;
create policy "Users manage their own notes" on public.poetry_user_notes
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 不要把 service_role key 放进网页。前端只使用 anon/public key。
