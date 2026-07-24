import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeSlide from "@/components/manabiya/FadeSlide";
import StaggerChildren, { StaggerItem } from "@/components/manabiya/StaggerChildren";
import CountUp from "@/components/manabiya/CountUp";
import TiltCard from "@/components/manabiya/TiltCard";
import ImageReveal from "@/components/lp/ImageReveal";
import LineDivider from "@/components/lp/LineDivider";
import LineIcon from "@/components/LineIcon";

export const metadata: Metadata = {
  title: "SARUDEMO｜猿でも出来る起業のファストパス",
};

/* メインCV：公式LINE追加。全CTAの遷移先 */
const LINE_URL = "https://utage-system.com/line/open/yjGgUvxEA3oy";

/* ── CTA Banner (variation A - dark premium) ── */
function CtaBannerPremium() {
  return (
    <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #061729 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(rgba(212,175,55,0.3) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-[100px]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <p className="text-[#D4AF37]/60 text-[13px] font-bold mb-4 tracking-wider">＼ 起業への第一歩を踏み出す ／</p>
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[16px] md:text-[18px] px-10 py-5">
          <LineIcon className="w-6 h-6" />
          1ヶ月無料でLINE登録する
        </a>
        <p className="mt-4 text-[13px] text-white/40 font-medium">※ 解約自由・しつこい勧誘なし</p>
      </div>
    </section>
  );
}

/* ── CTA Banner (variation B - card) ── */
function CtaBannerCard() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="lp-gradient-border">
          <div className="bg-white py-8 px-6 md:px-10 text-center">
            <p className="text-lp font-bold text-[18px] md:text-[22px] mb-2">まずは無料で話を聞いてみませんか？</p>
            <p className="text-text-light text-[13px] mb-6">LINE登録後、担当者とのセッションにてSARUDEMOの全貌を丁寧に説明致します。</p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[15px] md:text-[16px] px-8 py-4">
              <LineIcon className="w-5 h-5" />
              LINE登録して詳細を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Marquee Banner ── */
