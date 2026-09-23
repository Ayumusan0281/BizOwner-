# 📓 作業ログ（プロジェクト全体）

> **このファイルが秘書Agentの主役です。**
> ClaudeとClaude Codeで進めた全ての作業を時系列で記録する場所。
> 「直近なにやった？」「LP終わった？」「先週の進捗は？」に答えるための正本。
>
> **記録対象**：LP制作・UTAGE構築・ドキュメント更新・クライアント対応すべて。
> **記録ルール**：新しい日付は**上に**追加（最新が上）。1日の中では時系列順に追記。

---

## 2026-09-23（水）

### 🎯 SARUDEMO LP：最新営業資料への全面リメイク＋ヒーロー画像の比率統一（ヤヨイ監修）
- 根拠：`SARUDEMO_営業資料.pdf`（全10ページ）。`src/app/sarudemo/page.tsx` を修正。
- **ヒーロー画像**：横長帯（`w-full h-[320px] md:h-[500px]`＋rotate＋画像内テキスト）→ HitoHoshi/BizOwner/KaneHoshiと同じ正方形（`w-[260px] h-[260px] md:w-[400px] md:h-[400px]`、白枠・同じフローティングカード構成）に統一。ヒーローのバッジ（白ピル＋ping）・グリッド・SCROLL表示も他LPと同形式に揃えた。
- **Zeroichi Home廃止対応**：COMMUNITYセクションを削除→「運営体制（TRUST & NETWORK）」5事業ネットワーク図に差し替え（SARUDEMOをハイライト）。料金の「コミュニティ会費 月5万円」カード、比較表の「コミュニティ 月額5万円」行、CTA/マーキーの「1ヶ月無料」「解約自由」を削除。
- **資料準拠の内容更新**：ヒーロー文言、INTRO（失敗する3つの理由）を新設、ABOUT＝3要素（ファストパス／実業FC／脱サラ当たり前）、FEATURES＝3つのエグさ、報酬モデル＝資料の7カテゴリ＋顧問支出（メイン/自主/金融系のタグ付き）、顧問経歴を資料の内容に拡充、比較表を資料の7行に差し替え（BizOwner 500万円は※注記）、料金（契約金300万円・2期目以降10万円/月・クーリングオフ・資金調達）、FAQ更新（「いつでも解約可」→クーリングオフの説明に修正）。
- 「ビザ」表記を報酬モデルから削除、「サクラ」は資料にあるが公開LPには載せていない（要マヤ確認）。
- 確認：ローカルでデスクトップ/モバイル表示、`eslint`・`next build` 成功。

### 📌 次回再開ポイント
- 未push（push=Vercel自動デプロイのためオーナー確認待ち）。
- `/zeroichi-home` ルート（旧LP）がまだ公開状態。廃止に伴い削除/リダイレクトするか要確認。


### 🎯 BizOwner LP：最新営業資料への全面リメイク＋ヒーロー画像の比率統一
- オーナーがLINEで最新の営業資料（`BizOwner_営業資料.pdf`、全14ページ）を共有、本番LP（`/bizowner`）を最新内容へ更新するよう依頼。最初は別プロジェクト（`全国起業家協会`リポジトリ）で作業していたが、そちらにソースが無いことが判明し、本リポジトリ（`biz-owner-lp`）で対応。
- `src/app/bizowner/page.tsx` を以下の通り修正：
  - 月額50,000円（1ヶ月無料キャンペーン）→ **月額0円が恒久仕様**に全面差し替え（ヒーロー見出し・サブコピー・バッジ・フローティングカード・マーキー帯・ABOUT・STEP1バッジ・COMPARISON・PRICING）。CTAボタン文言も「1ヶ月無料でLINE登録する」→「公式LINEに登録する」に統一（CtaBannerFull/CtaBannerCard/最終CTA含む全箇所）
  - PRICINGセクションの4枚カードを3枚に整理：「サークル等費用（団長決定）」カードを削除（Zeroichi Home廃止に伴い意味を持たなくなったため）。FC加盟料金に「2期目以降 月額顧問料10万円」の注記を追加
  - 案件一覧の「権利運用（ビザ／派遣／物販等）」を削除し「組織構築（業務委託・完全歩合で組織化）」に差し替え
  - **Zeroichi Homeのコミュニティ訴求セクションを丸ごと削除**し、代わりにHitoHoshi/COMON'Sと同じ「運営体制（TRUST & NETWORK）」セクションを新設（BizOwner/SARUDEMO/HitoHoshi/KaneHoshi/COMON'Sの5事業ネットワーク図、BizOwnerをハイライト）
  - FAQから「新しくサークルを作ってもいいですか？」（Zeroichi Home前提の設問）を削除
  - 新資料にのみあった「紹介制度」セクションを新設（直紹介のみ・人数×1万円／案件数×5千円／FC加盟で10%、マルチ商法ではない旨を明記）
- **ヒーロー画像のアスペクト比統一**：オーナー指摘の通り、ヒーロー画像コンテナが縦長(`w-[220px] h-[280px] md:w-[360px] md:h-[450px]`)で他LPと不統一だったため、HitoHoshi/KaneHoshiと同じ正方形(`w-[260px] h-[260px] md:w-[400px] md:h-[400px]`)に変更。既存の`bizowner-hero.png`のまま`object-cover`で正方形クロップされ、見た目も自然（中央の人物2名がちょうど収まる構図）。
- `.claude/launch.json`が無かったため新規作成（`全国起業家協会`リポジトリ側の`launch.json`に`biz-owner-lp`のdev起動設定として追加、ポート3005）
- ローカル（`localhost:3005/bizowner`）でデスクトップ・モバイル両方のビューポートで実地確認済み（get_page_text・スクリーンショット・CountUpアニメーション完了後の最終値まで確認）。`npm run build`（TypeScript含む）成功、コンソールエラーなし。
- **未コミット**：ソース修正はローカルのみ。origin(`Ayumusan0281/BizOwner-`)への push はVercel自動デプロイをトリガーするため、オーナー確認の上で実施予定。

### ✅ 確定した決定事項
- Zeroichi Home関連の記述・訴求はBizOwner LPから完全に排除する（事業廃止に伴う対応）
- ヒーロー画像は他LP（HitoHoshi/KaneHoshi）と同じ正方形クロップに統一する

### 📌 次回再開ポイント
- オーナー確認後、`git add -A && git commit && git push` でVercel本番へ反映
- 余力があればSARUDEMOのヒーロー画像も正方形に統一するか検討（現状は横長バンド型で不統一の可能性）

---

## 2026-09-22（火）

