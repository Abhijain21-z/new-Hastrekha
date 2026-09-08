"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function SEOContentSection() {
  const { language } = useLanguage();
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="eyebrow">{language === "hi" ? "हस्तरेखा को समझें" : "Understand the lines"}</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {language === "hi" ? "आधुनिक तरीके से ऑनलाइन हस्तरेखा पढ़ना" : "A modern way to explore palmistry online"}
          </h2>
          <Link href="/how-it-works" className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline">
            {language === "hi" ? "यह कैसे काम करता है देखें" : "See how it works"}
          </Link>
        </div>
        <div className="space-y-5 text-sm leading-7 text-muted-foreground">
          {language === "hi" ? (
            <>
              <p>हस्तरेखा पढ़ना सदियों से जिज्ञासा, आत्मचिंतन और कहानी कहने का एक तरीका रहा है। HastRekhaAI इस परंपरा को एक सरल डिजिटल अनुभव में बदलता है, जहां आप अपनी हथेली की स्पष्ट तस्वीर और कुछ बुनियादी विवरण देकर एक समझने योग्य रिपोर्ट देख सकते हैं।</p>
              <p>AI palm reading में हृदय रेखा, मस्तिष्क रेखा, जीवन रेखा और भाग्य रेखा जैसे प्रमुख संकेतों को एक साथ देखा जाता है। परिणामों को निश्चित भविष्यवाणी नहीं, बल्कि अपने विचारों और प्राथमिकताओं पर सोचने के लिए एक रचनात्मक प्रारंभिक बिंदु समझें।</p>
            </>
          ) : (
            <>
              <p>Online palmistry has long been used as a language for curiosity, reflection, and storytelling. HastRekhaAI turns that tradition into a simple digital experience: upload a clear photo of your open palm, add a few details, and explore an easy-to-understand report.</p>
              <p>Our AI palm reading experience organizes visible patterns around the heart line, head line, life line, fate line, hand shape, and mounts. Treat the result as a reflective starting point rather than a guaranteed prediction of your future.</p>
              <p>Whether you are new to palmistry or already familiar with hast rekha reading, the goal is clarity: explain the traditional vocabulary, show what each line is commonly associated with, and leave space for your own interpretation.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

