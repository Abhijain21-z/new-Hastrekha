"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ZodiacWheel, PalmSVG, StarField } from "@/components/zodiac-icons";

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
        <div className="mb-10 flex items-center justify-center gap-8 lg:gap-16">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-slate-800 shadow-lg animate-glow-ring lg:h-32 lg:w-32 flex-shrink-0 animate-float" style={{ animationDelay: "0s" }}>
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
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-slate-800 shadow-lg animate-glow-ring lg:h-32 lg:w-32 flex-shrink-0 animate-float" style={{ animationDelay: "1s" }}>
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

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span className="text-xs font-medium text-primary">
                {t("hero.badge")}
              </span>
            </div>

            {/* Bilingual title */}
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance block">{t("hero.title.en")}</span>
              <span className="text-balance mt-2 block text-3xl text-primary md:text-4xl lg:text-5xl">
                {t("hero.title.hi")}
              </span>
            </h1>

            {/* Bilingual subtitle */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {t("hero.subtitle.en")}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground/80 italic">
              {t("hero.subtitle.hi")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/palm-reading">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
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
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
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

          {/* Right: Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Glow behind palm */}
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-3xl" />
              <div className="relative h-80 w-64 animate-float lg:h-96 lg:w-80 overflow-hidden rounded-lg border-2 border-slate-800 shadow-xl">
                <Image
                  src="/palm-diagram.jpg"
                  alt="Palm reading diagram showing heart line, head line, life line, and fate line"
                  fill
                  sizes="(max-width: 1024px) 256px, 320px"
                  className="object-contain p-2"
                  priority
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-8 animate-float rounded-xl border-2 border-slate-800 bg-card/95 px-4 py-3 shadow-lg backdrop-blur-sm" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50">
                    <span className="text-xs text-red-500" role="img" aria-label="Heart line">{"♥"}</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Heart Line / <span className="text-primary">{"\u0939\u0943\u0926\u092f \u0930\u0947\u0916\u093e"}</span></p>
                    <p className="text-[10px] text-muted-foreground">Deep & Clear</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-20 animate-float rounded-xl border-2 border-slate-800 bg-card/95 px-4 py-3 shadow-lg backdrop-blur-sm" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50">
                    <span className="text-xs text-amber-500" role="img" aria-label="Star">{"★"}</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Fate Line / <span className="text-accent">{"\u092d\u093e\u0917\u094d\u092f \u0930\u0947\u0916\u093e"}</span></p>
                    <p className="text-[10px] text-muted-foreground">Strong Path</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
