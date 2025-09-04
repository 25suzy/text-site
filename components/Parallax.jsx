"use client";
import { useRef } from "react";

export default function Parallax({ children, strength = 10, className = "" }) {
  const innerRef = useRef(null);

  function onMove(e) {
    const el = innerRef.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  }
  function reset() {
    const el = innerRef.current; if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  }

  return (
    <div onMouseMove={onMove} onMouseLeave={reset} className={className} style={{ perspective: 1000 }}>
      <div ref={innerRef} className="transition-transform duration-300 will-change-transform">
        {children}
      </div>
    </div>
  );
}
