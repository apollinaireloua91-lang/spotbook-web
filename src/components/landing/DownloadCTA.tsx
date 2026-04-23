'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AppStoreButtons from '@/components/ui/AppStoreButtons'
import { Sparkles } from 'lucide-react'

export default function DownloadCTA() {
  return (
    <section id="download" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div
            className="relative rounded-[2.5rem] p-12 sm:p-20 text-center overflow-hidden animate-pulse-neon"
            style={{
              background:
                'radial-gradient(ellipse at top, #700B97 0%, #3E065F 40%, #1A0330 100%)',
              border: '1px solid rgba(192, 38, 211, 0.4)',
            }}
          >
            {/* Animated conic gradient ring */}
            <div
              className="absolute -inset-px rounded-[2.5rem] opacity-60 pointer-events-none"
              style={{
                background:
                  'conic-gradient(from 0deg, #8E05C2, #C026D3, #700B97, #3E065F, #8E05C2)',
                maskImage:
                  'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '1px',
                animation: 'spin 12s linear infinite',
              }}
            />

            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-neon/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

            {/* Floating neon orbs */}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-brand-neon"
                style={{
                  left: `${10 + i * 9}%`,
                  top: `${15 + (i % 3) * 28}%`,
                  boxShadow: '0 0 12px #C026D3',
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8"
              >
                <Sparkles size={14} className="text-brand-neon" />
                <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
                  Téléchargez gratuitement
                </span>
              </motion.div>

              <motion.h2
                className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Prêt à <span className="gradient-text">commencer</span> ?
              </motion.h2>

              <motion.p
                className="text-lg sm:text-xl text-white/70 mb-12 max-w-xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Téléchargez Spotbook et rejoignez la communauté dès aujourd&apos;hui.
              </motion.p>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <AppStoreButtons size="large" />
              </motion.div>

              {/* Secondary trust signal */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex items-center justify-center gap-6 text-xs text-white/50 font-medium tracking-wide"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-brand-neon" /> Sans engagement
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-brand-neon" /> Paiement sécurisé
                </span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-brand-neon" /> Support 7/7
                </span>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
