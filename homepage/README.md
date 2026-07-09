# ASTRO market ホームページ

情報サービス業・雑貨小物類販売・EC運営を行うASTRO marketのホームページです。
ビルド不要の静的HTML/CSS/JSで、ブラウザで `index.html` を開くだけで確認できます。

## ファイル構成

```
homepage/
├── index.html        ページ本体
├── assets/style.css   スタイル
├── assets/script.js   ヘッダー追従・スクロール演出・モバイルメニューなど
└── README.md          このファイル
```

## セキュリティ・堅牢性

- 外部リソース（CDN・フォント・トラッキング等）は一切読み込まず、完全に自己完結しています。
- 厳格な Content-Security-Policy（`<meta http-equiv>`）を設定し、インラインスクリプトや外部ドメインの読み込みを禁止しています。
- スクロール演出（`.reveal`）はJavaScriptが読み込めない・失敗した場合でも、既定でコンテンツが全て表示される作りになっています（JSはあくまで演出の上乗せ）。
- GitHub Pages はレスポンスヘッダーをカスタマイズできないため、より高度なヘッダー（`X-Content-Type-Options: nosniff`、`X-Frame-Options`、`Strict-Transport-Security` など）を設定したい場合は、Cloudflare等をフロントに置くか、Netlify/Vercel等ヘッダー設定が可能なホスティングへの移行を検討してください。

## 事業者情報

屋号・代表・連絡先は確定済みです（`index.html` の「代表者情報」「お問い合わせ」セクション参照）。
所在地は非公開とし、「お問い合わせいただいた方に個別にご案内」と表記しています。

- 「法人向けITサービス紹介・営業支援」カード：契約開始後、必要に応じて内容を更新

## 公開方法（GitHub Pages を使う場合）

1. GitHubリポジトリの Settings → Pages を開く
2. Source を「Deploy from a branch」にし、対象ブランチと `/homepage` フォルダ（または `/docs` に配置し直す）を指定
3. 数分後に発行されるURLでサイトを確認

社名・住所・電話番号などが決まりましたら、いつでも反映します。
