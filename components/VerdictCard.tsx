'use client'

interface Props {
  claim: string
  verdict: 'TRUE' | 'FALSE' | 'MISLEADING' | 'UNVERIFIED'
  explanation: string
  confidence: number
}

const verdictConfig = {
  TRUE: { label: 'TRUE', color: '#00c853', bg: '#0d2b0d', border: '#1a4a1a', emoji: '✅' },
  FALSE: { label: 'FALSE', color: '#ff5252', bg: '#2b0d0d', border: '#4a1a1a', emoji: '❌' },
  MISLEADING: { label: 'MISLEADING', color: '#ffab40', bg: '#2b1a00', border: '#4a3000', emoji: '⚠️' },
  UNVERIFIED: { label: 'UNVERIFIED', color: '#888888', bg: '#1a1a1a', border: '#2a2a2a', emoji: '❓' }
}

export default function VerdictCard({ claim, verdict, explanation, confidence }: Props) {
  const config = verdictConfig[verdict]

  function copyLink() {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied! Share it to debunk this claim.')
  }

  return (
    <div className="w-full max-w-xl flex flex-col gap-4">

      {/* claim */}
      <div className="card p-5">
        <p className="text-xs font-medium mb-2"
          style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
          CLAIM SUBMITTED
        </p>
        <p className="text-sm leading-relaxed italic"
          style={{ color: 'var(--text-secondary)' }}>
          "{claim}"
        </p>
      </div>

      {/* verdict */}
      <div className="p-5 rounded-2xl"
        style={{ background: config.bg, border: `1px solid ${config.border}` }}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
            style={{ background: 'rgba(0,0,0,0.3)' }}>
            {config.emoji}
          </div>
          <div>
            <p className="text-xs font-medium mb-1"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              VERDICT
            </p>
            <p className="text-4xl font-bold" style={{ color: config.color }}>
              {config.label}
            </p>
          </div>
        </div>
      </div>

      {/* explanation */}
      <div className="card p-5">
        <p className="text-xs font-medium mb-2"
          style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
          EXPLANATION
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {explanation}
        </p>
      </div>

      {/* confidence */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium"
            style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
            CONFIDENCE
          </p>
          <p className="text-sm font-semibold" style={{ color: config.color }}>
            {confidence}%
          </p>
        </div>
        <div className="w-full h-1.5 rounded-full" style={{ background: '#1a1a1a' }}>
          <div
            className="h-1.5 rounded-full grad-bar transition-all"
            style={{ width: `${confidence}%` }}
          />
        </div>
      </div>

      {/* share */}
      <button
        onClick={copyLink}
        className="w-full py-4 rounded-2xl text-sm font-medium transition-all hover:scale-[1.01]"
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          color: 'var(--text-secondary)'
        }}
      >
        Copy link to share this verdict →
      </button>

    </div>
  )
}