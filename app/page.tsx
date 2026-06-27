import ClaimForm from '@/components/ClaimForm'
import RecentChecks from '@/components/RecentChecks'
import { supabase } from '@/lib/supabase'

async function getRecentChecks() {
  const { data, error } = await supabase
    .from('user_checks')
    .select('id, submitted_claim, verdict, created_at')
    .order('created_at', { ascending: false })
    .limit(10)

  if (error) {
    console.error('Failed to fetch recent checks:', error)
    return []
  }

  return data
}

export default async function Home() {
  const recentChecks = await getRecentChecks()

  return (
    <main className="min-h-screen px-4 py-16 md:px-8 lg:px-16">

      {/* hero */}
      <div className="max-w-2xl mx-auto mb-12 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div>
          <div className="ping-border inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full"
            style={{ background: '#0d2b0d' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: 'var(--green-primary)' }} />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: 'var(--green-primary)' }} />
            </span>
            <span className="text-xs font-medium" style={{ color: 'var(--green-primary)' }}>
              Live fact-checking
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-4 md:text-6xl">
            Don't forward.<br />
            <span className="grad-text">Verify first.</span>
          </h1>

          <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Paste any Nigerian election claim you received or come across.
            Get an instant AI-powered verdict backed by official INEC sources.
          </p>

          <ClaimForm />

          <p className="mt-4 text-xs text-center" style={{ color: 'var(--text-muted)' }}>
            Powered by Claude AI — always cross-check with{' '}
            <a href="https://inecnigeria.org" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--green-primary)' }}>
              inecnigeria.org
            </a>
          </p>
        </div>

        {/* stats sidebar — only shows on desktop */}
        <div className="hidden lg:flex lg:flex-col lg:gap-6">
          <div className="card p-6">
            <p className="text-xs font-medium mb-4" style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              WHY NAIJACHECK?
            </p>
            <div className="flex flex-col gap-4">
              {[
                { emoji: '⚡', title: 'Instant verification', desc: 'Get a verdict in under 5 seconds' },
                { emoji: '📚', title: 'INEC sourced', desc: 'Every fact traced to official sources' },
                { emoji: '🔗', title: 'Shareable verdicts', desc: 'Send the debunk back into the group chat' },
                { emoji: '🤖', title: 'AI powered', desc: 'Claude reasons over verified facts, not just keywords' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* recent checks */}
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <RecentChecks checks={recentChecks} />
      </div>

    </main>
  )
}