# ASTRO market ホームページ

情報サービス業・雑貨小物類販売・EC運営を行うASTRO marketのホームページです。
ビルド不要の静的HTML/CSS/JSの複数ページ構成で、`index.html` をブラウザで開くだけで確認できます。

## ファイル構成

```
homepage/
├── index.html         トップページ
├── services.html       事業内容ページ
├── about.html          代表者情報ページ
├── news.html           お知らせページ
├── contact.html        お問い合わせページ
├── assets/style.css    スタイル
├── assets/script.js    ヘッダー追従・ページ内アクティブナビ・モバイルメニューなど
└── README.md           このファイル
```

ナビゲーションはページ内アンカーではなく、実際に別ファイル（別URL）へ遷移する通常のマルチページ構成です。

## セキュリティ・堅牢性

- 外部リソース（CDN・フォント・トラッキング等）は一切読み込まず、完全に自己完結しています。
- 厳格な Content-Security-Policy（`<meta http-equiv>`）を設定し、インラインスクリプトや外部ドメインの読み込みを禁止しています。
- スクロール演出（`.reveal`）はJavaScriptが読み込めない・失敗した場合でも、既定でコンテンツが全て表示される作りになっています（JSはあくまで演出の上乗せ）。
- GitHub Pages はレスポンスヘッダーをカスタマイズできないため、より高度なヘッダー（`X-Content-Type-Options: nosniff`、`X-Frame-Options`、`Strict-Transport-Security` など）を設定したい場合は、Cloudflare等をフロントに置くか、Netlify/Vercel等ヘッダー設定が可能なホスティングへの移行を検討してください。

## 事業者情報

屋号・代表・連絡先は確定済みです（`about.html` 参照）。所在地・電話番号の詳細は非公開とし、「お問い合わせください」と表記しています。

「法人携帯・回線サービス提供」「ERP製品・サービスのご提供」（`services.html`）は契約開始後、必要に応じて内容を更新してください。

## 公開方法（GitHub Pages を使う場合）

1. GitHubリポジトリの Settings → Pages を開く
2. Source を「Deploy from a branch」にし、対象ブランチと `/homepage` フォルダ（または `/docs` に配置し直す）を指定
3. 数分後に発行されるURLでサイトを確認（`index.html` がトップページとして表示されます）

社名・住所・電話番号などが決まりましたら、いつでも反映します。
