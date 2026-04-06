'use client'

import { motion } from 'framer-motion'
import Phone3D from '@/components/ui/Phone3D'
import AppStoreButtons from '@/components/ui/AppStoreButtons'
import { ChevronDown } from 'lucide-react'

const headlineWords = ['Découvrez.', 'Réservez.', 'Vivez.']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute top-20 -left-40 w-[600px] h-[600px] rounded-full bg-brand-card/60 blur-[120px]" />
        <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] rounded-full bg-brand-card/40 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-green/[0.02] blur-[80px]" />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-brand-green/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#043603 1px, transparent 1px), linear-gradient(90deg, #043603 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="pt-10 lg:pt-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card border border-brand-border mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-brand-green">Disponible au Québec</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-4"
              >
                <span className={i === 2 ? 'gradient-text' : 'text-brand-text'}>
                  {word}
                </span>
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg sm:text-xl text-brand-muted max-w-lg mb-10 leading-relaxed"
          >
            La super-app qui connecte les clients aux meilleurs professionnels
            indépendants
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <AppStoreButtons />
          </motion.div>
        </div>

        {/* Right: 3D Phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <Phone3D screenContent="feed" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-brand-muted font-medium">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-brand-green/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
