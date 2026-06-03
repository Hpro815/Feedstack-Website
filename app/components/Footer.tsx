'use client'

import { AppIcon } from './Navbar'
import { GooglePlayLogo } from './Hero'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.feedstack.app'

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-6"
      style={{ borderTop: '1px solid rgba(108,99,255,0.12)' }}
      aria-label="Footer"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <AppIcon size={32} />
              <span
                className="text-[#F0F0FF] text-lg font-bold"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Feedstack
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: '#888899', fontFamily: 'Inter, sans-serif', maxWidth: '280px' }}
            >
              The free habit tracker app that turns any YouTube video or X post into
              a daily habit reminder with streak tracking. No account. No ads.
            </p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-4 py-2.5 transition-all duration-200 hover:-translate-y-px"
              style={{
                background: 'rgba(108,99,255,0.12)',
                border: '1px solid rgba(108,99,255,0.25)',
                color: '#F0F0FF',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
              aria-label="Get Feedstack on Google Play"
            >
              <GooglePlayLogo size={16} />
              Get on Google Play
            </a>
          </div>

          {/* App */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 tracking-wider uppercase"
              style={{ color: '#F0F0FF', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              App
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'How it works', href: '#how-it-works' },
                { label: 'Why Feedstack', href: '#why-feedstack' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Download', href: PLAY_STORE_URL, external: true },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm transition-colors duration-200 hover:text-[#F0F0FF]"
                    style={{ color: '#888899', fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 tracking-wider uppercase"
              style={{ color: '#F0F0FF', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[#F0F0FF]"
                    style={{ color: '#888899', fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(108,99,255,0.1)' }}
        >
          <p className="text-xs" style={{ color: '#888899', fontFamily: 'Inter, sans-serif' }}>
            &copy; {new Date().getFullYear()} Feedstack. Free habit tracker app for Android.
          </p>
          <p className="text-xs" style={{ color: '#888899', fontFamily: 'Inter, sans-serif' }}>
            Built for people who actually want to{' '}
            <span style={{ color: '#3ecf8e' }}>build daily habits</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
