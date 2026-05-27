"use client";

import { PageShell } from "@/components/page-shell";
import { Hand, Eye, Brain, Sparkles } from "lucide-react";
import { StarField } from "@/components/zodiac-icons";

const palmLines = [
  {
    name: "Heart Line",
    description:
      "Located at the top of the palm, the heart line represents your emotional life, relationships, and cardiac health. A deep, clear heart line indicates emotional stability and strong relationships.",
    icon: Hand,
  },
  {
    name: "Head Line",
    description:
      "Running across the middle of the palm, the head line reveals your intellectual approach, communication style, and thirst for knowledge. A long, straight head line suggests a clear, focused thinker.",
    icon: Brain,
  },
  {
    name: "Life Line",
    description:
      "Curving around the base of the thumb, the life line represents vitality, life changes, and physical well-being. Contrary to popular belief, its length does not indicate lifespan.",
    icon: Eye,
  },
  {
    name: "Fate Line",
    description:
      "Running vertically up the center of the palm, the fate line indicates the degree to which your life is affected by external circumstances beyond your control. A strong fate line shows a life guided by destiny.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <StarField className="absolute inset-0" />
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            About Hastrekha Vigyan
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            The ancient Indian science of palmistry has been practiced for thousands
            of years, offering insights into personality, destiny, and life events
            through the study of palm lines and mounts.
          </p>
        </div>
      </section>

      {/* History - English */}
      <section className="bg-card/50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            A 5,000-Year-Old Science
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
            <p>
              Hastrekha Vigyan, or the science of palm reading, traces its origins to ancient India, where sages
              and scholars studied the lines, shapes, and mounts of the human hand to decode the mysteries of fate.
              Mentioned in ancient Vedic texts, this practice was considered a sacred art that connected the physical
              body to cosmic energies.
            </p>
            <p>
              Over millennia, palmistry spread across civilizations, from ancient Greece and China to the Arab world
              and Europe. Each culture added its own interpretations, but the core principle remained the same: the
              lines of your hand are a map of your soul, shaped by planetary influences at birth and refined by
              your choices in life.
            </p>
            <p>
              Today, modern AI technology allows us to analyze these patterns with unprecedented accuracy, combining
              centuries of traditional knowledge with advanced image recognition and astrological computation to
              deliver personalized predictions.
            </p>
          </div>
        </div>
      </section>

      {/* History - Hindi */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl mb-6">
            हस्तरेखा विज्ञान: 5,000 साल की यात्रा
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
            <p>
              हस्तरेखा विज्ञान (Hastrekha Vigyan) भारत की प्राचीन वैदिक परंपरा का एक महत्वपूर्ण हिस्सा है। यह विज्ञान हजारों वर्षों पहले भारत में उत्पन्न हुआ, जहां ऋषि और विद्वान मानव हाथ की रेखाओं, आकृति और मांउंटों का अध्ययन करके भाग्य के रहस्यों को समझते थे। वेद और उपनिषदों में हस्तरेखा विज्ञान के संदर्भ मिलते हैं, जो इस प्राचीन ज्ञान की पवित्रता को दर्शाता है।
            </p>
            <p>
              महान ऋषि वाल्मीकि, जो रामायण के लेखक हैं, को हस्तरेखा विज्ञान की नींव रखने का श्रेय दिया जाता है। उनकी पुस्तक "शास्त्र समुद्रिका" एशिया भर में हस्तरेखा पाठकों के लिए एक महत्वपूर्ण ग्रंथ बनी। मौर्य साम्राज्य और बाद के राजवंशों में, राजा और प्रभुशाली लोग महत्वपूर्ण निर्णय लेने से पहले हस्तरेखा विशेषज्ञों की सलाह लेते थे।
            </p>
            <p>
              हस्तरेखा विज्ञान में मान्यता है कि आपके हाथों की रेखाएं आपकी आत्मा का एक नक्शा हैं। प्रत्येक रेखा आपके व्यक्तित्व, भाग्य, और जीवन के विभिन्न पहलुओं को दर्शाती है। आपके जन्म समय के ग्रहों की स्थिति और आपके जीवन के दौरान किए गए निर्णय इन रेखाओं को आकार देते हैं। यह एक गहरा और पवित्र विज्ञान है जो शारीरिक और आध्यात्मिक दोनों पहलुओं को समझता है।
            </p>
            <p>
              हस्तरेखा विज्ञान में पांच मुख्य रेखाएं होती हैं: जीवन रेखा (Life Line), सिर की रेखा (Head Line), हृदय रेखा (Heart Line), भाग्य रेखा (Fate Line), और सूर्य रेखा (Sun Line)। प्रत्येक रेखा का अपना महत्व है और आपके जीवन के विभिन्न क्षेत्रों को नियंत्रित करती है। इसके अलावा, हाथ के विभिन्न मांउंटों (तालियों) पर ग्रहों का प्रभाव होता है।
            </p>
            <p>
              आज के समय में, आर्टिफिशियल इंटेलिजेंस (AI) और आधुनिक तकनीक के साथ, हस्तरेखा विज्ञान को एक नई दिशा मिली है। HastRekhaAi प्राचीन वैदिक ज्ञान को अत्याधुनिक AI प्रौद्योगिकी के साथ जोड़ता है, जिससे अधिक सटीक और विश्वसनीय भविष्यवाणियां संभव हो गई हैं। यह संयोजन परंपरा और आधुनिकता के बीच एक सेतु बनाता है।
            </p>
          </div>
        </div>
      </section>

      {/* Palm Lines */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-10 font-serif text-2xl font-bold text-foreground md:text-3xl text-center">
            The Major Palm Lines
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {palmLines.map((line) => {
              const Icon = line.icon;
              return (
                <div
                  key={line.name}
                  className="rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {line.name}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {line.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
