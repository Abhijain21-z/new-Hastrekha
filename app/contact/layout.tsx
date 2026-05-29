import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - HastRekhaAI | Get Support & Feedback",
  description:
    "Get in touch with HastRekhaAI team. Have questions about your palm reading or need support? Contact us via email or contact form. We respond within 24 hours.",
  keywords: "contact us, customer support, email, contact form, reach out, help, support",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us - HastRekhaAI",
    description:
      "Have questions about HastRekhaAI? Reach out to our support team via email or contact form.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
