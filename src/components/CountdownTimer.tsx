"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FEST_CONFIG } from "@/data/config";
import { Clock, AlertCircle } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = (): TimeLeft => {
      const targetTime = new Date(FEST_CONFIG.countdownTarget).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header Badge */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {timeLeft.isExpired ? "Event Has Begun" : FEST_CONFIG.countdownLabel}
        </span>
      </div>

      {/* Digits Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {timeUnits.map((unit) => {
          const displayStr = mounted ? String(unit.value).padStart(2, "0") : "00";

          return (
            <div
              key={unit.label}
              className="relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl bg-gradient-to-b from-[#121226]/80 to-[#080812]/90 border border-accent/25 shadow-[0_0_20px_rgba(0,229,255,0.08)] group hover:border-accent/60 transition-colors"
            >
              {/* Corner Accents */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-accent opacity-60" />
              <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-accent opacity-60" />
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-accent opacity-60" />
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-accent opacity-60" />

              {/* Number Display with AnimatePresence for digit flip */}
              <div className="h-10 sm:h-14 md:h-16 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={displayStr}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight text-glow"
                  >
                    {displayStr}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Unit Label */}
              <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest text-gray-400 group-hover:text-accent transition-colors mt-1">
                {unit.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Target Date Note */}
      <p className="text-center text-xs text-gray-400 mt-3 font-mono">
        Slots close strictly on <span className="text-white font-medium">October 15, 2026</span> • Main Event on{" "}
        <span className="text-accent font-medium">23–24 October 2026</span>
      </p>
    </div>
  );
}
