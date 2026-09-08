"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ZodiacWheel, PalmSVG, StarField } from "@/components/zodiac-icons";
import { InlinePalmForm } from "@/components/home/inline-palm-form";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 lg:py-28">
      {/* Background effects */}
      <StarField className="absolute inset-0" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ZodiacWheel className="h-[600px] w-[600px] animate-spin-slow opacity-10" />
      </div>
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Deity images row at top */}
        <div className="mb-10 flex items-center justify-center gap-4 sm:gap-8 lg:gap-14">
          <div className="relative h-28 w-24 overflow-hidden rounded-xl border border-primary/70 bg-card shadow-[0_0_28px_hsl(var(--primary)/0.2)] sm:h-36 sm:w-32 lg:h-44 lg:w-40 flex-shrink-0 animate-float" style={{ animationDelay: "0s" }}>
            <Image
              src="/lord-ganesha.jpg"
              alt="Shri Ganesh Ji - Lord of wisdom and new beginnings"
              fill
              priority
              sizes="(max-width: 1024px) 96px, 128px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-sm font-semibold text-primary lg:text-base">
              {"|| \u0936\u094d\u0930\u0940 \u0917\u0923\u0947\u0936\u093e\u092f \u0928\u092e\u0903 ||"}
            </span>
            <span className="text-[11px] text-muted-foreground lg:text-xs">
              {"|| \u0913\u0902 \u0938\u0942\u0930\u094d\u092f\u093e\u092f \u0928\u092e\u0903 ||"}
            </span>
          </div>
          <div className="relative h-28 w-24 overflow-hidden rounded-xl border border-primary/70 bg-card shadow-[0_0_28px_hsl(var(--primary)/0.2)] sm:h-36 sm:w-32 lg:h-44 lg:w-40 flex-shrink-0 animate-float" style={{ animationDelay: "1s" }}>
            <Image
              src="/lord-surya.jpg"
              alt="Surya Dev - Lord Sun, ruler of planets and astrology"
              fill
              priority
              sizes="(max-width: 1024px) 96px, 128px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">
              {t("hero.badge")}
            </span>
          </div>

          {/* Bilingual title */}
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance block">Your Palm. Your Patterns. Your AI Insight.</span>
            <span className="mt-3 block text-balance text-2xl text-primary md:text-3xl lg:text-4xl">
              आपकी हथेली, आपके संकेत, आपकी समझ
            </span>
          </h1>

          {/* Inline Palm Form - Right Below Title */}
          <div className="mt-8 mb-10">
            <InlinePalmForm />
          </div>

          {/* Bilingual subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Upload a clear photo of your palm and explore an easy-to-understand reading of your major palm lines with AI.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground/80 italic">
            अपनी हथेली की स्पष्ट तस्वीर अपलोड करें और AI के साथ प्रमुख रेखाओं को सरल भाषा में समझें।
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary/30 text-foreground hover:bg-primary/10 sm:w-auto bg-transparent"
              >
                <Play className="mr-2 h-4 w-4" />
                {t("hero.learnMore")}
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              { value: "50K+", label: "Readings Done", labelHi: "\u092a\u0920\u0928 \u092a\u0942\u0930\u0947" },
              { value: "4.8/5", label: "User Rating", labelHi: "\u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e \u0930\u0947\u091f\u093f\u0902\u0917" },
              { value: "12+", label: "Report Sections", labelHi: "\u0930\u093f\u092a\u094b\u0930\u094d\u091f \u0905\u0928\u0941\u092d\u093e\u0917" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
                <div className="text-[10px] text-muted-foreground/70">{stat.labelHi}</div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
