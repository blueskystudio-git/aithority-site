import type { Metadata } from "next";
import { SiteNav } from "../client";

export const metadata: Metadata = {
  title: "Terms and Conditions — Aithority",
  description:
    "Terms governing use of the Aithority website and services.",
  openGraph: {
    title: "Terms and Conditions — Aithority",
    description: "Terms governing use of the Aithority website and services.",
    url: "https://getaithority.co/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <SiteNav />

      <main id="main" className="legal-page">
        <div className="legal-eyebrow">Legal</div>
        <h1 className="legal-title">Terms &amp; <em>Conditions</em></h1>
        <p className="legal-updated">Last updated: April 18, 2026</p>

        <div className="legal-body">
          <p>
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of getaithority.co (the &ldquo;Site&rdquo;)
            and any services provided by Aithority, operated by Blue Sky Studio, LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). By accessing the Site or engaging our services, you agree to these Terms.
          </p>

          <h2>1. Services</h2>
          <p>
            Aithority provides AI-powered SEO, paid media management, custom web development, marketing automation,
            analytics, and brand strategy services. The specific scope, deliverables, timeline, and fees for each
            engagement are defined in a separate service agreement or statement of work (&ldquo;SOW&rdquo;) between us
            and the client.
          </p>

          <h2>2. Use of the Site</h2>
          <p>You may use the Site for lawful purposes only. You agree not to:</p>
          <ul>
            <li>Use the Site in any way that violates applicable law or regulation</li>
            <li>Attempt to gain unauthorized access to the Site, its servers, or connected systems</li>
            <li>Use automated tools to scrape, crawl, or extract content without permission</li>
            <li>Interfere with the Site&rsquo;s operation or other users&rsquo; access</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on the Site — including text, design, graphics, logos, and code — is owned by Aithority or its
            licensors and is protected by copyright, trademark, and other intellectual property laws. You may not
            reproduce, distribute, or create derivative works from Site content without our written permission.
          </p>
          <p>
            For client engagements, intellectual property ownership and licensing terms are governed by the applicable
            SOW or service agreement.
          </p>

          <h2>4. Client Obligations</h2>
          <p>If you engage us as a client, you agree to:</p>
          <ul>
            <li>Provide accurate and timely information necessary for service delivery</li>
            <li>Grant reasonable access to accounts, platforms, and systems required for the work</li>
            <li>Review and approve deliverables within agreed timeframes</li>
            <li>Pay invoices according to the terms specified in your SOW</li>
          </ul>

          <h2>5. Payment Terms</h2>
          <p>
            Retainer fees are billed monthly in advance. Project fees are billed according to the milestones defined in
            the SOW. All fees are in US dollars unless otherwise specified. Late payments may incur interest at the rate
            of 1.5% per month or the maximum permitted by law, whichever is lower.
          </p>

          <h2>6. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any proprietary or non-public information shared during the
            engagement. This includes business strategies, client data, login credentials, financial information, and
            the BRAND.md document. Confidentiality obligations survive termination of services.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Aithority&rsquo;s total liability for any claim arising from or
            related to the Site or our services is limited to the fees paid by you in the twelve (12) months preceding
            the claim.
          </p>
          <p>
            We are not liable for indirect, incidental, consequential, special, or punitive damages, including lost
            profits, lost data, or business interruption, regardless of the theory of liability.
          </p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>
            The Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind,
            express or implied. We do not guarantee that the Site will be uninterrupted, error-free, or free of harmful
            components.
          </p>
          <p>
            While we work to deliver measurable results, we do not guarantee specific search rankings, traffic volumes,
            conversion rates, or revenue outcomes. Digital marketing results depend on many factors outside our control,
            including search engine algorithms, market conditions, and competitive activity.
          </p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Aithority, Blue Sky Studio, LLC, and their officers, employees, and
            agents from any claims, damages, losses, or expenses (including legal fees) arising from your violation of
            these Terms or misuse of the Site or services.
          </p>

          <h2>10. Termination</h2>
          <p>
            Either party may terminate a service engagement according to the terms specified in the applicable SOW. We
            reserve the right to suspend or terminate your access to the Site at any time for violation of these Terms.
          </p>
          <p>
            Upon termination, all fees owed through the date of termination remain payable. Sections on intellectual
            property, confidentiality, limitation of liability, and indemnification survive termination.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the State of Georgia, United States,
            without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved in the
            state or federal courts located in Georgia.
          </p>

          <h2>12. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Changes will be posted on this page with an updated &ldquo;Last
            updated&rdquo; date. Your continued use of the Site after changes constitutes acceptance of the revised Terms.
          </p>

          <h2>13. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions remain in full force
            and effect.
          </p>

          <h2>14. Contact</h2>
          <p>Questions about these Terms? Contact us at:</p>
          <p>
            Aithority (operated by Blue Sky Studio, LLC)<br />
            Email: <a href="mailto:hello@getaithority.co">hello@getaithority.co</a>
          </p>
        </div>
      </main>

      <footer role="contentinfo">
        <div className="footer-logo">AITH<span>O</span>RITY</div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/#tracks">Tracks</a>
          <a href="mailto:hello@getaithority.co">Contact</a>
        </nav>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="/terms">Terms &amp; Conditions</a>
        </div>
        <div className="footer-copy">&copy; 2026 Aithority. All rights reserved.</div>
      </footer>
    </>
  );
}
