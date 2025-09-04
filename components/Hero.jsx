import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import Parallax from "./Parallax";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="container py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div>
              <h1 className="font-semibold leading-tight tracking-tight" style={{ fontSize: "var(--h1)" }}>
                One app for all your payments.
              </h1>
              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                Placeholder brand & assets. Layout closely follows a modern fintech landing for practice purposes.
              </p>
              <div className="mt-7 flex gap-3">
                <Link href="#" className="btn btn-primary px-6 py-3">Get started</Link>
                <Link href="#products" className="btn btn-secondary px-6 py-3">Explore</Link>
              </div>
              <p className="mt-3 text-xs text-gray-500">* Demo only. No real services.</p>
            </div>
          </Reveal>

          <Parallax strength={12}>
            <div className="card p-2 md:p-4">
              <Image
                src="/illustrations/app-mock.svg"
                alt="App mockup placeholder"
                width={800}
                height={520}
                className="rounded-xl border border-gray-200"
                priority
              />
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
