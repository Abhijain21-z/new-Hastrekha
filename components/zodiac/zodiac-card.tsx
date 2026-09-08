"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";

interface ZodiacCardProps { id: string; name_en: string; name_hi: string; dates: string; image: string; }

const glyphs: Record<string, string> = { aries: "♈", taurus: "♉", gemini: "♊", cancer: "♋", leo: "♌", virgo: "♍", libra: "♎", scorpio: "♏", sagittarius: "♐", capricorn: "♑", aquarius: "♒", pisces: "♓" };

export function ZodiacCard({ id, name_en, name_hi, dates }: ZodiacCardProps) {
  return <Link href={`/zodiac/${id}`}><Card className="group relative overflow-hidden border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"><div className="flex flex-col items-center gap-4"><div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-5xl text-primary transition-transform duration-300 group-hover:scale-110" aria-label={`${name_en} zodiac symbol`}>{glyphs[id] ?? "✦"}</div><div className="text-center"><h3 className="mb-1 font-serif text-sm font-bold text-primary">{name_hi}</h3><p className="mb-2 text-base font-semibold text-foreground">{name_en}</p><p className="text-xs text-muted-foreground">{dates}</p></div><span className="text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">Explore sign →</span></div></Card></Link>;
}
