export default function ExploreLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="border-b border-brand-border bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-10 bg-gray-200 rounded-lg w-96 mb-2 animate-pulse"></div>
          <div className="h-6 bg-gray-100 rounded-lg w-80 animate-pulse"></div>
        </div>
      </div>

      {/* Search Bar Skeleton */}
      <div className="sticky top-0 z-40 bg-white border-b border-brand-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="h-12 bg-gray-100 rounded-lg mb-4 animate-pulse"></div>

          {/* Category Filter Skeleton */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-100 rounded-full w-24 flex-shrink-0 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden animate-pulse">
              {/* Card Header/Image */}
              <div className="h-48 bg-gray-200"></div>

              {/* Card Content */}
              <div className="p-4">
                {/* Avatar and Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded w-24"></div>
                  </div>
                </div>

                {/* Category and Location */}
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-100 rounded w-20"></div>
                  <div className="h-4 bg-gray-100 rounded w-28"></div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-4 bg-gray-100 rounded w-20"></div>
                  <div className="h-4 bg-gray-100 rounded w-16"></div>
                </div>

                {/* Price and Button */}
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                  <div className="h-10 bg-brand-green rounded-lg w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
