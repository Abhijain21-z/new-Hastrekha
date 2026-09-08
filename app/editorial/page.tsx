import { PageShell } from "@/components/page-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/editorial",
  title: "Editorial Policy",
  description: "Learn about our standards for content, accuracy, and disclosure on HastRekhaAI.",
});

export default function EditorialPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Editorial Policy", path: "/editorial" }]} />

      <article className="prose prose-invert mx-auto max-w-3xl px-4 py-16 dark:prose-invert">
        <h1>Editorial Policy</h1>

        <p>
          This Editorial Policy outlines our commitment to accuracy, integrity,
          and transparency in the content published on HastRekhaAI.
        </p>

        <h2>Content Standards</h2>

        <h3>Accuracy and Fact-Checking</h3>
        <p>
          All content on HastRekhaAI is researched and reviewed for factual
          accuracy. Articles about astrology, palm reading, and traditional
          practices are based on established principles and cross-referenced
          with reliable sources.
        </p>

        <h3>Expert Review</h3>
        <p>
          Content is written by contributors with knowledge in astrology and
          palmistry, and reviewed by editorial staff before publication to
          ensure quality and consistency.
        </p>

        <h3>Source Attribution</h3>
        <p>
          We cite our sources and provide references where applicable. When
          sharing traditional knowledge or practices, we acknowledge their
          cultural and historical context.
        </p>

        <h2>Scope and Limitations</h2>

        <p>
          HastRekhaAI provides entertainment and informational content based on
          traditional astrological and palmistry practices. Our readings and
          interpretations are not predictions of the future, medical advice, or
          a substitute for professional guidance.
        </p>

        <h2>Disclosure and Disclaimers</h2>

        <p>
          We include clear disclaimers where necessary to clarify that:
        </p>
        <ul>
          <li>
            Astrological and palmistry readings are for entertainment and
            informational purposes only.
          </li>
          <li>
            Results should not be used for medical, financial, or legal
            decisions without consulting appropriate professionals.
          </li>
          <li>Individual interpretations may vary based on cultural context.</li>
        </ul>

        <h2>Corrections and Updates</h2>

        <p>
          If you find factual errors or have concerns about content accuracy,
          please contact us immediately. We will investigate and make
          corrections as needed, with updates noted in the article.
        </p>

        <h2>User-Generated Content</h2>

        <p>
          While we encourage reader engagement, all user submissions (comments,
          messages) are moderated. We reserve the right to remove content that
          is abusive, misleading, or violates our community standards.
        </p>

        <h2>Advertising and Sponsorships</h2>

        <p>
          Any sponsored content or advertising is clearly labeled to distinguish
          it from editorial content. We do not allow advertisers to influence
          editorial decisions or content accuracy.
        </p>

        <h2>Privacy and Data</h2>

        <p>
          User data shared through palm reading uploads or contact forms is
          handled according to our{" "}
          <a href="/privacy" className="font-semibold underline">
            Privacy Policy
          </a>
          . We never share personal information with third parties for
          marketing purposes.
        </p>

        <h2>Updates to This Policy</h2>

        <p>
          We may update this Editorial Policy as our practices evolve or as we
          expand services. Material changes will be announced.
        </p>

        <p className="text-sm text-muted-foreground">
          <strong>Last Updated:</strong> September 2026
        </p>

        <hr className="my-8" />

        <p className="text-sm text-muted-foreground">
          For editorial inquiries or corrections, please contact us at
          abhijain.technical@gmail.com or use our{" "}
          <a href="/contact" className="font-semibold underline">
            contact form
          </a>
          .
        </p>
      </article>
    </PageShell>
  );
}
