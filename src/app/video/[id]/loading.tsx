export default function VideoLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Video Player Skeleton */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-brand-card/50 border border-brand-border aspect-video animate-pulse" />

        {/* Title & Info Skeleton */}
        <div className="mb-8">
          <div className="h-12 bg-brand-card rounded-lg mb-4 animate-pulse" style={{ width: '60%' }} />
          <div className="flex flex-wrap gap-2 mb-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-8 w-20 bg-brand-card rounded-full animate-pulse"
              />
            ))}
          </div>
          <div className="h-4 bg-brand-card rounded w-32 animate-pulse" />
        </div>

        {/* Pro Info Skeleton */}
        <div className="mb-8 p-6 bg-brand-card/50 border border-brand-border rounded-2xl animate-pulse">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 bg-brand-card rounded-full" />
              <div className="flex-1">
                <div className="h-6 bg-brand-card rounded w-32 mb-2" />
                <div className="h-4 bg-brand-card rounded w-24 mb-2" />
                <div className="h-4 bg-brand-card rounded w-28" />
              </div>
            </div>
            <div className="h-12 w-32 bg-brand-card rounded-lg" />
          </div>
        </div>

        {/* Description Skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-brand-card rounded w-32 mb-4 animate-pulse" />
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 bg-brand-card rounded animate-pulse" />
            ))}
          </div>
        </div>

        {/* Related Videos Skeleton */}
        <div className="mb-12">
          <div className="h-8 bg-brand-card rounded w-40 mb-6 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-brand-border"
              >
                <div className="aspect-video bg-brand-card/50 animate-pulse" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-brand-card rounded animate-pulse" />
                  <div className="h-4 bg-brand-card rounded w-24 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
