"use client";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const steps = [
  { t: "Add",    d: "Top up in seconds with low fees." },
  { t: "Send",   d: "Instant transfers with clear statuses." },
  { t: "Exchange", d: "Swap across currencies with ease." },
];

export default function Flows(){
  const [i, setI] = useState(0);
  useEffect(()=>{
    const onScroll = () => {
      const y = window.scrollY || 0;
      const h = window.innerHeight || 1;
      const p = Math.min(0.99, Math.max(0, (y % (h*0.9)) / (h*0.9)));
      setI( p < 0.33 ? 0 : p < 0.66 ? 1 : 2 );
    };
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[]);
  return (
    <section id="flows" className="section">
      <div className="container grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Reveal><h2 className="h2 font-semibold">Key flows</h2></Reveal>
          <ul className="mt-6 space-y-5">{/* 항목 간격 20px */}
            {steps.map((s, idx)=>(
              <li key={s.t}
                  className={`p-4 rounded-xl border transition-colors duration-200
                    ${i===idx ? "border-brand-300 bg-brand-50" : "border-gray-200 bg-white"}`}>
                <div className="font-semibold">{s.t}</div>
                <div className="text-sm text-gray-600">{s.d}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-4 h-[320px] md:h-[360px]">
          <div className="grid grid-cols-3 gap-5 h-full">{/* 카드 간격 20px */}
            {[...Array(9)].map((_,k)=>(
              <div key={k}
                   className={`rounded-xl border transition-colors duration-200
                   ${i===k%3 ? "bg-brand-100 border-brand-300" : "bg-gray-50 border-gray-200"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
