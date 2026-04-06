'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/explore', label: 'Explorer' },
  { href: '/support', label: 'Support' },
  { href: '/terms', label: 'Conditions' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-brand-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Logo className="text-2xl" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-text/70 hover:text-brand-green transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link href="/explore" className="btn-primary !px-6 !py-2.5 text-sm">
              Découvrir
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-display font-semibold text-brand-text hover:text-brand-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/explore"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary inline-block text-center mt-4"
                >
                  Découvrir
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
