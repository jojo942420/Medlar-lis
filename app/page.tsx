import Link from "next/link";

const services = [
  { icon: "🩸", title: "Hematology", text: "Structured workflows for FBC, differentials, coagulation and related investigations." },
  { icon: "🧪", title: "Clinical Chemistry", text: "Manage chemistry requests, analyzer results, validation and reporting." },
  { icon: "🦠", title: "Microbiology", text: "Track specimens, cultures, susceptibility results and verification." },
  { icon: "🧬", title: "Molecular & Serology", text: "Organize specialized testing with traceable result workflows." },
  { icon: "📊", title: "Quality Control", text: "Record controls, monitor performance and maintain an auditable QC history." },
  { icon: "🔗", title: "Interoperability", text: "Prepare laboratory data for HL7/FHIR and analyzer integration." },
];

export default function Home() {
  return (
    <div className="public-page">
      <header className="public-nav">
        <Link href="/" className="public-brand">
          <span className="brand-mark">K</span>
          <span>knox<span>Lab</span></span>
        </Link>
        <nav className="public-links">
          <a href="#services">Services</a>
          <a href="#workflow">Workflow</a>
          <a href="#features">Features</a>
        </nav>
        <Link href="/login" className="nav-login">Staff Portal →</Link>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> Modern Laboratory Information System</div>
            <h1>Laboratory intelligence, <em>built for better care.</em></h1>
            <p className="hero-text">
              knoxLab brings patient registration, laboratory orders, results, quality control,
              analyzers and reporting into one secure digital workspace.
            </p>
            <div className="hero-actions">
              <Link href="/login" className="primary-cta">Open Staff Portal <span>→</span></Link>
              <a href="#features" className="secondary-cta">Explore the platform</a>
            </div>
            <div className="trust-row">
              <span>✓ Patient-centric</span>
              <span>✓ Traceable workflows</span>
              <span>✓ Role-based access</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="dashboard-window">
              <div className="window-bar"><span /><span /><span /><b>knoxLab / Dashboard</b></div>
              <div className="mini-dashboard">
                <aside>
                  <div className="mini-logo">K</div>
                  <div className="mini-active">⌂</div><div>♙</div><div>▣</div><div>◈</div><div>⚙</div>
                </aside>
                <div className="mini-main">
                  <div className="mini-heading"><div><small>LABORATORY OVERVIEW</small><strong>Good morning, Scientist</strong></div><div className="avatar">ML</div></div>
                  <div className="mini-cards">
                    <div><small>Patients</small><strong>1,248</strong><i>+8.4%</i></div>
                    <div><small>Today's Orders</small><strong>326</strong><i>+4.2%</i></div>
                    <div><small>Pending Results</small><strong>42</strong><i>Review</i></div>
                  </div>
                  <div className="mini-panel">
                    <div className="panel-title">Recent laboratory activity <span>View all →</span></div>
                    <div className="activity"><b>FBC</b><span>Patient #KNX-10284</span><label>Verified</label></div>
                    <div className="activity"><b>Malaria RDT</b><span>Patient #KNX-10279</span><label>Pending</label></div>
                    <div className="activity"><b>HbA1c</b><span>Patient #KNX-10273</span><label>Verified</label></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div><strong>01</strong><span>Register &amp; identify</span></div>
          <div><strong>02</strong><span>Order &amp; collect</span></div>
          <div><strong>03</strong><span>Analyze &amp; validate</span></div>
          <div><strong>04</strong><span>Release &amp; report</span></div>
        </section>

        <section id="features" className="section feature-section">
          <div className="section-kicker">THE KNOXLAB PLATFORM</div>
          <h2>One connected laboratory.<br /><span>Every result accounted for.</span></h2>
          <p className="section-lead">Designed around the real laboratory workflow — from registration to verified report — with visibility at every step.</p>
          <div className="feature-grid">
            <article><div className="feature-icon">01</div><h3>Patient &amp; order management</h3><p>Capture demographics, requests and specimen information in a structured workflow.</p></article>
            <article><div className="feature-icon">02</div><h3>Result verification</h3><p>Keep pending, verified and released results visible to authorized laboratory staff.</p></article>
            <article><div className="feature-icon">03</div><h3>Quality &amp; traceability</h3><p>Connect QC records and audit history to the laboratory's operational workflow.</p></article>
            <article><div className="feature-icon">04</div><h3>Ready to integrate</h3><p>Build toward analyzer connectivity and HL7/FHIR interoperability as your laboratory grows.</p></article>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading-row"><div><div className="section-kicker">LABORATORY DISCIPLINES</div><h2>Built around your bench.</h2></div><p>Flexible modules for routine and specialized laboratory operations.</p></div>
          <div className="service-grid">
            {services.map((service) => <article key={service.title} className="service-card"><div className="service-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p><span>Explore module →</span></article>)}
          </div>
        </section>

        <section id="workflow" className="workflow-section">
          <div className="workflow-copy"><div className="section-kicker">THE WORKFLOW</div><h2>From sample to report,<br /><span>without losing the thread.</span></h2><p>knoxLab is organized around the chain of custody of laboratory information. Every stage can be reviewed, verified and reported through one system.</p><Link href="/login" className="primary-cta">Enter knoxLab <span>→</span></Link></div>
          <div className="workflow-steps">
            <div><b>01</b><strong>Register</strong><span>Patient &amp; demographics</span></div>
            <div><b>02</b><strong>Request</strong><span>Tests &amp; specimens</span></div>
            <div><b>03</b><strong>Analyze</strong><span>Bench &amp; analyzer</span></div>
            <div><b>04</b><strong>Verify</strong><span>Scientist review</span></div>
            <div><b>05</b><strong>Report</strong><span>Release results</span></div>
          </div>
        </section>

        <section className="cta-section">
          <div><div className="section-kicker">KNOXLAB</div><h2>Your laboratory,<br /><em>connected.</em></h2></div>
          <Link href="/login" className="light-cta">Launch Staff Portal →</Link>
        </section>
      </main>

      <footer className="public-footer"><div className="public-brand"><span className="brand-mark">K</span><span>knox<span>Lab</span></span></div><p>Laboratory information, connected.</p><small>© 2026 knoxLab. Clinical use requires appropriate validation and quality-system review.</small></footer>
    </div>
  );
}
