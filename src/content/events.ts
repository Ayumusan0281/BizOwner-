/**
 * DeraBiz イベント一覧（/salon に表示）。
 * イベントを追加するときは、下の配列に1件ずつ書き足すだけでページに反映される。
 * 日付が過ぎたイベントは自動で「開催予定」から外れる。
 */

export type DeraEvent = {
  /** 一意のID（英数字） */
  id: string;
  /** ビジネスコンテスト / 経営者講演会 / ビジネス交流会 など */
  kind: string;
  title: string;
  /** 開催日（日本時間）。例: "2026-11-15" */
  date: string;
  /** 時間の表記。例: "14:00〜16:00" */
  time: string;
  /** 会場名。オンライン開催は行わない */
  place: string;
  /** 参加費の表記。未成年が参加するイベントは必ず無料 */
  fee: string;
  /** 一言の説明 */
  description: string;
  /** 申込先のURL（任意。無ければオープンチャットへ案内する） */
  applyUrl?: string;
};

export const events: DeraEvent[] = [];

/** 無料イベントの案内・申込に使うオープンチャット */
export const OPEN_CHAT_URL =
  "https://line.me/ti/g2/HtyIiX9PZX6ciRgA615IcdpPxTYplXmH_lxdpg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default";

/** コミュニティ（面談→会費→Slack）の入口となる公式LINE */
export const OFFICIAL_LINE_URL = "https://lin.ee/uO9SZPl";

/** 今日（日本時間）より前のイベントを除き、日付順に並べる */
export function upcomingEvents(now: Date = new Date()): DeraEvent[] {
  const today = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(now);
  return events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
}
