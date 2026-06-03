import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Feedstack - Turn Any YouTube Video Into a Daily Habit | Free Android App',
  description:
    'Feedstack turns any YouTube video, X post, or web link into a daily habit reminder with streak tracking. Free on Android. No account needed. No ads.',
  keywords: [
    'habit tracker app',
    'daily habit reminder',
    'YouTube habit',
    'streak tracking app',
    'free habit app Android',
    'morning routine app',
    'build daily habits',
    'habit building app',
  ],
  openGraph: {
    title: 'Feedstack - Turn Any YouTube Video Into a Daily Habit | Free Android App',
    description:
      'Feedstack turns any YouTube video, X post, or web link into a daily habit reminder with streak tracking. Free on Android. No account needed. No ads.',
    url: 'https://feedstack.app',
    siteName: 'Feedstack',
    images: [
      {
        url: 'https://feedstack.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Feedstack - Turn any YouTube video into a daily habit',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feedstack - Turn Any YouTube Video Into a Daily Habit',
    description:
      'Turn any YouTube video or X post into a daily habit reminder with streak tracking. Free on Android.',
    images: ['https://feedstack.app/og-image.png'],
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
    canonical: 'https://feedstack.app',
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
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'Feedstack',
              operatingSystem: 'Android',
              applicationCategory: 'HealthApplication',
              description:
                'Feedstack turns any YouTube video, X post, or web link into a daily habit reminder with streak tracking.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'GBP',
              },
              url: 'https://feedstack.app',
              downloadUrl:
                'https://play.google.com/store/apps/details?id=com.feedstack.app',
              author: {
                '@type': 'Organization',
                name: 'Feedstack',
              },
            }),
          }}
        />
      </head>
      <body className="noise-bg">
        {children}
      </body>
    </html>
  )
}
