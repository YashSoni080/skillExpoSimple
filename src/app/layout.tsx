import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://skillexpo.sobhasaria.edu.in"),
  title: {
    default: "Skill Expo 3.0 | Sobhasaria Group of Institutions, Sikar",
    template: "%s | Skill Expo 3.0",
  },
  description:
    "Official portal for Skill Expo Phase 3.0 — Rajasthan's premier inter-college skill exhibition & championship featuring 9 live interactive zones across eSports, Tech, Science, Open Mic, Startups, and Culinary arts on 23-24 October 2026 at Sobhasaria Campus, Sikar.",
  applicationName: "Skill Expo",
  authors: [{ name: "Sobhasaria Group of Institutions", url: "https://sobhasaria.edu.in" }],
  creator: "Sobhasaria Group of Institutions",
  publisher: "Sobhasaria Group of Institutions",
  keywords: [
    "Skill Expo",
    "Skill Expo 3.0",
    "Skill Expo Phase 3.0",
    "Sobhasaria Skill Expo",
    "Skill Expo Sobhasaria",
    "Skill Expo Sikar",
    "Skill Expo Rajasthan",
    "Sobhasaria Group of Institutions",
    "Sobhasaria Sikar",
    "College Fest 2026",
    "Inter-college skill competition",
    "BGMI Tournament Sikar",
    "Open Mic Competition Rajasthan",
    "Robotics Competition Rajasthan",
    "Science Fair Sikar",
    "Rajasthan College Fest",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Skill Expo Phase 3.0 | Sobhasaria Group of Institutions, Sikar",
    description:
      "Explore • Learn • Innovate | 9 Live Zones, Exciting Prizes, Trophies & Certificates, 23-24 October 2026 at Sobhasaria Campus, Sikar.",
    url: "https://skillexpo.sobhasaria.edu.in",
    siteName: "Skill Expo",
    images: [
      {
        url: "/images/sobhasaria-default-logo.png",
        width: 1932,
        height: 447,
        alt: "Skill Expo Phase 3.0 - Sobhasaria Group of Institutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill Expo Phase 3.0 | Sobhasaria Sikar",
    description:
      "Join Rajasthan's largest inter-college talent symposium. 9 Live Zones, E-Sports Arena, Open Mic, Exciting Prizes & Cool Rewards.",
    images: ["/images/sobhasaria-default-logo.png"],
    creator: "@sobhasaria",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google4a700c5c70d60f77",
  },
  icons: {
    icon: "data:,",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans selection:bg-gray-900 selection:text-white relative">
        {/* Google Structured Data / JSON-LD */}
        <JsonLd />

        {/* Global Sticky Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
