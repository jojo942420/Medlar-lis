import Link from "next/link";

export default function IntegrationPage() {
  return <div className="card integration-page"><div className="section-kicker">INTEROPERABILITY</div><h1>HL7 / FHIR Integration</h1><p className="section-lead">A dedicated integration workspace for connecting knoxLab with analyzers, hospital systems and health information platforms.</p><div className="integration-grid"><div><b>FHIR</b><span>Patient, ServiceRequest, Observation and DiagnosticReport mapping.</span></div><div><b>HL7 v2</b><span>Prepare message workflows for orders, results and acknowledgements.</span></div><div><b>Analyzer interfaces</b><span>Design instrument-to-LIS connectivity with traceable result handling.</span></div></div><div className="notice">Integration endpoints should be configured, tested and validated against each connected system before clinical use.</div><Link href="/dashboard" className="btn">← Back to dashboard</Link></div>;
}
