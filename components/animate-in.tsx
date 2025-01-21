"use client"

import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimateInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  from?: "bottom" | "left" | "right" | "top"
  delay?: number
  className?: string
  duration?: number
}

export function AnimateIn({
  children,
  from = "bottom",
  delay = 0,
  className,
  duration = 0.5,
  ...props
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directions = {
    bottom: { y: 20 },
    left: { x: -20 },
    right: { x: 20 },
    top: { y: -20 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        ...directions[from],
        opacity: 0,
      }}
      animate={
        isInView
          ? {
              y: 0,
              x: 0,
              opacity: 1,
            }
          : {}
      }
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

