"use client";

import { motion } from "framer-motion";
import { Download, FileText, ExternalLink, Plus } from "lucide-react";
import { SPONSORS } from "@/data/sponsors";
import { FEST_CONFIG } from "@/data/config";

export default function SponsorsMarquee() {
  // Double list for continuous seamless looping
  const marqueeItems = [...SPONSORS, ...SPONSORS];

  return (
    <section className="relative py-20 overflow-hidden bg-[#06060c]">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent mb-2 inline-block">
          Ecosystem & Industry Support
        </span>
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
          Sponsors & <span className="text-accent text-glow">Event Partners</span>
        </h2>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden py-6 border-y border-white/10 bg-surface/50 backdrop-blur-sm">
        {/* Fade gradient overlays on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#06060c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#06060c] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {marqueeItems.map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="flex items-center justify-center mx-4 w-44 sm:w-56 h-16 rounded-2xl bg-white/[0.02] border border-dashed border-white/15 hover:border-accent/40 hover:bg-white/[0.04] transition-all duration-300 group cursor-default"
            >
              <div className="w-8 h-8 rounded-xl border border-dashed border-white/20 flex items-center justify-center text-gray-500 group-hover:text-accent group-hover:border-accent/40 transition-colors">
                <Plus className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brochure Download CTA Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#0c0c1a] via-surface to-[#080814] border border-accent/30 shadow-[0_0_30px_rgba(0,229,255,0.15)] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Decorative Corner Lines */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accent" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accent" />

          <div className="flex items-start gap-5">
            <div className="p-4 rounded-2xl bg-accent/15 border border-accent/30 text-accent shrink-0 hidden sm:block">
              <FileText className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-mono font-semibold text-accent tracking-widest uppercase mb-1 block">
                Official Document
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
                Download Official Skill Expo Brochure
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
                Contains complete day-wise rules, prize breakdown, evaluation rubrics,
                guidelines for school & college teams, and campus navigation maps.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={FEST_CONFIG.brochurePath}
              download="Skill-Expo-3.0-Brochure.pdf"
              className="glow-cyan-button flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={FEST_CONFIG.brochurePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              <span>View Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
