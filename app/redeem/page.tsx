'use client'

import { motion } from 'framer-motion'
import { AppIcon, AppStoreLogo } from '../components/Navbar'
import Link from 'next/link'

const REDEEM_URL = 'https://apps.apple.com/redeem?ctx=offercodes&id=6787473480&code=EARLYBIRD30'

export default function RedeemPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#0A0A0F', color: '#F0F0FF', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 w-full">
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
        <Link href="/" className="flex items-center gap-2.5">
          <AppIcon size={30} />
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '17px' }}>
            Feedstack
          </span>
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

      <main className="relative flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="max-w-md mx-auto w-full flex flex-col items-center">

          {/* Icon */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
            style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)' }}
          >
            <AppIcon size={44} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="font-extrabold mb-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 5vw, 42px)', lineHeight: 1.1 }}
          >
            Claim your free
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #3ecf8e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Pro upgrade
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            className="mb-10"
            style={{ color: '#888899', fontSize: '16px', maxWidth: '340px', lineHeight: 1.6 }}
          >
            Tap the button below to redeem your offer code and unlock Feedstack Pro on iOS.
          </motion.p>

          {/* CTA */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.55 }}
            href={REDEEM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm inline-flex items-center justify-center gap-3 rounded-2xl py-4 font-bold text-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              background: 'linear-gradient(135deg, #6C63FF 0%, #5a52e8 100%)',
              color: '#F0F0FF',
              boxShadow: '0 4px 28px rgba(108,99,255,0.4)',
              textDecoration: 'none',
            }}
          >
            <AppStoreLogo size={22} />
            Claim Code on iOS
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-4 text-xs"
            style={{ color: '#555566' }}
          >
            Opens the App Store redemption page
          </motion.p>

        </div>
      </main>
    </div>
  )
}
