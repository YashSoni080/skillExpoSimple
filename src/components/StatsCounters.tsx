"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FEST_CONFIG } from "@/data/config";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function Counter({ value, prefix = "", suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      // easeOutExpo easing function
      const progress = frame / totalFrames;
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * end);

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounters() {
  return (
    <section className="relative py-12 border-y border-gray-200 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {FEST_CONFIG.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all bg-white shadow-sm"
            >
              <div className="mb-1.5 min-h-[44px] flex items-center justify-center w-full px-1">
                {stat.value !== undefined ? (
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  <span className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-gray-900 text-center leading-tight break-words">
                    {stat.displayText}
                  </span>
                )}
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-800 tracking-wide mb-1 break-words">
                {stat.label}
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 max-w-[200px] leading-relaxed">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
