import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "All Competitions & 9 Live Zones",
  description:
    "Explore all 9 live interactive zones and 30+ competitions at Skill Expo 3.0: BGMI E-Sports, Autonomous Robotics, Science Working Models, Startup Pitches, Open Mic, and Culinary arts on 23-24 October 2026.",
  keywords: [
    "Skill Expo events",
    "Skill Expo competitions",
    "Skill Expo BGMI",
    "Skill Expo robotics",
    "Skill Expo open mic",
    "Sobhasaria fest events",
    "Rajasthan college competitions",
    "Skill Expo registration",
  ],
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "All Competitions & 9 Live Zones | Skill Expo 3.0",
    description:
      "Filter through 9 interactive zones, inspect rules, prize pools, and team requirements, and register for Skill Expo Phase 3.0.",
    url: "https://skillexpo.sobhasaria.edu.in/events",
  },
};

export default function EventsPage() {
  return <EventsClient />;
}
