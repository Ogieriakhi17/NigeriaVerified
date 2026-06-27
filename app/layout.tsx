import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NaijaCheck — Nigerian Election Fact Checker',
  description: 'Verify Nigerian election claims instantly. Fight misinformation before you share.',
  openGraph: {
    title: 'NaijaCheck',
    description: 'Verify Nigerian election claims instantly.',
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
          borderBottom: '1px solid #1a1a1a',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          position: 'sticky',
          top: 0,
          background: 'rgba(10,10,10,0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 50
        }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--green-primary)'
            }} />
            <span style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: '#fff'
            }}>
              NAIJACHECK
            </span>
          </a>
        </nav>
        {children}
      </body>
    </html>
  )
}