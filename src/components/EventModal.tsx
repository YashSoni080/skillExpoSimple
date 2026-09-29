"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  ShieldAlert,
  Phone,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { EventItem } from "@/types";
import { getRegistrationUrl } from "@/data/config";
import DynamicIcon from "./DynamicIcon";

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (event) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  const registrationUrl = getRegistrationUrl(event.category, event.title);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#090913] border border-accent/40 rounded-3xl shadow-[0_0_50px_rgba(0,229,255,0.2)] overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-b from-[#141426] to-transparent border-b border-white/10 shrink-0">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-accent/40 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-accent/15 text-accent border border-accent/30">
                <DynamicIcon name={event.iconName} className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 uppercase">
                  {event.categoryLabel}
                </span>
                <span className="text-xs text-gray-400 ml-2">
                  Fee: <strong className="text-white">{event.entryFee}</strong>
                </span>
              </div>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              {event.title}
            </h2>
            <p className="text-xs sm:text-sm text-accent font-mono mt-1">
              {event.tagline}
            </p>
          </div>

          {/* Body Content - Scrollable */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-300">
            {/* Meta tags grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-mono flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-accent" /> Day
                </span>
                <span className="text-xs font-semibold text-white mt-1">
                  {event.day}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-accent" /> Time
                </span>
                <span className="text-xs font-semibold text-white mt-1">
                  {event.time}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-mono flex items-center gap-1">
                  <Users className="w-3 h-3 text-accent" /> Team
                </span>
                <span className="text-xs font-semibold text-white mt-1">
                  {event.teamSize}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-mono flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-neon-pink" /> Venue
                </span>
                <span className="text-xs font-semibold text-white mt-1 truncate">
                  {event.venue}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-display font-bold text-white text-base mb-2">
                About the Event
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Key Highlights */}
            {event.highlights && event.highlights.length > 0 && (
              <div>
                <h3 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  Key Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {event.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Prizes Breakdown */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-neon-gold/10 via-white/[0.02] to-transparent border border-neon-gold/30">
              <h3 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-neon-gold" />
                Prizes & Awards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
                {event.prizes.first && (
                  <div className="p-2.5 rounded-lg bg-black/40 border border-neon-gold/30">
                    <span className="text-[10px] text-neon-gold font-mono uppercase block">
                      1st Place
                    </span>
                    <span className="text-xs font-bold text-white">
                      {event.prizes.first}
                    </span>
                  </div>
                )}
                {event.prizes.second && (
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                    <span className="text-[10px] text-gray-400 font-mono uppercase block">
                      2nd Place
                    </span>
                    <span className="text-xs font-bold text-white">
                      {event.prizes.second}
                    </span>
                  </div>
                )}
                {event.prizes.third && (
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                    <span className="text-[10px] text-amber-600 font-mono uppercase block">
                      3rd Place
                    </span>
                    <span className="text-xs font-bold text-white">
                      {event.prizes.third}
                    </span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-400">
                {event.prizes.description}
              </p>
            </div>

            {/* Rules */}
            <div>
              <h3 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-accent" />
                Rules & Eligibility
              </h3>
              <ul className="space-y-2 text-xs text-gray-300">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent font-mono font-bold mt-0.5">
                      {idx + 1}.
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coordinator Info */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                  Event Coordinator
                </span>
                <span className="text-sm font-bold text-white">
                  {event.coordinator.name}
                </span>
                <span className="text-xs text-gray-400 block">
                  {event.coordinator.role}
                </span>
              </div>

              {event.coordinator.contact && (
                <a
                  href={`tel:${event.coordinator.contact}`}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-accent hover:border-accent transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{event.coordinator.contact}</span>
                </a>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 bg-[#07070e] border-t border-white/10 flex items-center justify-between gap-4 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-white/15 text-gray-300 hover:text-white text-xs font-semibold transition-colors"
            >
              Close
            </button>

            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-cyan-button flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            >
              <span>Register for this Event</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
