import Reveal from "./Reveal";


export default function Reviews() {
  const items = [
    { name: "V.K.", quote: "Simple payments with fast verification. Great support.", role: "App user" },
    { name: "L.A.", quote: "User-friendly and reliable for everyday transfers.", role: "Customer" },
    { name: "D.P.", quote: "Fast and easy. Card works well for daily purchases.", role: "Card user" },
  ];
  return (
    <section aria-labelledby="reviews" className="py-16 sm:py-20 bg-white">
      <div className="container">
        <Reveal><h2 id="reviews" className="text-2xl sm:text-3xl font-semibold tracking-tight">Hear it from our users</h2></Reveal>
        <Reveal delay={60}><p className="text-gray-600 mt-2 max-w-2xl">Short quotes as social proof (placeholder).</p></Reveal>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={100 + i * 80}>
              <figure className="card p-5">
                <blockquote className="text-sm text-gray-700 leading-relaxed">“{it.quote}”</blockquote>
                <figcaption className="mt-4 text-xs text-gray-500">{it.name} · {it.role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
