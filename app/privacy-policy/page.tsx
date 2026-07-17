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
const paragraph = 'text-sm md:text-base leading-relaxed mb-4'
const listItem = 'text-sm md:text-base leading-relaxed'

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
            Privacy Policy
          </h1>
          <p className="text-sm mb-10" style={{ color: '#888899', fontFamily: 'Inter, sans-serif' }}>
            Last updated: July 17, 2026
          </p>

          <div style={{ color: '#B8B8C8', fontFamily: 'Inter, sans-serif' }}>
            <p className={paragraph}>
              This Privacy Policy explains what information Feedstack ("we", "us") collects
              through the feedstack.app website and the Feedstack Android app, and how that
              information is used. Feedstack does not require an account, and the app does not
              show ads.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              1. Information We Collect
            </h2>

            <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: '#F0F0FF' }}>
              The Feedstack app
            </h3>
            <p className={paragraph}>
              Feedstack does not require you to create an account. The habits, links, and streak
              data you add are stored locally on your device and are not uploaded to or stored on
              our servers.
            </p>

            <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: '#F0F0FF' }}>
              This website
            </h3>
            <ul className="list-disc pl-5 flex flex-col gap-2 mb-4">
              <li className={listItem}>
                <strong>Analytics.</strong> We use Google Analytics to understand how visitors use
                this website, including pages viewed, general device/browser type, and
                approximate location derived from IP address. Google Analytics does not identify
                you by name.
              </li>
              <li className={listItem}>
                <strong>Referral links.</strong> If you arrive at feedstack.app through a
                creator's referral link (e.g. feedstack.app/creatorname), we log the referral
                name, timestamp, browser user agent, and general country location. This is used
                only to measure which referral links are driving traffic and does not identify
                you personally.
              </li>
            </ul>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              2. How We Use Information
            </h2>
            <p className={paragraph}>
              Information collected through analytics and referral tracking is used solely to
              understand website traffic, measure the performance of referral links, and improve
              Feedstack. We do not sell your information.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              3. Third Parties
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 mb-4">
              <li className={listItem}>
                <strong>Google Analytics</strong> — website analytics. See Google's privacy policy
                at{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: '#8A82FF' }}
                >
                  policies.google.com/privacy
                </a>
                .
              </li>
              <li className={listItem}>
                <strong>Supabase</strong> — stores anonymous referral-link visit records
                (referral name, timestamp, user agent, country) described above.
              </li>
              <li className={listItem}>
                <strong>Google Play</strong> — the Feedstack app is distributed through the Google
                Play Store, which has its own privacy practices.
              </li>
            </ul>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              4. Data Retention
            </h2>
            <p className={paragraph}>
              Referral-link visit records are retained only as long as needed to measure referral
              performance. Analytics data is retained according to Google Analytics' standard
              retention settings.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              5. Your Choices
            </h2>
            <p className={paragraph}>
              You can use your browser's settings, extensions, or Google's{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: '#8A82FF' }}
              >
                Analytics opt-out
              </a>{' '}
              to limit analytics tracking on this website. Since the Feedstack app stores your
              data locally, uninstalling the app removes your habit and streak data from your
              device.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              6. Children's Privacy
            </h2>
            <p className={paragraph}>
              Feedstack is not directed at children under 13, and we do not knowingly collect
              information from children under 13.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              7. Changes to This Policy
            </h2>
            <p className={paragraph}>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated "Last updated" date.
            </p>

            <h2 className={sectionHeading} style={{ color: '#F0F0FF' }}>
              8. Contact Us
            </h2>
            <p className={paragraph}>
              If you have questions about this Privacy Policy, contact us at{' '}
              <a
                href="mailto:Feedstack84@gmail.com"
                className="underline"
                style={{ color: '#8A82FF' }}
              >
                Feedstack84@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
