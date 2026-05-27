"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { StarField } from "@/components/zodiac-icons";

interface BlogPost {
  slug: string;
  titleEn: string;
  titleHi: string;
  excerptEn: string;
  excerptHi: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogContentProps {
  blogPosts: BlogPost[];
  categoryColors: Record<string, string>;
}

export function BlogContent({ blogPosts, categoryColors }: BlogContentProps) {
  const { language } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <StarField className="absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            {language === "hi"
              ? "ज्योतिष और हस्तरेखा विज्ञान ब्लॉग"
              : "Astrology & Palmistry Blog"}
            <br />
            <span className="text-primary">
              {language === "hi"
                ? "Astrology & Palmistry Blog"
                : "ज्योतिष और हस्तरेखा विज्ञान ब्लॉग"}
            </span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {language === "hi"
              ? "हस्तरेखा विज्ञान, वैदिक ज्योतिष और आध्यात्मिक मार्गदर्शन पर लेख पढ़ें। अपने आप को बेहतर जानिए।"
              : "Explore articles on palmistry, Vedic astrology, and spiritual guidance. Deepen your understanding of the ancient sciences."}
            <br />
            <span className="text-base">
              {language === "hi"
                ? "Explore articles on palmistry, Vedic astrology, and spiritual guidance."
                : "हस्तरेखा विज्ञान, वैदिक ज्योतिष और आध्यात्मिक मार्गदर्शन पर लेख पढ़ें।"}
            </span>
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Color accent top */}
                <div className="h-1 rounded-t-xl bg-primary/30 transition-all group-hover:bg-primary/60" />

                <div className="flex flex-1 flex-col p-5">
                  {/* Category + Meta */}
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        categoryColors[post.category] || "text-primary bg-primary/10"
                      }`}
                    >
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title - Bilingual */}
                  <div className="mb-2">
                    <h2 className="mb-1 font-serif text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                      {language === "hi" ? post.titleHi : post.titleEn}
                    </h2>
                    <p className="text-sm font-medium text-primary/80 italic">
                      {language === "hi" ? post.titleEn : post.titleHi}
                    </p>
                  </div>

                  {/* Excerpt - Bilingual */}
                  <div className="mb-4 flex-1">
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {language === "hi" ? post.excerptHi : post.excerptEn}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-border/50 pt-4">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all hover:gap-2"
                    >
                      Read
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
