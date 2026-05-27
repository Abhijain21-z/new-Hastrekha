'use client';

import { useState, useCallback } from 'react';
import { LanguageProvider, useLanguage } from '@/lib/language-context';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PalmForm } from '@/components/palm-reading/palm-form';
import { ProcessingScreen } from '@/components/palm-reading/processing-screen';
import { ReportView } from '@/components/palm-reading/report-view';

type Stage = 'form' | 'processing' | 'report';

function PalmReadingContent() {
  const { setLanguage } = useLanguage();
  const [stage, setStage] = useState<Stage>('form');
  const [report, setReport] = useState<any>(null);
  const [userName, setUserName] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

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
        {stage === 'report' && report && (
          <ReportView
            report={report}
            reportHi={report}
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
