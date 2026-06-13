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

      // redirect to the shareable verdict page
      router.push(`/check/${data.id}`)

    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <textarea
        className="w-full h-40 bg-gray-900 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 resize-none text-base"
        placeholder="Paste a claim you received on WhatsApp or social media e.g. 'INEC has postponed the 2027 elections...'"
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
      />

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-green-500 hover:bg-green-400 disabled:bg-gray-700 disabled:text-gray-500 text-black font-semibold py-4 rounded-xl transition-colors text-base"
      >
        {loading ? 'Verifying...' : 'Verify this claim'}
      </button>

      <p className="text-gray-600 text-xs text-center">
        Powered by AI — always cross-check with official INEC sources
      </p>
    </div>
  )
}