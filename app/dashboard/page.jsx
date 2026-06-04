// dashbard / home page 


import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const supabase = await createClient();
  
  // This checks if a user session exists
  const { data: { user }, error } = await supabase.auth.getUser();

  // If NO user is found, send them back to login
  if (error || !user) {
    redirect('/login');
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Success!</h1>
      <p>Welcome to your lab, <strong>{user.email}</strong></p>
      <p>This page is only visible because you are logged in.</p>
    </div>
  );
}