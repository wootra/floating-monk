# Bulletin Board — Implementation Plan

## Overview
A simple Q&A bulletin board for the Floating Monk site.
- Public: read posts (paginated, 20 per page)
- Members only: write new posts (login required)
- No public sign-up — accounts created manually in Supabase

---

## Tech Stack
| Layer | Choice | Reason |
|---|---|---|
| Backend / DB | Supabase (Postgres + Auth) | Managed, free tier, manual user creation via dashboard |
| Auth | Supabase Auth (email+password) | Handles password hashing; users added via Supabase dashboard |
| Frontend | React + React Router (existing) | Already in project |
| State | React Context (AuthContext) | Lightweight, no extra dep |

---

## Supabase Setup (manual steps before coding)

### 1. Create project at supabase.com
Copy `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` into `.env`.

### 2. Create `posts` table
```sql
create table posts (
  id          bigint generated always as identity primary key,
  created_at  timestamptz default now() not null,
  author_id   uuid references auth.users(id) not null,
  author_name text not null,
  title       text not null,
  body        text not null
);

-- Public read
alter table posts enable row level security;
create policy "Anyone can read posts"
  on posts for select using (true);

-- Only authenticated members can insert
create policy "Members can insert posts"
  on posts for insert
  with check (auth.uid() = author_id);
```

### 3. Create member accounts
Use Supabase dashboard → Authentication → Users → "Add user" (email + password).
No sign-up flow is exposed on the site.

---

## Routes

| Path | Component | Auth required |
|---|---|---|
| `/board` | `BulletinBoard` | No (read) |
| `/board/new` | `NewPost` | Yes → redirect `/login` |
| `/login` | `Login` | No |

---

## File Structure
```
src/
  lib/
    supabaseClient.js       ← createClient(url, key)
  context/
    AuthContext.jsx         ← session state, login(), logout()
  pages/
    BulletinBoard.jsx       ← list + pagination
    NewPost.jsx             ← form (title + body)
    Login.jsx               ← email + password, no sign-up
  components/
    ProtectedRoute.jsx      ← wraps routes requiring auth
    Header.jsx              ← add "Board" nav link  (existing)
```

---

## Component Details

### `AuthContext`
- On mount: `supabase.auth.getSession()` + subscribe to `onAuthStateChange`
- Exposes: `session`, `user`, `login(email, pass)`, `logout()`

### `Login` page
- Two fields: Email, Password
- On submit: `supabase.auth.signInWithPassword({ email, password })`
- On success: redirect to `/board` (or the page that triggered login)
- No "Create account" or "Forgot password" UI

### `ProtectedRoute`
- If `session` is null → `<Navigate to="/login" state={{ from: location }} />`
- Otherwise renders `<Outlet />`

### `BulletinBoard` page
- Fetch: `supabase.from('posts').select('*').order('created_at', { ascending: false }).range(from, to)`
- Pagination state: `page` (0-based), page size = 20
- Count: `select('*', { count: 'exact', head: true })`
- UI: card list of posts, prev/next buttons, "Write a post" button (visible to logged-in members only, links to `/board/new`)

### `NewPost` page (protected)
- Fields: Title (text), Body (textarea)
- On submit: insert `{ author_id: user.id, author_name: user.email, title, body }`
- On success: navigate to `/board`

---

## Environment Variables (`.env`)
```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```
Add `.env` to `.gitignore` (already standard in Vite).

---

## Dependencies to install
```
npm install @supabase/supabase-js
```

---

## Privacy Email
Update `PrivacyMySmartTranslator.jsx` contact email → `admin@floating-monk.org`

---

## Out of Scope (for now)
- Replies / threading (posts are flat Q&A)
- Rich text editor
- File attachments
- Email notifications
- Admin moderation UI
