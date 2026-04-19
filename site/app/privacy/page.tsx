import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Aithority",
  description:
    "How Aithority collects, uses, and protects your information.",
  openGraph: {
    title: "Privacy Policy — Aithority",
    description: "How Aithority collects, uses, and protects your information.",
    url: "https://getaithority.co/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <nav role="navigation" aria-label="Main navigation">
        <a href="/" className="nav-logo" aria-label="Aithority home">
          AITH<span>O</span>RITY
        </a>
        <ul className="nav-links">
          <li><a href="/#services">Services</a></li>
          <li><a href="/#tracks">Tracks</a></li>
          <li><a href="/#how">Process</a></li>
          <li><a href="/#tech">Stack</a></li>
        </ul>
        <a href="/#cta" className="nav-cta">Get a Proposal</a>
      </nav>

      <main className="legal-page">
        <div className="legal-eyebrow">Legal</div>
        <h1 className="legal-title">Privacy <em>Policy</em></h1>
        <p className="legal-updated">Last updated: April 18, 2026</p>

        <div className="legal-body">
          <p>
            Aithority, operated by Blue Sky Studio, LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
            respects your privacy. This Privacy Policy describes how we collect, use, and share information when you
            visit getaithority.co (the &ldquo;Site&rdquo;) or engage our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p><strong>Information you provide.</strong> When you contact us, request a proposal, or become a client, we may collect:</p>
          <ul>
            <li>Name and job title</li>
            <li>Email address and phone number</li>
            <li>Company name, website URL, and business details</li>
            <li>Any information you include in messages or intake forms</li>
          </ul>
          <p><strong>Information collected automatically.</strong> When you visit the Site, we may collect:</p>
          <ul>
            <li>IP address and approximate location (city/region)</li>
            <li>Browser type, operating system, and device information</li>
            <li>Pages viewed, time spent, and referring URL</li>
            <li>Interaction data via analytics tools (see Section 4)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Respond to inquiries and deliver proposals</li>
            <li>Provide, maintain, and improve our services</li>
            <li>Communicate about projects, deliverables, and account updates</li>
            <li>Send relevant marketing communications (with your consent, where required)</li>
            <li>Analyze Site usage to improve performance and content</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul>
            <li><strong>Service providers</strong> — hosting, analytics, email, and project management tools that help us operate the Site and deliver services</li>
            <li><strong>Professional advisors</strong> — legal, financial, or accounting professionals as needed</li>
            <li><strong>Legal compliance</strong> — when required by law, regulation, or valid legal process</li>
            <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2>4. Analytics and Tracking</h2>
          <p>
            We use Vercel Analytics and Vercel Speed Insights to understand how visitors use the Site. These tools
            collect anonymized performance and usage data. We do not use third-party advertising trackers or
            retargeting pixels on this Site.
          </p>

          <h2>5. Cookies</h2>
          <p>
            The Site may use essential cookies necessary for functionality. We do not use advertising or cross-site
            tracking cookies. Your browser settings allow you to block or delete cookies at any time.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes described in this policy,
            maintain our business relationship, or comply with legal obligations. When information is no longer needed,
            we delete or anonymize it.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request data portability</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:hello@getaithority.co">hello@getaithority.co</a>.
          </p>

          <h2>8. Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your information. No method of
            transmission or storage is completely secure, but we take commercially appropriate steps to safeguard your
            data.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. We are not responsible for the privacy practices or
            content of those sites. We encourage you to review their privacy policies.
          </p>

          <h2>10. Children&rsquo;s Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect personal information
            from children. If we become aware that we have collected information from a child, we will delete it.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
            &ldquo;Last updated&rdquo; date. Your continued use of the Site after changes constitutes acceptance of
            the revised policy.
          </p>

          <h2>12. Contact</h2>
          <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
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
