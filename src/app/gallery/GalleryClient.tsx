"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Lock, Image as ImageIcon, Video, Sparkles, Download, ExternalLink } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/gallery";
import Lightbox from "@/components/Lightbox";

type GalleryPhase = "phase-1" | "phase-2" | "phase-3";
type MediaTypeFilter = "all" | "image" | "video";

const RAW_MEDIA_LINKS: Record<string, { url: string; label: string }> = {
  "phase-1": {
    url: "https://fb.nxtlab.co.in/public/share/jlrzBuL8MDEqhmPlO-aFkg",
    label: "Download Raw Phase 1 Media Archive (111 Photos & Videos)",
  },
  "phase-2": {
    url: "https://immich.nxtlab.co.in/share/XX-JmfnyQx_M86bEMOtTpZ-S9zbnUGbiB5VeYIpAt-X3iU1I11OFOQZArLvRhICjsHI",
    label: "Download Raw Phase 2 Media Archive (170 Photos & Videos)",
  },
};

export default function GalleryClient() {
  const [activePhase, setActivePhase] = useState<GalleryPhase>("phase-2");
  const [mediaType, setMediaType] = useState<MediaTypeFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items by phase and media type only (no other sub-filters)
  const currentItems = GALLERY_ITEMS.filter((item) => {
    const matchesPhase = item.phase === activePhase;
    const matchesType = mediaType === "all" || item.type === mediaType;
    return matchesPhase && matchesType;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
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
          Browse iconic festival moments, robotics battles, e-sports finals, stage performances, and winning memories.
        </motion.p>
      </div>

      {/* Phase Tabs: Phase 1, Phase 2, Phase 3 */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <button
          onClick={() => setActivePhase("phase-1")}
          className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activePhase === "phase-1"
              ? "bg-accent text-background shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105"
              : "bg-surface/80 border border-white/10 text-gray-400 hover:text-white"
          }`}
        >
          Phase 1 (Inaugural Edition)
        </button>

        <button
          onClick={() => setActivePhase("phase-2")}
          className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activePhase === "phase-2"
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

      {/* Download Raw Media Button */}
      {activePhase !== "phase-3" && RAW_MEDIA_LINKS[activePhase] && (
        <div className="flex items-center justify-center mb-6">
          <a
            href={RAW_MEDIA_LINKS[activePhase].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-surface/90 hover:bg-white/10 border border-accent/30 hover:border-accent text-gray-200 hover:text-accent text-xs sm:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,229,255,0.1)] group"
          >
            <Download className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
            <span>{RAW_MEDIA_LINKS[activePhase].label}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      )}

      {/* Only 3 Filter Tabs: All Media, Photos, Videos */}
      <div className="flex items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setMediaType("all")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
            mediaType === "all"
              ? "bg-white/20 text-white border border-white/30"
              : "bg-white/5 text-gray-400 hover:text-white"
          }`}
        >
          All Media ({GALLERY_ITEMS.filter((i) => i.phase === activePhase).length})
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
            Photos ({GALLERY_ITEMS.filter((i) => i.phase === activePhase && i.type === "image").length})
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
            Videos ({GALLERY_ITEMS.filter((i) => i.phase === activePhase && i.type === "video").length})
          </span>
        </button>
      </div>

      {/* Masonry / Grid Display: Pure Media only (no titles or text cards) */}
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
                  alt={item.title || "Skill Expo Festival Media"}
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
