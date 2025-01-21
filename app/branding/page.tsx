import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimateIn } from "@/components/animate-in"
import Image from "next/image"

export const metadata = {
  title: "Branding | Discord Justice",
  description: "Official branding guidelines and assets for Discord Justice.",
}

export default function BrandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <AnimateIn from="bottom">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Discord Justice Branding</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Logo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glassmorphism p-6 rounded-lg">
                <Image
                  src="https://github.com/hyuuuka/discord-justice-branding/blob/main/Enhanced-Logo-Transparent.png?raw=true"
                  alt="Discord Justice Logo"
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
                <p className="text-center">Primary Logo</p>
              </div>
              <div className="glassmorphism p-6 rounded-lg">
                <Image
                  src="https://github.com/hyuuuka/discord-justice-branding/blob/main/Main-Logo.png?raw=true"
                  alt="Discord Justice Text Logo"
                  width={300}
                  height={100}
                  className="mx-auto mb-4"
                />
                <p className="text-center">Text Logo</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#4558ff] mb-2"></div>
                <p className="text-sm">#4558ff</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#0a0b1a] mb-2"></div>
                <p className="text-sm">#0a0b1a</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#1e2b7c] mb-2"></div>
                <p className="text-sm">#1e2b7c</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white mb-2"></div>
                <p className="text-sm">#ffffff</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Typography</h2>
            <div className="glassmorphism p-6 rounded-lg">
              <p className="text-4xl mb-2">Inter</p>
              <p className="text-xl mb-4">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789
              </p>
              <p>We use the Inter font family for all our text. It's clean, modern, and highly readable.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Usage Guidelines</h2>
            <div className="glassmorphism p-6 rounded-lg">
              <ul className="list-disc list-inside space-y-2">
                <li>Always use the official logos and colors in your materials.</li>
                <li>Maintain clear space around the logo to ensure visibility.</li>
                <li>Don't alter, rotate, or distort the logo in any way.</li>
                <li>Use the provided color palette for consistency across all platforms.</li>
                <li>When in doubt, refer to these guidelines or contact our branding team.</li>
              </ul>
            </div>
          </section>
        </AnimateIn>
      </main>
      <Footer />
    </div>
  )
}

