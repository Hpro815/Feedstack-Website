'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '10,000+', label: 'habits built' },
  { value: '5.0★', label: 'Play Store rating' },
  { value: '100%', label: 'free, forever' },
  { value: '0', label: 'ads or trackers' },
]

export default function SocialProofBar() {
  return (
    <section
      className="relative py-12 overflow-hidden"
      aria-label="App stats"
      style={{ borderTop: '1px solid rgba(108,99,255,0.12)', borderBottom: '1px solid rgba(108,99,255,0.12)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="text-center"
            >
              <p
                className="font-extrabold mb-1"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  background: 'linear-gradient(135deg, #6C63FF 0%, #3ecf8e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </p>
              <p className="text-sm" style={{ color: '#888899', fontFamily: 'Inter, sans-serif' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
