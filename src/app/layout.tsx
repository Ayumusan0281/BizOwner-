import type { Metadata } from "next";
import { Inter, Josefin_Sans, Montserrat, Noto_Sans_JP, Noto_Serif_JP, Orbitron, RocknRoll_One, Yusei_Magic } from "next/font/google";
import "./globals.css";
import PhraseBreaks from "@/components/PhraseBreaks";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const rocknRollOne = RocknRoll_One({
  variable: "--font-rocknroll",
  subsets: ["latin"],
  weight: ["400"],
});

const yuseiMagic = Yusei_Magic({
  variable: "--font-yusei",
  subsets: ["latin"],
  weight: ["400"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "一般社団法人 全国起業家協会",
    template: "%s | 全国起業家協会",
  },
  description:
    "営業支援・コミュニティ構築・経営支援で、事業成長を加速します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${josefinSans.variable} ${montserrat.variable} ${notoSansJP.variable} ${notoSerifJP.variable} ${rocknRollOne.variable} ${yuseiMagic.variable} ${orbitron.variable}`}
    >
      <body className="font-sans text-text-main bg-white overflow-x-hidden">
        {children}
        <PhraseBreaks />
      </body>
    </html>
  );
}
