"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"
import { Menu, Moon, Sun, Shield, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Shield size={36} className="text-[#4558ff]" />
            </motion.div>
            <span className="text-2xl font-bold text-gradient">Discord Justice</span>
          </Link>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-sm font-medium hover:text-[#4558ff] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm font-medium hover:text-[#4558ff] transition-colors">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-sm font-medium hover:text-[#4558ff] transition-colors">
                  Protection
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-sm font-medium hover:text-[#4558ff] transition-colors">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm font-medium hover:text-[#4558ff] transition-colors">
                  Docs
                </Link>
              </li>
            </ul>
            <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full w-10 h-10">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="default" size="sm" className="rounded-full px-6 bg-[#4558ff] hover:bg-[#4558ff]/90">
              Join Now
            </Button>
          </nav>

          {/* Mobile navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/10 lg:hidden"
              >
                <nav className="container mx-auto px-6 py-4">
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <Link href="/" className="text-sm font-medium hover:text-[#4558ff] transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="#about" className="text-sm font-medium hover:text-[#4558ff] transition-colors">
                        Mission
                      </Link>
                    </li>
                    <li>
                      <Link href="#features" className="text-sm font-medium hover:text-[#4558ff] transition-colors">
                        Protection
                      </Link>
                    </li>
                    <li>
                      <Link href="/reports" className="text-sm font-medium hover:text-[#4558ff] transition-colors">
                        Reports
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs" className="text-sm font-medium hover:text-[#4558ff] transition-colors">
                        Docs
                      </Link>
                    </li>
                  </ul>
                  <div className="flex items-center gap-4 mt-4">
                    <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full w-10 h-10">
                      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="rounded-full px-6 bg-[#4558ff] hover:bg-[#4558ff]/90"
                    >
                      Join Now
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

