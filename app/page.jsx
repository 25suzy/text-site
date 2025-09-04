import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";


export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Partners />
        <section id="business" className="container py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Business</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            B2B payouts, custom limits, reporting—represented as simple blocks.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-5">
            <div className="card p-6">
              <h3 className="font-semibold">Mass payouts</h3>
              <p className="text-sm text-gray-600 mt-2">Batch disbursements with clear statuses and reconciliation.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Custom limits</h3>
              <p className="text-sm text-gray-600 mt-2">Set per-user and per-transaction rules. Compliance-friendly.</p>
            </div>
          </div>
        </section>
        <section id="about" className="container py-12">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">Short copy about trust, reliability, and service coverage.</p>
        </section>
        <section id="support" className="container py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Support</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">Contact options and help center pointers (placeholder).</p>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
