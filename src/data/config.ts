/**
 * Central Configuration for Skill Expo Phase 3.0
 * Sobhasaria Group of Institutions, Sikar, Rajasthan
 *
 * All editable constants, links, registration forms, and countdown targets live here.
 */

export const FEST_CONFIG = {
  name: "Skill Expo Phase 3.0",
  shortName: "Skill Expo 3.0",
  edition: "Phase 3.0",
  tagline: "Explore • Learn • Innovate | Action & Performance",
  subtitle: "Inter-College Mega Skill Exhibition & Championship",
  institution: {
    name: "Sobhasaria Group of Institutions",
    shortName: "Sobhasaria",
    city: "Sikar",
    state: "Rajasthan",
    established: 1999,
    address: "NH-52, Gokulpura, Sikar, Rajasthan 332001",
    googleMapsUrl: "https://maps.google.com/?q=Sobhasaria+Group+of+Institutions+Sikar+Rajasthan",
    logoPath: "/images/sobhasaria-logo.png",
  },
  festDates: {
    start: "2026-10-23T09:00:00+05:30",
    end: "2026-10-24T18:00:00+05:30",
    display: "23 - 24 October 2026",
    daysCount: 2,
    timings: "9:00 AM – 3:00 PM Daily",
  },
  /**
   * Live countdown target date
   * Specified in prompt as October 15, 2026 (Registration & Slot Closing Deadline)
   */
  countdownTarget: "2026-10-15T23:59:59+05:30",
  countdownLabel: "Registration Closes In",

  brochurePath: "/brochure.pdf",

  stats: [
    { value: 9, suffix: "+", label: "Live Interactive Zones", description: "From Esports to AI & Startups" },
    { value: 30, suffix: "+", label: "Competitions & Showcases", description: "Across Tech, Art, Science & Media" },
    { displayText: "Cool Rewards", label: "Best Exciting Prizes", description: "Exciting prizes for winners in each zone" },
    { displayText: "Trophies & Badges", label: "Certificates For All", description: "Expo Cup trophies & official merit certificates" },
  ],

  contact: {
    email: "skillexpo@secs.ac.in",
    phone: "6376974216",
    altPhone: "+91 63769 74216",
    venue: "Sobhasaria Campus Arena & Auditoriums, Sikar (Raj.)",
  },

  socials: {
    instagram: "https://instagram.com/sobhasariagroup",
    youtube: "https://youtube.com/@sobhasariagroup",
    facebook: "https://facebook.com/sobhasaria",
    linkedin: "https://linkedin.com/school/sobhasaria-group-of-institutions",
    twitter: "https://twitter.com/sobhasaria",
  },
};

/**
 * Registration Forms Configuration
 *
 * Critical instructions:
 * 1. eSports events -> https://forms.gle/Jha8mAqsN7FQfzzY9
 * 2. Open Mic events -> https://docs.google.com/forms/d/e/1FAIpQLSfFyu2UYaNy3aFkLIIkTmB8ZZzYvaDSQqijbk8ITSY1u2dX_w/viewform
 * 3. Everything else (Science, Tech, Content Creation, etc.) -> https://forms.gle/CbRLKiRXpGjkrQyX
 *
 * HOW TO OBTAIN AND UPDATE Google Forms 'entry.XXXXXXX' FIELD IDs:
 * -----------------------------------------------------------------
 * 1. Open your target Google Form in edit mode.
 * 2. Click the top-right three dots menu (⋮) next to 'Send'.
 * 3. Select 'Get pre-filled link'.
 * 4. Fill in a test dummy value like 'TEST_EVENT' in the "Event Name" question field.
 * 5. Click 'Get Link' at the bottom and copy the generated link.
 * 6. Inspect the copied link: it will look like:
 *    https://docs.google.com/forms/d/e/.../viewform?usp=pp_url&entry.123456789=TEST_EVENT
 * 7. Copy that exact number '123456789' and paste it into the respective entryId field below!
 */
export const REGISTRATION_FORMS = {
  esports: {
    baseUrl: "https://forms.gle/Jha8mAqsN7FQfzzY9",
    // Full target form URL if direct viewform is used:
    directUrl: "https://docs.google.com/forms/d/e/1FAIpQLScX_sample_esports/viewform",
    // TODO: Replace with the actual Google Forms entry ID for "Event Name" from 'Get pre-filled link'
    entryId: "entry.1847291032",
  },
  openMic: {
    baseUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfFyu2UYaNy3aFkLIIkTmB8ZZzYvaDSQqijbk8ITSY1u2dX_w/viewform",
    directUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfFyu2UYaNy3aFkLIIkTmB8ZZzYvaDSQqijbk8ITSY1u2dX_w/viewform",
    // TODO: Replace with the actual Google Forms entry ID for "Performance Category / Event Name"
    entryId: "entry.938174621",
  },
  general: {
    baseUrl: "https://forms.gle/CbRLKiRXpGjkrQyX",
    directUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe_sample_general/viewform",
    // TODO: Replace with the actual Google Forms entry ID for "Participating Event / Zone"
    entryId: "entry.492019482",
  },
};

/**
 * Helper to build the registration URL with prefilled event name
 * Follows Google Forms standard prefill URL format:
 * ${baseUrl}?usp=pp_url&entry.XXXXXXX=${encodeURIComponent(eventTitle)}
 */
export function getRegistrationUrl(category: string, eventTitle: string): string {
  let formConfig = REGISTRATION_FORMS.general;

  if (category === "esports") {
    formConfig = REGISTRATION_FORMS.esports;
  } else if (category === "openmic") {
    formConfig = REGISTRATION_FORMS.openMic;
  }

  const encodedTitle = encodeURIComponent(eventTitle);
  const separator = formConfig.baseUrl.includes("?") ? "&" : "?";

  return `${formConfig.baseUrl}${separator}usp=pp_url&${formConfig.entryId}=${encodedTitle}`;
}