### 🎯 新サービスLP追加：COMON'S、HitoHoshi/KaneHoshiのプレースホルダー
- `src/app/comons/page.tsx` を新規作成。既存BizOwner/SARUDEMOと同一のコンポーネント（FadeSlide/StaggerChildren/TiltCard/LineDivider/LineIcon）・Tailwindテーマ（lp/lp-accent/cta/bg-section等）を流用し、一人社長向け顧問サービス「COMON'S」のLPをトンマナ統一で制作
- ロゴ `public/lp/comons-logo.png` を追加（既存の透過ロゴ、BizOwnerロゴと同じ正方形モノグラム+ワードマーク構成）
- サービス一覧（`src/app/services/page.tsx`）・トップページ（`src/app/page.tsx`）のサービスカード一覧、および `src/components/Footer.tsx` のサービスリンクから「Zeroichi Home」を削除し、「COMON'S」「HitoHoshi」「KaneHoshi」を追加（オーナー指示：Zeroichi Homeは廃止・NextVisionへLPごと移管済みのため）
- HitoHoshi・KaneHoshiは実LP未着手のため `/hitohoshi` `/kanehoshi` に簡易な準備中ページを仮設置（ロゴ・説明文・サービス一覧への導線のみ）。ロゴは `public/lp/hitohoshi-logo.png` `public/lp/kanehoshi-logo.png`（いずれも既存の透過ロゴを流用）
- `npm run build` でエラーなし・全ルート生成確認済み。ローカル動作確認済み（get_page_textで全セクション・フッターの文言を確認）

### ✅ 確定した決定事項
- COMON'S公式LINEのUTAGE URLは未発行のため、`comons/page.tsx` の `LINE_URL` は仮で `"#contact"`。発行後に差し替えが必要（コード内にTODOコメントあり）

### 📌 次回再開ポイント
- COMON'S公式LINE URL発行後、`src/app/comons/page.tsx` の `LINE_URL` を差し替え
- HitoHoshi・KaneHoshiの本LP制作（`/hitohoshi` `/kanehoshi` は現在準備中ページのみ）

### 🎯 HitoHoshi本LP制作（準備中ページを置き換え）
- `src/app/hitohoshi/page.tsx` を準備中プレースホルダーから本LPへ全面差し替え。`src/app/comons/page.tsx` と同一のコンポーネント構成（FadeSlide/StaggerChildren/TiltCard/LineDivider/LineIcon）・Tailwindテーマをそのまま踏襲し、トンマナを統一
- 文面は全て実際の最終営業資料（`HitoHoshi_営業資料.pdf`、全10ページ）をpdfplumberでテキスト抽出のうえ、その記載どおりに作成（料金は「サービス利用料 月額10,000円のみ・初期費用0円」の単一プライシング、ROUTE A/Bの職業紹介許可に関する注記も資料の文言をそのまま反映）
- ロゴは既存の `public/lp/hitohoshi-logo.png`（オーナー確認済みの公式ロゴ：セリフ体の二重Hモノグラム＋"HitoHoshi"ワードマーク）をそのまま使用、変更なし
- 構成：Hero→マーキー→01課題(3カード)→CTA→02 WHAT WE DO(2本柱)→CTA→03 SERVICE01採用代行詳細(運/調/応/進の4項目)→04 SERVICE02再活用スキーム(ROUTE A/B)→CTA→05料金(単一¥10,000/月+成果報酬)→06 WHY HITOHOSHI(4メリット)→運営体制(5サービスの並び、HitoHoshiをハイライト)→07導入フロー→CONTACT(公式LINE+メール`main@business-manabiya.com`)→footer。資料に存在しないFAQ・比較表・顧問紹介等は設けていない
- サービス一覧（`/services`）の「HitoHoshi」VIEW LPボタンは元々`/hitohoshi`にリンク済みだったため、ページ差し替えのみでボタン→本LP遷移が完成
- ローカル動作確認済み（`http://localhost:3010/hitohoshi` にて get_page_text で全セクションの文言を確認、`/services`からの導線も確認）

### ✅ 確定した決定事項
- HitoHoshi公式LINEのURLは未発行のため、`hitohoshi/page.tsx` の `LINE_URL` はCOMON'Sと同様に仮で `"#contact"`（コード内にTODOコメントあり）

### 📌 次回再開ポイント
- HitoHoshi公式LINE URL発行後、`src/app/hitohoshi/page.tsx` の `LINE_URL` を差し替え
- KaneHoshiの本LP制作（`/kanehoshi` は現在準備中ページのみ）

---

## 2026-07-25（土）

### 🎯 全LP：LINE登録URLを統一
- 全LINE登録CTAの遷移先を `https://utage-system.com/line/open/yjGgUvxEA3oy` に統一
  - BizOwner LP：`LINE_URL` を旧UTAGE URL（`YWF9a1li6ut7`）から差し替え
  - Zeroichi Home：`LINE_URL` を旧 `lin.ee/6siBqPz` から差し替え
  - SARUDEMO LP：ハードコードの `line.me/...@532ikyxa`（4箇所）を `LINE_URL` 定数化して差し替え
  - `LpNav`：`href="#"` だったLINE CTA（スマホメニュー／デスクトップ）も同URLに紐付け

### ✅ 確定した決定事項
- 全サービス共通で同じUTAGE LINE URLを使用

### 📌 次回再開ポイント
- ブラウザで各LPのCTAをクリックし、正しいLINE追加画面に飛ぶか確認

---

## 2026-06-05（木）

### 🎯 株式会社WOWNER HP：お問い合わせフォームのメール送信【保留中】
- 現状フォーム（`src/app/ContactForm.tsx`）は送信しても `alert` を出すだけで、入力内容はどこにも飛んでいない
- メアドをコードに書くだけでは届かない＝「宛先メアド」＋「送信サービス（Web3Forms/Resend等の土管）」の2点セットが必須、とクライアント説明用に整理
- **保留理由**：送信先メアドが未定。クライアント確認後に着手予定
- 📄 構築手順・方式比較・チェックリストを `docs/reference/お問い合わせフォーム送信設定メモ.md` に保存。再開時はこれを開く

### 📌 次回再開ポイント（お問い合わせフォーム）
- クライアントから受信用メアドが届いたら `docs/reference/お問い合わせフォーム送信設定メモ.md` を参照して構築再開（推奨方式: Web3Forms）

