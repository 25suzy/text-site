// components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      {/* Support cards */}
      <section id="support" className="section">
        <div className="container grid md:grid-cols-3 gap-8">
          <div className="card p-6">
            <div className="font-semibold">Help center</div>
            <p className="text-sm text-gray-600 mt-2">Docs and FAQs.</p>
          </div>
          <div className="card p-6">
            <div className="font-semibold">Contact us</div>
            <p className="text-sm text-gray-600 mt-2">Email and chat.</p>
          </div>
          <div className="card p-6">
            <div className="font-semibold">Status</div>
            <p className="text-sm text-gray-600 mt-2">All systems operational.</p>
          </div>
        </div>
      </section>

      {/* Link columns */}
      <div className="container grid md:grid-cols-4 gap-8 py-10 text-sm">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <img src="/brand/logo.svg" alt="" className="h-6 w-6" />
            Fineroo
          </div>
          <p className="mt-3 text-gray-600">
            Demo site. Placeholder brand & assets.
          </p>
        </div>

        <div>
          <h3 className="font-medium">Discover</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#unify" className="hover:text-gray-900">Unify</a></li>
            <li><a href="#flows" className="hover:text-gray-900">Flows</a></li>
            <li><a href="#slider" className="hover:text-gray-900">Showcase</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium">Company</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#allinone" className="hover:text-gray-900">About</a></li>
            <li><a href="#support" className="hover:text-gray-900">Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium">Legal</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Terms</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom banners (placeholders) */}
      <div className="border-t border-gray-100">
        <div className="container py-6 grid md:grid-cols-2 gap-4">
          <div className="card h-16" />
          <div className="card h-16" />
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">
        © {year} Fineroo · For demonstration only.
      </div>
    </footer>
  );
}
