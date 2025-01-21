import Header from '../../components/header'
import Footer from '../../components/footer'
import { AnimateIn } from '../../components/animate-in'

export const metadata = {
  title: 'Terms of Service',
}

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <AnimateIn from="bottom">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Terms of Service</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using Discord Justice services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p>Discord Justice provides community protection and anti-scam services for Discord servers. Our services include but are not limited to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Scam prevention and detection</li>
                <li>Community moderation support</li>
                <li>Case handling and resolution</li>
                <li>Server security consultation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p>Users of Discord Justice services agree to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of their account</li>
                <li>Report suspicious activities promptly</li>
                <li>Comply with Discord's Terms of Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Limitations of Liability</h2>
              <p>Discord Justice strives to provide reliable services but cannot guarantee complete prevention of all malicious activities. We are not liable for any damages arising from the use of our services.</p>
            </section>
          </div>
        </AnimateIn>
      </main>
      <Footer />
    </div>
  )
}

export default TermsOfService

