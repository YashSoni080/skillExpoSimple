"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Sparkles, Trophy, Calendar, MapPin, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { FEST_CONFIG } from "@/data/config";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-vignette">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40" />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-neon-purple/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Sobhasaria Presents Line */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-accent/60" />
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-accent font-bold">
            Sobhasaria Presents
          </span>
          <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-accent/60" />
        </motion.div>

        {/* Large Sobhasaria Logo (No background, increased size) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative mb-6 flex items-center justify-center"
        >
          <Image
            src="/images/sobhasaria-logo-transparent.png"
            alt="Sobhasaria Group of Institutions"
            width={580}
            height={130}
            priority
            className="w-72 sm:w-96 md:w-[480px] lg:w-[540px] max-w-full h-auto object-contain filter drop-shadow-[0_0_25px_rgba(0,229,255,0.25)] brightness-110"
          />
        </motion.div>

        {/* Below Logo: SKILL EXPO PHASE 3.0 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase text-white mb-2">
            SKILL EXPO
            <span className="block bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent text-glow">
              PHASE 3.0
            </span>
          </h1>

          <p className="text-lg sm:text-2xl font-light text-gray-300 max-w-3xl mx-auto mb-3 tracking-wide">
            Action & Performance • Explore • Learn • Innovate
          </p>

          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto mb-6">
            The grand inter-college arena bringing together over 2,500+ student innovators,
            eSports champions, digital creators, spoken word artists, and tech builders.
          </p>
        </motion.div>

        {/* Date and Venue Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface/60 border border-white/10 text-gray-300 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="font-medium">{FEST_CONFIG.festDates.display}</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface/60 border border-white/10 text-gray-300 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-neon-pink" />
            <span>Sobhasaria Campus, Sikar (Raj.)</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface/60 border border-accent/25 text-accent backdrop-blur-sm">
            <Trophy className="w-4 h-4 text-neon-gold" />
            <span className="font-semibold">₹1,00,000+ Prize Pool</span>
          </div>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/events"
            className="glow-cyan-button inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-gray-200 hover:text-white bg-surface/80 border border-white/15 hover:border-accent/40 backdrop-blur-md transition-all hover:bg-white/5"
          >
            <span>Explore 9 Live Zones</span>
          </Link>

          <a
            href={FEST_CONFIG.brochurePath}
            download="Skill-Expo-3.0-Brochure.pdf"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-gray-300 hover:text-accent bg-transparent border border-accent/20 hover:border-accent/50 transition-all hover:bg-accent/5"
          >
            <Download className="w-4 h-4 text-accent" />
            <span>Download Brochure</span>
          </a>
        </motion.div>

        {/* Live Animated Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full"
        >
          <CountdownTimer />
        </motion.div>
      </div>
    </section>
  );
}
