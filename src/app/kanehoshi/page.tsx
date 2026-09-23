import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeSlide from "@/components/manabiya/FadeSlide";
import StaggerChildren, { StaggerItem } from "@/components/manabiya/StaggerChildren";
import TiltCard from "@/components/manabiya/TiltCard";
import ImageReveal from "@/components/lp/ImageReveal";
import LineDivider from "@/components/lp/LineDivider";
import LineIcon from "@/components/LineIcon";

export const metadata: Metadata = {
  title: "KaneHoshi｜融資で勝てる決算書をつくる",
};

/* メインCV：公式LINE追加。全CTAの遷移先 */
/* TODO: KaneHoshi専用公式LINEのURL発行後に差し替え（現状は準備中） */
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
            <p className="text-lp font-bold text-[18px] md:text-[22px] mb-2">御社の状況をお伺いしたうえで、参加条件をご案内します。</p>
            <p className="text-text-light text-[13px] mb-6">お問い合わせはKaneHoshi公式LINEからお気軽にご連絡ください。</p>
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
  const items = ["融資で勝てる決算書をつくる", "EC運用代行", "売上実績づくり", "月額10,000円のみ", "初期費用0円", "1年契約・自動更新", "全国起業家協会運営"];
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

export default function KaneHoshiPage() {
  return (
    <div className="font-sans text-text-body bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-white">
        {/* Logo (top-left) */}
        <Link
          href="#"
          aria-label="KaneHoshi"
          className="absolute top-4 left-4 md:top-6 md:left-8 z-30 inline-flex items-center"
        >
          <Image
            src="/lp/kanehoshi-logo.png"
            alt="KaneHoshi"
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
                  <span className="text-lp font-bold text-[13px]">初期費用0円・月額10,000円（税別）</span>
                </div>
              </FadeSlide>
              <FadeSlide direction="up" delay={300}>
                <h1
                  className="font-bold text-text-dark"
                  style={{ fontSize: "clamp(32px,6vw,56px)", lineHeight: 1.35, letterSpacing: "0.02em" }}
                >
                  融資で勝てる、
                  <br />
                  <span className="text-lp-accent lp-marker">決算書</span>をつくる。
                </h1>
              </FadeSlide>
              <FadeSlide direction="up" delay={500}>
                <p className="text-[16px] md:text-[18px] text-text-body leading-[1.9] max-w-lg">
                  協会提携の運用事業者が、御社の法人でECショップを運営。
                  <br className="hidden md:block" />
                  売上実績を積み上げ、次の融資・補助金申請に備えます。
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
                <ImageReveal immediate direction="right" className="w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border-4 border-white relative z-10">
                  <Image src="/lp/kanehoshi-hero.jpg" alt="KaneHoshi" width={1080} height={1080} className="w-full h-full object-cover" priority />
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

      {/* CTA 1 */}
      <CtaBannerFull />

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
              「本業は順調。でも、
              <br />
              融資の<span className="text-lp-accent lp-marker">材料</span>がない」
            </h2>
            <p className="text-white/60 text-[14px] mt-6 max-w-lg mx-auto leading-[1.9]">
              融資や補助金の審査で最初に見られるのは、売上規模と成長性です。ただ、そのために新規事業を立ち上げる余力は、多くの会社にありません。
            </p>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="grid md:grid-cols-3 gap-5">
            {[
              { title: "決算書に伸びしろがない", desc: "売上規模や成長性は、金融機関が最初に見る数字。本業だけだと頭打ちに見えてしまう。" },
              { title: "新規事業に割く人手がない", desc: "EC出店は有効と分かっていても、商材選定から運用まで自前でやる余力がない。" },
              { title: "実績づくりの予算がない", desc: "新しい売上を作るために、広告費や仕入費を新たに投下するのは難しい。" },
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
                その悩み、<span className="text-cta lp-marker-orange">KaneHoshi</span>が解決します。
              </p>
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* CTA 2 */}
      <CtaBannerCard />

      {/* ===== 02 WHAT WE DO ===== */}
      <section className="py-28 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-lines-pattern" />
        <span className="lp-bg-number top-24 left-0">02</span>
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">02 — WHAT WE DO</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              御社の「法人」で、
              <br />
              <span className="text-lp-accent lp-marker">協会提携の運用事業者</span>がECショップを運営する。
            </h2>
            <p className="text-[14px] md:text-[15px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              KaneHoshiは、御社と運用事業者の間に立ち、ECショップの共同運営を成立させます。御社は法人としての出店に協力するだけです。
            </p>
          </FadeSlide>

          <StaggerChildren staggerMs={150} className="flex flex-col md:flex-row items-stretch gap-3 md:gap-2">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />,
                title: "既存法人（御社）",
                desc: "法人として出店・契約",
                dark: false,
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 21.03a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
                title: "KaneHoshi",
                desc: "共同運営を成立させる",
                dark: true,
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.994-4.694 2.629-7.178.043-.106.043-.207.043-.322a1.125 1.125 0 00-1.125-1.125H5.397M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />,
                title: "協会提携の運用事業者",
                desc: "出品・受注・在庫・問い合わせを実施",
                dark: false,
              },
            ].map((item, i, arr) => (
              <div key={item.title} className="flex-1 flex items-center gap-3 md:gap-2">
                <StaggerItem className="w-full">
                  <TiltCard intensity={4} className="h-full">
                    <div className={`h-full rounded-2xl p-6 md:p-7 text-center border shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] ${item.dark ? "bg-lp border-lp text-white" : "bg-white border-gray-100"}`}>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md ${item.dark ? "bg-white/15" : "bg-lp"}`}>
                        <svg className={`w-6 h-6 ${item.dark ? "text-white" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                      </div>
                      <h3 className={`font-bold text-[16px] md:text-[17px] mb-2 ${item.dark ? "text-white" : "text-text-dark"}`}>{item.title}</h3>
                      <p className={`text-[13px] leading-[1.8] ${item.dark ? "text-white/70" : "text-text-light"}`}>{item.desc}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                {i < arr.length - 1 && (
                  <span className="shrink-0 text-lp-accent font-bold text-[22px] rotate-90 md:rotate-0">→</span>
                )}
              </div>
            ))}
          </StaggerChildren>

          <FadeSlide direction="up" className="mt-10">
            <p className="text-[13px] md:text-[14px] text-text-body leading-[1.9] text-center max-w-2xl mx-auto">
              大手ECモールの多くは、出店に日本法人としての資格を要件にしています。KaneHoshiが仲介役となり、御社の法人格を活かして運用事業者とショップを共同運営します。
            </p>
          </FadeSlide>
        </div>
      </section>

      {/* ===== 03 HOW IT WORKS ===== */}
      <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f7f9fc 0%, #eef3f9 100%)" }}>
        <div className="absolute inset-0 lp-dots-pattern opacity-50" />
        <span className="lp-bg-number top-12 right-12">03</span>
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">03 — HOW IT WORKS</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">売上が、御社の決算書に載るまで。</h2>
            <p className="text-[14px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              ECショップの売上を御社の実績として積み上げ、次期の融資・補助金申請の場で示せる状態を作ります。
            </p>
          </FadeSlide>
          <StaggerChildren staggerMs={120} className="grid md:grid-cols-2 gap-6">
            {[
              { kanji: "出", title: "①御社の法人でEC出店", desc: "御社の法人名義でECショップを開設します。" },
              { kanji: "営", title: "②運用事業者がショップ運営", desc: "出品・受注・在庫・問い合わせを運用事業者が行います。" },
              { kanji: "計", title: "③売上が決算書に計上", desc: "ショップの売上が、御社の事業実績として積み上がります。" },
              { kanji: "示", title: "④融資・補助金で実績を提示", desc: "次期の申請で、新しい事業の実績として説明できます。" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] flex gap-5 items-start">
                  <div className="w-[52px] h-[52px] rounded-xl bg-lp flex items-center justify-center shrink-0 shadow-md">
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

      {/* ===== 04 WHY KANEHOSHI ===== */}
      <section className="py-28 md:py-36 bg-white relative">
        <span className="lp-bg-number top-0 left-0">04</span>
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">04 — WHY KANEHOSHI</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              融資審査の3つのポイントに、<span className="text-lp-accent lp-marker">実績</span>で応える。
            </h2>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="grid md:grid-cols-3 gap-5">
            {[
              { title: "売上規模", desc: "EC事業の売上が加わり、決算書上の売上規模が大きくなります。" },
              { title: "事業の多角化", desc: "本業に加えて新たな収益の柱があることを、数字で示せます。" },
              { title: "成長性の実績", desc: "新しい事業を立ち上げ、数字を伸ばしてきた経緯を説明できます。" },
            ].map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="h-full bg-bg-section rounded-2xl p-6 border border-gray-100">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                    <span className="font-[Inter] font-bold text-lp-accent text-[13px]">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-text-dark text-[16px] mb-2 leading-[1.7]">{item.title}</h3>
                  <p className="text-[13px] text-text-light leading-[1.9]">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <p className="text-[12px] text-text-light text-center mt-10 leading-[1.9]">
            ※ 審査結果を保証するものではありません。融資・補助金の可否は、金融機関・審査機関の判断によります。
          </p>
        </div>
      </section>

      {/* CTA 3 */}
      <CtaBannerFull />

      {/* ===== 05 ROLES ===== */}
      <section className="py-28 md:py-36 bg-bg-section relative">
        <span className="lp-bg-number top-24 right-0">05</span>
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">05 — ROLES</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              運用は、協会提携の運用事業者が自走。
              <br />
              御社の作業は最小限。
            </h2>
          </FadeSlide>
          <StaggerChildren staggerMs={150} className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: "御社にお願いすること",
                tagColor: "text-lp",
                items: ["契約の締結・必要書類のご提出", "月次の売上・入出金のご確認", "決算/融資申請時の書類のご確認"],
              },
              {
                tag: "運用事業者が担うこと",
                tagColor: "text-lp-accent",
                items: ["ショップの開設/出品", "受注/在庫管理/発送", "お客様からの問い合わせ対応", "売上/実績のレポート"],
              },
            ].map((col) => (
              <StaggerItem key={col.tag}>
                <div className="h-full bg-white rounded-2xl p-7 md:p-8 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <p className={`font-bold text-[15px] mb-5 ${col.tagColor}`}>{col.tag}</p>
                  <ul className="space-y-3.5">
                    {col.items.map((it) => (
                      <li key={it} className="flex items-start text-[13.5px] text-text-body leading-[1.8]">
                        <span className="lp-check shrink-0 mt-0.5">✓</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <p className="text-[12px] text-text-light text-center mt-10 leading-[1.9]">※ 役割分担の詳細は、ご契約時にご案内します。</p>
        </div>
      </section>

      {/* ===== 06 PRICING ===== */}
      <section className="py-28 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-lines-pattern opacity-30" />
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">06 — PRICING</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              初期費用0円。
              <br />
              月額10,000円だけの、シンプルな設計。
            </h2>
            <p className="text-[14px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              料金は月額のみのシンプルな設計です。契約は1年単位で、満了後は自動更新となります。
            </p>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="bg-gradient-to-r from-cta to-[#d04f24] text-white text-center py-6 px-8 rounded-2xl mb-12 shadow-lg font-bold text-[16px] md:text-[20px] -rotate-1 hover:rotate-0 transition-transform border border-white/20 lp-shine relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPgo8L3N2Zz4=')] opacity-50" />
              <span className="relative z-10">サービス利用料は月額10,000円（税別）のみ。初期費用は0円です。</span>
            </div>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="max-w-md mx-auto bg-white rounded-3xl p-8 md:p-10 text-center border-2 border-lp-accent shadow-[0_14px_34px_-14px_rgba(74,155,217,0.3)] mb-14">
              <p className="text-[12.5px] font-bold text-text-light tracking-[0.04em] mb-3">サービス利用料</p>
              <p className="text-text-dark font-bold" style={{ fontSize: "clamp(34px,5vw,46px)" }}>
                10,000<span className="text-[14px] text-text-light font-semibold ml-1">円 / 月（税別）</span>
              </p>
              <p className="text-[13px] text-text-body mt-4 leading-[1.85]">初期費用は0円。御社側の追加投資・在庫リスクはありません。</p>
            </div>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { rt: "初期費用", cond: "ご契約時のお支払い", amt: "0円" },
                { rt: "契約期間", cond: "満了1ヶ月前までお申し出なき場合", amt: "1年（自動更新）" },
                { rt: "特典", cond: "運用実績に応じて", amt: "利益の一部を還元" },
              ].map((f) => (
                <div key={f.rt} className="bg-bg-section rounded-2xl p-6 border border-gray-100 text-center">
                  <p className="text-[11px] font-bold text-lp-accent tracking-[0.1em] mb-2">{f.rt}</p>
                  <p className="text-[13px] font-bold text-text-dark mb-3">{f.cond}</p>
                  <p className="text-text-dark font-bold text-[20px] leading-none">{f.amt}</p>
                </div>
              ))}
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* ===== 07 ELIGIBILITY ===== */}
      <section className="py-28 md:py-36 bg-bg-section relative">
        <span className="lp-bg-number top-12 left-0">07</span>
        <div className="max-w-[700px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-12">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">07 — ELIGIBILITY</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">参加可能対象者</h2>
            <p className="text-[14px] text-text-body mt-6 leading-[1.9]">詳細な条件は、面談の中で個別にご案内します。</p>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
              <ul className="space-y-4">
                {[
                  "御社の決裁者ご本人であること",
                  "事業実態のある、既存の法人であること",
                  "その他の条件（資本金・課税方式など）は、個別面談でご案内",
                ].map((it) => (
                  <li key={it} className="flex items-start text-[14.5px] text-text-body leading-[1.9]">
                    <span className="lp-check shrink-0 mt-0.5">✓</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </FadeSlide>
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
              KaneHoshiは、「一般社団法人 全国起業家協会」が展開する事業ネットワークの一員として運営されているサービスです。
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
                { name: "HitoHoshi", tag: "既存法人向け", desc: "採用代行×人材再活用" },
                { name: "COMON'S", tag: "一人社長向け", desc: "多分野の顧問サービス" },
                { name: "KaneHoshi", tag: "既存法人向け", desc: "EC運用で売上実績づくり", active: true },
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

      {/* ===== 08 導入フロー ===== */}
      <section className="py-28 md:py-36 bg-bg-section relative">
        <div className="max-w-[700px] mx-auto px-6">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">08 — HOW TO START</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              導入の<span className="text-lp-accent lp-marker">流れ</span>
            </h2>
            <p className="text-[14px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              お問い合わせから運用開始まで、御社の作業は書類のやり取りが中心です。
            </p>
          </FadeSlide>
          <StaggerChildren staggerMs={150} className="relative pl-6 md:pl-10">
            <div className="absolute left-[27px] md:left-[41px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-lp-accent via-lp to-cta/20 rounded-full" />
            <div className="space-y-10">
              {[
                { title: "公式LINEでお問い合わせ", desc: "友だち追加のうえ、ご連絡ください。" },
                { title: "ヒアリング・適合診断", desc: "決算状況を伺い、条件を確認します。" },
                { title: "ご契約", desc: "1年契約で締結します。" },
                { title: "EC出店・運用開始", desc: "運用事業者が開設・運用を始めます。" },
                { title: "毎月のレポート", desc: "売上・実績を毎月ご報告します。", last: true },
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
              まずは、御社の状況を
              <br />
              お聞かせください
            </h2>
            <p className="text-white/50 text-[15px] leading-[2] mb-12 max-w-lg mx-auto">
              御社の状況に合わせて、参加条件と進め方をご案内します。
              <br className="hidden md:block" />
              お問い合わせはKaneHoshi公式LINEからお気軽にご連絡ください。
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn lp-shine text-[18px] px-12 py-6 shadow-[0_0_40px_rgba(232,93,47,0.4)] hover:shadow-[0_0_60px_rgba(232,93,47,0.6)] hover:-translate-y-1 transition-all">
              <LineIcon className="w-7 h-7" />
              公式LINEで相談する
            </a>
            <p className="text-white/30 text-[12px] mt-8 leading-[1.8]">
              KaneHoshi運営事務局：一般社団法人 全国起業家協会<br />
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
              <p className="font-[Montserrat] font-bold text-white/80 text-[18px] tracking-tight">KaneHoshi<span className="text-lp-accent">.</span></p>
            </div>
            <div className="flex gap-6 text-[12px] text-white/40 font-medium">
              <Link href="/" className="hover:text-white/70 transition-colors">ホーム</Link>
              <Link href="/services" className="hover:text-white/70 transition-colors">サービス一覧</Link>
              <Link href="#contact" className="hover:text-white/70 transition-colors">お問い合わせ</Link>
            </div>
          </div>
          <p className="text-white/25 text-[11px] text-center mt-8 leading-[1.8]">全国起業家協会は全国のスタートアップ・ベンチャー企業を心から応援しております。</p>
          <p className="text-white/20 text-[11px] text-center mt-2 font-[Inter]">&copy; 2026 KaneHoshi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
