import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

type Section = { h: string; p?: string[]; ul?: string[] };

export type LegalContent = {
  title: string;
  en: string;
  updated: string;
  intro: string;
  sections: Section[];
};

/** プライバシーポリシー・利用規約など、条文形式のページ共通レイアウト */
export default function LegalPage({ content }: { content: LegalContent }) {
  return (
    <>
      <Header />

      <section className="pt-[100px] pb-10 bg-white">
        <div className="max-w-[860px] mx-auto px-6">
          <FadeUp>
            <p className="section-deco">{content.en}</p>
          </FadeUp>
          <FadeUp>
            <div className="w-10 h-[3px] bg-primary mt-5 mb-6"></div>
          </FadeUp>
          <FadeUp>
            <h1
              className="font-[Noto_Sans_JP] text-text-heading font-bold mb-4"
              style={{ fontSize: "28px", letterSpacing: "-0.4px" }}
            >
              {content.title}
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="font-[Noto_Sans_JP] text-text-main text-[13px] leading-[2]">
              {content.updated}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-[860px] mx-auto px-6" data-phrase-all>
          <p className="font-[Noto_Sans_JP] text-text-main text-[14px] leading-[2.1] mb-12">
            {content.intro}
          </p>
          <div className="space-y-10">
            {content.sections.map((s) => (
              <article key={s.h} className="border-t border-gray-200 pt-8">
                <h2 className="font-[Noto_Sans_JP] text-text-heading font-bold text-[17px] md:text-[18px] mb-4">
                  {s.h}
                </h2>
                {s.p?.map((t) => (
                  <p
                    key={t}
                    className="font-[Noto_Sans_JP] text-text-main text-[14px] leading-[2.1] mb-3"
                  >
                    {t}
                  </p>
                ))}
                {s.ul && (
                  <ul className="space-y-2 mt-2">
                    {s.ul.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-3 font-[Noto_Sans_JP] text-text-main text-[14px] leading-[2]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[11px] shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
