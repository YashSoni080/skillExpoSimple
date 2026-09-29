"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Sparkles, AlertCircle } from "lucide-react";
import { EVENTS, EVENT_CATEGORIES } from "@/data/events";
import { EventItem, EventCategory } from "@/types";
import EventCard from "@/components/EventCard";
import EventModal from "@/components/EventModal";

function EventsContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as EventCategory) || "all";

  const [selectedCategory, setSelectedCategory] = useState<EventCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  // Filter events by category and search query
  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      const matchesCategory =
        selectedCategory === "all" || event.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        event.title.toLowerCase().includes(query) ||
        event.categoryLabel.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.tagline.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Official Event Directory</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase mb-4"
        >
          All Competitions & <span className="text-accent text-glow">Zones</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          Filter through our 9 interactive zones. Click any event to inspect full rules, team formats,
          and prize pools, or register directly with pre-filled forms.
        </motion.p>
      </div>

      {/* Search Bar & Stats */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events, keywords, BGMI, robotics, open mic, prizes..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-surface/80 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-gray-500 text-sm backdrop-blur-md outline-none transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-400 hover:text-white"
            >
              CLEAR
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs Horizontal Scroll */}
      <div className="mb-10 overflow-x-auto pb-3 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max mx-auto justify-start sm:justify-center">
          {EVENT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as EventCategory)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-accent text-background font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105"
                    : "bg-surface/60 text-gray-400 hover:text-white hover:bg-white/5 border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Events Results Header */}
      <div className="flex items-center justify-between mb-6 text-xs text-gray-400 border-b border-white/10 pb-3">
        <span>
          Showing <strong className="text-white">{filteredEvents.length}</strong> event
          {filteredEvents.length === 1 ? "" : "s"}
        </span>
        <span className="font-mono text-accent">
          {selectedCategory === "all" ? "All Categories" : selectedCategory.toUpperCase()}
        </span>
      </div>

      {/* Events Card Grid */}
      {filteredEvents.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onOpenDetails={(e) => setActiveModalEvent(e)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-20 bg-surface/40 rounded-2xl border border-white/5">
          <AlertCircle className="w-10 h-10 text-gray-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No matching events found</h3>
          <p className="text-xs text-gray-400 mb-4">
            Try adjusting your search query or switching category filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl bg-accent/20 text-accent border border-accent/30 text-xs font-semibold hover:bg-accent hover:text-background transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Event Details Modal */}
      <EventModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 text-center text-accent font-mono text-sm">
          Loading Skill Expo Events...
        </div>
      }
    >
      <EventsContent />
    </Suspense>
  );
}
