import Link from 'next/link'
import { Star, MapPin, CheckCircle } from 'lucide-react'
import { ProProfile } from '@/lib/supabase'

interface ProviderCardProps {
  provider: ProProfile
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  const getStarRating = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={14}
          className={i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      )
    }
    return stars
  }

  return (
    <Link href={`/pro/${provider.username}`}>
      <div className="glass-card rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer h-full">
        {/* Header Image */}
        <div className="h-48 bg-gradient-to-br from-brand-card to-brand-border flex items-center justify-center">
          {provider.cover_url ? (
            <img src={provider.cover_url} alt={provider.full_name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-6xl">📸</div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Avatar and Name */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-brand-card flex items-center justify-center flex-shrink-0 text-lg font-bold text-brand-green">
              {provider.avatar_url ? (
                <img src={provider.avatar_url} alt={provider.full_name} className="w-full h-full rounded-full object-cover" />
              ) : (
                provider.full_name.charAt(0)
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-brand-text line-clamp-1">{provider.full_name}</h3>
                {provider.is_verified && (
                  <CheckCircle size={16} className="text-brand-green flex-shrink-0" />
                )}
              </div>
              <p className="text-sm text-brand-muted">{provider.category}</p>
            </div>
          </div>

          {/* Location */}
          {provider.location && (
            <div className="flex items-center gap-2 text-sm text-brand-muted mb-3">
              <MapPin size={16} />
              <span className="truncate">{provider.location}</span>
            </div>
          )}

          {/* Rating and Reviews */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-0.5">{getStarRating()}</div>
            <span className="text-sm font-medium text-brand-text">{provider.rating.toFixed(1)}</span>
            <span className="text-sm text-brand-muted">({provider.review_count})</span>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between pt-3 border-t border-brand-border">
            <div>
              <p className="text-xs text-brand-muted">À partir de</p>
              <p className="text-lg font-bold text-brand-green">Voir le profil</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-brand-green text-white flex items-center justify-center text-lg">
              →
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
