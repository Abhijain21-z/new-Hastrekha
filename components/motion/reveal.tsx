"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in milliseconds before the reveal starts. */
  delay?: number;
  /** Stagger children: each direct child animates after the previous one. */
  stagger?: boolean;
  as?: ElementType;
  id?: string;
}

/**
 * Content is always present in the DOM and visible without JS or when the user
 * prefers reduced motion. The `data-reveal` attribute only opts the element into
 * a CSS transition that runs once it enters the viewport.
 */
export function Reveal({ children, className, delay = 0, stagger = false, as, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.dataset.revealed = "true";
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.dataset.revealed = "true";
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal=""
      data-stagger={stagger ? "" : undefined}
      className={cn(className)}
      style={style}
    >
      {children}
    </Tag>
  );
}
