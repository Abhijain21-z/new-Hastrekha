"use client";

import { LanguageProvider } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollytellSection } from "@/components/scrollytell-section";
import { HeroSection } from "@/components/home/hero-section";
import { NameSection } from "@/components/home/name-section";
import { DashboardSection } from "@/components/home/dashboard-section";
import { InlinePalmForm } from "@/components/home/inline-palm-form";
import { FeaturesSection } from "@/components/home/features-section";
import { CTASection } from "@/components/home/cta-section";
import { BlogCarousel } from "@/components/home/blog-carousel";
import { BlogHeadlineCarousel } from "@/components/home/blog-headline-carousel";

export default function HomePage() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <BlogHeadlineCarousel />
      <main>
        <ScrollytellSection
          id="hero"
          enableParallax={true}
          enableCinematic={true}
          parallaxBackground={true}
        >
          <HeroSection />
        </ScrollytellSection>

        <ScrollytellSection
          id="name-section"
          enableReveal={true}
          enableParallax={true}
          parallaxBackground={true}
        >
          <NameSection />
        </ScrollytellSection>

        <ScrollytellSection
          id="dashboard"
          enableCinematic={true}
          parallaxBackground={true}
        >
          <DashboardSection />
        </ScrollytellSection>

        {/* Inline Palm Reading Form */}
        <ScrollytellSection
          id="palm-form"
          className="py-16 px-4 lg:px-8 lg:py-24 bg-gradient-to-b from-card/50 to-background"
          enableParallax={true}
          enableCinematic={true}
        >
          <div className="container mx-auto">
            <InlinePalmForm />
          </div>
        </ScrollytellSection>

        <ScrollytellSection
          id="features"
          enableParallax={true}
          enableCinematic={true}
          parallaxBackground={true}
        >
          <FeaturesSection />
        </ScrollytellSection>

        <ScrollytellSection
          id="cta"
          enableCinematic={true}
          enableParallax={true}
        >
          <CTASection />
        </ScrollytellSection>

        {/* Blog Carousel Section */}
        <ScrollytellSection
          id="blogs"
          enableParallax={true}
          enableReveal={true}
        >
          <BlogCarousel />
        </ScrollytellSection>
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
