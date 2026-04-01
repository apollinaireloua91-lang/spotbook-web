"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500/20 to-rose-500/20 border border-violet-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold mb-2">
          Quelque chose s&apos;est mal passé
        </h2>
        <p className="text-white/40 mb-6">
          Une erreur inattendue est survenue. Veuillez réessayer.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-rose-500 font-medium text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
