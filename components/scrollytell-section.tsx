'use client';

import React, { ReactNode } from 'react';
import { useScrollytelling, ScrollytellOptions } from '@/hooks/use-scrollytelling';

interface ScrollytellSectionProps extends ScrollytellOptions {
  children: ReactNode;
  className?: string;
  id?: string;
  parallaxBackground?: boolean;
}

export function ScrollytellSection({
  children,
  className = '',
  id,
  parallaxBackground = false,
  ...options
}: ScrollytellSectionProps) {
  const { ref, isVisible, scrollProgress } = useScrollytelling(options);

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-500 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0.5,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {/* Parallax background layer */}
      {parallaxBackground && (
        <div
          data-parallax="0.3"
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle at top right, rgba(168, 85, 247, 0.1), transparent)',
          }}
        />
      )}

      {/* Main content with cinematic reveal */}
      <div
        data-cinematic="true"
        className="relative z-10"
      >
        {children}
      </div>

      {/* Scroll progress indicator (optional visual feedback) */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20 absolute bottom-0 left-0 right-0">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </section>
  );
}