### 🎯 BizOwner：CV（公式LINE追加）にUTAGE LINE URLを紐付け
- メインCV遷移先 `https://utage-system.com/line/open/YWF9a1li6ut7` を `LINE_URL` 定数として定義（`src/app/bizowner/page.tsx`）
- 全LINE登録CTA（計4箇所）の `href="#"` を `LINE_URL` に差し替え、`target="_blank" rel="noopener noreferrer"` で別タブ起動に統一
  - ①`CtaBannerFull`（フル幅CTAバナー）②`CtaBannerCard`（カード型CTAバナー）③HERO内CTA「1ヶ月無料でLINE登録する」④最終CTA「1ヶ月無料でLINE登録する」
- ロゴリンク（`href="#"`）はCVではないため変更せず

## 2026-06-02（火）

### 🎯 Zeroichi Home：CV（公式LINE追加）に本番LINE URLを紐付け
- メインCV遷移先 `https://lin.ee/6siBqPz` を `LINE_URL` 定数として定義（`src/app/zeroichi-home/page.tsx`）
- 全LINE登録CTA（計8箇所）の `href="#"` / `href="#contact"` を `LINE_URL` に差し替え、`target="_blank" rel="noopener noreferrer"` で別タブ起動に統一
  - ①`LineCta`共通コンポーネント（intro/values セクション）②ヘッダーのLINE登録リボン ③スマホメニューCTA ④右サイドバー「LINE登録」⑤FV直下CTA「LINEで無料登録（1分）」⑥バナー「LINEで情報を受け取る」⑦料金カード「1ヶ月無料で試してみる」⑧最終CTA「今すぐLINE登録（無料）」
- ヘッダー/サイドバー/スマホメニューは従来 `#contact` へのスクロールだったが、CV直結のため直接LINE遷移に変更



### 🎯 Zeroichi Home：スマホ ハンバーガーメニューの「ぼやけ／黒ずみ」不具合修正
- 症状：メニューを開くとパネル（紹介/価値/イベント等のカード・LINE CTA）が全体的にぼやけて灰色がかる
- 原因：背景の薄暗オーバーレイ（`.manabiya-mobile-menu[open] summary::before`）が `summary`（`z-index:61`）のスタッキングコンテキスト内にあるため、パネル（`z-index:60`）の**上**に描画されていた。元々付いていた `backdrop-filter: blur` がパネルごとぼかし、暗幕がパネルを灰色化させていた
- 対応：`.manabiya-mobile-panel` の `z-index` を `60 → 70` に引き上げ、パネルがオーバーレイより前面に来るよう修正（`globals.css`）。暗幕は背後ページのみを暗くする本来の挙動に

### 🎯 Zeroichi Home：FV下部の集合写真（crowd）の頭切れ修正
- 症状：FV下端の集合イラスト（`/manabiya/group.png`）の人物の頭が切れていた
- 原因：横長・低い帯（モバイル高さ82px）に `object-fit: cover` で表示しており、`object-position: center 47%` だと切り出し位置が低く、頭頂部が外れていた
- 対応：`.campus-crowd-img` の `object-position` を調整（`center 47%` 起点で 34→28→40→最終 40%）。さらに「人物を上げると頭が枠上端で切れる」のは重なりではなく `object-fit:cover`＋低い固定高さ＋`overflow:hidden` で横一本のバンドだけ切り出している構造が原因と判明
- 最終対応：帯の高さ自体を増やして頭〜胴を収める。`.campus-crowd-photo` の `height` をデスクトップ `clamp(118px,17vh,170px)→clamp(150px,21vh,230px)` / ≤1023px `104→140px` / ≤640px `82→116px`、`object-position: center 40%`
- **元に戻す方法**：各該当行のコメントに元の値を明記済み（高さ各値と `object-position: 47%`）

### 📌 次回再開ポイント
- dev サーバーで反映されない場合はハードリロード（CSSキャッシュ）

## 2026-06-01（月）

### 🎯 サービス名・ロゴ変更：GoisuGuild → Zeroichi Home
- HP・各LP内の「GoisuGuild」表記をすべて「Zeroichi Home」に変更（`src/app/page.tsx` / `services/page.tsx` / `bizowner/page.tsx` / `sarudemo/page.tsx` / `goisuguild/page.tsx` / `components/Footer.tsx` / `components/manabiya/ManabiyaLogo.tsx`）
- 新ロゴ `docs/reference/Zeroichi Homeロゴ背景透過.png` を `public/zeroichi-home-logo.png` として配置
- ロゴ参照を `/goisu-guild-logo.png` → `/zeroichi-home-logo.png` に差し替え（ManabiyaLogo・goisuguildページ・HPサービスカード等）
- metadata（title/description）も Zeroichi Home に更新

### 🎯 Zeroichi Home（旧goisuguild）追加対応
- URLパスを `/goisuguild` → `/zeroichi-home` にリネーム（`git mv src/app/goisuguild src/app/zeroichi-home`）。HP・サービス一覧・Footerの `href` も更新。旧URLは404
- EVENTS & CONTESTSの3カード（講演会／パーティー／ビジコン）の下端が揃っていなかったのを修正。StaggerItem/TiltCard/カード本体に `h-full`＋flex化し、グリッドstretchで高さ統一（実測bottom 824pxで3枚一致）
- スマホのハンバーガーメニューをLPの雰囲気に合わせてリッチ化（`globals.css` の `.manabiya-mobile-*`）。グラデ角丸ボタン＋虹色アクセント＋ロゴ付きヘッダー＋カラーアイコン付き2列メニュー＋LINE CTA、スライドダウン＋背景ブラー演出を追加

### ✅ 確定した決定事項
- サービス名は「Zeroichi Home」、URLパスは `/zeroichi-home` で確定

### 📌 次回再開ポイント
- 旧 `public/goisu-guild-logo.png` は未使用（必要なら削除して整理）
- dev サーバーはポート3000がBeads、3001も使用中のため **3002** で起動中（`http://localhost:3002/zeroichi-home`）

---

## 2026-05-18（月）

### 🎯 BizOwner / SARUDEMO LP 画像Reveal埋もれ修正
- `ImageReveal` に `immediate` props を追加し、`immediate` かつ `delay === 0` の場合はSSR時点から `mn-visible` を付けてクリップされないよう修正
- `ImageReveal` のIntersectionObserverを `threshold: 0.05` / `rootMargin: 120px 0px` に緩和
- 監視対象の外枠と `clip-path` を掛ける内側要素を分離し、クリップ状態がIntersectionObserverの交差判定を妨げない構造に変更
- BizOwner / SARUDEMO のヒーロー画像に `immediate` を指定
- BizOwnerヒーローの装飾グラデーションに `z-0 pointer-events-none`、画像側に `relative z-10` を明示。SARUDEMOヒーロー画像側も `relative z-10` を明示し、画像内グラデーションに `pointer-events-none` を追加

