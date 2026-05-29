import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - HastRekhaAI | Important Legal Notice",
  description:
    "Important disclaimer for HastRekhaAI services. Palm reading and astrology predictions are for entertainment purposes. Not a substitute for professional medical, legal, or financial advice.",
  keywords: "disclaimer, legal notice, entertainment purposes, medical disclaimer, liability limitation",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Disclaimer - HastRekhaAI",
    description:
      "Read important disclaimers about HastRekhaAI's palm reading and astrology prediction services.",
    type: "website",
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
