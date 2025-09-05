"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 backdrop-blur border-b transition-all ${
  scrolled ? "bg-white/95 shadow-sm" : "bg-white/80"
}`}>
  <div className={`container flex items-center gap-4 transition-all ${scrolled ? "h-14" : "h-16"}`}>
    {/* ...나머지 동일 */}

      <div className={`container flex items-center gap-4 transition-all ${scrolled ? "h-14" : "h-16"}`}>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/brand/logo.svg" alt="Fineroo logo" width={24} height={24} priority />
          <span className="font-semibold tracking-tight">Fineroo</span>
        </Link>

        <nav className="ml-auto hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-gray-700">
            <li><a href="#products" className="hover:text-gray-900">Personal</a></li>
            <li><a href="#business" className="hover:text-gray-900">Business</a></li>
            <li><a href="#about" className="hover:text-gray-900">Company</a></li>
            <li><a href="#support" className="hover:text-gray-900">Support</a></li>
          </ul>
        </nav>

        <div className="ml-2 hidden md:flex items-center gap-2">
          <Link href="#" className="btn btn-secondary">Log in</Link>
          <Link href="#" className="btn btn-primary">Sign up</Link>
        </div>

        <button
          className="ml-auto md:hidden rounded-lg p-2 border border-gray-200"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container py-4 space-y-3">
            <a href="#products" className="block">Personal</a>
            <a href="#business" className="block">Business</a>
            <a href="#about" className="block">Company</a>
            <a href="#support" className="block">Support</a>
            <div className="pt-2 flex items-center gap-2">
              <Link href="#" className="btn btn-secondary flex-1">Log in</Link>
              <Link href="#" className="btn btn-primary flex-1">Sign up</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
