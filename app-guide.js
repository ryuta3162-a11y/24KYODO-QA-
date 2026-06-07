/**
 * アプリ登録・操作 図解ガイド
 * 赤枠は画像側に描き込み済み（CSSオーバーレイなし）
 *
 * images/app-guide/
 *   01-home.png                 … ホーム（サービス・登録完了画面）
 *   02-service-list.png         … サービス一覧
 *   03-procedures-menu.png      … 各種関連手続き（PT予約3番）
 *   04-procedures-top.png       … ご予約について（PT予約4番）
 *   05-contract-entry.png       … 各種お手続き→ご契約変更について
 *   05-credit-card-change.png   … クレジットカード変更
 *   06-program-reservation.png  … PT予約5番
 *   07-member-search.png        … 会員検索フォーム
 *   08-app-link-qr.png          … QR・アプリアクティベート
 *   09-option-menu.png          … オプション追加・解約メニュー
 *   10-crowd-favorite-tab.png   … お気に入り店舗タブ
 *   10-crowd-favorite-add.png   … 追加ボタン
 *   10-crowd-store-search.png    … 店舗検索（経堂）
 *   10-crowd-status-kyodo.png   … 来館人数表示
 */
var APP_REGISTRATION_GUIDE = {
  registrationSteps: [
    {
      title: 'URLをスマートフォンで開く',
      linkKey: 'memberSearch',
      linkLabel: '会員検索フォームはこちら',
      cardStyle: true,
      image: 'images/app-guide/07-member-search.png'
    },
    {
      title: 'アプリアクティベートで登録完了',
      textHtml: 'QRコードが表示されたら、水色の<span class="guide-cyan-btn">アプリアクティベート</span>をタップしてください。',
      cardStyle: true,
      image: 'images/app-guide/08-app-link-qr.png'
    },
    {
      title: 'トップ画面へ',
      text: 'JOYFITアプリが起動し、トップ画面へ移動します。',
      closing: 'こちらに移動して終了です',
      cardStyle: true,
      image: 'images/app-guide/01-home.png'
    }
  ]
};

var APP_PT_RESERVATION_GUIDE = {
  steps: [
    {
      num: '1',
      title: 'ホーム画面右上の「サービス」をタップ',
      image: 'images/app-guide/01-home.png'
    },
    {
      num: '2',
      title: '「各種お手続き」をタップ',
      image: 'images/app-guide/02-service-list.png'
    },
    {
      num: '3',
      title: '「各種関連手続き」をタップ',
      image: 'images/app-guide/03-procedures-menu.png'
    },
    {
      num: '4',
      title: '「ご予約について」をタップ',
      image: 'images/app-guide/04-procedures-top.png'
    },
    {
      num: '5',
      title: '「パーソナルトレーニング予約」をタップ',
      image: 'images/app-guide/06-program-reservation.png'
    }
  ],
  footnote: '※予約方法はLINEなどで受け付けている可能性もございます。あくまでパーソナルトレーニング予約は決済時の画面・ウェブ予約になりますので、対応していない可能性もあります。詳細は必ず店舗のスタッフもしくはLINEでお問い合わせください。'
};

var APP_CREDIT_CARD_GUIDE = {
  steps: [
    {
      num: '1',
      title: 'ホーム画面右上の「サービス」をタップ',
      image: 'images/app-guide/01-home.png'
    },
    {
      num: '2',
      title: '「各種お手続き」をタップ',
      image: 'images/app-guide/02-service-list.png'
    },
    {
      num: '3',
      title: '「ご契約変更について」をタップ',
      image: 'images/app-guide/05-contract-entry.png'
    },
    {
      num: '4',
      title: '「クレジットカード変更」をタップ',
      image: 'images/app-guide/05-credit-card-change.png'
    }
  ]
};

var APP_OPTION_GUIDE = {
  steps: [
    {
      num: '1',
      title: 'ホーム画面右上の「サービス」をタップ',
      image: 'images/app-guide/01-home.png'
    },
    {
      num: '2',
      title: '「各種お手続き」をタップ',
      image: 'images/app-guide/02-service-list.png'
    },
    {
      num: '3',
      title: '「ご契約変更について」をタップ',
      image: 'images/app-guide/05-contract-entry.png'
    },
    {
      num: '4',
      title: '「オプション追加」または「オプションの解約」をタップ',
      image: 'images/app-guide/09-option-menu.png'
    }
  ]
};

var APP_CROWD_STATUS_GUIDE = {
  steps: [
    {
      num: '1',
      title: 'JOYFITアプリのホーム画面',
      image: 'images/app-guide/01-home.png'
    },
    {
      num: '2',
      title: '下部「お気に入り店舗」をタップ',
      image: 'images/app-guide/10-crowd-favorite-tab.png'
    },
    {
      num: '3',
      title: '「追加」をタップ',
      image: 'images/app-guide/10-crowd-favorite-add.png'
    },
    {
      num: '4',
      title: '「東京23区」→「経堂」の＋をタップ',
      image: 'images/app-guide/10-crowd-store-search.png'
    },
    {
      num: '5',
      title: '「○人来館中」で混雑状況を確認',
      image: 'images/app-guide/10-crowd-status-kyodo.png'
    }
  ],
  footnote: '※複数店舗の追加が可能です。'
};
