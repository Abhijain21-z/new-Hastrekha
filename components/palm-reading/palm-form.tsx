'use client';

import { useState, useRef, useCallback, type ChangeEvent } from 'react';
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

interface PalmFormProps {
  onSubmit: (data: {
    name: string;
    image: string;
    dob: string;
    birthTime: string;
    birthPlace: string;
    palmAnalysis?: any;
  }) => void;
  isAnalyzing?: boolean;
}

export function PalmForm({ onSubmit, isAnalyzing = false }: PalmFormProps) {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [dob, setDob] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
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
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !image || !dob || !birthTime || !birthPlace) {
      setError('Please fill all fields and upload a palm image');
      return;
    }

    try {
      setError('');
      // Call Gemini API to analyze palm
      const response = await fetch('/api/analyze-palm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image,
          name,
          dob,
          birthTime,
          birthPlace,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.details || 'Failed to analyze palm');
      }

      const palmAnalysis = await response.json();

      onSubmit({
        name,
        image,
        dob,
        birthTime,
        birthPlace,
        palmAnalysis,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze palm. Please try again.');
      console.error('[v0] Palm analysis error:', err);
    }
  };

  const isValid = name.trim() && image && dob && birthTime && birthPlace;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          {t('palm.title')}
        </h1>
        <p className="mt-2 text-base text-muted-foreground">{t('palm.subtitle')}</p>
        <p className="mt-2 text-sm text-primary font-medium">
          Powered by Google Gemini AI + Palmistry Knowledge
          <br />
          <span className="text-xs text-primary/80">
            गूगल जेमिनी AI द्वारा संचालित + हस्तरेखा ज्ञान
          </span>
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

        {/* Name Input - Prominent at top */}
        <div>
          <Label
            htmlFor="fullName"
            className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground"
          >
            <User className="h-3.5 w-3.5 text-primary" />
            {'Full Name / '}
            <span className="text-primary">पूरा नाम</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder={
              'Enter your full name / अपना पूरा नाम दर्ज करें'
            }
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-primary/20 bg-background text-foreground placeholder:text-muted-foreground text-base focus-visible:ring-primary"
            disabled={isAnalyzing}
          />
        </div>

        {/* Image Upload */}
        <div>
          <Label className="mb-2 block text-sm font-semibold text-foreground">
            {t('palm.upload')}
            <span className="text-xs text-muted-foreground ml-2">
              (Clear palm image facing viewer)
            </span>
          </Label>

          {image ? (
            <div className="relative mx-auto w-fit">
              <img
                src={image || '/placeholder.svg'}
                alt="Uploaded palm"
                className="h-48 w-48 rounded-xl border border-primary/20 object-cover shadow-md"
              />
              <button
                onClick={() => setImage(null)}
                className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-destructive-foreground"
                aria-label="Remove image"
                disabled={isAnalyzing}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isAnalyzing}
                className="flex flex-1 flex-col items-center gap-2 rounded-xl border-2 border-dashed border-primary/25 bg-primary/5 px-4 py-8 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground disabled:opacity-50"
              >
                <Upload className="h-8 w-8 text-primary/60" />
                <span className="text-sm">{t('palm.upload')}</span>
              </button>
              <button
                onClick={() => cameraInputRef.current?.click()}
                disabled={isAnalyzing}
                className="flex flex-1 flex-col items-center gap-2 rounded-xl border-2 border-dashed border-primary/25 bg-primary/5 px-4 py-8 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground disabled:opacity-50"
              >
                <Camera className="h-8 w-8 text-primary/60" />
                <span className="text-sm">{t('palm.capture')}</span>
              </button>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
            disabled={isAnalyzing}
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleFileUpload}
            disabled={isAnalyzing}
          />
        </div>

        {/* Birth Details */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label
              htmlFor="dob"
              className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground"
            >
              <Calendar className="h-3.5 w-3.5 text-primary" />
              {t('palm.dob')}
            </Label>
            <Input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="border-primary/20 bg-background text-foreground focus-visible:ring-primary"
              disabled={isAnalyzing}
            />
          </div>

          <div>
            <Label
              htmlFor="birthTime"
              className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground"
            >
              <Clock className="h-3.5 w-3.5 text-primary" />
              {t('palm.birthTime')}
            </Label>
            <Input
              id="birthTime"
              type="time"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="border-primary/20 bg-background text-foreground focus-visible:ring-primary"
              disabled={isAnalyzing}
            />
          </div>
        </div>

        <div>
          <Label
            htmlFor="birthPlace"
            className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground"
          >
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {t('palm.birthPlace')}
          </Label>
          <Input
            id="birthPlace"
            type="text"
            placeholder={t('palm.birthPlacePlaceholder')}
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
            className="border-primary/20 bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            disabled={isAnalyzing}
          />
        </div>

        {/* Submit */}
        <Button
          onClick={handleSubmit}
          disabled={!isValid || isAnalyzing}
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {isAnalyzing ? 'Analyzing with AI...' : t('palm.generate')}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Your palm image is analyzed securely using Google Gemini AI. No data is stored.
          <br />
          आपकी हस्तरेखा की छवि सुरक्षित रूप से विश्लेषण की जाती है।
        </p>
      </div>
    </div>
  );
}
