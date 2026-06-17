import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export type Verdict = 'TRUE' | 'FALSE' | 'MISLEADING' | 'UNVERIFIED'

export interface VerificationResult {
  verdict: Verdict
  confidence: number
  explanation: string
  sources: string[]
}

export async function verifyClaim(
  claim: string,
  relevantFacts: { claim: string; verdict: string; explanation: string; source_url: string | null }[]
): Promise<VerificationResult> {

  const factsContext = relevantFacts.length > 0
    ? relevantFacts.map((f, i) =>
        `Fact ${i + 1}:
         Claim: ${f.claim}
         Verdict: ${f.verdict}
         Explanation: ${f.explanation}
         Source: ${f.source_url ?? 'No source'}`
      ).join('\n\n')
    : 'No directly matching facts found in database.'

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: `You are NaijaCheck, a Nigerian election fact-checker. A user has submitted a claim they received on WhatsApp or social media. Your job is to verify it using the facts provided.

SUBMITTED CLAIM:
"${claim}"

VERIFIED FACTS FROM OUR DATABASE:
${factsContext}

Based on the above, respond with ONLY a valid JSON object in this exact format, no extra text:
{
  "verdict": "TRUE" or "FALSE" or "MISLEADING" or "UNVERIFIED",
  "confidence": a number between 0 and 100,
  "explanation": "2-3 sentences in plain simple English that a non-technical Nigerian voter would understand",
  "sources": ["array of source URLs used, empty array if none"]
}`
      }
    ]
  })

  const rawText = message.content
    .filter(block => block.type === 'text')
    .map(block => block.text)
    .join('')

  const cleaned = rawText.replace(/```json|```/g, '').trim()
  const result = JSON.parse(cleaned)
  return result as VerificationResult
}