import Link from "next/link";
import { Sparkles, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16">
      <div className="relative mb-6">
        <span className="font-display font-black text-8xl sm:text-9xl text-white/10 select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent tracking-widest uppercase">
            Zone Not Found
          </span>
        </div>
      </div>

      <h1 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mb-3">
        Lost in the Cyber Arena?
      </h1>
      <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
        The page or live zone you are looking for does not exist or has been relocated to another sector.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="glow-cyan-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 text-xs sm:text-sm font-semibold text-gray-200 hover:text-white transition-colors"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Browse All Events</span>
        </Link>
      </div>
    </div>
  );
}
