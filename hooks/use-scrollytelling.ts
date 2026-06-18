'use client';

import { useEffect, useRef, useState } from 'react';

export interface ScrollytellOptions {
  threshold?: number;
  parallaxStrength?: number;
  enableReveal?: boolean;
  enableParallax?: boolean;
  enableCinematic?: boolean;
}

export const useScrollytelling = (options: ScrollytellOptions = {}) => {
  const {
    threshold = 0.1,
    parallaxStrength = 0.5,
    enableReveal = true,
    enableParallax = true,
    enableCinematic = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    // Intersection Observer for reveal animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });

    observer.observe(target);

    // Scroll listener for parallax and cinematic effects
    const handleScroll = () => {
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const elementCenter = rect.top + rect.height / 2;
      const progress = 1 - (elementCenter - windowHeight / 2) / windowHeight;
      const clampedProgress = Math.max(0, Math.min(1, progress + 0.5));
      
      setScrollProgress(clampedProgress);

      // Apply parallax effect
      if (enableParallax) {
        const parallaxElements = target.querySelectorAll('[data-parallax]');
        parallaxElements.forEach((el: Element) => {
          const element = el as HTMLElement;
          const speed = parseFloat(element.dataset.parallax || '0.5');
          const yOffset = window.scrollY * speed * parallaxStrength;
          element.style.transform = `translateY(${yOffset}px)`;
        });
      }

      // Apply cinematic effects
      if (enableCinematic) {
        const cinematicElements = target.querySelectorAll('[data-cinematic]');
        cinematicElements.forEach((el: Element) => {
          const element = el as HTMLElement;
          const opacity = Math.min(1, clampedProgress * 2);
          const scale = 0.95 + clampedProgress * 0.05;
          element.style.opacity = opacity.toString();
          element.style.transform = `scale(${scale})`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.unobserve(target);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, parallaxStrength, enableReveal, enableParallax, enableCinematic]);

  return { ref, isVisible, scrollProgress };
};
