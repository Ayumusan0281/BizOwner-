import type { Metadata } from "next";
import LegalPage, { type LegalContent } from "@/components/LegalPage";
import legal from "@/content/legal.json";

export const metadata: Metadata = {
  title: "利用規約",
};

export default function TermsPage() {
  return <LegalPage content={legal.terms as LegalContent} />;
}
