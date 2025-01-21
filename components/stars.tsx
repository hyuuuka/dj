"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Star {
  x: number
  y: number
  size: number
  duration: number
}

export function Stars() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const stars: Star[] = []
    const numStars = 50

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
      })
    }

    // Add stars to container
    stars.forEach((star) => {
      const div = document.createElement("div")
      div.className = "star"
      div.style.left = `${star.x}%`
      div.style.top = `${star.y}%`
      div.style.width = `${star.size}px`
      div.style.height = `${star.size}px`
      div.style.setProperty("--twinkle-duration", `${star.duration}s`)
      container.appendChild(div)
    })

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

