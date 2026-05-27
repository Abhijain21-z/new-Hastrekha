"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ZodiacWheel } from "@/components/zodiac-icons";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ZodiacWheel className="h-[500px] w-[500px] animate-spin-slow opacity-10" />
      </div>
      <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          <span className="block text-balance">{t("cta.title.en")}</span>
          <span className="mt-2 block text-2xl text-primary md:text-3xl lg:text-4xl">{t("cta.title.hi")}</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
          {t("cta.subtitle.en")}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80 italic">
          {t("cta.subtitle.hi")}
        </p>
        <Link href="/palm-reading" className="mt-8 inline-block">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            {t("cta.button")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
