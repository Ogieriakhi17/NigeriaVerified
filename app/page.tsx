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
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-16 gap-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-400">NaijaCheck</h1>
        <p className="text-gray-400 mt-3 text-lg max-w-xl">
          Don't share misinformation. Paste any Nigerian election claim and we'll verify it instantly.
        </p>
      </div>

      <ClaimForm />

      <RecentChecks checks={recentChecks} />
    </main>
  )
}