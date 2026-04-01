export default function EventLoading() {
  return (
    <div className="pt-24 pb-16 min-h-screen max-w-4xl mx-auto px-6">
      <div className="aspect-[2/1] shimmer rounded-2xl mb-8" />
      <div className="h-10 w-72 shimmer rounded-lg mb-4" />
      <div className="space-y-3 mb-8">
        <div className="h-5 w-48 shimmer rounded" />
        <div className="h-5 w-56 shimmer rounded" />
      </div>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 shimmer rounded-full" />
        <div className="space-y-2">
          <div className="h-3 w-20 shimmer rounded" />
          <div className="h-4 w-32 shimmer rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full shimmer rounded" />
        <div className="h-4 w-5/6 shimmer rounded" />
        <div className="h-4 w-3/4 shimmer rounded" />
      </div>
    </div>
  );
}
