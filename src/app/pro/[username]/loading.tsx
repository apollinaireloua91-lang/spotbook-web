export default function ProProfileLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Cover Photo Skeleton */}
      <div className="h-64 bg-gradient-to-br from-brand-card to-brand-border animate-pulse"></div>

      {/* Profile Header Skeleton */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Avatar Skeleton */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-lg animate-pulse"></div>
            </div>

            {/* Info Skeleton */}
            <div className="flex-1 py-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 bg-gray-200 rounded-lg w-64 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded-full w-24 animate-pulse"></div>
              </div>

              <div className="h-6 bg-gray-200 rounded-lg w-32 mb-4 animate-pulse"></div>
              <div className="h-5 bg-gray-100 rounded-lg w-40 mb-6 animate-pulse"></div>

              {/* Stats Skeleton */}
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i}>
                    <div className="h-4 bg-gray-100 rounded w-16 mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio Skeleton */}
          <div className="mt-6 pt-6 border-t border-brand-border">
            <div className="space-y-2">
              <div className="h-4 bg-gray-100 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation Skeleton */}
      <div className="border-b border-brand-border sticky top-0 z-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-100 rounded w-24 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="h-8 bg-gray-200 rounded w-32 mb-6 animate-pulse"></div>

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden animate-pulse">
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-4">
                <div className="h-5 bg-gray-200 rounded w-48 mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-100 rounded w-32 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Bar Skeleton */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-brand-border p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="h-6 bg-gray-200 rounded w-40 animate-pulse"></div>
          <div className="flex gap-2">
            <div className="h-10 bg-gray-100 rounded-lg w-24 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-24 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </div>
  )
}
