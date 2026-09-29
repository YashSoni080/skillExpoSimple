export type EventCategory =
  | "all"
  | "esports"
  | "tech"
  | "science"
  | "openmic"
  | "content"
  | "startup"
  | "art"
  | "food"
  | "legalaid"
  | "brand";

export interface EventItem {
  id: string;
  title: string;
  category: EventCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  day: "Day 1 (23 Oct)" | "Day 2 (24 Oct)" | "Both Days (23-24 Oct)";
  time: string;
  venue: string;
  teamSize: string;
  entryFee: string;
  prizes: {
    first?: string;
    second?: string;
    third?: string;
    description: string;
  };
  rules: string[];
  coordinator: {
    name: string;
    role: string;
    contact?: string;
  };
  iconName: string;
  featured?: boolean;
}

export interface ScheduleEvent {
  id: string;
  time: string;
  title: string;
  category: EventCategory;
  categoryLabel: string;
  venue: string;
  description: string;
  day: 1 | 2;
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  category: "Patron" | "Faculty" | "Core Student Lead" | "Zone Lead";
  image: string;
  bio?: string;
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
    email?: string;
  };
}

export interface Sponsor {
  id: string;
  name: string;
  tier: "Title Sponsor" | "Powered By" | "Tech Partner" | "Gaming Partner" | "Media Partner" | "Beverage Partner";
  logoUrl?: string;
  website?: string;
}

export interface GalleryMedia {
  id: string;
  title: string;
  category: string;
  phase: "phase-1" | "phase-2" | "phase-3";
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  caption?: string;
  aspectRatio?: string;
}

export interface StatItem {
  value?: number;
  displayText?: string;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
