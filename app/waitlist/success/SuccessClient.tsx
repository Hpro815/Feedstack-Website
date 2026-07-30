'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AppIcon } from '../../components/Navbar'
import Link from 'next/link'

export default function SuccessClient({ code, email }: { code: string; email: string }) {
  const [copied, setCopied] = useState(false)
  const referralUrl = `https://feed-stack.com/ref/${code}`

  function copy() {
    navigator.clipboard.writeText(referralUrl)
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
            'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(62,207,142,0.12) 0%, transparent 70%)',
        }}
      />

      <main className="relative flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="max-w-lg mx-auto w-full flex flex-col items-center">

          {/* Success icon */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ background: 'rgba(62,207,142,0.15)', border: '1px solid rgba(62,207,142,0.3)' }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M8 18L15 25L28 11" stroke="#3ecf8e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="font-extrabold mb-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 5vw, 42px)' }}
          >
            You&apos;re in!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            className="mb-10"
            style={{ color: '#888899', fontSize: '16px', maxWidth: '380px', lineHeight: 1.6 }}
          >
            Your Pro unlock code will be <span style={{ color: '#F0F0FF' }}>emailed to {email}</span> when we launch.
          </motion.p>

          {/* Referral section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.55 }}
            className="w-full rounded-2xl p-6"
            style={{ background: '#111118', border: '1px solid rgba(108,99,255,0.2)' }}
          >
            <p
              className="font-bold mb-1"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px' }}
            >
              Share with friends
            </p>
            <p className="text-sm mb-5" style={{ color: '#888899' }}>
              Send them your link — they get the same 60% off deal.
            </p>

            {/* Referral link box */}
            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3 mb-4"
              style={{ background: '#0A0A0F', border: '1px solid rgba(108,99,255,0.2)' }}
            >
              <span
                className="flex-1 text-sm truncate text-left"
                style={{ color: '#888899', fontFamily: 'Inter, sans-serif' }}
              >
                {referralUrl}
              </span>
              <button
                onClick={copy}
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

            {/* Share buttons */}
            <div className="flex gap-3 justify-center">
              <a
                href={`https://twitter.com/intent/tweet?text=I%20just%20locked%20in%20Feedstack%20Pro%20at%2060%25%20off%20before%20launch%20%F0%9F%94%A5%20You%20can%20too%3A&url=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-4 py-2.5 transition-all duration-200 hover:-translate-y-px"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#F0F0FF',
                  fontFamily: 'Space Grotesk, sans-serif',
                  textDecoration: 'none',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Share on X
              </a>
              <a
                href={`https://wa.me/?text=I%20just%20locked%20in%20Feedstack%20Pro%20at%2060%25%20off%20before%20launch%20%F0%9F%94%A5%20You%20can%20too%3A%20${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-4 py-2.5 transition-all duration-200 hover:-translate-y-px"
                style={{
                  background: 'rgba(37,211,102,0.08)',
                  border: '1px solid rgba(37,211,102,0.25)',
                  color: '#25D366',
                  fontFamily: 'Space Grotesk, sans-serif',
                  textDecoration: 'none',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  )
}
