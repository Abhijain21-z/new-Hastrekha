import React from "react"
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "HastRekhaAI - AI हस्तरेखा पढ़ाई और ज्योतिष भविष्यवाणी | Hastrekha Vigyan",
  description:
    "हस्तरेखा विज्ञान के आधार पर AI-संचालित हथेली पढ़ाई और ज्योतिष भविष्यवाणी पाएं। अपनी हथेली की तस्वीर और जन्म विवरण अपलोड करें व्यक्तिगत जीवन अंतर्दृष्टि के लिए। प्राचीन भारतीय हस्तरेखा परंपरा से मुफ्त ऑनलाइन हथेली विश्लेषण।",
  keywords:
    "palm reading online, हस्तरेखा पढ़ाई, AI palmistry, hastrekha vigyan, हस्तरेखा विज्ञान, palm analysis, astrology predictions, ज्योतिष भविष्यवाणी, future prediction, kundli analysis, palmistry online, palm lines reading, hand analysis, हथेली की पढ़ाई, भविष्य की भविष्यवाणी",
  applicationName: "HastRekhaAI",
  creator: "HastRekhaAI Team",
  publisher: "HastRekhaAI",
  metadataBase: new URL("https://hastrekhaa.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    nocache: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "HastRekhaAI - AI Palm Reading & Astrology Predictions | Hastrekha Vigyan",
    description:
      "Discover your destiny through AI-powered palm reading. अपने भाग्य को जानें AI-संचालित हस्तरेखा पढ़ाई से।",
    type: "website",
    locale: "en_US",
    alternateLocale: ["hi_IN"],
    siteName: "HastRekhaAI",
    url: "https://hastrekhaa.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "HastRekhaAI - AI Palm Reading Predictions",
    description: "AI-powered palm reading and astrology predictions based on Hastrekha Vigyan",
    creator: "@HastRekhaAI",
  },
  alternates: {
    canonical: "https://hastrekhaa.com",
    languages: {
      en: "https://hastrekhaa.com/en",
      hi: "https://hastrekhaa.com/hi",
    },
  },
  category: "Astrology & Spirituality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="google-adsense-account" content="ca-pub-1067207431102415" />
        <link rel="canonical" href="https://hastrekhaa.com" />
        <link rel="alternate" hrefLang="en" href="https://hastrekhaa.com/en" />
        <link rel="alternate" hrefLang="hi" href="https://hastrekhaa.com/hi" />
        <link rel="alternate" hrefLang="x-default" href="https://hastrekhaa.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "HastRekhaAI",
            "description": "AI-powered palm reading and astrology predictions based on Hastrekha Vigyan",
            "url": "https://hastrekhaa.com",
            "serviceType": "Astrology & Palmistry",
            "areaServed": "Worldwide",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service"
            }
          })}
        </script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1067207431102415" crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
