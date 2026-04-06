import { Metadata } from 'next'
import { supabase, ProProfile } from '@/lib/supabase'
import SearchBar from '@/components/explore/SearchBar'
import CategoryFilter from '@/components/explore/CategoryFilter'
import ProviderCard from '@/components/explore/ProviderCard'

export const metadata: Metadata = {
  title: 'Explorez les professionnels',
  description: 'Découvrez les meilleurs professionnels indépendants sur Spotbook.',
}

const CATEGORIES = [
  'Tous',
  'Coiffure',
  'Beauté',
  'Coach',
  'Photographe',
  'DJ',
  'Traiteur',
  'Événements',
  'Fitness',
  'Conseils',
]

// Demo data for when Supabase is not configured
const DEMO_PROVIDERS: ProProfile[] = [
  {
    id: '1',
    username: 'alex_coiffeur',
    full_name: 'Alex Chen',
    avatar_url: null,
    cover_url: null,
    bio: 'Coiffeur professionnel avec 10 ans d\'expérience. Spécialisé en coupes modernes et coloration.',
    category: 'Coiffure',
    location: 'Montréal, QC',
    rating: 4.9,
    review_count: 142,
    booking_count: 520,
    follower_count: 1280,
    is_verified: true,
    social_links: {
      instagram: 'alex_coiffeur',
    },
    created_at: '2023-01-15',
  },
  {
    id: '2',
    username: 'marie_photographie',
    full_name: 'Marie Dubois',
    avatar_url: null,
    cover_url: null,
    bio: 'Photographe spécialisée en portraits et événements. J\'aime capturer vos moments précieux.',
    category: 'Photographe',
    location: 'Montréal, QC',
    rating: 4.8,
    review_count: 87,
    booking_count: 310,
    follower_count: 856,
    is_verified: true,
    social_links: {
      instagram: 'marie_photographie',
    },
    created_at: '2023-03-22',
  },
  {
    id: '3',
    username: 'coach_fitness_jp',
    full_name: 'Jean-Pierre Moreau',
    avatar_url: null,
    cover_url: null,
    bio: 'Coach fitness certifié. Transformation corporelle garantie en 12 semaines.',
    category: 'Fitness',
    location: 'Montréal, QC',
    rating: 4.7,
    review_count: 64,
    booking_count: 280,
    follower_count: 654,
    is_verified: false,
    social_links: {
      instagram: 'coach_fitness_jp',
    },
    created_at: '2023-05-10',
  },
  {
    id: '4',
    username: 'sara_makeup',
    full_name: 'Sara Rossi',
    avatar_url: null,
    cover_url: null,
    bio: 'Maquillage professionnel pour événements, mariage et photosession.',
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
  },
]

export default async function ExplorePage() {
  let providers: ProProfile[] = []
  let error: string | null = null

  // Try to fetch from Supabase
  if (supabase) {
    try {
      const { data, error: supabaseError } = await supabase
        .from('pro_profiles')
        .select('*')
        .eq('is_verified', true)
        .limit(20)

      if (supabaseError) {
        error = supabaseError.message
        providers = DEMO_PROVIDERS
      } else {
        providers = data || DEMO_PROVIDERS
      }
    } catch (err) {
      error = err instanceof Error ? err.message : 'Error fetching providers'
      providers = DEMO_PROVIDERS
    }
  } else {
    providers = DEMO_PROVIDERS
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b border-brand-border bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-text mb-2">Explorez les professionnels</h1>
          <p className="text-brand-muted text-lg">
            Découvrez les meilleurs prestataires de services indépendants
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="sticky top-0 z-40 bg-white border-b border-brand-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <SearchBar />
          <div className="mt-4">
            <CategoryFilter categories={CATEGORIES} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              Note: Les données de démonstration sont affichées.
            </p>
          </div>
        )}

        {providers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-brand-muted text-lg">
              Aucun professionnel trouvé pour votre recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
