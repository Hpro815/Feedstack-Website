import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Feedstack',
  description:
    'Read the Feedstack privacy policy to learn what information is collected on our website and app, and how it is used.',
  alternates: {
    canonical: 'https://feedstack.app/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const sectionHeading = 'text-xl md:text-2xl font-bold mb-4 mt-12'
const subHeading = 'text-base font-semibold mt-6 mb-2'
const paragraph = 'text-sm md:text-base leading-relaxed mb-4'
const listItem = 'text-sm md:text-base leading-relaxed'
const linkStyle = { color: '#8A82FF' }

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-3xl md:text-4xl font-bold mb-2 text-[#F0F0FF]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Feedstack Privacy Policy
          </h1>
          <p className="text-sm mb-10" style={{ color: '#888899', fontFamily: 'Inter, sans-serif' }}>
            Last updated: July 2026
          </p>

          <div style={{ color: '#B8B8C8', fontFamily: 'Inter, sans-serif' }}>
            <p className={paragraph}>
              Feedstack ("we", "our", "the app") is built with privacy as a core principle. This
              policy explains what data the app does and does not collect.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              Our Core Commitment
            </h2>
            <p className={paragraph}>
              Feedstack does not require an account, does not collect personal data, and does not
              use advertising. The habits, links, streaks, and reminders you create are stored
              locally on your device.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              Information We Do Not Collect
            </h2>
            <p className={paragraph}>We do not collect, store, or have access to:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2 mb-4">
              <li className={listItem}>Your name, email address, or contact information</li>
              <li className={listItem}>The content of the links you save as habits</li>
              <li className={listItem}>Your habit history, streaks, or completion data</li>
              <li className={listItem}>Your location</li>
              <li className={listItem}>Your browsing activity outside the app</li>
              <li className={listItem}>Any biometric or health data</li>
            </ul>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              Information Stored On Your Device
            </h2>
            <p className={paragraph}>
              The following information is stored locally on your device only, and is never
              transmitted to us:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2 mb-4">
              <li className={listItem}>
                The links (YouTube, TikTok, Instagram, X, Reddit, Spotify, articles, or any other
                URL) you add as habits
              </li>
              <li className={listItem}>Habit names, categories, and reminder times you set</li>
              <li className={listItem}>Your streak history and completion records</li>
              <li className={listItem}>Your app preferences and settings</li>
            </ul>
            <p className={paragraph}>
              If you delete the app, this data is permanently removed from your device.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              Optional Features That Involve Data Sharing
            </h2>

            <h3 className={subHeading} style={{ color: '#F0F0FF' }}>
              Streak Buddies
            </h3>
            <p className={paragraph}>
              If you choose to use the Streak Buddies feature, you create a username, and this
              username along with the streak count for habits you choose to share becomes visible
              to the specific person you connect with. No other personal data is shared through
              this feature. You can stop using this feature at any time in Settings.
            </p>

            <h3 className={subHeading} style={{ color: '#F0F0FF' }}>
              Waitlist and Email Communications
            </h3>
            <p className={paragraph}>
              If you sign up for our waitlist on feed-stack.com, we collect your email address
              solely to send you launch updates and, if applicable, a discount code. You can
              unsubscribe at any time using the link in any email we send.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              Third-Party Services
            </h2>
            <p className={paragraph}>
              Feedstack uses the following third-party services strictly for their intended
              purpose:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2 mb-4">
              <li className={listItem}>
                <strong>RevenueCat</strong>, to manage subscription purchases. RevenueCat receives
                your device's purchase transaction data as required by Apple and Google to
                validate purchases. See RevenueCat's privacy policy at{' '}
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={linkStyle}
                >
                  revenuecat.com/privacy
                </a>{' '}
                for details.
              </li>
              <li className={listItem}>
                <strong>Apple App Store and Google Play</strong>, to process payments for Pro
                subscriptions and the Lifetime deal. We do not have access to your payment card
                details at any point.
              </li>
            </ul>
            <p className={paragraph}>
              We do not use third-party advertising networks, analytics trackers, or data brokers
              of any kind.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              No Advertising
            </h2>
            <p className={paragraph}>
              Feedstack does not display ads and does not share any data with advertising
              networks.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              Children's Privacy
            </h2>
            <p className={paragraph}>
              Feedstack is not directed at children under 13, and we do not knowingly collect any
              information from children.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              Data Security
            </h2>
            <p className={paragraph}>
              Because your habit data stays on your device rather than on our servers, there is no
              central database of user habit data that could be exposed in a breach. Purchase and
              subscription data is handled securely by Apple, Google, and RevenueCat in accordance
              with their own security standards.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              Your Rights
            </h2>
            <p className={paragraph}>
              Since we do not hold personal data beyond an optional waitlist email address, there
              is little for us to access, correct, or delete on your behalf. If you signed up for
              the waitlist and want your email removed, contact us using the details below and we
              will delete it promptly.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              Changes to This Policy
            </h2>
            <p className={paragraph}>
              If this policy changes, we will update the "Last updated" date at the top of this
              page. Continued use of the app after changes are posted constitutes acceptance of
              the updated policy.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              Contact Us
            </h2>
            <p className={paragraph}>
              If you have any questions about this privacy policy, contact us at:
            </p>
            <p className={paragraph}>
              <a
                href="mailto:feedstack84@gmail.com"
                className="underline font-semibold"
                style={{ color: '#8A82FF' }}
              >
                feedstack84@gmail.com
              </a>
            </p>

            <div className="pt-8 mt-8" style={{ borderTop: '1px solid rgba(108,99,255,0.12)' }}>
              <p className="text-sm italic" style={{ color: '#888899' }}>
                Feedstack. Turn any link into a daily habit.
                <br />
                feed-stack.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
