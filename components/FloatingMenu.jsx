// components/FloatingMenu.jsx
"use client";

import { useState } from "react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 플로팅 버튼 */}
      <button
        className="_menu fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-md border border-gray-200 bg-white flex items-center justify-center"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        {/* 아이콘 */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* 오버레이 */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* 배경 */}
        <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />

        {/* 패널 */}
        <aside
          className={`absolute right-0 top-0 h-full w-[84%] max-w-[360px] bg-white border-l shadow-xl
                      transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-label="Menu"
        >
          <div className="p-4 border-b flex items-center justify-between">
            <div className="font-semibold">Menu</div>
            <button
              aria-label="Close menu"
              className="rounded-lg p-2 border border-gray-200"
              onClick={() => setOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* 메뉴 항목 — 사용자 요청대로 Personal만. (하위 항목은 넣지 않음) */}
          <nav className="p-4">
            <ul className="space-y-2 text-[15px]">
              <li>
                <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-50">
                  Personal
                </a>
              </li>
            </ul>

            {/* 로그인/가입(모바일 접근 경로) */}
            <div className="mt-4 flex gap-2">
              <a href="#" className="btn btn-secondary flex-1">Log in</a>
              <a href="#" className="btn btn-primary flex-1">Sign up</a>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
