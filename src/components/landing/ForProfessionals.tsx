'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Phone3D from '@/components/ui/Phone3D'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  'Publiez des vidéos pour montrer votre travail',
  'Gérez votre agenda et vos disponibilités',
  'Recevez des paiements sécurisés (virement automatique)',
  'Suivez vos revenus et vos avis clients',
  'Commission transparente : 18% sur les réservations',
]

export default function ForProfessionals() {
  return (
    <section className="py-32 relative overflow-hidden" id="professionals">
      {/* Ambient purple wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-card/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-brand-green/15 blur-[140px] -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card/50 border border-brand-green/40 backdrop-blur-md neon-glow">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-pulse" style={{ boxShadow: '0 0 8px #C026D3' }} />
              <span className="text-sm font-semibold text-brand-green-light tracking-wide">Pour les Pros</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              Vous êtes{' '}
              <span className="gradient-text">professionnel</span> ?
            </h2>

            <p className="text-lg text-brand-muted leading-relaxed max-w-md">
              Rejoignez des centaines de prestataires qui développent leur
              clientèle avec Spotbook.
            </p>

            <ul className="space-y-4 pt-2">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-lg bg-brand-green/25 border border-brand-green/50 flex items-center justify-center flex-shrink-0 neon-glow">
                    <Check size={14} className="text-brand-green-light" />
                  </div>
                  <span className="text-white/85">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ x: 4 }}
              className="inline-block pt-4"
            >
              <Link
                href="#download"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Devenir Prestataire — C&apos;est gratuit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2} className="flex justify-center">
          <div className="relative p-14 rounded-[2.5rem] bg-gradient-to-br from-brand-card/50 via-brand-mid/15 to-transparent border border-brand-green/20 backdrop-blur-md overflow-hidden">
            <div className="absolute inset-0 bg-radial-neon opacity-60 pointer-events-none" />
            <div className="relative">
              <Phone3D
                screenContent="dashboard"
                videoSrcs={['/videos/demo-barber.mp4', '/videos/demo-nails.mp4', '/videos/demo-coach.mp4']}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
