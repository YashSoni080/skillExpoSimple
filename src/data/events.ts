import { EventItem } from "@/types";

export const EVENT_CATEGORIES = [
  { id: "all", label: "All Events" },
  { id: "esports", label: "E-Sports" },
  { id: "tech", label: "Tech & Learning" },
  { id: "science", label: "Science & Innovation" },
  { id: "openmic", label: "Open Mic" },
  { id: "content", label: "Content Creators" },
  { id: "startup", label: "Startup & Business" },
  { id: "art", label: "Art & Craft" },
  { id: "food", label: "Food & Fun" },
  { id: "legalaid", label: "Legal Aid Clinic" },
  { id: "brand", label: "Brand Connect" },
] as const;

export const EVENTS: EventItem[] = [
  // ==================== E-SPORTS ====================
  {
    id: "bgmi-squad-showdown",
    title: "BGMI Battlegrounds Squad Tournament",
    category: "esports",
    categoryLabel: "E-Sports",
    tagline: "Drop • Fight • Dominate on the big arena screen",
    description:
      "Elite mobile battle royale competition featuring intense squad matches casted live on giant projector arena screens with high-stakes bracket elimination.",
    highlights: [
      "Live caster commentary on theater screens",
      "Custom room keys with anti-cheat referees",
      "Day 1 Qualifiers & Semis; Day 2 Grand Finals",
      "Min 4 and Max 5 players per team (₹200 per team fee)",
      "Expo Cup Trophy & Champion Medals",
    ],
    day: "Both Days (23-24 Oct)",
    time: "10:30 AM onwards",
    venue: "Sobhasaria E-Sports Arena (Auditorium Hall)",
    teamSize: "Min 4 – Max 5 Players",
    entryFee: "₹200 per team",
    prizes: {
      first: "Exciting Prizes + Expo Cup Trophy",
      second: "Exciting Prizes + Runner-Up Trophy",
      third: "Exciting Prizes + Medals",
      description: "Expo Cup Trophy + Exciting Prizes + Official SGI Certificate for all participants",
    },
    rules: [
      "Team formation: Minimum 4 and maximum 5 players can make a team (4 main + 1 substitute).",
      "Registration fee: ₹200 per team.",
      "All team members must carry valid college identity cards.",
      "Only mobile devices allowed (no iPads, emulators, or triggers/macro controllers).",
      "Teams must report 30 minutes prior to scheduled match time.",
      "Unsportsmanlike conduct or hacking leads to immediate team disqualification.",
    ],
    coordinator: {
      name: "Aryan Sharma",
      role: "E-Sports Head & Technical Caster",
      contact: "+91 98290 11223",
    },
    iconName: "Gamepad2",
    featured: true,
  },
  {
    id: "free-fire-squad-survival",
    title: "Free Fire Squad Survival Showdown",
    category: "esports",
    categoryLabel: "E-Sports",
    tagline: "Fast-paced survival showdown in the battle arena",
    description:
      "High-octane Free Fire squad tournament testing quick reflexes, strategic rotations, and squad communication in front of a live cheering crowd.",
    highlights: [
      "Clash Squad & Classic Bermuda battle modes",
      "Live stats leaderboard updated match-by-match",
      "Min 4 and Max 5 players per team (₹200 per team fee)",
      "Grand Finals on Day 2 with Expo Silver Cup",
    ],
    day: "Both Days (23-24 Oct)",
    time: "01:00 PM onwards",
    venue: "Sobhasaria Gaming Lab 3",
    teamSize: "Min 4 – Max 5 Players",
    entryFee: "₹200 per team",
    prizes: {
      first: "Exciting Prizes + Trophy",
      second: "Exciting Prizes + Medals",
      third: "Exciting Prizes + Certificate",
      description: "Exciting prizes, medals, and gaming gear vouchers",
    },
    rules: [
      "Team formation: Minimum 4 and maximum 5 players can make a team.",
      "Registration fee: ₹200 per team.",
      "Mobile phones only. Emulators and tablets are strictly prohibited.",
      "Room ID and password will be shared 15 minutes before the match.",
      "Fair play guidelines enforced by tournament marshals.",
    ],
    coordinator: {
      name: "Karan Verma",
      role: "Tournament Marshal",
      contact: "+91 97840 55667",
    },
    iconName: "Flame",
    featured: true,
  },
  {
    id: "aim-trials-1v1",
    title: "1v1 Rapid Reaction Aim Trials",
    category: "esports",
    categoryLabel: "E-Sports",
    tagline: "Walk-in instantaneous reflex showdown",
    description:
      "Rapid 1v1 walk-in reflex challenges for individual gamers. Step up to the booth, challenge your peers, and score the highest hit-rate on our precision leaderboard.",
    highlights: [
      "No advance registration required — walk in anytime",
      "Instant spot prizes and gaming coupons",
      "Hourly leaderboard toppers win exclusive gaming merchandise",
    ],
    day: "Both Days (23-24 Oct)",
    time: "All Day (9:00 AM - 3:00 PM)",
    venue: "E-Sports Experience Booth, Main Foyer",
    teamSize: "Individual (1 Player)",
    entryFee: "Free Walk-in",
    prizes: {
      first: "Gaming Headphones & Mouse",
      second: "Fast-Charging Powerbank",
      description: "Hourly spot goodies + Grand Aim Master certificate",
    },
    rules: [
      "Walk-in open to all registered festival attendees.",
      "Standard tournament peripheral setup provided.",
    ],
    coordinator: {
      name: "Rohit Rathore",
      role: "Arena Coordinator",
    },
    iconName: "Crosshair",
  },

  // ==================== TECH & LEARNING ====================
  {
    id: "coding-and-software-showcase",
    title: "Technology: Apps, Web & Software Showcase",
    category: "tech",
    categoryLabel: "Tech & Learning",
    tagline: "Hands-on coding, live software & digital innovation",
    description:
      "Exhibition of student-built mobile apps, full-stack web applications, developer tooling, and innovative digital software solutions addressing modern challenges.",
    highlights: [
      "Live product demonstrations on dedicated developer kiosks",
      "Feedback from industry tech leaders & software architects",
      "Evaluated on code architecture, UI/UX, and real-world utility",
    ],
    day: "Day 1 (23 Oct)",
    time: "09:30 AM – 02:30 PM",
    venue: "Advanced Computing Centre, Block B",
    teamSize: "1 to 4 Members",
    entryFee: "Free Registration",
    prizes: {
      first: "Exciting Prizes + Tech Master Trophy",
      second: "Exciting Prizes + Certificate of Excellence",
      third: "Exciting Prizes + Cloud Credits",
      description: "Exciting prizes, internship interview shortlists, and trophies",
    },
    rules: [
      "Working live prototype or production deployment is mandatory.",
      "Teams get 7 minutes of presentation followed by 3 minutes Q&A with jury.",
      "Code repository must be made accessible to judges during evaluation.",
    ],
    coordinator: {
      name: "Pooja Shekhawat",
      role: "Tech Zone Coordinator",
      contact: "+91 94140 12890",
    },
    iconName: "Code2",
    featured: true,
  },
  {
    id: "robotics-drones-electronics",
    title: "Robotics, Drones & Smart Electronics",
    category: "tech",
    categoryLabel: "Tech & Learning",
    tagline: "Autonomous bots, quadcopters, sensors & IoT circuitry",
    description:
      "Display and live flight/maneuver demonstrations of custom-built robots, drone systems, IoT sensor networks, and innovative hardware prototypes.",
    highlights: [
      "Designated indoor drone testing cage & obstacle course",
      "Autonomous navigation and micro-controller showcases",
      "Live hardware debugging and circuit demonstrations",
    ],
    day: "Day 1 (23 Oct)",
    time: "10:00 AM – 03:00 PM",
    venue: "Robotics Innovation Lab & Central Courtyard",
    teamSize: "1 to 5 Members",
    entryFee: "Free Registration",
    prizes: {
      first: "Exciting Prizes + Maker Innovator Trophy",
      second: "Exciting Prizes + Electronics Tool Kit",
      third: "Exciting Prizes + Certificate",
      description: "Exciting prizes, robotic component hampers, and trophies",
    },
    rules: [
      "Battery safety and fail-safe protocols must be certified by safety marshal.",
      "Flight tests strictly limited to designated enclosed safety arena.",
    ],
    coordinator: {
      name: "Er. Vikram Singh",
      role: "Faculty Mentor & Robotics Lead",
      contact: "+91 98281 99012",
    },
    iconName: "Bot",
    featured: true,
  },
  {
    id: "ai-and-new-technology",
    title: "AI & Emerging Technologies Arena",
    category: "tech",
    categoryLabel: "Tech & Learning",
    tagline: "Machine learning models, GenAI tools & live automation demos",
    description:
      "Showcase cutting-edge projects leveraging Generative AI, Computer Vision, Natural Language Processing, smart automation, and blockchain solutions.",
    highlights: [
      "Live inferencing and interactive AI model stations",
      "Demos of LLM agents, image synthesis, and smart diagnostics",
      "Direct interactions with visiting research mentors",
    ],
    day: "Day 1 (23 Oct)",
    time: "10:00 AM – 02:30 PM",
    venue: "AI & Data Science Hub, Block A",
    teamSize: "1 to 3 Members",
    entryFee: "Free Registration",
    prizes: {
      first: "Exciting Prizes + AI Pioneer Award",
      second: "Exciting Prizes + Pro API Subscriptions",
      description: "Exciting prizes & incubation support for top innovative projects",
    },
    rules: [
      "Models must demonstrate real-time output or explainable architecture.",
      "Originality of prompt engineering / fine-tuning dataset is required.",
    ],
    coordinator: {
      name: "Dr. Neha Agarwal",
      role: "Head, AI Research Cell",
    },
    iconName: "Cpu",
  },

  // ==================== SCIENCE & INNOVATION ====================
  {
    id: "science-models-and-inventions",
    title: "Science Projects & Creative Inventions",
    category: "science",
    categoryLabel: "Science & Innovation",
    tagline: "Explore • Experiment • Innovate — Simple solutions to everyday problems",
    description:
      "Demonstrate ingenious scientific models, experimental setups, and practical inventions that tackle real-world challenges with scientific precision.",
    highlights: [
      "Live scientific experiments with interactive visitor explanations",
      "Judged on scientific rigor, practical utility, and ingenuity",
      "Special category for school & junior college innovators",
    ],
    day: "Day 1 (23 Oct)",
    time: "09:30 AM – 03:00 PM",
    venue: "Science Exhibition Pavilion, Hall 1",
    teamSize: "1 to 4 Members",
    entryFee: "Free Registration",
    prizes: {
      first: "Exciting Prizes + Young Scientist Trophy",
      second: "Exciting Prizes + Lab Kit",
      third: "Exciting Prizes + Certificate",
      description: "Exciting prizes, merit certificates, and institutional honors",
    },
    rules: [
      "Hazardous chemicals or open flames require prior approval from safety committee.",
      "A 3-minute project pitch must be ready for visiting judges.",
    ],
    coordinator: {
      name: "Prof. R. C. Sharma",
      role: "Dean of Sciences",
      contact: "+91 94142 33451",
    },
    iconName: "Microscope",
    featured: true,
  },
  {
    id: "green-innovation-sustainability",
    title: "Green Innovation & Sustainable Solutions",
    category: "science",
    categoryLabel: "Science & Innovation",
    tagline: "Eco-friendly ideas, recycling, renewable energy & water conservation",
    description:
      "Dedicated showcase for environmental engineering, solar and renewable energy prototypes, zero-waste recycling methods, and smart agricultural sustainability.",
    highlights: [
      "Focus on Shekhawati region environmental & water conservation solutions",
      "Working prototypes of low-cost clean energy devices",
      "Certificate of Environmental Excellence awarded to top solutions",
    ],
    day: "Day 1 (23 Oct)",
    time: "10:00 AM – 03:00 PM",
    venue: "Green Energy Open Arena",
    teamSize: "1 to 4 Members",
    entryFee: "Free Registration",
    prizes: {
      first: "Exciting Prizes + Eco-Innovator Trophy",
      second: "Exciting Prizes + Green Kit",
      description: "Exciting prizes + college implementation pilot support",
    },
    rules: [
      "Focus on verifiable ecological impact and low carbon footprint.",
      "Prototypes using recycled/upcycled materials receive bonus score points.",
    ],
    coordinator: {
      name: "Dr. Sunita Pareek",
      role: "Environmental Sciences Faculty",
    },
    iconName: "Leaf",
  },

  // ==================== OPEN MIC ====================
  {
    id: "open-mic-championship",
    title: "Open Mic: Public Speaking & Performance Stage",
    category: "openmic",
    categoryLabel: "Open Mic",
    tagline: "Speak Your Mind, Shape Your Future • Express • Share • Inspire",
    description:
      "The grand stage for spoken word artists, poets, stand-up comics, singers, and acoustic musicians. Mesmerize the college audience under professional stage lighting and acoustic sound.",
    highlights: [
      "Five sub-genres: Poetry, Solo/Group Music, Storytelling, Stand-Up Comedy, Speech",
      "Exciting prizes for Top 3 Performers",
      "Certificates of Artistic Merit for EVERY participant",
      "Guest panel of faculty and celebrated guest artists",
    ],
    day: "Day 2 (24 Oct)",
    time: "10:00 AM – 02:30 PM",
    venue: "Main Amphitheatre / Central Cultural Auditorium",
    teamSize: "Solo or Duet (1-2 Artists)",
    entryFee: "Free Entry — Open to all students",
    prizes: {
      first: "Exciting Prizes + Golden Mic Trophy",
      second: "Exciting Prizes + Silver Mic Award",
      third: "Exciting Prizes + Bronze Mic Award",
      description: "Exciting prizes for Top 3 performers + Certificates for all participants",
    },
    rules: [
      "Each artist gets a strict 4 to 5 minutes performance slot.",
      "Content must be respectful; vulgarity, hate speech, or defaming content is strictly barred.",
      "Acoustic instruments and backing tracks (on USB) are welcomed.",
      "Pre-registration is advised as slots are limited to 35 performers.",
    ],
    coordinator: {
      name: "Anjali Sharma & Kunal Joshi",
      role: "Cultural Committee Leads",
      contact: "+91 96024 88712",
    },
    iconName: "Mic2",
    featured: true,
  },

  // ==================== CONTENT CREATORS & INFLUENCERS ====================
  {
    id: "content-creators-meetup",
    title: "Content Creators & Influencers Meetup",
    category: "content",
    categoryLabel: "Content Creators",
    tagline: "Create • Influence • Inspire — Reels, Podcasts & Digital Trends",
    description:
      "A power-packed hub for digital storytellers, YouTubers, podcasters, visual designers, and vloggers to collaborate, network, and master growth hacks.",
    highlights: [
      "Live Reels & Podcast recording jam station with studio gear",
      "Masterclass on monetization, viral hooks, and digital brand growth",
      "Portfolio review & feedback from verified regional creators",
      "Creator collaboration lounge for cross-channel content shoots",
    ],
    day: "Day 2 (24 Oct)",
    time: "11:00 AM – 03:00 PM",
    venue: "Media Studio & Audio-Visual Hall",
    teamSize: "Individual / Creator Duos",
    entryFee: "Free Entry",
    prizes: {
      first: "Exciting Prizes + Creator of the Year Trophy",
      second: "Exciting Prizes + Professional Vlogging Kit",
      description: "Best Reel / Short Film created during the fest wins exciting prizes & awards",
    },
    rules: [
      "Contestants in the 'Best Fest Reel' category must tag @sobhasariagroup and use #SkillExpo3.",
      "Content must be original and shot within the campus during fest days.",
    ],
    coordinator: {
      name: "Deepak Saini",
      role: "Social Media & Media Production Lead",
      contact: "+91 91167 44321",
    },
    iconName: "Video",
    featured: true,
  },
  {
    id: "photography-and-visual-graphics",
    title: "Creative Photography & Digital Design Expo",
    category: "content",
    categoryLabel: "Content Creators",
    tagline: "Frames, stories, vectors & visual graphics showcase",
    description:
      "Exhibition of portrait, nature, street, and creative photography alongside digital illustrations, 3D renders, vector art, and brand identity designs.",
    highlights: [
      "Curated physical photo gallery walk in Main Art Corridor",
      "Visitor vote counter for 'People's Choice Frame'",
      "Digital display screens for motion graphics & illustrations",
    ],
    day: "Day 1 (23 Oct)",
    time: "09:30 AM – 03:00 PM",
    venue: "Sobhasaria Art Corridor, 1st Floor",
    teamSize: "Individual (1 Artist)",
    entryFee: "Free Registration",
    prizes: {
      first: "Exciting Prizes + Master Lens Trophy",
      second: "Exciting Prizes + Photography Accessories",
      description: "Exciting prizes and digital framing prints",
    },
    rules: [
      "Original EXIF metadata must be verifiable upon request.",
      "Prints will be mounted by the organizers if submitted 24 hours prior.",
    ],
    coordinator: {
      name: "Tanya Choudhary",
      role: "Visual Arts Coordinator",
    },
    iconName: "Camera",
  },

  // ==================== STARTUP & BUSINESS ====================
  {
    id: "startup-and-business-pitch",
    title: "Startup & Business Ideas Arena",
    category: "startup",
    categoryLabel: "Startup & Business",
    tagline: "Think × Analyse × Compete × Grow — From Idea to Market",
    description:
      "Present your venture, MVP, innovative consumer product, or digital service offering in front of angel mentors, local business leaders, and incubation advisors.",
    highlights: [
      "Dedicated booth space to display participant-made products & services",
      "10-minute investor-format pitch deck presentation",
      "Seed incubation advisory support and institutional mentor connect",
    ],
    day: "Both Days (23-24 Oct)",
    time: "10:00 AM – 02:30 PM",
    venue: "Entrepreneurship & Incubation Center (EDC)",
    teamSize: "1 to 4 Members",
    entryFee: "Free Registration",
    prizes: {
      first: "Exciting Prizes + Best Startup Pitch Trophy",
      second: "Exciting Prizes + Business Mentorship Package",
      third: "Exciting Prizes + Certificate",
      description: "Exciting prizes, seed grants & Free incubation workspace support",
    },
    rules: [
      "Must have a pitch presentation (max 10 slides) or working MVP/prototype.",
      "Business ideas across tech, agritech, consumer goods, and services are eligible.",
    ],
    coordinator: {
      name: "Dr. Manish Mathur",
      role: "Incubation Cell In-charge",
      contact: "+91 94133 77890",
    },
    iconName: "TrendingUp",
    featured: true,
  },

  // ==================== ART & CRAFT ====================
  {
    id: "art-and-craft-exhibition",
    title: "Art & Craft: Imagine • Create • Inspire",
    category: "art",
    categoryLabel: "Art & Craft",
    tagline: "Handicrafts, live painting, origami & upcycling showcase",
    description:
      "Celebrate creativity with live painting, watercolours, sketches, clay sculptures, handmade crafts, fabric arts, and sustainable waste-to-art upcycling displays.",
    highlights: [
      "Live creation tables and interactive art stations for visitors",
      "Upcycling Showcase: Turning scrap and e-waste into aesthetic masterpieces",
      "Gallery Walk & Student Art Market — sell your artwork directly to visitors",
    ],
    day: "Day 1 (23 Oct)",
    time: "09:30 AM – 03:00 PM",
    venue: "Campus Central Lawn & Art Pavilion",
    teamSize: "Individual or Duo",
    entryFee: "Free Registration",
    prizes: {
      first: "Exciting Prizes + Master Artisan Trophy",
      second: "Exciting Prizes + Premium Art Supply Kit",
      third: "Exciting Prizes + Certificate",
      description: "Exciting prizes, art kits, trophies, and exhibition honours",
    },
    rules: [
      "All craft and painting artwork must be original creations.",
      "Live sketch artists will be allotted 90 minutes on-the-spot.",
    ],
    coordinator: {
      name: "Ms. Shalini Gupta",
      role: "Fine Arts Convenor",
    },
    iconName: "Palette",
  },

  // ==================== FOOD & FUN ====================
  {
    id: "food-and-culinary-craft",
    title: "Food & Fun: Taste • Play • Enjoy",
    category: "food",
    categoryLabel: "Food & Fun",
    tagline: "Live cooking demos, mocktails, plating design & student stalls",
    description:
      "An aromatic experience blending culinary creativity, artisanal mocktails, food styling, and 'The Student Stall Loop' simulating real-time food business operations.",
    highlights: [
      "Live Cooking & Baking demonstrations and bake-off challenges",
      "Mixology bar: craft refreshing non-alcoholic mocktails & fusion street food",
      "The Student Stall Loop: practical learning of sourcing, pricing, and retail sales",
      "Fun food challenges, blind tasting games, and interactive food quizzes",
    ],
    day: "Both Days (23-24 Oct)",
    time: "10:30 AM – 03:00 PM",
    venue: "Sobhasaria Food Boulevard & Lawn Cafeteria",
    teamSize: "2 to 4 Members (for food stalls) / Individual for cooking",
    entryFee: "Free for showcase; stall token for food stalls",
    prizes: {
      first: "Exciting Prizes + Master Chef Apron & Trophy",
      second: "Exciting Prizes + Culinary Hamper",
      third: "Exciting Prizes + Certificate",
      description: "Exciting prizes for Best Taste, Most Creative Plating, and Top Revenue Stall",
    },
    rules: [
      "Strict food hygiene, gloves, and cleanliness standards must be observed.",
      "Induction stoves and safe electrical appliances only; open fire prohibited.",
    ],
    coordinator: {
      name: "Chef Rajat Soni",
      role: "Hospitality & Food Zone Head",
      contact: "+91 98292 66543",
    },
    iconName: "Utensils",
    featured: true,
  },

  // ==================== LEGAL AID CLINIC ====================
  {
    id: "legal-aid-clinic-zone",
    title: "Legal Aid Clinic: Justice For All • Know Your Rights",
    category: "legalaid",
    categoryLabel: "Legal Aid Clinic",
    tagline: "Free student and public consultations all day",
    description:
      "A social initiative zone empowering students and visitors with essential legal literacy, cyber law safeguards, consumer grievance redressal, and civic documentation support.",
    highlights: [
      "Legal Awareness Desk: Fundamental rights, basic contracts, and everyday laws",
      "Cyber Law & Data Security: Guidance on online fraud, identity theft, and IT regulations",
      "Consumer Rights: How to file claims, seek refunds, and tackle misleading ads",
      "Civic Documentation: Affidavits, tenancy norms, and civil paperwork clarity",
    ],
    day: "Day 1 (23 Oct)",
    time: "09:30 AM – 03:00 PM",
    venue: "Department of Law & Legal Studies Wing",
    teamSize: "Open Desk (Consultants + Student Volunteers)",
    entryFee: "100% Free Public Service",
    prizes: {
      description: "Certificates of Legal Social Service for student advocates & best case study presentations",
    },
    rules: [
      "All consultations provided in the clinic are pro-bono educational guidance.",
      "Visitors can submit queries confidentially at the intake counter.",
    ],
    coordinator: {
      name: "Adv. Sunita Khandelwal",
      role: "Legal Clinic Mentor & Faculty In-charge",
      contact: "+91 94144 55112",
    },
    iconName: "Scale",
  },

  // ==================== BRAND CONNECT ZONE ====================
  {
    id: "brand-connect-expo",
    title: "Brand Connect Zone: Showcase • Promote • Connect",
    category: "brand",
    categoryLabel: "Brand Connect",
    tagline: "Premium business networking, product sampling & visitor engagement",
    description:
      "A dedicated business-to-consumer and business-to-student platform where regional and national brands, startups, and service providers interact with thousands of visitors.",
    highlights: [
      "Dedicated corporate stalls and experiential brand booths",
      "Direct product sampling, interactive demos, and customer onboarding",
      "Business networking with visiting founders, faculty, and future recruits",
      "Promotional stage games, giveaways, and visitor contests",
    ],
    day: "Both Days (23-24 Oct)",
    time: "09:00 AM – 03:00 PM",
    venue: "Main Plaza & Brand Arena",
    teamSize: "Corporate / Brand Teams",
    entryFee: "Exhibition Stall Registration",
    prizes: {
      description: "Best Brand Engagement Award & Campus Mementos",
    },
    rules: [
      "Exhibitors must set up displays prior to 8:30 AM on Day 1.",
      "Branded collaterals and eco-friendly promotional materials recommended.",
    ],
    coordinator: {
      name: "Rameshwar Choudhary",
      role: "Corporate Relations Officer",
      contact: "+91 94140 33888",
    },
    iconName: "Briefcase",
  },
];
