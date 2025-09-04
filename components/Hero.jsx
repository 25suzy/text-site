import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="container py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight tracking-tight">
              One app for all your payments.
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Placeholder brand & assets. Layout closely follows a modern fintech landing for practice purposes.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="#" className="btn btn-primary">Get started</Link>
              <Link href="#products" className="btn btn-secondary">Explore</Link>
            </div>
            <p className="mt-3 text-xs text-gray-500">* Demo only. No real services.</p>
          </div>
          <div className="relative">
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
          </div>
        </div>
      </div>
    </section>
  );
}
