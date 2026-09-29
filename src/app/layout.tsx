import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://skillexpo.sobhasaria.edu.in"),
  title: "Skill Expo 3.0 | Sobhasaria Group of Institutions",
  description:
    "Official website for Skill Expo Phase 3.0 — Rajasthan's premier inter-college skill competition featuring 9 live interactive zones across eSports, Tech, Science, Open Mic, Startups, and Culinary arts on 23-24 October 2026.",
  keywords: [
    "Skill Expo 3.0",
    "Sobhasaria Group of Institutions",
    "Sobhasaria Sikar",
    "College Fest 2026",
    "BGMI Tournament Sikar",
    "Open Mic Competition Rajasthan",
    "Science Fair Sikar",
    "Sobhasaria Skill Expo",
    "Inter-college competition",
  ],
  authors: [{ name: "Sobhasaria Group of Institutions", url: "https://sobhasaria.edu.in" }],
  creator: "Sobhasaria Group of Institutions",
  openGraph: {
    title: "Skill Expo Phase 3.0 | Sobhasaria Group of Institutions",
    description:
      "Explore • Learn • Innovate | 9 Live Zones, Exciting Prizes, Trophies & Certificates, 23-24 October 2026 at Sobhasaria Campus, Sikar.",
    url: "https://skillexpo.sobhasaria.edu.in",
    siteName: "Skill Expo 3.0",
    images: [
      {
        url: "/images/sobhasaria-hero-logo.png",
        width: 1200,
        height: 630,
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
    images: ["/images/sobhasaria-hero-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans selection:bg-accent selection:text-background relative">
        {/* Custom Glowing Cursor for Desktop */}
        <CustomCursor />

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
