"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email,setEmail]=useState("admin@medlab.local");
  const [password,setPassword]=useState("ChangeMe123!");
  const [error,setError]=useState("");
  const router=useRouter();
  async function submit(e:React.FormEvent){
    e.preventDefault(); setError("");
    const x=await fetch("/api/auth/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email,password})});
    if(x.ok) router.push("/dashboard"); else setError("Invalid credentials");
  }
  return <div className="login-page">
    <section className="login-brand-panel">
      <div><Link href="/" className="public-brand" style={{color:"white"}}><span className="brand-mark">K</span><span>knoxLab</span></Link><h1>Your laboratory, connected.</h1><p>A focused workspace for patient management, laboratory orders, results, quality control and reporting.</p></div>
      <small style={{color:"#8eaca4"}}>Laboratory information management platform · 2026</small>
    </section>
    <section className="login-form-panel"><div className="login-card">
      <Link href="/" className="back-home">← Back to knoxLab</Link><h2>Welcome back</h2><p className="muted">Sign in to the staff laboratory workspace.</p>
      <form className="login-form" onSubmit={submit}>
        <label>EMAIL<input className="input" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="username"/></label>
        <label>PASSWORD<input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} autoComplete="current-password"/></label>
        <button className="btn">Sign in to knoxLab →</button>
        {error&&<p style={{color:"#b42318",fontSize:12}}>{error}</p>}
      </form>
      <p className="muted" style={{marginTop:24,fontSize:11}}>Use an authorized laboratory account. Change development credentials before any real deployment.</p>
    </div></section>
  </div>;
}