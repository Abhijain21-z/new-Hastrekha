"use client";

import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title, url });
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return <button type="button" onClick={share} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Share article">{copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}{copied ? "Link copied" : "Share"}</button>;
}
