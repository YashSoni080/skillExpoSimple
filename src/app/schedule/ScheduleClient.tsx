"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, Trophy, ArrowRight } from "lucide-react";
import { SCHEDULE_EVENTS } from "@/data/schedule";
import DynamicIcon from "@/components/DynamicIcon";
import Link from "next/link";

export default function ScheduleClient() {
  const [selectedDay, setSelectedDay] = useState<1 | 2>(1);

  const dayEvents = SCHEDULE_EVENTS.filter((e) => e.day === selectedDay);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-4"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Timeline & Schedule</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase mb-4"
        >
          Two Days of <span className="text-accent text-glow">Action</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          Explore the chronological schedule of Skill Expo Phase 3.0 across both days.
          All zones operate concurrently from 9:00 AM to 3:00 PM at Sobhasaria Campus, Sikar.
        </motion.p>
      </div>

      {/* Day Selector Tabs */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <button
          onClick={() => setSelectedDay(1)}
          className={`flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-2xl text-sm font-bold transition-all ${
            selectedDay === 1
              ? "bg-accent text-background shadow-[0_0_25px_rgba(0,229,255,0.4)] scale-105"
              : "bg-surface/80 border border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/20">
            DAY 01
          </span>
          <span>Friday, 23 Oct • Exhibition Day</span>
        </button>

        <button
          onClick={() => setSelectedDay(2)}
          className={`flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-2xl text-sm font-bold transition-all ${
            selectedDay === 2
              ? "bg-accent text-background shadow-[0_0_25px_rgba(0,229,255,0.4)] scale-105"
              : "bg-surface/80 border border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/20">
            DAY 02
          </span>
          <span>Saturday, 24 Oct • Performance Day</span>
        </button>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative border-l-2 border-accent/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
        <AnimatePresence mode="wait">
          {dayEvents.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-[#050508] border-2 border-accent flex items-center justify-center shadow-[0_0_10px_#00E5FF] group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>

              {/* Event Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-surface/80 border border-white/10 hover:border-accent/40 backdrop-blur-md transition-all group-hover:shadow-[0_0_25px_rgba(0,229,255,0.1)] group-hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent/15 border border-accent/30 text-accent font-mono text-xs font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      {item.time}
                    </span>

                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-neon-pink bg-neon-pink/10 border border-neon-pink/20 px-3 py-1 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.venue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-accent shrink-0 hidden sm:block">
                    <DynamicIcon name={item.iconName} className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs text-gray-500 font-mono">
                    Sobhasaria Campus • Open to all verified colleges
                  </span>

                  <Link
                    href={`/events?category=${item.category}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline shrink-0"
                  >
                    <span>View Zone Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Notice Banner */}
      <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
        <p className="text-xs text-gray-400">
          * Note: Matches, performances, and judging rounds commence strictly on time.
          All registered participants must report to their respective zone desk at least 30 minutes prior.
        </p>
      </div>
    </div>
  );
}
