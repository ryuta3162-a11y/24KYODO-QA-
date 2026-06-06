/**
 * アプリ登録・操作 図解ガイド
 * 赤枠は画像側に描き込み済み（CSSオーバーレイなし）
 */
var APP_REGISTRATION_GUIDE = {
  title: 'APP登録方法',
  lead: 'スマートフォンで登録をお願いいたします。',
  registrationSteps: [
    {
      num: '①',
      title: '会員検索フォームを開く',
      text: '下記URLをスマートフォンで開き、お名前（漢字・カタカナ）・生年月日・入会時の電話番号を入力して検索してください。',
      image: 'images/app-guide/07-member-search.png',
      linkUrl: 'https://procedure.joyfit.jp/qrcode2/index.html',
      linkLabel: '会員検索フォームを開く'
    },
    {
      num: '②',
      title: '「アプリアクティベート」で登録完了',
      text: 'QRコードが表示されたら、カメラで読み取る必要はありません。水色の「アプリアクティベート」をタップしてください。JOYFITアプリが起動し、登録が完了するとホーム画面（トップ）が表示されます。',
      image: 'images/app-guide/08-app-link-qr.png'
    }
  ],
  navTitle: 'アプリ内「各種お手続き」への行き方',
  navIntro: '登録完了後、契約変更・休会・予約などは次の操作で進めます。',
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