### 🎯 BizOwner / SARUDEMO LP 02 ABOUT画像枠削除
- BizOwner LPの `02 — ABOUT` 画像背面にあった薄い青枠を削除
- SARUDEMO LPの `02 — ABOUT` 画像背面にあった薄い金色枠を削除
- 画像本体・角丸・シャドウ・Reveal演出は維持

### 🎯 BizOwner / SARUDEMO LP FV画像内テキスト可読性調整
- FV画像左下に重なっていた浮きカードを右下へ移動し、画像内テキストを隠さない配置に変更
- SARUDEMO FV画像内の `SARUDEMO / Premium Entrepreneurship` テキストに `z-20` とドロップシャドウを追加し、サブテキストを少し大きくして可読性を改善
- Puppeteerスクショで `/bizowner` / `/sarudemo` のFV表示を確認

### ✅ 確定した決定事項
- FV画像は演出待ちにせず、初期表示時点でクリップ解除済みにする
- 下層画像はReveal演出を維持しつつ、外枠監視で確実に発火させる

### 📌 次回再開ポイント
- `npm run build` 成功済み
- Puppeteerで `/bizowner` / `/sarudemo` を確認し、各ページ3つの `ImageReveal` がスクロール後すべて `mn-visible` / `clip-path: inset(0px)` になることを確認済み

---

## 2026-05-17（日）

### 🎯 BizOwner LP 画像差し替え
- `docs/reference/` 配下の指定画像3点を `public/lp/` に同名で上書き配置（コード修正不要で反映）
  - `BizOwner（ファーストビュー）.png` → `bizowner-hero.png`
  - `BizOwner（副業）.png` → `bizowner-sidework.png`
  - `顧問紹介(起業ニキ).png` → `advisor-kigyo-niki.png`
- ロゴ（`bizowner-logo.png`）は変更指示なしのため据え置き

### 📌 次回再開ポイント
- ブラウザで `/bizowner` を開き表示崩れ・トリミングのバランスを確認
- 問題なければ SARUDEMO LP の画像差し替えに着手

---

## 2026-05-16（土）

### 🎯 LP画像表示不具合の原因調査
- BizOwner LP / SARUDEMO LP の画像が表示されないという報告を受け、コード上の画像パスと `public/lp` 配下の実ファイルを照合
- 該当画像（`bizowner-hero.png` / `bizowner-sidework.png` / `sarudemo-hero.png` / `sarudemo-business.png` / `advisor-kigyo-niki.png` / 各ロゴ）はローカルに存在し、Git管理済みであることを確認
- `npm run build` は成功。`next start -p 3007` でローカル配信し、画像本体 `/lp/...` とNext画像最適化URL `/_next/image?...` がどちらも 200 で返ることを確認

### 🚧 ブロッカー・気づいたこと
- ローカルのNextサーバーでは画像表示に必要なURLが正常応答するため、コード上のパスミスではない可能性が高い
- 配信先がNextサーバー/Vercelではなく静的ホスティングの場合、`next/image` が生成する `/_next/image?...` が動かず画像が表示されない可能性が高い

### 📌 次回再開ポイント
- 公開先URLで `/_next/image?url=%2Flp%2Fbizowner-hero.png...` が 404/500 になっていないか確認
- 静的ホスティング運用なら `next.config.ts` に `images: { unoptimized: true }` を追加するか、LP画像を通常の `<img>` に切り替える

### 🎯 ローカル確認環境の起動
- `next.config.ts` に `images: { unoptimized: true }` を追加し、LP画像が `/_next/image?...` ではなく `/lp/...png` の直接参照になるよう変更
- `npm run build` 成功を確認
- `screen` の detached セッション `bizowner-next` で `npm run dev -- -p 3000` を起動
- `http://localhost:3000/bizowner` / `http://localhost:3000/sarudemo` が 200 で返り、画像HTMLが `/lp/...png` を参照していることを確認

### 📌 次回再開ポイント
- ローカル確認URL：`http://localhost:3000/bizowner` / `http://localhost:3000/sarudemo`
- サーバー停止時は `screen -S bizowner-next -X quit`

## 2026-05-09（土）

### 🎯 UTAGE構築：UTAGE-Zoom自動連携を不採用に決定
- 個別面談予約はUTAGEカレンダーで日時受付のみ行い、Zoom URLは運営チーム（クライアント）が公式LINEから手動送付する運用に決定
- ウェビナーは録画自動配信機能のみ使用（Zoom連携なしで動く）
- 理由：Zoom自動ウェビナー連携はUTAGEの有償オプション契約が必要。本案件ではコスト最適化＋SARUは個別対応比率を高める方針なので、運営チームが直接コミュニケーションを取る運用の方が温度感が伝わる
- 反映ファイル：
  - `docs/utage/設計図.md` v5：個別面談セクション・機能マトリクス・チェックリスト・UTAGE外オペ表・改訂履歴を更新
  - `docs/utage/実装機能リスト.md`：Stage 2-5 / Stage 3-4 にZoom手動運用の説明追加
  - `docs/秘書/state.md`：Zoom API連携キー確認項目を「不要」に変更、構成変更3件目を追記

### ✅ 確定した決定事項
- UTAGE-Zoom自動連携は使わない（有償OP契約も不要）
- 個別面談はUTAGEで予約受付＋運営手動対応のハイブリッド運用
- ウェビナーは録画自動配信のみ（ライブ連動Zoom機能は使わない）

### 📌 次回再開ポイント
- UTAGE chatに「コンテキスト共有メッセージ」を改訂版で送信済（UTAGE標準/マニュアル基準で正解を聞き出すスタンス）
- UTAGE chatからの返答で：複数LINE運用OK、個別相談ファネルテンプレ存在、Zoom自動ウェビナー有償OPなど確認済
- 次は具体的な機能実装の個別質問に進む段階。最初は LINE公式アカウント連携の手順から
- LINE公式アカウント①②の準備状況をクライアントに確認する必要あり

### 🎯 UTAGE構築進捗：Stage 1-1 完了
- BizOwner・ビジネスの学び家ファネル（空白テンプレ） / SARUDEMOファネル（空白テンプレ）作成完了
- グループ管理で「LINE① BO+学び家」「LINE② SARUDEMO」に分類済
- 未分類の「BizOwner登録」ファネルはクライアント側で別途用意した既存ファネル（触らない）

---

## 2026-05-06（水）

