import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text
  })
  return response.data[0].embedding
}

async function embedAllFacts() {
  console.log('Fetching all facts from database...')

  const { data: facts, error } = await supabase
    .from('claims_database')
    .select('id, claim, explanation')
    .is('embedding', null)

  if (error) {
    console.error('Failed to fetch facts:', error)
    process.exit(1)
  }

  console.log(`Found ${facts.length} unembedded facts. Generating embeddings...`)

  for (const fact of facts) {
    // combine claim and explanation for richer embedding
    const textToEmbed = `${fact.claim} ${fact.explanation}`

    const embedding = await generateEmbedding(textToEmbed)

    const { error: updateError } = await supabase
      .from('claims_database')
      .update({ embedding })
      .eq('id', fact.id)

    if (updateError) {
      console.error(`Failed to update fact ${fact.id}:`, updateError)
    } else {
      console.log(`Embedded: "${fact.claim.substring(0, 60)}..."`)
    }
  }

  console.log('Done! All facts have been embedded.')
  process.exit(0)
}

embedAllFacts()