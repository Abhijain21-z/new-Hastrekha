"use client";

import React from "react";
import {
  User,
  Scale,
  Target,
  Briefcase,
  Wallet,
  Heart,
  Users,
  GraduationCap,
  AlertTriangle,
  Home,
  Activity,
  Sparkles,
  Clover,
  Sun,
  Share2,
  RotateCcw,
  Globe,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import type { PredictionReport } from "@/lib/prediction-engine";

interface ReportViewProps {
  report: PredictionReport;
  reportHi: PredictionReport;
  userName: string;
  onNewReading: () => void;
}

function ReportCard({
  icon: Icon,
  numberEn,
  labelEn,
  labelHi,
  children,
  lang,
  borderClass = "border-primary/20",
}: {
  icon: React.ElementType;
  numberEn: string;
  labelEn: string;
  labelHi: string;
  children: React.ReactNode;
  lang: string;
  borderClass?: string;
}) {
  return (
    <div
      className={`rounded-lg border bg-card p-4 shadow-sm md:p-6 opacity-100 border-primary/20`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold text-muted-foreground">
            {numberEn}. {lang === "hi" ? labelHi : labelEn}
          </p>
        </div>
      </div>
      <div className="text-foreground">{children}</div>
    </div>
  );
}

export function ReportView({
  report,
  reportHi,
  userName,
  onNewReading,
}: ReportViewProps) {
  const { language, setLanguage } = useLanguage();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleShare = async (platform: "whatsapp" | "facebook") => {
    const text =
      language === "hi"
        ? `HastrRekha से मेरी AI हस्तरेखा और ज्योतिष रिपोर्ट देखें!`
        : "Check out my AI Palm Reading & Astrology Report from HastrRekha!";
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (platform === "whatsapp") {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
        "_blank"
      );
    } else {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
        "_blank"
      );
    }
  };

  return (
    <div className="w-full">
      {/* Minimal Header - No Extra Space */}
      <div className="mb-4 flex flex-col items-center justify-center gap-3 text-center">
        <div className="flex gap-2 flex-wrap items-center justify-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">
              {language === "hi" ? "AI रिपोर्ट" : "AI Report"}
            </span>
          </div>
          <button
            onClick={() => setLanguage(language === "hi" ? "en" : "hi")}
            className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-card px-2.5 py-1 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-primary/10"
          >
            <Globe className="h-3 w-3 text-primary" />
            {language === "hi" ? "EN" : "HI"}
          </button>
        </div>

        <h1 className="font-serif text-lg font-bold text-foreground md:text-xl">
          {language === "hi" ? "आपकी भाग्य रिपोर्ट" : "Your Destiny Report"}
        </h1>

        {userName && (
          <p className="font-semibold text-primary text-base">
            {userName}
          </p>
        )}
      </div>

      {/* Predictions - All Cards Visible From Top */}
      <div className="flex flex-col gap-4 px-2 md:px-0">
        {/* 1. Personality */}
        <ReportCard
          icon={User}
          numberEn="1"
          labelEn="Personality & Nature"
          labelHi="व्यक्तित्व और स्वभाव"
          lang={language}
        >
          <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
            {language === "hi" ? reportHi.personality : report.personality}
          </p>
        </ReportCard>

        {/* 2. Qualities & Defects */}
        <ReportCard
          icon={Scale}
          numberEn="2"
          labelEn="Qualities & Weaknesses"
          labelHi="गुण और दोष"
          lang={language}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-3">
              <h5 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-green-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {language === "hi" ? "गुण" : "Strengths"}
              </h5>
              <ul className="flex flex-col gap-1">
                {(language === "hi" ? reportHi.qualities.strengths : report.qualities.strengths).map((s, i) => (
                  <li key={i} className="text-xs text-green-800">
                    • {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3">
              <h5 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                <XCircle className="h-3.5 w-3.5" />
                {language === "hi" ? "दोष" : "Weaknesses"}
              </h5>
              <ul className="flex flex-col gap-1">
                {(language === "hi" ? reportHi.qualities.weaknesses : report.qualities.weaknesses).map((w, i) => (
                  <li key={i} className="text-xs text-amber-800">
                    • {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ReportCard>

        {/* 3. Life Path & Purpose */}
        <ReportCard
          icon={Target}
          numberEn="3"
          labelEn="Life Purpose & Path"
          labelHi="जीवन उद्देश्य और पथ"
          lang={language}
        >
          <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
            {language === "hi" ? reportHi.purpose : report.purpose}
          </p>
        </ReportCard>

        {/* 4. Career & Professional Life */}
        <ReportCard
          icon={Briefcase}
          numberEn="4"
          labelEn="Career & Profession"
          labelHi="कैरियर और व्यवसाय"
          lang={language}
        >
          <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
            {language === "hi" ? reportHi.career : report.career}
          </p>
        </ReportCard>

        {/* 5. Wealth & Financial Status */}
        <ReportCard
          icon={Wallet}
          numberEn="5"
          labelEn="Wealth & Financial Status"
          labelHi="धन और आर्थिक स्थिति"
          lang={language}
        >
          <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
            {language === "hi" ? reportHi.wealth : report.wealth}
          </p>
        </ReportCard>

        {/* 6. Marriage & Love Life */}
        <ReportCard
          icon={Heart}
          numberEn="6"
          labelEn="Marriage & Love Life"
          labelHi="विवाह और प्रेम जीवन"
          lang={language}
        >
          <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
            {language === "hi" ? reportHi.marriage : report.marriage}
          </p>
        </ReportCard>

        {/* 7. Partner Nature & Relationships */}
        <ReportCard
          icon={Users}
          numberEn="7"
          labelEn="Partner & Relationships"
          labelHi="साथी और रिश्ते"
          lang={language}
        >
          <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
            {language === "hi" ? reportHi.partnerNature : report.partnerNature}
          </p>
        </ReportCard>

        {/* 8. Education & Learning */}
        <ReportCard
          icon={GraduationCap}
          numberEn="8"
          labelEn="Education & Learning"
          labelHi="शिक्षा और सीखना"
          lang={language}
        >
          <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
            {language === "hi" ? reportHi.education : report.education}
          </p>
        </ReportCard>

        {/* 9. Health & Wellness */}
        <ReportCard
          icon={Activity}
          numberEn="9"
          labelEn="Health & Wellness"
          labelHi="स्वास्थ्य और सुस्थता"
          lang={language}
        >
          <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
            {language === "hi" ? reportHi.health : report.health}
          </p>
        </ReportCard>

        {/* 10. Spirituality & Growth */}
        <ReportCard
          icon={Sparkles}
          numberEn="10"
          labelEn="Spirituality & Growth"
          labelHi="आध्यात्मिकता और विकास"
          lang={language}
        >
          <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
            {language === "hi" ? reportHi.spiritual : report.spiritual}
          </p>
        </ReportCard>

        {/* 11. Challenges at Different Ages */}
        <ReportCard
          icon={AlertTriangle}
          numberEn="11"
          labelEn="Life Challenges by Age"
          labelHi="जीवन में चुनौतियां"
          lang={language}
        >
          <div className="space-y-2">
            {(language === "hi" ? reportHi.challengeAges : report.challengeAges).map((item, i) => (
              <div key={i} className="text-sm">
                <p className="font-semibold text-foreground">Age: {item.age}</p>
                <p className="text-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </ReportCard>

        {/* 12. Lucky Elements */}
        <ReportCard
          icon={Clover}
          numberEn="12"
          labelEn="Lucky Elements"
          labelHi="भाग्यशाली तत्व"
          lang={language}
        >
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-yellow-200 bg-yellow-50/50 p-3">
              <p className="text-xs font-semibold text-yellow-700">
                {language === "hi" ? "भाग्यशाली संख्याएं" : "Lucky Numbers"}
              </p>
              <p className="text-sm font-bold text-yellow-900 mt-1">
                {(language === "hi" ? reportHi.lucky : report.lucky).numbers}
              </p>
            </div>
            <div className="rounded-lg border border-yellow-200 bg-yellow-50/50 p-3">
              <p className="text-xs font-semibold text-yellow-700">
                {language === "hi" ? "भाग्यशाली रंग" : "Lucky Color"}
              </p>
              <p className="text-sm font-bold text-yellow-900 mt-1">
                {(language === "hi" ? reportHi.lucky : report.lucky).color}
              </p>
            </div>
            <div className="rounded-lg border border-yellow-200 bg-yellow-50/50 p-3">
              <p className="text-xs font-semibold text-yellow-700">
                {language === "hi" ? "भाग्यशाली दिन" : "Lucky Day"}
              </p>
              <p className="text-sm font-bold text-yellow-900 mt-1">
                {(language === "hi" ? reportHi.lucky : report.lucky).day}
              </p>
            </div>
          </div>
        </ReportCard>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
        <div className="flex gap-2 flex-wrap justify-center">
          <Button
            onClick={() => handleShare("whatsapp")}
            variant="outline"
            size="sm"
            className="text-xs"
          >
            <Share2 className="h-3.5 w-3.5 mr-1.5" />
            {language === "hi" ? "व्हाट्सएप शेयर करें" : "Share on WhatsApp"}
          </Button>
          <Button
            onClick={() => handleShare("facebook")}
            variant="outline"
            size="sm"
            className="text-xs"
          >
            <Share2 className="h-3.5 w-3.5 mr-1.5" />
            {language === "hi" ? "फेसबुक शेयर करें" : "Share on Facebook"}
          </Button>
          <Button
            onClick={onNewReading}
            variant="default"
            size="sm"
            className="text-xs"
          >
            <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
            {language === "hi" ? "नई रिपोर्ट प्राप्त करें" : "Get New Reading"}
          </Button>
        </div>
      </div>
    </div>
  );
}
