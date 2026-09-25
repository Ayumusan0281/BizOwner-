/**
 * お問い合わせフォームの検証と、Chatwork投稿メッセージの組み立て（サーバー側で使用）。
 * 副作用のない純粋な関数だけを置く。
 */

export const CATEGORY_LABELS: Record<string, string> = {
  bizowner: "BizOwnerについて",
  sarudemo: "SARUDEMOについて",
  comons: "COMON'Sについて",
  hitohoshi: "HitoHoshiについて",
  kanehoshi: "KaneHoshiについて",
  other: "全国起業家協会について・その他",
};

export const MAX_MESSAGE = 3000;

export type ContactInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

/** 検証。問題なければ整形済みの入力、問題があればエラーメッセージを返す */
export function parseContact(body: unknown): { ok: true; value: ContactInput } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "入力内容を確認できませんでした。" };
  const b = body as Record<string, unknown>;
  const value: ContactInput = {
    name: str(b.name, 100),
    company: str(b.company, 100),
    email: str(b.email, 200),
    phone: str(b.phone, 30),
    category: str(b.category, 30),
    message: typeof b.message === "string" ? b.message.trim() : "",
  };
  if (!value.name || !value.email || !value.category || !value.message) {
    return { ok: false, error: "必須項目をご入力ください。" };
  }
  if (!EMAIL_RE.test(value.email)) return { ok: false, error: "メールアドレスの形式をご確認ください。" };
  if (!(value.category in CATEGORY_LABELS)) return { ok: false, error: "お問い合わせ内容を選択してください。" };
  if (value.message.length > MAX_MESSAGE) {
    return { ok: false, error: `メッセージは${MAX_MESSAGE}文字以内でご入力ください。` };
  }
  return { ok: true, value };
}

/**
 * Chatworkの記法（[To:…]・[info]など）として解釈されないよう、利用者の入力に含まれる
 * 角かっこを全角に置き換える（他人へのメンション等の悪用を防ぐ）。
 */
export function neutralize(text: string): string {
  return text.replace(/\[/g, "［").replace(/\]/g, "］");
}

export function buildChatworkMessage(v: ContactInput, when: Date = new Date()): string {
  const jst = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(when);
  const label = CATEGORY_LABELS[v.category] ?? v.category;
  const line = (k: string, val: string) => `${k}：${val ? neutralize(val) : "（未記入）"}`;
  return [
    `[info][title]【サイトからのお問い合わせ】${label}[/title]`,
    line("受付日時", `${jst}（日本時間）`),
    line("お名前", v.name),
    line("会社名・団体名", v.company),
    line("メールアドレス", v.email),
    line("電話番号", v.phone),
    "",
    "▼ メッセージ",
    neutralize(v.message),
    "[/info]",
  ].join("\n");
}
