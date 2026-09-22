import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeSlide from "@/components/manabiya/FadeSlide";
import StaggerChildren, { StaggerItem } from "@/components/manabiya/StaggerChildren";
import TiltCard from "@/components/manabiya/TiltCard";
import LineDivider from "@/components/lp/LineDivider";
import LineIcon from "@/components/LineIcon";
import ImageReveal from "@/components/lp/ImageReveal";

export const metadata: Metadata = {
  title: "HitoHoshi｜「不採用」をコストで終わらせない",
};

/* メインCV：公式LINE追加。全CTAの遷移先 */
/* TODO: HitoHoshi専用公式LINEのURL発行後に差し替え（営業資料に「本件専用の公式LINE」と記載あり、URL未確定） */
const LINE_URL = "#contact";

/* ── CTA Banner (variation A - full width) ── */
function CtaBannerFull() {
  return (
    <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #1a4f7a 50%, #0b2a4a 100%)" }}>
      <div className="absolute inset-0 lp-dots-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cta/20 rounded-full blur-[100px]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <p className="text-white/60 text-[13px] font-bold mb-4 tracking-wider">＼ まずはお気軽にご相談ください ／</p>
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[16px] md:text-[18px] px-10 py-5">
          <LineIcon className="w-6 h-6" />
          公式LINEで相談する
        </a>
        <p className="mt-4 text-[13px] text-white/50 font-medium">※ 初期費用0円・まずはお気軽にご相談ください</p>
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
            <p className="text-lp font-bold text-[18px] md:text-[22px] mb-2">貴社の採用状況をお伺いしたうえで、最適な導入プランをご提案します。</p>
            <p className="text-text-light text-[13px] mb-6">お問い合わせはHitoHoshi公式LINEからお気軽にご連絡ください。</p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[15px] md:text-[16px] px-8 py-4">
              <LineIcon className="w-5 h-5" />
              公式LINEで無料相談する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Marquee Banner ── */
function MarqueeBanner() {
  const items = ["「不採用」をコストで終わらせない", "採用代行", "不採用人材の再活用", "固定費は月額10,000円のみ", "初期費用0円", "成果報酬型", "全国起業家協会運営"];
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

export default function HitoHoshiPage() {
  return (
    <div className="font-sans text-text-body bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-white">
        {/* Logo (top-left) */}
        <Link
          href="#"
          aria-label="HitoHoshi"
          className="absolute top-4 left-4 md:top-6 md:left-8 z-30 inline-flex items-center"
        >
          <Image
            src="/lp/hitohoshi-logo.png"
            alt="HitoHoshi"
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
                  <span className="text-lp font-bold text-[13px]">初期費用0円・固定費は月額10,000円のみ</span>
                </div>
              </FadeSlide>
              <FadeSlide direction="up" delay={300}>
                <h1
                  className="font-bold text-text-dark"
                  style={{ fontSize: "clamp(32px,6vw,56px)", lineHeight: 1.35, letterSpacing: "0.02em" }}
                >
                  「不採用」を、
                  <br />
                  <span className="text-lp-accent lp-marker">コストで終わらせない</span>。
                </h1>
              </FadeSlide>
              <FadeSlide direction="up" delay={500}>
                <p className="text-[16px] md:text-[18px] text-text-body leading-[1.9] max-w-lg">
                  採用アカウントの運用代行と、選考で出会った人材の「その後」までを引き受ける、
                  <br className="hidden md:block" />
                  企業向けの新しい採用パートナーです。
                </p>
              </FadeSlide>
              <FadeSlide direction="up" delay={700}>
                <div className="flex flex-col gap-3">
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[16px] md:text-[18px] w-full max-w-md px-8 py-5 justify-center">
                    <LineIcon className="w-6 h-6" />
                    公式LINEで相談する
                  </a>
                  <p className="text-[13px] text-text-light ml-2">※ 初期費用0円・まずはお気軽にご相談ください</p>
                </div>
              </FadeSlide>
            </div>
            <FadeSlide direction="right" delay={400}>
              <div className="flex justify-center relative">
                <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-tr from-lp-accent to-lp rounded-2xl rotate-3 scale-[1.02] opacity-10" />
                <ImageReveal immediate direction="right" className="w-[220px] h-[280px] md:w-[360px] md:h-[450px] rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border-4 border-white relative z-10">
                  <Image src="/lp/hitohoshi-hero.jpg" alt="HitoHoshi" width={1920} height={1080} className="w-full h-full object-cover" priority />
                </ImageReveal>
                {/* Floating stats */}
                <div className="absolute -bottom-4 right-3 md:right-6 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 lp-float-slow border border-gray-100">
                  <p className="text-[10px] text-text-light font-medium">サービス利用料</p>
                  <p className="font-[Inter] font-bold text-lp text-[18px] md:text-[22px]">¥10,000<span className="text-[11px] text-text-light font-normal">/月</span></p>
                </div>
                <div className="absolute -top-2 -right-2 md:-right-6 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 lp-float-medium border border-gray-100">
                  <p className="text-[10px] text-text-light font-medium">初期費用</p>
                  <p className="font-bold text-cta text-[18px] md:text-[22px]">0円</p>
                </div>
              </div>
            </FadeSlide>
          </div>
        </div>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60 z-10">
          <span className="text-[10px] font-[Inter] tracking-[0.2em] font-bold text-lp">SCROLL</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-lp to-transparent" />
        </div>
      </section>

      {/* ===== Marquee ===== */}
      <MarqueeBanner />

      {/* ===== 01 課題パート ===== */}
      <section
        className="relative py-28 md:py-36 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0b2a4a 0%, #132d4a 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center text-white/40">
              <span className="font-[Inter] font-bold text-[12px] tracking-[0.3em]">01 — ISSUE</span>
            </div>
            <h2 className="font-bold text-white text-[26px] md:text-[36px] leading-[1.5]">
              採用担当者は、
              <br />
              こんな<span className="text-lp-accent lp-marker">悩み</span>を抱えがち。
            </h2>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="grid md:grid-cols-3 gap-5">
            {[
              { title: "採用コストが積み上がる", desc: "媒体掲載費・エージェント手数料・運用の人件費。採用のたびに固定費と変動費の両方がのしかかる。" },
              { title: "選考工数が現場を圧迫", desc: "応募対応、日程調整、スカウト送信。本業と兼務する採用担当にとって、選考業務は後回しになりがち。" },
              { title: "不採用者はそこで終わり", desc: "時間をかけて選考した人材でも、不採用の連絡をした瞬間に接点が切れる。会社として何のリターンも残らない。" },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="h-full lp-glass-dark rounded-2xl p-6 border border-white/10 hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <span className="font-[Inter] font-bold text-lp-accent text-[13px]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-bold text-white text-[15px] mb-2 leading-[1.7]">{item.title}</h3>
                  <p className="text-[13px] text-white/60 leading-[1.9]">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeSlide direction="up" className="text-center mt-16">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6">
              <p className="text-white font-bold text-[20px] md:text-[26px] leading-[1.6]">
                その悩み、<span className="text-cta lp-marker-orange">HitoHoshi</span>が解決します。
              </p>
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* CTA 1 */}
      <CtaBannerFull />

      {/* ===== 02 WHAT WE DO ===== */}
      <section className="py-28 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-lines-pattern" />
        <span className="lp-bg-number top-24 left-0">02</span>
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">02 — WHAT WE DO</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              「HitoHoshi」は、
              <br />
              <span className="text-lp-accent lp-marker">2つの機能</span>でこれを解決します。
            </h2>
            <p className="text-[14px] md:text-[15px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              採用の「入口」を代行しながら、「出口」まで責任を持つ。この一気通貫の設計が、HitoHoshiの核です。
            </p>
          </FadeSlide>
          <StaggerChildren staggerMs={150} className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: "PILLAR 01",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0 4 4 0 018 0z" />,
                title: "採用代行",
                desc: "Indeed・エンゲージ等、使いこなせていない採用アカウントの運用・応募対応・選考進行をまるごと代行します。",
                outcome: "→ 御社にとって必要な人材のみを厳選して採用可能。",
                accent: "bg-blue-50",
              },
              {
                tag: "PILLAR 02",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14 4l-4 16" />,
                title: "不採用人材の再活用",
                desc: "提携先を通じた他社への橋渡し、または協会が統括する起業支援プログラムへの接続で、次の選択肢につなぎます。",
                outcome: "→ 不採用人材もいずれかで成約した際に成果報酬発生。",
                accent: "bg-orange-50",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard intensity={6} className="h-full">
                  <div className="bg-white rounded-2xl p-8 text-left border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] transition-all relative overflow-hidden h-full group">
                    <div className={`absolute top-0 right-0 w-28 h-28 ${item.accent} rounded-bl-full -mr-4 -mt-4 opacity-60 z-0 group-hover:scale-110 transition-transform`} />
                    <div className="w-16 h-16 rounded-2xl bg-lp flex items-center justify-center mb-5 relative z-10 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <p className="text-[11px] font-bold text-lp-accent tracking-[0.16em] mb-2 relative z-10">{item.tag}</p>
                    <h3 className="font-bold text-text-dark text-[19px] mb-3 relative z-10">{item.title}</h3>
                    <p className="text-[13.5px] text-text-light leading-[1.9] relative z-10 mb-4">{item.desc}</p>
                    <div className="text-[12.5px] font-bold text-lp bg-bg-section rounded-lg px-4 py-3 relative z-10">{item.outcome}</div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA 2 */}
      <CtaBannerCard />

      {/* ===== 03 SERVICE 01 ===== */}
      <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f7f9fc 0%, #eef3f9 100%)" }}>
        <div className="absolute inset-0 lp-dots-pattern opacity-50" />
        <span className="lp-bg-number top-12 right-12">03</span>
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">03 — SERVICE 01</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">採用代行でお任せいただけること</h2>
            <p className="text-[14px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              採用アカウントを「持っているだけ」で終わらせず、日々の運用まで引き受けます。
            </p>
          </FadeSlide>
          <StaggerChildren staggerMs={120} className="grid md:grid-cols-2 gap-6">
            {[
              { kanji: "運", title: "求人媒体アカウントの運用", desc: "Indeed・Airwork・求人ボックス・エンゲージ等、既存アカウントの求人票作成・更新・掲載管理を代行。" },
              { kanji: "調", title: "面接日程の調整", desc: "候補者・面接官双方との日程調整を仲介・対応。" },
              { kanji: "応", title: "応募者対応", desc: "応募受付から合否連絡までを窓口として責任を持って代行し、対応漏れ・遅延等を防止。" },
              { kanji: "進", title: "選考進行管理", desc: "選考ステータスの一元管理と、貴社への定期レポーティング。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] flex gap-5 items-start">
                  <div className="w-13 h-13 w-[52px] h-[52px] rounded-xl bg-lp flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-white font-bold text-[19px]">{item.kanji}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-dark text-[15.5px] mb-1.5">{item.title}</h3>
                    <p className="text-[12.5px] text-text-light leading-[1.85]">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <LineDivider />

      {/* ===== 04 SERVICE 02 ===== */}
      <section className="py-28 md:py-36 bg-white relative">
        <span className="lp-bg-number top-0 left-0">04</span>
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">04 — SERVICE 02</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">不採用人材の再活用スキーム</h2>
            <p className="text-[14px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              貴社が「不採用」と判断した人材を、HitoHoshiが2つのルートに橋渡しします。
            </p>
          </FadeSlide>

          <FadeSlide direction="up" className="flex flex-col items-center gap-1.5 mb-12">
            <span className="bg-bg-section border border-gray-100 text-lp font-bold text-[13.5px] px-6 py-3 rounded-xl text-center">貴社が選考で「不採用」と判断</span>
            <span className="text-lp-accent text-[18px]">▾</span>
            <span className="bg-lp text-white font-bold text-[13.5px] px-6 py-3 rounded-xl text-center">HitoHoshiが取次・送客</span>
            <span className="text-lp-accent text-[18px]">▾</span>
          </FadeSlide>

          <StaggerChildren staggerMs={150} className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: "ROUTE A ― 転職",
                tagBg: "bg-blue-50 text-[#2a6fa5]",
                title: "提携紹介事業者を経由し、他社での就業へ",
                desc: "提携する有料職業紹介事業者に人材を送客。実際の職業紹介・斡旋はHitoHoshiではなく同事業者が行います。",
                fee: "10%",
                feeDesc: "成約時：紹介手数料の10%",
              },
              {
                tag: "ROUTE B ― 起業",
                tagBg: "bg-orange-50 text-cta-hover",
                title: "BizOwner／SARUDEMOへ接続→起業支援へ",
                desc: "「雇われる」ではなく「経営する」道を選ぶ人材を、我々が提供している起業支援プログラムへつなぎます。",
                fee: "所定料金",
                feeDesc: "成約時：所定の紹介料",
              },
            ].map((r) => (
              <StaggerItem key={r.tag}>
                <TiltCard intensity={4} className="h-full">
                  <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                    <span className={`inline-block text-[11px] font-bold tracking-[0.1em] px-3.5 py-1.5 rounded-full mb-4 ${r.tagBg}`}>{r.tag}</span>
                    <h3 className="font-bold text-text-dark text-[17px] mb-3">{r.title}</h3>
                    <p className="text-[13px] text-text-body leading-[1.9] mb-5">{r.desc}</p>
                    <div className="flex items-baseline gap-2 pt-4 border-t border-dashed border-gray-200">
                      <span className="font-bold text-lp text-[22px]">{r.fee}</span>
                      <span className="text-[11.5px] text-text-light">{r.feeDesc}</span>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA 3 */}
      <CtaBannerFull />

      {/* ===== 05 料金 ===== */}
      <section className="py-28 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-lines-pattern opacity-30" />
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">05 — PRICING</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">料金体系</h2>
            <p className="text-[14px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              固定費は月額1万円のみ。収益は、実際に成果が出た場合にのみ発生する成果報酬です。
            </p>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="bg-gradient-to-r from-cta to-[#d04f24] text-white text-center py-6 px-8 rounded-2xl mb-12 shadow-lg font-bold text-[16px] md:text-[20px] -rotate-1 hover:rotate-0 transition-transform border border-white/20 lp-shine relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPgo8L3N2Zz4=')] opacity-50" />
              <span className="relative z-10">サービス利用料は月額10,000円のみ。初期費用は0円です。</span>
            </div>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="max-w-md mx-auto bg-white rounded-3xl p-8 md:p-10 text-center border-2 border-lp-accent shadow-[0_14px_34px_-14px_rgba(74,155,217,0.3)] mb-14">
              <p className="text-[12.5px] font-bold text-text-light tracking-[0.04em] mb-3">サービス利用料</p>
              <p className="text-text-dark font-bold" style={{ fontSize: "clamp(34px,5vw,46px)" }}>
                10,000<span className="text-[14px] text-text-light font-semibold ml-1">円 / 月</span>
              </p>
              <p className="text-[13px] text-text-body mt-4 leading-[1.85]">採用アカウント運用・応募対応・選考進行管理を含む固定費。初期費用は0円。</p>
            </div>
          </FadeSlide>
          <FadeSlide direction="up">
            <p className="text-center font-bold text-lp text-[14px] tracking-[0.05em] mb-6">成果報酬（不採用人材の活用先に応じて発生）</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { rt: "ROUTE A", cond: "他社就業が決定", amt: "10%", note: "※ 提携事業者から支払われる紹介手数料に連動" },
                { rt: "ROUTE B", cond: "BizOwner／SARUDEMOで起業", amt: "協会規定", note: "※ 全国起業家協会が定める紹介料水準に準拠" },
              ].map((f) => (
                <div key={f.rt} className="bg-bg-section rounded-2xl p-6 border border-gray-100">
                  <p className="text-[11px] font-bold text-lp-accent tracking-[0.1em] mb-2">{f.rt}</p>
                  <p className="text-[14px] font-bold text-text-dark mb-2.5">{f.cond}</p>
                  <p className="text-text-dark font-bold text-[26px] leading-none mb-2">{f.amt}</p>
                  <p className="text-[11.5px] text-text-light">{f.note}</p>
                </div>
              ))}
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* ===== 06 WHY HITOHOSHI ===== */}
      <section className="py-28 md:py-36 bg-bg-section relative">
        <span className="lp-bg-number top-48 left-12">06</span>
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">06 — WHY HITOHOSHI</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">導入いただくメリット</h2>
          </FadeSlide>
          <StaggerChildren staggerMs={120} className="grid md:grid-cols-2 gap-6">
            {[
              { title: "採用工数の削減", desc: "媒体運用～選考進行まで現場が抱えていた業務を丸々引き受けます。", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: "圧倒的なコスパ", desc: "固定費は月額1万円のみ。むしろ成果報酬で逆に利益を得られる。", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 2v8m0 0v2m0-2c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: "採用ブランディングの向上", desc: "不採用者にも次の選択肢を用意する優良企業として、選考体験そのものの評判が向上。", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> },
              { title: "唯一無二の企業向けサービス", desc: "不採用人材も決して無駄にはせず、しっかりとマネタイズする唯一無二のB2Bサービス。", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /> },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-lp flex items-center justify-center shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-dark text-[15px] mb-1.5">{item.title}</h3>
                    <p className="text-[12.5px] text-text-light leading-[1.85]">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== 運営体制 ===== */}
      <section className="py-28 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-dots-pattern opacity-40" />
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">TRUST &amp; NETWORK</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">運営体制</h2>
            <p className="text-[14px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              HitoHoshiは、「一般社団法人 全国起業家協会」が展開する起業/経営支援事業の一つとして運営されているサービスです。
            </p>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="text-center mb-2">
              <span className="inline-block bg-lp text-white font-bold text-[13px] md:text-[14px] px-7 py-3.5 rounded-2xl shadow-lg">一般社団法人 全国起業家協会（統括本部）</span>
            </div>
            <div className="text-center text-lp-accent text-[20px] my-2">▾</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { name: "BizOwner", tag: "個人向け", desc: "アカウント運用×起業支援" },
                { name: "SARUDEMO", tag: "個人向け", desc: "FC型経営教育" },
                { name: "HitoHoshi", tag: "既存法人向け", desc: "採用代行×人材再活用", active: true },
                { name: "KaneHoshi", tag: "既存法人向け", desc: "ECアカウント運用代行" },
                { name: "COMON'S", tag: "一人社長向け", desc: "多分野の顧問サービス" },
              ].map((n) => (
                <div key={n.name} className={`rounded-2xl p-5 text-center border ${n.active ? "border-2 border-cta shadow-[0_12px_28px_-12px_rgba(232,93,47,0.3)]" : "border-gray-100 shadow-[0_6px_18px_-12px_rgba(11,42,74,0.08)]"}`}>
                  <p className={`font-bold text-[14px] mb-1 ${n.active ? "text-cta" : "text-text-dark"}`}>{n.name}</p>
                  <p className="text-[10px] text-text-light mb-1.5">{n.tag}</p>
                  <p className="text-[10px] text-text-light">{n.desc}</p>
                </div>
              ))}
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* ===== 07 導入フロー ===== */}
      <section className="py-28 md:py-36 bg-bg-section relative">
        <div className="max-w-[700px] mx-auto px-6">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">07 — HOW TO START</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              導入の<span className="text-lp-accent lp-marker">流れ</span>
            </h2>
            <p className="text-[14px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              お問い合わせから最短1週間で運用開始まで進められます。
            </p>
          </FadeSlide>
          <StaggerChildren staggerMs={150} className="relative pl-6 md:pl-10">
            <div className="absolute left-[27px] md:left-[41px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-lp-accent via-lp to-cta/20 rounded-full" />
            <div className="space-y-10">
              {[
                { title: "お問い合わせ", desc: "本件専用の公式LINEからご連絡下さい。案内に沿って進めて下さい。" },
                { title: "ヒアリング", desc: "面談にて現在の採用状況・使用アカウント・課題感を確認致します。" },
                { title: "ご契約", desc: "サービス範囲・料金体系をすり合わせのうえ、契約を締結します。" },
                { title: "運用開始", desc: "アカウント運用・選考代行を順次開始。", last: true },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="relative flex items-start group">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${item.last ? "bg-gradient-to-br from-cta to-[#d04f24] shadow-[0_4px_20px_rgba(232,93,47,0.3)] scale-110" : "bg-white border-2 border-lp-accent"} flex items-center justify-center font-[Inter] font-bold ${item.last ? "text-white" : "text-lp-accent"} text-[16px] relative z-10 shrink-0 group-hover:scale-110 transition-transform`}>
                      {i + 1}
                    </div>
                    <div className="ml-5 md:ml-7 bg-white md:bg-transparent p-5 md:p-0 rounded-xl md:rounded-none flex-grow group-hover:translate-x-2 transition-transform">
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

      {/* ===== 最終CTA / CONTACT ===== */}
      <section
        className="relative py-36 md:py-48 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0b2a4a 0%, #05162b 100%)" }}
        id="contact"
      >
        <div className="absolute inset-0 lp-dots-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lp-accent/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cta/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
          <FadeSlide direction="up">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em] mb-6 uppercase">Contact</p>
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: "clamp(28px,5vw,48px)", lineHeight: 1.4 }}
            >
              まずはお気軽に
              <br />
              ご相談ください
            </h2>
            <p className="text-white/50 text-[15px] leading-[2] mb-12 max-w-lg mx-auto">
              貴社の採用状況をお伺いしたうえで、最適な導入プランをご提案致します。
              <br className="hidden md:block" />
              お問い合わせはHitoHoshi公式LINEからお気軽にご連絡ください。
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn lp-shine text-[18px] px-12 py-6 shadow-[0_0_40px_rgba(232,93,47,0.4)] hover:shadow-[0_0_60px_rgba(232,93,47,0.6)] hover:-translate-y-1 transition-all">
              <LineIcon className="w-7 h-7" />
              公式LINEで相談する
            </a>
            <p className="text-white/30 text-[12px] mt-8 leading-[1.8]">
              HitoHoshi運営事務局：一般社団法人 全国起業家協会<br />
              Email：<a href="mailto:main@business-manabiya.com" className="underline hover:text-white/60">main@business-manabiya.com</a>　受付時間：平日 10:00-18:00
            </p>
          </FadeSlide>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#030e1c] py-12 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-[Montserrat] font-bold text-white/80 text-[18px] tracking-tight">HitoHoshi<span className="text-lp-accent">.</span></p>
            </div>
            <div className="flex gap-6 text-[12px] text-white/40 font-medium">
              <Link href="/" className="hover:text-white/70 transition-colors">ホーム</Link>
              <Link href="/services" className="hover:text-white/70 transition-colors">サービス一覧</Link>
              <Link href="#contact" className="hover:text-white/70 transition-colors">お問い合わせ</Link>
            </div>
          </div>
          <p className="text-white/25 text-[11px] text-center mt-8 leading-[1.8]">全国起業家協会は全国のスタートアップ・ベンチャー企業を心から応援しております。</p>
          <p className="text-white/20 text-[11px] text-center mt-2 font-[Inter]">&copy; 2026 HitoHoshi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
