import Header from '../../components/header'
import Footer from '../../components/footer'
import { AnimateIn } from '../../components/animate-in'

export const metadata = {
  title: 'Privacy Policy',
}

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <AnimateIn from="bottom">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
              <p>We collect information necessary to provide our services, including:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Discord user IDs and usernames</li>
                <li>Server information</li>
                <li>Case-related data</li>
                <li>Communication records</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Provide and improve our services</li>
                <li>Investigate and resolve cases</li>
                <li>Maintain security records</li>
                <li>Communicate with users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
              <p>We implement security measures to protect your information and maintain confidentiality. Your data is only accessible to authorized personnel.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
              <p>We retain information only as long as necessary to provide our services and comply with legal obligations.</p>
            </section>
          </div>
        </AnimateIn>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy

