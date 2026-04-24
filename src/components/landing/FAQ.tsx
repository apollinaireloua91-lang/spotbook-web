'use client'

/**
 * FAQ
 * ------------------------------------------------------------------
 * Accessible accordion, single-open at a time. Chevron rotates, panel
 * height animates via Framer Motion.
 */

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

type QA = { q: string; a: string }

const FAQS: QA[] = [
  {
    q: 'Combien coûte Spotbook pour un client ?',
    a: 'Rien. Télécharger l’app, parcourir le feed, réserver un service — c’est 100% gratuit. Tu payes seulement le service au pro, au tarif qu’il a fixé.',
  },
  {
    q: 'Quelle est la commission prélevée aux pros ?',
    a: 'Zéro commission sur les services. Les pros gardent 100% de ce qu’ils facturent. On se rémunère uniquement via une option premium et une petite marge sur la billetterie événementielle (assumée par l’acheteur, pas l’organisateur).',
  },
  {
    q: 'Dans quelles villes Spotbook est disponible ?',
    a: 'Lancement au Québec — Montréal, Laval, Québec, Gatineau, Sherbrooke, Trois-Rivières. L’expansion vers l’Ontario et les Maritimes est prévue pour l’année prochaine.',
  },
  {
    q: 'Comment me faire vérifier comme pro ?',
    a: 'Crée ton profil, uploade tes pièces d’identité + preuves de certification/assurance (selon ton métier). Notre équipe valide sous 48h ouvrables. Une fois validé, tu apparais dans le feed.',
  },
  {
    q: 'Comment sont gérés les paiements ?',
    a: 'Stripe Connect. Le client paie dans l’app, l’argent arrive sur ton compte Stripe, puis est versé sur ton compte bancaire selon le cycle que tu choisis (quotidien, hebdo, mensuel).',
  },
  {
    q: 'Et si un client annule ?',
    a: 'Tu fixes ta politique d’annulation (flexible / modérée / stricte). Les règles sont appliquées automatiquement par l’app, et le remboursement se fait en un clic.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[880px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="text-center"
        >
          <span className="eyebrow">· Questions fréquentes ·</span>
          <h2 className="display-lg font-display mt-5 text-balance">
            Tout ce que tu veux{' '}
            <span className="bg-gradient-to-r from-[#FDF2C3] via-[#B026E8] to-[#8E05C2] bg-clip-text text-transparent">
              savoir.
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="py-2">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-[color:var(--fg)]"
                >
                  <span className="font-display text-[18px] font-medium tracking-[-0.01em] text-[color:var(--fg)] md:text-[20px]">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-[color:var(--fg-muted)]"
                    style={{
                      background: isOpen
                        ? 'linear-gradient(135deg, rgba(176,38,232,0.3), rgba(62,6,95,0.5))'
                        : 'transparent',
                      borderColor: isOpen ? 'rgba(176,38,232,0.55)' : undefined,
                      color: isOpen ? '#FDF2C3' : undefined,
                    }}
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-14 text-[16px] leading-[1.6] text-[color:var(--fg-muted)]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
