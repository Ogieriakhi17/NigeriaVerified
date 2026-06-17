import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { verifyClaim } from '@/lib/ai'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

async function getQueryEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text
  })
  return response.data[0].embedding
}

export async function POST(request: NextRequest) {
  try {
    const { claim } = await request.json()

    if (!claim || claim.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please enter a claim of at least 10 characters' },
        { status: 400 }
      )
    }

    // convert the user's claim into a vector
    const queryEmbedding = await getQueryEmbedding(claim)

    // find the most semantically similar facts in our database
    const { data: facts, error } = await supabase.rpc('match_claims', {
      query_embedding: queryEmbedding,
      match_threshold: 0.3,
      match_count: 8
    })

    if (error) throw error

    console.log(`Found ${facts?.length ?? 0} relevant facts for claim: "${claim.substring(0, 50)}..."`)

    // call Claude with only the relevant facts
    const result = await verifyClaim(claim, facts ?? [])

    // save the user's check to the database
    const { data: savedCheck, error: saveError } = await supabase
      .from('user_checks')
      .insert({
        submitted_claim: claim,
        verdict: result.verdict,
        explanation: result.explanation,
        confidence: result.confidence,
      })
      .select('id')
      .single()

    if (saveError) throw saveError

    return NextResponse.json({
      id: savedCheck.id,
      ...result
    })

  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}