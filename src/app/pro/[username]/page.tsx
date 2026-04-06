'use client'

export const runtime = 'edge'

import { useState, useEffect, use } from 'react'
import Image from 'next/image'
import { supabase, ProProfile, Service, Video, Event, Review } from '@/lib/supabase'
import { Star, MapPin, Calendar, Download } from 'lucide-react'

// Demo data for when Supabase is not configured
const DEMO_PROFILE: ProProfile = {
  id: 'demo-1',
  username: 'sara_makeup',
  full_name: 'Sara Rossi',
  avatar_url: null,
  cover_url: null,
  bio: 'Maquillage professionnel pour événements, mariages et photosessions. Avec plus de 8 ans d&apos;expérience, je crée des looks personnalisés qui vous mettent en valeur. Passionnée par l&apos;art du maquillage et transformations beauté.',
  category: 'Beauté',
  location: 'Montréal, QC',
  rating: 4.95,
  review_count: 156,
  booking_count: 680,
  follower_count: 2140,
  is_verified: true,
  social_links: {
    instagram: 'sara_makeup_mtl',
  },
  created_at: '2023-02-08',
}

const DEMO_SERVICES: Service[] = [
  {
    id: '1',
    pro_id: 'demo-1',
    name: 'Maquillage Événement',
    description: 'Maquillage complet pour événements spéciaux',
    duration_minutes: 60,
    price: 75,
    deposit_required: true,
    deposit_amount: 25,
    category: 'Beauté',
  },
  {
    id: '2',
    pro_id: 'demo-1',
    name: 'Maquillage Mariage',
    description: 'Maquillage de mariée avec essai',
    duration_minutes: 90,
    price: 120,
    deposit_required: true,
    deposit_amount: 50,
    category: 'Beauté',
  },
  {
    id: '3',
    pro_id: 'demo-1',
    name: 'Maquillage Photoshoot',
    description: 'Maquillage pour séance photo professionnelle',
    duration_minutes: 45,
    price: 60,
    deposit_required: false,
    deposit_amount: null,
    category: 'Beauté',
  },
]

const DEMO_VIDEOS: Video[] = [
  {
    id: 'v1',
    pro_id: 'demo-1',
    cloudflare_video_id: 'vid1',
    title: 'Tutoriel Maquillage Smokey Eyes',
    description: 'Apprenez comment créer un smokey eyes parfait',
    tags: ['tutoriel', 'smokey eyes', 'maquillage'],
    thumbnail_url: null,
    view_count: 2340,
    created_at: '2024-01-15',
  },
  {
    id: 'v2',
    pro_id: 'demo-1',
    cloudflare_video_id: 'vid2',
    title: 'Maquillage Nude Naturel',
    description: 'Comment créer un look nude naturel et raffiné',
    tags: ['nude', 'naturel', 'quotidien'],
    thumbnail_url: null,
    view_count: 1850,
    created_at: '2024-01-20',
  },
  {
    id: 'v3',
    pro_id: 'demo-1',
    cloudflare_video_id: 'vid3',
    title: 'Avant/Après Transformation Beauté',
    description: 'Transformation complète avec maquillage pro',
    tags: ['transformation', 'avant-après', 'maquillage'],
    thumbnail_url: null,
    view_count: 3120,
    created_at: '2024-01-25',
  },
  {
    id: 'v4',
    pro_id: 'demo-1',
    cloudflare_video_id: 'vid4',
    title: 'Préparation Maquillage Événement',
    description: 'Étapes clés pour un maquillage d\'événement durable',
    tags: ['événement', 'tenue', 'maquillage'],
    thumbnail_url: null,
    view_count: 1560,
    created_at: '2024-02-01',
  },
]

const DEMO_REVIEWS: Review[] = [
  {
    id: 'r1',
    pro_id: 'demo-1',
    client_name: 'Émilie M.',
    rating: 5,
    text: 'Sara est incroyable! Elle a compris exactement ce que je voulais et le résultat était parfait. Je la recommande vivement!',
    created_at: '2024-02-20',
  },
  {
    id: 'r2',
    pro_id: 'demo-1',
    client_name: 'Gabrielle T.',
    rating: 5,
    text: 'Meilleur maquillage de mariage! Sara a su me mettre en confiance et mon look était magnifique du début à la fin.',
    created_at: '2024-02-15',
  },
  {
    id: 'r3',
    pro_id: 'demo-1',
    client_name: 'Jessica L.',
    rating: 4.5,
    text: 'Très professionnelle et créative. Elle a transformé mon look pour mon événement. Très recommandée!',
    created_at: '2024-02-10',
  },
  {
    id: 'r4',
    pro_id: 'demo-1',
    client_name: 'Alexandra P.',
    rating: 5,
    text: 'Sara est une artiste! Le maquillage pour mon shoot photo était parfait. Elle comprend vraiment son métier.',
    created_at: '2024-02-05',
  },
]

