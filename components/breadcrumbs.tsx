"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export interface Crumb {
  /** Translation key or literal label object */
  label: string | { en: string; hi: string };
  path: string;
}

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const { language, t } = useLanguage();
  const resolve = (label: Crumb["label"]) => (typeof label === "string" ? t(label) : label[language]);
  const all: Crumb[] = [{ label: "common.home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)}>
      <JsonLd data={breadcrumbJsonLd(all.map((c) => ({ name: resolve(c.label), path: c.path })))} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((crumb, index) => {
          const isLast = index === all.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />}
              {isLast ? (
                <span aria-current="page" className="line-clamp-1 max-w-[16rem] text-foreground sm:max-w-none">
                  {resolve(crumb.label)}
                </span>
              ) : (
                <Link href={crumb.path} className="link-underline transition-colors hover:text-foreground">
                  {resolve(crumb.label)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
