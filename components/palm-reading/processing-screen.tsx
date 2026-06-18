"use client";

import { useEffect, useState } from "react";
import { ZodiacWheel, PalmSVG } from "@/components/zodiac-icons";
import { useLanguage } from "@/lib/language-context";

interface ProcessingScreenProps {
  onComplete: () => void;
}

export function ProcessingScreen({ onComplete }: ProcessingScreenProps) {
  const { language } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = language === "hi" 
    ? [
        "हथेली का विश्लेषण जारी है...",
        "जीवन रेखा की जांच की जा रही है...",
        "भाग्य और नियति की गणना की जा रही है...",
        "अंतिम विश्लेषण तैयार किया जा रहा है..."
      ]
    : [
        "Analyzing Palm...",
        "Reading Life Lines...",
        "Checking Destiny...",
        "Final Analysis..."
      ];

  useEffect(() => {
    const duration = 30000; // 30 seconds
    const interval = 50;
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress < 25) setCurrentStep(0);
    else if (progress < 50) setCurrentStep(1);
    else if (progress < 75) setCurrentStep(2);
    else setCurrentStep(3);
  }, [progress]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      {/* Animated visuals */}
      <div className="relative mb-8">
        <ZodiacWheel className="h-64 w-64 animate-spin-slow opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <PalmSVG className="h-32 w-24 animate-pulse-glow" />
        </div>
        {/* Glowing ring */}
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-pulse-glow" />
      </div>

      {/* Title */}
      <h2 className="mb-4 font-serif text-xl font-bold text-foreground md:text-2xl">
        {language === "hi" ? "आपकी रिपोर्ट तैयार की जा रही है..." : "Processing Your Report..."}
      </h2>

      {/* Steps */}
      <div className="mb-6 w-full max-w-md flex flex-col gap-2">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 transition-opacity duration-500 ${
              i <= currentStep ? "opacity-100" : "opacity-30"
            }`}
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold shrink-0 ${
                i < currentStep
                  ? "bg-primary text-primary-foreground"
                  : i === currentStep
                    ? "bg-primary/20 text-primary animate-pulse"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {i < currentStep ? "✓" : i + 1}
            </div>
            <span
              className={`text-xs md:text-sm ${
                i === currentStep
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-md">
        <div className="mb-1 flex justify-between text-xs text-muted-foreground">
          <span className="text-foreground font-medium">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted border border-primary/20">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
