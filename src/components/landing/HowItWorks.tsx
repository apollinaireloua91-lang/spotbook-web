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
    color: 'from-brand-green/10 to-brand-card',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Réservez',
    description:
      'Réservez en quelques taps. Choisissez un service, une date, payez en ligne. Confirmé en 1 minute. Paiement complet ou acompte.',
    phone: 'booking' as const,
    color: 'from-brand-card to-brand-green/5',
  },
  {
    number: '03',
    icon: PartyPopper,
    title: 'Vivez',
    description:
      "Participez aux meilleurs événements. Achetez vos billets, recevez votre QR code, présentez-le à l'entrée.",
    phone: 'event' as const,
    color: 'from-brand-green/5 to-brand-card',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-text mb-4">
            Comment ça marche
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Trois étapes simples pour profiter de Spotbook
          </p>
        </ScrollReveal>

        <div className="space-y-32">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              <ScrollReveal
                direction={i % 2 === 0 ? 'left' : 'right'}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-6xl font-bold text-brand-green/10">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                      <step.icon size={22} className="text-brand-green" />
                    </div>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-brand-text">
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
                <div className={`p-12 rounded-[2.5rem] bg-gradient-to-br ${step.color}`}>
                  <Phone3D screenContent={step.phone} />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
