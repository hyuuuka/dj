"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          "before:absolute before:inset-0 before:bg-white/20 before:transform before:scale-x-0 before:origin-right before:transition-transform before:duration-300",
          "hover:before:scale-x-100 hover:before:origin-left",
          "after:absolute after:inset-0 after:bg-white/20 after:transform after:scale-y-0 after:origin-bottom after:transition-transform after:duration-300",
          "hover:after:scale-y-100 hover:after:origin-top",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <motion.span
          className="relative z-10"
          animate={isHovered ? {
            y: [0, -2, 0],
          } : {}}
          transition={{
            duration: 0.3,
            repeat: isHovered ? Infinity : 0,
          }}
        >
          {children}
        </motion.span>
      </Button>
    </motion.div>
  )
}

