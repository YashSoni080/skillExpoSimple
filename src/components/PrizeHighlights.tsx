"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Gift, Sparkles, Star, ShieldCheck } from "lucide-react";

const PRIZE_CARDS = [
  {
    title: "E-Sports Championship",
    reward: "Exciting Prizes & Expo Cup Trophy",
    sub: "BGMI & Free Fire squad tournaments with champion trophies, runner-up awards, and gaming gear vouchers.",
    color: "#00E5FF",
    icon: Trophy,
    perks: ["Expo Cup Trophy", "Live Caster Spotlight", "Official Winner Medals"],
  },
  {
    title: "Open Mic Grand Stage",
    reward: "Exciting Prizes for Top 3 + Golden Mic",
    sub: "Recognizing outstanding poets, singers, stand-up comedians, and unique stage performers before guest judges.",
    color: "#B026FF",
    icon: Sparkles,
    perks: ["Golden & Silver Mic Trophies", "Certificates for EVERY Participant", "Industry Mentor Feedback"],
  },
  {
    title: "Startup & Innovation Incubation",
    reward: "Exciting Prizes, Grants & Workspace",
    sub: "Incubation support, investor networking, and complimentary incubation access at Sobhasaria EDC.",
    color: "#FFB800",
    icon: Award,
    perks: ["Best Startup Pitch Trophy", "Incubation Cell Support", "Investor Mentorship"],
  },
  {
    title: "Zone Awards & Recognition",
    reward: "Master Trophies & Merit Honours",
    sub: "Recognizing top innovations in Tech & AI, Science Working Models, Art & Craft, and Food & Fun Boulevard.",
    color: "#10B981",
    icon: Gift,
    perks: ["Master Chef Apron & Hamper", "Young Scientist Honor", "Eco-Innovator Award"],
  },
];

export default function PrizeHighlights() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-gold/10 border border-neon-gold/30 text-neon-gold text-xs font-mono font-semibold uppercase tracking-wider mb-4"
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>Champion Rewards & Titles</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4"
        >
          Compete For <span className="text-neon-gold text-glow-gold">Glory & Prizes</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          Skill Expo Phase 3.0 offers the best exciting prizes, official certificates,
          prestigious Expo Cup trophies, and cool rewards across all live competitive zones.
        </motion.p>
      </div>

      {/* Prize Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRIZE_CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between p-6 rounded-2xl bg-surface/80 border border-white/10 hover:border-accent/40 backdrop-blur-md transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-white/10 bg-white/5 group-hover:scale-110 transition-transform"
                  style={{ color: card.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-accent transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm font-semibold text-accent mb-3 font-mono break-words">
                  {card.reward}
                </p>

                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  {card.sub}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2">
                {card.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2 text-xs text-gray-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* All Participants Certificate Assurance Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-surface to-neon-purple/10 border border-accent/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-accent/20 text-accent shrink-0">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-white">
              Official Certificates for Every Participant
            </h4>
            <p className="text-xs text-gray-400">
              Every registered participant receives an authorized Certificate of Participation from Sobhasaria Group of Institutions.
            </p>
          </div>
        </div>

        <a
          href="/events"
          className="shrink-0 px-5 py-2.5 rounded-lg bg-accent text-background font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-[0_0_15px_rgba(0,229,255,0.4)]"
        >
          Claim Your Spot
        </a>
      </motion.div>
    </section>
  );
}
