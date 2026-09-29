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
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-900"></span>
        </span>
        <span className="text-xs uppercase font-mono tracking-widest text-gray-800 font-semibold flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {timeLeft.isExpired ? "Event Has Begun" : FEST_CONFIG.countdownLabel}
        </span>
      </div>

      {/* Digits Grid */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
        {timeUnits.map((unit) => {
          const displayStr = mounted ? String(unit.value).padStart(2, "0") : "00";

          return (
            <div
              key={unit.label}
              className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-gray-400 shadow-sm transition-all"
            >
              {/* Number Display with AnimatePresence for digit flip */}
              <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={displayStr}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight tabular-nums inline-block w-full text-center"
                  >
                    {displayStr}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Unit Label */}
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-500 mt-1 uppercase">
                {unit.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Target Date Note */}
      <p className="text-center text-xs text-gray-500 mt-3.5">
        Registration closes on <span className="text-gray-900 font-medium">October 15, 2026</span> • Main Fest on{" "}
        <span className="text-gray-900 font-semibold">23–24 October 2026</span>
      </p>
    </div>
  );
}
