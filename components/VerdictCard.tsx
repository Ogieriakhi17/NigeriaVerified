'use client'

interface Props {
  claim: string
  verdict: 'TRUE' | 'FALSE' | 'MISLEADING' | 'UNVERIFIED'
  explanation: string
  confidence: number
}

const verdictConfig = {
  TRUE: {
    label: 'True',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    text: 'text-green-400',
    emoji: '✅'
  },
  FALSE: {
    label: 'False',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    text: 'text-red-400',
    emoji: '❌'
  },
  MISLEADING: {
    label: 'Misleading',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    emoji: '⚠️'
  },
  UNVERIFIED: {
    label: 'Unverified',
    bg: 'bg-gray-500/10',
    border: 'border-gray-500/30',
    text: 'text-gray-400',
    emoji: '❓'
  }
}

export default function VerdictCard({ claim, verdict, explanation, confidence }: Props) {
  const config = verdictConfig[verdict]

  function copyLink() {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied! Share it to debunk this claim.')
  }

  return (
    <div className={`w-full max-w-2xl rounded-2xl border p-6 flex flex-col gap-5 ${config.bg} ${config.border}`}>

      <div className="flex flex-col gap-1">
        <p className="text-gray-500 text-xs uppercase tracking-widest">Claim submitted</p>
        <p className="text-gray-300 text-base italic">"{claim}"</p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-4xl">{config.emoji}</span>
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-widest">Verdict</p>
          <p className={`text-3xl font-bold ${config.text}`}>{config.label}</p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-gray-500 text-xs uppercase tracking-widest">Explanation</p>
        <p className="text-gray-200 text-base leading-relaxed">{explanation}</p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-gray-500 text-xs uppercase tracking-widest">Confidence</p>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${config.text.replace('text', 'bg')}`}
            style={{ width: `${confidence}%` }}
          />
        </div>
        <p className={`text-sm font-medium ${config.text}`}>{confidence}%</p>
      </div>

      <button
        onClick={copyLink}
        className="w-full border border-gray-700 hover:border-green-500 text-gray-400 hover:text-green-400 py-3 rounded-xl text-sm font-medium transition-colors"
      >
        📋 Copy link to share this verdict
      </button>
    </div>
  )
}