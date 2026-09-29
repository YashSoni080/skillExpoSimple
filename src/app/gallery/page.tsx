"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, Video, Sparkles } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/gallery";
import Lightbox from "@/components/Lightbox";

type MediaTypeFilter = "all" | "image" | "video";

export default function GalleryPage() {
  const [mediaType, setMediaType] = useState<MediaTypeFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items by media type
  const currentItems = GALLERY_ITEMS.filter((item) => {
    if (mediaType === "all") return true;
    return item.type === mediaType;
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

      {/* 3 Main Tabs: All Media, Photos, Videos */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <button
          onClick={() => setMediaType("all")}
          className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            mediaType === "all"
              ? "bg-accent text-background shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105"
              : "bg-surface/80 border border-white/10 text-gray-400 hover:text-white"
          }`}
        >
          All Media ({GALLERY_ITEMS.length})
        </button>

        <button
          onClick={() => setMediaType("image")}
          className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
            mediaType === "image"
              ? "bg-accent text-background shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105"
              : "bg-surface/80 border border-white/10 text-gray-400 hover:text-white"
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>Photos ({GALLERY_ITEMS.filter((i) => i.type === "image").length})</span>
        </button>

        <button
          onClick={() => setMediaType("video")}
          className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
            mediaType === "video"
              ? "bg-accent text-background shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105"
              : "bg-surface/80 border border-white/10 text-gray-400 hover:text-white"
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Videos ({GALLERY_ITEMS.filter((i) => i.type === "video").length})</span>
        </button>
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
                  alt="Skill Expo Festival Media"
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
