// User signup page with form that submits to a server action for handling user sign up with Supabase auth (auth.js)

import { signup } from '../actions/auth';

export default function SignupPage({ searchParams }) {
  // This grabs the error message from the URL if the signup fails
  const error = searchParams?.error;

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      backgroundColor: '#F9F7F2', // Soft off-white/cream
      fontFamily: 'sans-serif',
      color: '#4A4A4A'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '400px', 
        padding: '40px', 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)' 
      }}>
        <h1 style={{ fontSize: '24px', marginBottom: '8px', textAlign: 'center', fontWeight: '500' }}>
          Create an Account
        </h1>
        <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '32px', color: '#8C8C8C' }}>
          your favorite matcha latte is just one click away!
        </p>

        <form action={signup} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>
              Email
            </label>
            <input 
              name="email" 
              type="email" 
              required 
              style={{ width: '100%', padding: '12px', border: '1px solid #EAEAEA', borderRadius: '6px', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>
              Password
            </label>
            <input 
              name="password" 
              type="password" 
              required 
              style={{ width: '100%', padding: '12px', border: '1px solid #EAEAEA', borderRadius: '6px', outline: 'none' }}
            />
          </div>

          {error && (
            <p style={{ color: '#D32F2F', fontSize: '13px', textAlign: 'center' }}>
              {error}
            </p>
          )}
          {/* submit the sign upform to the signup server action */}
          <button 
            type="submit"
            style={{ 
              marginTop: '12px', 
              padding: '14px', 
              backgroundColor: '#A3B18A', // Sage green
              color: 'white', 
              border: 'none', 
              borderRadius: '6px', 
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}