import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <>
      <Header active="home" />

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center fv-kenburns"
          style={{
            backgroundImage: "url('/ファーストビュー画像.png')",
          }}
        />
        {/* Ambient orbs */}
        <div
          className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full blur-3xl pointer-events-none fv-orb"
          style={{ background: "radial-gradient(circle, rgba(120,220,255,0.45) 0%, rgba(120,220,255,0) 70%)" }}
        />
        <div
          className="absolute -bottom-48 -right-40 w-[620px] h-[620px] rounded-full blur-3xl pointer-events-none fv-orb-2"
          style={{ background: "radial-gradient(circle, rgba(0,180,210,0.4) 0%, rgba(0,180,210,0) 70%)" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[360px] h-[360px] rounded-full blur-3xl pointer-events-none fv-orb-3"
          style={{ background: "radial-gradient(circle, rgba(160,255,240,0.3) 0%, rgba(160,255,240,0) 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(0,43,55,0.72) 0%,rgba(0,103,133,0.55) 100%)",
          }}
        />
        {/* Scan line */}
        <div
          className="absolute inset-x-0 h-px pointer-events-none fv-scan"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(120,220,255,0.7) 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-[900px] -mt-[8vh]">
          <h1
            className="font-semibold text-white mb-8 fv-title-anim"
            style={{
              fontFamily: "var(--font-noto-serif-jp), serif",
              fontSize: "clamp(2.6rem,9.5vw,6.4rem)",
              lineHeight: 1.16,
              letterSpacing: "0.16em",
            }}
          >
            全国起業家協会
          </h1>
          <p
            className="font-[Noto_Sans_JP] text-white text-lg md:text-[22px] font-medium mb-3 fv-fade"
            style={{ letterSpacing: "0.08em", animationDelay: "0.4s" }}
          >
            ビジネスを、より戦略的に、
            <br className="md:hidden" />
            より本質的に
          </p>
          <p
            className="text-white/60 text-sm md:text-base mb-12 fv-fade"
            style={{ letterSpacing: "-0.2px", animationDelay: "0.65s" }}
          >
            営業支援・コミュニティ構築・経営支援で、
            <br className="md:hidden" />
            事業成長を加速します
          </p>
          <div className="flex flex-wrap gap-5 justify-center fv-fade" style={{ animationDelay: "0.9s" }}>
            <Link href="/services" className="btn-ghost white">
              VIEW SERVICE
              <span className="arrow"></span>
            </Link>
            <Link
              href="#contact"
              className="btn-ghost white"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              CONTACT
              <span className="arrow"></span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/35 text-[10px] font-[Josefin_Sans] tracking-[0.25em]">
            SCROLL
          </span>
          <div className="w-[1px] h-9 bg-white/10 relative">
            <div className="scroll-dot absolute top-0 left-0 w-full h-3 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <p className="section-deco">ABOUT</p>
                <div className="w-10 h-[3px] bg-primary mt-5"></div>
              </div>
              <div>
                <h2
                  className="font-[Noto_Sans_JP] text-text-heading font-bold text-[20px] md:text-[24px] mb-6"
                  style={{ letterSpacing: "-0.3px" }}
                >
                  私たちについて
                </h2>
                <p
                  className="font-[Noto_Sans_JP] text-text-main text-[14px] leading-[2.1] mb-5"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  一般社団法人 全国起業家協会は、営業支援・コミュニティ運営・経営コンサルティングの3つの柱で企業の成長を多角的に支援するビジネスパートナーです。
                </p>
                <p
                  className="font-[Noto_Sans_JP] text-text-main text-[14px] leading-[2.1]"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  単なるサービス提供者ではなく、成果にこだわるパートナーとしてクライアントに寄り添い、持続的な成長をともに目指します。
                </p>
              </div>
            </div>
          </FadeUp>
          {/* 3 Pillars */}
          <FadeUp className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  ),
                  en: "SALES",
                  ja: "営業支援",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ),
                  en: "COMMUNITY",
                  ja: "コミュニティ構築",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  ),
                  en: "CONSULTING",
                  ja: "経営支援",
                },
              ].map((pillar) => (
                <div key={pillar.en} className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {pillar.icon}
                    </svg>
                  </div>
                  <p className="font-[Josefin_Sans] text-[13px] tracking-[0.15em] text-primary font-semibold mb-1">
                    {pillar.en}
                  </p>
                  <p className="font-[Noto_Sans_JP] text-xs text-text-main">
                    {pillar.ja}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== SERVICE ===== */}
      <section id="service" className="py-24 md:py-32 bg-bg-alt">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="section-deco">SERVICE</p>
            <div className="w-10 h-[3px] bg-primary mx-auto mt-5 mb-6"></div>
            <h2
              className="font-[Noto_Sans_JP] text-text-heading font-bold text-[20px] md:text-[24px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              事業内容
            </h2>
            <p
              className="font-[Noto_Sans_JP] text-text-main text-[14px] leading-[2] max-w-lg mx-auto"
              style={{ letterSpacing: "-0.2px" }}
            >
              営業支援・コミュニティ構築・経営支援の3領域を横断し、
              <br className="hidden md:block" />
              クライアントの事業成長を包括的にサポートします。
            </p>
          </FadeUp>

          <FadeUp>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  ),
                  title: "営業支援",
                  desc: "新規開拓から既存顧客フォローまで、経験豊富なプロフェッショナルが営業力を強化。成果にコミットします。",
                  items: [
                    "新規顧客の開拓・アポイント獲得",
                    "既存顧客のフォローアップ",
                    "営業戦略の立案・改善",
                  ],
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ),
                  title: "コミュニティ運営",
                  desc: "顧客やファンを繋ぐコミュニティの構築・運営。エンゲージメントとロイヤリティの向上を実現します。",
                  items: [
                    "コミュニティ設計・立ち上げ",
                    "イベント企画・運営",
                    "メンバーエンゲージメント施策",
                  ],
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  ),
                  title: "経営コンサルティング",
                  desc: "経営課題の分析から戦略立案、実行支援まで。包括的にサポートします。",
                  items: [
                    "経営課題の分析・可視化",
                    "事業戦略・成長戦略の策定",
                    "実行フェーズの伴走支援",
                  ],
                },
              ].map((svc) => (
                <div key={svc.title} className="svc-card bg-white p-7 md:p-8">
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center mb-5">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {svc.icon}
                    </svg>
                  </div>
                  <h3
                    className="text-text-heading font-bold text-[16px] mb-3"
                    style={{ letterSpacing: "-0.3px" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="font-[Noto_Sans_JP] text-text-main text-[13px] leading-[2] mb-5">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2 text-[13px] text-text-main">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-balance">
                        <span className="w-1 h-1 rounded-full bg-primary mt-[9px] shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp className="text-center mt-14">
            <Link href="/services" className="btn-ghost">
              VIEW MORE
              <span className="arrow"></span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ===== 提供サービス ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeUp className="mb-16">
            <p className="font-[Noto_Sans_JP] text-text-main text-[13px] mb-3">
              営業支援・コミュニティ構築・経営支援を基盤として
            </p>
            <h2
              className="font-[Noto_Sans_JP] text-text-heading font-bold text-[20px] md:text-[24px] leading-[1.6]"
              style={{ letterSpacing: "-0.3px" }}
            >
              「事業の成長」をサポートする
              <br />
              サービスを提供しています。
            </h2>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-4">
              {[
                {
                  href: "/bizowner",
                  logo: "/lp/bizowner-logo.png",
                  alt: "BizOwner ロゴ",
                  eyebrow: "BUSINESS PROGRAM",
                  badge: "ビジネス初心者対応",
                  title: "BizOwner",
                  titleFont: "font-[Josefin_Sans]",
                  desc: "ビジネス素人から会社経営。知識ゼロ・リスク最小限で始められる権利収入の仕組みを提供します。",
                  tags: ["月額無料", "知識不要", "権利収入"],
                  bg: "linear-gradient(120deg,#002b3a 0%,#005f7e 55%,#0088a8 100%)",
                },
                {
                  href: "/sarudemo",
                  logo: "/lp/sarudemo-logo.png",
                  alt: "SARUDEMO ロゴ",
                  eyebrow: "FAST PASS",
                  badge: "本格起業",
                  title: "SARUDEMO",
                  titleFont: "font-[Josefin_Sans]",
                  desc: "最短最速で年商1億円を目指す起業ファストパス。プロチームの伴走で1年以内に社長へ。",
                  tags: ["年商1億円", "1年で社長", "プロチーム支援"],
                  bg: "linear-gradient(120deg,#0b2a4a 0%,#2e6fa8 60%,#4a9bd9 100%)",
                },
                {
                  href: "/comons",
                  logo: "/lp/comons-logo.png",
                  alt: "COMON'S ロゴ",
                  eyebrow: "ADVISORY",
                  badge: "一人社長向け",
                  title: "COMON'S",
                  titleFont: "font-[Josefin_Sans]",
                  desc: "法人を、ひとりで背負わない。厳選な審査を通過した顧問チームで経営を伴走します。",
                  tags: ["月額30,000円〜", "顧問1名から", "分野不問"],
                  bg: "linear-gradient(120deg,#3a0b14 0%,#8a2e3c 60%,#c4515e 100%)",
                },
                {
                  href: "/hitohoshi",
                  logo: "/lp/hitohoshi-logo.png",
                  alt: "HitoHoshi ロゴ",
                  eyebrow: "HR SUPPORT",
                  badge: "既存法人向け",
                  title: "HitoHoshi",
                  titleFont: "font-[Josefin_Sans]",
                  desc: "採用アカウント運用代行と人材再活用で、企業の「ヒト」を支えます。",
                  tags: ["採用代行", "人材再活用"],
                  bg: "linear-gradient(120deg,#1a2e1a 0%,#2f6b3f 60%,#4a9b5c 100%)",
                },
                {
                  href: "/kanehoshi",
                  logo: "/lp/kanehoshi-logo.png",
                  alt: "KaneHoshi ロゴ",
                  eyebrow: "EC SUPPORT",
                  badge: "既存法人向け",
                  title: "KaneHoshi",
                  titleFont: "font-[Josefin_Sans]",
                  desc: "ECアカウント運用代行で売上実績を積み上げ、企業の「カネ」を支えます。",
                  tags: ["ECアカウント運用代行", "融資・補助金対策"],
                  bg: "linear-gradient(120deg,#3a2a0b 0%,#8a5f2e 60%,#d4a94a 100%)",
                },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="nav-card group relative overflow-hidden flex flex-col md:flex-row md:items-center p-7 pb-16 md:p-10 min-h-[200px] md:min-h-[220px] gap-6 md:gap-10"
                  style={{ background: s.bg }}
                >
                  <div className="absolute -right-10 -bottom-10 w-[260px] h-[260px] opacity-[0.07] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.12]">
                    <Image
                      src={s.logo}
                      alt=""
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <div className="relative z-10 shrink-0">
                    <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] relative">
                      <Image
                        src={s.logo}
                        alt={s.alt}
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <p className="font-[Josefin_Sans] text-[11px] text-white/55 tracking-[0.2em] whitespace-nowrap">
                        {s.eyebrow}
                      </p>
                      <span className="text-white/65 text-[10px] tracking-[0.1em] border border-white/20 px-2.5 py-[3px] rounded-full whitespace-nowrap shrink-0">
                        {s.badge}
                      </span>
                    </div>
                    <h3
                      className={`${s.titleFont} font-bold text-[22px] md:text-[28px] text-white mb-3`}
                      style={{ letterSpacing: "0.02em" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-white/65 text-[13px] leading-[1.95] mb-4">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-white/75 text-[11px] px-2.5 py-[5px] rounded-full border border-white/15 bg-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 hidden md:flex items-center gap-2 text-white/60 text-[11px] tracking-[0.2em] font-[Josefin_Sans] transition-colors group-hover:text-white shrink-0">
                    VIEW LP
                    <span className="inline-block w-7 h-px bg-white/40 transition-all group-hover:w-12 group-hover:bg-white"></span>
                  </div>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 md:py-32 bg-bg-alt">
        <div className="max-w-[700px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p
              className="section-deco"
              style={{ fontSize: "clamp(2rem,5vw,4rem)" }}
            >
              CONTACT
            </p>
            <div className="w-10 h-[3px] bg-primary mx-auto mt-4 mb-6"></div>
            <h2
              className="font-[Noto_Sans_JP] text-text-heading font-bold text-[20px] md:text-[24px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              お問い合わせ
            </h2>
            <p
              className="font-[Noto_Sans_JP] text-text-main text-[14px] leading-[2]"
              style={{ letterSpacing: "-0.2px" }}
            >
              サービスに関するご質問やお見積りのご依頼など、
              <br className="hidden md:block" />
              お気軽にお問い合わせください。
            </p>
          </FadeUp>
          <FadeUp>
            <ContactForm />
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
