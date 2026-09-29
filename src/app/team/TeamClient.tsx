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
      <div className="text-center max-w-3xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
        >
          <Award className="w-3.5 h-3.5 text-gray-700" />
          <span>Leadership & Student Convenors</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 tracking-tight mb-3"
        >
          Organizing <span className="text-gray-900">Committee</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-sm sm:text-base leading-relaxed"
        >
          Meet the academic leadership, faculty mentors, and student coordinators
          powering Skill Expo Phase 3.0 at Sobhasaria Group of Institutions.
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isSelected
                  ? "bg-gray-900 text-white font-semibold shadow-sm"
                  : "bg-white border border-gray-200 text-gray-700 hover:text-black hover:bg-gray-50 shadow-sm"
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
              className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:-translate-y-1 p-5 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Photo Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100 mb-4 border border-gray-200 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Category Chip */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 text-gray-800 shadow-sm">
                      {member.category}
                    </span>
                  </div>
                </div>

                {/* Member Details */}
                <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-black transition-colors truncate">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-gray-800 font-mono mt-0.5 truncate" title={member.role}>
                  {member.role}
                </p>
                <p className="text-xs text-gray-500 mt-1 truncate" title={member.department}>
                  {member.department}
                </p>

                {member.bio && (
                  <p className="text-xs text-gray-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </div>

              {/* Social Links Bar */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-2.5">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 hover:text-black text-gray-600 transition-colors shadow-sm"
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
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 hover:text-black text-gray-600 transition-colors shadow-sm"
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
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 hover:text-black text-gray-600 transition-colors shadow-sm"
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
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 hover:text-black text-gray-600 transition-colors shadow-sm"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.socials.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    aria-label={`${member.name} Email`}
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 hover:text-black text-gray-600 transition-colors shadow-sm"
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
