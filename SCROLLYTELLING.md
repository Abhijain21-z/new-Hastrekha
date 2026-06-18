# Scrollytelling 2.0 - Narrative-Driven Scroll Animations

This project implements modern scrollytelling techniques to create rich, interactive scroll experiences that guide users through your content narratively.

## Features

### 1. **Parallax Effect** 
- Background layers move at different speeds as user scrolls
- Creates depth and visual interest
- Controlled via `enableParallax` option

### 2. **Reveal Animations**
- Elements fade in and slide up as they enter the viewport
- Smooth cinematic transitions
- Controlled via `enableReveal` option

### 3. **Cinematic Effects**
- Scale and opacity transformations synchronized with scroll
- Creates immersive depth effects
- Controlled via `enableCinematic` option

### 4. **Scroll Progress Tracking**
- Real-time progress calculation for each section
- Can be used for dynamic styling and interactions

## Usage

### Basic Implementation

Wrap your sections with `ScrollytellSection` component:

```tsx
import { ScrollytellSection } from '@/components/scrollytell-section';

export default function Page() {
  return (
    <main>
      <ScrollytellSection id="hero" enableParallax enableCinematic>
        <HeroComponent />
      </ScrollytellSection>

      <ScrollytellSection id="features" enableReveal parallaxBackground>
        <FeaturesComponent />
      </ScrollytellSection>
    </main>
  );
}
```

### Advanced Configuration

```tsx
<ScrollytellSection
  id="section-id"
  enableParallax={true}        // Enable parallax effect
  enableReveal={true}          // Enable reveal animations
  enableCinematic={true}       // Enable cinematic effects
  parallaxBackground={true}    // Add decorative parallax background
  threshold={0.1}              // Intersection observer threshold (0-1)
  parallaxStrength={0.5}       // Parallax movement strength (0-1)
  className="custom-styles"    // Additional Tailwind classes
>
  {/* Your content */}
</ScrollytellSection>
```

### Using the Hook Directly

For more control, use the `useScrollytelling` hook:

```tsx
'use client';

import { useScrollytelling } from '@/hooks/use-scrollytelling';

export function CustomSection() {
  const { ref, isVisible, scrollProgress } = useScrollytelling({
    enableParallax: true,
    enableCinematic: true,
    parallaxStrength: 0.5,
  });

  return (
    <section ref={ref}>
      {/* Content */}
      <div style={{ opacity: scrollProgress }}>
        Fades based on scroll progress
      </div>
    </section>
  );
}
```

## CSS Classes for Animations

Use these Tailwind-compatible classes for additional animations:

- `.scrollytell-reveal` - Basic reveal animation
- `.scrollytell-cinematic` - Cinematic reveal with clip-path
- `.scrollytell-depth` - 3D depth fade effect
- `.text-reveal` - Text reveal container
- `.text-reveal-word` - Individual word reveal
- `.parallax-slow`, `.parallax-medium`, `.parallax-fast` - Parallax speed presets
- `.ken-burns-effect` - Film-like zoom effect on images
- `.fade-in-on-scroll` - Simple fade-in on scroll with state toggle via `.visible` class

## Data Attributes for Parallax

Add `data-parallax` attribute to any element to apply parallax effect:

```tsx
<div data-parallax="0.3">
  {/* Moves at 30% of scroll speed */}
</div>
```

Speed values: 0 (stationary) to 1+ (faster than scroll)

## Smooth Scroll Behavior

The stylesheet automatically enables smooth scrolling for the entire page:
- `scroll-behavior: smooth;`
- `scroll-padding-top: 80px;` (accounts for fixed headers)

## Performance Considerations

- Parallax effects use `requestAnimationFrame` for smooth 60fps animations
- Intersection Observer prevents unnecessary calculations
- CSS transforms are GPU-accelerated
- Motion respects `prefers-reduced-motion` via CSS transitions

## Customization

### Adjusting Animation Speeds

Edit animation durations in `/app/globals.css`:

```css
@keyframes parallax-shift {
  /* Change 0.8s to your preferred duration */
  animation: parallax-shift 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Custom Easing Functions

Available easing options:
- `ease-in-out` - Smooth acceleration/deceleration
- `cubic-bezier(0.34, 1.56, 0.64, 1)` - Bouncy overshoot
- `linear` - Constant speed
- Custom cubic-bezier values supported

## Browser Support

- Chrome/Edge 65+
- Firefox 63+
- Safari 12+
- iOS Safari 12+
- Graceful degradation for older browsers

## Example: Multi-Section Page

```tsx
'use client';

import { ScrollytellSection } from '@/components/scrollytell-section';

export default function HomePage() {
  return (
    <main>
      {/* Hero with parallax background */}
      <ScrollytellSection
        id="hero"
        enableParallax
        enableCinematic
        parallaxBackground
      >
        <HeroSection />
      </ScrollytellSection>

      {/* Features with reveal animations */}
      <ScrollytellSection
        id="features"
        enableReveal
        enableParallax
        parallaxBackground
      >
        <FeaturesSection />
      </ScrollytellSection>

      {/* CTA with cinematic effects */}
      <ScrollytellSection
        id="cta"
        enableCinematic
        enableParallax
      >
        <CTASection />
      </ScrollytellSection>
    </main>
  );
}
```

## Accessibility

All animations respect user preferences:
- Reduced motion preferences are automatically honored
- Animations enhance but don't block content
- All content remains accessible without JavaScript
- Focus management preserved during animations

Enjoy creating immersive scrollytelling experiences! 🎬✨
