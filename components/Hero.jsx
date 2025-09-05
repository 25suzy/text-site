import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

function StoreBadges(){
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a href="#" aria-label="App Store"  className="rounded-xl border px-3 py-2 bg-black text-white text-xs"> App Store</a>
      <a href="#" aria-label="Google Play" className="rounded-xl border px-3 py-2 bg-black text-white text-xs">▶ Google Play</a>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="container section-hero">
        <div className="grid md:grid-cols-2 gap-12 items-center">{/* gap-12 = 48px */}
          <Reveal>
            <div>
              <h1 className="h1 font-semibold tracking-tight">One app for all your payments.</h1>
              <p className="mt-5 text-[18px] leading-7 text-gray-600 max-w-xl">
                Placeholder brand & assets. Layout closely follows a modern fintech landing for practice purposes.
              </p>
              <div className="mt-7 flex gap-3">{/* 버튼 간격 12px */}
                <Link href="#unify" className="btn btn-primary px-6 py-3">Get started</Link>
                <Link href="#support" className="btn btn-secondary px-6 py-3">Contact</Link>
              </div>
              <StoreBadges />
              <p className="mt-3 text-xs text-gray-500">* Demo only. No real services.</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card p-3">
              <Image src="/illustrations/app-mock.svg" alt="" width={800} height={520}
                     className="rounded-xl border border-gray-200" priority />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
