# Skill Expo Phase 3.0 — Official College Fest Website

Official production-grade web portal for **Skill Expo Phase 3.0**, presented by **Sobhasaria Group of Institutions**, Sikar, Rajasthan.

Skill Expo is Rajasthan's flagship inter-college talent symposium and competitive championship featuring 9 interactive live zones: E-Sports, Tech & Learning, Science & Innovation, Open Mic, Content Creators & Influencers Meetup, Startup & Business, Art & Craft, Food & Fun, Legal Aid Clinic, and Brand Connect.

---

## ⚡ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS (Custom Dark Cyber-Luxury Theme, no 3rd-party UI kits)
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Branding Colorway**: Pure Dark (`#050508`) with Signature Cyan (`#00E5FF`), Neon Gold (`#FFB800`), Neon Purple (`#B026FF`)
- **Deployment**: Zero-config Vercel / Node.js production runtime

---

## 📁 Project Architecture & File Tree

```
Skill Expo/
├── public/
│   ├── brochure.pdf              # Downloadable fest brochure
│   ├── Brochures.pdf             # Original backup
│   ├── images/
│   │   ├── logo.png              # Sobhasaria institutional logo
│   │   ├── sobhasaria-logo.png   # Transparent logo asset
│   │   └── team/                 # Photos & SVGs for committee members
│   │       ├── patron-1.jpg
│   │       ├── faculty-1.jpg
│   │       └── ...
│   └── gallery/
│       ├── phase-1/              # Phase 1 festival pictures & video thumbnails
│       └── phase-2/              # Phase 2 festival pictures & video thumbnails
├── src/
│   ├── app/
│   │   ├── globals.css           # Custom scrollbars, cyber grid & glow utilities
│   │   ├── layout.tsx            # Root layout, SEO metadata, Navbar & Footer
│   │   ├── not-found.tsx         # Branded cyber 404 handler
│   │   ├── page.tsx              # Home: Hero, Countdown, Zones, Prizes, Sponsors
│   │   ├── events/
│   │   │   └── page.tsx          # Filterable event directory + search + modal
│   │   ├── schedule/
│   │   │   └── page.tsx          # 2-Day animated vertical timeline
│   │   ├── gallery/
│   │   │   └── page.tsx          # Phase 1 & 2 masonry photo/video grid + Lightbox
│   │   └── team/
│   │       └── page.tsx          # Leadership, faculty, & student committee grid
│   ├── components/
│   │   ├── CountdownTimer.tsx    # Live countdown with digit flip animations
│   │   ├── CustomCursor.tsx      # Desktop-only smooth magnetic glowing cursor
│   │   ├── DynamicIcon.tsx       # Dynamic Lucide icon mapper
│   │   ├── EventCard.tsx         # Event card with prefill Google Form action
│   │   ├── EventModal.tsx        # Slide-in deep-dive rules & coordinator modal
│   │   ├── Footer.tsx            # Comprehensive footer with campus map & socials
│   │   ├── Hero.tsx              # Animated hero section with Sobhasaria branding
│   │   ├── Lightbox.tsx          # Fullscreen gallery photo & video viewer
│   │   ├── Navbar.tsx            # Sticky glass navbar with mobile drawer
│   │   ├── PrizeHighlights.tsx   # Expo Cup, cash prizes, and certificates display
│   │   ├── SponsorsMarquee.tsx   # Infinite marquee strip + brochure download CTA
│   │   ├── StatsCounters.tsx     # Animated numerical counters (in-view triggers)
│   │   └── WhatIsExpo.tsx        # Overview of the 9 live interactive zones
│   ├── data/
│   │   ├── config.ts             # Central configuration, Google Forms links & entry IDs
│   │   ├── events.ts             # Comprehensive 9-zone events database
│   │   ├── gallery.ts            # Phase 1 & 2 photos & embedded video records
│   │   ├── schedule.ts           # Day 1 & Day 2 chronological timeline
│   │   ├── sponsors.ts           # Sponsors and ecosystem partners
│   │   └── team.ts               # Committee members, patrons & coordinators
│   └── types/
│       └── index.ts              # Core TypeScript interface definitions
├── next.config.mjs               # Image domains, SVGs & Next.js config
├── package.json                  # Dependencies and scripts
├── postcss.config.js             # Tailwind CSS PostCSS plugin
├── tailwind.config.js            # Custom themes, colors, and keyframes
└── tsconfig.json                 # Path aliases & compiler options
```

---

## 🚀 Quick Start & Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🛠️ Content Management & Customization Guide

All website copy, dates, links, and assets are isolated in `src/data/*.ts`. Components contain **no hardcoded content**.

### 1. Dates, Contacts & Registration Forms (`src/data/config.ts`)
- Modify fest dates, countdown deadline (`countdownTarget: "2026-10-15T23:59:59+05:30"`), contact phone numbers, and emails.
- Wire Google Form prefilled links.

#### How to configure Google Form prefilled entry IDs:
1. Open your Google Form in Google Drive.
2. Click the top-right **⋮ (More)** menu next to the "Send" button.
3. Select **"Get pre-filled link"**.
4. Type a sample value like `TEST_EVENT` into the "Event Name" question field.
5. Click **Get Link** at the bottom and copy it.
6. The link will look like:
   `https://docs.google.com/forms/d/e/.../viewform?usp=pp_url&entry.123456789=TEST_EVENT`
7. Copy the number (`entry.123456789`) and paste it into `REGISTRATION_FORMS.*.entryId` in `src/data/config.ts`.

### 2. Events & Competitions (`src/data/events.ts`)
To add or modify any competition:
- Add a new object to the `EVENTS` array specifying `id`, `title`, `category`, `day`, `venue`, `entryFee`, `prizes`, `rules`, and `coordinator`.

### 3. Schedule Timeline (`src/data/schedule.ts`)
- Grouped by `day: 1` (Friday, 23 Oct) and `day: 2` (Saturday, 24 Oct).
- Set exact start and end times, venue labels, and descriptions.

### 4. Replacing the Fest Brochure
- Replace `public/brochure.pdf` with your updated PDF file.
- All "Download Brochure" buttons automatically link to `/brochure.pdf` with the HTML5 `download` attribute.

### 5. Adding Real Photos & Videos (`public/gallery/` & `src/data/gallery.ts`)
- Drop photo files into `public/gallery/phase-1/` or `public/gallery/phase-2/`.
- Add the corresponding record to `GALLERY_ITEMS` in `src/data/gallery.ts`.
- For videos, provide either a YouTube embed URL (e.g. `https://www.youtube.com/embed/VIDEO_ID`) or a local MP4 path.

---

## ☁️ Deploying to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import the repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **"Deploy"**.
6. Your website will be live with full SSL, global CDN edge caching, and automated preview deployments.
