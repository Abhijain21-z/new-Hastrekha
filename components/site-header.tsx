"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/zodiac", label: t("nav.zodiac") },
    { href: "/astrology-guide", label: t("nav.astrology") },
    { href: "/how-it-works", label: t("nav.howItWorks") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:rotate-12"><Sparkles className="h-4 w-4" /></span>
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">HastRekha<span className="text-primary">AI</span></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => { const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href); return <Link key={item.href} href={item.href} className={`relative rounded-md px-3 py-2 text-sm transition-colors ${active ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}`}>{item.label}{active && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />}</Link>; })}
          <Link href="/search" aria-label="Search" className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"><Search className="h-4 w-4" /></Link>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setLanguage(language === "en" ? "hi" : "en")} className="rounded-md border border-primary/20 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground" aria-label="Switch language">{language === "en" ? "हिंदी" : "EN"}</button>
          <Link href="/palm-reading" className="hidden sm:block"><Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">{t("nav.readPalm")}</Button></Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-md p-2 text-muted-foreground lg:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>
      {mobileOpen && <nav className="border-t border-border/70 bg-background px-4 pb-4 pt-2 lg:hidden" aria-label="Mobile navigation">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">{item.label}</Link>)}<Link href="/search" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground"><Search className="h-4 w-4" />{t("nav.search")}</Link><Link href="/palm-reading" onClick={() => setMobileOpen(false)} className="mt-2 block"><Button className="w-full bg-primary text-primary-foreground">{t("nav.readPalm")}</Button></Link></nav>}
    </header>
  );
}
