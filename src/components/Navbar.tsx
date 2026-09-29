"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { FEST_CONFIG } from "@/data/config";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Schedule", href: "/schedule" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm"
            : "bg-white/60 backdrop-blur-sm py-4 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* SkillExpo PHASE 3 Logo */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-xl py-1 px-1 transition-transform"
            >
              <div className="flex items-center">
                <span className="font-display font-extrabold text-2xl tracking-tight text-gray-900 group-hover:text-black transition-colors">
                  Skill
                </span>
                <span className="font-display font-extrabold text-2xl tracking-tight text-gray-900 ml-0.5 transition-all">
                  Expo
                </span>
                <span className="ml-2.5 px-2.5 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-gray-800 font-display font-bold text-[10px] sm:text-xs tracking-wider uppercase">
                  Phase 3.0
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/90 border border-gray-200 shadow-sm rounded-full px-3 py-1.5 backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full ${
                      isActive
                        ? "text-gray-900 font-semibold"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 bg-gray-100 border border-gray-200 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Brochure Download Link */}
              <a
                href={FEST_CONFIG.brochurePath}
                download="Skill-Expo-3.0-Brochure.pdf"
                className="flex items-center gap-1.5 text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-xl border border-gray-200 hover:border-gray-300 transition-all hover:bg-gray-50 shadow-sm"
                title="Download Official Fest Brochure PDF"
              >
                <Download className="w-3.5 h-3.5 text-gray-700" />
                <span>Brochure</span>
              </a>

              {/* Register CTA */}
              <Link
                href="/events"
                className="glow-cyan-button flex items-center gap-1.5 text-xs lg:text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-sm"
              >
                <span>Register</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={FEST_CONFIG.brochurePath}
                download="Skill-Expo-3.0-Brochure.pdf"
                className="p-2 rounded-lg text-gray-800 border border-gray-200 bg-gray-50"
                aria-label="Download Fest Brochure"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg border border-gray-200 text-gray-700 hover:text-gray-900 hover:border-gray-300 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Slide-Over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-white/95 backdrop-blur-xl border-b border-gray-200 px-6 py-6 md:hidden shadow-xl"
          >
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-4 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-gray-100 text-gray-900 border border-gray-200 font-semibold"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-gray-200 flex flex-col gap-3 mt-2">
                <a
                  href={FEST_CONFIG.brochurePath}
                  download="Skill-Expo-3.0-Brochure.pdf"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 text-gray-800 font-medium hover:bg-gray-50 transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Official Brochure (PDF)</span>
                </a>

                <Link
                  href="/events"
                  onClick={() => setMobileMenuOpen(false)}
                  className="glow-cyan-button flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm shadow-sm transition-colors"
                >
                  <span>Explore Events & Register</span>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
