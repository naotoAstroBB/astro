# 個人事業ホームページ

情報サービス業・雑貨小物類販売・EC運営を行う個人事業のホームページです。
ビルド不要の静的HTML/CSSで、ブラウザで `index.html` を開くだけで確認できます。

## ファイル構成

```
homepage/
├── index.html       ページ本体
├── assets/style.css  スタイル
└── README.md         このファイル
```

## 差し替えが必要な項目（未確定のため仮置きしています）

屋号は「ASTRO market」で確定済みです。`index.html` 内の以下は、確定した内容に差し替えてください。

- 「代表者情報」テーブル：代表・所在地・メール・電話番号
- `mailto:info@example.com`：実際の連絡先メールアドレス
- 「法人向けITサービス紹介・営業支援」カード：契約開始後、必要に応じて内容を更新

## 公開方法（GitHub Pages を使う場合）

1. GitHubリポジトリの Settings → Pages を開く
2. Source を「Deploy from a branch」にし、対象ブランチと `/homepage` フォルダ（または `/docs` に配置し直す）を指定
3. 数分後に発行されるURLでサイトを確認

社名・住所・電話番号などが決まりましたら、いつでも反映します。
