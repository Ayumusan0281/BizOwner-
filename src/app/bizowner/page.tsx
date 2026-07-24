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
  title: "BizOwner｜ビジネス素人から会社のオーナーに",
};

/* メインCV：公式LINE追加。全CTAの遷移先 */
const LINE_URL = "https://utage-system.com/line/open/yjGgUvxEA3oy";

/* ── CTA Banner (variation A - full width) ── */
function CtaBannerFull() {
  return (
    <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #1a4f7a 50%, #0b2a4a 100%)" }}>
      <div className="absolute inset-0 lp-dots-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cta/20 rounded-full blur-[100px]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <p className="text-white/60 text-[13px] font-bold mb-4 tracking-wider">＼ 今すぐ無料で始める ／</p>
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[16px] md:text-[18px] px-10 py-5">
          <LineIcon className="w-6 h-6" />
          1ヶ月無料でLINE登録する
        </a>
        <p className="mt-4 text-[13px] text-white/50 font-medium">※ 解約自由・しつこい勧誘なし</p>
      </div>
    </section>
  );
}

/* ── CTA Banner (variation B - card style) ── */
function CtaBannerCard() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="lp-gradient-border">
          <div className="bg-white py-8 px-6 md:px-10 text-center">
            <p className="text-lp font-bold text-[18px] md:text-[22px] mb-2">まずは無料で体験してみませんか？</p>
            <p className="text-text-light text-[13px] mb-6">1ヶ月無料・解約自由。リスクゼロで始められます。</p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[15px] md:text-[16px] px-8 py-4">
              <LineIcon className="w-5 h-5" />
              LINE登録して無料体験する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Marquee Banner ── */
