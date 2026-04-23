'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import Phone3D from '@/components/ui/Phone3D'
import { Search, CalendarCheck, PartyPopper } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Découvrez',
    description:
      'Parcourez un feed vidéo personnalisé. Trouvez les meilleurs professionnels près de chez vous — barbers, coachs, photographes, DJs, traiteurs et plus.',
    phone: 'feed' as const,
    videos: ['/videos/demo-barber.mp4', '/videos/demo-nails.mp4', '/videos/demo-coach.mp4'],
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Réservez',
    description:
      'Réservez en quelques taps. Choisissez un service, une date, payez en ligne. Confirmé en 1 minute. Paiement complet ou acompte.',
    phone: 'booking' as const,
    video: '/videos/demo-reservez.mp4',
  },
  {
    number: '03',
    icon: PartyPopper,
    title: 'Vivez',
    description:
      "Participez aux meilleurs événements. Achetez vos billets, recevez votre QR code, présentez-le à l'entrée.",
    phone: 'event' as const,
    video: '/videos/demo-coach.mp4',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-32 relative" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-brand-green-light font-semibold mb-4 inline-block">
            · Processus ·
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            Comment ça <span className="gradient-text">marche</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Trois étapes simples pour profiter de Spotbook
          </p>
        </ScrollReveal>

        <div className="space-y-40">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <ScrollReveal
                direction={i % 2 === 0 ? 'left' : 'right'}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <span
                      className="font-display text-7xl font-bold leading-none"
                      style={{
                        WebkitTextStroke: '1.5px rgba(192, 38, 211, 0.5)',
                        color: 'transparent',
                        textShadow: '0 0 40px rgba(142, 5, 194, 0.4)',
                      }}
                    >
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-brand-card/60 border border-brand-green/40 flex items-center justify-center neon-glow backdrop-blur-sm">
                      <step.icon size={24} className="text-brand-green-light" />
                    </div>
                  </div>
                  <h3 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-brand-muted leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal
                direction={i % 2 === 0 ? 'right' : 'left'}
                delay={0.2}
                className={`flex justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="relative p-14 rounded-[2.5rem] bg-gradient-to-br from-brand-card/50 via-brand-mid/20 to-transparent border border-brand-green/20 backdrop-blur-md overflow-hidden">
                  {/* radial glow behind phone */}
                  <div className="absolute inset-0 bg-radial-neon opacity-60 pointer-events-none" />
                  <div className="relative">
                    <Phone3D screenContent={step.phone} videoSrc={step.video} videoSrcs={step.videos} />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
