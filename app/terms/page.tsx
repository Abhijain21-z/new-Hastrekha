"use client";

import { PageShell } from "@/components/page-shell";
import { StarField } from "@/components/zodiac-icons";
import { CheckCircle, AlertCircle, Gavel, UserCheck } from "lucide-react";

const sections = [
  {
    icon: CheckCircle,
    title: "Acceptance of Terms",
    content: [
      "By accessing and using HastRekhaAI (the 'Service'), you acknowledge that you have read, understood, and agree to be bound by all these Terms of Service.",
      "If you do not agree to these terms, you must not use this Service.",
      "We reserve the right to modify these terms at any time. Your continued use of the Service constitutes your acceptance of the modified terms.",
      "It is your responsibility to review these terms periodically for changes.",
    ],
  },
  {
    icon: UserCheck,
    title: "User Responsibilities",
    content: [
      "You must be at least 13 years old to use this Service. Users under 18 should have parental consent.",
      "You agree to provide accurate, complete, and truthful information when using our Service.",
      "You are responsible for maintaining the confidentiality of any account information and passwords.",
      "You agree not to use the Service for illegal or harmful purposes, including harassment, fraud, or creation of malicious content.",
    ],
  },
  {
    icon: AlertCircle,
    title: "Limitations of Liability",
    content: [
      "HastRekhaAI provides readings and predictions for entertainment and spiritual guidance purposes only.",
      "The Service is provided on an 'as-is' basis. We do not guarantee the accuracy, completeness, or usefulness of any prediction.",
      "We are not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Service.",
      "Your use of the Service is at your own risk.",
    ],
  },
  {
    icon: Gavel,
    title: "Intellectual Property Rights",
    content: [
      "All content on HastRekhaAI, including text, images, algorithms, and designs, is the intellectual property of HastRekhaAI or its licensors.",
      "You may not reproduce, distribute, or transmit any content without our prior written permission.",
      "Your palm reading report is provided for personal use only and should not be shared without consent.",
      "Unauthorized use of our content may result in legal action.",
    ],
  },
  {
    icon: AlertCircle,
    title: "Prohibited Conduct",
    content: [
      "You agree not to upload palm images that are not your own without consent from the person in the image.",
      "You will not attempt to hack, disrupt, or interfere with the functionality of our Service.",
      "Spamming, harassment, or abusive behavior toward other users or our team is strictly prohibited.",
      "You will not use automated tools or bots to access our Service without permission.",
    ],
  },
  {
    icon: UserCheck,
    title: "Termination",
    content: [
      "We reserve the right to suspend or terminate your access to the Service at any time, with or without cause.",
      "You may discontinue use of the Service at any time.",
      "Upon termination, your right to use the Service immediately ceases.",
      "We may retain your data in accordance with our Privacy Policy.",
    ],
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <StarField className="absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Please read these Terms of Service carefully before using HastRekhaAI. By using our Service, you agree to comply with these terms.
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
              These Terms of Service govern your use of <strong>HastRekhaAI</strong>, our website, and all related services. Please read them carefully. If you do not agree with any part of these terms, please do not use our Service.
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
                7. Governing Law & Jurisdiction
              </h2>
              <div className="flex flex-col gap-3 pl-11 text-sm leading-relaxed text-muted-foreground">
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any legal action or proceeding arising under these Terms of Service will be exclusively subject to the jurisdiction of the courts located in India.
                </p>
              </div>
            </article>

            {/* Contact */}
            <div className="rounded-xl border border-border/50 bg-card p-8">
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                Questions About These Terms?
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                If you have questions about these Terms of Service, please contact us:
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
