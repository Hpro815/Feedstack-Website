'use client'

import { motion } from 'framer-motion'
import { AppStoreLogo } from './Navbar'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.feedstack.app'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(108,99,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(62,207,142,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -18, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 left-[8%] w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        animate={{ y: [0, 14, 0], scale: [1, 0.94, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-24 right-[10%] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(62,207,142,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Pricing banner + arrow */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center justify-center gap-3 mb-8"
          style={{ position: 'relative' }}
        >
          <div
            className="inline-flex items-center gap-3 rounded-2xl px-6 py-3"
            style={{
              background: 'rgba(108,99,255,0.1)',
              border: '1px solid rgba(108,99,255,0.25)',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            <span style={{ color: '#888899', fontSize: '15px' }}>Lifetime Pro</span>
            <span style={{ fontSize: '22px', fontWeight: 800, color: '#555566', textDecoration: 'line-through' }}>
              $25
            </span>
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
              <path d="M1 6h15M12 2l4 4-4 4" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span
              style={{
                fontSize: '26px',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #6C63FF 0%, #3ecf8e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              $14.99
            </span>
            <span
              style={{
                background: 'rgba(62,207,142,0.15)',
                border: '1px solid rgba(62,207,142,0.3)',
                color: '#3ecf8e',
                fontSize: '12px',
                fontWeight: 700,
                borderRadius: '6px',
                padding: '2px 8px',
                letterSpacing: '0.05em',
              }}
            >
              60% OFF
            </span>
          </div>

          {/* Modern curved arrow pointing up-right to Join Waitlist */}
          <div style={{ position: 'relative', width: '90px', height: '70px', flexShrink: 0 }}>
            <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
              <path
                d="M10 65 C15 40 50 15 78 8"
                stroke="#6C63FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M68 4 L80 7 L76 18"
                stroke="#6C63FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-heading font-extrabold leading-tight mb-6"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(40px, 7vw, 72px)',
            color: '#F0F0FF',
          }}
        >
          Turn any YouTube video
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #6C63FF 0%, #3ecf8e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            into a daily habit
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mb-10 leading-relaxed"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: '#888899',
            maxWidth: '600px',
          }}
        >
          Feedstack is the free habit tracker app that builds your morning routine
          from content you already love. Paste any YouTube video, X post, or web
          link and we turn it into a&nbsp;
          <span style={{ color: '#F0F0FF', fontWeight: 500 }}>
            daily habit reminder with streak tracking
          </span>
          . No account. No ads. No friction.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 text-base font-semibold rounded-2xl px-6 py-3 transition-all duration-200 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg, #6C63FF 0%, #5a52e8 100%)',
              boxShadow: '0 4px 20px rgba(108,99,255,0.4)',
              color: '#F0F0FF',
              fontFamily: 'Space Grotesk, sans-serif',
              minWidth: '210px',
            }}
            aria-label="Download Feedstack free on Google Play Store"
          >
            <GooglePlayLogo size={20} />
            Free on Android
          </a>
          <a
            href="/waitlist"
            className="inline-flex items-center justify-center gap-2.5 text-base font-semibold rounded-2xl px-6 py-3 transition-all duration-200 hover:-translate-y-px"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.14)',
              color: '#F0F0FF',
              fontFamily: 'Space Grotesk, sans-serif',
              minWidth: '210px',
            }}
            aria-label="Join waitlist for iOS"
          >
            <AppStoreLogo size={20} />
            Get it on iOS
          </a>
        </motion.div>
        <motion.a
          custom={2.5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          href="#how-it-works"
          className="inline-flex items-center gap-2 text-[#888899] hover:text-[#F0F0FF] transition-colors text-base font-medium mb-16"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          See how it works
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.a>

        {/* Phone mockup */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative mx-auto"
          style={{ maxWidth: '320px' }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}

export function GooglePlayLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Blue - top left */}
      <path d="M3 2L3 12L14.5 12Z" fill="#4285F4" />
      {/* Green - top right */}
      <path d="M3 2L21 12L14.5 12Z" fill="#34A853" />
      {/* Yellow - bottom right */}
      <path d="M21 12L3 22L14.5 12Z" fill="#FBBC04" />
      {/* Red - bottom left */}
      <path d="M3 22L3 12L14.5 12Z" fill="#EA4335" />
    </svg>
  )
}