### 🎯 UTAGE構築：推薦タグ／分岐配信を一旦Pause、シンプル動線へ簡素化（同日2件目）
- 旧設計の「アンケートでcredit/interest/serious タグ付与 → タグ組合せでプラン推薦・シナリオ分岐」を一旦Pause
- 理由：構築初期の負荷を下げてまずクライアントに見せる骨組みを最速で作るため
- 簡素化内容：
  - **アンケート**：6問 → 3〜4問（名前・メアド・興味あるサービス／いつでも削除/拡張可）
  - **ステップ配信**：LINE① 3〜4通＋動画／LINE② 2〜3通＋動画／タグ分岐なし
  - **タグ作成数**：19個 → 12個（source 3 / paid 5 / webinar 2 / refer 2）
  - **LINE② SARUDEMOからも学び家購入可**（SARU決済の追加オプ＋学び家単独リンク／取りこぼし防止）
- 反映ファイル：
  - `docs/utage/設計図.md` v4：1章/2章/4章/7章を簡素化版に書換、改訂履歴v4追加
  - `docs/utage/ファネル設計v1.md` v3：改訂履歴v3追加（変更概要のみ／詳細は設計図.md参照）
- ロードマップ短縮：Stage 1 2.5日→2日 / 合計 8-9日→7-8日

### ✅ 確定した決定事項（同日追加）
- LINE① (BO+学び家) と LINE② (SARUDEMO) は両方とも学び家を購入可能
- credit/interest/serious タグは作成しない（Pause）。将来再開時は設計図.md 4-2章を解凍
- アンケートはあとで削除も拡張もできるよう「フォーム差替えだけで済む」形に作る
- ステップ配信はテキスト＋動画の組み合わせで短尺運用

### 📌 次回再開ポイント（同日更新）
- ユーザーがDay 1の具体手順（UTAGE管理画面の操作）を待っている状態
- LINE公式アカウント②（SARUDEMO専用）の開設状況・トークン入手はクライアント要確認のまま

---

### 🎯 UTAGE構成変更：SARUDEMOのみCV先LINEを別アカウント化
- 従来「3LP→共通LINE1本」だった設計を「BizOwner+学び家=LINE① / SARUDEMO=LINE② 専用」の2LINE分岐型へ変更
- 理由：SARUDEMO契約金300万円という高単価のため、個別対応比率を上げてCV率向上＆途中離脱削減を狙う
- 反映ファイル：
  - `docs/utage/設計図.md` v3：1章シンプル図／2章統合設計図／4-2章流入タグ／7-2章Stage1①ロードマップ／改訂履歴を更新
  - `docs/utage/ファネル設計v1.md` v2：2章ファネル全体図を3LP+2LINE分岐型に書き換え（旧図は参考として残置）
- メンバーサイト・決済・タグマスター・アフィリ機能はLINE①②共通基盤のまま（出口は1系統）
- Stage 1所要日数：2日 → 2.5日（LINE連携が2チャネル分必要なため）

### ✅ 確定した決定事項
- BizOwner LP / 学び家LP のCTA → LINE①（共通）
- SARUDEMO LP のCTA → LINE②（SARUDEMO専用・個別対応寄り）
- 両LINEの会員は同じメンバーサイトに合流（タグで表示制御）
- LINE②は「短尺シナリオ＋早期面談誘導」運用とし、運営チームの個別対応比率を高める

### 📌 次回再開ポイント
- ユーザーがUTAGEセットアップ手順の理解を擦り合わせたい段階。Day1（UTAGE慣らし＋タグ命名確定）から着手予定
- LINE公式アカウント②（SARUDEMO専用）の開設状況・チャネルアクセストークンをクライアントに確認する必要あり
- このやり方で不便が出た場合は再協議して別施策を検討する方針

---

## 2026-05-05（火）

### 🎯 BizOwner LP HEROロゴ復元（SARUDEMOと同サイズ・同位置）
- `docs/reference/BizOwnerロゴ背景透過.png` を `public/lp/bizowner-logo.png` に再コピー
- BizOwner LP（`src/app/bizowner/page.tsx`）HERO左上にロゴブロックを追加。`top-4 left-4 md:top-6 md:left-8` / `h-12 md:h-14` / `width=400 height=400` と SARUDEMO LP と完全に同条件
- 他LP・HPのロゴ設定は変更なし

### 🎯 ビジネスの学び家 最終CTA中央寄せ修正 / BizOwner LP HEROロゴのみ削除
- ビジネスの学び家 LP（`src/app/manabiya/page.tsx`）最終CTAのコンテンツコンテナを `flex flex-col items-center text-center` に変更し、PC/スマホとも要素中央配置を確実化
- ロゴは `<ManabiyaLogo>`（fixed-width 88pxボックス）から直接 `<Image>` + `mx-auto block invert` の `h-20 md:h-24` に置き換え。`object-contain` の固定正方形ボックスに起因する視覚的なズレを排除
- 各 `<FadeSlide>` に `className="w-full"` を付与し、初期 `translate` で内部要素が左寄りに見える可能性を回避（h2 / p / CTA の各ブロックを画面幅で揃えてから text-center）
- BizOwner LP（`src/app/bizowner/page.tsx`）：HERO左上の `/lp/bizowner-logo.png` ロゴブロックを削除（SARUDEMO LP・HP Header・ビジネスの学び家 LPはロゴそのまま）
- `npx tsc --noEmit` 通過

### 🎯 ロゴ拡大・テキスト整理を元に戻す
- BizOwner LP HERO左上：`h-20 md:h-24` → `h-12 md:h-14`、位置 `top-3 md:top-4 left-3 md:left-6` → `top-4 left-4 md:top-6 md:left-8` に復元
- SARUDEMO LP HERO左上：同上
- ビジネスの学び家 LP ヘッダー：`<ManabiyaLogo size={56}>` → `size={44}` に戻し、削除した `<p>ビジネスの学び家</p>` テキスト＋ラッパー `<div className="leading-tight text-left">` を復元（ロゴ＋ `BUSINESS LEARNING COMMUNITY` ＋「ビジネスの学び家」の元の3要素構成に戻す）
- 最終CTAの `<ManabiyaLogo size={88} className="invert">` と HP Header のロゴ設定は変更なし

