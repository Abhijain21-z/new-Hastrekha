"use client";

import Link from 'next/link';
import Image from 'next/image';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { blogsData } from '@/lib/blogs-data';
import { LanguageProvider, useLanguage } from '@/lib/language-context';

function BlogPageContent() {
  const { language } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <div className="border-b border-border bg-gradient-to-b from-primary/10 to-transparent py-12">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground">
              {language === 'hi' ? 'हस्तरेखा ब्लॉग' : 'Palmistry Blogs'}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {language === 'hi'
                ? 'हाथ पढ़ने के प्राचीन रहस्यों की खोज करें और अपनी नियति को अनलॉक करें'
                : 'Discover the ancient secrets of hand reading and unlock your destiny'}
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogsData.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group h-full overflow-hidden rounded-lg border-2 border-border transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={blog.imageUrl}
                    alt={language === 'hi' ? blog.imageAlt.hi : blog.imageAlt.en}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="flex flex-col p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-primary/20 px-2 py-1 text-xs font-semibold text-primary">
                      {language === 'hi' ? blog.category.hi : blog.category.en}
                    </span>
                    <span className="text-xs text-muted-foreground">{blog.readTime} min</span>
                  </div>

                  <h3 className="mb-2 line-clamp-2 text-lg font-bold text-foreground group-hover:text-primary">
                    {language === 'hi' ? blog.title.hi : blog.title.en}
                  </h3>

                  <p className="mb-4 flex-grow line-clamp-2 text-sm text-muted-foreground">
                    {language === 'hi' ? blog.excerpt.hi : blog.excerpt.en}
                  </p>

                  <div className="text-xs text-muted-foreground">
                    {new Date(blog.publishDate).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default function BlogPage() {
  return (
    <LanguageProvider>
      <BlogPageContent />
    </LanguageProvider>
  );
}
