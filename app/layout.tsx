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
  title: "HastRekhaAI - AI Palm Reading & Astrology Predictions | Hastrekha Vigyan",
  description:
    "Get AI-powered palm reading and astrology predictions based on Hastrekha Vigyan. Upload your palm image and birth details for personalized life insights. Free online palm analysis from ancient Indian palmistry tradition.",
  keywords:
    "palm reading online, AI palmistry, hastrekha vigyan, palm analysis, astrology predictions, future prediction, kundli analysis, palmistry online, palm lines reading, hand analysis",
  applicationName: "HastRekhaAI",
  creator: "HastRekhaAI Team",
  publisher: "HastRekhaAI",
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
  openGraph: {
    title: "HastRekhaAI - AI Palm Reading & Astrology Predictions",
    description:
      "Discover your destiny through AI-powered palm reading based on ancient Hastrekha Vigyan. Get personalized astrology predictions instantly.",
    type: "website",
    locale: "en_US",
    siteName: "HastRekhaAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "HastRekhaAI - AI Palm Reading Predictions",
    description: "AI-powered palm reading and astrology predictions based on Hastrekha Vigyan",
  },
  alternates: {
    canonical: "https://hastrekhaa.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
