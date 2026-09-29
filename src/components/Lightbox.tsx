"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { GalleryMedia } from "@/types";

interface LightboxProps {
  items: GalleryMedia[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl cursor-zoom-out"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-accent hover:text-background text-white border border-white/20 transition-all"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-accent hover:text-background text-white border border-white/20 transition-all"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-accent hover:text-background text-white border border-white/20 transition-all"
          aria-label="Next item"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Media Container */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          {currentItem.type === "video" ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-accent/40 shadow-[0_0_50px_rgba(0,229,255,0.2)] bg-black flex items-center justify-center">
              {currentItem.src.includes("youtube.com") || currentItem.src.includes("youtu.be") || currentItem.src.includes("embed") ? (
                <iframe
                  src={`${currentItem.src}?autoplay=1`}
                  title={currentItem.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={currentItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full max-h-[75vh] object-contain"
                />
              )}
            </div>
          ) : (
            <div className="relative w-full max-h-[75vh] flex items-center justify-center">
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          )}

          {/* Caption Details */}
          <div className="mt-4 text-center max-w-2xl px-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-semibold px-2 py-0.5 rounded bg-accent/15 border border-accent/30 inline-block mb-1">
              {currentItem.category} • {currentItem.phase.toUpperCase()}
            </span>
            <h3 className="font-display font-bold text-lg sm:text-xl text-white">
              {currentItem.title}
            </h3>
            {currentItem.caption && (
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                {currentItem.caption}
              </p>
            )}
            <span className="text-xs text-gray-500 font-mono mt-1 block">
              {currentIndex + 1} of {items.length}
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
