'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-3xl bg-brand-card border border-brand-border flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">⚠️</span>
        </div>
        <h2 className="font-display text-2xl font-bold text-brand-text mb-3">
          Une erreur est survenue
        </h2>
        <p className="text-brand-muted mb-8">
          Nous nous excusons pour la gêne occasionnée. Veuillez réessayer.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="btn-primary">
            Réessayer
          </button>
          <Link href="/" className="btn-secondary">
            Accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
