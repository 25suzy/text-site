import Reveal from "@/components/Reveal";

export default function Features() {
  const items = [
    { title: "Add funds", desc: "Top up in seconds with low fees and clear limits.", icon: "/icons/wallet.svg" },
    { title: "Send money", desc: "Instant transfers with transparent statuses.", icon: "/icons/briefcase.svg" },
    { title: "Exchange", desc: "Swap across currencies with ease.", icon: "/icons/globe.svg" },
    { title: "Security", desc: "2FA, device checks, encryption.", icon: "/icons/shield.svg" },
  ];
  return (
    <section id="products" className="py-16 sm:py-20">
      <div className="container">
        <Reveal><h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Personal</h2></Reveal>
        <Reveal delay={60}><p className="text-gray-600 mt-2 max-w-2xl">Key flows represented as simple cards.</p></Reveal>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={100 + i * 60}>
              <div className="card p-5 transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="h-10 w-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <img src={it.icon} alt="" className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
