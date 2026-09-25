"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CATEGORY_LABELS, MAX_MESSAGE } from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

const CONTACT_EMAIL = "main@business-manabiya.com";
const LINE_URL = "https://lin.ee/woJeT8Q";

const inputClass =
  "w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[16px] md:text-[14px]";
const labelClass =
  "block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2";

function Required() {
  return (
    <span className="ml-1 text-[11px] font-bold text-white bg-primary rounded-sm px-1.5 py-[1px] align-middle">
      必須
    </span>
  );
}

/** 送信できなかったときの代替の連絡手段 */
function Fallback() {
  return (
    <p className="font-[Noto_Sans_JP] text-[13px] leading-[2] text-text-main">
      お急ぎの場合は、
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2"
      >
        公式LINE
      </a>
      またはメール（
      <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
        {CONTACT_EMAIL}
      </a>
      ）からもご連絡いただけます。
    </p>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const errorRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "error") errorRef.current?.focus();
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // スパム対策：人間には見えない欄に入力があれば、送ったふりをして破棄
    if (data.get("botcheck")) {
      setStatus("success");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const category = String(data.get("category") ?? "");

    if (!name || !email || !message || !category) {
      setStatus("error");
      setErrorMessage("必須項目をご入力ください。");
      return;
    }
    if (message.length > MAX_MESSAGE) {
      setStatus("error");
      setErrorMessage(`メッセージは${MAX_MESSAGE}文字以内でご入力ください。`);
      return;
    }
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      name,
      company: String(data.get("company") ?? "").trim(),
      email,
      phone: String(data.get("phone") ?? "").trim(),
      category,
      message,
      botcheck: "",
    };

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 20000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const result = await res.json().catch(() => ({}));

      if (res.ok && result.ok) {
        setStatus("success");
        form.reset();
      } else if (res.status === 400 || res.status === 429) {
        setStatus("error");
        setErrorMessage(result.error || "入力内容をご確認ください。");
      } else if (res.status === 503) {
        setStatus("error");
        setErrorMessage("現在、フォームからの送信を準備中です。恐れ入りますが、下記の方法でご連絡ください。");
      } else {
        setStatus("error");
        setErrorMessage("送信に失敗しました。お手数ですが、時間をおいて再度お試しください。");
      }
    } catch {
      setStatus("error");
      setErrorMessage("送信に失敗しました。通信環境をご確認のうえ、再度お試しください。");
    } finally {
      window.clearTimeout(timer);
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="bg-white border border-[#e0e0e0] p-8 md:p-12 text-center outline-none"
      >
        <div className="w-14 h-14 rounded-full bg-primary-light text-primary flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-[Noto_Sans_JP] text-[18px] font-semibold text-text-heading mb-3">
          送信ありがとうございます。
        </p>
        <p className="font-[Noto_Sans_JP] text-[14px] text-text-main leading-[2] mb-6">
          お問い合わせを受け付けました。
          <br />
          担当者より、平日10:00〜18:00の間に順次ご連絡いたします。
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-[Noto_Sans_JP] text-[13px] text-primary underline underline-offset-2"
        >
          続けて別の内容を送る
        </button>
      </div>
    );
  }

  return (
    <form
      className="relative bg-white border border-[#e0e0e0] p-6 sm:p-8 md:p-12"
      onSubmit={handleSubmit}
      aria-describedby={status === "error" ? "form-error" : undefined}
    >
      {/* スパム対策の罠（人には見えない） */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          こちらは空欄のままにしてください
          <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            お名前
            <Required />
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            className={inputClass}
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelClass}>
            会社名・団体名
          </label>
          <input
            id="cf-company"
            type="text"
            name="company"
            autoComplete="organization"
            maxLength={100}
            className={inputClass}
            placeholder="株式会社〇〇（個人の方は空欄で構いません）"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            メールアドレス
            <Required />
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            inputMode="email"
            maxLength={200}
            className={inputClass}
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            電話番号
          </label>
          <input
            id="cf-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            maxLength={30}
            className={inputClass}
            placeholder="090-0000-0000"
          />
        </div>
        <div>
          <label htmlFor="cf-category" className={labelClass}>
            お問い合わせ内容
            <Required />
          </label>
          <select
            id="cf-category"
            name="category"
            required
            defaultValue=""
            className={`${inputClass} text-text-main`}
          >
            <option value="" disabled>
              選択してください
            </option>
            {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-message" className={labelClass}>
            メッセージ
            <Required />
          </label>
          <textarea
            id="cf-message"
            rows={6}
            name="message"
            required
            maxLength={MAX_MESSAGE}
            className={`${inputClass} resize-y`}
            placeholder="ご相談内容や、ご希望の連絡方法・時間帯などをご記入ください"
          />
        </div>

        <div className="border-t border-[#eeeeee] pt-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-[5px] w-[18px] h-[18px] shrink-0 accent-[#006785]"
            />
            <span className="font-[Noto_Sans_JP] text-[13px] leading-[1.9] text-text-main">
              <Link
                href="/privacy"
                target="_blank"
                className="text-primary underline underline-offset-2"
              >
                プライバシーポリシー
              </Link>
              に同意します。
              <Required />
            </span>
          </label>
        </div>

        {status === "error" && (
          <div
            id="form-error"
            ref={errorRef}
            tabIndex={-1}
            role="alert"
            className="border border-red-200 bg-red-50 p-4 outline-none"
          >
            <p className="font-[Noto_Sans_JP] text-[13px] text-red-700 leading-[1.9] mb-2">
              {errorMessage}
            </p>
            <Fallback />
          </div>
        )}

        <div className="text-center pt-2">
          <button
            type="submit"
            className="btn-ghost disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "送信中..." : "送信する"}
            <span className="arrow"></span>
          </button>
          <p className="font-[Noto_Sans_JP] text-[12px] text-text-light mt-4 leading-[1.9]">
            平日 10:00〜18:00 の間に、順次ご連絡いたします。
          </p>
        </div>
      </div>
    </form>
  );
}
