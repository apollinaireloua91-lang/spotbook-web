'use client'

/**
 * HowItWorks v2 — zigzag three-step flow
 * ------------------------------------------------------------------
 * Three alternating rows (text / phone) tied together by a vertical
 * dotted connector that fades from violet to cream. Each step has:
 *   - big stroked numeral + icon chip
 *   - title + description
 *   - PhoneMockup cross-fading through the demo videos for that step
 */

import { motion } from 'framer-motion'
import PhoneMockup from '@/components/ui/PhoneMockup'

type Step = {
  number: string
  eyebrow: string
  title: string
  body: string
  sources: string[]
}

const STEPS: Step[] = [
  {
    number: '01',
    eyebrow: 'Découvrez',
    title: 'Un feed vidéo vivant, pas un annuaire.',
    body:
      'Parcourez des démos verticales, lisez les avis, repérez le pro qui vous parle en quelques secondes. Pas de recherche à tâtons.',
    sources: ['/videos/demo-barber.mp4', '/videos/hero-a.mp4'],
  },
  {
    number: '02',
    eyebrow: 'Réservez',
    title: 'Trois taps, c\u2019est confirmé.',
    body:
      'Choisissez le service, la date et payez en ligne. Acompte ou paiement complet, confirmation instantanée, zéro téléphone.',
    sources: ['/videos/demo-reservez.mp4', '/videos/hero-b.mp4'],
  },
  {
    number: '03',
    eyebrow: 'Vivez',
    title: 'Un QR code, une expérience.',
    body:
      'Billets d\u2019événements, service à domicile ou en studio — tout est regroupé dans votre carnet. Présentez, profitez.',
    sources: ['/videos/demo-coach.mp4', '/videos/hero-a.mp4'],
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="mx-auto max-w-[720px] text-center"
        >
          <span className="eyebrow">· Comment ça marche ·</span>
          <h2 className="display-lg font-display mt-5 text-balance">
            Trois étapes.{' '}
            <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
              Zéro friction.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55] text-[color:var(--fg-muted)]">
            De la découverte au souvenir, tout est pensé pour que ça se passe
            dans l’app — sans appel, sans relance, sans attente.
          </p>
        </motion.div>

        <div className="relative mt-24">
          {/* Vertical connector */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 md:block"
            style={{
              background:
                'linear-gradient(180deg, transparent, rgba(176,38,232,0.55) 12%, rgba(253,242,195,0.35) 50%, rgba(176,38,232,0.55) 88%, transparent)',
              maskImage:
                'repeating-linear-gradient(180deg, #000 0 4px, transparent 4px 10px)',
              WebkitMaskImage:
                'repeating-linear-gradient(180deg, #000 0 4px, transparent 4px 10px)',
            }}
          />

          <div className="flex flex-col gap-28 md:gap-40">
            {STEPS.map((step, i) => {
              const reversed = i % 2 === 1
              return (
                <div
                  key={step.number}
                  className={[
                    'relative grid items-center gap-10 md:grid-cols-2 md:gap-20',
                    reversed ? 'md:[&>*:first-child]:order-2' : '',
                  ].join(' ')}
                >
                  <motion.div
                    initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
                    className={reversed ? 'md:pl-10' : 'md:pr-10'}
                  >
                    <div className="flex items-baseline gap-5">
                      <span
                        className="font-display text-[84px] font-semibold leading-none tracking-[-0.06em]"
                        style={{
                          WebkitTextStroke: '1.5px rgba(176,38,232,0.55)',
                          color: 'transparent',
                          textShadow: '0 0 40px rgba(142,5,194,0.35)',
                        }}
                      >
                        {step.number}
                      </span>
                      <span className="eyebrow text-[color:var(--sb-cream)]">
                        {step.eyebrow}
                      </span>
                    </div>
                    <h3 className="display-md font-display mt-6 text-balance">
                      {step.title}
                    </h3>
                    <p className="mt-5 max-w-[460px] text-[17px] leading-[1.6] text-[color:var(--fg-muted)]">
                      {step.body}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 48 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{
                      duration: 1,
                      ease: [0.19, 1, 0.22, 1],
                      delay: 0.1,
                    }}
                    className="flex justify-center"
                  >
                    <PhoneMockup sources={step.sources} />
                  </motion.div>

                  {/* Node dot on connector */}
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
                    style={{
                      background:
                        'radial-gradient(circle, #FDF2C3 0%, #B026E8 60%, transparent 100%)',
                      boxShadow: '0 0 20px rgba(176,38,232,0.8)',
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
