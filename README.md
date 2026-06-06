# 24KYODO-QA

JOYFIT24 経堂の「よくあるご質問・各種手続き」マスターページ（静的HTML）。

問い合わせ削減のため、5カテゴリのQ&Aと関連LPへの導線を1ページにまとめています。

## ファイル構成

| ファイル | 役割 |
|---------|------|
| `index.html` | 表示ページ |
| `qa-content.js` | Q&A本文（**ここを編集**） |
| `site-links.js` | 関連LP・フォームのURL（**デプロイ後に更新**） |
| `joyfit_logo.png` | フッターロゴ |

## カテゴリ

1. アプリ登録方法
2. 各種オプション
3. 契約切り替え
4. 法人契約・変更
5. 学割・移籍・紹介

## ローカル確認

`index.html` をブラウザで開くだけで動作します（Node.js 不要）。

同一PC上に他LPフォルダ（`24KYODO-FREETRIAL` 等）が並んでいる場合、`site-links.js` の空欄項目は自動的に相対パスでリンクされます。

---

## GitHub リポジトリ作成 → push（初回のみ）

### 1. GitHub で空リポジトリを作る

1. [GitHub](https://github.com/new) を開く
2. Repository name: `24KYODO-QA`（任意）
3. **Public** または Private を選択
4. 「Add a README file」等は**チェックしない**（ローカルに既にあるため）
5. **Create repository**

### 2. ローカルから push

PowerShell で本フォルダに移動して実行:

```powershell
cd "C:\Users\ryuta-kusaka\Documents\GitHub\24KYODO-QA"

# 初回のみ（既に git init 済みなら不要）
git init
git branch -M main

# リモート追加（YOUR_USER を自分のGitHubユーザー名に変更）
git remote add origin https://github.com/YOUR_USER/24KYODO-QA.git

git add .
git commit -m "Initial commit: JOYFIT24経堂 Q&A LP"
git push -u origin main
```

---

## Vercel デプロイ

1. [Vercel Dashboard](https://vercel.com/dashboard) → **Add New** → **Project**
2. GitHub の `24KYODO-QA` リポジトリを **Import**
3. Framework Preset: **Other**（静的サイト）
4. Build Command: 空欄 / Output Directory: 空欄（ルートに `index.html` があるため）
5. **Deploy**

デプロイ完了後、表示された URL（例: `https://24kyodo-qa.vercel.app`）を控えます。

---

## デプロイ後の必須設定

`site-links.js` を開き、空欄の URL を本番値に更新して commit → push します（Vercel が自動再デプロイ）。

```javascript
var SITE_LINKS = {
  qaSelf: 'https://24kyodo-qa.vercel.app',           // 本Q&AのURL
  freetrial: 'https://xxxx-freetrial.vercel.app',    // 無料体験LP
  machine: 'https://script.google.com/.../exec',     // マシン一覧 GAS
  special2Index: 'https://xxxx-special2.vercel.app',
  referralForm: 'https://xxxx-special2.vercel.app/referral_form.html',
  transferForm: 'https://xxxx-special2.vercel.app/transfer_form.html',
  continuationForm: 'https://xxxx-special2.vercel.app/continuation_form.html',
  // storeHp, appJoin, studentForm 等は既に設定済み
};
```

### 店舗HPへの設置

経堂店舗HP（または関連ページ）から、デプロイした Q&A URL へリンクを設置してください。

---

## Q&A 本文の更新

`qa-content.js` の `items[].a`（回答）を編集するだけで反映されます。

質問の追加例:

```javascript
{ q: '新しい質問', a: '回答テキスト' }
```

外部リンク付き:

```javascript
{
  q: '質問',
  a: '回答',
  linkLabel: 'リンク表示名',
  linkKey: 'referralForm'   // site-links.js のキー
}
```

更新後: `updatedAt` の日付も合わせて変更してください。

---

## 他LPとの関係

| リポジトリ | 用途 |
|-----------|------|
| 24KYODO-FREETRIAL | 無料体験予約 |
| 24KYODO-MACHINE | マシンラインナップ（GAS配信） |
| 24kyodo-special2 | キャンペーン申請フォーム |
| **24KYODO-QA** | 本リポジトリ |

---

## 注意

- 回答文は経堂向けの**草案**です。店舗運用に合わせて `qa-content.js` を調整してください。
- キャンペーン条件・金額は `24kyodo-special2` と整合させてください。変更時は両方更新が必要です。
