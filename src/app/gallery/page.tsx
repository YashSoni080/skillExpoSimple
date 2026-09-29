import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Fest Gallery & Visual Archive (Phase 1 & 2)",
  description:
    "Explore iconic festival photos, robotics duels, e-sports LAN finals, live rock bands, and grand trophy celebrations from Skill Expo Phase 1 and Phase 2 at Sobhasaria Sikar.",
  keywords: [
    "Skill Expo gallery",
    "Skill Expo photos",
    "Skill Expo videos",
    "Sobhasaria fest gallery",
    "Skill Expo robotics battle",
    "Skill Expo Phase 1",
    "Skill Expo Phase 2",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Fest Gallery & Visual Archive | Skill Expo",
    description:
      "Browse iconic high-definition festival moments, robotics battles, esports finals, stage performances, and champion celebrations.",
    url: "https://skillexpo.sobhasaria.edu.in/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
