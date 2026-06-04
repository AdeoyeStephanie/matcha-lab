@AGENTS.md

# Matcha Lab

A recipe tracking and AI-powered enhancement app for matcha latte enthusiasts. Users can store recipes with photos and notes, and get AI-generated suggestions to improve them.

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router) — see AGENTS.md before writing any Next.js code
- **UI**: React 19, Tailwind CSS 4, Geist fonts
- **Language**: TypeScript 5 (strict mode); source files mix `.tsx` and `.jsx`
- **Auth + DB**: Supabase (email/password auth, PostgreSQL)
- **AI**: Google Gemini API (`@google/generative-ai`) for recipe feedback; `@anthropic-ai/sdk` is installed but not yet wired up
- **Deployment target**: Vercel

## Project Structure

```
app/
  layout.tsx              # Root layout (fonts, Tailwind)
  page.tsx                # Landing page
  login/page.jsx          # Login form
  signup/page.jsx         # Signup form
  actions/
    auth.js               # Server actions: signUp(), logIn()
    gemini.js             # Server action: generateRecipeFeedback()
    dashboard/page.jsx    # Protected dashboard (redirects to /login if no session)
utils/
  supabase/server.js      # Server-side Supabase client (SSR cookies)
  supabase.js             # Client-side Supabase client (legacy, prefer server.js)
```

## Key Patterns

**Auth**: All auth runs through server actions in `app/actions/auth.js`. Protected pages call `createClient()` from `utils/supabase/server.js` and redirect to `/login` if `supabase.auth.getUser()` returns an error or null user.

**Server actions**: Files in `app/actions/` use `'use server'` at the top. Keep AI and DB calls here — never expose API keys to the client.

**Routing**: App Router only. No `pages/` directory.

**Styling**: Tailwind CSS 4 via `@import "tailwindcss"` in `globals.css`. Color palette is earthy/matcha-themed — sage green (`#A3B18A`, `#74A12E`), cream (`#F9F7F2`), dark gray text (`#4A4A4A`).

**Path alias**: `@/*` maps to the project root (e.g. `import { createClient } from '@/utils/supabase/server'`).

## Dev Commands

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # ESLint
```

## Environment Variables

Required in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
GEMINI_API_KEY
NEXT_PUBLIC_APP_URL
```

## Current State

**Features Built**: user signup, login, protected dashboard route, Gemini AI feedback server action.

**Not yet built**: recipe CRUD UI, recipe database schema wired to the app, photo uploads, AI feedback UI, any recipe display in the dashboard.
