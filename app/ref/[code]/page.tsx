import { redirect } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase'

export default async function RefPage({ params }: { params: { code: string } }) {
  const supabase = getSupabaseClient()

  // Increment use count
  const { data } = await supabase
    .from('referral_codes')
    .select('uses')
    .eq('code', params.code)
    .single()

  if (data) {
    await supabase
      .from('referral_codes')
      .update({ uses: (data.uses ?? 0) + 1 })
      .eq('code', params.code)
  }

  redirect('/waitlist')
}
