'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { blogsData } from '@/lib/blogs-data';
import { Button } from '@/components/ui/button';

export function BlogCarousel() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + blogsData.length) % blogsData.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogsData.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const currentBlog = blogsData[currentIndex];
  const currentTitle = currentBlog.title[language as keyof typeof currentBlog.title];
  const currentExcerpt = currentBlog.excerpt[language as keyof typeof currentBlog.excerpt];

  return (
    <div className="w-full bg-gradient-to-b from-card to-background py-8">
      <div className="mx-auto max-w-6xl px-4">
        {/* Carousel Title */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            {language === 'hi' ? 'हस्त्रेखा ब्लॉग्स' : 'Palmistry Blogs'}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {language === 'hi' 
              ? 'हस्तरेखा विज्ञान के रहस्यों को जानें' 
              : 'Discover the secrets of palmistry science'}
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative overflow-hidden rounded-lg border-2 border-border bg-card shadow-lg">
          {/* Carousel Content */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Blog Items */}
            <div className="relative h-full w-full">
              {blogsData.map((blog, index) => (
                <div
                  key={blog.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="flex h-full flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative h-48 w-full md:h-full md:w-1/2">
                      <Image
                        src={blog.imageUrl}
                        alt={blog.imageAlt[language as keyof typeof blog.imageAlt]}
                        fill
                        className="object-cover"
                        priority={index === currentIndex}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-8">
                      <div className="mb-3 inline-flex items-center gap-2">
                        <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                          {blog.category[language as keyof typeof blog.category]}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {blog.readTime} {language === 'hi' ? 'मिनट' : 'min'}
                        </span>
                      </div>

                      <h3 className="mb-3 line-clamp-3 text-2xl font-bold text-foreground">
                        {currentTitle}
                      </h3>

                      <p className="mb-6 line-clamp-2 text-sm text-muted-foreground">
                        {currentExcerpt}
                      </p>

                      <Link href={`/blog/${blog.slug}`}>
                        <Button className="w-full md:w-auto">
                          {language === 'hi' ? 'पूरा ब्लॉग पढ़ें' : 'Read Full Blog'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
              aria-label="Previous blog"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
              aria-label="Next blog"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 bg-black/20 px-4 py-4 backdrop-blur-sm">
            {blogsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'bg-muted-foreground/50 hover:bg-muted-foreground'
                }`}
                aria-label={`Go to blog ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Blog List Preview */}
        <div className="mt-8">
          <p className="mb-4 text-center text-sm font-semibold text-muted-foreground">
            {language === 'hi' ? 'अन्य ब्लॉग्स देखें' : 'View all blogs'}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {blogsData.map((blog, index) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className={`group rounded-lg border-2 p-3 text-center transition-all ${
                  index === currentIndex
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <p className="line-clamp-2 text-xs font-semibold text-foreground group-hover:text-primary">
                  {blog.title[language as keyof typeof blog.title]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
