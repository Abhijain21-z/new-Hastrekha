"use client";

import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { TrustSection } from "@/components/home/trust-section";
import { SEOContentSection } from "@/components/home/seo-content-section";
import { FAQSection, faqJsonLdSchema } from "@/components/home/faq-section";
import { SiteFooter } from "@/components/site-footer";
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
    <>
      <JsonLd data={faqJsonLdSchema} />
      <SiteHeader />
      <BlogHeadlineCarousel />
      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <TrustSection />

        <section id="name-section">
          <NameSection />
        </section>

        <section id="dashboard">
          <DashboardSection />
        </section>

        <section id="palm-form" className="py-16 px-4 lg:px-8 lg:py-24 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto">
            <InlinePalmForm />
          </div>
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <SEOContentSection />
        <FAQSection />

        <section id="cta">
          <CTASection />
        </section>

        <section id="blogs">
          <BlogCarousel />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
