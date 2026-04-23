'use client'

import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const footerLinks = {
  'Produit': [
    { label: 'Fonctionnalités', href: '/#features' },
    { label: 'Pour les Pros', href: '/#professionals' },
    { label: 'Tarification', href: '/terms' },
  ],
  'Entreprise': [
    { label: 'À propos', href: '/' },
    { label: 'Blog', href: '/' },
    { label: 'Carrières', href: '/' },
  ],
  'Support': [
    { label: "Centre d'aide", href: '/support' },
    { label: 'Contact', href: '/support#contact' },
    { label: 'FAQ', href: '/support' },
  ],
  'Légal': [
    { label: "Conditions d'utilisation", href: '/terms' },
    { label: 'Politique de confidentialité', href: '/privacy' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-green/20"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(62,6,95,0.35) 50%, rgba(26,3,48,0.8) 100%)',
      }}
    >
      {/* Decorative top neon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/60 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-green/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Logo className="text-2xl" />
            <p className="mt-4 text-sm text-brand-muted leading-relaxed max-w-xs">
              La super-app qui connecte les clients aux meilleurs professionnels indépendants.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm text-white mb-4 tracking-wider uppercase">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-neon text-sm text-brand-muted hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-green/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-muted/70">
            © 2026 Spotbook Inc. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <button className="text-sm text-white font-medium px-3 py-1.5 rounded-lg bg-brand-green/20 border border-brand-green/40 neon-glow transition-colors">
              FR
            </button>
            <button className="text-sm text-brand-muted hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5">
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
