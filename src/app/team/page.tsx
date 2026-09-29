import type { Metadata } from "next";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Organizing Committee & Leadership Team",
  description:
    "Meet the leadership patrons, faculty convenors, core student leads, and zone coordinators steering Skill Expo Phase 3.0 at Sobhasaria Group of Institutions, Sikar.",
  keywords: [
    "Skill Expo team",
    "Skill Expo organizers",
    "Sobhasaria committee",
    "Skill Expo faculty convenor",
    "Sobhasaria leadership",
  ],
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Organizing Committee & Leadership | Skill Expo 3.0",
    description:
      "Visionary leadership, faculty mentors, and student coordinators behind Rajasthan's premier inter-college skill symposium.",
    url: "https://skillexpo.sobhasaria.edu.in/team",
  },
};

export default function TeamPage() {
  return <TeamClient />;
}
