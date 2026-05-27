"use client";

import { LanguageProvider } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { NameSection } from "@/components/home/name-section";
import { DashboardSection } from "@/components/home/dashboard-section";
import { InlinePalmForm } from "@/components/home/inline-palm-form";
import { FeaturesSection } from "@/components/home/features-section";
import { CTASection } from "@/components/home/cta-section";
import { TodaysRashifal } from "@/components/home/todays-rashifal";

export default function HomePage() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <HeroSection />
        <NameSection />
        <DashboardSection />
        {/* Today's Rashifal Section */}
        <TodaysRashifal />
        {/* Inline Palm Reading Form */}
        <section className="py-16 px-4 lg:px-8 lg:py-24 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto">
            <InlinePalmForm />
          </div>
        </section>
        <FeaturesSection />
        <CTASection />
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
