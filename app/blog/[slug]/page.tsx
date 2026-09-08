import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { getBlogBySlug, getAllBlogSlugs, blogsData } from '@/lib/blogs-data';
import { LanguageProvider } from '@/lib/language-context';
import { BlogPostClientWrapper } from '@/components/blog/blog-post-client-wrapper';
import { JsonLd } from '@/components/seo/json-ld';
import { articleJsonLd, buildMetadata } from '@/lib/seo';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: String(slug),
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Hastrekha',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return buildMetadata({
    path: `/blog/${blog.slug}`,
    title: blog.title.en,
    description: blog.description.en,
    keywords: [...blog.keywords.en, 'palmistry', 'hastrekha'],
    image: blog.imageUrl,
    type: 'article',
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Get related blogs (next and previous)
  const blogIndex = blogsData.findIndex((b) => b.slug === slug);
  const previousBlog = blogIndex > 0 ? blogsData[blogIndex - 1] : null;
  const nextBlog = blogIndex < blogsData.length - 1 ? blogsData[blogIndex + 1] : null;

  return (
    <LanguageProvider>
      <JsonLd
        data={articleJsonLd({
          title: blog.title.en,
          description: blog.description.en,
          path: `/blog/${blog.slug}`,
          image: blog.imageUrl,
          publishedTime: blog.publishDate,
          modifiedTime: blog.updatedDate,
          authorName: blog.author.en,
          inLanguage: 'en',
          keywords: blog.keywords.en,
        })}
      />
      <SiteHeader />
      <BlogPostClientWrapper blog={blog} previousBlog={previousBlog} nextBlog={nextBlog} />
      <SiteFooter />
    </LanguageProvider>
  );
}
