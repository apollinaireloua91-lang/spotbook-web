export default function ExploreLoading() {
  return (
    <div className="pt-24 pb-16 min-h-screen max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <div className="h-10 w-80 shimmer rounded-lg mb-4" />
        <div className="h-5 w-60 shimmer rounded-lg" />
      </div>
      <div className="h-14 w-full shimmer rounded-xl mb-8" />
      <div className="flex gap-2 mb-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-10 w-24 shimmer rounded-full flex-shrink-0" />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-28 shimmer rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
