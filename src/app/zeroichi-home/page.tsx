import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeSlide from "@/components/manabiya/FadeSlide";
import StaggerChildren, { StaggerItem } from "@/components/manabiya/StaggerChildren";
import CountUp from "@/components/manabiya/CountUp";
import Marquee from "@/components/manabiya/Marquee";
import ManabiyaLogo from "@/components/manabiya/ManabiyaLogo";
import TiltCard from "@/components/manabiya/TiltCard";
import LineIcon from "@/components/LineIcon";

export const metadata: Metadata = {
  title: "Zeroichi Home｜学ぶ、遊ぶ、稼ぐ。全部ここに。",
  description:
    "副業×起業×エンタメ。コスパ最強の福利厚生コミュニティ「Zeroichi Home」。動画学習・サークル活動・イベント・特典が全部込み。",
};

/* メインCV：公式LINE追加。全CTAの遷移先 */
const LINE_URL = "https://lin.ee/woJeT8Q";

/* ─── LINE CTA Button (TGU-style) ─── */
function LineCta({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`mn-cta-pulse inline-flex items-center gap-3 bg-line hover:bg-[#05b34c] text-white font-bold rounded-full shadow-[0_8px_24px_-6px_rgba(6,199,85,0.35)] transition-all hover:scale-105 hover:-translate-y-0.5 ${
        large ? "text-base md:text-xl px-8 md:px-12 py-5 md:py-6" : "text-base md:text-lg px-8 md:px-10 py-4 md:py-5"
      }`}
    >
      <LineIcon className={large ? "w-8 h-8" : "w-7 h-7"} />
      {children}
    </a>
  );
}

