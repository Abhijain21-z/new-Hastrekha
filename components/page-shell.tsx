"use client";

import { LanguageProvider } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main className="min-h-screen">{children}</main>
      <SiteFooter />
    </LanguageProvider>
  );
}
