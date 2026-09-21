import { getSessionUser } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";

export default async function Dashboard() {
  const user = await getSessionUser();
  if (!user) return <div className="card"><h1>Staff portal</h1><p>Please sign in to access the laboratory workspace.</p><Link className="btn" href="/login">Sign in</Link></div>;
  const [patients, orders, pending, verified] = await Promise.all([
    db.patient.count(), db.labOrder.count(), db.result.count({ where: { status: "PENDING" } }), db.result.count({ where: { status: "VERIFIED" } })
  ]);
  return <div className="app-dashboard">
    <div className="top"><div><div className="section-kicker">KNOXLAB WORKSPACE</div><h1>Laboratory Dashboard</h1><p className="muted">Welcome, {user.name} · {user.role}</p></div><Link href="/patients/new" className="btn">+ New patient</Link></div>
    <div className="grid">{[["Patients", patients, "👥"], ["Orders", orders, "🧾"], ["Pending results", pending, "⏳"], ["Verified results", verified, "✓"]].map(([a,b,icon]) => <div className="card metric-card" key={String(a)}><div className="metric-icon">{icon}</div><div className="muted">{a}</div><div className="metric">{b}</div></div>)}</div>
    <div className="dashboard-panels"><div className="card"><div className="panel-title">Core workflow <span>Today</span></div><div className="workflow-list"><div><b>01</b><span>Register patient</span><em>Patients</em></div><div><b>02</b><span>Create laboratory order</span><em>Orders</em></div><div><b>03</b><span>Analyze &amp; enter results</span><em>Results</em></div><div><b>04</b><span>Validate &amp; release report</span><em>Reports</em></div></div></div><div className="card"><div className="panel-title">Quick actions</div><div className="quick-actions"><Link href="/patients/new">Register patient <span>→</span></Link><Link href="/orders">Create order <span>→</span></Link><Link href="/reports">View reports <span>→</span></Link><Link href="/qc">Quality control <span>→</span></Link></div></div></div>
  </div>;
}
