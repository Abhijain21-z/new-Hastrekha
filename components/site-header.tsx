"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/zodiac", label: "Rashi / राशि" },
    { href: "/astrology-guide", label: t("nav.astrology") },
    { href: "/how-it-works", label: t("nav.howItWorks") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-primary/12 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 shadow-sm">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold leading-none text-foreground">
              HastRekha<span className="text-primary">Ai</span>
            </span>
            <span className="text-[9px] leading-none text-muted-foreground">{"हस्तरेखा AI"}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-primary/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <button
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="flex items-center gap-1.5 rounded-md border border-primary/20 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            {language === "en" ? "\u0939\u093f\u0902\u0926\u0940" : "EN"}
          </button>

          {/* CTA Button */}
          <Link href="/palm-reading" className="hidden sm:block">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
              {t("nav.readPalm")}
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-muted-foreground lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-primary/12 bg-background px-4 pb-4 pt-2 lg:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-primary/5"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/palm-reading" onClick={() => setMobileOpen(false)} className="mt-2 block">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              {t("nav.readPalm")}
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
