"use client";

import { Clock3, LockKeyhole, Languages, BookOpenCheck } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const items = [
  { icon: Clock3, en: "Fast AI analysis", hi: "तेज़ AI विश्लेषण", copy: "A clear report in a few simple steps." },
  { icon: LockKeyhole, en: "Privacy first", hi: "गोपनीयता पहले", copy: "Your reading flow is designed to avoid profile storage." },
  { icon: BookOpenCheck, en: "Beginner friendly", hi: "शुरुआती लोगों के लिए", copy: "Traditional terms explained in plain language." },
  { icon: Languages, en: "Hindi + English", hi: "हिंदी + अंग्रेजी", copy: "Switch languages whenever you like." },
];

export function TrustSection() {
  const { language } = useLanguage();
  return (
    <section className="border-y border-border bg-card/40 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, en, hi, copy }) => (
          <div key={en} className="flex gap-3">
            <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">{language === "hi" ? hi : en}</h3>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

