/**
 * 関連LP・フォームのURL
 *
 * Vercel デプロイ後、空欄の項目に本番URLを入れてください。
 * 空欄のままの場合は SITE_LINKS_LOCAL（ローカルプレビュー用）が使われます。
 */
var SITE_LINKS = {
  /** 本Q&Aページ自身（デプロイ後に設定・OGP用） */
  qaSelf: '',
  /** JOYFIT24経堂 公式店舗HP */
  storeHp: 'https://joyfit.jp/kyodo/',
  /** JOYFITアプリ入会ページ（経堂） */
  appJoin: 'https://joyfit.jp/kyodo/app_join/',
  /** LP · 無料体験（24KYODO-FREETRIAL） */
  freetrial: '',
  /** LP · マシンラインナップ（GAS Webアプリ exec URL） */
  machine: '',
  /** LP · キャンペーン一覧（24kyodo-special2） */
  special2Index: '',
  referralForm: '',
  transferForm: '',
  continuationForm: '',
  /** 会員検索・アプリ連携（経堂） */
  memberSearch: 'https://procedure.joyfit.jp/qrcode2/index.html',
  /** 学校関係者割（Googleフォーム・経堂） */
  studentForm: 'https://forms.gle/PCrYhsMrFGtQocZe6',
  /** オプション解約方法（YouTube Shorts） */
  optionCancelVideo: 'https://www.youtube.com/shorts/qpvkmWi-vTM'
};

/** 同一PC上で複数LPフォルダを並べて開くときの相対パス */
var SITE_LINKS_LOCAL = {
  freetrial: '../24KYODO-FREETRIAL/index.html',
  special2Index: '../24kyodo-special2/index.html',
  referralForm: '../24kyodo-special2/referral_form.html',
  transferForm: '../24kyodo-special2/transfer_form.html',
  continuationForm: '../24kyodo-special2/continuation_form.html'
};

function resolveSiteLink(key) {
  var url = SITE_LINKS[key];
  if (url && url.indexOf('http') === 0) {
    return url;
  }
  if (typeof SITE_LINKS_LOCAL !== 'undefined' && SITE_LINKS_LOCAL[key]) {
    return SITE_LINKS_LOCAL[key];
  }
  return url || '#';
}

/** ヘッダー下に表示する関連ページ（machine など未設定は非表示） */
var RELATED_PAGES = [
  { key: 'storeHp', label: '店舗HP' },
  { key: 'freetrial', label: '無料体験予約' },
  { key: 'special2Index', label: 'キャンペーン申請' },
  { key: 'machine', label: 'マシン一覧' }
];
