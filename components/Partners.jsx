import Reveal from "./Reveal";

export default function Partners() {
  const logos = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta"];
  const loop = [...logos, ...logos]; // 무한 루프 용

  return (
    <section aria-labelledby="partners" className="py-14 bg-white">
      <div className="container">
        <Reveal><h2 id="partners" className="sr-only">Partners</h2></Reveal>
        <div className="card p-6 overflow-hidden">
          <p className="text-xs uppercase tracking-wider text-gray-500">Trusted by teams</p>

          <div className="mt-4 relative">
            <div className="flex gap-10 marquee">
              {loop.map((name, idx) => (
                <div key={`${name}-${idx}`} className="flex items-center justify-center opacity-80 hover:opacity-100 transition">
                  <img src={`/logos/${name}.svg`} alt={`${name} logo`} className="h-8" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
