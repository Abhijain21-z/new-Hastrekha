"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Brain,
  Activity,
  Star,
  Briefcase,
  HeartHandshake,
  Stethoscope,
  Coins,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { PalmSVG } from "@/components/zodiac-icons";

export function DashboardSection() {
  const { t } = useLanguage();

  const palmLines = [
    {
      icon: Heart,
      en: "Heart Line",
      hi: "\u0939\u0943\u0926\u092f \u0930\u0947\u0916\u093e",
      color: "bg-red-50 text-red-600",
      barColor: "bg-gradient-to-r from-red-300 to-red-500",
      value: 85,
    },
    {
      icon: Brain,
      en: "Head Line",
      hi: "\u092e\u0938\u094d\u0924\u093f\u0937\u094d\u0915 \u0930\u0947\u0916\u093e",
      color: "bg-blue-50 text-blue-600",
      barColor: "bg-gradient-to-r from-blue-300 to-blue-500",
      value: 78,
    },
    {
      icon: Activity,
      en: "Life Line",
      hi: "\u091c\u0940\u0935\u0928 \u0930\u0947\u0916\u093e",
      color: "bg-green-50 text-green-600",
      barColor: "bg-gradient-to-r from-green-300 to-green-500",
      value: 92,
    },
    {
      icon: Star,
      en: "Fate Line",
      hi: "\u092d\u093e\u0917\u094d\u092f \u0930\u0947\u0916\u093e",
      color: "bg-amber-50 text-amber-600",
      barColor: "bg-gradient-to-r from-amber-300 to-amber-500",
      value: 70,
    },
  ];

  const predictions = [
    {
      icon: Briefcase,
      en: "Career",
      hi: "\u0915\u0930\u093f\u092f\u0930",
      descEn: "Strong growth after age 28",
      descHi: "28 \u0935\u0930\u094d\u0937 \u0915\u0947 \u092c\u093e\u0926 \u092e\u091c\u092c\u0942\u0924 \u0935\u0943\u0926\u094d\u0927\u093f",
    },
    {
      icon: HeartHandshake,
      en: "Love",
      hi: "\u092a\u094d\u0930\u0947\u092e",
      descEn: "Harmonious marriage indicated",
      descHi: "\u0938\u0941\u0916\u0940 \u0935\u0948\u0935\u093e\u0939\u093f\u0915 \u091c\u0940\u0935\u0928 \u0915\u093e \u0938\u0902\u0915\u0947\u0924",
    },
    {
      icon: Stethoscope,
      en: "Health",
      hi: "\u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f",
      descEn: "Long and healthy life path",
      descHi: "\u0926\u0940\u0930\u094d\u0918 \u0914\u0930 \u0938\u094d\u0935\u0938\u094d\u0925 \u091c\u0940\u0935\u0928",
    },
    {
      icon: Coins,
      en: "Wealth",
      hi: "\u0927\u0928",
      descEn: "Financial stability after 30",
      descHi: "30 \u0915\u0947 \u092c\u093e\u0926 \u0906\u0930\u094d\u0925\u093f\u0915 \u0938\u094d\u0925\u093f\u0930\u0924\u093e",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/4 via-transparent to-primary/4" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="block text-balance">Palm Reading Dashboard</span>
            <span className="mt-1 block text-2xl text-primary md:text-3xl">
              {"\u0939\u0938\u094d\u0924\u0930\u0947\u0916\u093e \u0935\u093f\u0936\u094d\u0932\u0947\u0937\u0923 \u0921\u0948\u0936\u092c\u094b\u0930\u094d\u0921"}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Discover what the lines on your palm reveal about your destiny, career, love, and health.
          </p>
          <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground/80 italic">
            {"\u091c\u093e\u0928\u093f\u090f \u0915\u093f \u0906\u092a\u0915\u0940 \u0939\u0925\u0947\u0932\u0940 \u0915\u0940 \u0930\u0947\u0916\u093e\u090f\u0902 \u0906\u092a\u0915\u0947 \u092d\u093e\u0917\u094d\u092f, \u0915\u0930\u093f\u092f\u0930, \u092a\u094d\u0930\u0947\u092e \u0914\u0930 \u0938\u094d\u0935\u093e\u0938\u094d\u0925\u094d\u092f \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u0915\u094d\u092f\u093e \u092c\u0924\u093e\u0924\u0940 \u0939\u0948\u0902\u0964"}
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-3">
          {/* Left: Palm visualization */}
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-slate-800 bg-card p-6 shadow-lg lg:col-span-1">
            <div className="w-full max-w-[280px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border-2 border-slate-800 shadow-md bg-white flex items-center justify-center">
                <Image
                  src="/palm.jpg"
                  alt="Open palm showing major palm lines for reading"
                  width={280}
                  height={280}
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              {/* Legend */}
              <div className="mt-4 grid grid-cols-2 gap-2 px-2">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="text-[11px] text-foreground">Heart / {"\u0939\u0943\u0926\u092f"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <span className="text-[11px] text-foreground">Head / {"\u092e\u0938\u094d\u0924\u093f\u0937\u094d\u0915"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="text-[11px] text-foreground">Life / {"\u091c\u0940\u0935\u0928"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="text-[11px] text-foreground">Fate / {"\u092d\u093e\u0917\u094d\u092f"}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm font-semibold text-foreground">Palm Analysis Preview</p>
              <p className="text-xs text-muted-foreground italic">
                {"\u0939\u0938\u094d\u0924\u0930\u0947\u0916\u093e \u0935\u093f\u0936\u094d\u0932\u0947\u0937\u0923 \u092a\u0942\u0930\u094d\u0935\u093e\u0935\u0932\u094b\u0915\u0928"}
              </p>
            </div>
          </div>

          {/* Center: Line analysis */}
          <div className="rounded-2xl border-2 border-slate-800 bg-card p-6 shadow-lg lg:col-span-1">
            <h3 className="font-serif text-lg font-bold text-foreground">
              Palm Line Analysis
            </h3>
            <p className="mb-6 text-xs text-muted-foreground italic">
              {"\u0939\u0938\u094d\u0924\u0930\u0947\u0916\u093e \u0935\u093f\u0936\u094d\u0932\u0947\u0937\u0923"}
            </p>
            <div className="flex flex-col gap-6">
              {palmLines.map((line) => {
                const Icon = line.icon;
                return (
                  <div key={line.en} className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${line.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between">
                        <p className="text-sm font-semibold text-foreground">
                          {line.en}
                          <span className="ml-1.5 text-xs font-normal text-muted-foreground">
                            ({line.hi})
                          </span>
                        </p>
                        <span className="text-xs font-bold text-primary">{line.value}%</span>
                      </div>
                      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full rounded-full ${line.barColor} transition-all duration-700`}
                          style={{ width: `${line.value}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-slate-300 bg-primary/5 p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Each line reveals specific aspects of your personality, emotions, intellect, and destiny.
                A deeper line means stronger influence.
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground/70 italic">
                {"\u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 \u0930\u0947\u0916\u093e \u0906\u092a\u0915\u0947 \u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0924\u094d\u0935, \u092d\u093e\u0935\u0928\u093e\u0913\u0902, \u092c\u0941\u0926\u094d\u0927\u093f \u0914\u0930 \u092d\u093e\u0917\u094d\u092f \u0915\u0947 \u0935\u093f\u0936\u0947\u0937 \u092a\u0939\u0932\u0941\u0913\u0902 \u0915\u094b \u0926\u0930\u094d\u0936\u093e\u0924\u0940 \u0939\u0948\u0964"}
              </p>
            </div>
          </div>

          {/* Right: Life predictions */}
          <div className="rounded-2xl border-2 border-slate-800 bg-card p-6 shadow-lg lg:col-span-1">
            <h3 className="font-serif text-lg font-bold text-foreground">
              Life Predictions
            </h3>
            <p className="mb-6 text-xs text-muted-foreground italic">
              {"\u091c\u0940\u0935\u0928 \u092d\u0935\u093f\u0937\u094d\u092f\u0935\u093e\u0923\u093f\u092f\u093e\u0901"}
            </p>
            <div className="flex flex-col gap-4">
              {predictions.map((pred) => {
                const Icon = pred.icon;
                return (
                  <div
                    key={pred.en}
                    className="rounded-xl border border-slate-300 bg-primary/5 p-4 transition-all hover:border-slate-600 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          {pred.en}
                          <span className="ml-1.5 text-primary">/ {pred.hi}</span>
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {pred.descEn}
                        </p>
                        <p className="text-[11px] leading-relaxed text-muted-foreground/70 italic">
                          {pred.descHi}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/palm-reading">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              {t("dashboard.startReading")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
