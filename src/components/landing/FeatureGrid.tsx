'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import {
  Play,
  CalendarCheck,
  Ticket,
  CreditCard,
  MessageCircle,
  BarChart3,
} from 'lucide-react'

const features = [
  {
    icon: Play,
    title: 'Feed Vidéo',
    description: 'Comme TikTok, mais pour découvrir des talents. Scrollez, aimez, réservez.',
    span: 'col-span-1 row-span-1 lg:col-span-2',
  },
  {
    icon: CalendarCheck,
    title: 'Réservation Instantanée',
    description: 'Service, date, paiement. Tout en 3 étapes.',
    span: 'col-span-1',
  },
  {
    icon: Ticket,
    title: 'Billetterie',
    description: 'Événements locaux. QR code instantané.',
    span: 'col-span-1',
  },
  {
    icon: CreditCard,
    title: 'Paiement Sécurisé',
    description: 'Stripe Connect. Acompte ou paiement complet. Remboursement automatique.',
    span: 'col-span-1',
  },
  {
    icon: MessageCircle,
    title: 'Messagerie',
    description: 'Discutez directement avec votre prestataire avant et après la réservation.',
    span: 'col-span-1',
  },
  {
    icon: BarChart3,
    title: 'Dashboard Pro',
    description: 'Gérez tout : agenda, services, revenus, avis clients, analytics.',
    span: 'col-span-1 lg:col-span-2',
  },
]

export default function FeatureGrid() {
  return (
    <section className="py-24 relative" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-text mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Une plateforme complète pour les clients et les professionnels
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08} className={feature.span}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-card p-8 h-full group cursor-default relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-green/5 to-transparent" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-5 group-hover:bg-brand-green/15 transition-colors"
                  >
                    <feature.icon size={24} className="text-brand-green" />
                  </motion.div>

                  <h3 className="font-display text-xl font-bold text-brand-text mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-[1.25rem] border border-brand-green/0 group-hover:border-brand-green/10 transition-colors duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
