export default function Partners() {
  const logos = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta"];
  return (
    <section aria-labelledby="partners" className="py-14 bg-white">
      <div className="container">
        <h2 id="partners" className="sr-only">Partners</h2>
        <div className="card p-6">
          <p className="text-xs uppercase tracking-wider text-gray-500">Trusted by teams</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {logos.map((name) => (
              <div key={name} className="flex items-center justify-center opacity-70 hover:opacity-100 transition">
                <img src={`/logos/${name}.svg`} alt={`${name} logo`} className="h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
