'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [search, setSearch] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log('Search:', search)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un professionnel, un service..."
          className="w-full px-6 py-3 pl-12 rounded-xl border border-brand-border bg-white text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
        />
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none"
        />
      </div>
    </form>
  )
}
