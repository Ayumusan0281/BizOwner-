"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({
  active,
}: {
  active?: "home" | "about" | "service" | "contact";
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[200] bg-black/82 backdrop-blur-[20px] backdrop-saturate-[180%]">
        <div className="max-w-[1100px] mx-auto pl-2 pr-4 md:px-6 flex items-center justify-between h-[56px]">
          <Link href="/" className="flex items-center gap-2" aria-label="株式会社DeraBiz">
            <Image src="/brand/derabiz-logo.png" alt="" width={36} height={36} className="w-9 h-9 rounded-md" priority />
            <span className="font-[Noto_Serif_JP] font-medium text-white text-[16px] md:text-[20px] tracking-[0.08em] md:tracking-[0.12em] whitespace-nowrap">
              株式会社DeraBiz
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/#home"
              className="text-white/82 text-[13px] px-3 leading-[56px] tracking-[-0.08px] transition-colors hover:text-white"
            >
              ホーム
            </Link>
            <Link
              href="/#about"
              className="text-white/82 text-[13px] px-3 leading-[56px] tracking-[-0.08px] transition-colors hover:text-white"
            >
              私たちについて
            </Link>
            <Link
              href="/services"
              className={`text-[13px] px-3 leading-[56px] tracking-[-0.08px] transition-colors hover:text-white ${active === "service" ? "text-white" : "text-white/82"}`}
            >
              サービス
            </Link>
            <Link
              href="/#contact"
              className="text-white/82 text-[13px] px-3 leading-[56px] tracking-[-0.08px] transition-colors hover:text-white"
            >
              お問い合わせ
            </Link>
          </nav>
          <button
            className="md:hidden p-2 text-white/80"
            aria-label="メニュー"
            onClick={() => setMobileOpen(true)}
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 z-[1000] bg-black/96 backdrop-blur-[30px] backdrop-saturate-[180%] flex flex-col items-center justify-center transition-all duration-400 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <button
          className="absolute top-5 right-5 text-white/40 p-2 hover:text-white transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col items-center text-center">
          {[
            { href: "/#home", en: "HOME", ja: "ホーム" },
            { href: "/#about", en: "ABOUT", ja: "私たちについて" },
            { href: "/services", en: "SERVICE", ja: "サービス" },
            { href: "/#contact", en: "CONTACT", ja: "お問い合わせ" },
          ].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-4 font-[Josefin_Sans] text-[22px] font-semibold tracking-[0.12em] text-white/85 hover:text-white transition-colors"
              style={{ transitionDelay: `${0.08 + i * 0.06}s` }}
              onClick={() => setMobileOpen(false)}
            >
              {item.en}
              <span className="block font-[Noto_Sans_JP] text-[10px] font-normal tracking-[0.06em] text-white/30 mt-0.5">
                {item.ja}
              </span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-[30px] h-[1px] bg-white/15"></div>
          <p className="text-white/20 text-[10px] font-[Josefin_Sans] tracking-[0.2em]">
            &copy; 2026
          </p>
        </div>
      </div>
    </>
  );
}
