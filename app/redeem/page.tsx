'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AppIcon, AppStoreLogo } from '../components/Navbar'
import Link from 'next/link'

function isIOS() {
  if (typeof navigator === 'undefined') return false
  return /iPhone|iPad|iPod/i.test(navigator.userAgent)
}

export default function RedeemPage() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submittedCode, setSubmittedCode] = useState('')
  const [onIOS, setOnIOS] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setOnIOS(isIOS())
    const params = new URLSearchParams(window.location.search)
    const prefill = params.get('code')
    if (prefill) setCode(prefill.trim())
  }, [])

  function handleRedeem() {
    const trimmed = code.trim()
    if (!/^[a-zA-Z0-9]{8,20}$/.test(trimmed)) {
      setError("That code doesn't look right. Check it and try again.")
      return
    }
    setError('')
    setSubmittedCode(trimmed)
    setSubmitted(true)
    if (onIOS) {
      window.location.href = `https://apps.apple.com/redeem?ctx=offercodes&id=6787473480&code=${encodeURIComponent(trimmed)}`
    }
  }

  function copyCode() {
    navigator.clipboard.writeText(submittedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

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
            Redeem your
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #3ecf8e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Pro code
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            className="mb-8"
            style={{ color: '#888899', fontSize: '16px', maxWidth: '340px', lineHeight: 1.6 }}
          >
            Enter your code below to unlock Feedstack Pro on iOS.
          </motion.p>

          {/* Input + button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full flex flex-col gap-3"
          >
            <input
              type="text"
              value={code}
              onChange={e => { setCode(e.target.value); setError(''); setSubmitted(false) }}
              onKeyDown={e => e.key === 'Enter' && handleRedeem()}
              placeholder="Enter your code"
              maxLength={20}
              className="w-full rounded-2xl px-5 py-4 text-base font-medium outline-none transition-all duration-200"
              style={{
                background: '#111118',
                border: error ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(108,99,255,0.2)',
                color: '#F0F0FF',
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
            />

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-left px-1"
                  style={{ color: '#ef4444' }}
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              onClick={handleRedeem}
              className="w-full inline-flex items-center justify-center gap-3 rounded-2xl py-4 font-bold text-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                background: 'linear-gradient(135deg, #6C63FF 0%, #5a52e8 100%)',
                color: '#F0F0FF',
                boxShadow: '0 4px 28px rgba(108,99,255,0.4)',
              }}
            >
              <AppStoreLogo size={22} />
              Claim Code on iOS
            </button>
          </motion.div>

          {/* Post-submit state */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full mt-6 rounded-2xl p-5 text-left"
                style={{ background: '#111118', border: '1px solid rgba(108,99,255,0.2)' }}
              >
                {!onIOS ? (
                  <>
                    <p className="font-semibold mb-1" style={{ color: '#F0F0FF', fontFamily: 'Space Grotesk, sans-serif' }}>
                      Open this page on your iPhone to redeem your code.
                    </p>
                    <p className="text-sm mb-4" style={{ color: '#888899' }}>
                      Android codes are coming soon.
                    </p>
                  </>
                ) : (
                  <p className="text-sm mb-4" style={{ color: '#888899' }}>
                    If the App Store did not open, go to the App Store, tap your profile picture, choose <span style={{ color: '#F0F0FF' }}>Redeem Gift Card or Code</span>, and enter this code.
                  </p>
                )}

                {/* Code display + copy */}
                <div
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ background: '#0A0A0F', border: '1px solid rgba(108,99,255,0.2)' }}
                >
                  <span
                    className="flex-1 font-bold tracking-widest text-base"
                    style={{ color: '#F0F0FF', fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {submittedCode}
                  </span>
                  <button
                    onClick={copyCode}
                    className="shrink-0 text-sm font-semibold rounded-lg px-4 py-2 transition-all duration-200"
                    style={{
                      background: copied ? 'rgba(62,207,142,0.15)' : 'rgba(108,99,255,0.15)',
                      border: copied ? '1px solid rgba(62,207,142,0.3)' : '1px solid rgba(108,99,255,0.3)',
                      color: copied ? '#3ecf8e' : '#6C63FF',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>
    </div>
  )
}
