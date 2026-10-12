# DeraBiz コーポレートサイト

公開先: https://derabiz-nagoya.vercel.app

## ショートカットの公式ロゴ（2026-10-12）

正式アイコンは白地に黒いDB＋金色の曲線。旧ロゴは黒地に金色の八角形。再インストール時にも旧画像が残る報告を受け、manifestの192/512px・maskableとHTMLのicon/shortcut/appleを /brand/derabiz-db-20261012* の新規URLへ変更。画像の内容は承認済み素材のまま。旧画像URLは互換性のため維持。start_url・アプリ名は変更しない。

ロゴ更新時は画像の上書きだけでなく参照URLも更新する。Windowsの既存アプリ表示は端末キャッシュの影響を受けるため、公開確認と実端末確認を区別する。

検証：2026-10-12 production build・TypeScript成功。生成HTMLのicon/shortcut/appleとmanifestの3種が日付付きURLを参照することを確認。main commit 2d17ea0を本番へ反映。公開HTMLとmanifestの新URL参照、画像6種類のHTTP 200・正本とのSHA-256一致を確認。PCの実表示確認はComputer UseがブラウザURLを判定できず停止したため未完了。

## ロゴ正本（オーナー確定：2026-10-12）
今後のDeraBiz公式ロゴは黒いDB＋金色の曲線。原本は public/brand/derabiz-logo.png、マークは public/brand/derabiz-mark.png、白抜きは public/brand/derabiz-mark-white.png。黒地に金色の八角形の旧ロゴは新規制作・アイコン・再インストールに使用しない。ショートカットには白地のDB＋ゴールドを使用する。

### PC実表示の確認完了（2026-10-12 18:58 JST）
Computer Useでエクスプローラーのデスクトップフォルダを大きいアイコン表示にして、株式会社DeraBiz.lnkがDB＋ゴールドであることを目視確認。そのショートカットをダブルクリックして起動し、タイトルバー左上・起動中タスクバー・サイトヘッダーとヒーローが新DBロゴで表示されることを実画面で確認。今回追加の画像変更やキャッシュ削除は不要だった。旧ロゴ表示の再現はなく、反映が完了している。

### デスクトップ表示の継続報告と再対応（2026-10-12）
上記QA後もオーナーより『デスクトップでは旧ロゴのまま、F5でも変わらない』と報告。エクスプローラー内の表示確認だけでは実デスクトップの解決確認にならなかったため、完了解釈を撤回。現在のデスクトップ.lnkは再びEdge管理ICOを参照していた。バックアップ後、正本ICOをAppData/Local/DeraBiz/Icons/derabiz-db-gold-691333de2c1b4c168c82c8112c980f89.icoへコピーし参照先を切替。起動引数・起動先の維持と画像ハッシュ一致を確認。SHChangeNotifyとie4uinit -showで表示更新。オーナーが見ているデスクトップ表示は確認待ち。

### 実デスクトップで復旧確認（2026-10-12 19:11 JST）
オーナーから空アイコン報告。旧変更を戻した後、Edge生成のWindows用ICO（59,880 bytes、16/20/24/32/40/48/64/256px）を専用ファイルへコピーし、デスクトップの表示名DeraBiz.lnkとして再作成。旧株式会社DeraBiz.lnkはAppData/Local/DeraBiz/Icons/desktop-original-c59c1772d8f64aebb5dfcd66e3a40db7.lnkへ退避。起動先とapp-idは維持。最初は実デスクトップでも白い空アイコンだったが、Explorer再起動後、壁紙上のVercel右隣のDeraBizがDB＋ゴールドへ変わったことをComputer Useの全画面キャプチャで直接確認（フォルダ内確認ではない）。現在のICO参照はAppData/Local/DeraBiz/Icons/derabiz-windows-c59c1772d8f64aebb5dfcd66e3a40db7.ico。

### 再インストール・再発防止（2026-10-12）
本番manifestは新DBロゴの版付きURLを参照し、Cache-Controlはmax-age=0・must-revalidate。公式画像15点とmanifest/HTMLの参照をnpm run check:logoで検証し、prebuildで自動実行。旧素材への差し戻しを公開前に検出する。AGENTS.mdの旧協会ロゴ指示もDeraBiz正本へ更新。Windowsの保存キャッシュはサイトとは別管理で、再インストール自体の実行は今回不要。

検証結果：正本チェック成功。隔離コピーで画像差し替えと旧URLへの変更を行い、どちらもチェックが終了コード1で拒否することを確認。対象ESLint成功。ローカルTurbopackは既存のnext/font内部解決で失敗したため、Webpackで型チェック・静的生成を確認。
