export default function EventLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Cover Image Skeleton */}
      <div className="w-full h-80 bg-brand-card/50 animate-pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Skeleton */}
        <div className="h-12 bg-brand-card rounded-lg mb-6 animate-pulse" style={{ width: '70%' }} />

        {/* Key Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-4 bg-brand-card border border-brand-border rounded-xl animate-pulse">
              <div className="h-4 bg-brand-border rounded w-16 mb-2" />
              <div className="h-6 bg-brand-border rounded w-24" />
            </div>
          ))}
        </div>

        {/* Venue Info Skeleton */}
        <div className="mb-8 p-6 bg-brand-card/50 border border-brand-border rounded-2xl animate-pulse">
          <div className="h-6 bg-brand-border rounded w-24 mb-4" />
          <div className="h-5 bg-brand-border rounded w-40 mb-2" />
          <div className="h-5 bg-brand-border rounded w-56" />
        </div>

        {/* Map Placeholder Skeleton */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-brand-border bg-brand-card/50 h-80 animate-pulse" />

        {/* Availability Info Skeleton */}
        <div className="mb-8 p-6 bg-brand-card/50 border border-brand-border rounded-2xl animate-pulse">
          <div className="flex items-center justify-between mb-4">
            <div className="h-6 bg-brand-border rounded w-32" />
            <div className="h-8 bg-brand-border rounded w-16" />
          </div>
          <div className="w-full bg-brand-border rounded-full h-2" />
          <div className="h-4 bg-brand-border rounded w-48 mt-3" />
        </div>

        {/* Organizer Skeleton */}
        <div className="mb-8 p-6 bg-brand-card/50 border border-brand-border rounded-2xl animate-pulse">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 bg-brand-border rounded-full" />
              <div className="flex-1">
                <div className="h-4 bg-brand-border rounded w-20 mb-2" />
                <div className="h-6 bg-brand-border rounded w-32 mb-2" />
                <div className="h-4 bg-brand-border rounded w-28" />
              </div>
            </div>
            <div className="h-12 w-32 bg-brand-border rounded-lg" />
          </div>
        </div>

        {/* Description Skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-brand-border rounded w-40 mb-4 animate-pulse" />
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-brand-border rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
