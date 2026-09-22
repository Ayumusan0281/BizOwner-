import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KaneHoshi｜準備中",
};

export default function KaneHoshiPage() {
  return (
    <div
      className="min-h-[100vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #3a2a0b 0%, #0b2a4a 100%)" }}
    >
      <div className="absolute inset-0 lp-dots-pattern opacity-20" />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/lp/kanehoshi-logo.png"
          alt="KaneHoshi"
          width={400}
          height={400}
          priority
          className="h-16 md:h-20 w-auto mb-8 brightness-0 invert opacity-90"
        />
        <p className="font-[Inter] font-bold text-white/50 text-[12px] tracking-[0.3em] mb-4 uppercase">Coming Soon</p>
        <h1 className="font-bold text-white text-[24px] md:text-[32px] leading-[1.6] mb-4">
          KaneHoshiのLPは、只今準備中です。
        </h1>
        <p className="text-white/60 text-[14px] leading-[2] max-w-md mb-10">
          ECアカウント運用代行で売上実績を積み上げ、企業の「カネ」を支えるサービスです。公開まで今しばらくお待ちください。
        </p>
        <Link href="/services" className="cta-btn lp-shine px-8 py-4 text-[14px]">
          サービス一覧へ戻る
        </Link>
      </div>
    </div>
  );
}
