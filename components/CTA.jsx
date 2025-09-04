import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="card p-8 md:p-12 text-center bg-gradient-to-br from-brand-50 to-white relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to try Fineroo?</h2>
          <p className="text-gray-600 mt-2">Create an account in minutes. Placeholder brand, real layout.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#" className="btn btn-primary relative overflow-hidden">
              <span className="relative z-10">Sign up</span>
              <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-white/40 skew-x-12"
                    style={{ animation: "shine 2.2s linear infinite" }} />
            </Link>
            <Link href="#support" className="btn btn-secondary">Contact sales</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
