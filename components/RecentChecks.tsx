import Link from 'next/link'

interface Check {
  id: string
  submitted_claim: string
  verdict: 'TRUE' | 'FALSE' | 'MISLEADING' | 'UNVERIFIED'
  created_at: string
}

const verdictStyles: Record<Check['verdict'], { bg: string; text: string; label: string; emoji: string }> = {
  TRUE: { bg: '#0d2b0d', text: '#00c853', label: 'TRUE', emoji: '✅' },
  FALSE: { bg: '#2b0d0d', text: '#ff5252', label: 'FALSE', emoji: '❌' },
  MISLEADING: { bg: '#2b1a00', text: '#ffab40', label: 'MISLEADING', emoji: '⚠️' },
  UNVERIFIED: { bg: '#1a1a1a', text: '#888', label: 'UNVERIFIED', emoji: '❓' }
}

export default function RecentChecks({ checks }: { checks: Check[] }) {
  if (checks.length === 0) return null

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-medium" style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
        RECENT CHECKS
      </p>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {checks.map((check) => {
          const style = verdictStyles[check.verdict]
          return (
            <Link
              key={check.id}
              href={`/check/${check.id}`}
              className="card p-4 flex items-start gap-3 transition-all hover:scale-[1.01]"
              style={{ textDecoration: 'none' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                style={{ background: style.bg }}>
                {style.emoji}
              </div>

              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <p className="text-sm leading-snug line-clamp-2"
                  style={{ color: 'var(--text-secondary)' }}>
                  {check.submitted_claim}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ background: style.bg, color: style.text }}>
                    {style.label}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {new Date(check.created_at).toLocaleDateString('en-NG', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </span>
                </div>
              </div>

              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>→</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}