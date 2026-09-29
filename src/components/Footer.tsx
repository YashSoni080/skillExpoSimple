"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Download,
  ExternalLink,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";
import { FEST_CONFIG } from "@/data/config";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 text-gray-600 text-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Column 1: College Info & Branding */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex items-center">
                <span className="font-display font-extrabold text-2xl tracking-tight text-gray-900 group-hover:text-black transition-colors">
                  Skill
                </span>
                <span className="font-display font-extrabold text-2xl tracking-tight text-gray-900 ml-0.5">
                  Expo
                </span>
                <span className="ml-2.5 px-2.5 py-0.5 rounded-full bg-gray-200 border border-gray-300 text-gray-800 font-display font-bold text-[10px] tracking-wider uppercase">
                  Phase 3.0
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-600 mb-6 max-w-sm leading-relaxed">
              Sobhasaria Group of Institutions presents Rajasthan’s flagship inter-college
              skill symposium, uniting youth across 9 live interactive zones in Sikar.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href={FEST_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 hover:border-gray-400 hover:text-black text-gray-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={FEST_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 hover:border-gray-400 hover:text-black text-gray-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={FEST_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 hover:border-gray-400 hover:text-black text-gray-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={FEST_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 hover:border-gray-400 hover:text-black text-gray-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={FEST_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 hover:border-gray-400 hover:text-black text-gray-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-black transition-colors">
                  All 9 Live Zones
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-black transition-colors">
                  2-Day Schedule
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-black transition-colors">
                  Fest Gallery (Phase 1 & 2)
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-black transition-colors">
                  Organizing Committee
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Registration Forms */}
          <div>
            <h4 className="font-display font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">
              Direct Forms
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://forms.gle/Jha8mAqsN7FQfzzY9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors flex items-center gap-1.5"
                >
                  <span>eSports Registration</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfFyu2UYaNy3aFkLIIkTmB8ZZzYvaDSQqijbk8ITSY1u2dX_w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors flex items-center gap-1.5"
                >
                  <span>Open Mic Registration</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/CbRLKiRXpGjkrQyX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors flex items-center gap-1.5"
                >
                  <span>General Zone Registration</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={FEST_CONFIG.brochurePath}
                  download="Skill-Expo-3.0-Brochure.pdf"
                  className="inline-flex items-center gap-1.5 text-gray-900 hover:underline font-semibold"
                >
                  <Download className="w-3.5 h-3.5 text-gray-800" />
                  <span>Download Brochure (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Venue & Contact */}
          <div>
            <h4 className="font-display font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">
              Venue & Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                <span>
                  Sobhasaria Group of Institutions Campus, NH-52, Sikar, Rajasthan 332001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-800 shrink-0" />
                <a href={`tel:${FEST_CONFIG.contact.phone}`} className="hover:text-black transition-colors">
                  {FEST_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gray-600 shrink-0" />
                <a href={`mailto:${FEST_CONFIG.contact.email}`} className="hover:text-black transition-colors">
                  {FEST_CONFIG.contact.email}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={FEST_CONFIG.institution.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gray-900 hover:underline text-xs font-medium"
                >
                  <span>Open Campus in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Sobhasaria Group of Institutions. All rights reserved. •
            Skill Expo Phase 3.0
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:border-gray-400 text-gray-700 hover:text-black transition-colors shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
