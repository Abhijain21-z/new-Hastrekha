'use client';

import { useState, useCallback, useMemo } from 'react';
import { LanguageProvider, useLanguage, type Language } from '@/lib/language-context';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PalmForm } from '@/components/palm-reading/palm-form';
import { ProcessingScreen } from '@/components/palm-reading/processing-screen';
import { ReportView } from '@/components/palm-reading/report-view';
import { generatePrediction } from '@/lib/prediction-engine';

type Stage = 'form' | 'processing' | 'report';

function PalmReadingContent() {
  const { language, setLanguage } = useLanguage();
  const [stage, setStage] = useState<Stage>('form');
  const [report, setReport] = useState<any>(null);
  const [originalReport, setOriginalReport] = useState<any>(null);
  const [birthDetails, setBirthDetails] = useState<any>(null);
  const [userName, setUserName] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Generate current language report based on selected language
  const currentLanguageReport = useMemo(() => {
    if (!originalReport || !birthDetails) return null;
    // Regenerate prediction in the currently selected language
    return generatePrediction(birthDetails, language);
  }, [originalReport, birthDetails, language]);

  const handleFormSubmit = async (data: {
    name: string;
    image: string;
    dob: string;
    birthTime: string;
    birthPlace: string;
    palmAnalysis?: any;
  }) => {
    setIsAnalyzing(true);
    setUserName(data.name);

    try {
      // If palmAnalysis is already provided from the form, use it directly
      if (data.palmAnalysis) {
        // Store original report and birth details for language switching
        setOriginalReport(data.palmAnalysis);
        setBirthDetails({
          dob: data.dob,
          birthTime: data.birthTime,
          birthPlace: data.birthPlace,
        });
        // Set report and stage immediately to show processing screen
        setReport(data.palmAnalysis);
        setLanguage('hi'); // Default to Hindi
        setStage('processing');
        // Show processing screen for 60 seconds (1 minute)
        await new Promise((resolve) => setTimeout(resolve, 60000));
        setStage('report');
      }
    } catch (error) {
      console.error('[v0] Error processing palm reading:', error);
      setStage('form');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleNewReading = () => {
    setStage('form');
    setReport(null);
    setOriginalReport(null);
    setBirthDetails(null);
    setUserName('');
    setIsAnalyzing(false);
  };

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen px-4 py-12 lg:px-8 lg:py-16">
        {stage === 'form' && (
          <PalmForm onSubmit={handleFormSubmit} isAnalyzing={isAnalyzing} />
        )}
        {stage === 'processing' && (
          <ProcessingScreen onComplete={() => setStage('report')} />
        )}
        {stage === 'report' && currentLanguageReport && (
          <ReportView
            report={currentLanguageReport}
            userName={userName}
            onNewReading={handleNewReading}
          />
        )}
      </main>
      <SiteFooter />
    </>
  );
}

export default function PalmReadingPage() {
  return (
    <LanguageProvider>
      <PalmReadingContent />
    </LanguageProvider>
  );
}