### 🎯 全ロゴを背景透過版で再設置＋配置調整
- `docs/reference/BizOwnerロゴ背景透過.png` → `public/bizowner-logo.png`（HP）／`public/lp/bizowner-logo.png`（BizOwner LP）に再コピー
- `docs/reference/SARUDEMOロゴ背景透過.png` → `public/lp/sarudemo-logo.png` に再コピー
- `docs/reference/ビジネスの学び家ロゴ背景透過.png` → `public/manabiya/manabiya-logo-pink.png` に再コピー
- HP Header（`src/components/Header.tsx`）：黒一色透過ロゴをダーク背景上で白く見せるため `filter: invert(1) brightness(1.05)` を適用。デスクトップヘッダーは `h-[48px]`（56pxヘッダー内）、モバイルメニューは `h-[44px]` / `top-[8px] left-6` / `opacity-70`
- BizOwner LP（`src/app/bizowner/page.tsx`）HERO左上：`h-20 md:h-24`（旧 `h-12 md:h-14`）に拡大。位置は `top-3 md:top-4 left-3 md:left-6`（白背景に黒ロゴそのまま）
- SARUDEMO LP（`src/app/sarudemo/page.tsx`）HERO左上：同上 `h-20 md:h-24` / `top-3 md:top-4 left-3 md:left-6`
- ビジネスの学び家 LP（`src/app/manabiya/page.tsx`）：
  - ヘッダー左上を `<ManabiyaLogo size={56} animate={false} />` に拡大（旧 size=44）。新ロゴに「ビジネスの学び家」ワードマークが内包されているため、サブテキスト `BUSINESS LEARNING COMMUNITY` のみ残し、重複していた `<p>ビジネスの学び家</p>` テキストを削除
  - 最終CTAセクション中央を `<ManabiyaLogo size={88} className="invert" />` に拡大（旧 size=56）。`bg-tgu-pink` 上で白く見せるため Tailwind `invert` クラスをラッパーに付与（`filter: invert(1)`）
- `npx tsc --noEmit` 通過

### 🎯 全ロゴ画像を削除（HP / BizOwner LP / SARUDEMO LP / ビジネスの学び家 LP）
- HP Header（`src/components/Header.tsx`）：`<Image src="/bizowner-logo.png">` を削除し、デスクトップヘッダー左上・モバイルメニュー左上ともテキスト「BizOwner」（Josefin Sans 20px/18px、white）にフォールバック。`next/image` import も削除
- BizOwner LP（`src/app/bizowner/page.tsx`）：HERO 左上の `/lp/bizowner-logo.png` ロゴブロック（`Logo (top-left)` 全体）を削除
- SARUDEMO LP（`src/app/sarudemo/page.tsx`）：HERO 左上の `/lp/sarudemo-logo.png` ロゴブロック（`Logo (top-left)` 全体）を削除
- ビジネスの学び家 LP（`src/app/manabiya/page.tsx`）：ヘッダー左上の `<ManabiyaLogo size={44} />`、最終CTA中央の `<ManabiyaLogo size={56} />`（`FadeSlide` ラッパーごと）を削除。`ManabiyaLogo` import も削除（ヘッダーは「ビジネスの学び家」テキスト＋サブテキストのみ残る）
- 画像ファイル本体（`public/bizowner-logo.png` / `public/lp/bizowner-logo.png` / `public/lp/sarudemo-logo.png` / `public/manabiya/manabiya-logo-pink.png`）と `ManabiyaLogo.tsx` コンポーネントは未削除（参照ゼロのため不要なら別途削除可）
- `npx tsc --noEmit` 通過

### 📌 次回再開ポイント
- ロゴ削除に関するクライアント確認待ち。新ロゴ差し替え予定があれば、HPヘッダー（テキスト「BizOwner」フォールバック中）と各LP HEROのロゴ位置に再配置する

---

## 2026-05-02（土）

### 🎯 ロゴ画像を背景透過版に差し替え + SARUDEMO LINE CTA リンク紐付け
- `docs/reference/BizOwnerロゴ背景透過.png` を `public/bizowner-logo.png`（HP Header）と `public/lp/bizowner-logo.png`（BizOwner LP HERO左上）の両方に上書き
- `docs/reference/SARUDEMOロゴ背景透過.png` を `public/lp/sarudemo-logo.png`（SARUDEMO LP HERO左上）に上書き
- `docs/reference/ビジネスの学び家ロゴ背景透過.png` を `public/manabiya/manabiya-logo-pink.png`（ManabiyaLogo コンポーネントが参照）に上書き
- SARUDEMO LP の CTA `LINE登録` ボタンを全箇所（CtaBannerPremium／CtaBannerCard／HEROボタン／最終CTA、計4箇所）`href="https://line.me/R/ti/p/@532ikyxa"` + `target="_blank" rel="noopener noreferrer"` に紐付け（HERO左上のロゴ Link はページトップアンカーのため `href="#"` のまま）

### 🎯 BizOwner / SARUDEMO LP 左上ロゴ追加
- `docs/reference/BizOwner ロゴ.png` を `public/lp/bizowner-logo.png` として配置
- `docs/reference/SARUDEMO　ロゴ.png` を `public/lp/sarudemo-logo.png` として配置
- 両LPのHEROセクション内、左上 `absolute top-4 left-4 md:top-6 md:left-8 z-30` にロゴを表示（高さ `h-12 md:h-14`）。`#` リンクでページトップへ戻るアンカー扱い
- HEROの白背景に黒ロゴで自然に表示。スクロールでHEROを抜けた後は表示されない簡潔な配置

### 🎯 BizOwner LP COMMUNITY セクション レイアウト統一
- BizOwner LP `COMMUNITY`：見出し＋画像が `lg:grid-cols-2`（左に見出し / 右に画像）の2カラム、その下のカード4枚は `mx-auto max-w-[820px]` で中央揃え、という構造になっており、画像が右半分に寄っているためカードの右端が画像の右端より左に位置し、視覚的にカードが左寄りに見えていた
- SARUDEMO 側は `text-center` で中央縦積み（見出し・画像・カードが完全に揃う）だったので、両LPで COMMUNITY セクションの見え方が左右逆方向にズレていた
- BizOwner も SARUDEMO と同じ中央揃え縦積みレイアウトへ統一：見出し→説明文→画像→カードの順で中央配置。画像は `aspect-[3/2] max-w-[820px] mx-auto`、カードは `max-w-[820px] mx-auto`、で完全に幅・中心が揃う
- ユーザー確認のうえ、BizOwner / SARUDEMO 両LPの `COMMUNITY` セクションからコミュニティ画像ブロックを削除。見出し・説明文の直下に4項目カードが来る構成へ変更し、画像ぶんの余白を解消

