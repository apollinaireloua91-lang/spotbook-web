export default function ProLoading() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="h-64 shimmer" />
      <div className="max-w-5xl mx-auto px-6 -mt-16">
        <div className="flex items-start gap-6">
          <div className="w-28 h-28 rounded-2xl shimmer flex-shrink-0" />
          <div className="pt-2 space-y-3 flex-1">
            <div className="h-8 w-48 shimmer rounded-lg" />
            <div className="h-4 w-32 shimmer rounded-lg" />
            <div className="flex gap-6">
              <div className="h-10 w-16 shimmer rounded-lg" />
              <div className="h-10 w-16 shimmer rounded-lg" />
              <div className="h-10 w-16 shimmer rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 mt-10">
        <div className="flex gap-4 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-8 w-20 shimmer rounded-lg" />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[9/16] shimmer rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
