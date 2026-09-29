"use client";

import React from "react";
import {
  Gamepad2,
  Flame,
  Crosshair,
  Code2,
  Bot,
  Cpu,
  Microscope,
  Leaf,
  Mic2,
  Video,
  Camera,
  TrendingUp,
  Palette,
  Utensils,
  Scale,
  Briefcase,
  Sparkles,
  Trophy,
  Award,
  LucideProps,
} from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  switch (name) {
    case "Gamepad2":
      return <Gamepad2 {...props} />;
    case "Flame":
      return <Flame {...props} />;
    case "Crosshair":
      return <Crosshair {...props} />;
    case "Code2":
      return <Code2 {...props} />;
    case "Bot":
      return <Bot {...props} />;
    case "Cpu":
      return <Cpu {...props} />;
    case "Microscope":
      return <Microscope {...props} />;
    case "Leaf":
      return <Leaf {...props} />;
    case "Mic2":
      return <Mic2 {...props} />;
    case "Video":
      return <Video {...props} />;
    case "Camera":
      return <Camera {...props} />;
    case "TrendingUp":
      return <TrendingUp {...props} />;
    case "Palette":
      return <Palette {...props} />;
    case "Utensils":
      return <Utensils {...props} />;
    case "Scale":
      return <Scale {...props} />;
    case "Briefcase":
      return <Briefcase {...props} />;
    case "Trophy":
      return <Trophy {...props} />;
    case "Award":
      return <Award {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}
