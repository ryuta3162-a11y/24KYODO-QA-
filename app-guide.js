/**
 * アプリ登録・操作 図解ガイド
 * highlights: top/left/width/height は画像に対する百分率（%）
 */
var APP_REGISTRATION_GUIDE = {
  title: 'APP登録方法',
  lead: 'スマートフォンで登録をお願いいたします。',
  memberSearchUrl: 'https://procedure.joyfit.jp/qrcode2/index.html',
  registrationSteps: [
    {
      num: '①',
      title: '会員検索フォームを開く',
      text: '下記URLをスマートフォンで開き、お名前（漢字・カタカナ）・生年月日・入会時の電話番号を入力して検索してください。',
      image: 'images/app-guide/07-member-search.png',
      linkUrl: 'https://procedure.joyfit.jp/qrcode2/index.html',
      linkLabel: '会員検索フォームを開く',
      highlights: []
    },
    {
      num: '②',
      title: '「アプリアクティベート」で登録完了',
      text: 'QRコードが表示されたら、カメラで読み取る必要はありません。水色の「アプリアクティベート」をタップしてください。JOYFITアプリが起動し、登録が完了するとホーム画面（トップ）が表示されます。',
      image: 'images/app-guide/08-app-link-qr.png',
      highlights: [
        { label: 'タップ', top: 59.5, left: 26, width: 48, height: 4.5 }
      ]
    }
  ],
  navTitle: 'アプリ内「各種お手続き」への行き方',
  navIntro: '登録完了後、契約変更・休会・予約などは次の操作で進めます。',
  navSteps: [
    {
      num: '1',
      title: 'ホーム画面右上の「サービス」をタップ',
      text: 'JOYFITアプリのホーム画面が表示されたら、右上の「サービス」をタップしてください。',
      image: 'images/app-guide/01-home.png',
      highlights: [
        { label: 'サービス', top: 5.8, left: 79, width: 18, height: 6.5 }
      ]
    },
    {
      num: '2',
      title: '「サービス一覧」が表示されます',
      text: 'サービス一覧画面に切り替わります。「店舗」セクションの「各種お手続き」をタップしてください。',
      image: 'images/app-guide/02-service-list.png',
      highlights: [
        { label: '各種お手続き', top: 48.5, left: 35, width: 24, height: 11 }
      ]
    },
    {
      num: '3',
      title: '「各種お手続き」→「各種関連手続き」',
      text: '「店舗」の「各種お手続き」をタップすると次の画面が開きます。「各種関連手続き」をタップしてください。',
      image: 'images/app-guide/03-procedures-menu.png',
      highlights: [
        { label: '各種関連手続き', top: 27.5, left: 10, width: 80, height: 8.5 }
      ]
    },
    {
      num: '4',
      title: '「ご契約変更」または「ご予約について」',
      text: 'ご契約の変更・休会は「ご契約変更について」をタップ。プログラム予約は「ご予約について」をタップしてください（→ 6番へ）。',
      image: 'images/app-guide/04-procedures-top.png',
      highlights: [
        { label: 'ご予約 → 6番', top: 16, left: 8, width: 84, height: 7.5 },
        { label: 'ご契約変更 → 5番', top: 27, left: 8, width: 84, height: 7.5, labelBelow: true }
      ]
    },
    {
      num: '5',
      title: '「クレジットカード変更」「休会」を選択',
      text: 'ご契約変更画面から、お手続き内容を選んでください。',
      image: 'images/app-guide/05-contract-change.png',
      highlights: [
        { label: 'クレジットカード変更', top: 14.5, left: 8, width: 84, height: 7.5 },
        { label: '休会', top: 25, left: 8, width: 84, height: 7.5, labelBelow: true }
      ]
    }
  ],
  branchStep: {
    num: '6',
    title: '「パーソナルトレーニング予約」など',
    text: '4番で「ご予約について」を選んだ場合、この画面から各プログラムの予約ができます。「パーソナルトレーニング予約」をタップしてください。',
    image: 'images/app-guide/06-program-reservation.png',
    highlights: [
      { label: 'パーソナルトレーニング予約', top: 31, left: 7, width: 86, height: 7 }
    ]
  }
};
