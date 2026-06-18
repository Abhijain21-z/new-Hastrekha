'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { BlogPostClient } from '@/components/blog/blog-post-client';
import type { Blog } from '@/lib/blogs-data';

interface BlogPostClientWrapperProps {
  blog: Blog;
  previousBlog?: Blog | null;
  nextBlog?: Blog | null;
}

export function BlogPostClientWrapper({
  blog,
  previousBlog,
  nextBlog,
}: BlogPostClientWrapperProps) {
  const { language } = useLanguage();

  // Get language-specific content
  const title = language === 'hi' ? blog.title.hi : blog.title.en;
  const description = language === 'hi' ? blog.description.hi : blog.description.en;
  const author = language === 'hi' ? blog.author.hi : blog.author.en;
  const category = language === 'hi' ? blog.category.hi : blog.category.en;
  const imageAlt = language === 'hi' ? blog.imageAlt.hi : blog.imageAlt.en;
  const keywords = language === 'hi' ? blog.keywords.hi : blog.keywords.en;

  const prevTitle = previousBlog
    ? language === 'hi'
      ? previousBlog.title.hi
      : previousBlog.title.en
    : null;

  const nextTitle = nextBlog
    ? language === 'hi'
      ? nextBlog.title.hi
      : nextBlog.title.en
    : null;

  // Translate UI labels
  const backLabel = language === 'hi' ? 'ब्लॉग में वापस' : 'Back to Blogs';
  const prevLabel = language === 'hi' ? 'पिछला ब्लॉग' : 'Previous Blog';
  const nextLabel = language === 'hi' ? 'अगला ब्लॉग' : 'Next Blog';
  const topicsLabel = language === 'hi' ? 'कवर किए गए मुख्य विषय' : 'Key Topics Covered';
  const cTATitle = language === 'hi' ? 'और हस्तरेखा रहस्य खोजें' : 'Discover More Palmistry Secrets';
  const cTADesc = language === 'hi'
    ? 'हमारे सभी हस्तरेखा गाइडों को देखें और अपनी भाग्य के बारे में जानें'
    : 'Explore our complete collection of palmistry guides and learn about your destiny';
  const viewAllLabel = language === 'hi' ? 'सभी ब्लॉग देखें' : 'View All Blogs';

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <div className="relative h-96 w-full overflow-hidden md:h-[500px]">
        <Image
          src={blog.imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Back Button */}
        <div className="absolute left-4 top-4 z-10">
          <Link
            href="/blog"
            className="flex items-center gap-2 rounded-lg bg-black/50 px-4 py-2 text-white transition-all hover:bg-black/70"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl text-balance">
            {title}
          </h1>
        </div>
      </div>

      {/* Blog Content */}
      <article className="mx-auto max-w-4xl px-4 py-12">
        {/* Meta Information */}
        <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-border pb-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(blog.publishDate).toLocaleDateString(
                language === 'hi' ? 'hi-IN' : 'en-US',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              )}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>
              {blog.readTime} {language === 'hi' ? 'मिनट पढ़ने का समय' : 'min read'}
            </span>
          </div>
          <div className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
            {category}
          </div>
        </div>

        {/* Blog Description */}
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{description}</p>

        {/* Main Content with Language Support */}
        <BlogPostClient blog={blog} />

        {/* Keywords Section */}
        <div className="mt-12 border-t border-border pt-8">
          <h3 className="mb-4 text-lg font-semibold text-foreground">{topicsLabel}</h3>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {previousBlog && (
            <Link
              href={`/blog/${previousBlog.slug}`}
              className="group flex items-center gap-4 rounded-lg border-2 border-border p-4 transition-all hover:border-primary hover:bg-primary/5"
            >
              <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              <div>
                <p className="text-xs font-semibold text-muted-foreground">{prevLabel}</p>
                <p className="font-bold text-foreground group-hover:text-primary line-clamp-2">
                  {prevTitle}
                </p>
              </div>
            </Link>
          )}

          {nextBlog && (
            <Link
              href={`/blog/${nextBlog.slug}`}
              className="group flex items-center justify-between gap-4 rounded-lg border-2 border-border p-4 transition-all hover:border-primary hover:bg-primary/5"
            >
              <div className="text-right">
                <p className="text-xs font-semibold text-muted-foreground">{nextLabel}</p>
                <p className="font-bold text-foreground group-hover:text-primary line-clamp-2">
                  {nextTitle}
                </p>
              </div>
              <ArrowLeft className="h-5 w-5 rotate-180 text-muted-foreground group-hover:text-primary flex-shrink-0" />
            </Link>
          )}
        </div>
      </article>

      {/* Call to Action */}
      <div className="border-t border-border bg-gradient-to-r from-primary/10 to-transparent py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">{cTATitle}</h2>
          <p className="mb-6 text-muted-foreground">{cTADesc}</p>
          <Link
            href="/blog"
            className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            {viewAllLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
