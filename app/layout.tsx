import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NaijaCheck — Nigerian Election Civic Tools',
  description: 'Free civic tools to fight election misinformation and keep Nigerian voters informed. Built for the 2027 elections.',
  openGraph: {
    title: 'NaijaCheck',
    description: 'Free civic tools to fight Nigerian election misinformation.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          padding: '20px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '0.5px solid #e5e5e5',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          position: 'sticky',
          top: 0,
          zIndex: 50
        }}>
          <a href="/" style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: '#111',
            textDecoration: 'none'
          }}>
            NAIJACHECK
          </a>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="/checker" style={{
              fontSize: '12px',
              color: '#000',
              textDecoration: 'none',
              letterSpacing: '0.05em'
            }}>
              CLAIM VERIFIER
            </a>
            <a href="/candidates" style={{
              fontSize: '12px',
              color: '#000',
              textDecoration: 'none',
              letterSpacing: '0.05em'
            }}>
              CANDIDATES
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}