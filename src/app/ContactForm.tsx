"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const CATEGORY_LABELS: Record<string, string> = {
  sales: "営業支援について",
  community: "コミュニティー運営について",
  consulting: "経営コンサルティングについて",
  other: "その他",
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;

    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMessage(
        "送信設定が未完了です。お手数ですがしばらくしてから再度お試しください。"
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const data = new FormData(form);
    const category = String(data.get("category") ?? "");

    const payload = {
      access_key: ACCESS_KEY,
      subject: "【全国起業家協会】お問い合わせフォームからの新着メッセージ",
      from_name: "全国起業家協会 お問い合わせフォーム",
      name: data.get("name"),
      company: data.get("company") || "（未記入）",
      email: data.get("email"),
      phone: data.get("phone") || "（未記入）",
      category: CATEGORY_LABELS[category] ?? category,
      message: data.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          "送信に失敗しました。お手数ですが時間をおいて再度お試しください。"
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "送信に失敗しました。通信環境をご確認のうえ、再度お試しください。"
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-[#e0e0e0] p-8 md:p-12 text-center">
        <p className="font-[Noto_Sans_JP] text-[18px] font-semibold text-text-heading mb-3">
          送信ありがとうございます。
        </p>
        <p className="font-[Noto_Sans_JP] text-[14px] text-text-main leading-relaxed">
          お問い合わせを受け付けました。
          <br />
          担当者より追ってご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form
      className="bg-white border border-[#e0e0e0] p-8 md:p-12"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6">
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            お名前 <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px]"
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            会社名
          </label>
          <input
            type="text"
            name="company"
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px]"
            placeholder="株式会社〇〇"
          />
        </div>
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            メールアドレス <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px]"
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            電話番号
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px]"
            placeholder="090-0000-0000"
          />
        </div>
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            お問い合わせ内容 <span className="text-red-500 text-xs">*</span>
          </label>
          <select
            name="category"
            required
            defaultValue=""
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px] text-text-main"
          >
            <option value="" disabled>
              選択してください
            </option>
            <option value="sales">営業支援について</option>
            <option value="community">コミュニティー運営について</option>
            <option value="consulting">経営コンサルティングについて</option>
            <option value="other">その他</option>
          </select>
        </div>
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            メッセージ <span className="text-red-500 text-xs">*</span>
          </label>
          <textarea
            rows={5}
            name="message"
            required
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px] resize-none"
            placeholder="お気軽にお問い合わせください"
          />
        </div>
        {status === "error" && (
          <p className="font-[Noto_Sans_JP] text-[13px] text-red-600 -mt-2">
            {errorMessage}
          </p>
        )}
        <p className="font-[Noto_Sans_JP] text-[12px] text-text-main text-center leading-[1.9]">
          送信いただくと、
          <Link href="/privacy" className="text-primary underline underline-offset-2">
            プライバシーポリシー
          </Link>
          に同意したものとみなします。
        </p>
        <div className="text-center pt-2">
          <button
            type="submit"
            className="btn-ghost disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "送信中..." : "送信"}
            <span className="arrow"></span>
          </button>
        </div>
      </div>
    </form>
  );
}
