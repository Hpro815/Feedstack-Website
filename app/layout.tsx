import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Feedstack - Free Habit Tracker App for iOS & Android | Build Daily Habits',
  description:
    'Feedstack turns any video or media link into a daily habit reminder with streak tracking. Free on iOS and Android. No ads.',
  keywords: [
    'habit tracker app',
    'free habit tracker',
    'daily habit reminder',
    'streak tracking app',
    'habit tracker iOS',
    'habit tracker Android',
    'free habit app iOS',
    'free habit app Android',
    'morning routine app',
    'build daily habits',
    'YouTube habit tracker',
    'habit building app',
  ],
  openGraph: {
    title: 'Feedstack - Free Habit Tracker App for iOS & Android | Build Daily Habits',
    description:
      'Feedstack turns any video or media link into a daily habit reminder with streak tracking. Free on iOS and Android. No ads.',
    url: 'https://feed-stack.com',
    siteName: 'Feedstack',
    images: [
      {
        url: 'https://feed-stack.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Feedstack - Turn any YouTube video into a daily habit',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Feedstack - Free Habit Tracker App for iOS & Android',
    description:
      'Feedstack turns any video or media link into a daily habit reminder with streak tracking. Free on iOS and Android. No ads.',
    images: ['https://feed-stack.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://feed-stack.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Feedstack',
              url: 'https://feed-stack.com',
              description: 'Feedstack turns any video or media link into a daily habit reminder with streak tracking. Free on iOS and Android. No ads.',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'Feedstack',
              operatingSystem: ['Android', 'iOS'],
              applicationCategory: 'HealthApplication',
              description:
                'Feedstack turns any video or media link into a daily habit reminder with streak tracking. Free on iOS and Android. No ads.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              url: 'https://feed-stack.com',
              downloadUrl: [
                'https://play.google.com/store/apps/details?id=com.feedstack.app',
                'https://apps.apple.com/us/app/feedstack-habit-tracker/id6787473480',
              ],
              author: {
                '@type': 'Organization',
                name: 'Feedstack',
                url: 'https://feed-stack.com',
              },
            }]),
          }}
        />
      </head>
      <body className="noise-bg">
        {children}
      </body>
      <GoogleAnalytics gaId="G-WG7YWY8KT2" />
    </html>
  )
}
