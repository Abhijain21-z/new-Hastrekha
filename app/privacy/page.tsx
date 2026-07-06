"use client";

import { PageShell } from "@/components/page-shell";
import { StarField } from "@/components/zodiac-icons";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Palm images uploaded for analysis: These are processed temporarily and are not stored permanently on our servers. Images are deleted within 24 hours of analysis.",
      "Birth details (date, time, place): Used solely for astrological calculations and generating your personalized prediction report.",
      "Contact information: If you reach out to us via our contact form, we collect your name, email address, and message content to respond to your inquiry.",
      "Usage data: We automatically collect certain information about your device and browsing activity, including IP address, browser type, and pages visited, to improve our services.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To generate personalized palm reading and astrological predictions based on your uploaded palm image and birth details.",
      "To improve our AI algorithms and prediction accuracy through anonymized, aggregated data analysis.",
      "To respond to your inquiries and provide customer support.",
      "To send you relevant updates about our services, only if you have opted in to receive communications.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement industry-standard security measures including SSL/TLS encryption for all data transmissions.",
      "Palm images are processed in secure, encrypted environments and automatically deleted after analysis.",
      "Access to personal data is restricted to authorized personnel only, following the principle of least privilege.",
      "We conduct regular security audits and vulnerability assessments to protect your information.",
    ],
  },
  {
    title: "Third-Party Sharing",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share anonymized, aggregated data with research partners to advance the field of AI-powered astrology.",
      "We may disclose information if required by law or to protect the rights and safety of our users and platform.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to request access to the personal data we hold about you.",
      "You may request deletion of your personal data at any time by contacting us at support@jyotishai.com.",
      "You can opt out of marketing communications by clicking the unsubscribe link in any email.",
      "If you are in the EU, you have additional rights under GDPR, including data portability and the right to restrict processing.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "We use essential cookies to ensure the proper functioning of our website.",
      "Analytics cookies help us understand how visitors interact with our website, allowing us to improve user experience.",
      "You can manage cookie preferences through your browser settings at any time.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <StarField className="absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Your privacy matters to us. Learn how HastRekhaAI collects, uses, and
            protects your personal information.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: February 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <div key={section.title}>
                <h2 className="mb-4 font-serif text-xl font-bold text-foreground md:text-2xl">
                  {`${i + 1}. ${section.title}`}
                </h2>
                <ul className="flex flex-col gap-3">
                  {section.content.map((item) => (
                    <li
                      key={item.slice(0, 40)}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <h2 className="mb-2 font-serif text-lg font-bold text-foreground">
                Questions About This Policy?
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"If you have any questions or concerns about our privacy practices, please contact us at "}
                <a href="mailto:abhijain.technical@gmail.com" className="text-primary hover:underline">
                  abhijain.technical@gmail.com
                </a>
                {". We are committed to resolving any issues and ensuring your data is handled responsibly."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
