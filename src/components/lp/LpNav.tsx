"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LineIcon from "@/components/LineIcon";

const LINE_URL = "https://lin.ee/woJeT8Q";

export default function LpNav({
  brand,
  brandAccent = ".",
  accentColor,
}: {
  brand: string;
  brandAccent?: string;
  accentColor?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? Math.min(window.scrollY / docH, 1) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="lp-progress-bar"
        style={{ transform: `scaleX(${progress})` }}
      />

      {/* Mobile fullscreen menu */}
      <div className={`lp-mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>ホーム</Link>
        <Link href="/services" onClick={() => setMenuOpen(false)}>サービス一覧</Link>
        <Link href="/#contact" onClick={() => setMenuOpen(false)}>お問い合わせ</Link>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center gap-3 bg-[#06C755] !text-white text-[18px] px-8 py-4 rounded-full shadow-md mt-4"
        >
          <LineIcon className="w-6 h-6" />
          LINE登録する
        </a>
      </div>

      {/* Sticky nav */}
      <nav className={`lp-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 relative z-[101]">
            <span
              className="font-[Montserrat] font-bold text-[20px] tracking-tight text-lp"
            >
              {brand}
              <span style={{ color: accentColor || "#4a9bd9" }}>{brandAccent}</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium">
            <Link href="/" className={`transition-colors ${scrolled ? "text-text-body hover:text-lp" : "text-text-body/70 hover:text-lp"}`}>ホーム</Link>
            <Link href="/services" className={`transition-colors ${scrolled ? "text-text-body hover:text-lp" : "text-text-body/70 hover:text-lp"}`}>サービス一覧</Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-2 text-[12px] font-bold px-5 py-2.5 rounded-full transition-all ${
                scrolled
                  ? "bg-[#06C755] text-white shadow-sm hover:shadow-md"
                  : "bg-transparent border border-lp/20 text-lp hover:bg-lp hover:text-white"
              }`}
            >
              <LineIcon className="w-4 h-4" />
              LINE登録
            </a>

            {/* Mobile hamburger */}
            <button
              className={`lp-hamburger md:hidden ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
