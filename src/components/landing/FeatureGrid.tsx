'use client'

/**
 * FeatureGrid v2
 * ------------------------------------------------------------------
 * 2x3 glass grid. Each card listens to its own mousemove and draws a
 * radial violet spotlight that follows the cursor (CSS var driven).
 * Staggered reveal on scroll. Icons from Lucide.
 */

import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Video,
  Calendar,
  Wallet,
  Ticket,
  MessageSquare,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  body: string
}

const FEATURES: Feature[] = [
  {
    icon: Video,
    title: 'Feed vidéo infini',
    body: 'Des démos verticales qui montrent le style, l’énergie et le résultat. Tinder pour pros du vrai monde.',
  },
  {
    icon: Calendar,
    title: 'Agenda en temps réel',
    body: 'Créneaux synchronisés avec l’agenda du pro. Pas de double-booking, pas de coup de téléphone.',
  },
  {
    icon: Wallet,
    title: 'Paiement intégré',
    body: 'Stripe Connect sous le capot. Acompte ou paiement complet, remboursement en un clic.',
  },
  {
    icon: Ticket,
    title: 'Billetterie événements',
    body: 'QR code, scan à l’entrée, relance automatique. Parfait pour DJs, salles et collectifs.',
  },
  {
    icon: MessageSquare,
    title: 'Messagerie native',
    body: 'Discussion chiffrée de bout en bout, partage de photos, rappels automatiques avant le rendez-vous.',
  },
  {
    icon: ShieldCheck,
    title: 'Pros vérifiés',
    body: 'Identité, permis, assurances. Chaque pro est validé manuellement avant d’apparaître dans le feed.',
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="mx-auto max-w-[720px] text-center"
        >
          <span className="eyebrow">· Pensé pour les deux côtés ·</span>
          <h2 className="display-lg font-display mt-5 text-balance">
            Tout ce qu’il faut.{' '}
            <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
              Rien de plus.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-[1.55] text-[color:var(--fg-muted)]">
            Une boîte à outils taillée pour convertir vite et servir bien —
            pour les clients comme pour les pros.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
        delay: (index % 3) * 0.08 + Math.floor(index / 3) * 0.05,
      }}
      className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.02)] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-[rgba(176,38,232,0.35)]"
      style={{ minHeight: 260 }}
    >
      {/* Cursor spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(480px circle at var(--mx, 50%) var(--my, 50%), rgba(176,38,232,0.18), transparent 45%)',
        }}
      />

      {/* Hairline top-glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(253,242,195,0.65), rgba(176,38,232,0.9), transparent)',
        }}
      />

      <div className="relative flex h-full flex-col">
        <div
          className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(176,38,232,0.22), rgba(62,6,95,0.45))',
            boxShadow:
              '0 0 0 1px rgba(176,38,232,0.35) inset, 0 0 24px -4px rgba(176,38,232,0.5)',
          }}
        >
          <Icon size={20} className="text-[color:var(--sb-cream)]" />
        </div>

        <h3 className="font-display text-[22px] font-semibold tracking-[-0.02em] text-[color:var(--fg)]">
          {feature.title}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.55] text-[color:var(--fg-muted)]">
          {feature.body}
        </p>
      </div>
    </motion.div>
  )
}
