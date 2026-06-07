/**
 * アプリ登録・操作 図解ガイド
 * 赤枠は画像側に描き込み済み（CSSオーバーレイなし）
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

var APP_NAV_COMMON_STEPS = [
  {
    num: '1',
    title: 'ホーム画面右上の「サービス」をタップ',
    text: 'JOYFITアプリのホーム画面が表示されたら、右上の「サービス」をタップしてください。',
    image: 'images/app-guide/01-home.png'
  },
  {
    num: '2',
    title: '「サービス一覧」→「各種お手続き」をタップ',
    text: 'サービス一覧が表示されます。「店舗」セクションの「各種お手続き」をタップしてください。',
    image: 'images/app-guide/02-service-list.png'
  },
  {
    num: '3',
    title: '「各種関連手続き」をタップ',
    text: '各種お手続き画面が開いたら、「各種関連手続き」をタップしてください。',
    image: 'images/app-guide/03-procedures-menu.png'
  }
];

var APP_PT_RESERVATION_GUIDE = {
  intro: 'アプリ内の各種お手続きから、パーソナルトレーニングを予約できます。',
  steps: APP_NAV_COMMON_STEPS.concat([
    {
      num: '4',
      title: '「ご予約について」をタップ',
      text: 'オレンジ色の「ご予約について」をタップしてください。',
      image: 'images/app-guide/04-procedures-top.png'
    },
    {
      num: '5',
      title: '「パーソナルトレーニング予約」をタップ',
      text: 'プログラム予約画面が開いたら、「パーソナルトレーニング予約」をタップしてください。',
      image: 'images/app-guide/06-program-reservation.png'
    }
  ])
};

var APP_CREDIT_CARD_GUIDE = {
  intro: '各種お手続きから変更できるのは、クレジットカードの変更のみです。',
  steps: APP_NAV_COMMON_STEPS.concat([
    {
      num: '4',
      title: '「ご契約変更について」をタップ',
      text: 'オレンジ色の「ご契約変更について」をタップしてください。',
      image: 'images/app-guide/04-procedures-top.png'
    },
    {
      num: '5',
      title: '「クレジットカード変更」をタップ',
      text: '契約変更画面が開いたら、「クレジットカード変更」をタップしてください。',
      image: 'images/app-guide/05-contract-change.png'
    }
  ])
};
