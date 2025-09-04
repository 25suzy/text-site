"use client";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

export default function Reviews() {
  const items = [
    { name: "V.K.", quote: "Simple payments with fast verification. Great support.", role: "App user" },
    { name: "L.A.", quote: "User-friendly and reliable for everyday transfers.", role: "Customer" },
    { name: "D.P.", quote: "Fast and easy. Card works well for daily purchases.", role: "Card user" },
  ];

  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <section aria-labelledby="reviews" className="py-16 sm:py-20 bg-white">
      <div className="container">
        <Reveal><h2 id="reviews" className="text-2xl sm:text-3xl font-semibold tracking-tight">Hear it from our users</h2></Reveal>
        <Reveal delay={60}><p className="text-gray-600 mt-2 max-w-2xl">Short quotes as social proof (placeholder).</p></Reveal>

        <div className="relative mt-6 overflow-hidden">
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${i * 100}%)` }}>
            {items.map((it) => (
              <figure key={it.name} className="card p-5 w-full shrink-0">
                <blockquote className="text-sm text-gray-700 leading-relaxed">“{it.quote}”</blockquote>
                <figcaption className="mt-4 text-xs text-gray-500">{it.name} · {it.role}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx+1}`}
              onClick={() => setI(idx)}
              className={`h-2.5 w-2.5 rounded-full ${i === idx ? "bg-gray-900" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
