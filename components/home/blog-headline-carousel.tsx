'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { blogsData } from '@/lib/blogs-data';

export function BlogHeadlineCarousel() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogsData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + blogsData.length) % blogsData.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogsData.length);
    setAutoPlay(false);
  };

  const currentBlog = blogsData[currentIndex];
  const title = language === 'hi' ? currentBlog.title.hi : currentBlog.title.en;

  return (
    <section className="w-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-2 md:py-4 border-y-2 border-primary/30">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Breaking News Badge */}
          <div className="flex items-center gap-1 md:gap-2 bg-destructive px-2 md:px-3 py-1 md:py-1.5 rounded-full flex-shrink-0">
            <Zap className="h-3 md:h-4 w-3 md:w-4 text-destructive-foreground animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold text-destructive-foreground uppercase tracking-wider">
              {language === 'hi' ? 'नई' : 'News'}
            </span>
          </div>

          {/* Carousel Content */}
          <div className="flex-1 overflow-hidden min-w-0">
            <Link
              href={`/blog/${currentBlog.slug}`}
              className="group block"
            >
              <div className="text-sm md:text-lg font-bold text-foreground hover:text-primary transition-colors truncate cursor-pointer line-clamp-1">
                {title}
              </div>
              <div className="text-[11px] md:text-sm text-muted-foreground group-hover:text-primary/70 transition-colors hidden md:block">
                {language === 'hi' ? 'पूरी खबर पढ़ें →' : 'Read full story →'}
              </div>
            </Link>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
            <button
              onClick={goToPrevious}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="p-1 md:p-2 rounded-lg hover:bg-primary/20 transition-colors text-foreground hover:text-primary"
              aria-label="Previous blog"
            >
              <ChevronLeft className="h-4 md:h-5 w-4 md:w-5" />
            </button>
            
            {/* Slide Indicators */}
            <div className="flex items-center gap-1 md:gap-1.5 hidden sm:flex">
              {blogsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoPlay(false);
                  }}
                  className={`h-1.5 md:h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-6 md:w-8'
                      : 'bg-primary/30 w-1.5 md:w-2 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to blog ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="p-1 md:p-2 rounded-lg hover:bg-primary/20 transition-colors text-foreground hover:text-primary"
              aria-label="Next blog"
            >
              <ChevronRight className="h-4 md:h-5 w-4 md:w-5" />
            </button>
          </div>
        </div>

        {/* Micro Progress Bar */}
        <div className="mt-2 md:mt-3 h-0.5 md:h-1 w-full bg-primary/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{
              width: `${((currentIndex + 1) / blogsData.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
