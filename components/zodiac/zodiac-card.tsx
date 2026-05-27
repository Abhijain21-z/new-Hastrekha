"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

interface ZodiacCardProps {
  id: string;
  name_en: string;
  name_hi: string;
  dates: string;
  image: string;
}

export function ZodiacCard({ id, name_en, name_hi, dates, image }: ZodiacCardProps) {
  return (
    <Link href={`/zodiac/${id}`}>
      <Card className="group relative overflow-hidden border-primary/20 bg-gradient-to-b from-primary/5 to-background/50 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
        <div className="flex flex-col items-center gap-4">
          {/* Zodiac Image */}
          <div className="relative h-24 w-24 overflow-hidden rounded-lg border border-primary/20 bg-primary/5 shadow-md transition-transform duration-300 group-hover:scale-110">
            <Image
              src={image}
              alt={name_en}
              fill
              sizes="96px"
              className="object-contain p-2"
            />
          </div>

          {/* Text Content */}
          <div className="text-center">
            {/* Hindi Name */}
            <h3 className="font-serif text-sm font-bold text-primary mb-1">
              {name_hi}
            </h3>

            {/* English Name */}
            <p className="text-base font-semibold text-foreground mb-2">
              {name_en}
            </p>

            {/* Dates */}
            <p className="text-xs text-muted-foreground">
              {dates}
            </p>
          </div>

          {/* Hover Indicator */}
          <div className="absolute inset-0 rounded-lg bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
        </div>
      </Card>
    </Link>
  );
}
