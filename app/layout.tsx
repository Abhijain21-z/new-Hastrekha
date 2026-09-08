import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display, Noto_Sans_Devanagari } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/language-context";
import { JsonLd } from "@/components/seo/json-ld";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { siteConfig, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HastRekhaAI – AI Palm Reading & Vedic Astrology | हस्तरेखा विज्ञान",
    template: "%s | HastRekhaAI",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  publisher: siteConfig.name,
  category: "Astrology & Spirituality",
  alternates: { canonical: siteConfig.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    alternateLocale: [siteConfig.alternateLocale],
    url: siteConfig.url,
    title: "HastRekhaAI – AI Palm Reading & Vedic Astrology",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "HastRekhaAI – AI Palm Reading & Vedic Astrology",
    description: siteConfig.description,
  },
  other: {
    "google-adsense-account": siteConfig.adsenseClient,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f59e0b",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="hi" className="bg-background" suppressHydrationWarning>
      <head>
        <JsonLd data={websiteJsonLd()} />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClient}`}
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${devanagari.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <LanguageProvider>
          <ScrollProgress />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
