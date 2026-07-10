# ASTRO Market ホームページ

情報サービス業・雑貨小物類販売・EC運営を行うASTRO Marketのホームページです。
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

- 外部リソース（CDN・フォント・トラッキング等）は一切読み込まず、完全に自己完結しています。フォーム・Cookie・アクセス解析も一切なく、訪問者の個人情報を収集する仕組み自体がありません。
- 厳格な Content-Security-Policy（`<meta http-equiv>`）を設定し、インラインスクリプトや外部ドメインの読み込みを禁止しています（`upgrade-insecure-requests` も付与）。
- スクロール演出（`.reveal`）はJavaScriptが読み込めない・失敗した場合でも、既定でコンテンツが全て表示される作りになっています（JSはあくまで演出の上乗せ）。
- お問い合わせページに、メールでいただいた個人情報を目的外利用しない旨を明記しています。
- 画像はCanvas経由で再エンコードしており、EXIF（撮影日時・GPS位置情報等）は含まれていません。
- リポジトリの `.gitignore` で `.env` や鍵ファイルなど機微情報を誤コミットしないようにしています。
- `.github/dependabot.yml` で GitHub Actions のバージョンを自動監視し、更新提案を受け取れるようにしています。
- コミット履歴に含まれていた個人のメールアドレスは、公開前に GitHub の noreply 形式アドレスへ書き換え済みです。
- GitHub Pages はレスポンスヘッダーをカスタマイズできないため、より高度なヘッダー（`X-Content-Type-Options: nosniff`、`X-Frame-Options`、`Strict-Transport-Security` など）を設定したい場合は、Cloudflare等をフロントに置くか、Netlify/Vercel等ヘッダー設定が可能なホスティングへの移行を検討してください。
- 参考: GitHub Actions のセキュリティ強化として、ワークフロー内の公式アクション（`actions/checkout` 等）をタグではなくコミットSHAで固定するとサプライチェーン耐性がさらに上がります（今回は外部ネットワークからSHAを取得できず未実施のため、余裕があれば手動で検討してください）。

## 事業者情報

屋号・代表・連絡先は確定済みです（`about.html` 参照）。所在地は非掲載、電話番号は「お問い合わせください」と表記しています。

「法人携帯・回線サービス提供」「ERP製品・サービスのご提供」（`services.html`）は契約開始後、必要に応じて内容を更新してください。

## 公開方法（GitHub Pages）

`.github/workflows/deploy-pages.yml` に、`homepage/` フォルダをそのまま公開するワークフローを用意済みです。
有効化に必要なのは以下の1回だけの操作です。

1. GitHubリポジトリの **Settings → Pages** を開く
2. **Build and deployment → Source** を「**GitHub Actions**」に変更する
3. **Settings → Actions → General → Workflow permissions** を「**Read and write permissions**」に変更する（`pages: write` などをワークフローに許可するため）
4. **Settings → Environments → github-pages → Deployment branches and tags** を「**No restriction**」に変更する（開発ブランチからのデプロイを許可するため）

これだけで、このブランチに `homepage/` の変更をpushするたびに自動でデプロイされ、URLが発行されます
（初回は Settings → Pages の画面、または Actions タブの実行結果にURLが表示されます）。

## 独自ドメイン

`homepage/CNAME` に `astro-market.jp` を設定済みです。お名前.com側でA/AAAAレコードを追加し、
DNSが反映されると、GitHub Pagesが自動でドメインを認識し、HTTPS証明書（Let's Encrypt）も自動発行されます。
（`astro-market.jp` 稼働確認 / DNS check successful 済み）

社名・住所・電話番号などが決まりましたら、いつでも反映します。
