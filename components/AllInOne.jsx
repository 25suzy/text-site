import Reveal from "./Reveal";
import Link from "next/link";

export default function AllInOne(){
  return (
    <section id="allinone" className="section">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <h2 className="h2 font-semibold">All your finances in one app</h2>
            <p className="mt-3 text-gray-600 max-w-xl">Cards, balances, payouts and more in a single place.</p>
            <div className="mt-6 flex gap-3">
              <Link href="#" className="btn btn-primary px-6 py-3">Open account</Link>
              <Link href="#convert" className="btn btn-secondary px-6 py-3">Try converter</Link>
            </div>
          </div>
        </Reveal>
        <div className="card h-[320px] md:h-[360px]" />
      </div>
    </section>
  );
}
