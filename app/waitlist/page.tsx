'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AppIcon } from '../components/Navbar'
import Link from 'next/link'

const PRICE = '$1.99'

const perks = [
  { icon: '🚀', title: 'Early access', desc: 'Get Feedstack features before anyone else.' },
  { icon: '🔒', title: 'Founding member badge', desc: 'Locked-in status shown on your profile forever.' },
  { icon: '🎯', title: 'Priority support', desc: 'Direct line to the team — your feedback shapes the app.' },
  { icon: '🎁', title: 'Free premium upgrade', desc: 'First month of any future premium tier on us.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

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
          className="text-sm transition-colors hover:text-[#F0F0FF]"
          style={{ color: '#888899' }}
        >
          ← Back to home
        </Link>
      </nav>

      {/* Radial glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(108,99,255,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(62,207,142,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Main content */}
      <main className="relative flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="show"
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 text-xs font-semibold"
              style={{
                background: 'rgba(62,207,142,0.1)',
                border: '1px solid rgba(62,207,142,0.25)',
                color: '#3ecf8e',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e] animate-pulse inline-block" />
              Limited spots available
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="font-extrabold leading-tight mb-5"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.1,
              }}
            >
              Secure your spot.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #6C63FF 0%, #3ecf8e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Build better habits.
              </span>
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="mb-8 leading-relaxed"
              style={{ color: '#888899', fontSize: '17px', maxWidth: '440px' }}
            >
              Join the Feedstack founding members waitlist for a one-time {PRICE} reservation.
              This locks in your spot and founding member status permanently.
            </motion.p>

            {/* Perks list */}
            <div className="flex flex-col gap-4">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  custom={i + 3} variants={fadeUp} initial="hidden" animate="show"
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: 'rgba(108,99,255,0.12)' }}
                  >
                    {perk.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0FF' }}>
                      {perk.title}
                    </p>
                    <p className="text-sm" style={{ color: '#888899' }}>{perk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — payment card */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" animate="show"
          >
            <div
              className="rounded-3xl p-8"
              style={{
                background: '#111118',
                border: '1px solid rgba(108,99,255,0.2)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
              }}
            >
              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#888899', fontFamily: 'Space Grotesk, sans-serif' }}>
                  ONE-TIME RESERVATION FEE
                </p>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span
                    className="font-extrabold"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '64px', lineHeight: 1, color: '#F0F0FF' }}
                  >
                    $1
                  </span>
                  <span
                    className="font-extrabold pb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '36px', color: '#F0F0FF' }}
                  >
                    .99
                  </span>
                </div>
                <p className="text-sm" style={{ color: '#888899' }}>
                  Charged once. No subscription.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px mb-8" style={{ background: 'rgba(108,99,255,0.12)' }} />

              {/* What you get */}
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'Early access to Feedstack',
                  'Founding member badge',
                  'Priority support',
                  'Free first premium month',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#C8C8D8' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="rgba(62,207,142,0.15)" />
                      <path d="M5 8l2 2 4-4" stroke="#3ecf8e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA button — Stripe to be connected */}
              <button
                onClick={() => setClicked(true)}
                disabled={clicked}
                className="w-full rounded-2xl py-4 font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  background: clicked
                    ? 'rgba(62,207,142,0.15)'
                    : 'linear-gradient(135deg, #6C63FF 0%, #5a52e8 100%)',
                  color: clicked ? '#3ecf8e' : '#F0F0FF',
                  border: clicked ? '1px solid rgba(62,207,142,0.3)' : 'none',
                  boxShadow: clicked ? 'none' : '0 4px 24px rgba(108,99,255,0.4)',
                  cursor: clicked ? 'default' : 'pointer',
                }}
              >
                {clicked ? '✓ You\'re on the list — payment coming soon!' : `Reserve my spot for ${PRICE}`}
              </button>

              <p className="text-center text-xs mt-4" style={{ color: '#888899' }}>
                Stripe payment coming soon.{' '}
                <span style={{ color: '#6C63FF' }}>Your spot is noted.</span>
              </p>
            </div>

            {/* Trust note */}
            <p className="text-center text-xs mt-5" style={{ color: '#888899' }}>
              🔒 Secure checkout via Stripe · Refundable if Feedstack doesn&apos;t launch
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
