import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - HastRekhaAI | Data Protection & Security",
  description:
    "Read HastRekhaAI's comprehensive privacy policy. Learn how we collect, protect, and handle your personal data with transparency and compliance with GDPR and CCPA regulations.",
  keywords: "privacy policy, data protection, GDPR compliance, data security, personal information, privacy statement",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - HastRekhaAI",
    description:
      "Learn how HastRekhaAI protects your personal information and data with industry-standard security measures.",
    type: "website",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
