"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-primary/15 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <span className="font-serif text-lg font-bold text-foreground">
                HastRekha<span className="text-primary">Ai</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">{t("footer.quickLinks")}</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">{t("nav.home")}</Link></li>
              <li><Link href="/palm-reading" className="text-sm text-muted-foreground hover:text-primary">{t("nav.readPalm")}</Link></li>
              <li><Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-primary">{t("nav.howItWorks")}</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">{t("footer.resources")}</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">{t("nav.about")}</Link></li>
              <li><Link href="/astrology-guide" className="text-sm text-muted-foreground hover:text-primary">{t("nav.astrology")}</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">{t("nav.blog")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">{t("footer.legal")}</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">{t("footer.privacy")}</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-primary">{t("footer.disclaimer")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary/15 pt-6">
          <div className="flex flex-col items-center gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
            <p>{"© 2026 HastRekhaAi. "}{t("footer.rights")}</p>
            <p>{t("footer.entertainment")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
