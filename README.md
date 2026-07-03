# Auth App

A simple login and registration app built with [Next.js](https://nextjs.org) and [Supabase Auth](https://supabase.com/docs/guides/auth).

## Setup

### 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. In **Project Settings → API**, copy your **Project URL** and **anon public** key.

### 2. Configure environment variables

Copy the example env file and add your Supabase credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Configure Supabase Auth (optional)

In the Supabase dashboard under **Authentication → URL Configuration**, set:

- **Site URL**: `http://localhost:3000` (for local development)
- **Redirect URLs**: add `http://localhost:3000/auth/callback`

If email confirmation is enabled (default), new users must confirm their email before signing in.

### 4. Run the app

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home — shows auth status |
| `/login` | Sign in with email and password |
| `/register` | Create a new account |
| `/auth/callback` | Handles email confirmation redirects |

## Project structure

```
src/
├── app/
│   ├── auth/callback/route.ts   # Email confirmation handler
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── page.tsx                 # Home page
├── components/
│   ├── auth-form.tsx            # Shared login/register form
│   └── sign-out-button.tsx
├── lib/supabase/
│   ├── client.ts                # Browser Supabase client
│   ├── server.ts                # Server Supabase client
│   └── middleware.ts            # Session refresh helper
└── middleware.ts                # Keeps auth session in sync
```
