"use client";

import { Hand, Star, FileText, Clover } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const featureIcons = [Hand, Star, FileText, Clover];

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      key: "palmistry",
      icon: featureIcons[0],
      title: t("features.palmistry"),
      descEn: t("features.palmistryDesc.en"),
      descHi: t("features.palmistryDesc.hi"),
    },
    {
      key: "astrology",
      icon: featureIcons[1],
      title: t("features.astrology"),
      descEn: t("features.astrologyDesc.en"),
      descHi: t("features.astrologyDesc.hi"),
    },
    {
      key: "report",
      icon: featureIcons[2],
      title: t("features.report"),
      descEn: t("features.reportDesc.en"),
      descHi: t("features.reportDesc.hi"),
    },
    {
      key: "lucky",
      icon: featureIcons[3],
      title: t("features.lucky"),
      descEn: t("features.luckyDesc.en"),
      descHi: t("features.luckyDesc.hi"),
    },
  ];

  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-card/50" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="block text-balance">{t("features.title.en")}</span>
            <span className="mt-1 block text-2xl text-primary md:text-3xl">{t("features.title.hi")}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("features.subtitle.en")}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground/80 italic">
            {t("features.subtitle.hi")}
          </p>
        </div>

        <div className="stagger-children mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="group rounded-xl border border-primary/15 bg-background p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.descEn}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground/70 italic">
                  {feature.descHi}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
