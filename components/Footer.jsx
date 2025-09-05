export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <img src="/brand/logo.svg" alt="" className="h-6 w-6" />
            Fineroo
          </div>
          <p className="mt-3 text-gray-600">Demo site. Placeholder brand & assets for educational purposes.</p>
        </div>
        <div>
          <h3 className="font-medium">Discover</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#products" className="hover:text-gray-900">Features</a></li>
            <li><a href="#business" className="hover:text-gray-900">Business</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium">Company</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#about" className="hover:text-gray-900">About</a></li>
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
      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Fineroo. For demonstration only.
      </div>
    </footer>
  );
}


<div className="container py-6 grid md:grid-cols-2 gap-4">
  <div className="card h-16" /> {/* 64px */}
  <div className="card h-16" />
</div>
