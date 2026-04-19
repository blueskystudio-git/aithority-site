import { SiteNav, ScrollAnimations } from "./client";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <SiteNav />

      <main id="main">
      {/* HERO */}
      <section id="hero" aria-label="Hero">
        <div className="hero-bg-grid" aria-hidden="true"></div>
        <div className="hero-accent-blob" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-eyebrow fade-in">AI-Powered Growth Agency</div>
          <h1 className="hero-headline fade-in">
            Search. <em>Built</em><br />
            by machines.<br />
            Run by experts.
          </h1>
          <p className="hero-sub fade-in">
            Aithority delivers AI-powered SEO, paid media, automation, and custom
            web development for multi-location businesses and ambitious brands
            ready to dominate search.
          </p>
          <div className="hero-actions fade-in">
            <a href="#cta" className="btn-primary">Start a Project</a>
            <a href="#services" className="btn-ghost">See what we do</a>
          </div>
          <div className="hero-stats fade-in">
            <div>
              <div className="stat-num">10<span>&times;</span></div>
              <div className="stat-label">Content velocity vs. traditional</div>
            </div>
            <div>
              <div className="stat-num">Full<span>&#8209;</span>Stack</div>
              <div className="stat-label">SEO + Paid + Web + Automation</div>
            </div>
            <div>
              <div className="stat-num">AI<span>&#8209;</span>First</div>
              <div className="stat-label">From intake to reporting</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" aria-label="Services">
        <div className="container">
          <div className="services-header">
            <div className="fade-in">
              <div className="section-label">What we do</div>
              <h2 className="section-title">
                Every lever.<br /><em>Pulled together.</em>
              </h2>
            </div>
            <p className="section-sub fade-in">
              We build integrated growth systems — not siloed campaigns. AI handles
              the scale. Our team handles the strategy.
            </p>
          </div>
          <div className="services-grid">
            <ServiceCard
              num="01"
              icon="◎"
              name="AI-Powered SEO"
              desc="Programmatic content at scale, technical audits, GEO optimization, and local search domination — built on the Aithority platform."
              features={[
                "Local & multi-location SEO",
                "Generative engine optimization (GEO)",
                "AI content production pipelines",
                "Schema markup & technical SEO",
                "Google Business Profile management",
              ]}
            />
            <ServiceCard
              num="02"
              icon="▲"
              name="Paid Media"
              desc="Google Ads campaigns engineered for intent. From keyword architecture to automated bid management and performance reporting."
              features={[
                "Google Search & Performance Max",
                "Keyword architecture & match-type strategy",
                "AI-assisted ad copy testing",
                "Automated reporting dashboards",
                "Local Services Ads management",
              ]}
            />
            <ServiceCard
              num="03"
              icon="⬡"
              name="Custom Web Development"
              desc="Performance-first websites on Next.js and Astro. Built for speed, conversion, and CMS flexibility — deployed on Vercel."
              features={[
                "Next.js & Astro builds",
                "Headless CMS integration (Sanity)",
                "Core Web Vitals optimization",
                "E-commerce & multi-location sites",
                "Design-to-code from brand systems",
              ]}
            />
            <ServiceCard
              num="04"
              icon="⟳"
              name="Marketing Automation"
              desc="n8n and AI-driven workflows that eliminate manual work — from GBP posting schedules to reporting pipelines and lead routing."
              features={[
                "GBP post automation with AI image gen",
                "n8n workflow architecture",
                "CRM & form integration",
                "Automated client reporting",
                "AI content scheduling & publishing",
              ]}
            />
            <ServiceCard
              num="05"
              icon="◈"
              name="Analytics & Reporting"
              desc="Custom Looker Studio dashboards, GBP performance tracking, and AI-generated insights — delivered on a clear cadence."
              features={[
                "Looker Studio build & management",
                "GBP & map pack performance",
                "Google Ads attribution",
                "Monthly AI-generated commentary",
                "Executive summary reporting",
              ]}
            />
            <ServiceCard
              num="06"
              icon="◐"
              name="Brand Strategy"
              desc="BRAND.md intake process, competitive positioning, and visual identity direction — the foundation for everything that follows."
              features={[
                "Brand intake & positioning",
                "Competitive landscape analysis",
                "Messaging hierarchy",
                "Content voice & tone guidelines",
                "Logo & identity direction",
              ]}
            />
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" aria-label="Retainer tracks">
        <div className="container">
          <div className="tracks-intro">
            <div className="fade-in">
              <div className="section-label">Retainer Tracks</div>
              <h2 className="section-title">
                Two tracks.<br /><em>One platform.</em>
              </h2>
              <p className="section-sub" style={{ marginTop: "1.5rem" }}>
                Aithority retainers are productized — clear deliverables,
                transparent tiers, AI-powered execution at a fraction of
                traditional agency cost.
              </p>
            </div>
            <div className="fade-in" style={{ paddingTop: "0.5rem" }}>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.85, color: "var(--muted)" }}>
                Every retainer includes access to the Aithority client portal —
                live rankings, GBP metrics, content performance, and reporting in
                one place.
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.85, color: "var(--muted)", marginTop: "1rem" }}>
                No spreadsheets. No guesswork. Just numbers that matter, updated
                automatically.
              </p>
            </div>
          </div>
          <div className="tracks-grid">
            <div className="track-card fade-in">
              <div className="track-badge">Local Track</div>
              <h3 className="track-name">Aithority Local</h3>
              <div className="track-ideal">
                For single-location and multi-location businesses competing in
                local search
              </div>
              <div className="track-tiers">
                <Tier name="Essentials" price="From $997 / mo" />
                <Tier name="Growth" price="From $1,997 / mo" />
                <Tier name="Dominate" price="From $3,497 / mo" />
              </div>
              <p className="track-note">
                GBP optimization, local content, citations, review strategy, map
                pack ranking, and automated posting.
              </p>
            </div>
            <div className="track-card fade-in">
              <div className="track-badge">Brand Track</div>
              <h3 className="track-name">Aithority Brand</h3>
              <div className="track-ideal">
                For regional brands, DTC, and multi-location groups competing at
                scale
              </div>
              <div className="track-tiers">
                <Tier name="Essentials" price="From $2,497 / mo" />
                <Tier name="Growth" price="From $4,497 / mo" />
                <Tier name="Dominate" price="From $7,997 / mo" />
              </div>
              <p className="track-note">
                Full-spectrum SEO, paid media, content at scale, technical
                oversight, and custom reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how" aria-label="Our process">
        <div className="container">
          <div className="process-header fade-in">
            <div className="section-label">How it works</div>
            <h2 className="section-title">
              Intake. Build.<br /><em>Ship. Optimize.</em>
            </h2>
          </div>
          <div className="process-steps">
            <div className="step fade-in">
              <div className="step-num">STEP 01</div>
              <h3 className="step-name">BRAND.md Intake</h3>
              <p className="step-desc">
                We capture your brand, competitors, audience, and goals via a
                structured interview — transcribed and distilled into a living
                brand document that powers every AI output.
              </p>
            </div>
            <div className="step fade-in">
              <div className="step-num">STEP 02</div>
              <h3 className="step-name">Technical Audit</h3>
              <p className="step-desc">
                Site architecture, schema, Core Web Vitals, GBP completeness, and
                AI-readiness scoring. We find every gap before we start building.
              </p>
            </div>
            <div className="step fade-in">
              <div className="step-num">STEP 03</div>
              <h3 className="step-name">System Build</h3>
              <p className="step-desc">
                Content pipelines, automation workflows, paid campaigns, and
                reporting dashboards are configured and launched. Your stack is
                live in week one.
              </p>
            </div>
            <div className="step fade-in">
              <div className="step-num">STEP 04</div>
              <h3 className="step-name">Continuous Optimization</h3>
              <p className="step-desc">
                Monthly strategy reviews, AI-generated performance commentary, and
                iterative improvements. The system learns. Your rankings grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" aria-label="Technology stack">
        <div className="container">
          <div className="tech-header">
            <div className="fade-in">
              <div className="section-label">Our Stack</div>
              <h2 className="section-title">
                Built on the<br /><em>right tools.</em>
              </h2>
            </div>
            <p className="section-sub fade-in">
              We don&apos;t use bloated agency software. Every tool in our stack was
              chosen for performance, flexibility, and AI-readiness.
            </p>
          </div>
          <div className="tech-grid">
            <TechItem icon="▲" name="Next.js" role="Web Framework" />
            <TechItem icon="◈" name="Vercel" role="Deployment" />
            <TechItem icon="◉" name="Supabase" role="Data Platform" />
            <TechItem icon="◎" name="Claude API" role="AI Engine" />
            <TechItem icon="⬡" name="n8n" role="Automation" />
            <TechItem icon="◐" name="Sanity CMS" role="Content Layer" />
            <TechItem icon="⟳" name="Google Ads API" role="Paid Media" />
            <TechItem icon="◇" name="GBP API" role="Local Management" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" aria-label="Get a proposal">
        <div className="cta-blob" aria-hidden="true"></div>
        <div className="container">
          <div className="cta-inner fade-in">
            <div className="section-label">Ready to start</div>
            <h2 className="cta-headline">
              Let&apos;s build your<br /><em>growth engine.</em>
            </h2>
            <p className="cta-sub">
              We take on a limited number of new clients each quarter. Tell us
              about your business and we&apos;ll outline a plan within 48 hours.
            </p>
            <div className="cta-actions">
              <a href="mailto:hello@getaithority.co" className="btn-primary">
                Get a Proposal
              </a>
              <a href="#services" className="btn-ghost">See our services</a>
            </div>
            <p className="cta-note">
              No commitment required &mdash; just a conversation.
            </p>
          </div>
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer role="contentinfo">
        <div className="footer-logo">
          AITH<span>O</span>RITY
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#tracks">Tracks</a>
          <a href="#how">Process</a>
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

function ServiceCard({
  num,
  icon,
  name,
  desc,
  features,
}: {
  num: string;
  icon: string;
  name: string;
  desc: string;
  features: string[];
}) {
  return (
    <div className="service-card fade-in">
      <div className="service-num">{num}</div>
      <span className="service-icon" aria-hidden="true">{icon}</span>
      <h3 className="service-name">{name}</h3>
      <p className="service-desc">{desc}</p>
      <ul className="service-features" aria-label={`${name} service features`}>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

function Tier({ name, price }: { name: string; price: string }) {
  return (
    <div className="tier">
      <span className="tier-name">{name}</span>
      <span className="tier-price">{price}</span>
    </div>
  );
}

function TechItem({ icon, name, role }: { icon: string; name: string; role: string }) {
  return (
    <div className="tech-item fade-in">
      <span className="tech-logo" aria-hidden="true">{icon}</span>
      <div className="tech-name">{name}</div>
      <div className="tech-role">{role}</div>
    </div>
  );
}
