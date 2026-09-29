export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://skillexpo.sobhasaria.edu.in/#website",
        "url": "https://skillexpo.sobhasaria.edu.in",
        "name": "Skill Expo",
        "alternateName": [
          "Skill Expo 3.0",
          "Skill Expo Phase 3.0",
          "Sobhasaria Skill Expo",
          "Skill Expo Sobhasaria",
          "Skill Expo Sikar",
          "Skill Expo 2026"
        ],
        "description":
          "Official website for Skill Expo Phase 3.0 — Rajasthan's premier inter-college skill competition featuring 9 live interactive zones across eSports, Tech, Science, Open Mic, Startups, and Culinary arts on 23-24 October 2026.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://sobhasaria.edu.in/#organization",
        "name": "Sobhasaria Group of Institutions",
        "alternateName": "Sobhasaria Sikar",
        "url": "https://sobhasaria.edu.in",
        "logo": "https://skillexpo.sobhasaria.edu.in/images/sobhasaria-hero-logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NH-52, Gokulpura",
          "addressLocality": "Sikar",
          "addressRegion": "Rajasthan",
          "postalCode": "332001",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://instagram.com/sobhasariagroup",
          "https://youtube.com/@sobhasariagroup",
          "https://facebook.com/sobhasaria",
          "https://linkedin.com/school/sobhasaria-group-of-institutions"
        ]
      },
      {
        "@type": "Event",
        "@id": "https://skillexpo.sobhasaria.edu.in/#event",
        "name": "Skill Expo Phase 3.0",
        "alternateName": [
          "Skill Expo",
          "Skill Expo 2026",
          "Sobhasaria Skill Expo Phase 3.0"
        ],
        "description":
          "Rajasthan's premier inter-college skill competition and symposium featuring 9 interactive zones: BGMI eSports, Autonomous Robotics, Science Working Models, B-Plan Pitching, Open Mic, and Fine Arts.",
        "startDate": "2026-10-23T09:00:00+05:30",
        "endDate": "2026-10-24T18:00:00+05:30",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Sobhasaria Group of Institutions Campus",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "NH-52, Gokulpura",
            "addressLocality": "Sikar",
            "addressRegion": "Rajasthan",
            "postalCode": "332001",
            "addressCountry": "IN"
          }
        },
        "image": [
          "https://skillexpo.sobhasaria.edu.in/images/sobhasaria-hero-logo.png"
        ],
        "organizer": {
          "@type": "EducationalOrganization",
          "name": "Sobhasaria Group of Institutions",
          "url": "https://sobhasaria.edu.in"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://skillexpo.sobhasaria.edu.in/events",
          "price": "0",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-09-01T00:00:00+05:30"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
