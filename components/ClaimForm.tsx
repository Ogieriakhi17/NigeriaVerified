'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ClaimForm() {
  const [claim, setClaim] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit() {
    if (claim.trim().length < 10) {
      setError('Please enter a longer claim')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claim })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Something went wrong')
        return
      }

      router.push(`/check/${data.id}`)

    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <textarea
        className="w-full h-36 rounded-2xl p-4 text-sm leading-relaxed resize-none outline-none transition-all"
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          color: 'var(--text-primary)',
          caretColor: 'var(--green-primary)',
        }}
        placeholder='Paste claim from WhatsApp e.g. "INEC don cancel election for Lagos..."'
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        onFocus={(e) => e.target.style.borderColor = 'var(--green-primary)'}
        onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
      />

      {error && (
        <p className="text-sm px-1" style={{ color: '#ff5252' }}>{error}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading || claim.trim().length < 10}
        className="grad-btn w-full py-4 rounded-2xl text-sm font-semibold text-black disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Verifying...
          </span>
        ) : 'Verify this claim →'}
      </button>
    </div>
  )
}