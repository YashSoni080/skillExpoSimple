"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Lock, Image as ImageIcon, Video, Sparkles, ExternalLink } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/gallery";
import { GalleryMedia } from "@/types";
import Lightbox from "@/components/Lightbox";

type GalleryTab = "phase-1" | "phase-2" | "phase-3";
type MediaTypeFilter = "all" | "image" | "video";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("phase-2");
  const [mediaType, setMediaType] = useState<MediaTypeFilter>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Available categories for current phase
  const categories = [
    "all",
    ...Array.from(
      new Set(
        GALLERY_ITEMS.filter((item) => item.phase === activeTab).map(
          (item) => item.category
        )
      )
    ),
  ];

  // Filter items by phase, media type, and category
  const currentItems = GALLERY_ITEMS.filter((item) => {
    const matchesPhase = item.phase === activeTab;
    const matchesType = mediaType === "all" || item.type === mediaType;
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesPhase && matchesType && matchesCategory;
  });

  const rawLinks = {
    "phase-1": "https://fb.nxtlab.co.in/public/share/jlrzBuL8MDEqhmPlO-aFkg",
    "phase-2": "https://immich.nxtlab.co.in/share/XX-JmfnyQx_M86bEMOtTpZ-S9zbnUGbiB5VeYIpAt-X3iU1I11OFOQZArLvRhICjsHI",
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Visual Archive</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase mb-4"
        >
          Fest <span className="text-accent text-glow">Gallery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          Browse iconic moments, aftermovies, stage spectacles, and winning memories
          from Skill Expo Phase 1 and Phase 2.
        </motion.p>
      </div>

      {/* Phase Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <button
          onClick={() => {
            setActiveTab("phase-1");
            setSelectedCategory("all");
          }}
          className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "phase-1"
              ? "bg-accent text-background shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105"
              : "bg-surface/80 border border-white/10 text-gray-400 hover:text-white"
          }`}
        >
          Phase 1 (Inaugural Edition)
        </button>

        <button
          onClick={() => {
            setActiveTab("phase-2");
            setSelectedCategory("all");
          }}
          className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "phase-2"
              ? "bg-accent text-background shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105"
              : "bg-surface/80 border border-white/10 text-gray-400 hover:text-white"
          }`}
        >
          Phase 2 (Growth & Scale)
        </button>

        {/* Locked Phase 3 Tab */}
        <button
          disabled
          className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold bg-white/[0.03] border border-white/5 text-gray-500 cursor-not-allowed flex items-center gap-2"
        >
          <Lock className="w-3.5 h-3.5 text-neon-gold" />
          <span>Phase 3 — Coming Soon (23-24 Oct 2026)</span>
        </button>
      </div>

      {/* Cloud Archive Direct Access Bar */}
      {activeTab !== "phase-3" && (
        <div className="flex items-center justify-center mb-8">
          <a
            href={rawLinks[activeTab]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-accent/40 text-gray-300 hover:text-accent text-xs font-mono transition-all group"
          >
            <span>
              {activeTab === "phase-1"
                ? "Browse Raw Phase 1 Cloud Storage (111 items)"
                : "Browse Raw Phase 2 Immich Album (170 items)"}
            </span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      )}

      {/* Media Type & Category Filters */}
      <div className="space-y-4 mb-10">
        {/* Media Type Filter */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setMediaType("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              mediaType === "all"
                ? "bg-white/20 text-white border border-white/30"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            All Media ({GALLERY_ITEMS.filter((i) => i.phase === activeTab).length})
          </button>
          <button
            onClick={() => setMediaType("image")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
              mediaType === "image"
                ? "bg-white/20 text-white border border-white/30"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>
              Photos (
              {
                GALLERY_ITEMS.filter(
                  (i) => i.phase === activeTab && i.type === "image"
                ).length
              }
              )
            </span>
          </button>
          <button
            onClick={() => setMediaType("video")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
              mediaType === "video"
                ? "bg-white/20 text-white border border-white/30"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>
              Videos (
              {
                GALLERY_ITEMS.filter(
                  (i) => i.phase === activeTab && i.type === "video"
                ).length
              }
              )
            </span>
          </button>
        </div>

        {/* Category Filter Chips */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-accent/20 text-accent border border-accent/50 shadow-[0_0_10px_rgba(0,229,255,0.2)]"
                    : "bg-white/[0.03] text-gray-400 border border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat === "all" ? "All Zones" : cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Masonry / Grid Display */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {currentItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightboxIndex(idx)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-surface/80 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] hover:-translate-y-1"
            >
              {/* Image / Thumbnail Container */}
              <div className={`relative w-full ${item.aspectRatio || "aspect-[16/9]"} overflow-hidden bg-[#0a0a14]`}>
                <img
                  src={item.type === "video" ? item.thumbnail || item.src : item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Video Play Overlay */}
                {item.type === "video" && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-accent/90 text-background flex items-center justify-center shadow-[0_0_20px_#00E5FF] group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <Lightbox
        items={currentItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  );
}
