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
      <div className="text-center max-w-3xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 text-gray-700" />
          <span>Timeline & Daily Schedule</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 tracking-tight mb-3"
        >
          Two Days of <span className="text-gray-900">Live Competitions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-sm sm:text-base leading-relaxed"
        >
          Explore the chronological schedule of Skill Expo Phase 3.0 across both days.
          All zones operate concurrently from 9:00 AM to 3:00 PM at Sobhasaria Campus, Sikar.
        </motion.p>
      </div>

      {/* Day Selector Tabs */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <button
          onClick={() => setSelectedDay(1)}
          className={`flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedDay === 1
              ? "bg-gray-900 text-white shadow-sm"
              : "bg-white border border-gray-200 text-gray-700 hover:text-black hover:bg-gray-50 shadow-sm"
          }`}
        >
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-900">
            DAY 01
          </span>
          <span>Friday, 23 Oct • Exhibition Day</span>
        </button>

        <button
          onClick={() => setSelectedDay(2)}
          className={`flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedDay === 2
              ? "bg-gray-900 text-white shadow-sm"
              : "bg-white border border-gray-200 text-gray-700 hover:text-black hover:bg-gray-50 shadow-sm"
          }`}
        >
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-900">
            DAY 02
          </span>
          <span>Saturday, 24 Oct • Performance Day</span>
        </button>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative border-l-2 border-gray-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-7">
        <AnimatePresence mode="wait">
          {dayEvents.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
              </div>

              {/* Event Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 border border-gray-200 text-gray-900 font-mono text-xs font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      {item.time}
                    </span>

                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-gray-100 border border-gray-200 text-gray-700">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-gray-500" />
                    <span>{item.venue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 shrink-0 hidden sm:block">
                    <DynamicIcon name={item.iconName} className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 group-hover:text-black transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs text-gray-500 font-mono">
                    Sobhasaria Campus • Open to all verified colleges
                  </span>

                  <Link
                    href={`/events?category=${item.category}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900 hover:underline shrink-0"
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
      <div className="mt-16 p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center shadow-sm">
        <p className="text-xs text-gray-600">
          * Note: Matches, performances, and judging rounds commence strictly on time.
          All registered participants must report to their respective zone desk at least 30 minutes prior.
        </p>
      </div>
    </div>
  );
}
