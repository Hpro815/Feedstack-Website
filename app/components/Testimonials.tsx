'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Marcus T.',
    handle: '@marcust_lifts',
    platform: 'Google Play',
    stars: 5,
    avatar: 'MT',
    avatarColor: '#6C63FF',
    text: "I've tried every habit tracker app on Android. None of them stuck because they were generic. Feedstack connects to my actual workout YouTube videos. I'm on a 47-day streak. Never happened before.",
    tag: 'streak tracking app',
  },
  {
    name: 'Priya S.',
    handle: '@priya.learns',
    platform: 'Google Play',
    stars: 5,
    avatar: 'PS',
    avatarColor: '#3ecf8e',
    text: "The daily habit reminder is perfectly timed. I get a notification at 7am with my Spanish lesson video right there. I open it, watch for 10 minutes, mark it done. My morning routine has never been this consistent.",
    tag: 'morning routine app',
  },
  {
    name: 'Jordan K.',
    handle: '@jordankfit',
    platform: 'Google Play',
    stars: 5,
    avatar: 'JK',
    avatarColor: '#6C63FF',
    text: "No account needed was the thing that made me try it. I'm sick of apps that need my email just to set a reminder. Feedstack just works. Free habit app Android users have been missing this.",
    tag: 'free habit app Android',
  },
  {
    name: 'Aisha M.',
    handle: '@aisha.meditates',
    platform: 'Google Play',
    stars: 5,
    avatar: 'AM',
    avatarColor: '#3ecf8e',
    text: "I saved the same meditation YouTube video to my watch later list 12 times. With Feedstack it became a YouTube habit. 23 days in, it's part of who I am now. This is the habit building app I needed.",
    tag: 'YouTube habit',
  },
  {
    name: 'Dev P.',
    handle: '@devpatel.codes',
    platform: 'X / Twitter',
    stars: 5,
    avatar: 'DP',
    avatarColor: '#6C63FF',
    text: "I use Feedstack to build daily habits around programming tutorials on YouTube. My streak is 31 days. The streak tracking keeps me honest when I want to skip. The app is stupidly simple and it works.",
    tag: 'build daily habits',
  },
  {
    name: 'Fiona R.',
    handle: '@fionaruns',
    platform: 'Google Play',
    stars: 5,
    avatar: 'FR',
    avatarColor: '#3ecf8e',
    text: "I showed this to my whole running group. Everyone downloaded it. We all follow the same YouTube habit coaching channel and now we're competing on streaks. The social accountability is insane.",
    tag: 'habit building app',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b">
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 8.885 3.91 10.51l.59-3.44L2 4.632l3.455-.502L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative py-24 px-6 overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(62,207,142,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Real users, real streaks</p>
          <h2
            id="reviews-heading"
            className="font-extrabold mb-5"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#F0F0FF',
            }}
          >
            What people are saying
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#888899',
              fontSize: 'clamp(16px, 2vw, 18px)',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            Thousands of people are using Feedstack to build daily habits that stick.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300"
              style={{
                background: '#111118',
                border: '1px solid rgba(108,99,255,0.15)',
                display: 'inline-block',
                width: '100%',
              }}
            >
              {/* Stars + platform */}
              <div className="flex items-center justify-between mb-4">
                <StarRating count={t.stars} />
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{
                    background: 'rgba(108,99,255,0.1)',
                    color: '#888899',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {t.platform}
                </span>
              </div>

              {/* Quote */}
              <p
                className="mb-5 leading-relaxed"
                style={{
                  color: '#C8C8D8',
                  fontSize: '15px',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.75,
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Tag */}
              <div
                className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full mb-4"
                style={{
                  background: 'rgba(62,207,142,0.1)',
                  color: '#3ecf8e',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                #{t.tag}
              </div>

              {/* User */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: t.avatarColor, fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold leading-tight"
                    style={{ color: '#F0F0FF', fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: '#888899' }}>{t.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
