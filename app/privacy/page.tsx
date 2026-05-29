"use client";

import { PageShell } from "@/components/page-shell";
import { StarField } from "@/components/zodiac-icons";
import { Shield, Lock, Eye, UserCheck, Cookie, FileText } from "lucide-react";

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Palm images uploaded for analysis: These are processed temporarily and are not stored permanently on our servers. Images are deleted within 24 hours of analysis.",
      "Birth details (date, time, place): Used solely for astrological calculations and generating your personalized prediction report.",
      "Contact information: If you reach out to us via our contact form, we collect your name, email address, and message content to respond to your inquiry.",
      "Usage data: We automatically collect certain information about your device and browsing activity, including IP address, browser type, and pages visited, to improve our services.",
    ],
  },
  {
    icon: UserCheck,
    title: "How We Use Your Information",
    content: [
      "To generate personalized palm reading and astrological predictions based on your uploaded palm image and birth details.",
      "To improve our AI algorithms and prediction accuracy through anonymized, aggregated data analysis.",
      "To respond to your inquiries and provide customer support.",
      "To send you relevant updates about our services, only if you have opted in to receive communications.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "We implement industry-standard security measures including SSL/TLS encryption for all data transmissions.",
      "Palm images are processed in secure, encrypted environments and automatically deleted after analysis.",
      "Access to personal data is restricted to authorized personnel only, following the principle of least privilege.",
      "We conduct regular security audits and vulnerability assessments to protect your information.",
    ],
  },
  {
    icon: Shield,
    title: "Third-Party Sharing",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share anonymized, aggregated data with research partners to advance the field of AI-powered astrology.",
      "We may disclose information if required by law or to protect the rights and safety of our users and platform.",
    ],
  },
  {
    icon: FileText,
    title: "Your Rights",
    content: [
      "You have the right to request access to the personal data we hold about you.",
      "You may request deletion of your personal data at any time by contacting us at abhijain.technical@gmail.com.",
      "You can opt out of marketing communications by clicking the unsubscribe link in any email.",
      "If you are in the EU, you have additional rights under GDPR, including data portability and the right to restrict processing.",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking",
    content: [
      "We use essential cookies to ensure the proper functioning of our website.",
      "Analytics cookies help us understand how visitors interact with our website, allowing us to improve user experience.",
      "You can manage cookie preferences through your browser settings at any time.",
      "We comply with GDPR and CCPA regulations regarding cookie consent and user tracking.",
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
            Your privacy matters to us. Learn how HastRekhaAI collects, uses, and protects your personal information with complete transparency and compliance.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: May 2026 | Effective immediately
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
            <p className="text-sm leading-relaxed text-foreground">
              This Privacy Policy explains how <strong>HastRekhaAI</strong> collects, uses, discloses, and safeguards your information. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <article key={section.title} className="scroll-mt-20">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      {`${i + 1}. ${section.title}`}
                    </h2>
                  </div>
                  <ul className="flex flex-col gap-3 pl-11">
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
                </article>
              );
            })}

            {/* Additional Info */}
            <article className="scroll-mt-20">
              <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
                7. Compliance & Legal Obligations
              </h2>
              <div className="flex flex-col gap-3 pl-11 text-sm leading-relaxed text-muted-foreground">
                <p>
                  We comply with applicable data protection laws including GDPR (EU), CCPA (California), and other international privacy regulations. We are committed to maintaining the highest standards of data protection.
                </p>
                <p>
                  If you have concerns about our privacy practices or believe your rights have been violated, you may lodge a complaint with your local data protection authority.
                </p>
              </div>
            </article>

            {/* Contact */}
            <div className="rounded-xl border border-border/50 bg-card p-8">
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                Questions About This Policy?
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                If you have any questions or concerns about our privacy practices, data handling, or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Email:</strong> <a href="mailto:abhijain.technical@gmail.com" className="text-primary hover:underline">abhijain.technical@gmail.com</a></p>
                <p><strong>Response Time:</strong> We aim to respond to all inquiries within 7-10 business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
