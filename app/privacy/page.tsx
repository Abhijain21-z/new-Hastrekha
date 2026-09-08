"use client";

import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export default function PrivacyPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
        <p className="eyebrow">Trust & transparency</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: September 8, 2026</p>
        <div className="prose-editorial mt-10 space-y-8 text-muted-foreground">
          <p>This policy describes what HastRekhaAI currently collects and how it is used. If our practices change, we will update this page before relying on the new practice.</p>
          <section><h2>Information you provide</h2><p>When you use a reading, you may provide your name, palm image, date of birth, time of birth, and birth place. When you contact us, we receive your name, email address, and message.</p></section>
          <section><h2>Palm images and reading data</h2><p>Images are processed in your browser for the current reading experience and are not intentionally saved by this website as a user account or profile. We do not promise a fixed deletion window for data that may be handled by a third-party service. Do not upload an image containing someone else or anything you want to keep confidential.</p></section>
          <section><h2>Why we use information</h2><p>We use submitted details to generate the requested reading, respond to contact requests, maintain site security, and improve the usability of the service. Readings are AI-assisted and may be inaccurate.</p></section>
          <section><h2>Services and analytics</h2><p>The site uses Vercel hosting and analytics. Contact messages are sent through Resend. Advertising or analytics providers may set their own cookies when enabled. We do not claim that these providers are part of our service or that we share data with research partners.</p></section>
          <section><h2>Cookies and choices</h2><p>Essential browser storage may remember your language preference. Optional analytics or advertising cookies can be controlled through your browser and, where available, the provider’s controls. See our <Link href="/cookie-policy" className="text-primary underline">Cookie Policy</Link>.</p></section>
          <section><h2>Your requests</h2><p>To ask a question about a contact message or request that we review information associated with your message, email <a className="text-primary underline" href="mailto:abhijain.technical@gmail.com">abhijain.technical@gmail.com</a>. We will assess the request and respond where we can. We do not promise rights or legal coverage that may not apply to your location.</p></section>
          <section><h2>Important limitation</h2><p>HastRekhaAI is an entertainment and self-reflection service. It does not provide medical, financial, legal, psychological, or other professional advice.</p></section>
        </div>
      </article>
    </PageShell>
  );
}
