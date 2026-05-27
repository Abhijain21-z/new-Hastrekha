"use client";

import { zodiacData } from "@/lib/zodiac-data";
import { ZodiacCard } from "@/components/zodiac/zodiac-card";
import { PageShell } from "@/components/page-shell";
import { StarField } from "@/components/zodiac-icons";

export default function ZodiacPage() {
  return (
    <PageShell>
      <div className="relative min-h-screen">
        {/* Background */}
        <StarField className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground lg:text-5xl mb-3">
              Zodiac Signs
            </h1>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              {"राशि / Rashi"}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Explore the 12 zodiac signs and discover the cosmic influence on your personality, 
              relationships, career, and destiny according to Vedic astrology.
            </p>
            <p className="mx-auto max-w-2xl text-muted-foreground text-base mt-2">
              {"बारह राशियों की खोज करें और अपने व्यक्तित्व, रिश्तों, करियर और भाग्य पर ब्रह्मांडीय प्रभाव की खोज करें।"}
            </p>
          </div>

          {/* Zodiac Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {zodiacData.map((sign) => (
              <ZodiacCard
                key={sign.id}
                id={sign.id}
                name_en={sign.name_en}
                name_hi={sign.name_hi}
                dates={sign.dates}
                image={sign.image}
              />
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-16 rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Understand Your Cosmic Path
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Each zodiac sign carries unique characteristics, strengths, and challenges. 
              By understanding your sign, you can align with the cosmic energies and make better life decisions.
              Combine your zodiac wisdom with our palm reading analysis for a complete astrological profile.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
