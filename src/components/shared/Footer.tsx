'use client'

import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import { Instagram, Twitter } from 'lucide-react'

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
    <footer className="bg-brand-green text-white relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Logo className="text-2xl" dark />
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              La super-app qui connecte les clients aux meilleurs professionnels indépendants.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/spotbook" target="_blank" rel="noopener" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://tiktok.com/@spotbook" target="_blank" rel="noopener" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.38-6.22V8.71a8.19 8.19 0 0 0 3.84.96V6.69Z"/></svg>
              </a>
              <a href="https://twitter.com/spotbook" target="_blank" rel="noopener" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm text-white/90 mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © 2026 Spotbook Inc. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <button className="text-sm text-white/60 hover:text-white transition-colors font-medium px-3 py-1 rounded-lg bg-white/5">
              FR
            </button>
            <button className="text-sm text-white/40 hover:text-white transition-colors px-3 py-1 rounded-lg hover:bg-white/5">
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
