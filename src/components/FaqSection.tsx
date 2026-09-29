"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { FEST_CONFIG } from "@/data/config";

interface FAQ {
  q: string;
  a: string;
  category: string;
}

const FAQS: FAQ[] = [
  {
    q: "Who is eligible to participate in Skill Expo Phase 3.0?",
    a: "Participation is open to all students from recognized schools (Class 9th–12th), polytechnic institutes, ITIs, undergraduate and postgraduate colleges across Rajasthan and neighboring states. Competitive zones like E-Sports and Open Mic welcome both collegiate and independent student talent.",
    category: "Eligibility",
  },
  {
    q: "Is there any registration fee to participate or attend?",
    a: "Visiting the expo, exploring live project stalls, and attending open exhibitions is completely free. Most competition zones have free registration; specific team tournaments (such as the BGMI Squad Championship and student food stalls) follow nominal slot confirmations as detailed in the official brochure.",
    category: "Registration",
  },
  {
    q: "Can I participate in multiple live zones across Day 1 and Day 2?",
    a: "Yes! Participants are encouraged to register for multiple events across Day 1 (October 23) and Day 2 (October 24), as long as the respective competition schedules and reporting times do not overlap. Please check the 2-Day Schedule page for exact slot allocations.",
    category: "Participation",
  },
  {
    q: "Will all participants receive official certificates and awards?",
    a: "Absolutely. Every registered participant who attends and presents will be awarded an authorized Certificate of Participation issued by Sobhasaria Group of Institutions. Top performers and winners receive prestigious Expo Cup trophies, merit certificates, and exciting awards.",
    category: "Rewards",
  },
  {
    q: "How will projects and models be evaluated?",
    a: "Evaluations are conducted by independent panels comprising industry practitioners, startup mentors, and experienced faculty convenors. Rubrics emphasize originality, practical implementation, hands-on demonstration, and presentation clarity.",
    category: "Judging",
  },
  {
    q: "How do I reach the Sobhasaria campus in Sikar?",
    a: "The campus is conveniently situated right on NH-52, Gokulpura, Sikar (Rajasthan 332001). It is easily accessible via direct buses, rail from Sikar Junction, and is approximately a 2-hour drive from Jaipur. Parking and campus transit guidance are provided at the main gate.",
    category: "Logistics",
  },
  {
    q: "What is the final deadline to submit registrations?",
    a: "Online registrations close on October 15, 2026 at 11:59 PM to finalize competition brackets, judging slots, and certificate issuance. On-spot registrations on October 23 are strictly subject to remaining slot availability.",
    category: "Deadlines",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-gray-700" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-gray-900 tracking-tight mb-3">
            Everything You Need to Know
          </h2>

          <p className="text-xs sm:text-sm text-gray-600">
            Got questions about participation, rules, accommodation, or certificates? Find quick answers below.
          </p>
        </div>

        {/* Accordion List */}
        <div className="w-full space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.q}
                className={`w-full rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-gray-300 shadow-sm"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-semibold text-gray-700 px-2 py-0.5 rounded-md bg-gray-100 border border-gray-200 hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-gray-900">
                      {faq.q}
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg border border-gray-200 text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-gray-900 border-gray-300 bg-gray-100" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Pure downward vertical slide using CSS Grid row expansion */}
                <div
                  className={`w-full grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden w-full">
                    <div className="w-full px-5 sm:px-6 pb-5 pt-1 border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="w-full mt-10 p-5 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gray-100 text-gray-800 shrink-0 border border-gray-200">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                Still have a specific query or team requirement?
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-600">
                Contact our student organizing desk directly at {FEST_CONFIG.contact.phone} or email {FEST_CONFIG.contact.email}
              </p>
            </div>
          </div>

          <a
            href={`tel:${FEST_CONFIG.contact.phone}`}
            className="shrink-0 px-4 py-2 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-800 text-xs font-semibold transition-colors shadow-sm"
          >
            Call Helpdesk
          </a>
        </div>
      </div>
    </section>
  );
}
