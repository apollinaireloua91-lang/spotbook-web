'use client'

/**
 * ForProfessionals v2
 * ------------------------------------------------------------------
 * Split-layout pitch for pros. Checklist of benefits, magnetic CTA,
 * phone mockup showing the dashboard-style demos.
 */

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import PhoneMockup from '@/components/ui/PhoneMockup'
import MagneticButton from '@/components/ui/MagneticButton'

const BENEFITS = [
  'Publiez des vidéos verticales qui convertissent comme TikTok',
  'Agenda synchronisé, créneaux temps réel, zéro double-booking',
  'Stripe Connect intégré — paiement direct sur votre compte',
  'Messagerie, rappels automatiques, suivi des avis',
  '0% de commission sur vos services',
]

export default function ForProfessionals() {
  return (
    <section
      id="for-pros"
      className="relative overflow-hidden py-32 md:py-40"
    >
      {/* Ambient left glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-200px] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(176,38,232,0.35), transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1fr_1fr] md:px-12">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="chip"
          >
            <span className="chip-dot" />
            Pour les pros
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.08 }}
            className="display-lg font-display mt-6 text-balance"
          >
            Ton studio.{' '}
            <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
              Ton agenda.
            </span>{' '}
            Ton empire.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.14 }}
            className="mt-6 max-w-[500px] text-[17px] leading-[1.6] text-[color:var(--fg-muted)]"
          >
            Rejoins 500+ pros qui remplissent leur calendrier sans pub Meta,
            sans DM à gérer, sans spreadsheet.
          </motion.p>

          <ul className="mt-10 space-y-4">
            {BENEFITS.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.19, 1, 0.22, 1],
                  delay: 0.2 + i * 0.06,
                }}
                className="flex items-start gap-4"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(176,38,232,0.3), rgba(62,6,95,0.5))',
                    boxShadow:
                      '0 0 0 1px rgba(176,38,232,0.45) inset, 0 0 12px -2px rgba(176,38,232,0.5)',
                  }}
                >
                  <Check size={13} className="text-[color:var(--sb-cream)]" />
                </span>
                <span className="text-[16px] leading-[1.5] text-[color:var(--fg)]/85">
                  {b}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.55 }}
            className="mt-10"
          >
            <MagneticButton href="#download" className="cta" strength={0.3}>
              Devenir Prestataire — C’est gratuit
              <ArrowRight size={18} />
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <PhoneMockup
            sources={[
              '/videos/demo-barber.mp4',
              '/videos/demo-coach.mp4',
              '/videos/demo-reservez.mp4',
            ]}
          />
        </motion.div>
      </div>
    </section>
  )
}
