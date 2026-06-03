'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2.333A11.667 11.667 0 1 0 25.667 14 11.68 11.68 0 0 0 14 2.333zm3.5 11.667-5.25 3.033a.585.585 0 0 1-.875-.508V11.475a.585.585 0 0 1 .875-.508L17.5 14z" fill="#6C63FF"/>
      </svg>
    ),
    title: 'Paste any link',
    description:
      'Copy a YouTube video, X post, or any web URL that inspires you: a workout tutorial, a language lesson, a meditation guide. Feedstack accepts any link that fuels your habit.',
    highlight: 'YouTube · X / Twitter · Any URL',
    color: '#6C63FF',
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M23.333 4.667H4.667A2.333 2.333 0 0 0 2.333 7v14a2.333 2.333 0 0 0 2.334 2.333h18.666A2.333 2.333 0 0 0 25.667 21V7a2.333 2.333 0 0 0-2.334-2.333zm0 16.333H4.667V9.333h18.666V21z" fill="#3ecf8e"/>
        <rect x="7" y="12" width="5" height="5" rx="1" fill="#3ecf8e" opacity="0.6"/>
        <rect x="14" y="12" width="7" height="2" rx="1" fill="#3ecf8e" opacity="0.4"/>
        <rect x="14" y="15" width="5" height="2" rx="1" fill="#3ecf8e" opacity="0.4"/>
      </svg>
    ),
    title: 'Set your reminder',
    description:
      'Choose the time you want to be reminded each day. Morning? After work? Right before bed? Your daily habit reminder fires exactly when you need it. No nagging, just a nudge.',
    highlight: 'Daily reminder at your chosen time',
    color: '#3ecf8e',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2.333C7.557 2.333 2.333 7.557 2.333 14S7.557 25.667 14 25.667 25.667 20.443 25.667 14 20.443 2.333 14 2.333zm-1.167 17.5L7.583 14.583l1.75-1.75 3.5 3.5 7-7 1.75 1.75-8.75 8.75z" fill="#6C63FF"/>
      </svg>
    ),
    title: 'Build your streak',
    description:
      'Watch your streak counter climb every day you complete your habit. The streak tracking app feature makes consistency addictive. Missing a day actually feels bad. That\'s the point.',
    highlight: '🔥 Streak tracking keeps you accountable',
    color: '#6C63FF',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 px-6 overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(108,99,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Simple by design</p>
          <h2
            id="how-it-works-heading"
            className="font-extrabold mb-5"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#F0F0FF',
            }}
          >
            How Feedstack works
          </h2>
          <p
            className="mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#888899',
              fontSize: 'clamp(16px, 2vw, 18px)',
              maxWidth: '520px',
            }}
          >
            Build daily habits in three steps. No setup. No learning curve.
            Just paste, set, and streak.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl p-8 group hover:-translate-y-1 transition-transform duration-300"
              style={{
                background: '#111118',
                border: '1px solid rgba(108,99,255,0.15)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${step.color}12 0%, transparent 70%)`,
                }}
              />

              {/* Step number */}
              <div
                className="text-xs font-bold mb-6 tracking-widest"
                style={{ color: step.color, fontFamily: 'Space Grotesk, sans-serif' }}
              >
                STEP {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${step.color}18` }}
              >
                {step.icon}
              </div>

              {/* Content */}
              <h3
                className="font-bold mb-3"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  color: '#F0F0FF',
                }}
              >
                {step.title}
              </h3>
              <p
                className="mb-5 leading-relaxed"
                style={{ color: '#888899', fontSize: '15px', fontFamily: 'Inter, sans-serif' }}
              >
                {step.description}
              </p>

              {/* Highlight pill */}
              <div
                className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: `${step.color}15`,
                  color: step.color,
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {step.highlight}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-[calc(50%+40px)] left-[calc(33%+24px)] right-[calc(33%+24px)] h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.3), transparent)' }} />
      </div>
    </section>
  )
}
