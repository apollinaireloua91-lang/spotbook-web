import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-display text-8xl font-bold gradient-text mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl font-bold mb-2">
          Page introuvable
        </h2>
        <p className="text-white/40 mb-8">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-rose-500 font-medium text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
