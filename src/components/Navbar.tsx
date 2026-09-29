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
            ? "bg-[#050508]/85 backdrop-blur-md border-b border-accent/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* SkillExpo PHASE 3 Logo (Styled to the site's dark cyber theme) */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl py-1 px-1 transition-transform"
            >
              <div className="flex items-center">
                <span className="font-display font-black text-2xl sm:text-[26px] tracking-tight text-white group-hover:text-gray-100 transition-colors">
                  Skill
                </span>
                <span className="font-display font-black text-2xl sm:text-[26px] tracking-tight text-accent text-glow ml-0.5 group-hover:brightness-125 transition-all">
                  Expo
                </span>
                <span className="ml-2.5 sm:ml-3 px-3 py-1 rounded-full bg-gradient-to-r from-accent to-[#00b0d3] text-[#050508] font-display font-black text-[10px] sm:text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.8)] group-hover:scale-105 transition-all">
                  PHASE 3
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-surface/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 bg-accent/15 border border-accent/40 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Brochure Download Link */}
              <a
                href={FEST_CONFIG.brochurePath}
                download="Skill-Expo-3.0-Brochure.pdf"
                className="flex items-center gap-1.5 text-xs lg:text-sm font-medium text-gray-300 hover:text-accent px-3 py-2 rounded-lg border border-white/10 hover:border-accent/30 transition-all hover:bg-accent/5"
                title="Download Official Fest Brochure PDF"
              >
                <Download className="w-3.5 h-3.5 text-accent" />
                <span>Brochure</span>
              </a>

              {/* Register CTA */}
              <Link
                href="/events"
                className="flex items-center gap-1.5 text-xs lg:text-sm font-semibold text-background bg-accent hover:bg-accent-hover px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.7)] transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-background" />
                <span>Register Now</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={FEST_CONFIG.brochurePath}
                download="Skill-Expo-3.0-Brochure.pdf"
                className="p-2 rounded-lg text-accent border border-accent/20 bg-accent/5"
                aria-label="Download Fest Brochure"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-accent/40 transition-colors"
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
            className="fixed inset-x-0 top-[60px] z-30 bg-[#07070e]/95 backdrop-blur-xl border-b border-accent/20 px-6 py-6 md:hidden shadow-2xl"
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
                        ? "bg-accent/15 text-accent border border-accent/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3 mt-2">
                <a
                  href={FEST_CONFIG.brochurePath}
                  download="Skill-Expo-3.0-Brochure.pdf"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg border border-accent/30 text-accent font-medium hover:bg-accent/10 transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Official Brochure (PDF)</span>
                </a>

                <Link
                  href="/events"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-accent text-background font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] text-sm"
                >
                  <Sparkles className="w-4 h-4" />
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
