import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative flex min-h-[60vh] items-center justify-center py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mb-6">
            <div className="text-8xl font-bold text-primary/20">404</div>
          </div>

          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance mb-4">
            This page is not in the lines
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The page you&apos;re looking for has moved or never existed. The
            cosmic paths don&apos;t lead here—but they lead to many other places
            on HastRekhaAI.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/">
              <Button size="lg" className="gap-2">
                Back to Home
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline">
                Read Articles
              </Button>
            </Link>
            <Link href="/zodiac">
              <Button size="lg" variant="outline">
                Explore Zodiac
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <h3 className="mb-2 font-semibold text-foreground">
                Explore Articles
              </h3>
              <p className="text-sm text-muted-foreground">
                Discover insights about astrology, palm reading, and cosmic
                wisdom.
              </p>
            </div>
            <div className="rounded-lg border border-border/50 bg-card/50 p-6">
              <h3 className="mb-2 font-semibold text-foreground">
                Need Help?
              </h3>
              <p className="text-sm text-muted-foreground">
                Have a question or can&apos;t find what you&apos;re looking
                for?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-primary hover:underline"
                >
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
