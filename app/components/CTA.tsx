'use client'

import { motion } from 'framer-motion'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.feedstack.app'

export default function CTA() {
  return (
    <section
      id="download"
      className="relative py-32 px-6 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(108,99,255,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Animated ring */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 m-auto rounded-full pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          border: '1px solid rgba(108,99,255,0.2)',
          maxWidth: '90vw',
          maxHeight: '90vw',
        }}
      />
      <motion.div
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 m-auto rounded-full pointer-events-none"
        style={{
          width: '800px',
          height: '800px',
          border: '1px solid rgba(62,207,142,0.1)',
          maxWidth: '95vw',
          maxHeight: '95vw',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-6">Your streak starts today</p>

          <h2
            id="cta-heading"
            className="font-extrabold mb-6"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(32px, 5.5vw, 56px)',
              color: '#F0F0FF',
              lineHeight: 1.1,
            }}
          >
            Start building habits{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #3ecf8e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              today
            </span>
          </h2>

          <p
            className="mb-10 mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#888899',
              fontSize: 'clamp(16px, 2vw, 19px)',
              maxWidth: '520px',
              lineHeight: 1.7,
            }}
          >
            Every person with a 100-day streak started with day one. Pick a YouTube
            video that changes your life when you watch it daily. Paste it. Set a
            time. Build the habit that&apos;s been waiting in your watch later list.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
              aria-label="Download Feedstack free on Google Play Store"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2 2 0 0 0 2.82.04l.04-.04 10.2-10.2-2.82-2.83L3.18 20.97a2 2 0 0 0 0 2.79zm15.79-13.44-2.6-1.5-3.18 3.18 3.18 3.18 2.62-1.52a2.27 2.27 0 0 0 0-3.34zM1.93 1.25a1.99 1.99 0 0 0-.68 1.5V21.3l.03.2 10.1-10.1L1.93 1.24zm4.29-.06 10.32 5.95-2.82 2.82-7.5-8.77z" />
              </svg>
              Download Free on Android
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: '✓', label: 'No account needed' },
              { icon: '✓', label: 'No ads, ever' },
              { icon: '✓', label: 'Free forever' },
              { icon: '✓', label: 'Works offline' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm"
                style={{ color: '#888899', fontFamily: 'Inter, sans-serif' }}
              >
                <span style={{ color: '#3ecf8e', fontWeight: 700 }}>{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
