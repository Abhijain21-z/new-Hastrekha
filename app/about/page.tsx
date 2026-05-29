"use client";

import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Hand, Eye, Brain, Sparkles, Zap, Users } from "lucide-react";
import { StarField } from "@/components/zodiac-icons";

const palmLines = [
  {
    name: "Heart Line",
    description:
      "Located at the top of the palm, the heart line represents your emotional life, relationships, and cardiac health. A deep, clear heart line indicates emotional stability and strong relationships. This line is crucial for understanding your emotional patterns and compatibility.",
    icon: Hand,
  },
  {
    name: "Head Line",
    description:
      "Running across the middle of the palm, the head line reveals your intellectual approach, communication style, and thirst for knowledge. A long, straight head line suggests a clear, focused thinker. It reflects how you process information and make decisions.",
    icon: Brain,
  },
  {
    name: "Life Line",
    description:
      "Curving around the base of the thumb, the life line represents vitality, life changes, and physical well-being. Contrary to popular belief, its length does not indicate lifespan. It shows the quality of your life and major events ahead.",
    icon: Eye,
  },
  {
    name: "Fate Line",
    description:
      "Running vertically up the center of the palm, the fate line indicates the degree to which your life is affected by external circumstances beyond your control. A strong fate line shows a life guided by destiny. It reveals your career path and major life transformations.",
    icon: Sparkles,
  },
];

const features = [
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze your palm image with precision",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Based on 5000+ years of palmistry tradition combined with modern science",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <StarField className="absolute inset-0" />
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            About Hastrekha Vigyan & HastRekhaAI
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            The ancient Indian science of palmistry has been practiced for thousands of years, offering insights into personality, destiny, and life events through the study of palm lines and mounts. We combine this wisdom with cutting-edge AI technology.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="bg-card/50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            A 5,000-Year-Old Science Meets Modern AI
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
            <article>
              <h3 className="mb-2 font-semibold text-foreground">The Origins of Hastrekha Vigyan</h3>
              <p>
                Hastrekha Vigyan, or the science of palm reading, traces its origins to ancient India, where sages and scholars studied the lines, shapes, and mounts of the human hand to decode the mysteries of fate. Mentioned in ancient Vedic texts and Upanishads, this practice was considered a sacred art that connected the physical body to cosmic energies and planetary influences.
              </p>
            </article>
            <article>
              <h3 className="mb-2 font-semibold text-foreground">Global Influence & Evolution</h3>
              <p>
                Over millennia, palmistry spread across civilizations, from ancient Greece and China to the Arab world and Europe. Each culture added its own interpretations, but the core principle remained the same: the lines of your hand are a map of your soul, shaped by planetary influences at birth and refined by your choices in life. This timeless wisdom has been validated by countless seekers.
              </p>
            </article>
            <article>
              <h3 className="mb-2 font-semibold text-foreground">Tradition Meets Technology</h3>
              <p>
                Today, modern AI technology allows us to analyze these ancient patterns with unprecedented accuracy and speed. HastRekhaAI combines centuries of traditional palmistry knowledge with advanced image recognition, machine learning, and astrological computation to deliver personalized, meaningful predictions. Our platform makes this sacred science accessible to everyone, anywhere, at any time.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-10 font-serif text-2xl font-bold text-foreground md:text-3xl text-center">
            Why Choose HastRekhaAI?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border/50 bg-card p-6"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Palm Lines */}
      <section className="bg-card/50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-10 font-serif text-2xl font-bold text-foreground md:text-3xl text-center">
            Understanding the Major Palm Lines
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {palmLines.map((line) => {
              const Icon = line.icon;
              return (
                <article
                  key={line.name}
                  className="rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {line.name}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {line.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              At HastRekhaAI, we believe that ancient wisdom and modern technology can work together to help you understand yourself better. Our mission is to make AI-powered palmistry and astrological guidance accessible, accurate, and meaningful for everyone seeking insight into their life path and destiny.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
