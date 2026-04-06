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
  'Commission transparente : 12% sur les réservations',
]

export default function ForProfessionals() {
  return (
    <section className="py-24 relative" id="professionals">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-card/30 to-white" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/5 border border-brand-green/10">
              <span className="text-sm font-semibold text-brand-green">Pour les Pros</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-text">
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
                  <div className="mt-0.5 w-6 h-6 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-brand-green" />
                  </div>
                  <span className="text-brand-text/80">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ x: 4 }}
              className="inline-block pt-4"
            >
              <Link
                href="/explore"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Devenir Prestataire — C&apos;est gratuit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2} className="flex justify-center">
          <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-brand-card to-brand-green/5">
            <Phone3D screenContent="dashboard" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
