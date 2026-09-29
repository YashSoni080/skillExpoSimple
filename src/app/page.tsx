import Hero from "@/components/Hero";
import StatsCounters from "@/components/StatsCounters";
import WhatIsExpo from "@/components/WhatIsExpo";
import PrizeHighlights from "@/components/PrizeHighlights";
import SponsorsMarquee from "@/components/SponsorsMarquee";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Live Countdown */}
      <Hero />

      {/* Animated Numerical Counters */}
      <StatsCounters />

      {/* 9 Live Zones Section */}
      <WhatIsExpo />

      {/* Prize Pool & Trophy Highlights */}
      <PrizeHighlights />

      {/* Sponsors Infinite Marquee & Brochure Download Banner */}
      <SponsorsMarquee />
    </div>
  );
}
