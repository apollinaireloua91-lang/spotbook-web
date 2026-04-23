'use client'

import { motion } from 'framer-motion'
import Phone3D from '@/components/ui/Phone3D'
import AppStoreButtons from '@/components/ui/AppStoreButtons'
import { ChevronDown, Sparkles } from 'lucide-react'

const headlineWords = ['Découvrez.', 'Réservez.', 'Vivez.']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Aurora orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-brand-green/30 blur-[140px] animate-aurora" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-mid/40 blur-[130px] animate-aurora" style={{ animationDelay: '-6s' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-brand-card/40 blur-[120px] animate-aurora" style={{ animationDelay: '-12s' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid" />

        {/* Floating neon particles */}
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: Math.random() > 0.5 ? '#C026D3' : '#8E05C2',
              boxShadow: '0 0 10px currentColor',
              color: Math.random() > 0.5 ? '#C026D3' : '#8E05C2',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <div className="pt-10 lg:pt-0">
          {/* Neon badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card/40 border border-brand-green/40 backdrop-blur-md mb-8 neon-glow"
          >
            <Sparkles size={14} className="text-brand-green-light" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-pulse" style={{ boxShadow: '0 0 10px #C026D3' }} />
            <span className="text-sm font-medium text-white/90 tracking-wide">Disponible au Québec</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] mb-6 tracking-tight">
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
                <span className={i === 2 ? 'gradient-text' : 'text-white'}>
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
            indépendants.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <AppStoreButtons />
          </motion.div>

          {/* Trust micro-row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center gap-4 mt-8 text-xs text-brand-muted/80"
          >
            <div className="flex -space-x-2">
              {['#8E05C2', '#B026E8', '#C026D3'].map((c, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-black"
                  style={{ background: `linear-gradient(135deg, ${c}, #3E065F)` }}
                />
              ))}
            </div>
            <span>
              <span className="text-white font-semibold">500+</span> pros déjà
              à bord
            </span>
          </motion.div>
        </div>

        {/* Right: 3D Phone with neon halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end relative"
        >
          {/* Phone glow halo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[320px] h-[620px] rounded-[3rem] bg-brand-green/30 blur-[100px] animate-pulse-neon" />
          </div>
          <Phone3D screenContent="feed" videoSrc="/videos/demo-barber.mp4" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-brand-muted font-medium tracking-[0.2em] uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-brand-green-light" />
        </motion.div>
      </motion.div>
    </section>
  )
}
