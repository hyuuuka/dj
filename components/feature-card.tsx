"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.02, zIndex: 1 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden glassmorphism border-white/10 hover:border-white/20 transition-colors duration-300">
        <CardContent className="p-6">
          {icon && (
            <motion.div className="mb-4 text-[#4558ff]" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              {icon}
            </motion.div>
          )}
          <h3 className="text-xl font-semibold mb-4 text-gradient">{title}</h3>
          <p className="dark:text-white/80 text-gray-800">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

