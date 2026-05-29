import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - HastRekhaAI | Legal Terms & Conditions",
  description:
    "Review the Terms of Service for HastRekhaAI. Understand user responsibilities, limitations of liability, and acceptable use policies for our AI palm reading service.",
  keywords: "terms of service, terms and conditions, user agreement, acceptable use policy, legal terms",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service - HastRekhaAI",
    description:
      "Read the terms and conditions governing the use of HastRekhaAI's palm reading and astrology prediction services.",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
