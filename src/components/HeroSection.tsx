"use client";

import {
  ArrowRight,
  Sparkles,
  Zap,
  Check,
  Play,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroProps {
  badge?: {
    text: string;
    imageSrc?: string;
  };
  titleLines?: string[];
  highlightedWords?: string[];
  strikethroughWords?: string[];
  strikethroughWordsNormal?: string[];
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function HeroSection({
  badge = {
    text: "Créer un site web vraiment unique",
    imageSrc: "/logo-bulle.png",
  },
  titleLines = [
    "Transform Your Business",
    "with Intelligent",
    "Automation Solutions",
  ],
  highlightedWords = ["Transform", "Intelligent", "Automation"],
  strikethroughWords = ["Legacy", "Outdated", "Manual"],
  strikethroughWordsNormal = [],
  description = "Streamline operations, boost productivity, and drive growth with our cutting-edge platform. Join industry leaders who have already transformed their workflows.",
  primaryCTA = {
    text: "Start Free Trial",
    href: "/signup",
    icon: <Sparkles className="h-5 w-5" />,
  },
  secondaryCTA = {
    text: "Watch Demo",
    href: "/demo",
  },
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden ">
      {/* Subtle Radial Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large background glow */}
        <div className="absolute -top-1/2 -left-1/4 h-[800px] w-[800px] animate-pulse rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-tr from-pink-500/10 via-orange-500/10 to-transparent blur-3xl" />

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Main content container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-24">
        {/* Premium Badge with Image */}
        <div
          className={cn(
            "flex justify-center mb-12 lg:mb-16 transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-full bg-[#6FE3B1] blur-sm group-hover:blur-sm transition-all duration-500" />

            {/* Main badge */}
            <div className="relative flex items-center gap-3 rounded-full bg-gradient-to-r  from-white to-gray-50 px-6 py-3 shadow-2xl shadow-blue-500/10 border border-white/50 backdrop-blur-sm">
              {/* Image with glow */}
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 blur-md" />
                <div className="relative flex h-10 w-10 items-center justify-center py-8">
                  {/* Fallback icon if no image */}
                  {badge.imageSrc ? (
                    <div className="relative h-14 w-14 justify-center items-center flex">
                      <div className="absolute inset-0 rounded-full bg-white/20" />
                      <Image
                        src={badge.imageSrc}
                        alt="Badge icon"
                        width={80}
                        height={80}
                        className="relative drop-shadow-lg"
                      />
                    </div>
                  ) : (
                    <Award className="h-5 w-5 text-white" />
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold tracking-tight text-gray-900">
                  CRÉE UN SITE WEB <span className="underline">VRAIMENT</span>{" "}
                  UNIQUE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Title with Multiple Lines */}
        <div
          className={cn(
            "text-center mb-8 lg:mb-12 transition-all duration-700 delay-100",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight space-y-2 lg:space-y-4">
            {titleLines.map((line, lineIndex) => (
              <div key={lineIndex} className="relative">
                <span className="block bg-gradient-to-br from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  {line.split(" ").map((word, wordIndex) => {
                    const fullWord = line.split(" ")[wordIndex];
                    const isHighlighted = highlightedWords.some((hw) =>
                      fullWord.toLowerCase().includes(hw.toLowerCase()),
                    );
                    const isStrikethrough = strikethroughWords.some((sw) =>
                      fullWord.toLowerCase().includes(sw.toLowerCase()),
                    );

                    const isStrikethroughNormal = strikethroughWordsNormal.some(
                      (sw) => fullWord.toLowerCase().includes(sw.toLowerCase()),
                    );

                    return (
                      <span
                        key={wordIndex}
                        className={cn(
                          "inline-block mr-2 lg:mr-4",
                          isHighlighted && "relative",
                        )}
                      >
                        {isStrikethrough ? (
                          <span className="relative">
                            <span className="text-[#6FE3B1]">{word}</span>
                            <span className="absolute top-1/2 left-0 right-0 h-[5px] bg-[#1C1C1C]" />
                          </span>
                        ) : isHighlighted ? (
                          <span className="relative">
                            <span className="bg-gradient-to-r text-[#6FE3B1]">
                              {word}
                            </span>
                          </span>
                        ) : isStrikethroughNormal ? (
                          <span className="relative">
                            <span className="text-white">{word}</span>
                            <span className="absolute top-1/2 left-0 right-0 h-[5px] bg-[#1C1C1C]" />
                          </span>
                        ) : (
                          word
                        )}
                      </span>
                    );
                  })}
                </span>
              </div>
            ))}
          </h1>
        </div>

        {/* Decorative Element - Floating */}
        <div className="absolute left-10 top-1/3 hidden lg:block opacity-30">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-lg" />
            <div className="relative h-32 w-32 rounded-full border border-white/10 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          </div>
        </div>

        <div className="absolute right-10 top-1/2 hidden lg:block opacity-30">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 blur-lg" />
            <div className="relative h-24 w-24 rounded-full border border-white/10 bg-gradient-to-br from-pink-500/5 to-orange-500/5" />
          </div>
        </div>

        {/* Description Text */}
        <div
          className={cn(
            "max-w-3xl mx-auto mb-12 lg:mb-16 transition-all duration-700 delay-200",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300/80 text-center leading-relaxed font-semibold px-4">
            {description}
          </p>
        </div>

        {/* CTA Buttons Section */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 relative transition-all duration-700 delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          {/* Primary CTA Button */}
          <Button
            size="lg"
            className="group relative overflow-hidden bg-[#6FE3B1] text-black  hover:shadow-2xl hover:shadow-blue-500/30 px-8 py-7 text-lg font-semibold rounded-xl border-0 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href={primaryCTA.href}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="font-extrabold absolute -inset-2 rounded-full bg-white/20 blur-sm group-hover:blur-md transition-all duration-300" />
                  {primaryCTA.icon || <Zap className="h-12 w-12" />}
                </div>
                <span className="relative z-10 font-extrabold text-2xl">
                  {primaryCTA.text}
                </span>
              </div>

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/10 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </a>
          </Button>

          <Image
            src="/Un_Ptit_Click.png"
            alt="Un Ptit Click"
            width={170}
            height={170}
            className="hidden sm:block absolute left-70 top-12"
          />

          {/* Secondary CTA Button */}
          <Button
            size="lg"
            variant="outline"
            className="group px-8 py-7 text-lg font-semibold rounded-xl border-2 border-[#6FE3B1] bg-transparent text-[#6FE3B1] text-xl hover:bg-blue-500/10 hover:border-blue-400/50 hover:text-white transition-all duration-300"
            asChild
          >
            <a href={secondaryCTA.href} className="flex items-center gap-2">
              <span>{secondaryCTA.text}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
      </div>

      {/* Additional Radial Glow Layers */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-gradient-to-t from-blue-500/5 via-purple-500/5 to-transparent blur-3xl" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <div className="h-8 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-transparent" />
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
