'use client';

import { useState, useEffect } from 'react';
import { zodiacData } from '@/lib/zodiac-data';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const rashifalPredictions: Record<string, { hi: string; en: string }> = {
  aries: {
    hi: 'आपका दिन शुभ है। कार्य में सफलता मिलेगी। परिवार के साथ समय बिताएं। आर्थिक लाभ की संभावना है।',
    en: 'Your day is auspicious. Success in work is likely. Spend time with family. Financial gains are possible.',
  },
  taurus: {
    hi: 'धैर्य बनाए रखें। नए अवसर आएंगे। रिश्तों में प्रगति होगी। संभावित व्यावसायिक लाभ।',
    en: 'Maintain patience. New opportunities will come. Progress in relationships. Potential business gains.',
  },
  gemini: {
    hi: 'संचार में बेहतरी आएगी। नई जानकारी प्राप्त होगी। सामाजिक जीवन सक्रिय रहेगा। यात्रा के योग हैं।',
    en: 'Communication will improve. New information will arrive. Social life stays active. Travel possibilities.',
  },
  cancer: {
    hi: 'परिवार के मामलों में सुधार होगा। भावनात्मक संतुष्टि मिलेगी। घर में शांति रहेगी। स्वास्थ्य अच्छा रहेगा।',
    en: 'Family matters will improve. Emotional satisfaction awaits. Peace at home. Good health continues.',
  },
  leo: {
    hi: 'आत्मविश्वास के साथ आगे बढ़ें। सृजनात्मक कार्यों में सफलता। प्रतिष्ठा में वृद्धि होगी। नेतृत्व के अवसर।',
    en: 'Move forward with confidence. Creative work succeeds. Reputation increases. Leadership opportunities.',
  },
  virgo: {
    hi: 'विस्तारों पर ध्यान दें। व्यावहारिक समाधान मिलेंगे। कार्य दक्षता बढ़ेगी। स्वास्थ्य सेवाओं की आवश्यकता हो सकती है।',
    en: 'Pay attention to details. Practical solutions emerge. Work efficiency increases. May need health services.',
  },
  libra: {
    hi: 'संतुलन बनाए रखें। रिश्तों में सौहार्द रहेगा। न्याय पक्ष में हो सकता है। कलात्मक प्रयासों में सफलता।',
    en: 'Maintain balance. Harmony in relationships. Justice may favor you. Success in artistic efforts.',
  },
  scorpio: {
    hi: 'गहरी अंतर्दृष्टि प्राप्त होगी। रहस्यों का उजागर हो सकता है। शक्तिशाली परिवर्तन संभव है। सुरक्षा पर ध्यान दें।',
    en: 'Deep insights gained. Secrets may surface. Powerful transformation possible. Focus on security.',
  },
  sagittarius: {
    hi: 'दूरदर्शिता बढ़ेगी। शिक्षा में प्रगति होगी। यात्रा का सुझाव है। भाग्य आपके पक्ष में है।',
    en: 'Foresight increases. Educational progress. Travel advised. Luck is in your favor.',
  },
  capricorn: {
    hi: 'व्यावहारिक कदम उठाएं। लक्ष्य की ओर बढ़ें। सामाजिक मान्यता मिलेगी। कार्य में गंभीरता दिखाएं।',
    en: 'Take practical steps. Move toward goals. Social recognition awaits. Show seriousness at work.',
  },
  aquarius: {
    hi: 'नई दृष्टि पाएंगे। मित्रों का साथ मिलेगा। सामाजिक कार्यों में भाग लें। प्रौद्योगिकी में लाभ हो सकता है।',
    en: 'New perspective gained. Friends support you. Join social activities. Tech benefits possible.',
  },
  pisces: {
    hi: 'रचनात्मकता का दिन है। काल्पनिक सोचना लाभदायक होगा। आध्यात्मिक अनुभव हो सकता है। सहज महसूस करें।',
    en: 'Creative day ahead. Imaginative thinking pays off. Spiritual experience possible. Trust your intuition.',
  },
};

