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
          <div className="glass-card p-8 sm:p-12 relative overflow-hidden">
            {/* subtle shimmer sweep */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  'linear-gradient(120deg, transparent 30%, rgba(192, 38, 211, 0.08) 50%, transparent 70%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 8s linear infinite',
              }}
            />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 border border-brand-green/40"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(142,5,194,0.25), rgba(62,6,95,0.4))',
                      boxShadow:
                        '0 0 18px rgba(142,5,194,0.3), inset 0 0 12px rgba(142,5,194,0.15)',
                    }}
                  >
                    <stat.icon size={22} className="text-brand-green-light" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-1">
                    {stat.isDecimal ? (
                      <span>4.9★</span>
                    ) : (
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-sm text-brand-muted font-medium tracking-wide">{stat.label}</div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
