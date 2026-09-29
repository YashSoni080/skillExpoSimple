"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Code2,
  Microscope,
  Mic2,
  Video,
  TrendingUp,
  Palette,
  Utensils,
  Scale,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

const ZONES = [
  {
    id: "esports",
    title: "E-Sports Championship",
    tagline: "Drop • Fight • Dominate",
    desc: "BGMI squad tournaments, Free Fire showdowns, and 1v1 aim trials with live caster commentary on arena screens.",
    icon: Gamepad2,
    color: "#00E5FF",
    days: "Day 1 & 2",
    badge: "₹20,000+ Pool",
  },
  {
    id: "tech",
    title: "Tech & Learning",
    tagline: "Hands-on Coding & Hardware",
    desc: "Mobile apps, web architectures, autonomous robotics, drone cages, and live AI intelligence demonstrations.",
    icon: Code2,
    color: "#3B82F6",
    days: "Day 1 (23 Oct)",
    badge: "Live Prototypes",
  },
  {
    id: "science",
    title: "Science & Innovation",
    tagline: "Explore • Experiment • Innovate",
    desc: "Scientific working models, green innovations, clean water recycling, and everyday problem-solving inventions.",
    icon: Microscope,
    color: "#10B981",
    days: "Day 1 (23 Oct)",
    badge: "Eco Inventions",
  },
  {
    id: "openmic",
    title: "Open Mic Stage",
    tagline: "Speak Your Mind, Shape Your Future",
    desc: "Grand performance arena for poetry, acoustic music, stand-up comedy, shayari, and unique stage talents.",
    icon: Mic2,
    color: "#B026FF",
    days: "Day 2 (24 Oct)",
    badge: "Prizes for Top 3",
  },
  {
    id: "content",
    title: "Content Creators Meet",
    tagline: "Create • Influence • Inspire",
    desc: "Masterclasses on reels, viral algorithms, podcasts, photography walks, and live creator collab jam sessions.",
    icon: Video,
    color: "#FF007F",
    days: "Day 2 (24 Oct)",
    badge: "Live Jam Session",
  },
  {
    id: "startup",
    title: "Startup & Business",
    tagline: "Think × Analyse × Compete × Grow",
    desc: "10-minute B-plan pitches, participant-developed consumer products, and angel mentor feedback.",
    icon: TrendingUp,
    color: "#FFB800",
    days: "Day 1 & 2",
    badge: "Incubation Grant",
  },
  {
    id: "art",
    title: "Art & Craft Pavilion",
    tagline: "Imagine • Create • Inspire",
    desc: "Live painting, handmade origami, clay crafts, upcycling scrap art, and a bustling student art market.",
    icon: Palette,
    color: "#EC4899",
    days: "Day 1 (23 Oct)",
    badge: "Art Market",
  },
  {
    id: "food",
    title: "Food & Fun Boulevard",
    tagline: "Taste • Play • Enjoy",
    desc: "Live cooking & baking demos, food plating design, mixology mocktails, and 'The Student Stall Loop' business.",
    icon: Utensils,
    color: "#F97316",
    days: "Day 1 & 2",
    badge: "Culinary Trophy",
  },
  {
    id: "legalaid",
    title: "Legal Aid Clinic",
    tagline: "Justice For All • Know Your Rights",
    desc: "Free student and public consultation desks for Cyber Law, consumer protection, and civic documentation.",
    icon: Scale,
    color: "#06B6D4",
    days: "Day 1 (23 Oct)",
    badge: "Free Consultation",
  },
];

export default function WhatIsExpo() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-4"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Interactive Festival Architecture</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4"
        >
          What is <span className="text-accent text-glow">Skill Expo 3.0</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          Organized by <strong className="text-white">Sobhasaria Group of Institutions</strong>, Skill Expo is
          Rajasthan’s premier hands-on inter-college talent symposium. Moving far beyond traditional paper
          presentations, Phase 3.0 activates <strong className="text-accent">9 dedicated live zones</strong> spanning
          cutting-edge technology, creative arts, competitive eSports, culinary mastery, and civic empowerment.
        </motion.p>
      </div>

      {/* 9 Live Zones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ZONES.map((zone, idx) => {
          const Icon = zone.icon;
          return (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-surface/70 border border-white/10 hover:border-accent/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.12)] hover:-translate-y-1"
            >
              {/* Subtle accent glow behind icon */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-10 group-hover:opacity-25 transition-opacity"
                style={{ backgroundColor: zone.color }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="p-3 rounded-xl border border-white/10 bg-white/5 group-hover:scale-110 transition-transform"
                    style={{ color: zone.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {zone.days}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-accent font-semibold">
                    {zone.tagline}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-accent transition-colors mt-0.5">
                    {zone.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 mb-4 leading-relaxed">
                  {zone.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                  {zone.badge}
                </span>

                <Link
                  href={`/events?category=${zone.id}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-gray-300 group-hover:text-white transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-surface border border-accent/30 text-white font-semibold hover:border-accent hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Browse All Competitions & Rules</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
