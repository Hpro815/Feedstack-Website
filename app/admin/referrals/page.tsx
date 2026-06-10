import { cookies } from 'next/headers'
import { getSupabaseClient } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

const AUTH_COOKIE = 'feedstack_admin_auth'

async function authenticate(formData: FormData) {
  'use server'
  const password = formData.get('password')
  if (password === process.env.ADMIN_PASSWORD) {
    cookies().set(AUTH_COOKIE, process.env.ADMIN_PASSWORD as string, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/admin',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
  }
}

type ReferralRow = {
  creator: string
  visited_at: string
}

type CreatorStats = {
  creator: string
  totalClicks: number
  monthClicks: number
  lastClick: string
}

export default async function AdminReferralsPage() {
  const isAuthed = cookies().get(AUTH_COOKIE)?.value === process.env.ADMIN_PASSWORD

  if (!isAuthed) {
    return <LoginForm action={authenticate} />
  }

  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('referrals')
    .select('creator, visited_at')
    .order('visited_at', { ascending: false })

  const stats = aggregateStats((data as ReferralRow[]) ?? [])

  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: '#0A0A0F', color: '#F0F0FF', fontFamily: 'Inter, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className="font-extrabold mb-2"
          style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)' }}
        >
          Referral Stats
        </h1>
        <p className="text-sm mb-8" style={{ color: '#888899' }}>
          {stats.length} creator{stats.length === 1 ? '' : 's'} tracked
        </p>

        {error && (
          <div
            className="rounded-2xl p-4 mb-6 text-sm"
            style={{ background: '#1f0e0e', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}
          >
            Failed to load referrals: {error.message}
          </div>
        )}

        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: '#111118', border: '1px solid rgba(108,99,255,0.15)' }}
        >
          <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(108,99,255,0.15)' }}>
                <Th>Creator</Th>
                <Th align="right">Total Clicks</Th>
                <Th align="right">This Month</Th>
                <Th align="right">Last Click</Th>
              </tr>
            </thead>
            <tbody>
              {stats.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-10" style={{ color: '#888899' }}>
                    No referral clicks yet.
                  </td>
                </tr>
              ) : (
                stats.map((row, i) => (
                  <tr
                    key={row.creator}
                    style={{
                      borderBottom: i === stats.length - 1 ? 'none' : '1px solid rgba(108,99,255,0.08)',
                    }}
                  >
                    <Td>
                      <span style={{ color: '#3ecf8e', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                        /{row.creator}
                      </span>
                    </Td>
                    <Td align="right">
                      <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                        {row.totalClicks.toLocaleString()}
                      </span>
                    </Td>
                    <Td align="right">{row.monthClicks.toLocaleString()}</Td>
                    <Td align="right" muted>
                      {new Date(row.lastClick).toLocaleString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </Td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

function aggregateStats(rows: ReferralRow[]): CreatorStats[] {
  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)

  const map = new Map<string, CreatorStats>()

  for (const row of rows) {
    const visitedAt = new Date(row.visited_at)
    const existing = map.get(row.creator)

    if (existing) {
      existing.totalClicks += 1
      if (visitedAt >= monthStart) existing.monthClicks += 1
      if (visitedAt > new Date(existing.lastClick)) existing.lastClick = row.visited_at
    } else {
      map.set(row.creator, {
        creator: row.creator,
        totalClicks: 1,
        monthClicks: visitedAt >= monthStart ? 1 : 0,
        lastClick: row.visited_at,
      })
    }
  }

  return Array.from(map.values()).sort((a, b) => b.totalClicks - a.totalClicks)
}

function Th({ children, align = 'left' }: { children: React.ReactNode; align?: 'left' | 'right' }) {
  return (
    <th
      className="px-5 py-4 font-semibold text-xs tracking-wider uppercase"
      style={{
        textAlign: align,
        color: '#888899',
        fontFamily: 'Space Grotesk, sans-serif',
      }}
    >
      {children}
    </th>
  )
}

function Td({
  children,
  align = 'left',
  muted = false,
}: {
  children: React.ReactNode
  align?: 'left' | 'right'
  muted?: boolean
}) {
  return (
    <td
      className="px-5 py-4"
      style={{ textAlign: align, color: muted ? '#888899' : '#F0F0FF' }}
    >
      {children}
    </td>
  )
}

function LoginForm({ action }: { action: (formData: FormData) => Promise<void> }) {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: '#0A0A0F', color: '#F0F0FF', fontFamily: 'Inter, sans-serif' }}
    >
      <form
        action={action}
        className="w-full rounded-2xl p-8"
        style={{
          maxWidth: '360px',
          background: '#111118',
          border: '1px solid rgba(108,99,255,0.15)',
        }}
      >
        <h1
          className="font-extrabold mb-2 text-2xl"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Admin Access
        </h1>
        <p className="text-sm mb-6" style={{ color: '#888899' }}>
          Enter the admin password to view referral stats.
        </p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full rounded-xl px-4 py-3 mb-4 text-sm outline-none"
          style={{
            background: '#0A0A0F',
            border: '1px solid rgba(108,99,255,0.2)',
            color: '#F0F0FF',
          }}
        />
        <button type="submit" className="btn-primary w-full justify-center">
          Sign in
        </button>
      </form>
    </main>
  )
}