function MarqueeBanner() {
  const items = ["ビジネス素人から会社のオーナーに", "月額50,000円から", "知識ゼロ・経験ゼロでOK", "権利収入で未来を変える", "ビジネス初心者でも参加可能", "1ヶ月無料キャンペーン中"];
  const doubled = [...items, ...items];
  return (
    <div className="bg-lp py-4 overflow-hidden">
      <div className="lp-marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-8 text-[14px] md:text-[16px] font-bold text-white/80 whitespace-nowrap">
            {item}
            <span className="text-lp-accent opacity-50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BizOwnerPage() {
  return (
    <div className="font-sans text-text-body bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-white">
        {/* Logo (top-left) */}
        <Link
          href="#"
          aria-label="BizOwner"
          className="absolute top-4 left-4 md:top-6 md:left-8 z-30 inline-flex items-center"
        >
          <Image
            src="/lp/bizowner-logo.png"
            alt="BizOwner"
            width={400}
            height={400}
            priority
            className="h-12 md:h-14 w-auto select-none"
          />
        </Link>
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 lp-dots-pattern" />
        {/* Floating blobs */}
        <div className="absolute top-[-10%] -left-[10%] w-96 h-96 bg-lp-sky rounded-full mix-blend-multiply blur-[80px] opacity-70 blob-float pointer-events-none" />
        <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-lp-sky rounded-full mix-blend-multiply blur-[80px] opacity-50 blob-float-delay pointer-events-none" />
        <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-gray-100 rounded-full mix-blend-multiply blur-[80px] opacity-50 blob-float-delay-2 pointer-events-none" />
        {/* Floating geometric shapes */}
        <div className="absolute top-[15%] right-[15%] w-16 h-16 border-2 border-lp-accent/20 rounded-lg rotate-45 lp-float-slow pointer-events-none hidden lg:block" />
        <div className="absolute bottom-[25%] left-[8%] w-10 h-10 bg-lp-accent/10 rounded-full lp-float-medium pointer-events-none hidden lg:block" />
        <div className="absolute top-[40%] left-[5%] w-3 h-3 bg-cta/30 rounded-full lp-float-slow pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-6 relative z-10 pt-20 pb-32 lg:pt-28 lg:pb-40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-7">
              <FadeSlide direction="up" delay={100}>
                <div className="inline-flex items-center gap-2 bg-white border border-lp-accent/20 px-4 py-2 rounded-full shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cta" />
                  </span>
                  <span className="text-lp font-bold text-[13px]">1ヶ月無料キャンペーン実施中</span>
                </div>
              </FadeSlide>
              <FadeSlide direction="up" delay={300}>
                <h1
                  className="font-bold text-text-dark"
                  style={{ fontSize: "clamp(32px,6vw,56px)", lineHeight: 1.25, letterSpacing: "0.02em" }}
                >
                  ビジネス素人から、
                  <br />
                  会社の<span className="text-lp-accent lp-marker">オーナー</span>になる。
                </h1>
              </FadeSlide>
              <FadeSlide direction="up" delay={500}>
                <p className="text-[16px] md:text-[18px] text-text-body leading-[1.9] max-w-lg">
                  月額50,000円から始める、あなたの権利収入ライフ。
                  <br className="hidden md:block" />
                  知識ゼロ・経験ゼロでもOK。
                </p>
              </FadeSlide>
              <FadeSlide direction="up" delay={700}>
                <div className="flex flex-col gap-3">
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[16px] md:text-[18px] w-full max-w-md px-8 py-5 justify-center">
                    <LineIcon className="w-6 h-6" />
                    1ヶ月無料でLINE登録する
                  </a>
                  <p className="text-[13px] text-text-light ml-2">※ 解約自由・しつこい勧誘なし</p>
                </div>
              </FadeSlide>
            </div>
            <FadeSlide direction="right" delay={400}>
              <div className="flex justify-center relative">
                <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-tr from-lp-accent to-lp rounded-2xl rotate-3 scale-[1.02] opacity-10" />
                <ImageReveal immediate direction="right" className="w-[220px] h-[280px] md:w-[360px] md:h-[450px] rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border-4 border-white relative z-10">
                  <Image src="/lp/bizowner-hero.png" alt="BizOwner" width={1024} height={1536} className="w-full h-full object-cover" priority />
                </ImageReveal>
                {/* Floating stats */}
                <div className="absolute -bottom-4 right-3 md:right-6 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 lp-float-slow border border-gray-100">
                  <p className="text-[10px] text-text-light font-medium">月額費用</p>
                  <p className="font-[Inter] font-bold text-lp text-[18px] md:text-[22px]">¥11,000<span className="text-[11px] text-text-light font-normal">/月</span></p>
                </div>
                <div className="absolute -top-2 -right-2 md:-right-6 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 lp-float-medium border border-gray-100">
                  <p className="text-[10px] text-text-light font-medium">初月</p>
                  <p className="font-bold text-cta text-[18px] md:text-[22px]">無料</p>
                </div>
              </div>
            </FadeSlide>
          </div>
        </div>

        {/* Trust numbers bar */}
        <FadeSlide direction="up" delay={900}>
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-100 py-6 z-20">
            <div className="max-w-[900px] mx-auto px-6 lp-trust-bar">
              <div className="lp-trust-item">
                <p className="lp-trust-number"><CountUp end={50} />+</p>
                <p className="text-[11px] text-text-light font-medium mt-1">サポート企業数</p>
              </div>
              <div className="lp-trust-item">
                <p className="lp-trust-number"><CountUp end={98} />%</p>
                <p className="text-[11px] text-text-light font-medium mt-1">会員継続率</p>
              </div>
              <div className="lp-trust-item">
                <p className="lp-trust-number"><CountUp end={6} /></p>
                <p className="text-[11px] text-text-light font-medium mt-1">多彩な案件カテゴリ</p>
              </div>
            </div>
          </div>
        </FadeSlide>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60 z-10">
          <span className="text-[10px] font-[Inter] tracking-[0.2em] font-bold text-lp">SCROLL</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-lp to-transparent" />
        </div>
      </section>

      {/* ===== Marquee ===== */}
      <MarqueeBanner />

      {/* ===== 共感パート ===== */}
      <section
        className="relative py-28 md:py-36 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0b2a4a 0%, #132d4a 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center text-white/40">
              <span className="font-[Inter] font-bold text-[12px] tracking-[0.3em]">01 — ANXIETY</span>
            </div>
            <h2 className="font-bold text-white text-[26px] md:text-[36px] leading-[1.5]">
              こんな<span className="text-lp-accent lp-marker">お悩み</span>ありませんか？
            </h2>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="max-w-3xl mx-auto space-y-4">
            {[
              "副業を始めたいけど、何から手をつければいいか分からない",
              "ビジネスの知識がゼロで、失敗するのが怖い",
              "一人だとモチベーションが続かない",
              "会社の給料だけじゃ将来が不安",
              "起業には憧れるけど、リスクを取るのは怖い",
            ].map((text, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-5 lp-glass-dark rounded-2xl p-6 border border-white/10 hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z" />
                    </svg>
                  </div>
                  <p className="text-[15px] md:text-[16px] font-bold text-white/90 leading-[1.8]">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeSlide direction="up" className="text-center mt-16">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6">
              <p className="text-white font-bold text-[20px] md:text-[26px] leading-[1.6]">
                そのお悩み、<span className="text-cta lp-marker-orange">BizOwner</span>が解決します。
              </p>
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* CTA 1 */}
      <CtaBannerFull />

      {/* ===== BizOwnerとは ===== */}
      <section className="py-28 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-lines-pattern" />
        <span className="lp-bg-number top-24 left-0">02</span>
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <FadeSlide direction="up">
              <div className="lp-section-counter justify-center">
                <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">02 — ABOUT</span>
              </div>
              <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
                ビジネス素人から、会社経営。
                <br />
                大家さん気分で、<span className="text-lp-accent lp-marker">権利収入</span>。
              </h2>
            </FadeSlide>
          </div>
          <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
            <div className="relative hidden md:block">
              <ImageReveal direction="left" className="rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] relative z-10">
                <Image src="/lp/bizowner-sidework.png" alt="副業イメージ" width={1536} height={1024} className="w-full h-[300px] md:h-[400px] object-cover" />
              </ImageReveal>
            </div>
            <FadeSlide direction="right">
              <p className="text-[16px] md:text-[18px] leading-[2] text-text-body font-medium">
                BizOwnerは、知識・経験・資格一切不要で「会社のオーナー」として権利収入を得る仕組みを提供するビジネスプログラムです。
              </p>
              <div className="w-16 h-[3px] bg-gradient-to-r from-lp-accent to-cta my-6" />
              <p className="text-[14px] leading-[2] text-text-light">
                月額50,000円という低コストで始められ、ビジネス初心者の方でも安心して参加いただけます。本部が伴走するので、初めてでも迷わず一歩を踏み出せます。
              </p>
            </FadeSlide>
          </div>
          <StaggerChildren staggerMs={150} className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
                title: "誰でもOK",
                desc: "年齢・学歴・経験不問。",
                accent: "bg-blue-50",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
                title: "知識不要",
                desc: "専門知識は一切不要。\n本部が全面サポート。",
                accent: "bg-green-50",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "月額50,000円から",
                desc: "低コストで気軽にスタート。\n初月無料・解約自由で安心。",
                accent: "bg-orange-50",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard intensity={6} className="h-full">
                  <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] transition-all relative overflow-hidden h-full group">
                    <div className={`absolute top-0 right-0 w-28 h-28 ${item.accent} rounded-bl-full -mr-4 -mt-4 opacity-60 z-0 group-hover:scale-110 transition-transform`} />
                    <div className="w-16 h-16 rounded-2xl bg-lp flex items-center justify-center mx-auto mb-5 relative z-10 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <h3 className="font-bold text-text-dark text-[18px] mb-3 relative z-10">{item.title}</h3>
                    <p className="text-[13px] text-text-light leading-[1.9] whitespace-pre-line relative z-10">{item.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA 2 */}
      <CtaBannerCard />

      {/* ===== 3ステップ ===== */}
      <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f7f9fc 0%, #eef3f9 100%)" }}>
        <div className="absolute inset-0 lp-dots-pattern opacity-50" />
        <span className="lp-bg-number top-12 right-12">03</span>
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">03 — HOW IT WORKS</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              3ステップで<span className="text-lp-accent lp-marker">稼ぐ</span>仕組み
            </h2>
          </FadeSlide>
          <StaggerChildren staggerMs={200} className="grid md:grid-cols-3 gap-8 pt-8">
            {[
              { step: "01", title: "まずは面談", desc: "無料で会員登録。\n内容を理解した上で、\n権利収入の下準備をスタート", price: "月額50,000円", accent: false },
              { step: "02", title: "法人で権利収入", desc: "法人を作成し、利益が発生開始。\n収益チャネルが倍増し、\n権利収入が加速。", price: "+500,000円で法人作成", accent: false },
              { step: "03", title: "FC化で独立", desc: "フランチャイズオーナーとして\n完全独立。自分のチームを持ち、\n本格的なビジネスオーナーへ。", price: "FC加盟 500万円", accent: true },
            ].map((s, i) => (
              <StaggerItem key={s.step}>
                <TiltCard intensity={5} className="h-full">
                  <div className={`relative bg-white pt-14 pb-8 px-7 rounded-2xl ${s.accent ? "border-2 border-cta/30 shadow-[0_20px_50px_-10px_rgba(232,93,47,0.15)]" : "border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]"} text-center mt-8 md:mt-0 h-full`}>
                    {s.accent && <div className="lp-ribbon">おすすめ</div>}
                    <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 ${s.accent ? "bg-gradient-to-br from-cta to-[#d04f24]" : "bg-lp"} rounded-full flex items-center justify-center border-4 border-white shadow-lg`}>
                      <span className="font-[Inter] font-bold text-[22px] text-white">{s.step}</span>
                    </div>
                    {/* Arrow connector */}
                    {i < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-6 z-20">
                        <svg className="w-6 h-6 text-lp-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                      </div>
                    )}
                    <h3 className={`font-bold ${s.accent ? "text-cta" : "text-text-dark"} text-[18px] mb-3 mt-2`}>{s.title}</h3>
                    <p className="text-[13px] text-text-body leading-[1.9] whitespace-pre-line mb-5">{s.desc}</p>
                    <div className={`${s.accent ? "bg-gradient-to-r from-cta to-[#d04f24] text-white" : "bg-lp-sky text-lp"} py-3 px-4 rounded-xl text-[14px] font-bold`}>
                      {s.price}
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <LineDivider />

      {/* ===== 案件一覧 ===== */}
      <section className="py-28 md:py-36 bg-white relative">
        <span className="lp-bg-number top-0 left-0">04</span>
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">04 — BUSINESS LINEUP</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5] mb-4">
              多彩な<span className="text-lp-accent lp-marker">案件</span>で稼ぐ
            </h2>
            <p className="text-[14px] text-text-body">あなたに合った案件を自由に選べます。</p>
          </FadeSlide>
          <StaggerChildren staggerMs={80} className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { title: "人材アカウント", sub: "Indeed / エアワーク等", icon: "👥" },
              { title: "ECショップ", sub: "メルカリ / 楽天市場等", icon: "🛒" },
              { title: "権利運用", sub: "ビザ / 派遣 / 物販等", icon: "📊" },
              { title: "補助金・助成金", sub: "行政申請サポート", icon: "📋" },
              { title: "物件オーナー", sub: "民泊 / 店舗 / 事業所", icon: "💡" },
              { title: "夢の事業", sub: "やりたいビジネスを支援", icon: "🚀", accent: true },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard intensity={4}>
                  <div className={`rounded-2xl p-6 md:p-7 border hover-card text-center group ${item.accent ? "bg-gradient-to-br from-lp to-[#1a4f7a] border-lp/20 shadow-[0_10px_30px_-10px_rgba(11,42,74,0.2)]" : "bg-white border-gray-100 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]"}`}>
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className={`font-bold text-[15px] mb-1 ${item.accent ? "text-white" : "text-text-dark"}`}>{item.title}</h3>
                    <p className={`text-[12px] leading-[1.7] ${item.accent ? "text-white/60" : "text-text-light"}`}>{item.sub}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== コミュニティ ===== */}
      <section
        className="py-32 md:py-40 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #1a4f7a 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lp-accent/10 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cta/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
        <div className="max-w-[1100px] mx-auto px-6 relative z-10 text-center">
          <FadeSlide direction="up">
            <div className="lp-section-counter justify-center text-white/30 mb-6">
              <span className="font-[Inter] font-bold text-[12px] tracking-[0.3em]">COMMUNITY</span>
            </div>
            <h2 className="font-bold text-white text-[26px] md:text-[40px] leading-[1.4] mb-6">
              権利収入だけじゃ終わらない。
              <br />
              <span className="text-lp-accent">&ldquo;Zeroichi Home&rdquo;</span>
              <br className="md:hidden" />
              という、青春。
            </h2>
            <p className="text-white/60 text-[15px] leading-[2] max-w-lg mx-auto">
              BizOwner会員は「Zeroichi Home」コミュニティに参加可能。
              ビジネスだけじゃない、仲間と楽しむ場がここにあります。
            </p>
          </FadeSlide>
          <StaggerChildren staggerMs={120} className="mt-5 md:mt-6 mx-auto max-w-[820px] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-fr">
            {[
              { emoji: "🎬", title: "独自ツール", desc: "一流のIT顧問監修" },
              { emoji: "🎉", title: "楽しい行事", desc: "BBQ・旅行など" },
              { emoji: "⚽", title: "チーム所属", desc: "仲間と切磋琢磨" },
              { emoji: "🎁", title: "福利厚生", desc: "会員限定特典" },
            ].map((c) => (
              <StaggerItem key={c.title} className="h-full">
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/20 transition-all group h-full flex flex-col items-center text-center justify-center">
                  <span className="text-2xl block mb-2 leading-none">{c.emoji}</span>
                  <span className="font-bold text-white text-[15px] block leading-tight">{c.title}</span>
                  <span className="text-white/40 text-[11px] mt-1">{c.desc}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA 3 */}
      <CtaBannerFull />

      {/* ===== 顧問紹介 ===== */}
      <section className="py-28 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-dots-pattern opacity-40" />
        <span className="lp-bg-number top-0 right-0">05</span>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">05 — ADVISOR</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">顧問紹介</h2>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="bg-bg-section rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-lp-accent/5 rounded-bl-full" />
              <div className="flex flex-col items-center text-center shrink-0 relative z-10">
                <ImageReveal direction="up" className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                  <Image src="/lp/advisor-kigyo-niki.png" alt="起業ニキ" width={128} height={128} className="w-full h-full object-cover" />
                </ImageReveal>
                <span className="text-[11px] font-bold text-white bg-gradient-to-r from-lp to-lp-accent px-4 py-1 rounded-full mb-2">BizOwner 顧問</span>
                <h3 className="font-bold text-text-dark text-[22px] mb-1">起業ニキ</h3>
                <p className="text-cta font-bold text-[13px]">ゼロから年商1億円へ。</p>
              </div>
              <div className="relative w-full border-l-2 border-lp-sky pl-6 md:pl-8 space-y-7 py-4">
                {[
                  { color: "bg-gray-300", label: "絶望から", desc: "19歳で精神病院に2年間入院。退院後、人生の逆転を誓う。" },
                  { color: "bg-lp-accent", label: "下克上", desc: "ホストNo.1、アイドルプロデュース、JAPAN EXPO出演。" },
                  { color: "bg-cta", label: "起業家へ", desc: "初年度年商1億円達成。経営コンサルタントとして50社以上を指導。" },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-[31px] md:-left-[35px] top-1 w-4 h-4 rounded-full ${item.color} border-2 border-white shadow-sm`} />
                    <h4 className="font-bold text-text-dark mb-1">{i + 1}. {item.label}</h4>
                    <p className="text-[14px] text-text-body leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeSlide>
        </div>
      </section>

      <LineDivider />

      {/* ===== 他社比較 ===== */}
      <section className="py-28 md:py-36 bg-bg-section relative">
        <span className="lp-bg-number top-48 left-12">06</span>
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">06 — COMPARISON</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              他社との<span className="text-lp-accent lp-marker">比較</span>
            </h2>
          </FadeSlide>
          <FadeSlide direction="up" className="-mx-2 md:mx-0">
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 overflow-x-auto">
              <table className="w-full min-w-[520px] text-[12px] md:text-[14px]">
                <thead>
                  <tr>
                    <th className="text-left p-3 md:p-5 bg-gray-50/50 font-bold text-text-dark border-b border-gray-100 w-[20%]" />
                    <th className="p-3 md:p-5 pt-4 md:pt-5 bg-gradient-to-b from-orange-50 to-white text-cta font-bold text-center border-b-2 border-cta text-[14px] md:text-[16px] w-[30%]">
                      <span className="bg-cta text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap inline-block mb-1">おすすめ</span>
                      <br />
                      BizOwner
                    </th>
                    <th className="p-3 md:p-5 bg-white font-bold text-text-dark text-center border-b border-gray-100 w-[25%]">
                      <span className="hidden md:inline">一般的な起業塾</span>
                      <span className="md:hidden">起業塾</span>
                    </th>
                    <th className="p-3 md:p-5 bg-white font-bold text-text-dark text-center border-b border-gray-100 w-[15%]">独学</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "初期費用", biz: "月額50,000円", other: "30〜100万円", self: "0円〜" },
                    { label: "知識・経験", biz: "不要", other: "ある程度必要", self: "自力で習得" },
                    { label: "サポート", biz: "本部が全面支援", other: "講師による指導", self: "なし" },
                    { label: "収益化", biz: "法人作成後、すぐに利益", other: "数ヶ月後", self: "不確定" },
                    { label: "コミュニティ", biz: "あり", other: "期間限定", self: "なし" },
                  ].map((row, i) => (
                    <tr key={i} className={i < 4 ? "border-b border-gray-50" : ""}>
                      <td className="p-3 md:p-5 font-bold text-text-dark bg-gray-50/50 whitespace-nowrap">{row.label}</td>
                      <td className="p-3 md:p-5 text-center bg-orange-50/30 font-bold text-cta">{row.biz}</td>
                      <td className="p-3 md:p-5 text-center bg-white text-text-body">{row.other}</td>
                      <td className="p-3 md:p-5 text-center bg-white text-text-body">{row.self}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* ===== 料金 ===== */}
      <section className="py-28 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-lines-pattern opacity-30" />
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">PRICING</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">料金プラン</h2>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="bg-gradient-to-r from-cta to-[#d04f24] text-white text-center py-6 px-8 rounded-2xl mb-12 shadow-lg font-bold text-[18px] md:text-[22px] -rotate-1 hover:rotate-0 transition-transform border border-white/20 lp-shine relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPgo8L3N2Zz4=')] opacity-50" />
              <span className="relative z-10">🎉 今なら<span className="text-yellow-300 text-[26px] mx-1">1</span>ヶ月無料！いつでも解約OK。まずはお試しください。</span>
            </div>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { label: "ご利用料金", price: 50000, unit: "円", sub: "/月（税込）", highlight: true },
              { label: "法人作成費用", price: 500000, unit: "円", sub: "一括" },
              { label: "FC加盟料金", price: 500, unit: "万円", sub: "一括" },
              { label: "サークル等費用", price: 0, unit: "", sub: "各サークルによる", isText: true },
            ].map((p) => (
              <StaggerItem key={p.label}>
                <TiltCard intensity={4}>
                  <div className={`bg-white rounded-2xl p-6 text-center border ${p.highlight ? "border-2 border-lp-accent/30 shadow-[0_10px_30px_-10px_rgba(74,155,217,0.15)]" : "border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"} relative`}>
                    {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lp-accent text-white text-[10px] font-bold px-3 py-1 rounded-full">基本</div>}
                    <p className="text-[12px] text-text-light font-bold mb-3 mt-1">{p.label}</p>
                    <p className="text-text-dark font-bold text-[28px] leading-none mb-1">
                      {p.isText ? (
                        "団長決定"
                      ) : p.highlight ? (
                        <span className="text-lp-accent"><CountUp end={p.price} /></span>
                      ) : (
                        <CountUp end={p.price} />
                      )}
                      <span className="text-[14px] text-gray-400">{p.unit}</span>
                    </p>
                    <p className="text-text-light text-[12px]">{p.sub}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA 4 */}
      <CtaBannerFull />

      {/* ===== 参加フロー ===== */}
      <section className="py-28 md:py-36 bg-white relative">
        <div className="max-w-[700px] mx-auto px-6">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">FLOW</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              参加までの<span className="text-lp-accent lp-marker">流れ</span>
            </h2>
          </FadeSlide>
          <StaggerChildren staggerMs={150} className="relative pl-6 md:pl-10">
            <div className="absolute left-[27px] md:left-[41px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-lp-accent via-lp to-cta/20 rounded-full" />
            <div className="space-y-10">
              {[
                { title: "公式LINE追加", desc: "まずはLINE登録。個別面談でサービス内容を確認。" },
                { title: "個人情報・決済フォーム入力", desc: "納得いただけたら、簡単なフォーム入力で登録完了。" },
                { title: "専属コンサルタントの案内のもと実施", desc: "法人を作る下準備をスタート。" },
                { title: "法人作成を本部へ依頼", desc: "法人を使って、収益を拡大。" },
                { title: "FC加盟で完全独立", desc: "フランチャイズオーナーとして、ビジネスオーナーへ。", last: true },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="relative flex items-start group">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${item.last ? "bg-gradient-to-br from-cta to-[#d04f24] shadow-[0_4px_20px_rgba(232,93,47,0.3)] scale-110" : "bg-white border-2 border-lp-accent"} flex items-center justify-center font-[Inter] font-bold ${item.last ? "text-white" : "text-lp-accent"} text-[16px] relative z-10 shrink-0 group-hover:scale-110 transition-transform`}>
                      {i + 1}
                    </div>
                    <div className="ml-5 md:ml-7 bg-bg-section md:bg-transparent p-5 md:p-0 rounded-xl md:rounded-none flex-grow group-hover:translate-x-2 transition-transform">
                      <h3 className="font-bold text-text-dark text-[16px] mb-1">{item.title}</h3>
                      <p className="text-[13px] text-text-light">{item.desc}</p>
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
      <section className="py-28 md:py-36 bg-bg-section relative">
        <span className="lp-bg-number bottom-0 right-0">07</span>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">07 — FAQ</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">よくある質問</h2>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="space-y-4 lp-accordion">
            {[
              { q: "作った法人は自由に使って良いですか？", a: "作成した法人は、BizOwnerが許可した案件にてご利用いただけます。基本的には本部案件にご活用ください。" },
              { q: "新しくサークルを作ってもいいですか？", a: "もちろんです。Zeroichi Homeではメンバー発信のサークルを歓迎しています。" },
              { q: "BizOwnerの進め方は？", a: "専属コンサルタントの案内に従ってください。" },
              { q: "個別の質疑応答はどこでできますか？", a: "週1回、個別コンサルを受けられる権限をご用意しています。そちらで個別のご質問にお答えしますので、ぜひご活用ください。" },
              { q: "本当に知識ゼロでも大丈夫ですか？", a: "はい。本部のサポートの上で行うため、誰でも権利収入を得られます。" },
              { q: "途中で解約できますか？", a: "はい、いつでも解約可能です。違約金や引き止めは一切ありません。" },
            ].map((faq, i) => (
              <StaggerItem key={i}>
                <details className="group bg-white rounded-2xl border border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.03)] overflow-hidden">
                  <summary className="flex items-center justify-between p-5 md:p-6 font-bold text-text-dark text-[14px] md:text-[15px] hover:bg-gray-50 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-lp-accent font-[Inter] font-bold">Q.</span>
                      {faq.q}
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-[14px] text-text-body leading-[2] border-t border-gray-50 pt-4">
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
        className="relative py-36 md:py-48 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0b2a4a 0%, #05162b 100%)" }}
      >
        <div className="absolute inset-0 lp-dots-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lp-accent/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cta/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
          <FadeSlide direction="up">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em] mb-6 uppercase">Start your journey</p>
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: "clamp(30px,5.5vw,52px)", lineHeight: 1.3 }}
            >
              あなたも、<br />
              <span className="bg-gradient-to-r from-lp-accent to-lp-sky bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>オーナー</span>になる。
            </h2>
            <p className="text-white/50 text-[15px] leading-[2] mb-12 max-w-lg mx-auto">
              ビジネス素人から会社経営。知識ゼロから始める権利収入。
              <br className="hidden md:block" />
              まずは無料でLINE登録して、詳しい情報を受け取ってください。
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn lp-shine text-[18px] px-12 py-6 shadow-[0_0_40px_rgba(232,93,47,0.4)] hover:shadow-[0_0_60px_rgba(232,93,47,0.6)] hover:-translate-y-1 transition-all">
              <LineIcon className="w-7 h-7" />
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
      <footer className="bg-[#030e1c] py-12 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-[Montserrat] font-bold text-white/80 text-[18px] tracking-tight">BizOwner<span className="text-lp-accent">.</span></p>
            </div>
            <div className="flex gap-6 text-[12px] text-white/40 font-medium">
              <Link href="/" className="hover:text-white/70 transition-colors">ホーム</Link>
              <Link href="/services" className="hover:text-white/70 transition-colors">サービス一覧</Link>
              <Link href="/#contact" className="hover:text-white/70 transition-colors">お問い合わせ</Link>
            </div>
          </div>
          <p className="text-white/20 text-[11px] text-center mt-8 font-[Inter]">&copy; 2026 BizOwner. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
