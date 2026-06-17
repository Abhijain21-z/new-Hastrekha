import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { getBlogBySlug, getAllBlogSlugs, blogsData } from '@/lib/blogs-data';
import { LanguageProvider } from '@/lib/language-context';
import { BlogPostClient } from '@/components/blog/blog-post-client';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Hastrekha',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${blog.title.en} | Hastrekha Palmistry`,
    description: blog.description.en,
    keywords: [...blog.keywords.en, 'palmistry', 'hastrekha'],
    openGraph: {
      title: blog.title.en,
      description: blog.description.en,
      images: [blog.imageUrl],
      type: 'article',
      publishedTime: blog.publishDate,
      authors: [blog.author.en],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  // Get related blogs (next and previous)
  const blogIndex = blogsData.findIndex((b) => b.slug === params.slug);
  const previousBlog = blogIndex > 0 ? blogsData[blogIndex - 1] : null;
  const nextBlog = blogIndex < blogsData.length - 1 ? blogsData[blogIndex + 1] : null;

  return (
    <LanguageProvider>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        {/* Hero Section with Image */}
        <div className="relative h-96 w-full overflow-hidden md:h-[500px]">
          <Image
            src={blog.imageUrl}
            alt={blog.imageAlt.en}
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
              Back to Blogs
            </Link>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
              {blog.title.en}
            </h1>
          </div>
        </div>

        {/* Blog Content */}
        <div className="mx-auto max-w-4xl px-4 py-12">
          {/* Meta Information */}
          <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-border pb-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{blog.author.en}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(blog.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime} min read</span>
            </div>
            <div className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              {blog.category.en}
            </div>
          </div>

          {/* Blog Description */}
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {blog.description.en}
          </p>

          {/* Main Content with Language Support */}
          <BlogPostClient blog={blog} />

          {/* Keywords Section */}
          <div className="mt-12 border-t border-border pt-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Key Topics Covered</h3>
            <div className="flex flex-wrap gap-2">
              {blog.keywords.en.map((keyword) => (
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
                  <p className="text-xs font-semibold text-muted-foreground">Previous Blog</p>
                  <p className="font-bold text-foreground group-hover:text-primary">
                    {previousBlog.title.en}
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
                  <p className="text-xs font-semibold text-muted-foreground">Next Blog</p>
                  <p className="font-bold text-foreground group-hover:text-primary">
                    {nextBlog.title.en}
                  </p>
                </div>
                <ArrowLeft className="h-5 w-5 rotate-180 text-muted-foreground group-hover:text-primary" />
              </Link>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t border-border bg-gradient-to-r from-primary/10 to-transparent py-12">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Discover More Palmistry Secrets
            </h2>
            <p className="mb-6 text-muted-foreground">
              Explore our complete collection of palmistry guides and learn about your destiny
            </p>
            <Link
              href="/blog"
              className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              View All Blogs
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
