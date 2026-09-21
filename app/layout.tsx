import "./globals.css";
import Link from "next/link";
import { getSessionUser } from "@/lib/auth";

export default async function RootLayout({children}:{children:React.ReactNode}) {
  const user = await getSessionUser();
  return <html lang="en"><body><div className="shell">
    <aside className="side"><div className="brand">🧪 MedLab LIS</div><nav className="nav">
      {user && <><Link href="/">Dashboard</Link><Link href="/patients">Patients</Link><Link href="/orders">Orders</Link><Link href="/tests">Test Catalogue</Link><Link href="/qc">Quality Control</Link><Link href="/analyzers">Analyzers</Link><Link href="/reports">Reports</Link><Link href="/integration">HL7 / FHIR</Link></>}
      {!user && <Link href="/login">Login</Link>}
    </nav></aside><main className="main">{children}</main></div></body></html>;
}