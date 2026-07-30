import { redirect } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase'
import SuccessClient from './SuccessClient'

function generateCode(email: string, sessionId: string): string {
  const base = (email + sessionId).replace(/[^a-zA-Z0-9]/g, '')
  return base.slice(0, 8).toLowerCase() + Math.random().toString(36).slice(2, 6)
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  const sessionId = searchParams.session_id
  if (!sessionId) redirect('/waitlist')

  const supabase = getSupabaseClient()

  // Check if we already issued a code for this session
  const { data: existing } = await supabase
    .from('referral_codes')
    .select('code, email')
    .eq('stripe_session_id', sessionId)
    .single()

  if (existing) {
    return <SuccessClient code={existing.code} email={existing.email} />
  }

  // Verify session with Stripe and get email
  let email = 'you'
  try {
    const res = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${sessionId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        },
      }
    )
    const session = await res.json()
    email = session.customer_details?.email ?? session.customer_email ?? 'you'
  } catch {
    // proceed without email
  }

  const code = generateCode(email, sessionId)

  await supabase.from('referral_codes').insert({
    code,
    email,
    stripe_session_id: sessionId,
  })

  return <SuccessClient code={code} email={email} />
}