### 🎯 HP・BizOwner LP クライアントFB反映
- HP：左上のテキストロゴを `BizOwner ロゴ.png` 画像へ差し替え（`public/bizowner-logo.png`）。ヘッダーのダーク背景上で表示するため `filter: invert(1)` + `mix-blend-mode: screen` で背景白を透過させ、ロゴをホワイト見せに
- ヘッダー高さを 48px → 56px に上げ、`leading-[48px]` も追従更新
- 会社名表記を全面 `Bestimulate` → `BizOwner` に統一（`src/app/page.tsx` / `layout.tsx` / `services/page.tsx` / `components/Header.tsx` / `components/Footer.tsx` / `bizowner/page.tsx` / `sarudemo/page.tsx`）
- BizOwner LP `02-ABOUT`：「売上からの天引き払い」表記を本文・カードから削除。文言を「月額50,000円という低コストで始められ、ビジネス初心者の方も安心」「初月無料・解約自由で安心」に整える
- BizOwner LP `COMMUNITY`：4カードに `auto-rows-fr` + `h-full` + `flex-col justify-center` を適用し、行高さ揃えで余白の崩れを解消
- BizOwner LP `03-HOW IT WORKS` / 料金プラン：`FC加盟 500万円〜` の `〜` を削除し `500万円` に統一
- BizOwner LP FAQ：1問目「BizOwnerが許可した案件にてご利用いただけます。基本的には本部案件にご活用ください。」、3問目「解説動画をご覧のうえ実施してください。」、4問目「週1回の個別コンサル枠でご質問にお答えします。」へ更新（言い回しは自然な敬体に整える）
- 学び家LP：`docs/reference/ビジネスの学び家　ロゴ.jpg` を `public/manabiya/manabiya-logo.jpg` として配置し、`ManabiyaLogo` を画像ロゴ表示に差し替え（ヘッダー・最終CTA）
- 学び家LP：`docs/reference/ビジネスの学び家ロゴ（ピンク）.png` を `public/manabiya/manabiya-logo-pink.png` として追加し、ヘッダー／最終CTAロゴをピンク版へ切替
- 学び家LP：`ManabiyaLogo` を正方形表示（`size x size`）へ変更して横長表示を解消。`object-center` に変更しロゴ位置を中央化
- 学び家LPヘッダー：ロゴ横テキスト（英字サブライン＋「ビジネスの学び家」）の間隔と縦位置を微調整
- 透過ロゴ差し替え：`docs/reference/BizOwnerロゴ背景透過.png` / `SARUDEMOロゴ背景透過.png` / `ビジネスの学び家ロゴ背景透過.png` をそれぞれ `public/bizowner-logo.png`、`public/lp/bizowner-logo.png`、`public/lp/sarudemo-logo.png`、`public/manabiya/manabiya-logo-pink.png` に反映
- 学び家LPの `#contact` ロゴ表示は `object-center` + `mx-auto` で中央寄せを明示
- 学び家LP FV：募集バッジから `2026` を削除、スマホFVの人物サイズと左右位置を再調整して中央の余白感を軽減
- 学び家LP文言：`副業→起業` / `若手プロフェッショナル→夢を持った人々` / 福利厚生文言（オンライン占い・個別コーチング/コンサル）へ更新
- 学び家LP数値：`6+→100`、`20+→年間100回以上`＋ラベルを「イベント数」、`11,000→10,000`、料金表記を「/ 月（税別）」へ更新
- 学び家LP構成：サークル導入ブロックを上部中央へ移動、CTA補足文1箇所削除、FLOWを「LINE追加」「会員登録」「案内に従い無料登録」に調整
- 学び家LP FAQ：設問を「占いやコーチング、コンサルの内容は？」に変更し、回答を「週1時間×月4回の占い・コーチング・コンサルを受けられる権利を付与」に更新

### ✅ 確定した決定事項
- 会社名（屋号）は `BizOwner` に統一。LP footer の「by Bestimulate」表記は削除
- 「天引き払い」という訴求はLPからは外す（FAQ・カード・ABOUT本文）
- FC加盟料金の表記は `500万円`（〜抜き）

### 📌 次回再開ポイント
- ヘッダー上の透過ロゴ（CSS フィルタ表現）はブラウザ確認推奨。実画像を白抜きSVG化するなら別途差し替え
- SARUDEMO・学び家LP側にも同様のロゴ／屋号差し替えを適用するかクライアントへ確認

---

## 2026-04-30（木）

### 🗓️ 明日のクライアントMTG共有
- 明日（2026-05-01）クライアントとのミーティング予定
- 3つのLP（HP / BizOwner / SARUDEMO / 学び家）はクライアントから細かい修正点をヒアリング → 反映 → 最終完成という流れで進める方針
- UTAGE打ち合わせは **明日14:00から**
- それまでに UTAGE の大枠（骨組み）だけでも組んでおきたい

### 📌 次回再開ポイント
- 今日中：UTAGE STEP 0（初期設定）〜骨組み着手
- 明日：MTG前に大枠完成 → 14時打ち合わせ → LP・UTAGE両方のFB回収 → 修正

---

## 2026-05-02（土）

### 🎯 SARUDEMO LP 文言・数値・レイアウト修正
- `src/app/sarudemo/page.tsx`：ABOUTの「営業→教育」「サポート→コンサル」、3カラムカード・WHYセクション・報酬モデル6枠の金額（100〜300万/月、資金調達・申請支援は1000万以上・「/回」削除）、比較表（BizOwner価格500万円・支払一括、SARUDEMO300万円表記整理、権利収入100〜300、目標「年商1億の大社長」）、料金ブロック「税別」のみ、フロー（LINEのみ／面談説明コピー／全面コンサル・教育表現）、FAQ（リターン・資金調達回答）を反映
- コミュニティセクション：PCで右列（4カード）を広げる非対称グリッド＋カードの余白・高さ調整
- 追加調整：比較表の `100〜300万/月` を `100〜300万円/月` に統一、報酬モデルの `1000万以上` を `1000万円以上` に更新
- 追加調整：コミュニティブロックの余白を圧縮（`py-24 md:py-28` / 見出し下マージン縮小 / 画像とカードの間隔縮小）して、上部中央の見出しと本文の間延び感を解消
- 追加調整：ABOUTセクション画像の金枠（装飾ボーダー）をレスポンシブ化。スマホでは `left-0` で中央寄せし、`md` 以上で従来の `-left-4` に戻すよう修正（スマホ左寄り崩れを解消）

### ✅ 確定した決定事項
- SARUDEMO LP上の数値・表記はクライアント指示どおり上記に更新

### 📌 次回再開ポイント
- 実機幅でコミュニティ列のバランスを再確認（必要なら `1.22fr` を微調整）

## 2026-04-29（水）

