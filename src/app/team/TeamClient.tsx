"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Instagram, Twitter, Mail, Sparkles, Award } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/team";

type TeamCategoryFilter = "All" | "Patron" | "Faculty" | "Core Student Lead" | "Zone Lead";

export default function TeamClient() {
  const [selectedCategory, setSelectedCategory] = useState<TeamCategoryFilter>("All");

  const filteredMembers =
    selectedCategory === "All"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category === selectedCategory);

  const categories: { label: string; value: TeamCategoryFilter }[] = [
    { label: "All Members", value: "All" },
    { label: "Patrons & Leadership", value: "Patron" },
    { label: "Faculty Convenors", value: "Faculty" },
    { label: "Core Student Leads", value: "Core Student Lead" },
    { label: "Zone Coordinators", value: "Zone Lead" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-4"
        >
          <Award className="w-3.5 h-3.5" />
          <span>The Minds Behind The Fest</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase mb-4"
        >
          Organizing <span className="text-accent text-glow">Committee</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          Meet the visionary leadership, faculty mentors, and passionate student pioneers
          powering Skill Expo Phase 3.0 at Sobhasaria Group of Institutions.
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isSelected
                  ? "bg-accent text-background font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105"
                  : "bg-surface/80 border border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Team Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredMembers.map((member) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-surface/80 border border-white/10 hover:border-accent/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)] hover:-translate-y-1.5 p-5"
            >
              <div>
                {/* Photo Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0e0e1a] mb-4 border border-white/5 group-hover:border-accent/30 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Category Chip */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/15 text-accent">
                      {member.category}
                    </span>
                  </div>
                </div>

                {/* Member Details */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-accent transition-colors truncate">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-accent font-mono mt-0.5 truncate" title={member.role}>
                  {member.role}
                </p>
                <p className="text-xs text-gray-400 mt-1 truncate" title={member.department}>
                  {member.department}
                </p>

                {member.bio && (
                  <p className="text-xs text-gray-400 mt-2.5 line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </div>

              {/* Social Links Bar */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2.5">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent text-gray-400 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} GitHub`}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent text-gray-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Instagram`}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent text-gray-400 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Twitter`}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent text-gray-400 transition-colors"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.socials.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    aria-label={`${member.name} Email`}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent text-gray-400 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
