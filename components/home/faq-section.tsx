"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const faqs = [
  {
    q: { en: "Is AI palm reading accurate?", hi: "क्या AI हस्तरेखा पढ़ना सटीक है?" },
    a: { en: "AI palm reading identifies visible patterns in an uploaded image and turns them into reflective insights. It is not a scientific prediction or a substitute for professional advice.", hi: "AI हस्तरेखा पढ़ना अपलोड की गई तस्वीर में दिखाई देने वाले पैटर्न को समझकर आत्मचिंतन के लिए संकेत देता है। यह वैज्ञानिक भविष्यवाणी या पेशेवर सलाह का विकल्प नहीं है।" },
  },
  {
    q: { en: "How do I upload my palm photo?", hi: "मैं हथेली की तस्वीर कैसे अपलोड करूं?" },
    a: { en: "Use a clear, well-lit photo of your open palm. Choose Upload on the reading form, or use Camera on a supported mobile device, then add your birth details to generate the report.", hi: "अपनी खुली हथेली की साफ और अच्छी रोशनी वाली तस्वीर लें। रीडिंग फॉर्म में अपलोड या मोबाइल पर कैमरा चुनें और रिपोर्ट बनाने के लिए जन्म विवरण भरें।" },
  },
  {
    q: { en: "Is my palm image private?", hi: "क्या मेरी हथेली की तस्वीर निजी रहती है?" },
    a: { en: "The current reading flow processes your image in your browser and does not save it as a profile. Avoid uploading images that contain unrelated personal information.", hi: "वर्तमान रीडिंग प्रक्रिया आपकी तस्वीर को ब्राउज़र में प्रोसेस करती है और इसे प्रोफाइल के रूप में सेव नहीं करती। ऐसी तस्वीरें अपलोड न करें जिनमें अन्य निजी जानकारी हो।" },
  },
  {
    q: { en: "Can I use the reading in Hindi?", hi: "क्या मैं रीडिंग हिंदी में ले सकता हूं?" },
    a: { en: "Yes. Use the language switcher in the header to move between Hindi and English throughout the site and in the generated report.", hi: "हां। पूरी वेबसाइट और जनरेट की गई रिपोर्ट में हिंदी और अंग्रेजी के बीच बदलने के लिए हेडर में भाषा स्विचर का उपयोग करें।" },
  },
  {
    q: { en: "Is this professional advice?", hi: "क्या यह पेशेवर सलाह है?" },
    a: { en: "No. HastRekhaAI is for entertainment and self-reflection. Do not use a palm reading to make medical, legal, financial, or other high-stakes decisions.", hi: "नहीं। HastRekhaAI मनोरंजन और आत्मचिंतन के लिए है। चिकित्सा, कानूनी, वित्तीय या अन्य महत्वपूर्ण फैसलों के लिए हस्तरेखा रीडिंग पर निर्भर न रहें।" },
  },
];

export function FAQSection() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="border-y border-border bg-surface-2/50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="eyebrow">{language === "hi" ? "सामान्य प्रश्न" : "Common questions"}</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {language === "hi" ? "रीडिंग शुरू करने से पहले" : "Before you begin your reading"}
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.q.en}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left font-semibold text-foreground"
                >
                  <span>{faq.q[language]}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="pb-5 pr-10 text-sm leading-7 text-muted-foreground">{faq.a[language]}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const faqJsonLd = faqs.map((faq) => ({
  "@type": "Question",
  name: faq.q.en,
  acceptedAnswer: { "@type": "Answer", text: faq.a.en },
}));

export const faqJsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqJsonLd,
};

