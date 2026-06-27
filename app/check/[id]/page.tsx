import { supabase } from '@/lib/supabase'
import VerdictCard from '@/components/VerdictCard'
import { notFound } from 'next/navigation'

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
    <main className="min-h-screen px-4 py-12 flex flex-col items-center md:px-8">
      <div className="w-full max-w-xl flex flex-col gap-8">
        <VerdictCard
          claim={data.submitted_claim}
          verdict={data.verdict}
          explanation={data.explanation}
          confidence={data.confidence}
        />

        <a
          href="/"
          className="text-sm text-center"
          style={{ color: 'var(--text-muted)' }}
        >
          ← Check another claim
        </a>
      </div>
    </main>
  )
}