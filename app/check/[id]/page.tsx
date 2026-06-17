import { supabase } from '@/lib/supabase'
import VerdictCard from '@/components/VerdictCard'
import { notFound } from 'next/navigation'
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>
}

export default async function CheckPage({ params }: Props) {
  const { id } = await params

  const { data, error } = await supabase
    .from('user_checks')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) notFound()

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 gap-8">
      <h1 className="text-3xl font-bold text-green-400">NigeriaVerified</h1>
      <VerdictCard
        claim={data.submitted_claim}
        verdict={data.verdict}
        explanation={data.explanation}
        confidence={data.confidence}
      />
      
      <Link href="/" className="text-gray-500 hover:text-green-400 text-sm transition-colors">
        ← Check another claim
      </Link>
    </main>
  )
}