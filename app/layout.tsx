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
  title: "HastRekhaAi - AI Palm Reading & Astrology Predictions | Hastrekha Vigyan",
  description:
    "Get AI-powered palm reading and astrology predictions. Upload your palm image and birth details for a personalized life report based on Hastrekha Vigyan. Free kundli analysis online.",
  keywords:
    "palm reading online, AI palmistry, future prediction by hand, astrology life prediction, free kundli analysis, hastrekha vigyan online",
  openGraph: {
    title: "HastRekhaAi - AI Palm Reading & Astrology Predictions",
    description:
      "Get AI-powered palm reading and astrology predictions. Upload your palm image for a personalized life report.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
