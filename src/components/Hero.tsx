"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Sparkles, Trophy, Calendar, MapPin, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { FEST_CONFIG } from "@/data/config";

export default function Hero() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-vignette">
      {/* Subtle organic background mesh */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Institutional Host Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs sm:text-sm font-medium mb-5 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gray-900 animate-pulse" />
          <span className="text-gray-800 font-medium">Sobhasaria Group of Institutions Presents</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-900 font-semibold">Phase 3.0</span>
        </motion.div>

        {/* Sobhasaria Default Institutional Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="relative mb-5 flex items-center justify-center px-4"
        >
          <Image
            src="/images/sobhasaria-default-logo.png"
            alt="Sobhasaria Group of Institutions"
            width={1932}
            height={447}
            priority
            className="w-64 sm:w-80 md:w-[420px] max-w-full h-auto object-contain"
          />
        </motion.div>

        {/* SKILL EXPO 3.0 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col items-center mb-6"
        >
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-gray-900 mb-3">
            SKILL EXPO <span className="text-gray-900">3.0</span>
          </h1>

          <p className="text-base sm:text-xl font-medium text-gray-700 max-w-2xl mx-auto mb-2 tracking-wide">
            Action & Performance • Explore • Learn • Innovate
          </p>

          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Rajasthan’s flagship inter-college arena uniting student innovators, eSports champions,
            creative performers, tech builders, and future founders.
          </p>
        </motion.div>

        {/* Date and Venue Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-8 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-800 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-gray-700" />
            <span className="font-medium">{FEST_CONFIG.festDates.display}</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-800 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-gray-500" />
            <span>Sobhasaria Campus, Sikar</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-800 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-gray-700" />
            <span className="font-medium">Trophies, Cash Rewards & Certificates</span>
          </div>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          <Link
            href="/events"
            className="glow-cyan-button inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          >
            <span>Register for Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-gray-800 hover:text-gray-900 bg-white border border-gray-200 hover:border-gray-300 transition-all hover:bg-gray-50 shadow-sm"
          >
            <span>Explore 9 Live Zones</span>
          </Link>

          <a
            href={FEST_CONFIG.brochurePath}
            download="Skill-Expo-3.0-Brochure.pdf"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-gray-700 hover:text-gray-900 bg-white border border-gray-200 hover:border-gray-300 transition-all hover:bg-gray-50 shadow-sm"
          >
            <Download className="w-4 h-4 text-gray-700" />
            <span>Brochure (PDF)</span>
          </a>
        </motion.div>

        {/* Live Animated Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full"
        >
          <CountdownTimer />
        </motion.div>
      </div>
    </section>
  );
}
