import { buildChatworkMessage, parseContact } from "../../../lib/contact";

/**
 * お問い合わせフォームの受付。入力を検証し、Chatworkのルームへ投稿する。
 *
 * 必要な環境変数（Vercel の Environment Variables）
 *   CHATWORK_API_TOKEN            … 投稿に使うChatworkのAPIトークン（秘密。ブラウザには出さない）
 *   CHATWORK_CONTACT_ROOM_ID      … （任意）投稿先ルームID。未設定なら下の既定値を使う
 */
export const runtime = "nodejs";

/** 既定の投稿先：Chatworkルーム「全国起業家協会/業務/メイン」（ルームIDは秘密情報ではない） */
const DEFAULT_ROOM_ID = "443131528";

// 簡易レート制限（同一IPから10分に5回まで）。サーバーレスのため完全ではなく、あくまで補助。
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;

function tooMany(ip: string): boolean {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 500) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return list.length > LIMIT;
}

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

export async function POST(req: Request) {
  // 別サイトからの送信を拒否（ブラウザが付けるOriginがこのサイトと同じ場合のみ許可）
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin) {
    let originHost = "";
    try {
      originHost = new URL(origin).host;
    } catch {}
    if (!host || originHost !== host) return json(403, { ok: false, error: "forbidden" });
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (tooMany(ip)) {
    return json(429, { ok: false, error: "短時間に何度も送信されています。しばらくしてからお試しください。" });
  }

  let raw = "";
  try {
    raw = await req.text();
  } catch {
    return json(400, { ok: false, error: "入力内容を確認できませんでした。" });
  }
  if (raw.length > 20000) return json(413, { ok: false, error: "入力内容が大きすぎます。" });

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, error: "入力内容を確認できませんでした。" });
  }

  // スパム対策の罠欄に入力があれば、成功したように見せて破棄
  if (body && typeof body === "object" && (body as Record<string, unknown>).botcheck) {
    return json(200, { ok: true });
  }

  const parsed = parseContact(body);
  if (!parsed.ok) return json(400, { ok: false, error: parsed.error });

  const token = process.env.CHATWORK_API_TOKEN;
  const roomId = process.env.CHATWORK_CONTACT_ROOM_ID || DEFAULT_ROOM_ID;
  if (!token || !roomId || !/^\d+$/.test(roomId)) {
    console.error("[contact] CHATWORK_API_TOKEN が未設定、またはルームIDが不正です");
    return json(503, { ok: false, error: "not_configured" });
  }

  try {
    const res = await fetch(`https://api.chatwork.com/v2/rooms/${roomId}/messages`, {
      method: "POST",
      headers: { "X-ChatWorkToken": token, "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ body: buildChatworkMessage(parsed.value), self_unread: "1" }),
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      // 秘密情報や利用者の入力は出さず、ステータスだけを記録
      console.error(`[contact] Chatwork投稿に失敗: HTTP ${res.status}`);
      return json(502, { ok: false, error: "delivery_failed" });
    }
    return json(200, { ok: true });
  } catch {
    console.error("[contact] Chatwork投稿で通信エラー");
    return json(502, { ok: false, error: "delivery_failed" });
  }
}
