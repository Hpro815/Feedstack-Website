'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AppIcon } from '../components/Navbar'
import Link from 'next/link'

const perks = [
  { icon: '⚡', text: 'Unlimited habit stacks' },
  { icon: '🔥', text: 'Advanced streak tracking' },
  { icon: '📊', text: 'Full analytics dashboard' },
  { icon: '🚀', text: 'Every future Pro feature, free' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/dRm3cu5ad0Kg7Yq1tqcQU02'

export default function WaitlistPage() {
  const [clicked, setClicked] = useState(false)

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#0A0A0F', color: '#F0F0FF', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Minimal navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2.5">
          <AppIcon size={30} />
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '17px' }}>
            Feedstack
          </span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:-translate-x-0.5"
          style={{
            color: '#888899',
            background: 'rgba(108,99,255,0.08)',
            border: '1px solid rgba(108,99,255,0.18)',
            borderRadius: '10px',
            padding: '6px 14px',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F0F0FF')}
          onMouseLeave={e => (e.currentTarget.style.color = '#888899')}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </Link>
      </nav>

      {/* Background glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(108,99,255,0.14) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 80% 70%, rgba(62,207,142,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Main */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto w-full flex flex-col items-center">

          {/* Badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold"
            style={{
              background: 'rgba(62,207,142,0.1)',
              border: '1px solid rgba(62,207,142,0.25)',
              color: '#3ecf8e',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e] animate-pulse inline-block" />
            Waitlist offer · Limited spots
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="show"
            className="font-extrabold leading-tight mb-4"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(36px, 6vw, 64px)',
              lineHeight: 1.05,
            }}
          >
            Get{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #3ecf8e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              60% off
            </span>
            <br />
            Lifetime Pro
          </motion.h1>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="mb-12"
            style={{ color: '#888899', fontSize: 'clamp(15px, 2vw, 18px)', maxWidth: '460px' }}
          >
            For the <span style={{ color: '#F0F0FF' }}>Android app</span>. Lock in your founding price today. Your Pro unlock code will be <span style={{ color: '#F0F0FF' }}>emailed to you</span> when we launch.
          </motion.p>

          {/* Price comparison */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="show"
            className="flex items-center justify-center gap-6 mb-14"
          >
            {/* Strikethrough $25 */}
            <div className="relative flex items-center justify-center">
              <span
                className="font-extrabold select-none"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(48px, 8vw, 80px)',
                  color: '#888899',
                  lineHeight: 1,
                }}
              >
                $25
              </span>
              {/* Diagonal red line */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line
                  x1="8" y1="10"
                  x2="92" y2="90"
                  stroke="#ef4444"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center">
              <svg
                width="56" height="32"
                viewBox="0 0 56 32"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                {/* Curved arrow shaft */}
                <path
                  d="M4 16 Q28 4 48 16"
                  stroke="#6C63FF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Arrowhead */}
                <path
                  d="M40 10 L52 16 L40 22"
                  stroke="#6C63FF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* $14.99 */}
            <div className="flex flex-col items-center">
              <span
                className="font-extrabold"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(48px, 8vw, 80px)',
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, #6C63FF 0%, #3ecf8e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                $14.99
              </span>
              <span
                className="text-xs font-semibold mt-1"
                style={{ color: '#3ecf8e', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.08em' }}
              >
                LIFETIME · ONE-TIME
              </span>
            </div>
          </motion.div>

          {/* Perks */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="show"
            className="grid grid-cols-2 gap-3 mb-12 w-full max-w-md"
          >
            {perks.map((perk) => (
              <div
                key={perk.text}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-left"
                style={{
                  background: '#111118',
                  border: '1px solid rgba(108,99,255,0.12)',
                  color: '#C8C8D8',
                }}
              >
                <span className="text-base flex-shrink-0">{perk.icon}</span>
                <span style={{ fontFamily: 'Inter, sans-serif' }}>{perk.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate="show"
            className="w-full flex flex-col items-center gap-3"
          >
            <a
              href={STRIPE_PAYMENT_LINK}
              className="w-full max-w-sm rounded-2xl py-4 font-bold text-lg transition-all duration-200 hover:-translate-y-0.5 text-center block"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                background: 'linear-gradient(135deg, #6C63FF 0%, #5a52e8 100%)',
                color: '#F0F0FF',
                boxShadow: '0 4px 28px rgba(108,99,255,0.4)',
                textDecoration: 'none',
              }}
            >
              Claim my 60% off spot
            </a>

            {/* Subtle $1.99 note */}
            <p className="text-xs" style={{ color: '#888899' }}>
              A small{' '}
              <span style={{ color: '#F0F0FF' }}>$1.99</span>
              {' '}reservation holds your spot · 🔒 Secure checkout via Stripe
            </p>
          </motion.div>

        </div>
      </main>
    </div>
  )
}
