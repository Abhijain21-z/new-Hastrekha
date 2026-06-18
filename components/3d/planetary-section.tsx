'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const PlanetarySystem = dynamic(() => import('./planetary-system').then(mod => ({
  default: mod.PlanetarySystem
})), {
  loading: () => (
    <div className="w-full h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
        <p className="text-muted-foreground">Loading cosmic visualization...</p>
      </div>
    </div>
  ),
  ssr: false,
});

export function PlanetarySection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-background py-8">
      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient glow overlays */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            The <span className="text-primary">Navagraha</span> System
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nine celestial bodies (Navagraha) that influence your destiny according to Vedic Astrology. Each planet orbits in cosmic harmony, shaping your life path.
          </p>
        </div>

        {/* 3D Canvas */}
        <div className="relative w-full h-screen bg-gradient-to-b from-slate-950 to-slate-900 rounded-lg overflow-hidden border border-primary/20">
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
                <p className="text-muted-foreground">Initializing planetary system...</p>
              </div>
            </div>
          }>
            <PlanetarySystem />
          </Suspense>
        </div>

        {/* Planet Info Grid - Below canvas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card/50 border border-primary/20 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-foreground mb-2">Inner Planets</h3>
            <p className="text-sm text-muted-foreground">
              Mercury, Venus, Earth, Mars - Swift moving planets that influence daily events and personal relationships
            </p>
          </div>
          <div className="bg-card/50 border border-primary/20 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-foreground mb-2">Outer Giants</h3>
            <p className="text-sm text-muted-foreground">
              Jupiter & Saturn - Slow-moving, long-term influence on career, fortune, and spiritual growth
            </p>
          </div>
          <div className="bg-card/50 border border-primary/20 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-foreground mb-2">Distant Worlds</h3>
            <p className="text-sm text-muted-foreground">
              Uranus & Neptune - Mysterious forces of transformation and spiritual evolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
