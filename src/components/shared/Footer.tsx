'use client'

/**
 * Footer v2 — premium
 * ------------------------------------------------------------------
 * Big wordmark display, three link columns, contact + socials,
 * language toggle, hairline divider, copyright.
 */

import Link from 'next/link'
import { Instagram, Youtube, Mail } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Produit',
    links: [
      { label: 'Fonctionnalités', href: '#features' },
      { label: 'Comment ça marche', href: '#how-it-works' },
      { label: 'Catégories', href: '#features' },
      { label: 'Télécharger l’app', href: '#download' },
    ],
  },
  {
    title: 'Pour les pros',
    links: [
      { label: 'Pourquoi Spotbook', href: '#for-pros' },
      { label: 'Simulateur de revenu', href: '#calculator' },
      { label: 'Devenir partenaire', href: '#download' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/support#contact' },
      { label: 'Conditions', href: '/terms' },
      { label: 'Confidentialité', href: '/privacy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-24">
      {/* Top hairline */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[1px]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(176,38,232,0.5) 30%, rgba(253,242,195,0.5) 50%, rgba(176,38,232,0.5) 70%, transparent)',
        }}
      />

      {/* Ambient violet glow at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[960px] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(176,38,232,0.35), transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-12">
        {/* Hero wordmark */}
        <div className="flex flex-col items-start">
          <Logo className="text-[28px]" />
          <p className="mt-5 max-w-[420px] text-[16px] leading-[1.5] text-[color:var(--fg-muted)]">
            La super-app qui connecte les clients aux meilleurs professionnels
            indépendants du Québec.
          </p>
        </div>

        {/* Huge faded wordmark */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-4 top-24 hidden select-none md:block"
        >
          <span
            className="font-display text-[200px] font-semibold leading-none tracking-[-0.06em]"
            style={{
              background:
                'linear-gradient(180deg, rgba(176,38,232,0.18) 0%, rgba(253,242,195,0.06) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Spotbook
          </span>
        </div>

        <div className="relative mt-20 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-[12px] uppercase tracking-[0.22em] text-[color:var(--fg-faint)]">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-[15px] text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--fg)]"
                    >
                      <span
                        aria-hidden
                        className="inline-block h-[5px] w-[5px] rounded-full bg-[color:var(--sb-violet-glow)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                      <span>{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-5 text-[12px] uppercase tracking-[0.22em] text-[color:var(--fg-faint)]">
              On vous écoute
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@getspotbook.app"
                  className="inline-flex items-center gap-2 text-[15px] text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--fg)]"
                >
                  <Mail size={14} /> hello@getspotbook.app
                </a>
              </li>
              <li className="mt-5 flex gap-3">
                <SocialIcon href="https://instagram.com/spotbookapp" label="Instagram">
                  <Instagram size={16} />
                </SocialIcon>
                <SocialIcon href="https://youtube.com/@spotbookapp" label="YouTube">
                  <Youtube size={16} />
                </SocialIcon>
                <SocialIcon href="https://tiktok.com/@spotbookapp" label="TikTok">
                  <TikTokMark />
                </SocialIcon>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-[13px] text-[color:var(--fg-faint)]">
            © 2026 Spotbook Inc. — Montréal, QC. Tous droits réservés.
          </p>
          <div className="flex items-center gap-1">
            <LangChip active>FR</LangChip>
            <LangChip>EN</LangChip>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[color:var(--fg-muted)] transition-all hover:-translate-y-0.5 hover:border-[rgba(176,38,232,0.55)] hover:text-[color:var(--sb-cream)]"
    >
      {children}
    </a>
  )
}

function LangChip({
  children,
  active,
}: {
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <button
      type="button"
      className="rounded-full px-3 py-1.5 text-[12px] uppercase tracking-[0.18em] transition-colors"
      style={{
        color: active ? 'var(--fg)' : 'var(--fg-faint)',
        background: active
          ? 'linear-gradient(135deg, rgba(176,38,232,0.3), rgba(62,6,95,0.4))'
          : 'transparent',
        border: active
          ? '1px solid rgba(176,38,232,0.45)'
          : '1px solid transparent',
      }}
    >
      {children}
    </button>
  )
}

function TikTokMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1Z" />
    </svg>
  )
}
