"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

export default function Unify(){
  const [on, setOn] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current; if(!el) return;
    const io = new IntersectionObserver(([e])=> setOn(e.isIntersecting), { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section id="unify" className="section bg-white">
      <div ref={ref} className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal><h2 className="h2 font-semibold">Unify your finances</h2></Reveal>
          <Reveal delay={60}><p className="text-gray-600 mt-3 max-w-xl">Bring balances, cards and payments into one simple place.</p></Reveal>
        </div>

        <div className="relative h-[320px] md:h-[360px]">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-[60%] -translate-y-1/2 w-60 h-36 card border bg-white"
            style={on ? { animation: "mergeLeft var(--merge-duration) ease-out forwards" } : undefined}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-36 card border bg-white" />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-[40%] -translate-y-1/2 w-60 h-36 card border bg-white"
            style={on ? { animation: "mergeRight var(--merge-duration) ease-out forwards" } : undefined}
          />
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand-50 to-white" />
        </div>
      </div>
    </section>
  );
}
