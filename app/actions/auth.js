// server action for user sign up logic using supabase auth 
'use server'

import { createClient } from '../../utils/supabase/server'
import { redirect } from 'next/navigation'

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