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
    <span ref={ref} className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounters() {
  return (
    <section className="relative py-12 border-y border-white/10 bg-[#07070d]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {FEST_CONFIG.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-white/5 hover:border-accent/30 transition-colors bg-white/[0.02] overflow-hidden"
            >
              <div className="text-glow mb-1 min-h-[44px] flex items-center justify-center w-full px-1">
                {stat.value !== undefined ? (
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  <span className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white text-center leading-tight break-words">
                    {stat.displayText}
                  </span>
                )}
              </div>
              <span className="text-sm font-semibold text-accent tracking-wide mb-1 break-words">
                {stat.label}
              </span>
              <span className="text-xs text-gray-400">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
