import { login } from '../actions/auth';
import Link from 'next/link';

export default function LoginPage({ searchParams }) {
  const error = searchParams?.error;

  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'center', minHeight: '100vh', backgroundColor: '#F9F7F2', 
      fontFamily: 'sans-serif', color: '#4A4A4A' 
    }}>
      <div style={{ 
        width: '100%', maxWidth: '400px', padding: '40px', 
        backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' 
      }}>
        <h1 style={{ fontSize: '24px', marginBottom: '8px', textAlign: 'center', fontWeight: '500' }}>
          Welcome Back
        </h1>
        <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '32px', color: '#8C8C8C' }}>
          Log in to your matcha lab.
        </p>

        <form action={login} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>
              Email
            </label>
            <input name="email" type="email" required style={{ width: '100%', padding: '12px', border: '1px solid #EAEAEA', borderRadius: '6px' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>
              Password
            </label>
            <input name="password" type="password" required style={{ width: '100%', padding: '12px', border: '1px solid #EAEAEA', borderRadius: '6px' }} />
          </div>

          {error && <p style={{ color: '#D32F2F', fontSize: '13px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" style={{ marginTop: '12px', padding: '14px', backgroundColor: '#A3B18A', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px' }}>
            Log In
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '13px', marginTop: '24px', color: '#8C8C8C' }}>
          Don&apos;t have an account? <Link href="/signup" style={{ color: '#A3B18A', textDecoration: 'none' }}>Sign up here</Link>
        </p>
      </div>
    </div>
  );
}