function MarqueeBanner() {
  const items = ["猿でも出来る起業のファストパス", "最短最速で社長へ", "年商1億円を目標", "再現性のある成功を", "プロチームが全面コンサル", "契約金300万円で人生が変わる"];
  const doubled = [...items, ...items];
  return (
    <div className="bg-lp py-4 overflow-hidden">
      <div className="lp-marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-8 text-[14px] md:text-[16px] font-bold text-white/80 whitespace-nowrap">
            {item}
            <span className="text-[#D4AF37] opacity-60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SarudemoPage() {
  return (
    <div className="font-sans text-text-body bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-white">
        {/* Logo (top-left) */}
        <Link
          href="#"
          aria-label="SARUDEMO"
          className="absolute top-4 left-4 md:top-6 md:left-8 z-30 inline-flex items-center"
        >
          <Image
            src="/lp/sarudemo-logo.png"
            alt="SARUDEMO"
            width={400}
            height={400}
            priority
            className="h-12 md:h-14 w-auto select-none"
          />
        </Link>
        {/* Geometric pattern */}
        <div className="absolute inset-0 lp-dots-pattern" />
        {/* Floating blobs */}
        <div className="absolute top-[-10%] -left-[10%] w-[600px] h-[600px] bg-lp-sky rounded-full blur-[80px] opacity-40 blob-float pointer-events-none" />
        <div className="absolute top-[20%] -right-[5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[80px] opacity-40 blob-float-delay pointer-events-none" />
        {/* Floating geometric shapes */}
        <div className="absolute top-[20%] right-[12%] w-16 h-16 border-2 border-[#D4AF37]/20 rounded-full lp-float-slow pointer-events-none hidden lg:block" />
        <div className="absolute bottom-[30%] left-[5%] w-12 h-12 bg-lp-accent/10 rounded-lg rotate-45 lp-float-medium pointer-events-none hidden lg:block" />

        <div className="max-w-[1100px] mx-auto px-6 relative z-10 pt-20 pb-32 lg:pt-28 lg:pb-40 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 text-center lg:text-left space-y-7">
              <FadeSlide direction="up" delay={100}>
                <div className="inline-flex items-center gap-2 bg-lp text-white font-bold text-[13px] tracking-widest px-5 py-2 rounded-full shadow-md">
                  <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" /></svg>
                  起業のファストパス
                </div>
              </FadeSlide>
              <FadeSlide direction="up" delay={300}>
                <h1
                  className="font-bold text-lp"
                  style={{ fontSize: "clamp(32px,6vw,56px)", lineHeight: 1.25, letterSpacing: "-0.01em" }}
                >
                  猿でも出来る、
                  <br />
                  <span className="text-lp-accent lp-marker">起業</span>のファストパス。
                </h1>
              </FadeSlide>
              <FadeSlide direction="up" delay={500}>
                <p className="text-[16px] md:text-[18px] text-text-body leading-[1.9] max-w-2xl mx-auto lg:mx-0 font-medium">
                  最短最速で社長へ。年商1億円を目標にする起業プログラム。
                  <br className="hidden md:block" />
                  テンプレート × プロチームで、再現性のある成功を。
                </p>
              </FadeSlide>
              <FadeSlide direction="up" delay={700}>
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[16px] md:text-[18px] w-full md:w-auto px-10 py-5 justify-center">
                    <LineIcon className="w-6 h-6" />
                    1ヶ月無料でLINE登録する
                  </a>
                  <p className="text-[13px] text-text-light">※ 解約自由・しつこい勧誘なし</p>
                </div>
              </FadeSlide>
            </div>

            <FadeSlide direction="right" delay={400} className="flex-1 w-full max-w-[400px] lg:max-w-none relative">
              <ImageReveal immediate direction="right" className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image src="/lp/sarudemo-hero.png" alt="SARUDEMO" width={1536} height={1024} className="w-full h-[320px] md:h-[500px] object-cover" priority />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-lp/60 to-transparent" />
                <div className="absolute bottom-6 left-6 z-20 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                  <p className="font-[Montserrat] font-bold text-[22px] tracking-widest text-[#D4AF37]">SARUDEMO</p>
                  <p className="text-[13px] opacity-95">Premium Entrepreneurship</p>
                </div>
              </ImageReveal>
              {/* Floating stats */}
              <div className="absolute -bottom-4 right-4 md:right-10 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 lp-float-slow border border-gray-100">
                <p className="text-[10px] text-text-light font-medium">目標年商</p>
                <p className="font-[Inter] font-bold text-lp text-[18px] md:text-[22px]">1<span className="text-[13px] text-text-light font-normal">億円</span></p>
              </div>
              <div className="absolute -top-2 -right-2 md:-right-6 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 lp-float-medium border border-gray-100">
                <p className="text-[10px] text-text-light font-medium">最短</p>
                <p className="font-bold text-cta text-[18px] md:text-[22px]">1<span className="text-[13px] text-text-light font-normal">年で社長</span></p>
              </div>
              {/* Floating decorations */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-lp-accent/10 rounded-full backdrop-blur-md border border-lp-accent/20 flex items-center justify-center blob-float hidden md:flex">
                <svg className="w-8 h-8 text-lp-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
            </FadeSlide>
          </div>
        </div>

        {/* Trust numbers bar */}
        <FadeSlide direction="up" delay={900}>
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-100 py-6 z-20">
            <div className="max-w-[900px] mx-auto px-6 lp-trust-bar">
              <div className="lp-trust-item">
                <p className="lp-trust-number"><CountUp end={1} /></p>
                <p className="text-[11px] text-text-light font-medium mt-1">年以内に社長へ</p>
              </div>
              <div className="lp-trust-item">
                <p className="lp-trust-number"><CountUp end={50} />+</p>
                <p className="text-[11px] text-text-light font-medium mt-1">指導企業数</p>
              </div>
              <div className="lp-trust-item">
                <p className="lp-trust-number"><CountUp end={100} /><span className="text-[20px]">万</span></p>
                <p className="text-[11px] text-text-light font-medium mt-1">権利収入/月 目安</p>
              </div>
            </div>
          </div>
        </FadeSlide>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="font-[Inter] text-[10px] font-bold tracking-[0.2em] text-lp">SCROLL</span>
          <div className="w-[1px] h-10 bg-lp/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-lp absolute top-0 left-0 animate-[shimmer_2s_infinite]" />
          </div>
        </div>
        <style>{`@keyframes shimmer { 0% { top: -50%; } 100% { top: 150%; } }`}</style>
      </section>

      {/* ===== Marquee ===== */}
      <MarqueeBanner />

      {/* ===== 共感パート ===== */}
      <section
        className="relative py-28 lg:py-36 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0b2a4a 0%, #132d4a 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(212,175,55,0.3) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center text-white/40">
              <span className="font-[Inter] font-bold text-[12px] tracking-[0.3em]">01 — ANXIETY</span>
            </div>
            <h2 className="font-bold text-white text-[26px] md:text-[36px] leading-[1.5]">
              こんな<span className="text-lp-accent relative inline-block lp-marker">想い</span>はありませんか？
            </h2>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="grid gap-4 max-w-3xl mx-auto mb-14">
            {[
              "いつか独立したいと思いながら、気づけば数年経っていた",
              "起業したいけど、何から始めればいいか分からない",
              "副業は経験済み。次のステップに進みたい",
              "会社員のままでは、一生「年収の壁」を超えられない",
              "投資する覚悟はある。でも失敗するのが怖い",
            ].map((text, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-5 lp-glass-dark rounded-2xl p-6 border border-white/10 hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-cta flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z" /></svg>
                  </div>
                  <p className="text-[15px] md:text-[16px] font-medium text-white/90">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeSlide direction="up" className="text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6">
              <p className="text-white font-bold text-[20px] md:text-[26px] tracking-tight">
                その想い、<span className="font-[Montserrat] font-bold text-lp-accent tracking-normal lp-marker">SARUDEMO</span>が実現します。
              </p>
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* CTA 1 */}
      <CtaBannerPremium />

      {/* ===== SARUDEMOとは ===== */}
      <section className="py-28 lg:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-lines-pattern" />
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">02 — ABOUT</span>
            </div>
            <h2 className="font-bold text-lp text-[26px] md:text-[36px] leading-[1.5]">
              猿でも出来る起業。<br className="md:hidden" />最短最速の<span className="text-lp-accent lp-marker">ファストパス</span>。
            </h2>
          </FadeSlide>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
            <FadeSlide direction="left" className="flex-1 w-full">
              <div className="relative">
                <ImageReveal direction="left" className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] relative z-10">
                  <Image src="/lp/sarudemo-business.png" alt="ビジネスオーナー" width={1536} height={1024} className="w-full h-full object-cover" />
                </ImageReveal>
              </div>
            </FadeSlide>
            <FadeSlide direction="right" className="flex-1">
              <p className="text-[16px] md:text-[18px] text-text-dark leading-loose font-medium">
                SARUDEMOは、実業のフランチャイズテンプレートと経営のプロチームによるサポートで、<strong className="text-lp bg-[#FBF5E6] px-2">最短1年以内</strong>にビジネスオーナーへ育成する起業プログラムです。
              </p>
              <div className="w-16 h-[3px] bg-gradient-to-r from-[#D4AF37] to-lp-accent my-6" />
              <p className="text-[14px] leading-[2] text-text-light">
                テンプレートに沿って進めば十分です。経験・知識・資格は不要。法務・税務・教育まで、プロチームが全面コンサルします。
              </p>
            </FadeSlide>
          </div>
          <StaggerChildren staggerMs={150} className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />,
                title: "最短最速で起業",
                desc: "1年以内に社長へ育成。\nテンプレートで圧倒的スピード。",
                accent: "bg-yellow-50",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                title: "再現性がエグイ",
                desc: "実業のFCテンプレート。\n猿でも出来る簡単さ。",
                accent: "bg-green-50",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
                title: "プロチームが指南",
                desc: "経営のプロが全面コンサル。\n法務・税務・教育まで。",
                accent: "bg-blue-50",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard intensity={6} className="h-full">
                  <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_-10px_rgba(11,42,74,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(11,42,74,0.12)] transition-all border border-gray-100 text-center relative overflow-hidden group h-full">
                    <div className={`absolute right-0 top-0 w-32 h-32 ${item.accent} rounded-bl-full -z-10 group-hover:scale-110 transition-transform`} />
                    <div className="w-16 h-16 bg-lp rounded-2xl flex items-center justify-center text-white mx-auto mb-5 shadow-md">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <h3 className="font-bold text-lp text-[18px] mb-3">{item.title}</h3>
                    <p className="text-[13px] text-text-body leading-[1.9] whitespace-pre-line">{item.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA 2 */}
      <CtaBannerCard />

      {/* ===== 3つの特徴 ===== */}
      <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f7f9fc 0%, #eef3f9 100%)" }}>
        <div className="absolute inset-0 lp-dots-pattern opacity-50" />
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">03 — WHY SARUDEMO</span>
            </div>
            <h2 className="font-bold text-lp text-[26px] md:text-[36px] leading-[1.5]">
              SARUDEMOが<span className="text-lp-accent lp-marker">選ばれる</span>理由
            </h2>
          </FadeSlide>
          <StaggerChildren staggerMs={200} className="grid lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { num: "01", title: "起業のファストパス", highlight: "1年以内に社長へ", dark: false },
              { num: "02", title: "脱サラなんて当たり前", highlight: "年商1億円を目標", dark: false },
              { num: "03", title: "プロチームが全面支援", highlight: "経営のプロがコンサル", dark: true },
            ].map((s) => (
              <StaggerItem key={s.num}>
                <TiltCard intensity={5}>
                  <div className={`relative group ${s.dark ? "bg-gradient-to-br from-lp to-[#061729] shadow-[0_20px_40px_-10px_rgba(11,42,74,0.3)]" : "bg-white border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)]"} p-10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300`}>
                    <span className={`lp-bg-number top-[-20px] right-[10px] ${s.dark ? "!text-white/5" : ""}`} style={{ fontSize: "140px" }}>{s.num}</span>
                    {s.dark && <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 rounded-bl-full blur-xl" />}
                    <div className="relative z-10">
                      <h3 className={`text-[20px] font-bold ${s.dark ? "text-white" : "text-lp"} mb-3 flex flex-col gap-2`}>
                        <span className={`text-[12px] font-[Inter] ${s.dark ? "text-[#D4AF37]" : "text-lp-accent"} tracking-wider font-bold`}>REASON {s.num}</span>
                        {s.title}
                      </h3>
                      <p className={`text-[16px] ${s.dark ? "text-white/80" : "text-text-body"} font-medium`}>{s.highlight}</p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <LineDivider />

      {/* ===== 報酬モデル ===== */}
      <section className="py-28 lg:py-36 bg-white relative">
        <div className="absolute inset-0 lp-lines-pattern opacity-30" />
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">04 — REVENUE MODEL</span>
            </div>
            <h2 className="font-bold text-lp text-[26px] md:text-[36px] leading-[1.5] mb-4">
              起業後の<span className="text-lp-accent lp-marker">報酬モデル</span>
            </h2>
            <p className="text-[14px] text-text-body">多彩な収益チャネルで、安定と成長を両立。</p>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mb-6">
            {[
              { title: "権利収入", sub: "EC / 人材 / ビザ等", amount: "100〜300万円/月", icon: "💰" },
              { title: "人材派遣", sub: "BPO / アフィリエイト", amount: "100〜300万円/月", icon: "👥" },
              { title: "物件オーナー", sub: "民泊 / 店舗 / 事業所", amount: "100〜300万円/月", icon: "📈" },
              { title: "資金調達", sub: "デット / エクイティ", amount: "1000万円以上", icon: "🏦" },
              { title: "申請支援", sub: "補助金 / 助成金", amount: "1000万円以上", icon: "📋" },
              { title: "自社事業", sub: "好きなことを自由に", amount: "無限大", icon: "🚀", accent: true },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard intensity={4}>
                  <div className={`${item.accent ? "bg-gradient-to-br from-lp to-[#1a4f7a] shadow-[0_10px_30px_-10px_rgba(11,42,74,0.2)]" : "bg-white shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)]"} p-6 rounded-2xl text-center transition-all border border-gray-100`}>
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className={`font-bold ${item.accent ? "text-white" : "text-lp"} mb-1 text-[15px]`}>{item.title}</h3>
                    <p className={`text-[11px] ${item.accent ? "text-white/60" : "text-text-light"} leading-[1.7] mb-2`}>{item.sub}</p>
                    <p className={`font-bold font-[Inter] text-[16px] ${item.accent ? "text-[#D4AF37]" : "text-lp-accent"}`}>{item.amount}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeSlide direction="up">
            <p className="text-[12px] text-text-light text-right">※ 報酬金額はあくまで目安です。成果により変動します。</p>
          </FadeSlide>
        </div>
      </section>

      {/* CTA 3 */}
      <CtaBannerPremium />

      {/* ===== コミュニティ ===== */}
      <section
        className="py-24 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #061729 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lp-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cta/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-[1100px] mx-auto px-6 relative z-10 text-center">
          <FadeSlide direction="up">
            <div className="lp-section-counter justify-center text-white/30 mb-6">
              <span className="font-[Inter] font-bold text-[12px] tracking-[0.3em]">COMMUNITY</span>
            </div>
            <h2 className="font-bold text-white text-[26px] md:text-[40px] leading-[1.4]">
              ただの起業じゃ終わらない。
              <br />
              <span className="bg-gradient-to-r from-lp-accent to-lp-sky bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>&ldquo;Zeroichi Home&rdquo;</span>という、青春。
            </h2>
          </FadeSlide>
          <StaggerChildren staggerMs={120} className="mt-5 md:mt-6 mx-auto max-w-[820px] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-fr">
            {[
              { emoji: "🎬", title: "独自ツール", desc: "一流のIT顧問監修" },
              { emoji: "🎉", title: "楽しい行事", desc: "BBQ・旅行など" },
              { emoji: "⚽", title: "チーム所属", desc: "仲間と切磋琢磨" },
              { emoji: "🎁", title: "福利厚生", desc: "会員限定特典" },
            ].map((c) => (
              <StaggerItem key={c.title} className="h-full">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-2xl text-center hover:bg-white/20 transition-colors h-full flex flex-col items-center justify-center">
                  <div className="text-3xl mb-2 leading-none">{c.emoji}</div>
                  <h4 className="font-bold text-white text-[16px]">{c.title}</h4>
                  <p className="text-white/40 text-[11px] mt-1">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== 顧問紹介 ===== */}
      <section className="py-28 lg:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-dots-pattern opacity-40" />
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">05 — ADVISOR</span>
            </div>
            <h2 className="font-bold text-lp text-[26px] md:text-[36px] leading-[1.5]">顧問紹介</h2>
          </FadeSlide>
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
            <FadeSlide direction="left" className="w-full md:w-1/2">
              <div className="bg-bg-section rounded-3xl p-8 relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full" />
                <ImageReveal direction="up" className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-5 relative z-10">
                  <Image src="/lp/advisor-kigyo-niki.png" alt="起業ニキ" width={144} height={144} className="w-full h-full object-cover" />
                </ImageReveal>
                <span className="text-[11px] font-bold text-white bg-gradient-to-r from-lp to-lp-accent px-4 py-1 rounded-full mb-2 inline-block">SARUDEMO 顧問</span>
                <h3 className="font-bold text-lp text-[22px] mb-2 mt-2">起業ニキ</h3>
                <p className="text-[#D4AF37] font-bold text-[14px]">ゼロから年商1億円へ。</p>
              </div>
            </FadeSlide>
            <FadeSlide direction="right" className="w-full md:w-1/2 relative">
              <div className="absolute left-[16px] top-[24px] bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37] to-lp-accent/10" />
              <div className="flex flex-col gap-8 relative z-10 pl-12">
                {[
                  { color: "bg-gray-300 border-gray-300", label: "絶望から", desc: "19歳で精神病院に2年間入院。退院後、人生の逆転を誓う。" },
                  { color: "bg-white border-[#D4AF37]", label: "下克上", desc: "ホストNo.1、アイドルプロデュース、JAPAN EXPO出演。" },
                  { color: "bg-lp border-white shadow-[0_0_10px_rgba(74,155,217,0.5)]", label: "起業家へ", desc: "初年度年商1億円達成。経営コンサルタントとして50社以上を指導。" },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-[45px] top-1 w-6 h-6 rounded-full ${item.color} border-4 shadow-sm`} />
                    <h4 className="text-[17px] font-bold text-lp mb-2">{item.label}</h4>
                    <p className="text-[14px] text-text-body">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeSlide>
          </div>
        </div>
      </section>

      <LineDivider />

      {/* ===== BizOwner vs SARUDEMO 比較 ===== */}
      <section className="py-28 lg:py-36 bg-bg-section relative">
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">06 — COMPARISON</span>
            </div>
            <h2 className="font-bold text-lp text-[26px] md:text-[36px] leading-[1.5] mb-4">
              BizOwner <span className="font-normal text-text-light text-[20px] mx-2">vs</span> <span className="text-lp-accent font-[Montserrat] tracking-tight">SARUDEMO</span>
            </h2>
            <p className="text-[14px] text-text-body">同じ運営チームが提供する2つのプラン。あなたに合うのはどちら？</p>
          </FadeSlide>
          <FadeSlide direction="up" className="-mx-2 md:mx-0">
            <div className="bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 overflow-x-auto">
              <table className="w-full min-w-[400px] text-[12px] md:text-[14px]">
                <thead>
                  <tr>
                    <th className="text-left p-3 md:p-5 border-b border-gray-100 w-[25%]" />
                    <th className="p-3 md:p-5 bg-gray-50/50 border-b border-gray-100 text-center w-[37%]">
                      <span className="font-[Montserrat] font-bold text-[15px] md:text-[18px] text-lp">BizOwner</span>
                    </th>
                    <th className="p-3 md:p-5 pt-4 md:pt-5 bg-gradient-to-b from-blue-50/50 to-white border-b-2 border-lp-accent text-center w-[38%]">
                      <span className="bg-gradient-to-r from-lp-accent to-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap inline-block mb-1">PREMIUM</span>
                      <br />
                      <span className="font-[Montserrat] font-bold text-[16px] md:text-[20px] text-lp-accent">SARUDEMO</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["コンセプト", "ビジネス素人から\n権利収入", "最短最速で起業"],
                    ["対象", "ビジネス初心者", "CICホワイト"],
                    ["価格", "500万円", "300万円"],
                    ["支払方法", "一括", "クレジットカード可"],
                    ["権利収入", "10,000円/件", "100〜300万円/月"],
                    ["目標", "副収入の確保", "年商1億の大社長"],
                    ["コミュニティ", "月額5万円", "月額5万円"],
                  ].map((row, i, arr) => (
                    <tr key={i} className={i < arr.length - 1 ? "border-b border-gray-50 hover:bg-gray-50/50 transition-colors" : ""}>
                      <td className="p-3 md:p-5 font-bold text-lp whitespace-nowrap">{row[0]}</td>
                      <td className="p-3 md:p-5 text-center text-text-body whitespace-pre-line">{row[1]}</td>
                      <td className="p-3 md:p-5 text-center font-bold text-lp bg-blue-50/10 whitespace-pre-line">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* CTA 4 */}
      <CtaBannerCard />

      {/* ===== 料金 ===== */}
      <section className="py-28 lg:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-lines-pattern opacity-30" />
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">PRICING</span>
            </div>
            <h2 className="font-bold text-lp text-[26px] md:text-[36px] leading-[1.5]">料金構成</h2>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* Main Price */}
              <div className="md:col-span-3">
                <div className="relative p-[2px] rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #D4AF37, #8B6914, #D4AF37)" }}>
                  <div className="bg-lp p-10 rounded-[22px] text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #061729 100%)" }}>
                    <div className="lp-ribbon-gold lp-ribbon">おすすめ</div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-[80px] mix-blend-screen" />
                    <h3 className="text-[#D4AF37] font-bold text-[18px] mb-4 tracking-widest relative z-10">SARUDEMO契約金</h3>
                    <div className="flex justify-center items-baseline gap-2 mb-2 relative z-10">
                      <span className="font-[Inter] text-[48px] md:text-[64px] font-bold text-white">
                        <CountUp end={3000000} />
                      </span>
                      <span className="text-white/80 font-bold text-[18px]">円</span>
                    </div>
                    <p className="text-white/60 text-[13px] relative z-10">税別</p>
                  </div>
                </div>
              </div>
              {/* Sub Prices */}
              <TiltCard intensity={4}>
                <div className="bg-bg-section p-8 rounded-2xl text-center border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-lp mb-4 text-[14px]">コミュニティ 会費</h3>
                  <div className="flex justify-center items-baseline gap-1">
                    <span className="font-[Inter] text-[28px] font-bold text-lp"><CountUp end={50000} /></span>
                    <span className="text-text-body font-bold text-[13px]">円/月</span>
                  </div>
                  <p className="text-[11px] text-text-light mt-2">Zeroichi Home</p>
                </div>
              </TiltCard>
              <TiltCard intensity={4} className="md:col-span-2">
                <div className="bg-bg-section p-8 rounded-2xl text-center border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-lp mb-4 text-[14px]">2期目以降 顧問料</h3>
                  <div className="flex justify-center items-baseline gap-1">
                    <span className="font-[Inter] text-[28px] font-bold text-lp"><CountUp end={100000} /></span>
                    <span className="text-text-body font-bold text-[13px]">円/月</span>
                  </div>
                  <p className="text-[11px] text-text-light mt-2">※ 1年目は契約金に含まれます</p>
                </div>
              </TiltCard>
            </div>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="bg-gradient-to-r from-cta/10 to-orange-50 border border-cta/20 rounded-2xl p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 lp-shine" />
              <p className="text-cta font-bold text-[14px] md:text-[15px] flex items-center justify-center gap-2 flex-wrap relative z-10">
                <span className="text-[20px]">💰</span>
                資金調達サポートあり。先行者利益のため、金額は随時上昇予定。今がチャンスです。
              </p>
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* ===== 参加フロー ===== */}
      <section className="py-28 md:py-36 bg-bg-section relative">
        <div className="max-w-[700px] mx-auto px-6">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">FLOW</span>
            </div>
            <h2 className="font-bold text-lp text-[26px] md:text-[36px] leading-[1.5]">
              起業までの<span className="text-lp-accent lp-marker">流れ</span>
            </h2>
          </FadeSlide>
          <StaggerChildren staggerMs={150} className="relative pl-6 md:pl-10">
            <div className="absolute left-[27px] md:left-[41px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-lp-accent via-lp to-cta/20 rounded-full" />
            <div className="space-y-10">
              {[
                { title: "公式LINE追加", desc: "まずは公式LINE登録。概要と次のステップをご案内します。", color: "bg-lp-accent" },
                { title: "個別面談・契約", desc: "本部担当者が内容を丁寧に説明。ご納得いただいてからご契約いただけます。", color: "bg-lp" },
                { title: "法人設立・事業スタート", desc: "テンプレートに沿って法人設立。すぐに事業を開始。", color: "bg-lp-accent" },
                { title: "プロチームが全面コンサル", desc: "経営・教育・法務まで、プロチームが事業づくりをコンサルで支えます。", color: "bg-lp" },
                { title: "ビジネスオーナーとして独立", desc: "自分の事業を持つ社長へ。年商1億円を目指す。", last: true, color: "bg-gradient-to-br from-cta to-[#d04f24]" },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="relative flex items-start group">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${item.color} flex items-center justify-center font-[Inter] font-bold text-white text-[16px] relative z-10 shrink-0 border-4 border-white shadow-md ${item.last ? "scale-110" : ""} group-hover:scale-110 transition-transform`}>
                      {i + 1}
                    </div>
                    <div className={`ml-5 md:ml-7 ${item.last ? "bg-lp rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(11,42,74,0.3)]" : "bg-white md:bg-transparent p-5 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none"} flex-grow group-hover:translate-x-2 transition-transform w-full`}>
                      <h3 className={`font-bold ${item.last ? "text-white" : "text-text-dark"} text-[16px] mb-1`}>{item.title}</h3>
                      <p className={`text-[13px] ${item.last ? "text-white/70" : "text-text-light"}`}>{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      <LineDivider />

      {/* ===== Q&A ===== */}
      <section className="py-28 lg:py-36 bg-white relative">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">07 — FAQ</span>
            </div>
            <h2 className="font-bold text-lp text-[26px] md:text-[36px] leading-[1.5]">よくある質問</h2>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="space-y-4 lp-accordion">
            {[
              { q: "BizOwnerとSARUDEMOの違いは何ですか？", a: "同じ運営チームが提供する2つのプランです。BizOwnerはビジネス素人から小さく始めたい方向け、SARUDEMOは本気で起業・独立を目指す方向けです。SARUDEMOは契約金300万円で、より大きな報酬モデルとプロチームによる手厚いサポートが特徴です。" },
              { q: "300万円の投資に見合うリターンはありますか？", a: "権利収入だけで月100〜300万円、営業支援や資金調達を含めるとさらに大きな収益が見込めます。BizOwnerで同等レベルになるには総額500万円以上が必要なため、本気の方にはSARUDEMOがお得です。" },
              { q: "起業経験がゼロでも大丈夫ですか？", a: "はい。SARUDEMOは「猿でも出来る」がコンセプト。実業のフランチャイズテンプレートに沿って進めるだけなので、経験は不要です。経営のプロチームが全面コンサルします。" },
              { q: "資金調達のサポートはありますか？", a: "はい。個人・法人の各種融資や投資家のご紹介など、多角的な資金調達をサポートいたします。" },
              { q: "契約期間はどれくらいですか？", a: "契約期間は1年間です。2期目以降は顧問料として月額10万円がかかりますが、その分プロチームの継続サポートを受けられます。" },
              { q: "途中で解約できますか？", a: "はい、いつでも解約可能です。違約金や引き止めは一切ありません。" },
            ].map((faq, i) => (
              <StaggerItem key={i}>
                <details className="group bg-bg-section rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 font-bold text-lp text-[14px] md:text-[16px] hover:bg-gray-50 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-lp-accent font-[Inter] font-bold">Q.</span>
                      {faq.q}
                    </span>
                  </summary>
                  <div className="p-5 md:p-6 pt-0 text-[14px] text-text-body leading-[2] border-t border-gray-50">
                    <span className="text-cta font-bold font-[Inter]">A.</span> {faq.a}
                  </div>
                </details>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== 最終CTA ===== */}
      <section
        className="relative py-36 md:py-48 overflow-hidden text-center"
        style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #061729 100%)" }}
      >
        <div className="absolute inset-0 lp-dots-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lp-accent/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up">
            <p className="font-[Inter] font-bold text-[#D4AF37] text-[12px] tracking-[0.3em] mb-6 uppercase">Start your journey</p>
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: "clamp(30px,5.5vw,56px)", lineHeight: 1.3 }}
            >
              あなたも、<br />
              <span className="bg-gradient-to-r from-cta to-orange-400 bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>社長</span>になる。
            </h2>
            <p className="text-white/50 text-[15px] leading-[2] mb-12 max-w-lg mx-auto">
              最短最速で起業。テンプレート × プロチームで、再現性のある成功を。
              <br className="hidden md:block" />
              まずはLINE登録して、SARUDEMOの全貌をご確認ください。
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn lp-shine text-[18px] md:text-[22px] px-12 md:px-16 py-6 md:py-7 shadow-[0_0_40px_rgba(232,93,47,0.4)] hover:shadow-[0_0_60px_rgba(232,93,47,0.6)] hover:scale-105 transition-all">
              <LineIcon className="w-7 h-7 md:w-8 md:h-8" />
              1ヶ月無料でLINE登録する
            </a>
            <p className="text-white/30 text-[12px] mt-8 leading-[1.8]">
              ※ 解約自由・しつこい勧誘は一切ありません<br />
              ※ LINE登録は無料です
            </p>
          </FadeSlide>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#04101A] py-12 text-white/50 border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-[Montserrat] font-bold text-[20px] text-white/80 tracking-widest">SARUDEMO</div>
            <div className="flex gap-6 text-[12px] font-medium">
              <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
              <Link href="/services" className="hover:text-white transition-colors">サービス一覧</Link>
              <Link href="/#contact" className="hover:text-white transition-colors">お問い合わせ</Link>
            </div>
          </div>
          <p className="text-white/20 text-[11px] text-center mt-8 font-[Inter]">&copy; 2026 SARUDEMO. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