const DEMO_EVENTS: Event[] = [
  {
    id: 'e1',
    pro_id: 'demo-1',
    title: 'Atelier Maquillage Beauté Naturelle',
    description: 'Apprenez les secrets du maquillage naturel en 2 heures',
    cover_url: null,
    venue: 'Studio Beauté MTL',
    address: '123 Rue Principale, Montréal',
    date: '2024-04-15',
    time: '18:00',
    price: 45,
    total_tickets: 15,
    tickets_sold: 12,
    created_at: '2024-02-01',
  },
  {
    id: 'e2',
    pro_id: 'demo-1',
    title: 'Masterclass Maquillage de Mariée',
    description: 'Technique avancée de maquillage pour l\'événement le plus important',
    cover_url: null,
    venue: 'Studio Beauté MTL',
    address: '123 Rue Principale, Montréal',
    date: '2024-05-20',
    time: '14:00',
    price: 75,
    total_tickets: 10,
    tickets_sold: 6,
    created_at: '2024-02-05',
  },
]

type TabType = 'videos' | 'services' | 'reviews' | 'events'

interface PageProps {
  params: Promise<{
    username: string
  }>
}

export default function ProProfilePage({ params: paramsPromise }: PageProps) {
  const params = use(paramsPromise)
  const [profile, setProfile] = useState<ProProfile | null>(null)
  const [services, setServices] = useState<Service[]>([])
  const [videos, setVideos] = useState<Video[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [activeTab, setActiveTab] = useState<TabType>('videos')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        if (supabase) {
          // Try to fetch from Supabase
          const [profileRes, servicesRes, videosRes, reviewsRes, eventsRes] = await Promise.all([
            supabase.from('pro_profiles').select('*').eq('username', params.username).single(),
            supabase.from('services').select('*').eq('pro_id', params.username),
            supabase.from('videos').select('*').eq('pro_id', params.username),
            supabase.from('reviews').select('*').eq('pro_id', params.username),
            supabase.from('events').select('*').eq('pro_id', params.username),
          ])

          if (profileRes.data) setProfile(profileRes.data)
          if (servicesRes.data) setServices(servicesRes.data)
          if (videosRes.data) setVideos(videosRes.data)
          if (reviewsRes.data) setReviews(reviewsRes.data)
          if (eventsRes.data) setEvents(eventsRes.data)
        } else {
          // Use demo data
          setProfile(DEMO_PROFILE)
          setServices(DEMO_SERVICES)
          setVideos(DEMO_VIDEOS)
          setReviews(DEMO_REVIEWS)
          setEvents(DEMO_EVENTS)
        }
      } catch {
        // Use demo data on error
        setProfile(DEMO_PROFILE)
        setServices(DEMO_SERVICES)
        setVideos(DEMO_VIDEOS)
        setReviews(DEMO_REVIEWS)
        setEvents(DEMO_EVENTS)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [params.username])

  if (isLoading) {
    return <div className="min-h-screen bg-white" />
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-text mb-2">Professionnel non trouvé</h1>
          <p className="text-brand-muted">Le professionnel que vous recherchez n&apos;existe pas.</p>
        </div>
      </div>
    )
  }

  const getStarRating = (rating: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      )
    }
    return stars
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Cover Photo */}
      <div className="h-64 bg-gradient-to-br from-brand-card to-brand-border relative">
        {profile.cover_url && (
          <Image src={profile.cover_url} alt="Cover" fill className="object-cover" />
        )}
      </div>

      {/* Profile Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-brand-card border-4 border-white shadow-lg flex items-center justify-center">
                {profile.avatar_url ? (
                  <Image src={profile.avatar_url} alt={profile.full_name} width={128} height={128} className="rounded-full" />
                ) : (
                  <div className="text-3xl text-brand-green font-bold">
                    {profile.full_name.charAt(0)}
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 py-2">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-brand-text">{profile.full_name}</h1>
                {profile.is_verified && (
                  <div className="bg-brand-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ Vérifié
                  </div>
                )}
              </div>

              <p className="text-lg text-brand-green font-medium mb-4">{profile.category}</p>

              {profile.location && (
                <div className="flex items-center gap-2 text-brand-muted mb-4">
                  <MapPin size={18} />
                  <span>{profile.location}</span>
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-brand-muted">Abonnés</p>
                  <p className="text-xl font-bold text-brand-text">{profile.follower_count.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-brand-muted">Avis</p>
                  <p className="text-xl font-bold text-brand-text">{profile.review_count}</p>
                </div>
                <div>
                  <p className="text-sm text-brand-muted">Réservations</p>
                  <p className="text-xl font-bold text-brand-text">{profile.booking_count}</p>
                </div>
                <div>
                  <p className="text-sm text-brand-muted">Note</p>
                  <div className="flex items-center gap-1">
                    <span className="text-xl font-bold text-brand-text">{profile.rating.toFixed(1)}</span>
                    <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          {profile.bio && (
            <div className="mt-6 pt-6 border-t border-brand-border">
              <p className="text-brand-text leading-relaxed">{profile.bio}</p>
            </div>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-brand-border sticky top-0 z-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {(['videos', 'services', 'reviews', 'events'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 font-medium border-b-2 transition ${
                  activeTab === tab
                    ? 'border-brand-green text-brand-green'
                    : 'border-transparent text-brand-muted hover:text-brand-text'
                }`}
              >
                {tab === 'videos' && 'Vidéos'}
                {tab === 'services' && 'Services'}
                {tab === 'reviews' && 'Avis'}
                {tab === 'events' && 'Événements'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div>
            <h2 className="text-2xl font-bold text-brand-text mb-6">Vidéos</h2>
            {videos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="glass-card rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition">
                    <div className="aspect-video bg-gray-200 relative flex items-center justify-center">
                      {video.thumbnail_url ? (
                        <Image src={video.thumbnail_url} alt={video.title} fill className="object-cover" />
                      ) : (
                        <div className="text-4xl">▶</div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-brand-text mb-2">{video.title}</h3>
                      <p className="text-sm text-brand-muted mb-3">{video.view_count.toLocaleString()} vues</p>
                      {video.description && (
                        <p className="text-sm text-brand-text line-clamp-2">{video.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-brand-muted text-center py-12">Aucune vidéo publiée pour le moment.</p>
            )}
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div>
            <h2 className="text-2xl font-bold text-brand-text mb-6">Services</h2>
            {services.length > 0 ? (
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="glass-card rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-brand-text mb-2">{service.name}</h3>
                      {service.description && (
                        <p className="text-sm text-brand-muted mb-2">{service.description}</p>
                      )}
                      <div className="flex gap-4 text-sm text-brand-muted">
                        <span>⏱ {service.duration_minutes} min</span>
                        {service.deposit_required && (
                          <span>📋 Dépôt: ${service.deposit_amount?.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-brand-muted">À partir de</p>
                        <p className="text-2xl font-bold text-brand-green">${service.price.toFixed(2)}</p>
                      </div>
                      <button className="btn-primary px-6 py-3 whitespace-nowrap">
                        Réserver dans l&apos;app
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-brand-muted text-center py-12">Aucun service publié pour le moment.</p>
            )}
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div>
            <h2 className="text-2xl font-bold text-brand-text mb-6">Avis ({reviews.length})</h2>
            {reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="glass-card rounded-xl p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-bold text-brand-text">{review.client_name}</p>
                        <div className="flex gap-1 mt-1">{getStarRating(review.rating)}</div>
                      </div>
                      <p className="text-sm text-brand-muted">
                        {new Date(review.created_at).toLocaleDateString('fr-CA')}
                      </p>
                    </div>
                    <p className="text-brand-text">{review.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-brand-muted text-center py-12">Aucun avis pour le moment.</p>
            )}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div>
            <h2 className="text-2xl font-bold text-brand-text mb-6">Événements</h2>
            {events.length > 0 ? (
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="glass-card rounded-xl overflow-hidden">
                    {event.cover_url && (
                      <div className="h-40 bg-gray-200 relative">
                        <Image src={event.cover_url} alt={event.title} fill className="object-cover" />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-brand-text mb-2">{event.title}</h3>
                      {event.description && (
                        <p className="text-brand-muted mb-4">{event.description}</p>
                      )}

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={18} className="text-brand-green" />
                          <span className="text-brand-text">
                            {new Date(event.date).toLocaleDateString('fr-CA')} à {event.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={18} className="text-brand-green" />
                          <span className="text-brand-text">{event.venue}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                        <div>
                          <p className="text-sm text-brand-muted">À partir de</p>
                          <p className="text-2xl font-bold text-brand-green">${event.price.toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-brand-muted">
                          {event.total_tickets - event.tickets_sold} billets disponibles
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-brand-muted text-center py-12">Aucun événement programmé pour le moment.</p>
            )}
          </div>
        )}
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-brand-border p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Download size={20} className="text-brand-green" />
            <p className="text-brand-text font-medium">Téléchargez l&apos;app pour réserver</p>
          </div>
          <div className="flex gap-2">
            <button className="px-6 py-2 bg-brand-card text-brand-green rounded-lg font-medium hover:bg-brand-border transition">
              App Store
            </button>
            <button className="px-6 py-2 bg-brand-green text-white rounded-lg font-medium hover:bg-brand-green/90 transition">
              Google Play
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for sticky bar */}
      <div className="h-20" />
    </div>
  )
}
