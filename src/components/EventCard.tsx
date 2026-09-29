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
      className="glass-card group relative flex flex-col justify-between rounded-2xl p-6 border border-white/10 hover:border-accent/40 bg-[#090914]/80 backdrop-blur-md"
    >
      <div>
        {/* Top Header: Icon & Category chip */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
            <DynamicIcon name={event.iconName} className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-accent">
              {event.categoryLabel}
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="font-display font-bold text-xl text-white group-hover:text-accent transition-colors mb-1">
          {event.title}
        </h3>
        <p className="text-xs font-mono text-gray-400 mb-3 tracking-wide">
          {event.tagline}
        </p>

        {/* 1-2 line description */}
        <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-4">
          {event.description}
        </p>

        {/* Meta badges: Day & Venue */}
        <div className="space-y-1.5 mb-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate">{event.day} • {event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-neon-pink shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>
        </div>

        {/* Prize pill */}
        <div className="p-2.5 rounded-xl bg-neon-gold/5 border border-neon-gold/20 flex items-center gap-2 mb-6">
          <Trophy className="w-4 h-4 text-neon-gold shrink-0" />
          <div className="text-xs">
            <span className="text-neon-gold font-bold">
              {event.prizes.first || "Official Trophy & Prizes"}
            </span>
            <span className="text-[11px] text-gray-400 block truncate">
              {event.prizes.description}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-white/5 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onOpenDetails(event)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 text-xs font-semibold text-gray-200 hover:text-white transition-colors"
        >
          <Info className="w-3.5 h-3.5 text-accent" />
          <span>Rules & Info</span>
        </button>

        <a
          href={registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 glow-cyan-button inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)]"
          title={`Register for ${event.title}`}
        >
          <span>Register</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}
