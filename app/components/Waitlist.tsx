'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

async function submitEmail(email: string): Promise<{ error?: string }> {
  const res = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  const data = await res.json()
  if (!res.ok) return { error: data.error ?? 'Something went wrong.' }
  return {}
}

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setState('loading')
    const { error } = await submitEmail(email)
    if (error) {
      setErrorMsg(error)
      setState('error')
    } else {
      setState('success')
      setEmail('')
    }
  }

  return (
    <section
      id="waitlist"
      className="relative py-24 px-6 overflow-hidden"
      aria-labelledby="waitlist-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(108,99,255,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Early access</p>

          <h2
            id="waitlist-heading"
            className="font-extrabold mb-4"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#F0F0FF',
              lineHeight: 1.1,
            }}
          >
            Join the waitlist
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#888899',
              fontSize: 'clamp(16px, 2vw, 18px)',
              lineHeight: 1.7,
            }}
          >
            Be the first to know about new features, creator challenges, and
            exclusive early access drops.
          </p>

          <AnimatePresence mode="wait">
            {state === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl px-8 py-6 text-center"
                style={{
                  background: 'rgba(62,207,142,0.1)',
                  border: '1px solid rgba(62,207,142,0.25)',
                }}
              >
                <div className="text-3xl mb-2">🎉</div>
                <p
                  className="font-bold text-lg mb-1"
                  style={{ color: '#3ecf8e', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  You&apos;re on the list!
                </p>
                <p className="text-sm" style={{ color: '#888899' }}>
                  We&apos;ll be in touch when it&apos;s your turn.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (state === 'error') setState('idle')
                  }}
                  placeholder="you@example.com"
                  className="flex-1 rounded-xl px-5 py-4 text-base outline-none transition-all duration-200"
                  style={{
                    background: '#111118',
                    border: `1px solid ${state === 'error' ? 'rgba(239,68,68,0.5)' : 'rgba(108,99,255,0.2)'}`,
                    color: '#F0F0FF',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onFocus={(e) =>
                    (e.target.style.border = '1px solid rgba(108,99,255,0.6)')
                  }
                  onBlur={(e) =>
                    (e.target.style.border =
                      state === 'error'
                        ? '1px solid rgba(239,68,68,0.5)'
                        : '1px solid rgba(108,99,255,0.2)')
                  }
                />
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-primary whitespace-nowrap"
                  style={{ opacity: state === 'loading' ? 0.7 : 1 }}
                >
                  {state === 'loading' ? (
                    <svg
                      className="animate-spin"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <circle
                        cx="9"
                        cy="9"
                        r="7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                      />
                      <path
                        d="M9 2a7 7 0 0 1 7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : null}
                  {state === 'loading' ? 'Joining...' : 'Join waitlist'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {state === 'error' && (
            <p className="mt-3 text-sm" style={{ color: 'rgba(239,68,68,0.8)' }}>
              {errorMsg}
            </p>
          )}

          <p className="mt-4 text-xs" style={{ color: '#888899' }}>
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
