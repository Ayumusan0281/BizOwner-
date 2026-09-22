import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "サービス一覧",
};

export default function ServicesPage() {
  return (
    <>
      <Header active="service" />

      {/* PAGE HERO */}
      <section className="pt-[100px] pb-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeUp>
            <p className="section-deco">SERVICE</p>
          </FadeUp>
          <FadeUp>
            <div className="w-10 h-[3px] bg-primary mt-5 mb-6"></div>
          </FadeUp>
          <FadeUp>
            <h1
              className="font-[Noto_Sans_JP] text-text-heading font-bold mb-4"
              style={{ fontSize: "28px", letterSpacing: "-0.4px" }}
            >
              サービス一覧
            </h1>
          </FadeUp>
          <FadeUp>
            <p
              className="font-[Noto_Sans_JP] text-text-main max-w-lg"
              style={{
                fontSize: "14px",
                lineHeight: 2,
                letterSpacing: "-0.2px",
              }}
            >
              全国起業家協会が提供する3つの事業領域と、各サービスの詳細をご紹介します。
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section className="py-24 bg-bg-alt">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Josefin_Sans] font-semibold text-primary text-[12px] tracking-[0.2em] mb-3">
              BUSINESS PILLARS
            </p>
            <h2
              className="font-[Noto_Sans_JP] text-text-heading font-bold text-[20px] md:text-[24px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              3つの事業領域
            </h2>
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
                <div key={svc.title} className="svc-card bg-white p-7 md:p-8 relative">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary"></div>
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
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-[9px] shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SERVICE DETAIL */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Josefin_Sans] font-semibold text-primary text-[12px] tracking-[0.2em] mb-3">
              SERVICE DETAIL
            </p>
            <h2
              className="font-[Noto_Sans_JP] text-text-heading font-bold text-[20px] md:text-[24px] mb-3"
              style={{ letterSpacing: "-0.3px" }}
            >
              提供サービス
            </h2>
            <p className="font-[Noto_Sans_JP] text-text-main text-[14px]">
              各サービスの詳細ページで具体的な内容をご確認いただけます。
            </p>
          </FadeUp>
          <FadeUp>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  href: "/bizowner",
                  logo: "/lp/bizowner-logo.png",
                  alt: "BizOwner ロゴ",
                  eyebrow: "BUSINESS PROGRAM",
                  badge: "ビジネス初心者対応",
                  title: "BizOwner",
                  titleFont: "font-[Josefin_Sans]",
                  desc: "ビジネス素人から会社経営。知識ゼロ・リスク最小限で始められる権利収入の仕組み。",
                  tags: ["月額50,000円〜", "知識不要", "権利収入"],
                  bg: "linear-gradient(160deg,#002b3a 0%,#005f7e 55%,#0088a8 100%)",
                },
                {
                  href: "/sarudemo",
                  logo: "/lp/sarudemo-logo.png",
                  alt: "SARUDEMO ロゴ",
                  eyebrow: "FAST PASS",
                  badge: "本格起業",
                  title: "SARUDEMO",
                  titleFont: "font-[Josefin_Sans]",
                  desc: "最短最速で年商1億円を目指す起業ファストパス。1年以内に社長へ。",
                  tags: ["年商1億円", "1年で社長", "プロチーム支援"],
                  bg: "linear-gradient(160deg,#003a4a 0%,#006e87 60%,#00a3b8 100%)",
                },
                {
                  href: "/comons",
                  logo: "/lp/comons-logo.png",
                  alt: "COMON'S ロゴ",
                  eyebrow: "ADVISORY",
                  badge: "一人社長向け",
                  title: "COMON'S",
                  titleFont: "font-[Josefin_Sans]",
                  desc: "法人を、ひとりで背負わない。厳選な審査を通過した顧問チームで経営を伴走。",
                  tags: ["月額30,000円〜", "顧問1名から", "分野不問"],
                  bg: "linear-gradient(160deg,#0b2a4a 0%,#2e6fa8 60%,#4a9bd9 100%)",
                },
                {
                  href: "/hitohoshi",
                  logo: "/lp/hitohoshi-logo.png",
                  alt: "HitoHoshi ロゴ",
                  eyebrow: "HR SUPPORT",
                  badge: "既存法人向け",
                  title: "HitoHoshi",
                  titleFont: "font-[Josefin_Sans]",
                  desc: "採用アカウント運用代行と人材再活用で、企業の「ヒト」を支える。",
                  tags: ["採用代行", "人材再活用"],
                  bg: "linear-gradient(160deg,#1a2e1a 0%,#2f6b3f 60%,#4a9b5c 100%)",
                },
                {
                  href: "/kanehoshi",
                  logo: "/lp/kanehoshi-logo.png",
                  alt: "KaneHoshi ロゴ",
                  eyebrow: "EC SUPPORT",
                  badge: "既存法人向け",
                  title: "KaneHoshi",
                  titleFont: "font-[Josefin_Sans]",
                  desc: "ECアカウント運用代行で売上実績を積み上げ、企業の「カネ」を支える。",
                  tags: ["ECアカウント運用代行", "融資・補助金対策"],
                  bg: "linear-gradient(160deg,#3a2a0b 0%,#8a5f2e 60%,#d4a94a 100%)",
                },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="nav-card group relative overflow-hidden flex flex-col p-7 pb-16 md:p-8 min-h-[380px] md:min-h-[440px]"
                  style={{ background: s.bg }}
                >
                  <div className="absolute -right-12 -bottom-12 w-[240px] h-[240px] opacity-[0.07] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.12]">
                    <Image
                      src={s.logo}
                      alt=""
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <p className="font-[Josefin_Sans] text-[11px] text-white/55 tracking-[0.2em]">
                        {s.eyebrow}
                      </p>
                      <span className="text-white/65 text-[10px] tracking-[0.1em] border border-white/20 px-2.5 py-[3px] rounded-full">
                        {s.badge}
                      </span>
                    </div>
                    <div className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] relative mb-5">
                      <Image
                        src={s.logo}
                        alt={s.alt}
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                    <h3
                      className={`${s.titleFont} font-bold text-[22px] md:text-[26px] text-white mb-3 leading-tight`}
                      style={{ letterSpacing: "0.02em" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-white/65 text-[13px] leading-[1.95] mb-5">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-white/75 text-[11px] px-2.5 py-[5px] rounded-full border border-white/15 bg-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-auto text-white/60 text-[11px] tracking-[0.2em] font-[Josefin_Sans] transition-colors group-hover:text-white">
                      VIEW LP
                      <span className="inline-block w-7 h-px bg-white/40 transition-all group-hover:w-12 group-hover:bg-white"></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <FadeUp className="max-w-[700px] mx-auto px-6 text-center">
          <h2
            className="font-[Noto_Sans_JP] text-white font-bold text-[20px] md:text-[24px] mb-5"
            style={{ letterSpacing: "-0.3px" }}
          >
            まずはお気軽にご相談ください
          </h2>
          <p className="text-white/50 text-[14px] leading-[2] mb-10">
            サービスに関するご質問やお見積もりのご依頼など、
            <br className="hidden md:block" />
            お気軽にお問い合わせください。
          </p>
          <Link href="/#contact" className="btn-ghost white">
            CONTACT
            <span className="arrow"></span>
          </Link>
        </FadeUp>
      </section>

      <Footer />
    </>
  );
}
