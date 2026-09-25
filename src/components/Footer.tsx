import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row">
        <div className="bg-footer-blue md:w-[280px] p-8 md:p-10 flex flex-col justify-between min-h-0 md:min-h-[200px]">
          <div>
            <p className="font-[Noto_Serif_JP] font-bold text-[18px] text-white tracking-[0.1em] mb-4">
              全国起業家協会
            </p>
            <p className="text-white/50 text-[12px] leading-[1.9]">
              ビジネスを、
              <br />
              より戦略的に、より本質的に。
            </p>
          </div>
        </div>
        <div className="flex-1 bg-bg-alt px-8 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="font-[Noto_Sans_JP] font-bold text-text-heading text-[12px] tracking-wider mb-4">
                サービス
              </p>
              <ul className="space-y-2.5 text-[13px] text-text-main">
                <li>
                  <Link
                    href="/bizowner"
                    className="hover:text-primary transition-colors whitespace-nowrap"
                  >
                    BizOwner
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sarudemo"
                    className="hover:text-primary transition-colors whitespace-nowrap"
                  >
                    SARUDEMO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/comons"
                    className="hover:text-primary transition-colors whitespace-nowrap"
                  >
                    COMON&apos;S
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hitohoshi"
                    className="hover:text-primary transition-colors whitespace-nowrap"
                  >
                    HitoHoshi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kanehoshi"
                    className="hover:text-primary transition-colors whitespace-nowrap"
                  >
                    KaneHoshi
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-[Noto_Sans_JP] font-bold text-text-heading text-[12px] tracking-wider mb-4">
                リンク
              </p>
              <ul className="space-y-2.5 text-[13px] text-text-main">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-primary transition-colors whitespace-nowrap"
                  >
                    サービス一覧
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="hover:text-primary transition-colors whitespace-nowrap"
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-[Noto_Sans_JP] font-bold text-text-heading text-[12px] tracking-wider mb-4">
                法的情報
              </p>
              <ul className="space-y-2.5 text-[13px] text-text-main">
                <li>
                  <Link href="/terms" className="hover:text-primary transition-colors whitespace-nowrap">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-primary transition-colors whitespace-nowrap">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white/40 text-center py-4 text-[11px] tracking-wider">
        &copy; 2026 全国起業家協会. All Rights Reserved.
      </div>
    </footer>
  );
}
