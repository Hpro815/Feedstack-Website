import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProofBar from './components/SocialProofBar'
import HowItWorks from './components/HowItWorks'
import WhySection from './components/WhySection'
import Testimonials from './components/Testimonials'
import Waitlist from './components/Waitlist'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProofBar />
      <HowItWorks />
      <WhySection />
      <Testimonials />
      <Waitlist />
      <CTA />
      <Footer />
    </main>
  )
}
