import Link from 'next/link'

interface Check {
  id: string
  submitted_claim: string
  verdict: 'TRUE' | 'FALSE' | 'MISLEADING' | 'UNVERIFIED'
  created_at: string
}

const verdictStyles = {
  TRUE: 'bg-green-500/10 text-green-400 border-green-500/30',
  FALSE: 'bg-red-500/10 text-red-400 border-red-500/30',
  MISLEADING: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  UNVERIFIED: 'bg-gray-500/10 text-gray-400 border-gray-500/30'
}

const verdictEmoji = {
  TRUE: '✅',
  FALSE: '❌',
  MISLEADING: '⚠️',
  UNVERIFIED: '❓'
}

export default function RecentChecks({ checks }: { checks: Check[] }) {
  if (checks.length === 0) return null

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <h2 className="text-gray-500 text-sm uppercase tracking-widest">
        Recent checks
      </h2>

      <div className="flex flex-col gap-3">
        {checks.map((check) => (
          <Link
            key={check.id}
            href={`/check/${check.id}`}
            className="flex items-start gap-3 p-4 rounded-xl border border-gray-800 hover:border-gray-600 bg-gray-900/50 transition-colors group"
          >
            <span className="text-xl mt-0.5">
              {verdictEmoji[check.verdict]}
            </span>

            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <p className="text-gray-300 text-sm leading-snug line-clamp-2 group-hover:text-white transition-colors">
                {check.submitted_claim}
              </p>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full border ${verdictStyles[check.verdict]}`}>
                  {check.verdict}
                </span>
                <span className="text-gray-600 text-xs">
                  {new Date(check.created_at).toLocaleDateString('en-NG', {
                    day: 'numeric',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>

            <span className="text-gray-700 group-hover:text-gray-400 transition-colors text-sm mt-0.5">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}