// components/Header.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div
        className={`container flex items-center gap-4 transition-all ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image src="/brand/logo.svg" alt="Fineroo" width={24} height={24} priority />
          <span className="font-semibold tracking-tight">Fineroo</span>
        </Link>

        {/* 오른쪽 액션만 노출 */}
        <div className="ml-auto hidden md:flex items-center gap-3">
          <span className="rounded-full border border-gray-300 px-3 py-1.5 text-sm">en</span>
          <a href="#" className="btn btn-secondary px-5 py-2">Log in</a>
          <a href="#" className="btn btn-primary px-5 py-2.5">Sign up</a>
        </div>

        {/* 모바일에서는 우측 버튼만(로그인/가입은 플로팅 메뉴에서 접근) */}
        <div className="ml-auto md:hidden" />
      </div>
    </header>
  );
}
