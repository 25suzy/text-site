"use client";
import { useMemo, useState } from "react";
import Reveal from "./Reveal";

const RATES = { USD:1, EUR:0.92, GBP:0.78, KRW:1350, TRY:34, JPY:156 };

export default function Converter(){
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amt, setAmt] = useState(100);

  const out = useMemo(()=>{
    const a = Number(amt)||0;
    const usd = a / (RATES[from]||1);
    const val = usd * (RATES[to]||1);
    return Math.round(val*100)/100;
  },[from,to,amt]);

  const opts = Object.keys(RATES);

  return (
    <section id="convert" className="section">
      <div className="container grid md:grid-cols-[1.2fr_1fr] gap-12 items-start">
        <div>
          <Reveal><h2 className="h2 font-semibold">Convert fiat</h2></Reveal>
          <p className="text-gray-600 mt-2">Demo calculator (static rates for preview).</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="card p-4">
              <label className="text-xs text-gray-500">From</label>
              <div className="mt-2 flex gap-2">
                <input className="w-28 h-10 rounded-lg border px-3" value={amt} onChange={e=>setAmt(e.target.value)} />
                <select className="h-10 rounded-lg border px-3" value={from} onChange={e=>setFrom(e.target.value)}>
                  {opts.map(o=> <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className="card p-4">
              <label className="text-xs text-gray-500">To</label>
              <div className="mt-2 flex gap-2">
                <input className="w-28 h-10 rounded-lg border px-3" value={out} readOnly />
                <select className="h-10 rounded-lg border px-3" value={to} onChange={e=>setTo(e.target.value)}>
                  {opts.map(o=> <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">* Demo only. Rates are placeholders.</p>
        </div>

        <div className="card h-[240px]" />
      </div>
    </section>
  );
}
