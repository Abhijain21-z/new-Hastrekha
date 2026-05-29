import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About HastRekhaAI | Ancient Palmistry Meets Modern AI",
  description:
    "Discover HastRekhaAI's story - combining 5000+ years of ancient Hastrekha Vigyan (Indian palmistry) tradition with cutting-edge AI technology for personalized astrology predictions.",
  keywords: "about hastrekha, palmistry history, AI astrology, hastrekha vigyan, palm reading science, our mission",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About HastRekhaAI",
    description:
      "Learn how we combine ancient palmistry wisdom with modern AI to provide accurate, personalized astrology predictions.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
