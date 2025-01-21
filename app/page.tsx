"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"
import { AnimatedButton } from "../components/animated-button"
import CasesCounter from "../components/cases-counter"
import { AnimateIn } from "../components/animate-in"
import { FeatureCard } from "../components/feature-card"
import { ArrowRight, Shield, Scale, Gavel, Bot } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export default function Home() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = event
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-32 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
          <div className="container mx-auto px-4 relative text-center">
            <AnimateIn from="top" className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="text-white">Supercharge your </span>
                <span className="text-gray-400">Discord</span>
                <br />
                <span className="text-white">community with </span>
                <span className="text-gray-400">Justice.</span>
              </h1>
            </AnimateIn>
            <AnimateIn from="bottom" delay={0.2}>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Protecting communities and fighting scammers with the power of justice!
              </p>
              <div className="flex justify-center items-center gap-8 mb-12">
                <motion.div
                  animate={{ rotate: [0, -30, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Gavel size={64} />
                </motion.div>
                <div className="flex gap-4">
                  <AnimatedButton
                    className="bg-white text-blue-600 hover:bg-white/90"
                    onClick={() => window.open("https://discord.gg/your-invite", "_blank")}
                  >
                    <span className="flex items-center gap-2">
                      Join Our Server
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </AnimatedButton>
                  <AnimatedButton
                    className="bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() =>
                      window.open(
                        "https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&permissions=8&scope=bot%20applications.commands",
                        "_blank",
                      )
                    }
                  >
                    <span className="flex items-center gap-2">
                      Add Justice System Bot
                      <Bot className="w-4 h-4" />
                    </span>
                  </AnimatedButton>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Shield size={64} />
                </motion.div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <AnimateIn from="bottom">
              <h2 className="text-4xl font-bold mb-16 text-center text-gradient">Our Mission</h2>
            </AnimateIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <AnimateIn from="left" className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg overflow-hidden glassmorphism"
                >
                  <Image
                    src="https://github.com/hyuuuka/discord-justice-branding/blob/main/Main-Logo.png?raw=true"
                    alt="Discord Justice Logo"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </motion.div>
              </AnimateIn>
              <AnimateIn from="right" className="md:w-1/2">
                <div className="space-y-6 glassmorphism p-8 rounded-lg">
                  <p className="text-lg">
                    We are dedicated to maintaining a safe and fair environment within Discord communities by actively
                    combating scammers and rule-breakers.
                  </p>
                  <p className="text-lg">
                    Our team of vigilant moderators and advanced systems work tirelessly to protect users and uphold
                    justice.
                  </p>
                  <Link href="/learn-more">
                    <AnimatedButton variant="outline">
                      <span className="flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </AnimatedButton>
                  </Link>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Cases Handled Section */}
        <section className="bg-gradient text-on-gradient py-32 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 2px, transparent 2px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="container mx-auto px-4 text-center relative">
            <AnimateIn from="bottom">
              <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
              <CasesCounter />
            </AnimateIn>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-background py-32 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`,
            }}
          />
          <div className="container mx-auto px-4 relative" onMouseMove={handleMouseMove}>
            <AnimateIn from="bottom">
              <h2 className="text-4xl font-bold mb-16 text-center text-gradient">How We Protect</h2>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Animated grid lines */}
              <div
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-8 pointer-events-none"
                style={{ zIndex: -1 }}
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`v-${i}`}
                    className="h-full w-0.5 bg-blue-500/20"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1, transition: { duration: 1, delay: i * 0.2 } }}
                  />
                ))}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`h-${i}`}
                    className="w-full h-0.5 bg-blue-500/20"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1, transition: { duration: 1, delay: i * 0.2 } }}
                  />
                ))}
              </div>
              {/* Animated highlight */}
              <motion.div
                className="absolute inset-0 bg-blue-500/5 rounded-lg pointer-events-none"
                style={{ zIndex: -1 }}
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <AnimateIn from="left" delay={0.1}>
                <FeatureCard
                  icon={<Shield size={32} className="animate-shield" />}
                  title="Proactive Moderation"
                  description="Our team actively monitors Discord servers to prevent scams and rule violations before they occur."
                />
              </AnimateIn>
              <AnimateIn from="bottom" delay={0.2}>
                <FeatureCard
                  icon={<Gavel size={32} className="animate-hammer" />}
                  title="Swift Justice"
                  description="We quickly investigate and resolve reported cases to maintain a safe environment for all users."
                />
              </AnimateIn>
              <AnimateIn from="right" delay={0.3}>
                <FeatureCard
                  icon={<Scale size={32} className="animate-justice-scale" />}
                  title="Fair Arbitration"
                  description="Our experienced team ensures that all cases are handled fairly and impartially."
                />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient text-on-gradient py-32">
          <div className="container mx-auto px-4 text-center">
            <AnimateIn from="bottom">
              <h2 className="text-4xl font-bold mb-8">Join the Fight Against Scammers</h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto">
                Be part of our community dedicated to making Discord a safer place for everyone!
              </p>
              <AnimatedButton
                className="bg-white text-blue-600 hover:bg-white/90"
                onClick={() => window.open("https://discord.gg/your-invite", "_blank")}
              >
                <span className="flex items-center gap-2">
                  Join Now
                  <ArrowRight className="w-4 h-4" />
                </span>
              </AnimatedButton>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

