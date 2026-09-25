import type { Metadata } from "next";
import LegalPage, { type LegalContent } from "@/components/LegalPage";
import legal from "@/content/legal.json";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return <LegalPage content={legal.privacy as LegalContent} />;
}
