import { Sponsor } from "@/types";

export interface EcosystemPartner {
  id: string;
  name: string;
  category: string;
  tag: string;
}

export const ECOSYSTEM_PARTNERS: EcosystemPartner[] = [
  { id: "iic", name: "Sobhasaria Innovation & Incubation Council", category: "Incubation & Mentorship", tag: "IIC Approved" },
  { id: "edc", name: "Entrepreneurship Development Cell", category: "Startup Pitch & Funding", tag: "EDC Cell" },
  { id: "cse", name: "Dept. of Computer Science & Engineering", category: "Coding & AI Challenges", tag: "Academic Dept." },
  { id: "robotics", name: "SECS Robotics & Automation Society", category: "Drone Arena & Bot Trials", tag: "Tech Society" },
  { id: "esports", name: "Student Gaming & E-Sports Community", category: "BGMI & Free Fire LAN", tag: "Gaming Guild" },
  { id: "cultural", name: "Creative Arts & Literary Society", category: "Open Mic & Stage Arts", tag: "Cultural Wing" },
  { id: "media", name: "Student Media & Creator Lab", category: "Reels, Photos & Coverage", tag: "Production Cell" },
  { id: "legal", name: "Sobhasaria Legal Aid & Civic Desk", category: "Consumer & Cyber Clinic", tag: "Civic Outreach" },
];

export const SPONSORS: Sponsor[] = [
  { id: "brand-1", name: "Brand Connect Zone", tier: "Exhibitor" },
  { id: "brand-2", name: "Startup Pavillion", tier: "Partner" },
  { id: "brand-3", name: "Tech Ecosystem", tier: "Community" },
  { id: "brand-4", name: "Student Media Wing", tier: "Media Partner" },
];