function PhoneMockup() {
  return (
    <div
      className="relative mx-auto rounded-[44px] p-[3px]"
      style={{
        width: '300px',
        background: 'linear-gradient(160deg, rgba(108,99,255,0.5) 0%, rgba(62,207,142,0.3) 100%)',
        boxShadow: '0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(108,99,255,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
      }}
    >
      {/* Screen */}
      <div
        className="rounded-[42px] overflow-hidden"
        style={{ background: '#13131f' }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-[10px] font-semibold" style={{ color: '#aaa' }}>9:41</span>
          <div
            className="w-16 h-4 rounded-full"
            style={{ background: '#1e1e2e' }}
          />
          <div className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#aaa">
              <rect x="0" y="4" width="2" height="8" rx="1"/>
              <rect x="3" y="2" width="2" height="10" rx="1"/>
              <rect x="6" y="0" width="2" height="12" rx="1"/>
              <rect x="9" y="3" width="2" height="9" rx="1" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* Header */}
        <div className="px-4 pt-2 pb-3 flex items-start justify-between">
          <div>
            <p
              className="font-extrabold leading-tight"
              style={{ color: '#F0F0FF', fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px' }}
            >
              Good morning ✨
            </p>
            <p className="text-[11px] mt-0.5" style={{ color: '#888899' }}>Thursday, June 4</p>
          </div>
          <div className="flex gap-2">
            {/* Bell */}
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#1e1e2e' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="#aaa">
                <path d="M7 1a.875.875 0 0 0-.875.875v.438A3.5 3.5 0 0 0 3.5 5.75v2.188L2.625 9.625h8.75L10.5 7.938V5.75A3.5 3.5 0 0 0 7.875 2.313v-.438A.875.875 0 0 0 7 1zm0 11.375a1.313 1.313 0 0 0 1.313-1.313H5.687A1.313 1.313 0 0 0 7 12.375z"/>
              </svg>
            </div>
            {/* Crown */}
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#1e1e2e' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="#888">
                <path d="M2 10h10l1-7-3 3-3-5-3 5-3-3 1 7z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="px-3 pb-3 grid grid-cols-3 gap-2">
          {/* Streak */}
          <div className="rounded-xl p-2.5 text-center" style={{ background: '#1f1c0e' }}>
            <div className="text-lg leading-none">🔥</div>
            <div className="text-base font-extrabold mt-0.5" style={{ color: '#f97316', fontFamily: 'Space Grotesk, sans-serif' }}>1</div>
            <div className="text-[8px] font-bold tracking-wider mt-0.5" style={{ color: '#f97316', fontFamily: 'Space Grotesk, sans-serif' }}>STREAK</div>
          </div>
          {/* Today */}
          <div className="rounded-xl p-2.5 text-center" style={{ background: '#0e1f0e' }}>
            <div className="text-lg leading-none">⚡</div>
            <div className="text-base font-extrabold mt-0.5" style={{ color: '#3ecf8e', fontFamily: 'Space Grotesk, sans-serif' }}>1/1</div>
            <div className="text-[8px] font-bold tracking-wider mt-0.5" style={{ color: '#3ecf8e', fontFamily: 'Space Grotesk, sans-serif' }}>TODAY</div>
          </div>
          {/* Badges */}
          <div className="rounded-xl p-2.5 text-center" style={{ background: '#1f1a0a' }}>
            <div className="text-lg leading-none">🏆</div>
            <div className="text-base font-extrabold mt-0.5" style={{ color: '#fbbf24', fontFamily: 'Space Grotesk, sans-serif' }}>0/12</div>
            <div className="text-[8px] font-bold tracking-wider mt-0.5" style={{ color: '#fbbf24', fontFamily: 'Space Grotesk, sans-serif' }}>BADGES</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-3 pb-2">
          <div className="h-1.5 rounded-full w-full" style={{ background: '#1e1e2e' }}>
            <div className="h-1.5 rounded-full w-full" style={{ background: '#3ecf8e' }} />
          </div>
          <p className="text-[10px] mt-1" style={{ color: '#888899' }}>1 of 1 done today</p>
        </div>

        {/* Filter pills */}
        <div className="px-3 pb-3 flex gap-1.5 overflow-hidden">
          {[
            { label: 'All', active: true },
            { label: '🤸 Health', active: false },
            { label: '💪 Exercise', active: false },
            { label: '📚 Learning', active: false },
          ].map((pill) => (
            <div
              key={pill.label}
              className="rounded-full px-2.5 py-1 text-[9px] font-semibold whitespace-nowrap flex-shrink-0"
              style={{
                background: pill.active ? '#6C63FF' : '#1e1e2e',
                color: pill.active ? '#fff' : '#888899',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              {pill.label}
            </div>
          ))}
        </div>

        {/* Habit card */}
        <div className="px-3 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="rounded-2xl p-3 flex items-center gap-3"
            style={{
              background: '#0d1f0d',
              border: '1px solid rgba(62,207,142,0.3)',
              borderLeft: '3px solid #6C63FF',
            }}
          >
            {/* Thumbnail */}
            <div
              className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden"
              style={{ background: '#1a2a1a' }}
            >
              <span className="text-2xl">🧘</span>
            </div>

            <div className="flex-1 min-w-0">
              {/* YouTube badge */}
              <div
                className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 mb-1"
                style={{ background: '#cc0000' }}
              >
                <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
                  <path d="M23.5 6.2s-.3-1.9-1.1-2.7c-1.1-1.1-2.3-1.1-2.8-1.2C16.7 2 12 2 12 2s-4.7 0-7.6.3c-.5.1-1.7.1-2.8 1.2C.8 4.3.5 6.2.5 6.2S.2 8.4.2 10.6v2.1c0 2.2.3 4.4.3 4.4s.3 1.9 1.1 2.7c1.1 1.1 2.5 1.1 3.1 1.2 2.3.2 9.6.3 9.6.3s4.7 0 7.6-.3c.5-.1 1.7-.1 2.8-1.2.8-.8 1.1-2.7 1.1-2.7s.3-2.2.3-4.4v-2c0-2.2-.2-4.5-.2-4.5zM9.7 15.5V8.4l7.6 3.6-7.6 3.5z"/>
                </svg>
                <span className="text-[8px] font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>YouTube</span>
              </div>
              {/* Title with strikethrough */}
              <p
                className="text-[10px] font-semibold leading-tight line-through"
                style={{ color: '#888899', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                5-Minute Meditation You Can Do Anywhere | Goodful
              </p>
              <p className="text-[9px] mt-1" style={{ color: '#3ecf8e' }}>✓ 1 day</p>
            </div>

            {/* Checkmark */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#3ecf8e' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 7L5.5 10L11.5 4" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Bottom nav */}
        <div
          className="grid grid-cols-5 items-center py-2"
          style={{ background: '#0d0d1a', borderTop: '1px solid #1e1e2e' }}
        >
          {[
            { icon: '🏠', label: 'Home', active: true },
            { icon: '🏆', label: 'Challenges', active: false },
            { icon: '+', label: '', active: false, plus: true },
            { icon: '📅', label: 'My Day', active: false },
            { icon: '⚙️', label: 'Settings', active: false },
          ].map((item) => (
            <div key={item.label || 'plus'} className="flex flex-col items-center gap-0.5">
              {item.plus ? (
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: '#6C63FF' }}
                >
                  +
                </div>
              ) : (
                <>
                  <span className="text-sm">{item.icon}</span>
                  <span
                    className="text-[7px] font-semibold"
                    style={{
                      color: item.active ? '#6C63FF' : '#888899',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
