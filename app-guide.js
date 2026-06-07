/**
 * アプリ登録・操作 図解ガイド
 * 赤枠は画像側に描き込み済み（CSSオーバーレイなし）
 */
var APP_REGISTRATION_GUIDE = {
  registrationSteps: [
    {
      title: 'URLをスマートフォンで開く',
      image: 'images/app-guide/07-member-search.png'
    },
    {
      title: 'アプリアクティベートで登録完了',
      textHtml: 'QRコードが表示されたら、水色の<span class="guide-cyan-btn">アプリアクティベート</span>をタップしてください。',
      image: 'images/app-guide/08-app-link-qr.png'
    },
    {
      title: 'トップ画面へ',
      text: 'JOYFITアプリが起動し、トップ画面へ移動します。',
      closing: 'こちらに移動して終了です',
      image: 'images/app-guide/01-home.png'
    }
  ]
};

var APP_PROCEDURES_GUIDE = {
  navTitle: 'アプリ内「各種お手続き」への行き方',
  navIntro: 'オプション・契約変更・休会・予約などは次の操作で進めます。',
  navSteps: [
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
    },
    {
      num: '4',
      title: '「ご契約変更」または「ご予約について」',
      text: 'オレンジ色のボタンが2つ表示されます。\n・上の「ご予約について」→ プログラム予約（6番へ）\n・下の「ご契約変更について」→ 契約変更・休会（5番へ）\n目的のボタンをタップしてください。',
      image: 'images/app-guide/04-procedures-top.png'
    },
    {
      num: '5',
      title: '「クレジットカード変更」「休会」を選択',
      text: '4番で「ご契約変更について」を選んだ場合、この画面が開きます。\n・「クレジットカード変更」… お支払いカードの変更\n・「休会」… 休会のお手続き\n該当するボタンをタップしてください。',
      image: 'images/app-guide/05-contract-change.png'
    }
  ],
  branchStep: {
    num: '6',
    title: '「パーソナルトレーニング予約」など',
    text: '4番で「ご予約について」を選んだ場合、この画面から各プログラムの予約ができます。「パーソナルトレーニング予約」をタップしてください。',
    image: 'images/app-guide/06-program-reservation.png'
  }
};