export function TodaysRashifal() {
  const [selectedRashi, setSelectedRashi] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState<string>('');
  const [luckyElements, setLuckyElements] = useState<Record<string, { color: string; number: string; day: string }>>({});

  useEffect(() => {
    // Update date to current date
    const today = new Date();
    const formattedDate = today.toLocaleDateString('hi-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);

    // Generate lucky elements for each rashi
    const elements: Record<string, { color: string; number: string; day: string }> = {};
    const colors = ['नीला', 'सफेद', 'लाल', 'हरा', 'पीला', 'नारंगी', 'गुलाबी', 'सुनहरा', 'काला', 'बैंगनी', 'चांदी', 'तांबा'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3'];
    const days = ['सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार', 'रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार'];

    zodiacData.forEach((sign, index) => {
      elements[sign.id] = {
        color: colors[index],
        number: numbers[index],
        day: days[index],
      };
    });

    setLuckyElements(elements);
  }, []);

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">आज का राशिफल</h2>
          <p className="text-lg text-muted-foreground mb-1">Today's Horoscope | आपकी दैनिक भविष्यवाणी</p>
          {currentDate && <p className="text-sm text-muted-foreground">{currentDate}</p>}
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {zodiacData.map((sign) => (
            <div
              key={sign.id}
              className="cursor-pointer rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/70 transition-all"
              onClick={() => setSelectedRashi(selectedRashi === sign.id ? null : sign.id)}
            >
              {/* Image */}
              <div className="relative h-32 w-full bg-primary/5 rounded-t-lg overflow-hidden flex items-center justify-center border-b border-border">
                <div className="relative h-28 w-28">
                  <Image
                    src={sign.image}
                    alt={sign.name_en}
                    fill
                    sizes="112px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-serif font-bold text-lg text-foreground mb-1">{sign.name_en}</h3>
                <p className="text-xs text-muted-foreground mb-2">{sign.name_hi}</p>
                <p className="text-xs text-muted-foreground mb-3">{sign.dates}</p>

                {/* Lucky Elements */}
                {luckyElements[sign.id] && (
                  <div className="grid grid-cols-3 gap-2 mb-3 text-center text-xs">
                    <div className="rounded bg-primary/10 p-2">
                      <div className="text-xs text-muted-foreground">रंग</div>
                      <div className="font-semibold text-foreground text-xs">{luckyElements[sign.id].color}</div>
                    </div>
                    <div className="rounded bg-primary/10 p-2">
                      <div className="text-xs text-muted-foreground">नंबर</div>
                      <div className="font-semibold text-foreground text-xs">{luckyElements[sign.id].number}</div>
                    </div>
                    <div className="rounded bg-primary/10 p-2">
                      <div className="text-xs text-muted-foreground">दिन</div>
                      <div className="font-semibold text-foreground text-xs">{luckyElements[sign.id].day.slice(0, 3)}</div>
                    </div>
                  </div>
                )}

                {/* Expand Button */}
                <button className="w-full flex items-center justify-center gap-2 text-primary text-xs font-semibold hover:text-primary/80 transition">
                  {selectedRashi === sign.id ? 'कम दिखाएं' : 'भविष्यवाणी देखें'}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${selectedRashi === sign.id ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Expanded Content */}
                {selectedRashi === sign.id && (
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-2">{rashifalPredictions[sign.id]?.hi}</p>
                    <p className="text-xs text-muted-foreground italic">{rashifalPredictions[sign.id]?.en}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center p-6 rounded-lg border border-primary/20 bg-primary/5">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            ये राशिफल सामान्य भविष्यवाणी हैं। अपना विस्तृत व्यक्तिगत विश्लेषण HastRekhaAi पर प्राप्त करें। | These horoscopes are general predictions. Get your detailed personalized analysis on HastRekhaAi.
          </p>
        </div>
      </div>
    </section>
  );
}
