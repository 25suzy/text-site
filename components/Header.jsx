// components/Header.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#unify", label: "Unify" },
  { href: "#flows", label: "Flows" },
  { href: "#slider", label: "Showcase" },
  { href: "#allinone", label: "All-in-one" },
  { href: "#contactless", label: "Contactless" },
  { href: "#convert", label: "Convert" },
  { href: "#support", label: "Support" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass =
    "sticky top-0 z-40 backdrop-blur border-b transition-all " +
    (scrolled ? "bg-white/95 shadow-sm" : "bg-white/80");

  const rowClass =
    "container flex items-center gap-4 transition-all " +
    (scrolled ? "h-14" : "h-16");

  return (
    <header className={headerClass}>
      <div className={rowClass}>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/brand/logo.svg" alt="Fineroo" width={24} height={24} priority />
          <span className="font-semibold tracking-tight">Fineroo</span>
        </Link>

        <nav className="ml-8 hidden lg:block">
          <ul className="flex items-center gap-6 text-sm text-gray-700">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-gray-900">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden md:flex items-center gap-3">
          <select aria-label="Language" className="rounded-full border border-gray-300 px-3 py-1.5 text-sm">
            <option>EN</option>
            <option>KR</option>
            <option>TR</option>
            <option>DE</option>
          </select>
          <Link href="#" className="btn btn-secondary px-5 py-2">Log in</Link>
          <Link href="#" className="btn btn-primary px-5 py-2.5">Sign up</Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="ml-2 md:hidden rounded-lg p-2 border border-gray-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container py-4 space-y-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="block">{n.label}</a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <select className="rounded-lg border px-3 py-2 text-sm flex-1">
                <option>EN</option>
                <option>KR</option>
                <option>TR</option>
                <option>DE</option>
              </select>
              <Link href="#" className="btn btn-secondary flex-1">Log in</Link>
              <Link href="#" className="btn btn-primary flex-1">Sign up</Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
