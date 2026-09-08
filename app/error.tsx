"use client";

import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[v0] Page error:", error);
  }, [error]);

  return (
    <PageShell>
      <section className="relative flex min-h-[60vh] items-center justify-center py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-destructive/10 p-4">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
          </div>

          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance mb-4">
            Something went wrong
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            An unexpected error occurred while loading this page. The cosmic
            alignment is temporarily off. Please try again or return home.
          </p>

          {error.message && (
            <div className="mb-8 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-left text-sm text-destructive">
              <p className="font-mono text-xs">{error.message}</p>
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" onClick={reset} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Try Again
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          {error.digest && (
            <p className="mt-6 text-xs text-muted-foreground">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </section>
    </PageShell>
  );
}
