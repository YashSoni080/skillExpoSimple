import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Skill Expo Phase 3.0 | Sobhasaria Group of Institutions",
    short_name: "Skill Expo",
    description:
      "Official website for Skill Expo Phase 3.0 — Rajasthan's premier inter-college skill competition featuring 9 live interactive zones.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [],
  };
}
