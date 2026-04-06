'use client'

import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Users, Calendar, Grid3X3, Star } from 'lucide-react'

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'Professionnels' },
  { icon: Calendar, value: 10000, suffix: '+', label: 'Réservations' },
  { icon: Grid3X3, value: 50, suffix: '+', label: 'Catégories' },
  { icon: Star, value: 4.9, suffix: '★', label: 'Note moyenne', isDecimal: true },
]

export default function SocialProofBar() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="glass-card p-8 sm:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-green/5 mb-4">
                    <stat.icon size={22} className="text-brand-green" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-brand-green mb-1">
                    {stat.isDecimal ? (
                      <span>4.9★</span>
                    ) : (
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-sm text-brand-muted font-medium">{stat.label}</div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
