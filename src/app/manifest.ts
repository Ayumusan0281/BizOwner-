import type { MetadataRoute } from "next";

/**
 * ホーム画面／デスクトップにショートカットを作成したときの名称とアイコン。
 * DeraBizのDB＋ゴールドの公式モノグラムを使用。素材は public/brand/ にある。
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "株式会社DeraBiz",
    short_name: "DeraBiz",
    description: "営業支援・コミュニティ構築・経営支援で、事業成長を加速します。",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "ja",
    icons: [
      { src: "/brand/derabiz-db-20261012-icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brand/derabiz-db-20261012-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/brand/derabiz-db-20261012-icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
