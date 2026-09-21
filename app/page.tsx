import { getSessionUser } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";

export default async function Dashboard(){
 const user=await getSessionUser();
 if(!user) return <div className="card"><h1>MedLab LIS</h1><p>Laboratory information system for patient registration, orders, results, QC, analyzers and interoperability.</p><Link className="btn" href="/login">Sign in</Link></div>;
 const [patients,orders,pending,verified]=await Promise.all([
  db.patient.count(),db.labOrder.count(),db.result.count({where:{status:"PENDING"}}),db.result.count({where:{status:"VERIFIED"}})
 ]);
 return <><div className="top"><div><h1>Laboratory Dashboard</h1><p className="muted">Welcome, {user.name} · {user.role}</p></div></div>
 <div className="grid">{[["Patients",patients],["Orders",orders],["Pending results",pending],["Verified results",verified]].map(([a,b])=><div className="card" key={String(a)}><div className="muted">{a}</div><div className="metric">{b}</div></div>)}</div>
 <div style={{marginTop:20}} className="card"><h2>Core workflow</h2><p>Register patient → create order → collect/receive specimen → analyze → validate → release report.</p></div></>;
}