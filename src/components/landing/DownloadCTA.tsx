'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AppStoreButtons from '@/components/ui/AppStoreButtons'

export default function DownloadCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="relative rounded-[2.5rem] bg-brand-green p-12 sm:p-20 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            {/* Floating orbs */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-white/10"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}

            <div className="relative z-10">
              <motion.h2
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Prêt à commencer ?
              </motion.h2>

              <motion.p
                className="text-lg text-white/70 mb-10 max-w-lg mx-auto"
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
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
