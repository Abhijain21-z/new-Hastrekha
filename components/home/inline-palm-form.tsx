'use client';

import { useState, useRef, type ChangeEvent } from 'react';
import {
  Camera,
  Upload,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  X,
  User,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/lib/language-context';
import { ProcessingScreen } from '@/components/palm-reading/processing-screen';
import { ReportView } from '@/components/palm-reading/report-view';
import { generatePrediction } from '@/lib/prediction-engine';
import type { PredictionReport } from '@/lib/prediction-engine';

type Stage = 'form' | 'processing' | 'report';

export function InlinePalmForm() {
  const { language } = useLanguage();
  const [stage, setStage] = useState<Stage>('form');
  const [name, setName] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [dob, setDob] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [error, setError] = useState('');
  const [report, setReport] = useState<{ en: PredictionReport; hi: PredictionReport } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size must be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setError('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!name.trim() || !image || !dob || !birthTime || !birthPlace) {
      setError('Please fill all fields and upload a palm image');
      return;
    }

    try {
      setError('');
      setStage('processing');

      // Generate prediction-engine reports
      const reportEn = generatePrediction({ dob, birthTime, birthPlace }, 'en');
      const reportHi = generatePrediction({ dob, birthTime, birthPlace }, 'hi');

      setReport({ en: reportEn, hi: reportHi });
      setStage('report');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate prediction');
      setStage('form');
      console.log('[v0] Prediction error:', err);
    }
  };

  const handleNewReading = () => {
    setName('');
    setImage(null);
    setDob('');
    setBirthTime('');
    setBirthPlace('');
    setError('');
    setReport(null);
    setStage('form');
  };

  const isValid = name.trim() && image && dob && birthTime && birthPlace;

  if (stage === 'processing') {
    return <ProcessingScreen onComplete={() => {}} />;
  }

  if (stage === 'report' && report) {
    return (
      <ReportView
        report={report.en}
        reportHi={report.hi}
        userName={name}
        onNewReading={handleNewReading}
      />
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          {language === 'hi' ? 'तुरंत हस्तरेखा पढ़ना प्राप्त करें' : 'Get Your Palm Reading Instantly'}
        </h2>
        <p className="mt-2 text-base text-muted-foreground">
          {language === 'hi'
            ? 'अपनी हथेली की तस्वीर अपलोड करें और तुरंत AI-संचालित भविष्यवाणी प्राप्त करें'
            : 'Upload your palm image and get AI-powered predictions instantly'}
        </p>
        <p className="mt-2 text-sm text-primary font-medium">
          {language === 'hi'
            ? '🚀 Google Gemini AI + प्राचीन हस्तरेखा ज्ञान'
            : '🚀 Google Gemini AI + Ancient Palmistry Knowledge'}
        </p>
      </div>

      <div className="flex flex-col gap-6 rounded-2xl border border-primary/20 bg-card p-6 shadow-lg border-glow md:p-8">
        {/* Error Alert */}
        {error && (
          <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4">
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        {/* Name Input */}
        <div>
          <Label htmlFor="fullName" className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <User className="h-3.5 w-3.5 text-primary" />
            {language === 'hi' ? 'पूरा नाम / Full Name' : 'Full Name / पूरा नाम'}
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder={language === 'hi' ? 'अपना पूरा नाम दर्ज करें' : 'Enter your full name'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-primary/20 bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Image Upload */}
        <div>
          <Label className="mb-2 block text-sm font-semibold text-foreground">
            {language === 'hi' ? 'हथेली की तस्वीर अपलोड करें' : 'Upload Palm Image'}
          </Label>
          {image ? (
            <div className="relative mx-auto w-fit">
              <img
                src={image}
                alt="Uploaded palm"
                className="h-48 w-48 rounded-xl border border-primary/20 object-cover shadow-md"
              />
              <button
                onClick={() => setImage(null)}
                className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-destructive-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-1 flex-col items-center gap-2 rounded-xl border-2 border-dashed border-primary/25 bg-primary/5 px-4 py-8 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Upload className="h-8 w-8 text-primary/60" />
                <span className="text-sm">{language === 'hi' ? 'अपलोड करें' : 'Upload'}</span>
              </button>
              <button
                onClick={() => cameraInputRef.current?.click()}
                className="flex flex-1 flex-col items-center gap-2 rounded-xl border-2 border-dashed border-primary/25 bg-primary/5 px-4 py-8 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Camera className="h-8 w-8 text-primary/60" />
                <span className="text-sm">{language === 'hi' ? 'कैमरा' : 'Camera'}</span>
              </button>
            </div>
          )}
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>

        {/* Birth Details */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="dob" className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              {language === 'hi' ? 'जन्म तारीख' : 'Date of Birth'}
            </Label>
            <Input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="border-primary/20 bg-background text-foreground"
            />
          </div>
          <div>
            <Label htmlFor="birthTime" className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {language === 'hi' ? 'जन्म समय' : 'Birth Time'}
            </Label>
            <Input
              id="birthTime"
              type="time"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="border-primary/20 bg-background text-foreground"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="birthPlace" className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {language === 'hi' ? 'जन्म स्थान' : 'Birth Place'}
          </Label>
          <Input
            id="birthPlace"
            type="text"
            placeholder={language === 'hi' ? 'शहर का नाम दर्ज करें' : 'Enter city name'}
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
            className="border-primary/20 bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Submit */}
        <Button
          onClick={handleSubmit}
          disabled={!isValid}
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {language === 'hi' ? 'मेरी भविष्यवाणी जानें' : 'Get My Prediction'}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          {language === 'hi'
            ? '✨ आपकी गोपनीयता सुरक्षित है। कोई डेटा संग्रहीत नहीं किया जाता।'
            : '✨ Your privacy is secure. No data is stored.'}
        </p>
      </div>
    </div>
  );
}
