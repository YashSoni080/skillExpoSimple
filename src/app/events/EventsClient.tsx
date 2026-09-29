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
      <div className="text-center max-w-3xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-gray-700" />
          <span>Competitions & Interactive Arenas</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 tracking-tight mb-3"
        >
          Explore All Events & <span className="text-gray-900">Live Zones</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-sm sm:text-base leading-relaxed"
        >
          Filter across 9 interactive campus zones. Click any event to inspect competition rules, team formats,
          and prize pools, or register directly with pre-filled forms.
        </motion.p>
      </div>

      {/* Search Bar & Stats */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events, BGMI, robotics, open mic, prizes..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-gray-900 placeholder-gray-400 text-sm outline-none transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-black font-semibold"
            >
              CLEAR
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs Horizontal Scroll */}
      <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-1.5 min-w-max mx-auto justify-start sm:justify-center">
          {EVENT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as EventCategory)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-gray-900 text-white font-semibold shadow-sm"
                    : "bg-white text-gray-700 hover:text-black hover:bg-gray-50 border border-gray-200 shadow-sm"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Events Results Header */}
      <div className="flex items-center justify-between mb-6 text-xs text-gray-500 border-b border-gray-200 pb-3">
        <span>
          Showing <strong className="text-gray-900 font-semibold">{filteredEvents.length}</strong> event
          {filteredEvents.length === 1 ? "" : "s"}
        </span>
        <span className="font-mono text-gray-800 font-semibold">
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
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <AlertCircle className="w-10 h-10 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-1">No matching events found</h3>
          <p className="text-xs text-gray-500 mb-4">
            Try adjusting your search query or switching category filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="glow-cyan-button px-4 py-2 rounded-xl text-xs font-semibold shadow-sm"
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

export default function EventsClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 text-center text-gray-600 font-mono text-sm">
          Loading Skill Expo Events...
        </div>
      }
    >
      <EventsContent />
    </Suspense>
  );
}
