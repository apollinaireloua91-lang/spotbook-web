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
    <section className="py-32 relative" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-brand-green-light font-semibold mb-4 inline-block">
            · Fonctionnalités ·
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            Tout ce dont vous <span className="gradient-text">avez besoin</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Une plateforme complète pour les clients et les professionnels
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08} className={feature.span}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="glass-card p-8 h-full group cursor-default relative"
              >
                {/* Corner neon accent */}
                <div
                  className="absolute -top-px -left-px w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at top left, rgba(192,38,211,0.5), transparent 70%)',
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-2xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center mb-5 group-hover:bg-brand-green/30 group-hover:border-brand-green-light/60 transition-colors neon-glow"
                  >
                    <feature.icon size={24} className="text-brand-green-light" />
                  </motion.div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
