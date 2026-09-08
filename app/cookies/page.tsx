import { PageShell } from "@/components/page-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/cookies",
  title: "Cookie Policy",
  description: "Learn how HastRekhaAI uses cookies and tracks your preferences.",
});

/* */

// Keep page copy separate from the metadata declaration.

export default function CookiePage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Cookies", path: "/cookies" }]} />

      <article className="prose prose-invert mx-auto max-w-3xl px-4 py-16 dark:prose-invert">
        <h1>Cookie Policy</h1>

        <p>
          This Cookie Policy explains how HastRekhaAI uses cookies and similar
          technologies to recognize you when you visit our website
          (www.hastrekha.ai).
        </p>

        <h2>What Are Cookies?</h2>

        <p>
          Cookies are small data files stored on your browser or device that
          help websites remember information about you. They may be persistent
          (stored until deleted) or session-based (cleared when you close your
          browser).
        </p>

        <h2>How We Use Cookies</h2>

        <h3>Essential Cookies</h3>
        <p>
          We use essential cookies to enable core functionality like language
          preference persistence, session management, and CSRF protection. These
          are necessary for the website to function properly.
        </p>

        <h3>Analytics Cookies</h3>
        <p>
          We use analytics tools (Google Analytics, Vercel Analytics) to
          understand how visitors use our site—such as which pages are most
          popular and how long visitors spend on pages. This helps us improve
          user experience.
        </p>

        <h3>Preference Cookies</h3>
        <p>
          We store your language preference (English or Hindi) locally in your
          browser so your choice persists across sessions.
        </p>

        <h2>Third-Party Cookies</h2>

        <p>
          Some cookies are set by third-party services we use, including:
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> Tracks site usage to help us
            improve content and performance.
          </li>
          <li>
            <strong>Vercel Analytics:</strong> Monitors page load times and
            performance metrics.
          </li>
          <li>
            <strong>AdSense:</strong> Displays ads and tracks ad performance
            (if applicable).
          </li>
        </ul>

        <h2>Your Cookie Choices</h2>

        <p>
          Most browsers allow you to refuse cookies or alert you when cookies
          are being sent. You can also delete cookies from your browser at any
          time. However, some website features may not work properly if cookies
          are disabled.
        </p>

        <h2>Data Retention</h2>

        <p>
          Essential cookies are retained as long as necessary for their stated
          purpose. Analytics data is typically retained for 26 months. You can
          request deletion of your data at any time by contacting us at
          abhijain.technical@gmail.com.
        </p>

        <h2>Updates to This Policy</h2>

        <p>
          We may update this Cookie Policy periodically to reflect changes in
          our practices or applicable law. We will notify you of material
          changes by updating the date below.
        </p>

        <p className="text-sm text-muted-foreground">
          <strong>Last Updated:</strong> September 2026
        </p>

        <hr className="my-8" />

        <p className="text-sm text-muted-foreground">
          For questions about this Cookie Policy, please contact us at
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
