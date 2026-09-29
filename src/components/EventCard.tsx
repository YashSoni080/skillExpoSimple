"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy, Calendar, MapPin, Info } from "lucide-react";
import { EventItem } from "@/types";
import { getRegistrationUrl } from "@/data/config";
import DynamicIcon from "./DynamicIcon";

interface EventCardProps {
  event: EventItem;
  onOpenDetails: (event: EventItem) => void;
}

export default function EventCard({ event, onOpenDetails }: EventCardProps) {
  const registrationUrl = getRegistrationUrl(event.category, event.title);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="glass-card group relative flex flex-col justify-between rounded-2xl p-6 border border-gray-200 hover:border-gray-300 bg-white shadow-sm hover:shadow-md transition-all"
    >
      <div>
        {/* Top Header: Icon & Category chip */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-800 group-hover:scale-105 transition-all duration-200">
            <DynamicIcon name={event.iconName} className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700">
              {event.categoryLabel}
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-black transition-colors mb-1">
          {event.title}
        </h3>
        <p className="text-xs text-gray-500 mb-3 font-medium">
          {event.tagline}
        </p>

        {/* 1-2 line description */}
        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
          {event.description}
        </p>

        {/* Meta badges: Day & Venue */}
        <div className="space-y-1.5 mb-4 text-xs text-gray-600">
          <div className="flex items-center gap-2 min-w-0">
            <Calendar className="w-3.5 h-3.5 text-gray-700 shrink-0" />
            <span className="truncate">{event.day} • {event.time}</span>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <span className="truncate" title={event.venue}>{event.venue}</span>
          </div>
        </div>

        {/* Prize pill */}
        <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-2.5 mb-6 overflow-hidden">
          <Trophy className="w-4 h-4 text-gray-800 shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <span
              className="text-xs font-bold text-gray-900 block truncate leading-tight"
              title={event.prizes.first || "Official Trophy & Prizes"}
            >
              {event.prizes.first || "Official Trophy & Prizes"}
            </span>
            <span
              className="text-[11px] text-gray-600 block line-clamp-2 leading-relaxed mt-1"
              title={event.prizes.description}
            >
              {event.prizes.description}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onOpenDetails(event)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-xs font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 shadow-sm transition-colors"
        >
          <Info className="w-3.5 h-3.5 text-gray-700" />
          <span>Rules & Info</span>
        </button>

        <a
          href={registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 glow-cyan-button inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-sm"
          title={`Register for ${event.title}`}
        >
          <span>Register</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}