### 🎯 ビジネスの学び家LP ファーストビュー修正
- `src/app/manabiya/page.tsx` のファーストビューを大学FV参考のポップな構成に再設計
- 既存の背景付き人物PNGが透過素材として破綻して見えていたため、FV内の人物・群像をコード側のイラスト表現に差し替え
- 中央コピーを「大人の部活動コミュニティ」→「学ぶも、遊ぶも、全部まるごと」→「稼ぐ!」の順で見せる構成に変更
- `src/app/globals.css` に放射線背景、吹き出し、筆文字、人物・群像用のスタイルを追加
- PC / スマホのスクリーンショット確認を実施し、スマホで説明文が重ならないよう調整
- クライアント要望を受け、`docs/reference/男の子.png`・`女の子.png`・`大勢.png` を `public/manabiya/` に反映し、素材画像を使うFVへ再調整
- 大学FVの「左男の子・右女の子・下に大勢」の構図に寄せ、素材の背景が四角く見えないよう白い抜き・マスク・光でポスター風に処理
- 上部ナビは大学サイトを真似ず、LP内容に合わせて「紹介 / 価値 / イベント / サークル / 料金 / FAQ」へ整理し、各セクションIDに遷移するよう調整
- PC / タブレット / スマホのスクリーンショット確認を再実施
- 右側の縦タブ「イベント情報」「LINE登録」の改行崩れを修正。`writing-mode` と `text-orientation` を調整し、1文字ずつ自然に縦表示されるようにした
- PCのFVコピー一式を上に移動し、下段の大勢画像との被りを軽減
- スマホFVで男の子・女の子が画面内に収まるよう、人物サイズと左右位置を調整
- PC/スマホ共通で右上LINE登録CTAを強めのリボンデザインに変更
- 左上ロゴのリンク先を `/` から `#top` に変更し、クリックでLPファーストビューへ戻るようにした
- スマホ用ハンバーガーメニューを追加し、「紹介 / 価値 / イベント / サークル / 料金 / FAQ」へ遷移できるようにした
- LP感を保つため、下部の `Official Account` セクションとフッターリンク群を削除
- PC / スマホ / スマホメニュー開閉状態のスクリーンショット確認を実施
- スマホ〜小さめタブレット幅でFV要素が重なりすぎていたため、FV高を広げ、コピーを上へ、人物を小さめかつ下方向へ、群像を低めに再配置
- 390px / 746px / PC幅でスクリーンショット確認し、吹き出し・筆文字・人物・大勢画像の重なりを軽減
- 黄色の「2026 新メンバー募集中」バッジが男の子の顔に被っていたため、PC / 中間幅で左上へ移動・縮小して顔にかからないよう調整
- 黄色の「2026 新メンバー募集中」バッジを「学ぶも、遊ぶも、全部まるごと」の上側へ再配置し、スマホでは吹き出し文字に被らない位置へ調整。スマホ人物も小さすぎないよう少し拡大
- PC表示で黄色バッジが「学ぶ」に被っていたため、PC幅だけバッジ位置をさらに上へ調整
- GitHub/Vercelデプロイ前の `npm run build` 失敗原因だった `site-capture` をNext本体のTypeScriptチェック対象から除外し、production build が通る状態に修正

### ✅ 確定した決定事項
- 学び家FVでは、大学パンフレット風の親しみやすさを残しつつ、提供素材をマスク処理して主要ビジュアルとして使う
- FVのメイン訴求は「学ぶ・遊ぶ・稼ぐ」を一画面で直感的に伝える方向にする
- 上部ナビはLP内導線に必要な項目だけにする
- 学び家LPの最下部は最終CTAで終わらせ、通常サイトのフッターリンク群は置かない

### 🚧 ブロッカー・気づいたこと
- `npm run lint` は `.next` / `.claude/worktrees` 配下も拾って既存生成物で失敗
- `npm run build` は既存の `site-capture/client/src/components/SiteCapture/SiteCapture.tsx` の `img src={StaticImageData}` 型エラーで失敗

### 📌 次回再開ポイント
- 必要なら実機ブラウザで `/manabiya` のFVを確認し、人物イラストのテイストをさらに大人っぽくする
- lint/build を正式に通す場合は、まず ESLint 対象除外と `site-capture` 側の既存型エラーを整理する

## 2026-04-28（火）

### 🤖 秘書Agent土台のセットアップ
- `docs/秘書/state.md` 作成（プロジェクト全体ステート）
- `docs/秘書/schedule.md` 作成（スケジュール管理）
- `docs/秘書/log.md` 作成（このファイル・主役）
- `docs/秘書/context.md` 作成（文脈・判断メモ）
- `.cursor/rules/秘書.mdc` 作成（Cursor秘書Agentルール）
- `CLAUDE.md` に秘書Agent運用ルールを追記
- 秘書の主目的を「進捗の可視化＝ログとして残すこと」に再定義
- LPもログ管理対象に含めるよう構成変更

### 📝 UTAGE設計ドキュメント整備
- ファネル設計v1の確定（学び家オプション化方針を反映）
- Phase 1構築計画書の作成（7STEP・実装手順詳細）
- 1サービス先行（BizOwner）→ SARUDEMO → 学び家の逐次方針確定
- 個別面談を「任意（質問者・FC希望者向け）」に確定

### ✅ 確定した重要決定
- LPは管理対象外 → 管理対象に変更（ログには残す）
- 公式LINE1本＋タグ分岐方式
- 学び家はBO/SARU決済時のオプションチェック（+月額1万円）
- 決済・紹介URL・会員サイトはすべてUTAGE機能で構築

### 📌 次回再開ポイント
- UTAGE STEP 0：初期設定から着手

---

## 2026-04-27（月）以前のサマリ

> 詳細ログは秘書セットアップ前のため未記録。git logから推測されるサマリのみ。

### LP制作完了
- BizOwner LP（`src/app/bizowner/page.tsx`）
- SARUDEMO LP（`src/app/sarudemo/page.tsx`）
- 学び家 LP（`src/app/manabiya/page.tsx`）
- コーポレートHP（`src/app/page.tsx`・`src/app/services/page.tsx`）
- ContactForm コンポーネント（`src/app/ContactForm.tsx`）

### ドキュメント整備
- `docs/reference/HP情報まとめ.md`
- `docs/reference/資料まとめ.md`
- `docs/ワイヤー.md`

### 直近のコミット（git log参照）
- `fff3f5b` SARUDEMO LP・ビジネスの学び家 LP 新規作成 / CLAUDE.md・資料まとめ更新
- `80958f8` 旧ファーストビュー画像を削除
- `994067a` 非推奨ファイル・アセットの削除
- `221908f` 初期プロジェクト構造の追加
- `8300fc9` BizOwner LP制作・画像追加・モバイル対応改善

---

<!--
新しい日付エントリのテンプレ：

## YYYY-MM-DD（曜日）

### 🎯 〇〇（カテゴリ名）
- やったこと
- やったこと

### ✅ 確定した決定事項
- 

### 🚧 ブロッカー・気づいたこと
- 

### 📌 次回再開ポイント
- 

-->
