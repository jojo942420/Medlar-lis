import "./globals.css";
import Link from "next/link";
import { getSessionUser } from "@/lib/auth";

export const metadata = { title: "knoxLab | Laboratory Information System", description: "Connected laboratory information management by knoxLab." };

export default async function RootLayout({children}:{children:React.ReactNode}) {
  const user = await getSessionUser();
  return <html lang="en"><body><div className={user ? "shell" : "guest-shell"}>
    {user && <aside className="side"><Link href="/dashboard" className="brand">knoxLab</Link><nav className="nav"><Link href="/dashboard">Dashboard</Link><Link href="/patients">Patients</Link><Link href="/orders">Orders</Link><Link href="/tests">Test Catalogue</Link><Link href="/qc">Quality Control</Link><Link href="/analyzers">Analyzers</Link><Link href="/reports">Reports</Link><Link href="/integration">HL7 / FHIR</Link></nav></aside>}
    <main className={user ? "main" : "guest-main"}>{children}</main>
  </div></body></html>;
}