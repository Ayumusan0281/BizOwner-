import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeSlide from "@/components/manabiya/FadeSlide";
import StaggerChildren, { StaggerItem } from "@/components/manabiya/StaggerChildren";
import CountUp from "@/components/manabiya/CountUp";
import ImageReveal from "@/components/lp/ImageReveal";
import LineDivider from "@/components/lp/LineDivider";
import LineIcon from "@/components/LineIcon";
import { OFFICIAL_LINE_URL as LINE_URL, OPEN_CHAT_URL, upcomingEvents } from "@/content/events";

export const metadata: Metadata = {
  title: "DeraBiz オンラインサロン｜名古屋で学ぶ・試す・つながる",
  description:
    "名古屋のビジネスマン・学生がメインのオンラインサロン。毎週イベント、ビジネススクール、エンジェル投資家とのコネクション。月額3,000円（税別）、高校生は無料。",
};

const MARK = "/brand/derabiz-mark.png";
const EMAIL = "main@business-manabiya.com";

/* 1カラム用の本文幅 */
const COL = "max-w-[720px] mx-auto px-6 relative z-10";

function formatDate(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  const w = ["日", "月", "火", "水", "木", "金", "土"][new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return `${y}.${String(m).padStart(2, "0")}.${String(d).padStart(2, "0")}（${w}）`;
}

function Icon({ d, className = "w-6 h-6 text-white" }: { d: string; className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={d} />
    </svg>
  );
}

const ICON = {
  calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  school:
    "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  link: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  doc: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  bolt: "M13 10V3L4 14h7v7l9-11h-7z",
  chart:
    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
};

/* ── CTA Banner (full width) ── */
function CtaBannerFull() {
  return (
    <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #1a4f7a 50%, #0b2a4a 100%)" }}>
      <div className="absolute inset-0 lp-dots-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cta/20 rounded-full blur-[100px]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <p className="text-white/60 text-[13px] font-bold mb-4 tracking-wider">まずは公式LINEから</p>
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[16px] md:text-[18px] px-10 py-5">
          <LineIcon className="w-6 h-6" />
          公式LINEで参加・相談する
        </a>
        <p className="mt-4 text-[13px] text-white/50 font-medium">月額3,000円（税別）・高校生は無料</p>
      </div>
    </section>
  );
}

/* ── CTA Banner (card) ── */
function CtaBannerCard() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="lp-gradient-border">
          <div className="bg-white py-8 px-6 md:px-10 text-center">
            <p className="text-lp font-bold text-[18px] md:text-[22px] mb-2 text-balance">まずは話を聞いてみませんか</p>
            <p className="text-text-light text-[13px] mb-6">活動内容や参加については、公式LINEの無料相談でお話しできます</p>
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

/* ── Marquee ── */
function MarqueeBanner() {
  const items = ["名古屋で学ぶ・試す・つながる", "毎週イベント開催", "ビジネススクール", "エンジェル投資家とのコネクション", "月額3,000円（税別）", "高校生は無料"];
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

function SectionHead({ num, en, title, lead, dark }: { num: string; en: string; title: React.ReactNode; lead?: string; dark?: boolean }) {
  return (
    <FadeSlide direction="up" className="text-center mb-12">
      <div className={`lp-section-counter justify-center ${dark ? "text-white/40" : ""}`}>
        <span className={`font-[Inter] font-bold text-[12px] tracking-[0.3em] ${dark ? "" : "text-lp-accent"}`}>
          {num ? `${num} — ${en}` : en}
        </span>
      </div>
      <h2 className={`font-bold text-[26px] md:text-[34px] leading-[1.5] text-balance ${dark ? "text-white" : "text-text-dark"}`}>{title}</h2>
      {lead && <p className={`text-[14px] mt-5 leading-[1.9] text-balance ${dark ? "text-white/60" : "text-text-body"}`}>{lead}</p>}
    </FadeSlide>
  );
}

/* アイコン付きの1項目カード（縦に並べる用） */
function ItemCard({ icon, tag, title, desc }: { icon: string; tag?: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] flex gap-5 items-start">
      <div className="w-[52px] h-[52px] rounded-xl bg-lp flex items-center justify-center shrink-0 shadow-md">
        <Icon d={icon} />
      </div>
      <div className="min-w-0">
        {tag && <p className="text-[11px] font-bold text-lp-accent tracking-[0.16em] mb-1">{tag}</p>}
        <h3 className="font-bold text-text-dark text-[16px] mb-1.5 text-balance">{title}</h3>
        <p className="text-[13px] text-text-light leading-[1.9]">{desc}</p>
      </div>
    </div>
  );
}

const worries = [
  "起業に興味はあるが、何から始めればいいか分からない",
  "セミナーで学んでも、行動に移せず忘れてしまう",
  "学校や職場の外に、相談できる仲間や大人がいない",
  "名古屋の経営者や専門家と出会う機会がない",
  "自分のスキルを試せる場がない",
];

const ways = [
  { en: "LEARN", label: "学びたい", title: "実業家から学ぶ", desc: "一流の経営者や専門家の話を聞いて、次の一歩を決める" },
  { en: "TRY", label: "試したい", title: "作って、試す", desc: "企画書や商品案を作ってレビューを受ける。地元の事業者と小さな実践にも挑戦できる" },
  { en: "CONNECT", label: "つながりたい", title: "仲間と進む", desc: "同じ段階の仲間と進捗を共有して、行動を続けやすくする" },
];

const services = [
  { icon: ICON.calendar, tag: "SERVICE 01", title: "名古屋市内で毎週イベントを開催", desc: "実業家や仲間と会える場を、毎週つくります" },
  { icon: ICON.school, tag: "SERVICE 02", title: "ビジネススクール", desc: "顧問が監修。起業や仕事に必要な考え方を体系的に学べます" },
  { icon: ICON.link, tag: "SERVICE 03", title: "エンジェル投資家とのコネクション", desc: "エンジェル投資家とつながる機会を提供します（出資の成立を保証するものではありません）" },
];

const eventKinds = [
  { tag: "CONTEST", title: "ビジネスコンテスト", desc: "事業アイデアを形にして発表し、講評を受けて次の一手を見つける", img: "/lp/manabiya-bizcon.png" },
  { tag: "TALK", title: "経営者講演会", desc: "一流の経営者、専門家、挑戦者の実例を聞く", img: "/lp/manabiya-seminar.png" },
  { tag: "MEETUP", title: "ビジネス交流会", desc: "目的や段階が近い人と、少人数で話して仲間をつくる", img: "/lp/manabiya-party.png" },
];

const growth = [
  { icon: ICON.search, verb: "知る", title: "イベントを探す", desc: "気になるテーマを見つける" },
  { icon: ICON.book, verb: "学ぶ", title: "参加する", desc: "実業家の考え方に触れる" },
  { icon: ICON.doc, verb: "作る", title: "課題・成果物", desc: "学びを企画や資料にする" },
  { icon: ICON.bolt, verb: "試す", title: "プロジェクトに参加", desc: "小さく実践してみる" },
  { icon: ICON.chart, verb: "振り返る", title: "進捗会・活動レポート", desc: "結果と次の一手を共有する" },
  { icon: ICON.star, verb: "主催する", title: "主催者になる", desc: "自分の企画を立ち上げる" },
];

const overview = [
  { label: "名称", value: "DeraBiz メンバーシップ" },
  { label: "対象", value: "名古屋のビジネスマン・学生がメイン（他地域も大歓迎）" },
  { label: "備考", value: "高校生は無料（オープンチャットから無料イベントに参加できます）" },
  { label: "決済", value: "クレジットカード／キャリア決済" },
];

const tools = [
  { tag: "OPEN CHAT", title: "オープンチャット", badge: "無料・高校生はここのみ", desc: "無料イベントを宣伝します。ニックネームで参加でき、審査はありません" },
  { tag: "OFFICIAL LINE", title: "公式LINE", badge: "申込・面談・決済", desc: "メンバーシップの申込、オンライン面談の日程調整、お支払いのご案内を行います" },
  { tag: "SLACK", title: "Slack", badge: "有料会員限定", desc: "有料会員限定イベントとビジネススクールのご案内を行う、メンバー専用の場です" },
];

const freeSteps = [
  { title: "オープンチャットに参加", desc: "ニックネームでOK・審査なし" },
  { title: "無料イベントに申し込む", desc: "オープンチャットの案内から" },
  { title: "名古屋の会場で参加", desc: "会場はイベントごとにご案内します", last: true },
];

const memberSteps = [
  { title: "公式LINEを友だち追加", desc: "案内に沿って進めてください" },
  { title: "オンライン面談の日程を選ぶ", desc: "公式LINEで日程を調整します" },
  { title: "内容・ルール・会費を確認", desc: "面談で参加の目的もお伺いします" },
  { title: "承認後、会費を支払う", desc: "クレジットカード／キャリア決済" },
  { title: "お支払い確認後、Slackに参加", desc: "有料会員限定のご案内が届きます", last: true },
];

const promises = [
  { title: "勧誘は禁止です", desc: "マルチ商法、投資・情報商材・副業、宗教・政治の勧誘を禁止しています" },
  { title: "高校生も参加しやすい場", desc: "18歳未満が参加するイベントは無料・運営2名以上で実施します。大人との1対1の非公開のやり取りや、個人の連絡先の交換は求めません" },
  { title: "参加条件は事前にお伝えします", desc: "メンバーシップは面談あり・会費制です。金額や解約条件はお支払い前に確認できます" },
  { title: "困ったときは運営へ", desc: `${EMAIL} までご連絡ください` },
];

const faqs = [
  { q: "起業を決めていなくても参加できますか？", a: "はい。「興味がある」「話を聞いてみたい」から大丈夫です" },
  { q: "どんな人が対象ですか？", a: "名古屋のビジネスマン・学生がメインです。他地域の方も大歓迎です。高校生は無料イベントに参加できます" },
  { q: "イベントはオンラインでもありますか？", a: "イベントは名古屋市内の会場で開催します。オンライン開催はありません。会場はイベントごとにご案内します" },
  { q: "高校生でも参加できますか？", a: "はい。高校生は無料で、匿名で入れるオープンチャットから無料イベントに参加できます。有料会員限定のSlackには参加できません" },
  { q: "参加費はかかりますか？", a: "メンバーシップは月額3,000円（税別）です。オープンチャットと無料イベントは無料で、高校生も無料です。お支払いはクレジットカードまたはキャリア決済です" },
  { q: "オープンチャットでは何をしますか？", a: "無料イベントの情報をお知らせします。ニックネームで参加でき、本名や連絡先は不要です。勧誘や個別の連絡、連絡先の交換は禁止です" },
  { q: "面談は何をするのですか？", a: "メンバーシップに参加する方に、内容・参加ルール・会費をお伝えし、参加の目的を確認します。ルールに合わない場合は参加をお断りすることがあります。承認後にお支払いをご案内します" },
  { q: "どんなイベントがありますか？", a: "ビジネスコンテスト、経営者講演会、ビジネス交流会を名古屋市内で毎週開催します。無料イベントの日程はオープンチャットでご案内します" },
  { q: "勧誘されませんか？", a: "マルチ商法・投資・情報商材・副業・宗教・政治の勧誘は禁止しています。困ったときは運営にご連絡ください" },
  { q: "やめたくなったら？", a: "いつでも解約できます。解約方法と受付期限はお支払い前にご案内します。原則として返金はありません" },
];

export default function SalonPage() {
  const upcoming = upcomingEvents();

  return (
    <div className="font-sans text-text-body bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-white">
        <Link href="#" aria-label="DeraBiz" className="absolute top-4 left-4 md:top-6 md:left-8 z-30 inline-flex items-center gap-2">
          <Image src={MARK} alt="" width={96} height={96} priority className="h-12 md:h-14 w-auto select-none" />
          <span className="font-[Noto_Serif_JP] font-medium text-lp text-[20px] md:text-[24px] tracking-[0.08em]">DeraBiz</span>
        </Link>
        <div className="absolute inset-0 lp-dots-pattern" />
        <div className="absolute top-[-10%] -left-[10%] w-96 h-96 bg-lp-sky rounded-full mix-blend-multiply blur-[80px] opacity-70 blob-float pointer-events-none" />
        <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-lp-sky rounded-full mix-blend-multiply blur-[80px] opacity-50 blob-float-delay pointer-events-none" />
        <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-gray-100 rounded-full mix-blend-multiply blur-[80px] opacity-50 blob-float-delay-2 pointer-events-none" />
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
                  <span className="text-lp font-bold text-[13px]">月額3,000円（税別）・高校生は無料</span>
                </div>
              </FadeSlide>
              <FadeSlide direction="up" delay={300} className="order-2 md:order-none">
                <h1 className="font-bold text-text-dark" style={{ fontSize: "clamp(26px,4.6vw,50px)", lineHeight: 1.35, letterSpacing: "0.02em" }}>
                  名古屋で
                  <br />
                  <span className="text-lp-accent lp-marker whitespace-nowrap">学ぶ・試す・つながる</span>
                </h1>
              </FadeSlide>
              <FadeSlide direction="up" delay={500} className="order-4 md:order-none">
                <p className="text-[16px] md:text-[18px] text-text-body leading-[1.9] max-w-lg">
                  起業や仕事に挑戦したい人が、実業家から学び、仲間と行動に変えるオンラインサロンです
                </p>
                <p className="text-[13px] text-text-light mt-3">名古屋のビジネスマン・学生がメイン（他地域も大歓迎）</p>
              </FadeSlide>
              <FadeSlide direction="up" delay={700} className="order-5 md:order-none">
                <div className="flex flex-col gap-3">
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[16px] md:text-[18px] w-full max-w-md px-8 py-5 justify-center">
                    <LineIcon className="w-6 h-6" />
                    公式LINEで参加・相談する
                  </a>
                  <a href={OPEN_CHAT_URL} target="_blank" rel="noopener noreferrer" className="text-lp font-bold text-[14px] underline underline-offset-4 ml-2">
                    まずは無料イベントを見る ↗
                  </a>
                </div>
              </FadeSlide>
            </div>
            <FadeSlide direction="right" delay={400} className="order-3 md:order-none my-1 md:my-0">
              <div className="flex justify-center relative">
                <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-tr from-lp-accent to-lp rounded-2xl rotate-3 scale-[1.02] opacity-10" />
                <ImageReveal immediate direction="right" className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border-4 border-white relative z-10">
                  <Image src="/lp/salon-nagoya.jpg" alt="名古屋城" width={1920} height={1080} className="w-full h-full object-cover object-[50%_40%]" priority />
                </ImageReveal>
                <div className="absolute -bottom-4 right-3 md:right-6 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 lp-float-slow border border-gray-100">
                  <p className="text-[10px] text-text-light font-medium">メンバーシップ</p>
                  <p className="whitespace-nowrap font-[Inter] font-bold text-lp text-[18px] md:text-[22px]">¥3,000<span className="text-[11px] text-text-light font-normal">/月</span></p>
                </div>
                <div className="absolute -top-2 -right-2 md:-right-6 bg-white rounded-xl shadow-lg p-3 md:p-4 z-20 lp-float-medium border border-gray-100">
                  <p className="text-[10px] text-text-light font-medium">高校生</p>
                  <p className="font-bold text-cta text-[18px] md:text-[22px]">無料</p>
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

      <MarqueeBanner />

      {/* ===== 01 課題 ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #0b2a4a 0%, #132d4a 100%)" }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className={COL}>
          <SectionHead num="01" en="YOUR FIRST STEP" dark title={<>やりたいことが決まっていなくても<span className="text-lp-accent lp-marker">大丈夫</span></>} lead="こんな気持ちから始めて大丈夫です" />
          <StaggerChildren staggerMs={100} className="space-y-4">
            {worries.map((w, i) => (
              <StaggerItem key={w}>
                <div className="lp-glass-dark rounded-2xl p-5 md:p-6 border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="font-[Inter] font-bold text-lp-accent text-[13px]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="font-bold text-white text-[14px] md:text-[15px] leading-[1.8] text-balance">{w}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeSlide direction="up" className="text-center mt-14">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6">
              <p className="text-white font-bold text-[20px] md:text-[24px] leading-[1.6]">
                その悩み、<span className="text-cta lp-marker-orange">DeraBiz</span>が解決します
              </p>
              <p className="text-white/60 text-[13px] mt-2">学ぶだけで終わらず、次の行動まで進める場所です</p>
            </div>
          </FadeSlide>
        </div>
      </section>

      <CtaBannerFull />

      {/* ===== 02 THREE WAYS ===== */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-lines-pattern" />
        <span className="lp-bg-number top-24 left-0">02</span>
        <div className={COL}>
          <SectionHead num="02" en="THREE WAYS TO BEGIN" title={<>あなたの<span className="text-lp-accent lp-marker">「やってみたい」</span>から</>} lead="入口はひとつではありません。今の自分に合う一歩を選べます" />
          <StaggerChildren staggerMs={120} className="space-y-4">
            {ways.map((w, i) => (
              <StaggerItem key={w.en}>
                <div className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] flex gap-5 items-start">
                  <div className="w-[52px] h-[52px] rounded-xl bg-lp flex items-center justify-center shrink-0 shadow-md">
                    <span className="font-[Inter] font-bold text-white text-[15px]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-lp-accent tracking-[0.16em] mb-1">
                      {w.en} ／ {w.label}
                    </p>
                    <h3 className="font-bold text-text-dark text-[17px] mb-1.5">{w.title}</h3>
                    <p className="text-[13px] text-text-light leading-[1.9]">{w.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CtaBannerCard />

      {/* ===== 03 SERVICE ===== */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f7f9fc 0%, #eef3f9 100%)" }}>
        <div className="absolute inset-0 lp-dots-pattern opacity-50" />
        <span className="lp-bg-number top-12 right-12">03</span>
        <div className={COL}>
          <SectionHead num="03" en="SERVICE" title={<>オンラインサロンの<span className="text-lp-accent lp-marker">サービス内容</span></>} lead="聞いて終わりにせず、学びを使える経験に変えていきます" />
          <StaggerChildren staggerMs={120} className="space-y-4">
            {services.map((s) => (
              <StaggerItem key={s.tag}>
                <ItemCard {...s} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <LineDivider />

      {/* ===== 04 EVENT ===== */}
      <section className="py-24 md:py-32 bg-white relative">
        <span className="lp-bg-number top-0 left-0">04</span>
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <SectionHead num="04" en="EVENT" title="開催するイベント" lead="開催内容はイベントごとにご案内します" />
          <StaggerChildren staggerMs={150} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {eventKinds.map((e) => (
              <StaggerItem key={e.tag}>
                <div className="h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={e.img} alt={e.title} fill sizes="(min-width:768px) 320px, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] font-bold text-lp-accent tracking-[0.16em] mb-2">{e.tag}</p>
                    <h3 className="font-bold text-text-dark text-[17px] mb-2">{e.title}</h3>
                    <p className="text-[13px] text-text-body leading-[1.9]">{e.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {upcoming.length > 0 && (
            <div className="max-w-[720px] mx-auto space-y-4 mb-10">
              {upcoming.map((e) => (
                <div key={e.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-block text-[11px] font-bold tracking-[0.1em] px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2a6fa5]">{e.kind}</span>
                    <span className="font-[Inter] font-bold text-lp text-[14px]">
                      {formatDate(e.date)} {e.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-text-dark text-[18px] mb-2">{e.title}</h3>
                  <p className="text-[13px] text-text-body leading-[1.9] mb-3">{e.description}</p>
                  <p className="text-[12.5px] text-text-light">
                    会場：{e.place} ／ 参加費：{e.fee}
                  </p>
                </div>
              ))}
            </div>
          )}

          <FadeSlide direction="up" className="text-center">
            <a href={OPEN_CHAT_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-glow lp-shine text-[16px] md:text-[18px] px-10 py-5">
              まずは無料イベントに参加 ↗
            </a>
          </FadeSlide>
        </div>
      </section>

      {/* ===== 05 GROW ===== */}
      <section className="py-24 md:py-32 bg-bg-section relative">
        <span className="lp-bg-number top-48 left-12">05</span>
        <div className={COL}>
          <SectionHead num="05" en="GROW AT YOUR OWN PACE" title={<>最初は見るだけでOK、慣れたら<span className="text-lp-accent lp-marker">実践</span>へ</>} lead="すべてを一度にやらなくて大丈夫。自分のペースで関わり方を深められます" />
          <StaggerChildren staggerMs={110} className="space-y-4">
            {growth.map((g, i) => (
              <StaggerItem key={g.title}>
                <ItemCard icon={g.icon} tag={`STEP ${String(i + 1).padStart(2, "0")} ／ ${g.verb}`} title={g.title} desc={g.desc} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CtaBannerFull />

      {/* ===== 06 MEMBERSHIP ===== */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 lp-lines-pattern opacity-30" />
        <div className={COL}>
          <SectionHead num="06" en="MEMBERSHIP" title="メンバーシップの概要" lead="まずは無料イベントから。本格的に取り組みたくなったら、メンバーシップへ" />
          <FadeSlide direction="up">
            <div className="relative p-[2px] rounded-3xl overflow-hidden mb-8" style={{ background: "linear-gradient(135deg, #4a9bd9, #1a4f7a, #4a9bd9)" }}>
              <div className="p-10 md:p-12 rounded-[22px] text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #061729 100%)" }}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-lp-accent/20 rounded-full blur-[80px] mix-blend-screen" />
                <h3 className="text-lp-accent font-bold text-[16px] md:text-[18px] mb-4 tracking-widest relative z-10">メンバーシップ会費</h3>
                <div className="flex justify-center items-baseline gap-2 mb-3 relative z-10">
                  <span className="font-[Inter] text-[48px] md:text-[64px] font-bold text-white">
                    <CountUp end={3000} />
                  </span>
                  <span className="text-white/80 font-bold text-[16px] md:text-[18px]">円 / 月</span>
                </div>
                <p className="text-white/60 text-[12px] md:text-[13px] relative z-10 text-balance">税別・毎週のイベント、ビジネススクール、Slackを含みます</p>
              </div>
            </div>
          </FadeSlide>
          <FadeSlide direction="up">
            <div className="bg-gradient-to-r from-cta to-[#d04f24] text-white text-center py-6 px-4 md:px-8 rounded-2xl mb-12 shadow-lg font-bold text-[16px] md:text-[20px] text-balance -rotate-1 hover:rotate-0 transition-transform border border-white/20 lp-shine relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPgo8L3N2Zz4=')] opacity-50" />
              <span className="relative z-10">高校生は無料で参加できます</span>
            </div>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="space-y-3 mb-14">
            {overview.map((o) => (
              <StaggerItem key={o.label}>
                <div className="bg-bg-section rounded-2xl px-6 py-5 border border-gray-100">
                  <p className="text-[11px] font-bold text-lp-accent tracking-[0.1em] mb-1">{o.label}</p>
                  <p className="text-[14px] font-bold text-text-dark leading-[1.7]">{o.value}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeSlide direction="up">
            <p className="text-center font-bold text-lp text-[15px] mb-6">使用するツール</p>
          </FadeSlide>
          <StaggerChildren staggerMs={100} className="space-y-4">
            {tools.map((t) => (
              <StaggerItem key={t.tag}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <p className="text-[11px] font-bold text-lp-accent tracking-[0.1em] mb-2">{t.tag}</p>
                  <h3 className="font-bold text-text-dark text-[16px] mb-1">{t.title}</h3>
                  <p className="text-[11.5px] font-bold text-cta mb-3">{t.badge}</p>
                  <p className="text-[13px] text-text-light leading-[1.9]">{t.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== 07 HOW TO JOIN（2パターンを横並び） ===== */}
      <section className="py-24 md:py-32 bg-bg-section relative">
        <div className="max-w-[1000px] mx-auto px-6">
          <SectionHead num="07" en="HOW TO JOIN" title={<>今のあなたに合う<span className="text-lp-accent lp-marker">参加のしかた</span></>} lead="まずは無料イベントから。本格的に取り組みたくなったら、オンラインサロンへ" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-start">
            {[
              { label: "OPEN CHAT → EVENT", title: "まずは無料で参加", sub: "どなたでも・高校生もOK", steps: freeSteps, href: OPEN_CHAT_URL, cta: "無料イベントを見る ↗", line: false },
              { label: "LINE → INTERVIEW → SLACK", title: "オンラインサロンに本格参加", sub: "面談あり・月額3,000円（税別）", steps: memberSteps, href: LINE_URL, cta: "公式LINEで参加する", line: true },
            ].map((route) => (
              <FadeSlide key={route.title} direction="up">
                <div className="bg-white rounded-3xl p-7 md:p-8 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] flex flex-col">
                  <p className="text-[11px] font-bold text-lp-accent tracking-[0.16em] mb-2">{route.label}</p>
                  <h3 className="font-bold text-text-dark text-[19px] mb-1">{route.title}</h3>
                  <p className="text-[12px] text-text-light mb-7">{route.sub}</p>
                  <div className="relative pl-1 mb-8">
                    <div className="absolute left-[19px] top-5 bottom-5 w-[2px] bg-gradient-to-b from-lp-accent via-lp to-cta/20 rounded-full" />
                    <div className="space-y-6">
                      {route.steps.map((s, i) => (
                        <div key={s.title} className="relative flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-full ${s.last ? "bg-gradient-to-br from-cta to-[#d04f24] text-white shadow-[0_4px_20px_rgba(232,93,47,0.3)]" : "bg-white border-2 border-lp-accent text-lp-accent"} flex items-center justify-center font-[Inter] font-bold text-[14px] relative z-10 shrink-0`}>
                            {i + 1}
                          </div>
                          <div className="pt-1">
                            <h4 className="font-bold text-text-dark text-[14.5px] mb-0.5">{s.title}</h4>
                            <p className="text-[12px] text-text-light leading-[1.8]">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href={route.href} target="_blank" rel="noopener noreferrer" className="cta-btn lp-shine text-[14px] px-6 py-4 mt-auto justify-center">
                    {route.line && <LineIcon className="w-5 h-5" />}
                    {route.cta}
                  </a>
                </div>
              </FadeSlide>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROMISE ===== */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className={COL}>
          <SectionHead num="" en="OUR PROMISE" title="安心して挑戦できる場に" lead="一緒に学ぶ人の時間と気持ちを大切にするためのルールです" />
          <StaggerChildren staggerMs={100} className="space-y-4">
            {promises.map((p) => (
              <StaggerItem key={p.title}>
                <ItemCard icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" title={p.title} desc={p.desc} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <LineDivider />

      {/* ===== 08 FAQ ===== */}
      <section className="py-24 md:py-32 bg-bg-section relative">
        <span className="lp-bg-number bottom-0 right-0">08</span>
        <div className={COL}>
          <SectionHead num="08" en="FAQ" title="よくある質問" />
          <StaggerChildren staggerMs={100} className="space-y-4 lp-accordion">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
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

      <LineDivider />

      {/* ===== 最終CTA ===== */}
      <section className="relative py-32 md:py-44 overflow-hidden" style={{ background: "linear-gradient(180deg, #0b2a4a 0%, #05162b 100%)" }} id="contact">
        <div className="absolute inset-0 lp-dots-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lp-accent/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cta/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
          <FadeSlide direction="up">
            <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4">
              <Image src={MARK} alt="DeraBiz" fill sizes="96px" className="object-contain brightness-0 invert" />
            </div>
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.3em] mb-6 uppercase">Your next chapter</p>
            <h2 className="font-bold text-white mb-6 text-balance" style={{ fontSize: "clamp(28px,5vw,46px)", lineHeight: 1.4 }}>
              次の一歩は、ここから
            </h2>
            <p className="text-white/50 text-[15px] leading-[2] mb-12 text-balance">
              「ちょっと気になる」その気持ちを、名古屋で行動に。まずは無料イベントから、本格的に参加するなら公式LINEから
            </p>
            <div className="flex flex-col items-center gap-5">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn lp-shine text-[18px] px-12 py-6 shadow-[0_0_40px_rgba(232,93,47,0.4)] hover:shadow-[0_0_60px_rgba(232,93,47,0.6)] hover:-translate-y-1 transition-all">
                <LineIcon className="w-7 h-7" />
                公式LINEで参加・相談する
              </a>
              <a href={OPEN_CHAT_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 text-[14px] underline underline-offset-4 hover:text-white">
                まずは無料イベントを見る（高校生もOK） ↗
              </a>
            </div>
            <p className="text-white/30 text-[12px] mt-8 leading-[1.8]">
              Email：
              <a href={`mailto:${EMAIL}`} className="underline hover:text-white/60">
                {EMAIL}
              </a>
              <span className="hidden md:inline">　</span>
              <span className="block md:inline">受付時間：平日 10:00-18:00</span>
            </p>
          </FadeSlide>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#030e1c] py-12 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-[Montserrat] font-bold text-white/80 text-[18px] tracking-tight">
              DeraBiz<span className="text-lp-accent">.</span>
            </p>
            <div className="flex gap-6 text-[12px] text-white/40 font-medium">
              <Link href="/" className="hover:text-white/70 transition-colors">ホーム</Link>
              <Link href="/services" className="hover:text-white/70 transition-colors">サービス一覧</Link>
              <Link href="#contact" className="hover:text-white/70 transition-colors">お問い合わせ</Link>
            </div>
          </div>
          <p className="text-white/20 text-[11px] text-center mt-8 font-[Inter]">&copy; 2026 DeraBiz. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
