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
  title: "COMON'S｜法人を、ひとりで背負わない",
};

/* メインCV：公式LINE追加。全CTAの遷移先 */
/* 全国起業家協会 official（公式LINE）。全LPのCTA共通 */
const LINE_URL = "https://lin.ee/woJeT8Q";

/* ── CTA Banner (variation A - full width) ── */
function CtaBannerFull() {
  return (
    <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #1a4f7a 50%, #0b2a4a 100%)" }}>
      <div className="absolute inset-0 lp-dots-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cta/20 rounded-full blur-[100px]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <p className="text-white/60 text-[13px] font-bold mb-4 tracking-wider">＼ 今すぐ無料で相談する ／</p>
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[16px] md:text-[18px] px-10 py-5">
          <LineIcon className="w-6 h-6" />
          公式LINEで相談する
        </a>
        <p className="mt-4 text-[13px] text-white/50 font-medium">※ 顧問1名からでもOK・しつこい勧誘なし</p>
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
            <p className="text-lp font-bold text-[18px] md:text-[22px] mb-2">まずは無料で話を聞いてみませんか？</p>
            <p className="text-text-light text-[13px] mb-6">顧問1名からでもOK。今の状況に合わせて、最適な体制をご提案します。</p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[15px] md:text-[16px] px-8 py-4">
              <LineIcon className="w-5 h-5" />
              LINE登録して無料相談する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Marquee Banner ── */
function MarqueeBanner() {
  const items = ["法人を、ひとりで背負わない。", "顧問1名から月額30,000円", "分野を問わず自由に選べる", "経営目線でつながる顧問チーム", "人数の上限なく後から追加可能", "厳選なる審査を通過した顧問陣"];
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

export default function ComonsPage() {
  return (
    <div className="font-sans text-text-body bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-white">
        {/* Logo (top-left) */}
        <Link
          href="#"
          aria-label="COMON'S"
          className="absolute top-4 left-4 md:top-6 md:left-8 z-30 inline-flex items-center"
        >
          <Image
            src="/lp/comons-logo.png"
            alt="COMON'S"
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

        <div className="max-w-[1100px] mx-auto px-6 relative z-10 pt-20 pb-16 md:pb-32 lg:pt-28 lg:pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 md:gap-12 items-center">
            <div className="contents md:block text-center md:text-left md:space-y-7">
              <FadeSlide direction="up" delay={100} className="order-1 md:order-none">
                <div className="inline-flex items-center gap-2 bg-white border border-lp-accent/20 px-4 py-2 rounded-full shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cta" />
                  </span>
                  <span className="text-lp font-bold text-[13px]">初期費用0円・顧問1名から月額30,000円</span>
                </div>
              </FadeSlide>
              <FadeSlide direction="up" delay={300} className="order-2 md:order-none">
                <h1
                  className="font-bold text-text-dark"
                  style={{ fontSize: "clamp(32px,6vw,56px)", lineHeight: 1.25, letterSpacing: "0.02em" }}
                >
                  法人を、ひとりで
                  <span className="text-lp-accent lp-marker">背負わない</span>。
                </h1>
              </FadeSlide>
              <FadeSlide direction="up" delay={500} className="order-4 md:order-none">
                <p className="text-[16px] md:text-[18px] text-text-body leading-[1.9] max-w-lg">
                  厳選なる審査を通過した顧問を自社へ招き、ビジネスを抜本的に改善。
                  <br className="hidden md:block" />
                  経営に伴走する顧問チームを自由に配置、売上を大幅加速。
                </p>
              </FadeSlide>
              <FadeSlide direction="up" delay={700} className="order-5 md:order-none">
                <div className="flex flex-col gap-3">
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[16px] md:text-[18px] w-full max-w-md px-8 py-5 justify-center">
                    <LineIcon className="w-6 h-6" />
                    公式LINEで相談する
                  </a>
                  <p className="text-[13px] text-text-light ml-2">※ 顧問1名からでもOK・しつこい勧誘なし</p>
                </div>
              </FadeSlide>
            </div>
            <FadeSlide direction="right" delay={400} className="order-3 md:order-none my-1 md:my-0">
              <div className="flex justify-center relative">
                <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-tr from-lp-accent to-lp rounded-2xl rotate-3 scale-[1.02] opacity-10" />
                <ImageReveal immediate direction="right" className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border-4 border-white relative z-10">
                  <Image src="/lp/comons-hero.jpg" alt="COMON'S" width={1920} height={1080} className="w-full h-full object-cover" priority />
                </ImageReveal>
                {/* Floating stats */}
                <div className="absolute -bottom-4 right-3 md:right-6 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 lp-float-slow border border-gray-100">
                  <p className="text-[10px] text-text-light font-medium">顧問1名あたり</p>
                  <p className="whitespace-nowrap font-[Inter] font-bold text-lp text-[18px] md:text-[22px]">¥30,000<span className="text-[11px] text-text-light font-normal">/月〜</span></p>
                </div>
                <div className="absolute -top-2 -right-2 md:-right-6 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 lp-float-medium border border-gray-100">
                  <p className="text-[10px] text-text-light font-medium">人数上限</p>
                  <p className="font-bold text-cta text-[18px] md:text-[22px]">なし</p>
                </div>
              </div>
            </FadeSlide>
          </div>
        </div>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce opacity-60 z-10">
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
              「社長」になった日から、
              <br />
              <span className="text-lp-accent lp-marker">相談相手</span>がいなくなる。
            </h2>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "経営判断を、ひとりで抱え込む", desc: "資金繰りも、営業戦略も、採用も。相談できる経営者仲間も、壁打ち相手もいないまま意思決定が続く。" },
              { title: "IT・AI活用は分かるけど手付かず", desc: "便利なのは分かっているが、何から着手すればいいのか。エンジニアへの発注もハードルが高い。" },
              { title: "法務は士業がいても縦割りのまま", desc: "税理士は数字、行政書士は許認可。“経営全体”を見ながら柔軟に法務の相談に乗ってくれる窓口がない。" },
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
                その悩み、<span className="text-cta lp-marker-orange">COMON&apos;S</span>が解決します。
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
              分野を問わず、
              <br />
              <span className="text-lp-accent lp-marker">好きな顧問</span>を自由に選べる。
            </h2>
            <p className="text-[14px] md:text-[15px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              COMON&apos;Sは、様々な分野のプロを顧問として迎え、その中からユーザーが好きな人を自由に選べるサービスです。カテゴリーの縛りはありません。
            </p>
          </FadeSlide>
          <StaggerChildren staggerMs={150} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "顧問1名から",
                desc: "まとめて契約させられることなく、今困っている領域だけを始められます。",
                accent: "bg-blue-50",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
                title: "分野の縛りなし",
                desc: "経営・IT・法務など、経営に役立つ領域であれば分野は問いません。",
                accent: "bg-green-50",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "月額30,000円から",
                desc: "1顧問 月額30,000円（税別）から。必要な顧問を、必要なだけ。",
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
                    <p className="text-[13px] text-text-light leading-[1.9] relative z-10">{item.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA 2 */}
      <CtaBannerCard />

      {/* ===== 03 顧問紹介 ===== */}
      <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f7f9fc 0%, #eef3f9 100%)" }}>
        <div className="absolute inset-0 lp-dots-pattern opacity-50" />
        <span className="lp-bg-number top-12 right-12">03</span>
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-16">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">03 — ADVISOR</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">顧問紹介</h2>
          </FadeSlide>
          <StaggerChildren staggerMs={150} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                initial: "あ",
                avatarBg: "linear-gradient(135deg, #0b2a4a, #4a9bd9)",
                name: "あゆむ先生",
                role: "経営コンサルタント",
                tagline: "意思決定の、壁打ち相手になる。",
                points: [
                  "初年度で年商1億円を達成した実体験に基づく経営指導",
                  "経営コンサルタントとして50社以上を指導した実績",
                  "全国起業家協会代表理事\n資金繰り・営業戦略・採用まで伴走",
                ],
              },
              {
                initial: "原",
                avatarBg: "linear-gradient(135deg, #0b2a4a, #2e6fa8)",
                name: "原先生",
                role: "フルスタックエンジニア",
                tagline: "IT・AI活用を、実装まで伴走する。",
                points: [
                  "Next.js・TypeScriptを軸としたフルスタック開発（3年以上）",
                  "BIツール・業務システムなど、要件定義からの構築実績多数",
                  "AutoSystems株式会社代表\n専門用語を使わず分かりやすく整理",
                ],
              },
              {
                initial: "西",
                avatarBg: "linear-gradient(135deg, #1a3a5c, #0b2a4a)",
                name: "西田先生",
                role: "法務統括／名古屋総合法務事務所",
                tagline: "登記・契約書の実務を、任せられる窓口に。",
                points: [
                  "会社設立・商業登記（役員変更・増資等）\n契約書のチェック・作成支援",
                  "内容証明郵便の作成\n簡易裁判所における訴訟代理（訴額140万円以下）",
                  "対応範囲外：高額な訴訟の代理・交渉、複雑な紛争対応（提携弁護士をご紹介）",
                ],
              },
            ].map((a) => (
              <StaggerItem key={a.name}>
                <TiltCard intensity={4} className="h-full">
                  <div className="h-full bg-white rounded-3xl p-7 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-lp-accent/5 rounded-bl-full" />
                    <div className="relative z-10 text-center mb-5">
                      <div
                        className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-[22px] border-4 border-white shadow-lg"
                        style={{ background: a.avatarBg }}
                      >
                        {a.initial}
                      </div>
                      <span className="text-[10px] font-bold text-white bg-gradient-to-r from-lp to-lp-accent px-3 py-1 rounded-full mb-2 inline-block">COMON&apos;S 顧問</span>
                      <h3 className="font-bold text-text-dark text-[18px]">{a.name}</h3>
                      <p className="text-cta font-bold text-[12px] mt-0.5">{a.role}</p>
                      <p className="text-text-light text-[12px] mt-2">{a.tagline}</p>
                    </div>
                    <ul className="relative z-10 space-y-3">
                      {a.points.map((p, i) => (
                        <li key={i} className="text-[12px] text-text-body leading-[1.8] text-center text-balance whitespace-pre-line border-t border-gray-50 pt-3 first:border-t-0 first:pt-0">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <LineDivider />

      {/* ===== 04 審査基準 ===== */}
      <section className="py-28 md:py-36 bg-white relative">
        <span className="lp-bg-number top-0 left-0">04</span>
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">04 — SCREENING</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              顧問について：<span className="text-lp-accent lp-marker">協会の審査基準</span>
            </h2>
            <p className="text-[14px] text-text-body mt-6 max-w-lg mx-auto leading-[1.9]">
              COMON&apos;Sに登録されている顧問は、全員が協会規定の厳選なる審査を通過しています。誰でも自由に登録できるわけではありません。
            </p>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "実務経験・実績", desc: "当該分野での実務経験と、具体的な実績があること。", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: "過去の実績・顧客の声", desc: "実際に支援した実績や、顧客からの評価・声を確認します。", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14 4l-4 16" /> },
              { title: "代表理事本人による面談", desc: "経営に役立つ分野であれば専門は問いません。最終的には必ず、代表理事本人が直接会って人柄・相性を見極めています。", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0 4 4 0 018 0z" /> },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard intensity={4} className="h-full">
                  <div className="h-full bg-bg-section rounded-2xl p-7 text-center border border-gray-100">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lp to-lp-accent flex items-center justify-center mx-auto mb-4 shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <h3 className="font-bold text-text-dark text-[15px] mb-2">{item.title}</h3>
                    <p className="text-[12px] text-text-light leading-[1.85]">{item.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeSlide direction="up">
            <p className="text-center font-bold text-lp text-[14px] tracking-[0.05em] mb-8">顧問登録の流れ</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
              {[
                { step: "1", title: "エントリー", desc: "協会からの招待、又は信頼できる人物からの推薦のみで対応。" },
                { step: "2", title: "実績確認", desc: "実務経験・過去の実績や評価を総合的に確認します。" },
                { step: "3", title: "代表理事による面談", desc: "直接会って人柄・相性・信頼性を確認します。" },
                { step: "4", title: "登録開始", desc: "審査通過後、顧問プロフィールを公開します。" },
              ].map((s) => (
                <div key={s.step} className="flex md:block items-center gap-4 text-left md:text-center bg-bg-section md:bg-transparent border border-gray-100 md:border-0 rounded-2xl md:rounded-none px-5 py-4 md:p-0">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white border-2 border-lp-accent text-lp-accent font-bold flex items-center justify-center mx-0 md:mx-auto mb-0 md:mb-3 text-[14px]">{s.step}</div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-text-dark text-[14px] md:text-[13px] mb-1">{s.title}</h4>
                    <p className="text-[12px] md:text-[11px] text-text-light leading-[1.7]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeSlide>
        </div>
      </section>

      {/* CTA 3 */}
      <CtaBannerFull />

      {/* ===== 05 料金 ===== */}
      <section className="py-28 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-lines-pattern opacity-30" />
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">05 — PRICING</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">
              料金は、シンプルに「顧問1人＝<span className="text-cta lp-marker-orange">30,000円</span>」。
            </h2>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="bg-gradient-to-r from-cta to-[#d04f24] text-white text-center py-6 px-4 md:px-8 rounded-2xl mb-12 shadow-lg font-bold text-[16px] md:text-[20px] text-balance -rotate-1 hover:rotate-0 transition-transform border border-white/20 lp-shine relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPgo8L3N2Zz4=')] opacity-50" />
              <span className="relative z-10">初期費用は0円。<br className="md:hidden" />人数の上限なし、<br className="md:hidden" />いつでも追加・見直しができます。</span>
            </div>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16">
            {[
              { name: "あゆむ先生", field: "経営コンサルティング" },
              { name: "原先生", field: "システム開発・AI活用" },
              { name: "西田先生", field: "登記/契約書/法律トラブル等" },
              { name: "その他の顧問", field: "分野不問・審査通過順に追加" },
            ].map((p) => (
              <StaggerItem key={p.name}>
                <TiltCard intensity={4}>
                  <div className="bg-white rounded-2xl p-4 md:p-5 text-center border border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
                    <p className="text-[12px] font-bold text-text-dark mb-1">{p.name}</p>
                    <p className="text-[10px] text-text-light mb-3 min-h-[28px]">{p.field}</p>
                    <p className="whitespace-nowrap text-text-dark font-bold text-[17px] min-[360px]:text-[20px] leading-none">30,000<span className="text-[11px] text-text-light font-normal">円/月</span></p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeSlide direction="up">
            <p className="text-center font-bold text-lp text-[14px] tracking-[0.05em] mb-6">顧問人数ごとの料金イメージ</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {[
                { label: "1名なら", price: "30,000", accent: false },
                { label: "3名なら", price: "90,000", accent: true },
                { label: "5名なら", price: "150,000", accent: false },
              ].map((b) => (
                <div key={b.label} className={`relative rounded-2xl px-5 py-4 md:p-6 flex md:block items-center justify-between md:text-center ${b.accent ? "bg-white border-2 border-lp-accent shadow-[0_14px_34px_-14px_rgba(74,155,217,0.35)]" : "bg-bg-section border border-gray-100"}`}>
                  {b.accent && <div className="absolute -top-3 right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 bg-lp-accent text-white text-[10px] font-bold px-3 py-1 rounded-full">人気</div>}
                  <p className="text-[13px] md:text-[12px] font-bold text-text-light mb-0 md:mb-2">{b.label}</p>
                  <p className="whitespace-nowrap text-text-dark font-bold text-[22px] md:text-[26px]">{b.price}<span className="text-[12px] text-text-light font-normal">円/月</span></p>
                </div>
              ))}
            </div>
            <p className="text-center text-[12px] text-text-light mt-8 leading-[1.9]">
              ※ 人数に上限はありません。ご契約は最低1年間、契約満了の1ヶ月前までにお申し出がない場合は自動更新となります。
            </p>
          </FadeSlide>
        </div>
      </section>

      {/* ===== 06 選ばれる理由 ===== */}
      <section className="py-28 md:py-36 bg-bg-section relative">
        <span className="lp-bg-number top-48 left-12">06</span>
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">06 — WHY COMON&apos;S</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">COMON&apos;Sが選ばれる理由</h2>
          </FadeSlide>
          <StaggerChildren staggerMs={120} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "経営目線でつながる顧問チーム", desc: "分野ごとに窓口が分かれる士業と違い、経営全体を見ながら顧問同士が連携します。", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0 4 4 0 018 0z" /> },
              { title: "必要な分だけ、無理なく", desc: "まとめて契約させられることなく、今困っている領域だけを月30,000円から始められます。", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /> },
              { title: "実務のプロが、実務で伴走する", desc: "経営もシステムも、“言うだけ”で終わらせず、手を動かして一緒に進めます。", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /> },
              { title: "人数の上限なく、後から追加可能", desc: "経営の成長フェーズに合わせて、必要な専門顧問を何人でも同一料金で追加できます。", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" /> },
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
              COMON&apos;Sは、一般社団法人 全国起業家協会が展開する事業ネットワークの<span className="whitespace-nowrap">一員として</span>運営されています。
            </p>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="text-center mb-2">
              <span className="inline-block bg-lp text-white font-bold text-[13px] md:text-[14px] px-7 py-3.5 rounded-2xl shadow-lg">一般社団法人 全国起業家協会（統括法人）</span>
            </div>
            <div className="text-center text-lp-accent text-[20px] my-2">▾</div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {[
                { name: "BizOwner", logo: "/lp/bizowner-logo.png", tag: "個人向け", desc: "アカウント運用×\u200b起業支援" },
                { name: "SARUDEMO", logo: "/lp/sarudemo-logo.png", tag: "個人向け", desc: "FC型経営教育" },
                { name: "HitoHoshi", logo: "/lp/hitohoshi-logo.png", tag: "既存法人向け", desc: "採用代行×\u200b人材再活用" },
                { name: "KaneHoshi", logo: "/lp/kanehoshi-logo.png", tag: "既存法人向け", desc: "ECアカウント\u200b運用代行" },
                { name: "COMON'S", logo: "/lp/comons-logo.png", tag: "一人社長向け", desc: "多分野の顧問サービス", active: true },
              ].map((n) => (
                <div key={n.name} className={`rounded-2xl px-5 py-4 md:p-5 flex md:block items-center gap-4 text-left md:text-center border ${n.active ? "border-2 border-cta shadow-[0_12px_28px_-12px_rgba(232,93,47,0.3)]" : "border-gray-100 shadow-[0_6px_18px_-12px_rgba(11,42,74,0.08)]"}`}>
                  <div className="relative shrink-0 w-14 h-14 md:w-[68px] md:h-[68px] md:mx-auto md:mb-2">
                    <Image src={n.logo} alt="" fill sizes="68px" className="object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className={`font-bold text-[15px] md:text-[14px] mb-1 ${n.active ? "text-cta" : "text-text-dark"}`}>{n.name}</p>
                    <p className="text-[11px] md:text-[10px] text-text-light mb-1 md:mb-1.5">{n.tag}</p>
                    <p className="text-[11px] md:text-[10px] text-text-light">{n.desc}</p>
                  </div>
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
          </FadeSlide>
          <StaggerChildren staggerMs={150} className="relative pl-6 md:pl-10">
            <div className="absolute left-[27px] md:left-[41px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-lp-accent via-lp to-cta/20 rounded-full" />
            <div className="space-y-10">
              {[
                { title: "公式LINEでお問い合わせ", desc: "友だち追加のうえ、概要をご連絡ください。" },
                { title: "ヒアリング", desc: "現在の経営状況・課題、必要な顧問領域を確認。" },
                { title: "顧問選定・ご契約", desc: "登録済みの顧問から必要な人を必要なだけ選び、契約を締結します。" },
                { title: "伴走開始", desc: "月次の定例相談を中心に、必要に応じて随時適切なサポートを致します。", last: true },
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

      {/* ===== 08 Q&A ===== */}
      <section className="py-28 md:py-36 bg-white relative">
        <span className="lp-bg-number bottom-0 right-0">08</span>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <FadeSlide direction="up" className="text-center mb-14">
            <div className="lp-section-counter justify-center">
              <span className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em]">08 — FAQ</span>
            </div>
            <h2 className="font-bold text-text-dark text-[26px] md:text-[36px] leading-[1.5]">よくある質問</h2>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="space-y-4 lp-accordion">
            {[
              { q: "顧問は1名からでも契約できますか？", a: "はい、可能です。まとめて契約する必要はなく、今困っている分野の顧問1名から始められます。月額30,000円（税別）から、必要に応じて後から追加できます。" },
              { q: "顧問は自由に選べますか？", a: "はい。COMON'Sには様々な分野のプロが顧問として登録されており、その中からご自身の会社に必要な顧問を自由にお選びいただけます。カテゴリーの縛りはありません。" },
              { q: "契約期間や解約条件は？", a: "ご契約は最低1年間です。契約満了の1ヶ月前までにお申し出がない場合は自動更新となります。詳細は個別面談にてご説明します。" },
              { q: "顧問の人数に上限はありますか？", a: "上限はありません。経営の成長フェーズに合わせて、必要な専門顧問を何人でも同一料金（1名30,000円/月）で追加していただけます。" },
              { q: "自分も顧問として登録できますか？", a: "COMON'Sの顧問は、協会からの招待、又は信頼できる人物からの推薦のみで受け付けています。実務経験・実績の確認と、代表理事本人による面談を経て登録が決まります。誰でも自由に登録できるわけではありません。" },
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
        id="contact"
      >
        <div className="absolute inset-0 lp-dots-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lp-accent/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cta/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
          <FadeSlide direction="up">
            <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4">
              <Image src="/lp/comons-logo.png" alt="COMON'S" fill sizes="96px" className="object-contain brightness-0 invert" />
            </div>
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em] mb-6 uppercase">Contact</p>
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: "clamp(28px,5vw,48px)", lineHeight: 1.4 }}
            >
              先ずは経営の悩みを
              <br />
              聞かせてください。
            </h2>
            <p className="text-white/50 text-[15px] leading-[2] mb-12 max-w-lg mx-auto">
              顧問1名からでも構いません。今の状況に合わせて、
              <br className="hidden md:block" />
              最適な体制をご提案します。
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn lp-shine text-[18px] px-12 py-6 shadow-[0_0_40px_rgba(232,93,47,0.4)] hover:shadow-[0_0_60px_rgba(232,93,47,0.6)] hover:-translate-y-1 transition-all">
              <LineIcon className="w-7 h-7" />
              公式LINEで相談する
            </a>
            <p className="text-white/30 text-[12px] mt-8 leading-[1.8]">
              COMON&apos;S運営事務局：一般社団法人 全国起業家協会<br />
              Email：<a href="mailto:main@business-manabiya.com" className="underline hover:text-white/60">main@business-manabiya.com</a><span className="hidden md:inline">　</span><br className="md:hidden" />受付時間：平日 10:00-18:00
            </p>
          </FadeSlide>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#030e1c] py-12 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-[Montserrat] font-bold text-white/80 text-[18px] tracking-tight">COMON&apos;S<span className="text-lp-accent">.</span></p>
            </div>
            <div className="flex gap-6 text-[12px] text-white/40 font-medium">
              <Link href="/" className="hover:text-white/70 transition-colors">ホーム</Link>
              <Link href="/services" className="hover:text-white/70 transition-colors">サービス一覧</Link>
              <Link href="#contact" className="hover:text-white/70 transition-colors">お問い合わせ</Link>
            </div>
          </div>
          <p className="text-white/20 text-[11px] text-center mt-8 font-[Inter]">&copy; 2026 COMON&apos;S. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
