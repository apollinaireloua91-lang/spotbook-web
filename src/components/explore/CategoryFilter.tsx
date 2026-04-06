'use client'

import { useState } from 'react'

interface CategoryFilterProps {
  categories: string[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [selected, setSelected] = useState('Tous')

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition ${
            selected === category
              ? 'bg-brand-green text-white shadow-md'
              : 'bg-brand-card text-brand-text hover:bg-brand-border'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
