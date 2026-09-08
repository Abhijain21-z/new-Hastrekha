"use client";

import Link from "next/link";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { blogsData } from "@/lib/blogs-data";
import { useLanguage } from "@/lib/language-context";

export default function SearchPage() {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const term = query.toLowerCase().trim();
    if (!term) return [];
    return blogsData.filter((post) => `${post.title[language]} ${post.description[language]} ${post.keywords[language].join(" ")}`.toLowerCase().includes(term));
  }, [language, query]);
  return <PageShell><main className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-24"><div className="mx-auto max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t("nav.search")}</p><h1 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">{language === "hi" ? "ज्ञान खोजें" : "Search the wisdom library"}</h1><p className="mt-4 leading-relaxed text-muted-foreground">{language === "hi" ? "हस्तरेखा, ज्योतिष और राशियों से जुड़े लेख खोजें।" : "Find thoughtful guides on palmistry, astrology, and the zodiac."}</p><div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm"><SearchIcon className="h-5 w-5 text-primary" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("common.searchPlaceholder")} className="min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground" aria-label={t("common.search")} /></div></div><div className="mx-auto mt-12 max-w-2xl">{query && <p className="mb-5 text-sm text-muted-foreground">{results.length} {t("common.results")}</p>}{results.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="group mb-4 block rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"><div className="flex items-start justify-between gap-4"><div><h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary">{post.title[language]}</h2><p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.description[language]}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary" /></div></Link>)}{query && results.length === 0 && <p className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground">{t("common.noResults")}</p>}</div></main></PageShell>;
}