/* ─── Section Label (TGU-style with decorative line) ─── */
function SectionLabel({ en, className = "" }: { en: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 mb-3 ${className}`}>
      <span className="w-8 h-[3px] bg-current rounded-full" />
      <p className="font-[var(--font-montserrat)] text-[13px] font-bold tracking-[0.2em]">
        {en}
      </p>
    </div>
  );
}

/* ─── Decorative Diagonal Stripes ─── */
function DecoStripes({ className = "", color = "text-tgu-pink/20" }: { className?: string; color?: string }) {
  return <div className={`tgu-stripes ${color} pointer-events-none absolute ${className}`} />;
}

/* ─── Decorative Dot Pattern ─── */
function DecoDots({ className = "", color = "text-tgu-pink/15" }: { className?: string; color?: string }) {
  return <div className={`tgu-dots ${color} pointer-events-none absolute ${className}`} />;
}

/* ─── Multi-color Stripe Bar ─── */
function RainbowStripe({ className = "" }: { className?: string }) {
  return <div className={`tgu-rainbow h-[6px] md:h-2 w-full ${className}`} />;
}

/* ─── Caret Down Icon ─── */
function CaretDown() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
    </svg>
  );
}

/* ─── SVG nav icons (TGU-style line art) ─── */
const NavIcon = {
  intro: (
    <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14 L16 5 L28 14 L28 27 L4 27 Z" />
      <path d="M13 27 L13 18 L19 18 L19 27" />
      <circle cx="22" cy="10" r="1.5" fill="currentColor" />
    </svg>
  ),
  content: (
    <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="7" width="22" height="18" rx="2" />
      <path d="M14 13 L21 16 L14 19 Z" fill="currentColor" />
    </svg>
  ),
  event: (
    <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="8" width="22" height="18" rx="2" />
      <path d="M5 13 L27 13" />
      <path d="M11 5 L11 10" />
      <path d="M21 5 L21 10" />
      <circle cx="12" cy="19" r="1.5" fill="currentColor" />
      <circle cx="20" cy="19" r="1.5" fill="currentColor" />
    </svg>
  ),
  price: (
    <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="11" />
      <path d="M11 11 L16 18 L21 11" />
      <path d="M11 18 L21 18" />
      <path d="M11 22 L21 22" />
      <path d="M16 18 L16 25" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 10 C6 8 7 7 9 7 L23 7 C25 7 26 8 26 10 L26 22 C26 24 25 25 23 25 L9 25 C7 25 6 24 6 22 Z" />
      <path d="M6 10 L16 17 L26 10" />
    </svg>
  ),
};

export default function ManabiyaPage() {
  return (
    <div className="font-sans text-[#2D2D2D] bg-white antialiased overflow-x-hidden">

      {/* ================================================================
          HEADER — TGU-style fixed top navigation
          ================================================================ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1400px] mx-auto pl-3 md:pl-6 pr-0 h-16 md:h-[76px] flex items-center justify-between">
          {/* Left: Logo + site name */}
          <Link href="#top" className="flex items-center gap-2.5 md:gap-4 flex-shrink-0" aria-label="ファーストビューへ戻る">
            <ManabiyaLogo size={56} animate={false} />
            <div className="leading-tight text-left">
              <p className="hidden sm:block text-[8px] md:text-[9px] leading-none text-tgu-pink font-bold tracking-[0.2em]">
                BUSINESS LEARNING COMMUNITY
              </p>
              <p className="text-[15px] md:text-[19px] font-black tracking-wider text-[#2D2D2D] mt-[2px] md:mt-[3px] leading-none">
                Zeroichi Home
              </p>
            </div>
          </Link>

          {/* Center: LP section navigation (desktop only) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 ml-auto mr-5">
            {[
              { icon: NavIcon.intro, label: "紹介", href: "#intro", color: "text-tgu-pink" },
              { icon: NavIcon.content, label: "価値", href: "#values", color: "text-tgu-cyan" },
              { icon: NavIcon.event, label: "イベント", href: "#events", color: "text-tgu-coral" },
              { icon: NavIcon.intro, label: "サークル", href: "#circles", color: "text-tgu-purple" },
              { icon: NavIcon.price, label: "料金", href: "#pricing", color: "text-tgu-green" },
              { icon: NavIcon.contact, label: "FAQ", href: "#faq", color: "text-tgu-sky" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="tgu-nav-link flex flex-col items-center gap-1"
              >
                <span className={item.color}>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right: LINE登録 */}
          <div className="flex items-stretch h-full">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="公式LINEで無料登録"
              className="manabiya-header-line relative flex flex-col items-center justify-center text-white font-black transition group"
            >
              <svg
                viewBox="0 0 132 106"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <linearGradient id="ribbonGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFB000" />
                    <stop offset="55%" stopColor="#FF7A00" />
                    <stop offset="100%" stopColor="#F2552C" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,0 L132,0 L132,86 L122,80 L114,96 L104,80 L94,94 L84,80 L74,96 L64,80 L54,94 L44,80 L34,96 L24,80 L14,94 L6,80 L0,86 Z"
                  fill="url(#ribbonGrad)"
                />
                <path
                  d="M10,8 L122,8 L122,73 L112,68 L104,82 L96,68 L88,80 L80,68 L72,82 L64,68 L56,80 L48,68 L40,82 L32,68 L24,80 L16,68 L10,73 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.38)"
                  strokeWidth="2"
                />
              </svg>
              <div className="relative z-10 flex flex-col items-center">
                <span className="manabiya-header-line-badge">無料</span>
                <LineIcon className="w-5 h-5 md:w-7 md:h-7 mb-0.5" />
                <span className="text-[11px] md:text-[14px] tracking-wider leading-none">LINE登録</span>
              </div>
            </a>

            <details className="manabiya-mobile-menu lg:hidden">
              <summary aria-label="メニューを開く">
                <span />
                <span />
                <span />
              </summary>
              <div className="manabiya-mobile-panel">
                <div className="manabiya-mobile-panel-head">
                  <ManabiyaLogo size={34} animate={false} />
                  <div className="leading-tight">
                    <p className="manabiya-mobile-panel-en">BUSINESS LEARNING COMMUNITY</p>
                    <p className="manabiya-mobile-panel-name">Zeroichi Home</p>
                  </div>
                </div>
                <nav>
                  {[
                    { label: "紹介", href: "#intro", icon: NavIcon.intro },
                    { label: "価値", href: "#values", icon: NavIcon.content },
                    { label: "イベント", href: "#events", icon: NavIcon.event },
                    { label: "サークル", href: "#circles", icon: NavIcon.intro },
                    { label: "料金", href: "#pricing", icon: NavIcon.price },
                    { label: "FAQ", href: "#faq", icon: NavIcon.contact },
                  ].map((item) => (
                    <a key={item.href} href={item.href}>
                      <span className="mm-icon">{item.icon}</span>
                      <span className="mm-label">{item.label}</span>
                    </a>
                  ))}
                </nav>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="manabiya-mobile-cta">
                  <LineIcon className="w-6 h-6" />
                  公式LINEで無料登録
                </a>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* ================================================================
          RIGHT SIDEBAR — Vertical tabs (OPEN CAMPUS style)
          ================================================================ */}
      <aside className="tgu-right-sidebar hidden md:flex">
        <a href="#events" className="bg-tgu-pink hover:bg-[#D63878]">
          イベント情報
        </a>
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="bg-[#F48FB1] hover:bg-[#EC88A5]">
          LINE登録
        </a>
      </aside>

      {/* ================================================================
          1. HERO — University brochure FV (single-viewport hand-drawn campus)
          ================================================================ */}
      <section id="top" className="relative manabiya-campus-hero overflow-hidden scroll-mt-24">
        <div aria-hidden className="campus-rays absolute inset-0" />
        <div aria-hidden className="uni-halftone absolute inset-0 opacity-70" />
        <div aria-hidden className="campus-spotlight campus-spotlight-left" />
        <div aria-hidden className="campus-spotlight campus-spotlight-right" />
        <div aria-hidden className="uni-candy-stripe h-[6px] md:h-2 w-full absolute top-16 md:top-[76px] left-0 right-0 z-20 opacity-95" />

        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-[92px] md:pt-[124px]">
          <div className="absolute top-[-18px] sm:top-[58px] md:top-[46px] left-4 sm:left-[calc(50%-236px)] md:left-[calc(50%-332px)] w-[58px] h-[58px] sm:w-[68px] sm:h-[68px] md:w-[84px] md:h-[84px] z-40 uni-cog-badge uni-rotate flex flex-col items-center justify-center leading-none text-[8px] sm:text-[9px] md:text-[10px]">
            <span className="block text-[10px] md:text-[12px] text-center">新メンバー<br />募集中</span>
          </div>

          <svg aria-hidden viewBox="0 0 60 60" className="absolute top-[128px] md:top-[168px] right-[8%] w-10 h-10 md:w-16 md:h-16 text-[#FFD93D] z-20 uni-bob-delay" fill="currentColor">
            <path d="M30 4 L36 24 L56 30 L36 36 L30 56 L24 36 L4 30 L24 24 Z" stroke="#2D1A2A" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <svg aria-hidden viewBox="0 0 60 60" className="absolute top-[42%] left-[7%] w-8 h-8 md:w-11 md:h-11 text-white z-20 uni-bob hidden sm:block" fill="currentColor">
            <path d="M30 8 L34 26 L52 30 L34 34 L30 52 L26 34 L8 30 L26 26 Z" stroke="#2D1A2A" strokeWidth="2" strokeLinejoin="round" />
          </svg>

          <div className="campus-copy-stack relative z-30 mx-auto text-center max-w-[860px]">
            <FadeSlide direction="up">
              <p className="campus-eyebrow">
                大人の部活動コミュニティ
              </p>
            </FadeSlide>
            <FadeSlide direction="up" delay={100}>
              <div className="campus-main-bubble">
                学ぶも、遊ぶも、全部まるごと
              </div>
            </FadeSlide>
            <FadeSlide direction="up" delay={180}>
              <h1 className="campus-brush-title" aria-label="稼ぐ！">
                <span>稼</span>
                <span>ぐ</span>
                <span className="campus-exclamation">!</span>
              </h1>
            </FadeSlide>
          </div>

          <FadeSlide direction="left" className="campus-person campus-person-left">
            <div className="campus-art-card campus-art-card-left uni-bob">
              <Image
                src="/manabiya/boy.png"
                alt="Zeroichi Homeで遊ぶ男性メンバー"
                width={1024}
                height={1536}
                className="campus-person-img"
                priority
              />
            </div>
          </FadeSlide>
          <FadeSlide direction="right" className="campus-person campus-person-right">
            <div className="campus-art-card campus-art-card-right uni-bob-delay">
              <Image
                src="/manabiya/girl.png"
                alt="Zeroichi Homeで学ぶ女性メンバー"
                width={1024}
                height={1536}
                className="campus-person-img"
                priority
              />
            </div>
          </FadeSlide>

          <FadeSlide direction="up" delay={360} className="absolute left-0 right-0 bottom-[-4px] z-20 pointer-events-none">
            <div className="campus-crowd-photo">
              <Image
                src="/manabiya/group.png"
                alt="Zeroichi Homeの仲間たち"
                width={1536}
                height={1024}
                className="campus-crowd-img"
                priority
              />
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* ─── CTA strip BELOW the FV (white band, similar to univ brochures) ─── */}
      <section className="relative z-30 bg-white border-y-[3px] border-[#2D1A2A]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <p className="uni-hand text-[14px] md:text-[18px] text-[#E84B8A] mb-1 inline-block" style={{ transform: "rotate(-1deg)" }}>
              ＼ 学ぶ・遊ぶ・稼ぐ、ぜんぶ ／
            </p>
            <h2 className="text-[18px] md:text-[26px] font-black text-[#2D1A2A] leading-tight">
              コスパ最強の、大人の部活動コミュニティ。
            </h2>
          </div>
          <div className="flex flex-col items-center gap-1.5 shrink-0">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tgu-cta-pulse inline-flex items-center gap-3 bg-line hover:bg-[#05b34c] text-white font-black text-[15px] md:text-[18px] px-7 md:px-10 py-4 md:py-5 rounded-full shadow-[0_8px_24px_-6px_rgba(6,199,85,0.45)] transition-all hover:scale-105 hover:-translate-y-0.5"
            >
              <LineIcon className="w-6 h-6 md:w-7 md:h-7" />
              LINEで無料登録（1分）
            </a>
            <p className="text-[11px] md:text-[12px] text-[#888]">※ 初月無料・解約いつでもOK</p>
          </div>
        </div>
      </section>

      {/* ================================================================
          HERO SUB — Stats strip
          ================================================================ */}
      <section className="relative py-10 md:py-14 bg-white overflow-hidden">
        <DecoStripes className="top-0 right-0 w-24 h-24 md:w-36 md:h-36 rotate-12" color="text-tgu-pink/10" />
        <DecoDots className="bottom-0 left-0 w-20 h-20 md:w-32 md:h-32" color="text-tgu-cyan/10" />

        <div className="max-w-[1100px] mx-auto px-4 md:px-6 relative z-10">
          <FadeSlide direction="up">
            <div className="flex flex-wrap justify-center gap-6 md:gap-14">
              {(
                [
                  { kind: "count" as const, num: 100, suffix: "", label: "案件カテゴリ", color: "bg-tgu-cyan" },
                  { kind: "text" as const, text: "年間100回以上", label: "イベント数", color: "bg-tgu-coral" },
                  { kind: "count" as const, num: 50000, suffix: "", label: "円/月〜", color: "bg-tgu-pink" },
                ] as const
              ).map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 ${s.color} rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg px-1`}
                  >
                    {s.kind === "text" ? (
                      <p className="font-[var(--font-montserrat)] font-black text-[10px] md:text-[12px] text-white leading-tight text-center">
                        {s.text}
                      </p>
                    ) : (
                      <p className="font-[var(--font-montserrat)] font-black text-[20px] md:text-[26px] text-white leading-none">
                        <CountUp end={s.num} />
                        {s.suffix}
                      </p>
                    )}
                  </div>
                  <p className="text-[11px] md:text-[13px] text-[#888] font-bold mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 flex flex-col items-center gap-2">
              <LineCta>LINEで無料登録する</LineCta>
              <p className="text-[13px] text-[#999]">※ 解約自由・しつこい勧誘なし</p>
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* ===== MULTI-COLOR STRIPE ===== */}
      <RainbowStripe />

      {/* ===== MARQUEE ===== */}
      <Marquee
        items={["副業スタート", "動画学習", "サークル活動", "イベント参加", "権利収入", "起業支援", "コーチング", "プレゼント企画", "フットサル", "バンド活動"]}
        className="py-4 bg-tgu-pink text-white"
        speed={25}
        dotColor="text-white"
      />

      {/* ================================================================
          2. MESSAGE — TGU-style: Coral blob background
          ================================================================ */}
      <section id="intro" className="relative scroll-mt-24 py-16 md:py-24 my-4 md:my-6">
        {/* Blob background */}
        <div className="absolute inset-0 mx-1 md:mx-3 bg-tgu-coral rounded-[40px] md:rounded-[80px]" />
        {/* Decorations */}
        <DecoStripes className="top-6 right-6 md:right-12 w-16 h-16 md:w-24 md:h-24" color="text-white/12" />
        <DecoDots className="bottom-6 left-6 md:left-12 w-20 h-20" color="text-white/10" />
        <div className="absolute top-8 left-8 w-8 h-8 bg-white/15 rounded-full tgu-bounce" />
        <div className="absolute bottom-10 right-10 w-6 h-6 bg-white/10 rounded-md rotate-45 tgu-bounce-2" />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-8 text-center text-white">
          <FadeSlide>
            <SectionLabel en="OUR MESSAGE" className="justify-center text-white/50" />
          </FadeSlide>
          <FadeSlide delay={150}>
            <h2 className="text-[clamp(22px,4.5vw,42px)] font-black leading-[1.5] mb-8">
              ビジネスだけでは、つまらない。
              <br />
              遊びだけでは、成長できない。
            </h2>
          </FadeSlide>
          <FadeSlide delay={300}>
            <div className="space-y-5 text-[15px] md:text-[17px] font-medium text-white/85 leading-[2]">
              <p>
                私たちは、ただスキルを学ぶだけの場所ではありません。
                好きなことで繋がり、共に笑い、共に挑戦し、そして結果を出す。
              </p>
              <p>
                「Zeroichi Home」は、独立・起業を目指す夢を持った人々が、
                熱狂をもって共に生きるための、全く新しいコミュニティプラットフォームです。
              </p>
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* ================================================================
          3. 4 VALUES — TGU-style: each value in a colored blob card
          ================================================================ */}
      <section id="values" className="scroll-mt-24 py-20 md:py-28 bg-white relative overflow-hidden">
        <DecoDots className="top-0 right-0 w-40 h-40" color="text-tgu-pink/6" />
        <DecoStripes className="bottom-0 left-0 w-28 h-28 -rotate-12" color="text-tgu-cyan/8" />

        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <FadeSlide className="text-center mb-14 md:mb-20">
            <SectionLabel en="4 VALUES" className="justify-center text-tgu-pink" />
            <h2 className="text-2xl md:text-[36px] font-black leading-[1.4]">Zeroichi Homeの4つの価値</h2>
          </FadeSlide>

          <div className="space-y-8 md:space-y-10">
            {[
              {
                num: "01",
                blobBg: "bg-tgu-cyan-light",
                iconBg: "bg-tgu-cyan",
                stripColor: "text-tgu-cyan/15",
                icon: "🎬",
                title: "独自ツール",
                sub: "Business tool",
                desc: "ビジネスに必要なものは全てここに。独自開発のツールや機能が、あなたの目標達成・自己管理・案件管理を強力にサポート。メンバー同士で使いこなして、夢の実現を加速しよう。",
                reverse: false,
              },
              {
                num: "02",
                blobBg: "bg-tgu-yellow-light",
                iconBg: "bg-tgu-yellow",
                stripColor: "text-tgu-yellow/20",
                icon: "🎉",
                title: "イベント・コンテスト",
                sub: "Events & Contests",
                desc: "豪華ゲストの講演会、パーティー、キャンプから、ビジコンやミスコンまで大熱狂。非日常の体験が、あなたの殻を破る。",
                reverse: true,
              },
              {
                num: "03",
                blobBg: "bg-tgu-green-light",
                iconBg: "bg-tgu-green",
                stripColor: "text-tgu-green/15",
                icon: "👥",
                title: "サークル活動",
                sub: "Circle Activities",
                desc: "スポーツ、趣味、エンタメ。ビジネス以外の顔で繋がり、一生の仲間を見つける大人の部活動。新しいサークルの立ち上げも大歓迎。",
                reverse: false,
              },
              {
                num: "04",
                blobBg: "bg-tgu-purple-light",
                iconBg: "bg-tgu-purple",
                stripColor: "text-tgu-purple/15",
                icon: "🎁",
                title: "豪華特典",
                sub: "Special Benefits",
                desc: "オンライン占い、個別コーチング・コンサル、プレゼント企画、提携サービスの会員特別割引など。Zeroichi Homeだけの限定福利厚生。",
                reverse: true,
              },
            ].map((item) => (
              <FadeSlide key={item.num} direction={item.reverse ? "right" : "left"}>
                <div className={`relative ${item.blobBg} rounded-[28px] md:rounded-[48px] p-6 md:p-10 overflow-hidden`}>
                  <DecoStripes
                    className={`${item.reverse ? "top-2 left-3" : "bottom-2 right-3"} w-14 h-14 md:w-20 md:h-20`}
                    color={item.stripColor}
                  />
                  <div className={`absolute ${item.reverse ? "bottom-4 right-4" : "top-4 left-4"} w-6 h-6 ${item.iconBg}/20 rounded-full`} />

                  <div className={`relative z-10 flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6 md:gap-10`}>
                    {/* Number + Icon */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <span className="font-[var(--font-montserrat)] font-black text-[48px] md:text-[64px] text-black/[0.06] leading-none">{item.num}</span>
                      <div className={`w-24 h-24 md:w-32 md:h-32 ${item.iconBg} rounded-[20px] md:rounded-[28px] flex items-center justify-center text-4xl md:text-5xl shadow-lg`}>
                        {item.icon}
                      </div>
                    </div>
                    {/* Text */}
                    <div className="text-center md:text-left flex-1">
                      <p className="font-[var(--font-montserrat)] text-[11px] font-bold tracking-[0.2em] text-[#bbb] mb-1">{item.sub}</p>
                      <h3 className="text-[22px] md:text-[28px] font-black mb-3">{item.title}</h3>
                      <p className="text-[14px] md:text-[16px] text-[#666] leading-[2] font-medium">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeSlide>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER 1 — TGU-style: Pink blob ===== */}
      <section className="relative py-14 md:py-16 my-2 md:my-4">
        <div className="absolute inset-0 mx-1 md:mx-3 bg-tgu-pink rounded-[40px] md:rounded-[80px]" />
        <DecoStripes className="top-4 left-6 w-14 h-14" color="text-white/10" />
        <DecoDots className="bottom-4 right-6 w-16 h-16" color="text-white/8" />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-8 text-center text-white">
          <FadeSlide>
            <p className="text-[13px] font-bold text-white/70 tracking-wider mb-3">＼ まずは気軽に ／</p>
            <h2 className="text-xl md:text-2xl font-black mb-6">全ての制限から解放され、好きな場所から、好きな仕事を。</h2>
            <LineCta>まずはLINE公式に登録</LineCta>
          </FadeSlide>
        </div>
      </section>

      {/* ================================================================
          4. LEARNING — TGU-style: dot pattern bg, clean layout
          ================================================================ */}
      <section id="learning" className="scroll-mt-24 py-20 md:py-28 bg-white relative overflow-hidden">
        <DecoDots className="top-0 left-0 w-full h-full" color="text-tgu-pink/[0.04]" />

        <div className="max-w-[1100px] mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <FadeSlide direction="left">
                <span className="inline-block px-5 py-2 bg-tgu-pink text-white text-[12px] font-bold rounded-full mb-5 shadow-sm">
                  LEARNING
                </span>
                <h2 className="text-[clamp(24px,4vw,40px)] font-black mb-5 leading-[1.3]">
                  本気の「学び」が、
                  <br />
                  ここにある。
                </h2>
                <p className="text-[15px] md:text-[17px] mb-8 font-medium leading-[2] text-[#666]">
                  副業初心者向けのロードマップから、各分野のプロによる実践的ビジネスセミナーまで。
                  いつでも、どこでも、最新のノウハウをオンデマンドでインプット。
                </p>
                <ul className="space-y-5">
                  {[
                    { title: "起業スタートアップ講座", desc: "ビジネスを始めるまでの流れを、ステップごとにわかりやすく解説します。" },
                    { title: "ビジネスセミナー参加し放題", desc: "マーケティング、営業、SNS運用など、超実践的な講義。" },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="w-7 h-7 shrink-0 mt-0.5 bg-tgu-pink rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </span>
                      <div>
                        <h4 className="font-bold text-[16px] md:text-[17px] mb-1">{item.title}</h4>
                        <p className="text-[14px] text-[#888]">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeSlide>
            </div>
            <FadeSlide direction="right" className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -top-5 -left-5 w-full h-full bg-tgu-cyan/20 rounded-[28px] -z-10" />
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-tgu-yellow/20 rounded-[28px] -z-10" />
                <div className="rounded-[28px] overflow-hidden shadow-xl border-4 border-white">
                  <Image src="/lp/manabiya-lecture.png" alt="ビジネス講座" width={1536} height={1024} className="w-full h-[260px] md:h-[340px] object-cover" />
                </div>
              </div>
            </FadeSlide>
          </div>
        </div>
      </section>

      {/* ================================================================
          5. EVENTS — TGU-style: card grid with colored tags
          ================================================================ */}
      <section id="events" className="relative scroll-mt-24 py-20 md:py-28 my-4 md:my-6">
        {/* Green blob background */}
        <div className="absolute inset-0 mx-1 md:mx-3 bg-tgu-green rounded-[40px] md:rounded-[80px]" />
        <DecoStripes className="top-6 left-6 w-20 h-20" color="text-white/10" />
        <DecoDots className="bottom-8 right-8 w-24 h-24" color="text-white/8" />
        <div className="absolute top-12 right-12 w-10 h-10 bg-white/15 rounded-full tgu-bounce" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-4 md:px-6">
          <FadeSlide className="text-center mb-12 md:mb-16">
            <SectionLabel en="EVENTS & CONTESTS" className="justify-center text-white/60" />
            <h2 className="text-[clamp(22px,4vw,40px)] font-black mb-4 leading-[1.4] text-white">
              人生を変える、熱狂の渦へ。
            </h2>
            <p className="text-[15px] md:text-[17px] text-white/75 font-medium">
              学ぶだけじゃない。非日常の体験が、あなたの殻を破る。
            </p>
          </FadeSlide>

          <StaggerChildren staggerMs={200} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                img: "/lp/manabiya-seminar.png",
                tag: "インプット",
                tagBg: "bg-tgu-yellow text-[#2D2D2D]",
                title: "トップランナー講演会",
                desc: "各業界で突き抜けた結果を出す起業家・インフルエンサーを招いた完全クローズドな講演会。",
              },
              {
                img: "/lp/manabiya-party.png",
                tag: "交流",
                tagBg: "bg-tgu-pink text-white",
                title: "季節の超大規模パーティー",
                desc: "クラブ貸切・キャンプ・合コンなど、大人の文化祭を毎月開催。",
              },
              {
                img: "/lp/manabiya-bizcon.png",
                tag: "挑戦",
                tagBg: "bg-tgu-cyan text-white",
                title: "ビジコン & ミスコン",
                desc: "ビジネスコンテストから、エンタメ性の高いミスコン・のど自慢大会まで。",
              },
            ].map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <TiltCard intensity={3} className="h-full">
                  <div className="tgu-card bg-white overflow-hidden shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)] group h-full flex flex-col">
                    <div className="overflow-hidden rounded-t-[22px]">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={800}
                        height={600}
                        className="w-full h-[200px] md:h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 md:p-6 flex flex-col flex-1">
                      <span className={`text-[11px] font-bold ${item.tagBg} px-4 py-1.5 rounded-full inline-block mb-3 self-start`}>
                        {item.tag}
                      </span>
                      <h3 className="text-[17px] md:text-[18px] font-bold mb-2 group-hover:text-tgu-pink transition-colors">{item.title}</h3>
                      <p className="text-[13px] md:text-[14px] text-[#888] leading-[1.8]">{item.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== MARQUEE 2 ===== */}
      <Marquee
        items={["⚽ フットサル", "🎤 アイドル", "💪 筋トレ", "📹 YouTuber", "🎸 バンド", "📚 読書会", "🧖 サウナ", "🎭 演劇", "🎮 ゲーム", "🍻 飲み会"]}
        className="py-4 bg-tgu-navy text-white/70"
        speed={20}
        dotColor="text-tgu-cyan"
      />

      {/* ================================================================
          6. CIRCLES — TGU-style: purple blob background
          ================================================================ */}
      <section id="circles" className="relative scroll-mt-24 py-20 md:py-28 my-4 md:my-6">
        {/* Purple blob background */}
        <div className="absolute inset-0 mx-1 md:mx-3 bg-tgu-purple rounded-[40px] md:rounded-[80px]" />
        <DecoStripes className="bottom-6 left-8 w-20 h-20" color="text-white/10" />
        <DecoDots className="top-8 right-8 w-24 h-24" color="text-white/8" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-4 md:px-6">
          <FadeSlide direction="up" className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
            <SectionLabel en="CLUB ACTIVITIES" className="justify-center text-white/50" />
            <h2 className="text-[26px] lg:text-[32px] font-black mb-5 leading-tight text-white">
              本気で遊ぶ大人の
              <br />
              「サークル活動」
            </h2>
            <p className="text-white/70 text-[15px] font-medium leading-[1.9]">
              ビジネスの枠を超えて、純粋な「好き」で繋がるからこそ、一生の仲間ができる。
            </p>
          </FadeSlide>

          <div className="w-full">
              <FadeSlide direction="right">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-tgu-green" />
                  <h3 className="text-[16px] font-bold text-white">スポーツ・趣味</h3>
                </div>
              </FadeSlide>
              <StaggerChildren staggerMs={50} className="flex flex-wrap gap-2.5 mb-10">
                {["⚽ フットサル", "⚾ 草野球", "💪 ジム・筋トレ", "🔥 キャンプ・サウナ", "🎮 ゲーム", "📚 読書会", "🏃 ランニング", "🍻 飲み会", "🍽️ グルメ"].map((name) => (
                  <StaggerItem key={name}>
                    <div className="bg-white/15 backdrop-blur-sm px-4 md:px-5 py-2.5 md:py-3 rounded-full font-bold text-[13px] md:text-[14px] text-white cursor-pointer border border-white/20 hover:bg-tgu-green/40 hover:border-tgu-green/60 transition-all duration-300 hover:-translate-y-1">
                      {name}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <FadeSlide direction="right">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-tgu-pink" />
                  <h3 className="text-[16px] font-bold text-white">エンタメ・クリエイティブ</h3>
                </div>
              </FadeSlide>
              <StaggerChildren staggerMs={50} className="flex flex-wrap gap-2.5">
                {["🎤 アイドル", "🎸 バンド・音楽", "📹 YouTuber", "🎭 演劇・俳優", "📸 撮影会モデル", "🎨 芸術家", "😂 芸人", "📱 ライバー", "🎬 動画編集"].map((name) => (
                  <StaggerItem key={name}>
                    <div className="bg-white/15 backdrop-blur-sm px-4 md:px-5 py-2.5 md:py-3 rounded-full font-bold text-[13px] md:text-[14px] text-white cursor-pointer border border-white/20 hover:bg-tgu-pink/40 hover:border-tgu-pink/60 transition-all duration-300 hover:-translate-y-1">
                      {name}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <p className="text-white/40 text-[13px] mt-8">
                ※ 新しいサークルの立ち上げも歓迎！毎月の全体MTGでプレゼンして仲間を集めよう。
              </p>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER 2 — TGU-style: yellow blob ===== */}
      <section className="py-12">
        <FadeSlide className="max-w-[900px] mx-auto px-4 md:px-6">
          <div className="relative flex flex-col md:flex-row items-center justify-between bg-tgu-yellow-light rounded-[28px] p-6 md:p-10 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] border-2 border-tgu-yellow/30 gap-6 overflow-hidden">
            <DecoStripes className="top-0 right-0 w-20 h-20" color="text-tgu-yellow/20" />
            <div className="text-center md:text-left relative z-10">
              <h2 className="text-lg md:text-xl font-black mb-1.5">興味が湧いたら、まずはLINE登録！</h2>
            </div>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mn-cta-pulse relative z-10 shrink-0 flex items-center gap-3 bg-line hover:bg-[#05b34c] text-white font-bold text-[15px] px-7 py-4 rounded-full shadow-md transition-transform hover:scale-105"
            >
              <LineIcon className="w-6 h-6" />
              LINEで情報を受け取る
            </a>
          </div>
        </FadeSlide>
      </section>

      {/* ================================================================
          7. BENEFITS — TGU-style: cyan blob, infographic-style
          ================================================================ */}
      <section className="relative py-20 md:py-28 my-4 md:my-6">
        {/* Cyan blob background */}
        <div className="absolute inset-0 mx-1 md:mx-3 bg-tgu-cyan rounded-[40px] md:rounded-[80px]" />
        <DecoStripes className="top-6 right-8 w-20 h-20" color="text-white/10" />
        <div className="absolute bottom-10 left-10 w-8 h-8 bg-white/15 rounded-full tgu-bounce" />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 md:px-6">
          <FadeSlide className="text-center mb-12">
            <SectionLabel en="BENEFITS" className="justify-center text-white/50" />
            <h2 className="text-2xl md:text-[32px] font-black text-white">会員限定の特別優待</h2>
          </FadeSlide>

          <StaggerChildren staggerMs={150} className="space-y-5">
            {[
              { icon: "🔮", iconBg: "bg-tgu-pink", title: "オンライン占い・コーチング", desc: "恋愛やビジネス、自己理解まで。プロと対話しながら追加料金なしで、ご利用いただけます。次の一歩のヒントづくりに。" },
              { icon: "🎁", iconBg: "bg-tgu-yellow", title: "豪華プレゼント企画", desc: "ミッション達成で豪華賞品をご自宅へ郵送。毎月1回以上、ゲリラ開催も！" },
              { icon: "💎", iconBg: "bg-tgu-purple", title: "提携サービス特別割引", desc: "様々なサービスの特別優待券を配布。Zeroichi Homeメンバーだけの限定特典。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex flex-col sm:flex-row items-center gap-5 bg-white p-6 md:p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 shrink-0 ${item.iconBg} rounded-[16px] flex items-center justify-center text-2xl shadow-md`}>
                    {item.icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-[17px] md:text-[18px] font-bold mb-1.5">{item.title}</h3>
                    <p className="text-[13px] md:text-[14px] text-[#888] leading-[1.9]">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== MULTI-COLOR STRIPE ===== */}
      <RainbowStripe />

      {/* ================================================================
          8. COMPARISON & PRICING — TGU-style: clean white, data-focused
          ================================================================ */}
      <section id="pricing" className="scroll-mt-24 py-20 md:py-28 bg-white relative overflow-hidden">
        <DecoDots className="top-0 right-0 w-32 h-32" color="text-tgu-pink/5" />
        <DecoStripes className="bottom-0 left-0 w-24 h-24 -rotate-6" color="text-tgu-cyan/6" />

        <div className="max-w-[1100px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center relative z-10">
          {/* Comparison */}
          <FadeSlide direction="left" className="w-full lg:w-1/2">
            <SectionLabel en="COMPARISON" className="text-tgu-pink" />
            <h2 className="text-xl md:text-2xl font-black mb-6 md:mb-8">圧倒的なコストパフォーマンス</h2>
            <div className="bg-[#F8F8F8] rounded-[20px] p-3 md:p-5 border border-[#eee]">
              <table className="w-full text-left border-collapse text-[12px] md:text-[14px]">
                <thead>
                  <tr>
                    <th className="p-2.5 md:p-4 border-b-2 border-white font-medium text-[#999]">機能・内容</th>
                    <th className="p-2.5 md:p-4 border-b-2 border-white font-bold text-center text-tgu-pink bg-tgu-pink-light rounded-t-xl">
                      Zeroichi Home
                    </th>
                    <th className="p-2.5 md:p-4 border-b-2 border-white font-medium text-center text-[#bbb]">
                      <span className="hidden md:inline">一般的な</span><span className="md:hidden">一般</span>
                      <br />
                      <span className="hidden md:inline">オンラインサロン</span><span className="md:hidden">サロン</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="font-medium">
                  {[
                    ["独自ツール", "✓ 使い放題", "数千円〜"],
                    ["イベント参加", "✓ 多数開催", "都度高額"],
                    ["サークル活動", "✓ 追加費用なし", "✕ なし"],
                    ["無料特典", "✓ あり", "✕ なし"],
                  ].map(([label, ours, theirs], i) => (
                    <tr key={i} className={i < 3 ? "border-b border-white" : ""}>
                      <td className="p-2.5 md:p-4 text-[#666]">{label}</td>
                      <td className="p-2.5 md:p-4 text-center text-tgu-pink font-bold bg-tgu-pink-light">{ours}</td>
                      <td className="p-2.5 md:p-4 text-center text-[#bbb]">{theirs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeSlide>

          {/* Pricing */}
          <FadeSlide direction="right" className="w-full lg:w-5/12">
            <TiltCard intensity={4}>
              <div className="bg-tgu-pink text-white rounded-[24px] p-6 md:p-10 relative overflow-hidden shadow-[0_12px_40px_-10px_rgba(232,75,138,0.35)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-10 -translate-y-10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-8 translate-y-8" />
                <DecoStripes className="top-2 left-2 w-16 h-16" color="text-white/8" />

                <SectionLabel en="PRICING" className="!text-white/50 !mb-2" />
                <h2 className="text-2xl md:text-[28px] font-black mb-6">月額プラン</h2>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-[36px] md:text-[48px] font-black font-[var(--font-montserrat)]">
                    ¥<CountUp end={50000} />
                  </span>
                </div>
                <p className="text-[14px] opacity-70 mb-5">/ 月（税別）</p>

                <span className="bg-tgu-yellow text-[#2D2D2D] font-bold py-2 px-4 rounded-full inline-block mb-6 text-[12px] shadow-sm">
                  🎉 初月無料で体験可能！
                </span>

                <ul className="space-y-3 mb-8 text-[13px] md:text-[14px] font-medium">
                  {["独自ツール使い放題", "セミナー/イベント参加権", "全サークルへの参加自由", "特別優待の利用"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white text-tgu-pink font-bold text-[15px] md:text-[17px] py-4 rounded-full hover:bg-tgu-yellow hover:text-[#2D2D2D] transition-colors shadow-md">
                  1ヶ月無料で試してみる
                </a>
              </div>
            </TiltCard>
          </FadeSlide>
        </div>
      </section>

      {/* ================================================================
          9. FLOW — TGU-style: colorful numbered steps
          ================================================================ */}
      <section className="relative py-20 md:py-28 my-4 md:my-6">
        {/* Yellow blob background */}
        <div className="absolute inset-0 mx-1 md:mx-3 bg-tgu-yellow/30 rounded-[40px] md:rounded-[80px]" />
        <DecoStripes className="bottom-6 right-8 w-16 h-16" color="text-tgu-yellow/25" />
        <DecoDots className="top-8 left-8 w-20 h-20" color="text-tgu-coral/10" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-4 md:px-6">
          <FadeSlide className="text-center mb-14">
            <SectionLabel en="FLOW" className="justify-center text-tgu-coral" />
            <h2 className="text-2xl md:text-[32px] font-black">参加までのステップ</h2>
          </FadeSlide>

          <StaggerChildren staggerMs={150} className="relative flex flex-col md:flex-row justify-between gap-6 md:gap-4">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[3px] border-t-[3px] border-dotted border-tgu-pink/40 z-0" />

            {[
              { num: "1", color: "bg-tgu-cyan", title: "LINE追加", desc: "公式アカウントを友達追加" },
              { num: "2", color: "bg-tgu-pink", title: "会員登録", desc: "案内に従い無料登録" },
              { num: "3", color: "bg-tgu-green", title: "セミナーで学習", desc: "プロから基礎をインプット" },
              { num: "4", color: "bg-tgu-yellow", title: "サークル参加", desc: "趣味の合う仲間と合流" },
              { num: "5", color: "bg-tgu-coral", title: "人生が変わる", desc: "学びと遊びのサイクル完成", highlight: true },
            ].map((step) => (
              <StaggerItem key={step.num} className="relative z-10 flex md:flex-col items-center md:text-center gap-5 md:gap-3 md:w-1/5">
                <div className={`w-18 h-18 md:w-22 md:h-22 shrink-0 ${step.color} rounded-full flex items-center justify-center font-[var(--font-montserrat)] font-bold text-xl md:text-2xl text-white shadow-lg border-4 border-white transition-transform duration-300 hover:scale-110`}
                  style={{ width: "4.5rem", height: "4.5rem" }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className={`font-bold text-[15px] mb-0.5 ${"highlight" in step && step.highlight ? "text-tgu-coral" : ""}`}>{step.title}</h3>
                  <p className="text-[12px] text-[#999]">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ================================================================
          10. FAQ — TGU-style: white bg, clean accordion
          ================================================================ */}
      <section id="faq" className="scroll-mt-24 py-20 md:py-28 bg-white relative overflow-hidden">
        <DecoDots className="top-0 left-0 w-32 h-32" color="text-tgu-pink/5" />

        <div className="relative z-10 max-w-[800px] mx-auto px-4 md:px-6">
          <FadeSlide className="text-center mb-12">
            <SectionLabel en="FAQ" className="justify-center text-tgu-pink" />
            <h2 className="text-2xl md:text-[32px] font-black">よくあるご質問</h2>
          </FadeSlide>

          <StaggerChildren staggerMs={80} className="space-y-3">
            {[
              { q: "Zeroichi Homeだけの利用はできますか？", a: "はい、できます。まずは1ヵ月無料トライアルからお試しください！", borderColor: "hover:border-tgu-cyan" },
              { q: "サークルの参加費はいくらですか？", a: "サークルごとに団長が費用を設定しています。月額会費以外の追加料金は各活動ごとに異なります。", borderColor: "hover:border-tgu-pink" },
              { q: "新しくサークルを作ってもいいですか？", a: "もちろんです！毎月1回の全体MTGでプレゼンし、参加希望者が集まれば新サークルを立ち上げられます。", borderColor: "hover:border-tgu-yellow" },
              { q: "ビジネスセミナーはどんな内容ですか？", a: "副業の始め方や初心者向けの内容を中心に提供しています。セミナー日程は随時追加され、今後は各分野のプロによる講座も増やしていく予定です。", borderColor: "hover:border-tgu-green" },
              { q: "占いやコーチング、コンサルの内容は？", a: "希望者のみ占い・コーチング・コンサルを受けられる権利を付与します。内容はメンバーのご希望をうかがい、完全オーダーメイドで対応いたします。", borderColor: "hover:border-tgu-purple" },
              { q: "途中で解約できますか？", a: "はい、いつでも解約可能です。違約金や引き止めは一切ありません。無料期間内に退会された場合、費用は一切かかりません。", borderColor: "hover:border-tgu-coral" },
            ].map((faq, i) => (
              <StaggerItem key={i}>
                <details className={`tgu-faq group bg-[#F9F9F9] rounded-[16px] p-5 md:p-6 border-2 border-transparent ${faq.borderColor} transition-colors`}>
                  <summary className="flex justify-between items-center font-bold text-[15px] md:text-[17px] cursor-pointer">
                    <span className="flex items-center gap-2">
                      <span className="text-tgu-pink font-[var(--font-montserrat)]">Q.</span>
                      {faq.q}
                    </span>
                    <span className="transition-transform duration-300 group-open:rotate-180 bg-tgu-pink w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ml-3 shadow-sm">
                      <CaretDown />
                    </span>
                  </summary>
                  <div className="mt-4 text-[14px] text-[#666] font-medium leading-[1.9] pl-2 border-l-2 border-tgu-pink">
                    A. {faq.a}
                  </div>
                </details>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ================================================================
          11. FINAL CTA — TGU-style: pink gradient, bold
          ================================================================ */}
      <section id="contact" className="relative scroll-mt-24 py-20 md:py-28 my-4 md:my-6 overflow-hidden">
        {/* Pink blob background */}
        <div className="absolute inset-0 mx-1 md:mx-3 bg-tgu-pink rounded-[40px] md:rounded-[80px]" />

        {/* Decorations */}
        <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-white/8 rounded-full blur-[30px]" />
        <div className="absolute bottom-[10%] right-[8%] w-52 h-52 bg-white/8 rounded-full blur-[30px]" />
        <DecoStripes className="top-4 right-6 w-20 h-20" color="text-white/8" />
        <DecoDots className="bottom-6 left-8 w-24 h-24" color="text-white/6" />
        <div className="absolute top-16 left-[15%] w-8 h-8 bg-white/15 rounded-full tgu-bounce" />
        <div className="absolute bottom-12 right-[20%] w-6 h-6 bg-white/10 rounded-md rotate-45 tgu-bounce-2" />

        <div className="relative z-10 max-w-[700px] mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <FadeSlide className="w-full flex justify-center">
            <Image
              src="/zeroichi-home-logo.png"
              alt="Zeroichi Home"
              width={1024}
              height={1024}
              className="block mx-auto h-20 md:h-24 w-auto select-none mb-6"
            />
          </FadeSlide>
          <FadeSlide delay={200} className="w-full">
            <h2 className="text-[clamp(26px,5vw,52px)] font-black mb-6 text-white leading-[1.3] text-center">
              ここが、
              <br />
              あなたの居場所になる。
            </h2>
          </FadeSlide>
          <FadeSlide delay={400} className="w-full">
            <p className="text-lg md:text-xl font-bold text-white/80 mb-8 md:mb-10 text-center">
              最高の仲間と、最高の学びを。
            </p>
          </FadeSlide>
          <FadeSlide delay={600} className="w-full flex flex-col items-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tgu-cta-pulse inline-flex items-center gap-3 bg-white text-tgu-pink font-black text-[17px] md:text-[20px] px-10 md:px-14 py-5 md:py-6 rounded-full shadow-[0_12px_32px_-8px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:-translate-y-1"
            >
              <LineIcon className="w-7 h-7 md:w-8 md:h-8" />
              今すぐLINE登録（無料）
            </a>
            <p className="mt-5 text-[13px] font-bold text-white/60 text-center">
              ＼ 1ヶ月無料トライアル実施中 ／
            </p>
          </FadeSlide>
        </div>
      </section>

    </div>
  );
}
