"use client";

import { motion } from "framer-motion";
import { Download, FileText, ExternalLink, Building2, Store, Users } from "lucide-react";
import { ECOSYSTEM_PARTNERS } from "@/data/sponsors";
import { FEST_CONFIG } from "@/data/config";

export default function SponsorsMarquee() {
  const marqueeItems = [...ECOSYSTEM_PARTNERS, ...ECOSYSTEM_PARTNERS];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50/60">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-2 inline-block">
          Ecosystem & Campus Partners
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 tracking-tight">
          Organizing Wings & <span className="text-gray-900">Brand Connect</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xl mx-auto">
          Powered collaboratively by Sobhasaria’s institutional cells, technical departments, and regional enterprise collaborators.
        </p>
      </div>

      {/* Infinite Ecosystem Marquee */}
      <div className="relative w-full overflow-hidden py-4 border-y border-gray-200 bg-white">
        {/* Soft edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] will-change-transform">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center gap-3 mx-3 px-4 py-3 rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 cursor-default shadow-sm shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-800 shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-gray-900 whitespace-nowrap">
                  {partner.name}
                </span>
                <span className="text-[10px] text-gray-500 whitespace-nowrap">
                  {partner.category} • <span className="text-gray-700 font-medium">{partner.tag}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Connect Zone Invitation & Brochure Download Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        {/* Brand Connect Box */}
        <div className="mb-6 p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-gray-100 text-gray-800 shrink-0 border border-gray-200">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block">
                Brand Connect Zone • Day 1 & 2
              </span>
              <h3 className="font-display font-bold text-lg text-gray-900">
                Showcase Your Brand to 5,000+ Students & Attendees
              </h3>
              <p className="text-xs text-gray-600 mt-0.5">
                Stalls, product sampling, and sponsor booths available for regional startups and enterprises.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${FEST_CONFIG.contact.email}?subject=Brand%20Connect%20Sponsorship%20Inquiry%20-%20Skill%20Expo%203.0`}
            className="shrink-0 px-4 py-2.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Users className="w-3.5 h-3.5 text-gray-700" />
            <span>Sponsor / Partner With Us</span>
          </a>
        </div>

        {/* Brochure Download CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-7 sm:p-8 bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-800 shrink-0 hidden sm:block">
              <FileText className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[11px] font-semibold text-gray-500 tracking-wider uppercase mb-1 block">
                Official Festival Brochure
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-gray-900 mb-1.5">
                Download Complete Skill Expo Guidelines
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-lg leading-relaxed">
                Includes all zone rules, prize breakdowns, evaluation rubrics, school & college team guidelines, and campus map.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={FEST_CONFIG.brochurePath}
              download="Skill-Expo-3.0-Brochure.pdf"
              className="glow-cyan-button flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs tracking-wide transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={FEST_CONFIG.brochurePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-xs font-medium transition-colors shadow-sm"
            >
              <span>View Online</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-600" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
