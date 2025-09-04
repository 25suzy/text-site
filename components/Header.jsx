"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container flex h-16 items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/brand/logo.svg" alt="Fineroo logo" width={28} height={28} priority />
          <span className="font-semibold tracking-tight">Fineroo</span>
        </Link>
        <nav className="ml-auto hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-gray-700">
            <li><Link href="#products" className="hover:text-gray-900">Personal</Link></li>
            <li><Link href="#business" className="hover:text-gray-900">Business</Link></li>
            <li><Link href="#about" className="hover:text-gray-900">Company</Link></li>
            <li><Link href="#support" className="hover:text-gray-900">Support</Link></li>
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
            <Link href="#products" className="block">Personal</Link>
            <Link href="#business" className="block">Business</Link>
            <Link href="#about" className="block">Company</Link>
            <Link href="#support" className="block">Support</Link>
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
