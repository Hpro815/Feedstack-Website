'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    problem: 'You bookmark great videos…',
    consequence: '…and never watch them again.',
    icon: '📌',
  },
  {
    problem: 'You start a new habit…',
    consequence: '…and forget about it by day 3.',
    icon: '📅',
  },
  {
    problem: 'You download habit tracker apps…',
    consequence: '…but they never connect to your content.',
    icon: '📱',
  },
]

const features = [
  {
    icon: '🔗',
    title: 'Content-first habits',
    description:
      'Every habit in Feedstack is anchored to real content: a YouTube video, a guide, a post. Your morning routine app is built around what already motivates you.',
    color: '#6C63FF',
  },
  {
    icon: '🔔',
    title: 'Daily habit reminders that work',
    description:
      'A habit tracker app is useless without reminders. Feedstack sends a daily habit reminder at your chosen time, every single day, until the behaviour is automatic.',
    color: '#3ecf8e',
  },
  {
    icon: '🔥',
    title: 'Streaks create pressure',
    description:
      'Our streak tracking app feature makes missing a day genuinely uncomfortable. That psychological pressure is what separates people who build daily habits from those who try.',
    color: '#6C63FF',
  },
  {
    icon: '🚫',
    title: 'No account. No ads. No friction.',
    description:
      'Every habit app on the Play Store asks you to sign up, then shows you ads, then asks for a subscription. Feedstack is free, forever. No account needed. No upsells.',
    color: '#3ecf8e',
  },
  {
    icon: '📲',
    title: 'Zero learning curve',
    description:
      'Open app. Paste link. Set time. Done. The best free habit app Android has to offer works in under 60 seconds. You are one tap away from your first YouTube habit.',
    color: '#6C63FF',
  },
  {
    icon: '📊',
    title: 'Visual progress you can feel',
    description:
      'A clean streak calendar shows every habit building app win at a glance. Watch blank squares fill in. Feel the momentum of a real morning routine taking shape.',
    color: '#3ecf8e',
  },
]

export default function WhySection() {
  return (
    <section
      id="why-feedstack"
      className="relative py-24 px-6"
      aria-labelledby="why-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(108,99,255,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 30%, rgba(62,207,142,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">The real problem</p>
          <h2
            id="why-heading"
            className="font-extrabold mb-5"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#F0F0FF',
            }}
          >
            Why habits fail without Feedstack
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#888899',
              fontSize: 'clamp(16px, 2vw, 18px)',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Most people don&apos;t lack motivation. They lack a system that connects
            what they love to what they want to build.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {problems.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl p-6 text-center"
              style={{
                background: '#111118',
                border: '1px solid rgba(239,68,68,0.12)',
              }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="font-semibold mb-1 text-sm" style={{ color: '#F0F0FF', fontFamily: 'Space Grotesk, sans-serif' }}>
                {item.problem}
              </p>
              <p className="text-sm" style={{ color: 'rgba(239,68,68,0.7)', fontFamily: 'Inter, sans-serif' }}>
                {item.consequence}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution: divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="flex-1 h-px" style={{ background: 'rgba(108,99,255,0.2)' }} />
          <span
            className="text-xs font-bold tracking-widest px-4"
            style={{ color: '#3ecf8e', fontFamily: 'Space Grotesk, sans-serif' }}
          >
            FEEDSTACK SOLVES THIS
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(108,99,255,0.2)' }} />
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300"
              style={{
                background: '#111118',
                border: '1px solid rgba(108,99,255,0.15)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: `${feature.color}15` }}
              >
                {feature.icon}
              </div>
              <h3
                className="font-bold mb-2"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '18px',
                  color: '#F0F0FF',
                }}
              >
                {feature.title}
              </h3>
              <p
                className="leading-relaxed text-sm"
                style={{ color: '#888899', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
