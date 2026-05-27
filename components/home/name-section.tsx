"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/language-context";
import Link from "next/link";

export function NameSection() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [numerology, setNumerology] = useState<{
    number: number;
    meaning: string;
    meaningHi: string;
  } | null>(null);

  function calculateNumerology(fullName: string) {
    const cleaned = fullName.toUpperCase().replace(/[^A-Z]/g, "");
    if (!cleaned) return;

    const charValues: Record<string, number> = {
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
      J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
      S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
    };

    let total = 0;
    for (const ch of cleaned) {
      total += charValues[ch] || 0;
    }
    while (total > 9 && total !== 11 && total !== 22) {
      total = String(total)
        .split("")
        .reduce((s, d) => s + Number(d), 0);
    }

    const meanings: Record<number, { en: string; hi: string }> = {
      1: { en: "You are a natural leader with strong willpower and independence. Success comes through self-reliance.", hi: "\u0906\u092a \u0938\u094d\u0935\u093e\u092d\u093e\u0935\u093f\u0915 \u0928\u0947\u0924\u093e \u0939\u0948\u0902, \u0926\u0943\u0922\u093c \u0907\u091a\u094d\u091b\u093e\u0936\u0915\u094d\u0924\u093f \u0914\u0930 \u0938\u094d\u0935\u0924\u0902\u0924\u094d\u0930\u0924\u093e \u0935\u093e\u0932\u0947\u0964 \u0938\u092b\u0932\u0924\u093e \u0906\u0924\u094d\u092e\u0928\u093f\u0930\u094d\u092d\u0930\u0924\u093e \u0938\u0947 \u0906\u0924\u0940 \u0939\u0948\u0964" },
      2: { en: "You are diplomatic and sensitive. Partnerships and cooperation bring you the greatest happiness.", hi: "\u0906\u092a \u0915\u0942\u091f\u0928\u0940\u0924\u093f\u091c\u094d\u091e \u0914\u0930 \u0938\u0902\u0935\u0947\u0926\u0928\u0936\u0940\u0932 \u0939\u0948\u0902\u0964 \u0938\u093e\u091d\u0947\u0926\u093e\u0930\u0940 \u0914\u0930 \u0938\u0939\u092f\u094b\u0917 \u0906\u092a\u0915\u094b \u0938\u092c\u0938\u0947 \u0905\u0927\u093f\u0915 \u0916\u0941\u0936\u0940 \u0926\u0947\u0924\u0947 \u0939\u0948\u0902\u0964" },
      3: { en: "Creative expression defines you. Art, communication, and joy are your life themes.", hi: "\u0930\u091a\u0928\u093e\u0924\u094d\u092e\u0915 \u0905\u092d\u093f\u0935\u094d\u092f\u0915\u094d\u0924\u093f \u0906\u092a\u0915\u0940 \u092a\u0939\u091a\u093e\u0928 \u0939\u0948\u0964 \u0915\u0932\u093e, \u0938\u0902\u0935\u093e\u0926 \u0914\u0930 \u0906\u0928\u0902\u0926 \u0906\u092a\u0915\u0947 \u091c\u0940\u0935\u0928 \u0915\u0947 \u0935\u093f\u0937\u092f \u0939\u0948\u0902\u0964" },
      4: { en: "You are practical and hardworking. Building a solid foundation brings lasting success.", hi: "\u0906\u092a \u0935\u094d\u092f\u093e\u0935\u0939\u093e\u0930\u093f\u0915 \u0914\u0930 \u092e\u0947\u0939\u0928\u0924\u0940 \u0939\u0948\u0902\u0964 \u092e\u091c\u092c\u0942\u0924 \u0928\u0940\u0902\u0935 \u092c\u0928\u093e\u0928\u093e \u0938\u094d\u0925\u093e\u092f\u0940 \u0938\u092b\u0932\u0924\u093e \u0932\u093e\u0924\u093e \u0939\u0948\u0964" },
      5: { en: "Freedom and adventure call you. Travel and change fuel your growth and happiness.", hi: "\u0938\u094d\u0935\u0924\u0902\u0924\u094d\u0930\u0924\u093e \u0914\u0930 \u0930\u094b\u092e\u093e\u0902\u091a \u0906\u092a\u0915\u094b \u092c\u0941\u0932\u093e\u0924\u0947 \u0939\u0948\u0902\u0964 \u092f\u093e\u0924\u094d\u0930\u093e \u0914\u0930 \u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928 \u0906\u092a\u0915\u0940 \u0935\u0943\u0926\u094d\u0927\u093f \u0914\u0930 \u0916\u0941\u0936\u0940 \u0915\u093e \u0938\u094d\u0930\u094b\u0924 \u0939\u0948\u0902\u0964" },
      6: { en: "Love and responsibility define your path. Family and harmony are your greatest treasures.", hi: "\u092a\u094d\u0930\u0947\u092e \u0914\u0930 \u091c\u093f\u092e\u094d\u092e\u0947\u0926\u093e\u0930\u0940 \u0906\u092a\u0915\u0947 \u092e\u093e\u0930\u094d\u0917 \u0915\u094b \u092a\u0930\u093f\u092d\u093e\u0937\u093f\u0924 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964 \u092a\u0930\u093f\u0935\u093e\u0930 \u0914\u0930 \u0938\u093e\u092e\u0902\u091c\u0938\u094d\u092f \u0906\u092a\u0915\u0947 \u0938\u092c\u0938\u0947 \u092c\u0921\u093c\u0947 \u0916\u091c\u093e\u0928\u0947 \u0939\u0948\u0902\u0964" },
      7: { en: "You are a deep thinker and spiritual seeker. Wisdom and introspection guide your journey.", hi: "\u0906\u092a \u0917\u0939\u0930\u0947 \u0935\u093f\u091a\u093e\u0930\u0915 \u0914\u0930 \u0906\u0927\u094d\u092f\u093e\u0924\u094d\u092e\u093f\u0915 \u0938\u093e\u0927\u0915 \u0939\u0948\u0902\u0964 \u091c\u094d\u091e\u093e\u0928 \u0914\u0930 \u0906\u0924\u094d\u092e\u0928\u093f\u0930\u0940\u0915\u094d\u0937\u0923 \u0906\u092a\u0915\u0940 \u092f\u093e\u0924\u094d\u0930\u093e \u0915\u093e \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964" },
      8: { en: "Ambition and power drive you. Material success and leadership are your destiny.", hi: "\u092e\u0939\u0924\u094d\u0935\u093e\u0915\u093e\u0902\u0915\u094d\u0937\u093e \u0914\u0930 \u0936\u0915\u094d\u0924\u093f \u0906\u092a\u0915\u094b \u092a\u094d\u0930\u0947\u0930\u093f\u0924 \u0915\u0930\u0924\u0940 \u0939\u0948\u0964 \u092d\u094c\u0924\u093f\u0915 \u0938\u092b\u0932\u0924\u093e \u0914\u0930 \u0928\u0947\u0924\u0943\u0924\u094d\u0935 \u0906\u092a\u0915\u0940 \u0928\u093f\u092f\u0924\u093f \u0939\u0948\u0964" },
      9: { en: "You are compassionate and humanitarian. Serving others and spreading love is your true calling.", hi: "\u0906\u092a \u0926\u092f\u093e\u0932\u0941 \u0914\u0930 \u092e\u093e\u0928\u0935\u0924\u093e\u0935\u093e\u0926\u0940 \u0939\u0948\u0902\u0964 \u0926\u0942\u0938\u0930\u094b\u0902 \u0915\u0940 \u0938\u0947\u0935\u093e \u0914\u0930 \u092a\u094d\u0930\u0947\u092e \u092b\u0948\u0932\u093e\u0928\u093e \u0906\u092a\u0915\u0940 \u0938\u091a\u094d\u091a\u0940 \u092a\u0941\u0915\u093e\u0930 \u0939\u0948\u0964" },
      11: { en: "Master number! You have heightened intuition and spiritual insight. A visionary destined for greatness.", hi: "\u092e\u093e\u0938\u094d\u091f\u0930 \u0928\u0902\u092c\u0930! \u0906\u092a\u0915\u0947 \u092a\u093e\u0938 \u0909\u091a\u094d\u091a \u0905\u0902\u0924\u0930\u094d\u091c\u094d\u091e\u093e\u0928 \u0914\u0930 \u0906\u0927\u094d\u092f\u093e\u0924\u094d\u092e\u093f\u0915 \u0905\u0902\u0924\u0930\u094d\u0926\u0943\u0937\u094d\u091f\u093f \u0939\u0948\u0964 \u092e\u0939\u093e\u0928\u0924\u093e \u0915\u0947 \u0932\u093f\u090f \u0928\u093f\u092f\u0924 \u090f\u0915 \u0926\u0942\u0930\u0926\u0930\u094d\u0936\u0940\u0964" },
      22: { en: "Master builder! You can turn dreams into reality. Great achievements await you.", hi: "\u092e\u093e\u0938\u094d\u091f\u0930 \u092c\u093f\u0932\u094d\u0921\u0930! \u0906\u092a \u0938\u092a\u0928\u094b\u0902 \u0915\u094b \u0939\u0915\u0940\u0915\u0924 \u092e\u0947\u0902 \u092c\u0926\u0932 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964 \u092e\u0939\u093e\u0928 \u0909\u092a\u0932\u092c\u094d\u0927\u093f\u092f\u093e\u0901 \u0906\u092a\u0915\u0940 \u092a\u094d\u0930\u0924\u0940\u0915\u094d\u0937\u093e \u092e\u0947\u0902 \u0939\u0948\u0902\u0964" },
    };

    const result = meanings[total] || meanings[total % 9 || 9];
    setNumerology({ number: total, meaning: result.en, meaningHi: result.hi });
  }

  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <User className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Numerology / {"\u0905\u0902\u0915 \u091c\u094d\u092f\u094b\u0924\u093f\u0937"}</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="block text-balance">{t("name.title.en")}</span>
            <span className="mt-1 block text-2xl text-primary md:text-3xl">{t("name.title.hi")}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("name.desc.en")}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground/80 italic">
            {t("name.desc.hi")}
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-primary/20 bg-card p-6 shadow-lg md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNumerology(null);
              }}
              placeholder={t("name.placeholder")}
              className="flex-1 border-primary/20 bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
            <Button
              onClick={() => calculateNumerology(name)}
              disabled={!name.trim()}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {t("name.submit")}
            </Button>
          </div>

          {numerology && (
            <div className="mt-6 animate-fade-in-up rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {numerology.number}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {"Destiny Number / "}<span className="text-primary">{"\u092d\u093e\u0917\u094d\u092f \u0905\u0902\u0915"}</span>{" "}{numerology.number}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {name}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                {numerology.meaning}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground italic">
                {numerology.meaningHi}
              </p>
              <div className="mt-4">
                <Link href="/palm-reading">
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    {t("dashboard.startReading")}
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
