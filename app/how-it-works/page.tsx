"use client";

import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { StarField } from "@/components/zodiac-icons";
import { Upload, ScanEye, Sparkles, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Palm Image",
    description:
      "Take a clear photo of your dominant hand or upload an existing image. Make sure your palm is well-lit and all major lines are visible for the most accurate analysis.",
  },
  {
    number: "02",
    icon: ScanEye,
    title: "Enter Birth Details",
    description:
      "Provide your date of birth, exact birth time, and birth location. These details help our AI calculate your birth chart and planetary positions for a comprehensive astrological analysis.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI Analysis",
    description:
      "Our advanced AI engine analyzes your palm lines using image recognition technology while simultaneously computing your Vedic birth chart. The system cross-references palmistry patterns with astrological data.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Receive Your Report",
    description:
      "Get a detailed, personalized destiny report covering 12+ life aspects including personality, career, marriage, health, lucky elements, and planetary influences. Share your report with friends and family.",
  },
];

const faqs = [
  {
    q: "Is the palm reading accurate?",
    a: "Our AI combines traditional Hastrekha Vigyan principles with modern image analysis. While predictions are based on ancient wisdom, they should be used for guidance and entertainment purposes.",
  },
  {
    q: "Do I need to show both hands?",
    a: "One clear image of your dominant hand is sufficient. Your dominant hand (right for right-handed, left for left-handed) shows your current life path and potential.",
  },
  {
    q: "Why do you need my birth details?",
    a: "Birth date, time, and location allow us to calculate your exact birth chart, including planetary positions and zodiac alignments that influence your destiny.",
  },
  {
    q: "How long does the analysis take?",
    a: "The AI analysis takes approximately one minute. During this time, the system analyzes your palm lines, calculates your birth chart, and generates a comprehensive report.",
  },
  {
    q: "Can I get a reading in Hindi?",
    a: "Yes! Our platform supports both English and Hindi. Simply select your preferred language from the top bar, and your entire report will be generated in that language.",
  },
  {
    q: "Is my data private?",
    a: "We take privacy seriously. Your palm images and birth details are processed securely and are not stored permanently. Please review our Privacy Policy for complete details.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <StarField className="absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            How HastRekhaAI Works
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Get your personalized destiny report in four simple steps. Our AI
            combines ancient palmistry and Vedic astrology with modern technology.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-card/50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex gap-6">
                  {/* Number line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="mt-2 h-full w-px bg-border" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <div className="text-xs font-bold text-primary">
                      STEP {step.number}
                    </div>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link href="/palm-reading">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Try It Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-border/50 bg-card p-5"
              >
                <h3 className="font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
