// server action for user sign up logic using supabase auth 
'use server'

import { createClient } from '../../utils/supabase/server'
import { redirect } from 'next/navigation'

//server action for user sign up logic using supabase auth
export async function signup(formData) {
  const supabase = await createClient()

  // fetch the user's email and password from the sign up form
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.error('Signup error:', error.message)
    return redirect('/signup?error=' + error.message)
  }

  // If successful, redirect user to a "check your email" page or dashboard
  return redirect('/dashboard')
}

// server action for user login logic using supabase auth
export async function login(formData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error('Login error:', error.message)
    return redirect('/login?error=' + error.message)
  }

  return redirect('/dashboard')
}