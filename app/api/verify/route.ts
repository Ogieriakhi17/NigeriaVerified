import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { verifyClaim } from '@/lib/ai'

export async function POST(request: NextRequest) {
  try {
    const { claim } = await request.json()

    if (!claim || claim.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please enter a claim of at least 10 characters' },
        { status: 400 }
      )
    }

    // fetch all facts from database to give the AI context
    const { data: facts, error } = await supabase
      .from('claims_database')
      .select('claim, verdict, explanation, source_url')

    if (error) throw error

    // call Claude 
    const result = await verifyClaim(claim, facts ?? [])

    // save the user's check to the database and get back the generated id
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