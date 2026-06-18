"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { ZodiacWheel, PalmSVG } from "@/components/zodiac-icons";

interface ProcessingScreenProps {
  onComplete: () => void;
}

export function ProcessingScreen({ onComplete }: ProcessingScreenProps) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    t("processing.step1"),
    t("processing.step2"),
    t("processing.step3"),
    t("processing.step4"),
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
      <div className="relative mb-10">
        <ZodiacWheel className="h-64 w-64 animate-spin-slow opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <PalmSVG className="h-32 w-24 animate-pulse-glow" />
        </div>
        {/* Glowing ring */}
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-pulse-glow" />
      </div>

      {/* Title */}
      <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
        {t("processing.title")}
      </h2>

      {/* Steps */}
      <div className="mb-8 flex flex-col gap-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 transition-opacity duration-500 ${
              i <= currentStep ? "opacity-100" : "opacity-30"
            }`}
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                i < currentStep
                  ? "bg-primary text-primary-foreground"
                  : i === currentStep
                    ? "bg-primary/20 text-primary animate-pulse"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {i < currentStep ? "\u2713" : i + 1}
            </div>
            <span
              className={`text-sm ${
                i === currentStep
                  ? "font-medium text-foreground"
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
        <div className="mb-2 flex justify-between text-xs text-muted-foreground">
          <span>{steps[currentStep]}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
