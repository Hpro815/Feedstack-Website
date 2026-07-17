import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase'

const EXCLUDED_ROUTES = [
  'privacy',
  'privacy-policy',
  'terms',
  'about',
  'admin',
  'api',
  'favicon.ico',
  'robots.txt',
  'sitemap.xml',
]

export default async function CreatorReferralPage({
  params,
}: {
  params: { creator: string }
}) {
  const creator = params.creator?.toLowerCase()

  if (!creator || EXCLUDED_ROUTES.includes(creator)) {
    redirect('/')
  }

  const headerList = headers()
  const userAgent = headerList.get('user-agent')
  const country = headerList.get('x-vercel-ip-country')

  const supabase = getSupabaseClient()
  await supabase.from('referrals').insert({
    creator,
    user_agent: userAgent,
    country,
  })

  redirect('/')
}
