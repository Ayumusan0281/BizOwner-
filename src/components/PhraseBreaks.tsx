"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * スマホ表示専用：日本語の改行を「文節（フレーズ）」単位に揃える。
 *
 * Safari など word-break: auto-phrase 未対応のブラウザでは、文の途中（単語の真ん中）で
 * 改行されてしまう。Google の BudouX で文節境界を求め、その位置にゼロ幅スペースを挿入し、
 * CSS（.budoux-block）で文節の途中では折り返さないようにする。
 * インライン要素（強調・リンクなど）をまたぐ文も1つの文として解析される。
 * PC幅（768px以上）では何もしない（PC版の見た目は変えない）。
 */
export default function PhraseBreaks() {
  const pathname = usePathname();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    if (!mq.matches) return;

    let cancelled = false;
    // ハイドレーション完了後（Reactの描画が落ち着いてから）に実行
    const timer = window.setTimeout(async () => {
      const { HTMLProcessingParser, jaModel } = await import("budoux");
      if (cancelled) return;
      const parser = new HTMLProcessingParser(jaModel, {
        className: "budoux-block",
        separator: "\u200b",
      });
      parser.applyToElement(document.body);
      document.documentElement.classList.add("js-phrase");
    }, 400);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
