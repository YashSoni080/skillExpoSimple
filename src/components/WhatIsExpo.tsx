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
    color: "#FFFFFF",
    days: "Day 1 & 2",
    badge: "Exciting Prizes",
  },
  {
    id: "tech",
    title: "Tech & Learning",
    tagline: "Hands-on Coding & Hardware",
    desc: "Mobile apps, web architectures, autonomous robotics, drone cages, and live AI intelligence demonstrations.",
    icon: Code2,
    color: "#FFFFFF",
    days: "Day 1 (23 Oct)",
    badge: "Live Prototypes",
  },
  {
    id: "science",
    title: "Science & Innovation",
    tagline: "Explore • Experiment • Innovate",
    desc: "Scientific working models, green innovations, clean water recycling, and everyday problem-solving inventions.",
    icon: Microscope,
    color: "#FFFFFF",
    days: "Day 1 (23 Oct)",
    badge: "Eco Inventions",
  },
  {
    id: "openmic",
    title: "Open Mic Stage",
    tagline: "Speak Your Mind, Shape Your Future",
    desc: "Grand performance arena for poetry, acoustic music, stand-up comedy, shayari, and unique stage talents.",
    icon: Mic2,
    color: "#FFFFFF",
    days: "Day 2 (24 Oct)",
    badge: "Prizes for Top 3",
  },
  {
    id: "content",
    title: "Content Creators Meet",
    tagline: "Create • Influence • Inspire",
    desc: "Masterclasses on reels, viral algorithms, podcasts, photography walks, and live creator collab jam sessions.",
    icon: Video,
    color: "#FFFFFF",
    days: "Day 2 (24 Oct)",
    badge: "Live Jam Session",
  },
  {
    id: "startup",
    title: "Startup & Business",
    tagline: "Think × Analyse × Compete × Grow",
    desc: "10-minute B-plan pitches, participant-developed consumer products, and angel mentor feedback.",
    icon: TrendingUp,
    color: "#FFFFFF",
    days: "Day 1 & 2",
    badge: "Incubation Grant",
  },
  {
    id: "art",
    title: "Art & Craft Pavilion",
    tagline: "Imagine • Create • Inspire",
    desc: "Live painting, handmade origami, clay crafts, upcycling scrap art, and a bustling student art market.",
    icon: Palette,
    color: "#FFFFFF",
    days: "Day 1 (23 Oct)",
    badge: "Art Market",
  },
  {
    id: "food",
    title: "Food & Fun Boulevard",
    tagline: "Taste • Play • Enjoy",
    desc: "Live cooking & baking demos, food plating design, mixology mocktails, and 'The Student Stall Loop' business.",
    icon: Utensils,
    color: "#FFFFFF",
    days: "Day 1 & 2",
    badge: "Culinary Trophy",
  },
  {
    id: "legalaid",
    title: "Legal Aid Clinic",
    tagline: "Justice For All • Know Your Rights",
    desc: "Free student and public consultation desks for Cyber Law, consumer protection, and civic documentation.",
    icon: Scale,
    color: "#FFFFFF",
    days: "Day 1 (23 Oct)",
    badge: "Free Consultation",
  },
];

export default function WhatIsExpo() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
        >
          <Layers className="w-3.5 h-3.5 text-gray-700" />
          <span>Campus Festival • 9 Dynamic Arenas</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 tracking-tight mb-4"
        >
          What to Expect at <span className="text-gray-900">Skill Expo 3.0</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-sm sm:text-base leading-relaxed"
        >
          Organized by <strong className="text-gray-900 font-semibold">Sobhasaria Group of Institutions</strong>, Skill Expo is
          Rajasthan’s premier hands-on inter-college festival. Stepping far beyond theoretical paper
          presentations, Phase 3.0 activates <strong className="text-gray-900 font-semibold">9 dedicated live zones</strong> spanning
          software engineering, green science, competitive gaming, spoken arts, culinary ventures, and free legal aid.
        </motion.p>
      </div>

      {/* 9 Live Zones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {ZONES.map((zone, idx) => {
          const Icon = zone.icon;
          return (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 transition-transform duration-200 group-hover:scale-105">
                    <Icon className="w-5 h-5 text-gray-800" />
                  </div>

                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600">
                    {zone.days}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-semibold tracking-wide uppercase text-gray-500">
                    {zone.tagline}
                  </span>
                  <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-black transition-colors mt-0.5">
                    {zone.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                  {zone.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2 overflow-hidden">
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 truncate">
                  {zone.badge}
                </span>

                <Link
                  href={`/events?category=${zone.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 group-hover:text-gray-900 transition-colors shrink-0"
                >
                  <span>Explore Events</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA Strip */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-800 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all shadow-sm"
        >
          <span>Browse All Competitions, Categories & Rules</span>
          <ArrowRight className="w-4 h-4 text-gray-700" />
        </Link>
      </motion.div>
    </section>
  );
}
