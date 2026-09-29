"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Gift, Sparkles, Star, ShieldCheck } from "lucide-react";

const PRIZE_CARDS = [
  {
    title: "E-Sports Championship",
    reward: "Exciting Prizes & Expo Cup Trophy",
    sub: "BGMI & Free Fire squad tournaments with champion trophies, runner-up awards, and gaming gear vouchers.",
    color: "#FFFFFF",
    icon: Trophy,
    perks: ["Expo Cup Trophy", "Live Caster Spotlight", "Official Winner Medals"],
  },
  {
    title: "Open Mic Grand Stage",
    reward: "Exciting Prizes for Top 3 + Golden Mic",
    sub: "Recognizing outstanding poets, singers, stand-up comedians, and unique stage performers before guest judges.",
    color: "#FFFFFF",
    icon: Sparkles,
    perks: ["Golden & Silver Mic Trophies", "Certificates for EVERY Participant", "Industry Mentor Feedback"],
  },
  {
    title: "Startup & Innovation Incubation",
    reward: "Exciting Prizes, Grants & Workspace",
    sub: "Incubation support, investor networking, and complimentary incubation access at Sobhasaria EDC.",
    color: "#FFFFFF",
    icon: Award,
    perks: ["Best Startup Pitch Trophy", "Incubation Cell Support", "Investor Mentorship"],
  },
  {
    title: "Zone Awards & Recognition",
    reward: "Master Trophies & Merit Honours",
    sub: "Recognizing top innovations in Tech & AI, Science Working Models, Art & Craft, and Food & Fun Boulevard.",
    color: "#FFFFFF",
    icon: Gift,
    perks: ["Master Chef Apron & Hamper", "Young Scientist Honor", "Eco-Innovator Award"],
  },
];

export default function PrizeHighlights() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
        >
          <Trophy className="w-3.5 h-3.5 text-gray-700" />
          <span>Awards, Honors & Perks</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 tracking-tight mb-4"
        >
          Trophies, Cash Rewards & Recognition
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-sm sm:text-base leading-relaxed"
        >
          Winners in each competitive zone earn prestigious Sobhasaria Expo Cup trophies,
          merit citations, and rewards. Plus, every registered participant is granted an authorized
          Certificate of Participation to showcase on their profile.
        </motion.p>
      </div>

      {/* Prize Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {PRIZE_CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 group hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border border-gray-200 bg-gray-50 group-hover:scale-105 transition-transform text-gray-800">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 mb-1.5 group-hover:text-black transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-2.5 break-words">
                  {card.reward}
                </p>

                <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                  {card.sub}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2">
                {card.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2 text-xs text-gray-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-gray-800 shrink-0" />
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
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 p-6 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-gray-100 text-gray-800 shrink-0 border border-gray-200">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-gray-900">
              Official Certificates for Every Participant
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Each registered attendee receives an authorized Certificate of Participation from Sobhasaria Group of Institutions.
            </p>
          </div>
        </div>

        <a
          href="/events"
          className="glow-cyan-button shrink-0 px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
        >
          View Events & Register
        </a>
      </motion.div>
    </section>
  );
}
