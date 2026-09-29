import type { Metadata } from "next";
import ScheduleClient from "./ScheduleClient";

export const metadata: Metadata = {
  title: "2-Day Chronological Schedule & Timeline",
  description:
    "Explore the complete chronological 2-day schedule of Skill Expo Phase 3.0 (23-24 October 2026) across BGMI E-Sports, Robotics, Open Mic, Startups, and Science at Sobhasaria Campus, Sikar.",
  keywords: [
    "Skill Expo schedule",
    "Skill Expo dates",
    "Skill Expo timeline",
    "Sobhasaria fest schedule",
    "Skill Expo 2026 dates",
    "Skill Expo timings Sikar",
  ],
  alternates: {
    canonical: "/schedule",
  },
  openGraph: {
    title: "2-Day Chronological Schedule & Timeline | Skill Expo 3.0",
    description:
      "Day 1: Exhibition Day (23 Oct) • Day 2: Performance Day (24 Oct). Full venue and timing details for all 9 zones.",
    url: "https://skillexpo.sobhasaria.edu.in/schedule",
  },
};

export default function SchedulePage() {
  return <ScheduleClient />;
}
