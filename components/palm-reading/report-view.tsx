"use client";

import React from "react"

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

export function ReportView({
  report,
  reportHi,
  userName,
  onNewReading,
}: ReportViewProps) {
  const { language, setLanguage } = useLanguage();

  const handleShare = async (platform: "whatsapp" | "facebook") => {
    const text =
      language === "hi"
        ? `JyotishAI से मेरी AI हस्तरेखा और ज्योतिष रिपोर्ट देखें!`
        : "Check out my AI Palm Reading & Astrology Report from JyotishAI!";
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (platform === "whatsapp") {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
        "_blank",
      );
    } else {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
        "_blank",
      );
    }
  };

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">
              {language === "hi"
                ? "AI द्वारा तैयार रिपोर्ट"
                : "AI-Generated Report"}
            </span>
          </div>
          <button
            onClick={() => setLanguage(language === "hi" ? "en" : "hi")}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-primary/10"
          >
            <Globe className="h-3.5 w-3.5 text-primary" />
            {language === "hi" ? "English" : "हिंदी"}
          </button>
        </div>
        <h1 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
          {language === "hi" ? "आपकी भाग्य रिपोर्ट" : "Your Destiny Report"}
        </h1>
        {userName && (
          <p className="mt-2 font-serif text-lg font-semibold text-primary">
            {language === "hi" ? `नाम: ${userName}` : `Name: ${userName}`}
          </p>
        )}
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {language === "hi"
            ? "आपकी हस्तरेखा और जन्म विवरण के आधार पर यह विस्तृत जीवन विश्लेषण तैयार किया गया है।"
            : "This detailed life analysis has been prepared based on your palm lines and birth details."}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {/* 1. Personality */}
        <ReportCard
          icon={User}
          numberEn="1"
          labelEn="Personality & Nature Analysis"
          labelHi="व्यक्तित्व और स्वभाव विश्लेषण"
          lang={language}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-2">भविष्यफल (Hindi)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reportHi.personality}
              </p>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-2">Prediction (English)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {report.personality}
              </p>
            </div>
          </div>
        </ReportCard>

        {/* 2. Qualities & Defects */}
        <ReportCard
          icon={Scale}
          numberEn="2"
          labelEn="Qualities & Weaknesses"
          labelHi="गुण और दोष"
          lang={language}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-3">भविष्यफल (Hindi)</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
                  <h5 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-green-700">
                    <CheckCircle2 className="h-4 w-4" />
                    प्रमुख गुण
                  </h5>
                  <ul className="flex flex-col gap-1.5">
                    {reportHi.qualities.strengths.map((s, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-green-800"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4">
                  <h5 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                    <XCircle className="h-4 w-4" />
                    संभावित दोष
                  </h5>
                  <ul className="flex flex-col gap-1.5">
                    {reportHi.qualities.weaknesses.map((w, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-amber-800"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-3">Prediction (English)</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
                  <h5 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-green-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Key Strengths
                  </h5>
                  <ul className="flex flex-col gap-1.5">
                    {report.qualities.strengths.map((s, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-green-800"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4">
                  <h5 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                    <XCircle className="h-4 w-4" />
                    Possible Weaknesses
                  </h5>
                  <ul className="flex flex-col gap-1.5">
                    {report.qualities.weaknesses.map((w, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-amber-800"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ReportCard>

        {/* 3. Life Purpose */}
        <ReportCard
          icon={Target}
          numberEn="3"
          labelEn="Life Purpose"
          labelHi="जीवन का उद्देश्य"
          lang={language}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-2">भविष्यफल (Hindi)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reportHi.purpose}
              </p>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-2">Prediction (English)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {report.purpose}
              </p>
            </div>
          </div>
        </ReportCard>

        {/* 4. Career */}
        <ReportCard
          icon={Briefcase}
          numberEn="4"
          labelEn="Career & Profession"
          labelHi="करियर और पेशा"
          lang={language}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-2">भविष्यफल (Hindi)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reportHi.career}
              </p>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-2">Prediction (English)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {report.career}
              </p>
            </div>
          </div>
        </ReportCard>

        {/* 5. Wealth */}
        <ReportCard
          icon={Wallet}
          numberEn="5"
          labelEn="Wealth & Financial Status"
          labelHi="धन और आर्थिक स्थिति"
          lang={language}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-2">भविष्यफल (Hindi)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reportHi.wealth}
              </p>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-2">Prediction (English)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {report.wealth}
              </p>
            </div>
          </div>
        </ReportCard>

        {/* 6. Marriage */}
        <ReportCard
          icon={Heart}
          numberEn="6"
          labelEn="Marriage & Love Life"
          labelHi="विवाह और प्रेम जीवन"
          lang={language}
          accent
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-2">भविष्यफल (Hindi)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reportHi.marriage}
              </p>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-2">Prediction (English)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {report.marriage}
              </p>
            </div>
          </div>
        </ReportCard>

        {/* 7. Partner Nature */}
        <ReportCard
          icon={Users}
          numberEn="7"
          labelEn="Life Partner's Nature"
          labelHi="जीवनसाथी का स्वभाव"
          lang={language}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-2">भविष्यफल (Hindi)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reportHi.partnerNature}
              </p>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-2">Prediction (English)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {report.partnerNature}
              </p>
            </div>
          </div>
        </ReportCard>

        {/* 8. Education */}
        <ReportCard
          icon={GraduationCap}
          numberEn="8"
          labelEn="Education & Knowledge"
          labelHi="शिक्षा और ज्ञान"
          lang={language}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-2">भविष्यफल (Hindi)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reportHi.education}
              </p>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-2">Prediction (English)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {report.education}
              </p>
            </div>
          </div>
        </ReportCard>

        {/* 9. Challenge Ages */}
        <ReportCard
          icon={AlertTriangle}
          numberEn="9"
          labelEn="Challenging Life Phases"
          labelHi="जीवन की चुनौतीपूर्ण आयु"
          lang={language}
          warning
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-3">भविष्यफल (Hindi)</h4>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {reportHi.challengeAges.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-primary/15 bg-primary/5 p-3 text-center"
                  >
                    <div className="font-serif text-lg font-bold text-primary">
                      {c.age}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {c.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-3">Prediction (English)</h4>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {report.challengeAges.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-primary/15 bg-primary/5 p-3 text-center"
                  >
                    <div className="font-serif text-lg font-bold text-primary">
                      {c.age}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {c.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ReportCard>

        {/* 10. Property */}
        <ReportCard
          icon={Home}
          numberEn="10"
          labelEn="Property & House Luck"
          labelHi="घर और संपत्ति योग"
          lang={language}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-2">भविष्यफल (Hindi)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reportHi.property}
              </p>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-2">Prediction (English)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {report.property}
              </p>
            </div>
          </div>
        </ReportCard>

        {/* 11. Health */}
        <ReportCard
          icon={Activity}
          numberEn="11"
          labelEn="Health Indicators"
          labelHi="स्वास्थ्य संकेत"
          lang={language}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-3">भविष्यफल (Hindi)</h4>
              <ul className="flex flex-col gap-2">
                {reportHi.health.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-3">Prediction (English)</h4>
              <ul className="flex flex-col gap-2">
                {report.health.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ReportCard>

        {/* 12. Spiritual */}
        <ReportCard
          icon={Sparkles}
          numberEn="12"
          labelEn="Spiritual Signs"
          labelHi="आध्यात्मिक संकेत"
          lang={language}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-2">भविष्यफल (Hindi)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reportHi.spiritual}
              </p>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-2">Prediction (English)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {report.spiritual}
              </p>
            </div>
          </div>
        </ReportCard>

        {/* 13. Lucky Elements */}
        <ReportCard
          icon={Clover}
          numberEn="13"
          labelEn="Lucky Elements"
          labelHi="शुभ तत्व"
          lang={language}
          accent
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-3">भविष्यफल (Hindi)</h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-primary/15 bg-primary/5 p-4 text-center">
                  <div className="font-serif text-xl font-bold text-primary">
                    {reportHi.lucky.numbers}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    शुभ अंक
                  </div>
                </div>
                <div className="rounded-lg border border-primary/15 bg-primary/5 p-4 text-center">
                  <div className="font-serif text-xl font-bold text-primary">
                    {reportHi.lucky.color}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    शुभ रंग
                  </div>
                </div>
                <div className="rounded-lg border border-primary/15 bg-primary/5 p-4 text-center">
                  <div className="font-serif text-xl font-bold text-primary">
                    {reportHi.lucky.day}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    शुभ दिन
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-3">Prediction (English)</h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-primary/15 bg-primary/5 p-4 text-center">
                  <div className="font-serif text-xl font-bold text-primary">
                    {report.lucky.numbers}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Lucky Numbers
                  </div>
                </div>
                <div className="rounded-lg border border-primary/15 bg-primary/5 p-4 text-center">
                  <div className="font-serif text-xl font-bold text-primary">
                    {report.lucky.color}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Lucky Color
                  </div>
                </div>
                <div className="rounded-lg border border-primary/15 bg-primary/5 p-4 text-center">
                  <div className="font-serif text-xl font-bold text-primary">
                    {report.lucky.day}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Lucky Day
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReportCard>

        {/* 14. Remedies */}
        <ReportCard
          icon={Sun}
          numberEn="14"
          labelEn="Fortune Improvement Tips"
          labelHi="भाग्य सुधार सुझाव"
          lang={language}
          accent
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-primary mb-3">भविष्यफल (Hindi)</h4>
              <ul className="flex flex-col gap-2">
                {reportHi.remedies.map((rem, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Sun className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {rem}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-primary/10">
              <h4 className="text-xs font-semibold text-primary mb-3">Prediction (English)</h4>
              <ul className="flex flex-col gap-2">
                {report.remedies.map((rem, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Sun className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {rem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ReportCard>

        {/* Disclaimer */}
        <div className="mt-2 rounded-xl border border-primary/10 bg-primary/5 px-5 py-4 text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            {language === "hi"
              ? "यह रिपोर्ट आपके व्यक्तित्व और जीवन ऊर्जा के संकेतों पर आधारित है और मार्गदर्शन हेतु है। यह किसी भी प्रकार की चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं है।"
              : "This report is based on signs of your personality and life energy and is for guidance purposes. It is not a substitute for any medical, legal, or financial advice."}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button
          onClick={() => handleShare("whatsapp")}
          className="w-full bg-[#25D366] text-[#ffffff] hover:bg-[#25D366]/90 sm:w-auto"
        >
          <Share2 className="mr-2 h-4 w-4" />
          WhatsApp
        </Button>
        <Button
          onClick={() => handleShare("facebook")}
          className="w-full bg-[#1877F2] text-[#ffffff] hover:bg-[#1877F2]/90 sm:w-auto"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Facebook
        </Button>
        <Button
          onClick={onNewReading}
          variant="outline"
          className="w-full border-primary/30 text-foreground hover:bg-primary/10 sm:w-auto bg-transparent"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          {language === "hi" ? "नया पठन प्राप्त करें" : "Get New Reading"}
        </Button>
      </div>
    </div>
  );
}

/* Reusable report card */
function ReportCard({
  icon: Icon,
  numberEn,
  labelEn,
  labelHi,
  lang,
  accent,
  warning,
  children,
}: {
  icon: React.ElementType;
  numberEn: string;
  labelEn: string;
  labelHi: string;
  lang: string;
  accent?: boolean;
  warning?: boolean;
  children: React.ReactNode;
}) {
  const borderClass = warning
    ? "border-amber-300/40"
    : accent
      ? "border-primary/25"
      : "border-primary/15";

  return (
    <div
      className={`rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md md:p-6 ${borderClass}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
        </div>
        <div className="flex-1">
          <h2 className="font-serif text-base font-semibold leading-tight text-foreground md:text-lg">
            <span className="mr-1.5 text-primary">{numberEn}.</span>
            {lang === "hi" ? labelHi : labelEn}
          </h2>
          <span className="text-xs text-muted-foreground">
            {lang === "hi" ? labelEn : labelHi}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}
