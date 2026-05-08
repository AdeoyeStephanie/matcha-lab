// standard reciupe for next.js auth with Supabase, using the server component client to handle auth and db interactions on the backend. This allows us to securely manage user sessions and interact with our database without exposing sensitive information to the client side.
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient( // This is the standard way to create a Supabase client in a Next.js server component, using environment variables for the URL and anon key, and setting up cookie handling for auth sessions.
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // This can be ignored if you have middleware refreshing sessions
          }
        },
      },
    }
  )
}