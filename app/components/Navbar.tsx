'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { GooglePlayLogo } from './Hero'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.feedstack.app'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: scrolled ? 'rgba(10,10,15,0.85)' : 'rgba(10,10,15,0.5)',
        borderBottom: scrolled ? '1px solid rgba(108,99,255,0.12)' : '1px solid transparent',
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Feedstack home">
          <AppIcon size={32} />
          <span className="text-[#F0F0FF] text-lg font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Feedstack
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'How it works', href: '#how-it-works' },
            { label: 'Why Feedstack', href: '#why-feedstack' },
            { label: 'Reviews', href: '#reviews' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#888899] hover:text-[#F0F0FF] transition-colors duration-200 text-sm font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/waitlist"
            className="text-sm font-semibold rounded-xl px-4 py-2 transition-all duration-200 hover:-translate-y-px"
            style={{
              background: 'rgba(62,207,142,0.12)',
              border: '1px solid rgba(62,207,142,0.25)',
              color: '#3ecf8e',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            Join Waitlist
          </a>
        </div>


        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#888899] hover:text-[#F0F0FF] p-2"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ borderTop: '1px solid rgba(108,99,255,0.12)' }}
        >
          {[
            { label: 'How it works', href: '#how-it-works' },
            { label: 'Why Feedstack', href: '#why-feedstack' },
            { label: 'Reviews', href: '#reviews' },
            { label: 'Join Waitlist', href: '/waitlist' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#888899] hover:text-[#F0F0FF] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/waitlist"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors mt-2"
            style={{
              background: 'rgba(62,207,142,0.12)',
              border: '1px solid rgba(62,207,142,0.25)',
              color: '#3ecf8e',
            }}
          >
            Join Waitlist
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export function AppStoreLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

export function AppIcon({ size = 32 }: { size?: number }) {
  const r = size * 0.22
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Purple rounded square background */}
      <rect width="100" height="100" rx="22" fill="#6C63FF" />
      {/* Top bar - full width white */}
      <rect x="18" y="30" width="64" height="14" rx="7" fill="white" />
      {/* Middle bar - medium white */}
      <rect x="18" y="52" width="46" height="12" rx="6" fill="white" fillOpacity="0.55" />
      {/* Bottom bar - short white */}
      <rect x="18" y="70" width="30" height="11" rx="5.5" fill="white" fillOpacity="0.35" />
      {/* Green checkmark circle on top bar */}
      <circle cx="75" cy="37" r="13" fill="#3ecf8e" />
      <path d="M69 37L73.5 41.5L81 33" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
