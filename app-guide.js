/**
 * アプリ登録・操作 図解ガイド
 * 赤枠は画像側に描き込み済み（CSSオーバーレイなし）
 *
 * images/app-guide/
 *   01-home.png                 … ホーム（サービス・登録完了画面）
 *   02-service-list.png         … サービス一覧（各種お手続き）
 *   02-service-list-app-only.png … サービス一覧（アプリ専用手続き・オプション用）
 *   03-procedures-menu.png      … 各種関連手続き（PT予約3番）
 *   04-procedures-top.png       … ご予約について（PT予約4番）
 *   05-contract-entry.png       … 各種お手続き→ご契約変更について
 *   05-credit-card-change.png   … クレジットカード変更・休会
 *   06-program-reservation.png  … PT予約5番
 *   07-member-search.png        … 会員検索フォーム
 *   08-app-link-qr.png          … QR・アプリアクティベート
 *   09-option-menu.png          … オプション追加・解約（アプリ専用手続き）
 *   10-crowd-favorite-tab.png   … お気に入り店舗タブ
 *   10-crowd-favorite-add.png   … 追加ボタン
 *   10-crowd-store-search.png    … 店舗検索（経堂）
 *   10-crowd-status-kyodo.png   … 来館人数表示
 *   11-corporate-app-top.png      … 法人入会・アプリで入会
 *   11-corporate-promo-code.png   … プロモーションコード入力
 *   11-reopen-app-settings.png    … 再入会・サービス一覧→アプリ設定
 *   11-reopen-unregister.png      … 再入会・アプリの登録を解除
 *   11-rejoin-app-top.png         … 再入会・アプリで入会（11-corporate-app-top 複製）
 *   12-unpaid-flowchart.png       … 未納金支払いフロー（全体図）
 *   12-unpaid-app-only.png        … アプリ専用手続き・未納金のお支払い
 *
 * images/trainers/
 *   kusaka.jpg    … 日下トレーナー写真
 *   ishida.jpg    … 石田トレーナー写真
 *   qr-kusaka.png … 日下トレーナー LINE QR
 *   qr-ishida.png … 石田トレーナー LINE QR
 */
var APP_REGISTRATION_GUIDE = {
  registrationSteps: [
    {
      title: 'URLをスマートフォンで開く',
      linkKey: 'memberSearch',
      linkLabel: '会員検索フォームはこちらをタップ',
      text: 'お名前（漢字・カタカナ）・生年月日・入会時の電話番号を入力して検索してください',
      cardStyle: true,
      image: 'images/app-guide/07-member-search.png'
    },
    {
      title: 'アプリアクティベートで登録完了',
      textHtml: 'QRコードが表示されたら、水色の<span class="guide-cyan-btn">アプリアクティベート</span>をタップしてください',
      cardStyle: true,
      image: 'images/app-guide/08-app-link-qr.png'
    },
    {
      title: 'トップ画面へ',
      text: 'JOYFITアプリが起動し、トップ画面へ移動します',
      closing: '位置情報・カメラの使用を許可してください',
      cardStyle: true,
      image: 'images/app-guide/01-home.png'
    }
  ]
};

var APP_PT_LINE_GUIDE = {
  hero: {
    eyebrow: 'PERSONAL TRAINER',
    brand: 'JOYFIT24 経堂',
    lead: 'お申し込みはLINEの友だち追加から'
  },
  prices: [
    { duration: '30分', amount: '3,300円' },
    { duration: '60分', amount: '6,600円' },
    { duration: '90分', amount: '9,900円' }
  ],
  notice: '友だち追加のみですと見逃してしまう可能性があります\n必ずご要望やご挨拶の一言をメッセージでお送りください',
  trainers: [
    {
      nameSei: '日下',
      nameMei: '竜太',
      kana: 'クサカ リュウタ',
      photo: 'images/trainers/kusaka.jpg',
      qr: 'images/trainers/qr-kusaka.png',
      qrNote: 'LINE・Googleカレンダー空き時間のQR',
      highlightTitle: '現在の最高記録',
      highlights: [
        { label: 'スクワット', value: '230', unit: 'kg' },
        { label: 'ベンチプレス', value: '180', unit: 'kg' },
        { label: 'デッドリフト', value: '280', unit: 'kg' }
      ],
      reco: [
        'BIG3の重量を伸ばしたい',
        'フリーウエイトの使い方が知りたい',
        '筋肉量を増やしたい'
      ]
    },
    {
      nameSei: '石田',
      nameMei: '美絵',
      kana: 'イシダ ミエ',
      photo: 'images/trainers/ishida.jpg',
      qr: 'images/trainers/qr-ishida.png',
      qrNote: 'LINE友だち追加用QR',
      highlightTitle: '取得資格',
      highlights: [
        { label: 'YOGA RYT200' },
        { label: 'Core Functional Yoga' },
        { label: '美しい骨盤' }
      ],
      recoTags: ['FWエリアを使ってみたい', 'ダンベルトレーニングをしてみたい'],
      reco: [
        '二の腕引き締め',
        'ヒップアップ',
        '姿勢改善'
      ]
    }
  ],
  footnote: 'JOYFIT24経堂常駐スタッフですので直接お声がけいただいても大丈夫です'
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
      title: '「クレジットカード変更」「休会」をタップ',
      image: 'images/app-guide/05-credit-card-change.png',
      stepId: 'guide-card-step-4'
    }
  ]
};

var APP_CORPORATE_SECTION = {
  notice: '【JOYFIT Appでご入会いただけます】\n12桁のプロモーションコードが必要です\n企業様ごとにコードが異なるため、ご案内ができかねます\n事前にご所属の企業様へお問い合わせください',
  noticeProminent: true,
  blocks: [
    {
      blockTitle: 'JOYFIT Appインストール',
      steps: [
        {
          num: '1',
          title: 'App入会ページへ',
          linkKey: 'appJoin',
          linkLabel: 'https://joyfit.jp/kyodo/app_join/',
          linkBanner: false,
          cardStyle: true
        },
        {
          num: '2',
          title: '「アプリで入会」をタップ',
          image: 'images/app-guide/11-corporate-app-top.png',
          cardStyle: true
        },
        {
          num: '3',
          title: 'プロモーションコードを入力',
          text: 'プロモーションコードを入力して「次へ」をタップ\nその後は通常入会同様の手順でございます',
          closing: '顔写真の撮影時、必ずカメラの権限を許可してください',
          image: 'images/app-guide/11-corporate-promo-code.png',
          cardStyle: true
        }
      ]
    }
  ]
};

var APP_REJOIN_SECTION = {
  blocks: [
    {
      blockTitle: '再入会手続き',
      intro: '過去にJOYFIT会員だった方で、再度入会したい場合の手順',
      steps: [
        {
          num: '1',
          title: 'ホーム画面右上の「サービス」をタップ',
          image: 'images/app-guide/01-home.png'
        },
        {
          num: '2',
          title: '「アプリ設定」をタップ',
          image: 'images/app-guide/11-reopen-app-settings.png'
        },
        {
          num: '3',
          title: '「アプリの登録を解除」をタップ',
          image: 'images/app-guide/11-reopen-unregister.png'
        },
        {
          num: '4',
          title: '「アプリで入会」をタップ',
          image: 'images/app-guide/11-rejoin-app-top.png'
        }
      ],
      notice: '【再入会手続き後のご入会について】\n上記方法でログアウトできたら再度アプリで入会になります\nそのままプロモーションコードはスキップして経堂で実施している通常のキャンペーンでご入会ください\n必ず契約前にHPをご確認ください',
      noticeProminent: true,
      noticeLinkKey: 'storeHp',
      noticeLinkLabel: 'https://joyfit.jp/kyodo/',
      noticeAfter: true
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
      title: '「アプリ専用手続き」をタップ',
      image: 'images/app-guide/02-service-list-app-only.png'
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
  ],
  footnote: '当月末解約となります'
};

var APP_CROWD_STATUS_GUIDE = {
  steps: [
    {
      num: '1',
      title: '「お気に入り店舗」をタップ',
      image: 'images/app-guide/10-crowd-favorite-tab.png'
    },
    {
      num: '2',
      title: '「追加」をタップ',
      image: 'images/app-guide/10-crowd-favorite-add.png'
    },
    {
      num: '3',
      title: '「東京23区」の「経堂」の＋をタップ',
      image: 'images/app-guide/10-crowd-store-search.png'
    },
    {
      num: '4',
      title: '来館人数で混雑状況を確認',
      image: 'images/app-guide/10-crowd-status-kyodo.png'
    }
  ]
};

var APP_UNPAID_GUIDE = {
  introPanelStyle: 'featured',
  introBullets: [
    '未納金がある間は施設をご利用いただけません',
    '月会費を2ヶ月滞納されますと規約退会になります',
    'APP入金後は再度施設をご利用いただけます'
  ],
  cardUpdateNote: '支払い後クレジットカード情報は更新されないため、別途再登録が必要です',
  cardUpdateLink: {
    panel: 'card',
    stepId: 'guide-card-step-4',
    label: 'クレジットカード変更の手順へ'
  },
  flowchart: 'images/app-guide/12-unpaid-flowchart.png',
  flowTitle: 'プッシュ通知・バナーから',
  steps: [
    {
      num: '1',
      title: 'JOYFITアプリからプッシュ通知'
    },
    {
      num: '2',
      title: 'アプリで未納バナーをタップ'
    },
    {
      num: '3',
      title: 'お支払い内容・金額を確認',
      text: '「次へ」を押してください'
    },
    {
      num: '4',
      title: 'カード情報を入力して完了',
      text: '「確認」を押して手続きを完了してください'
    }
  ],
  altPath: {
    blockTitle: 'プッシュ通知やバナーが見当たらない方は',
    steps: [
      {
        num: '1',
        title: 'ホーム画面右上の「サービス」をタップ',
        image: 'images/app-guide/01-home.png'
      },
      {
        num: '2',
        title: '「アプリ専用手続き」をタップ',
        image: 'images/app-guide/02-service-list-app-only.png'
      },
      {
        num: '3',
        title: '「未納金のお支払い」をタップ',
        image: 'images/app-guide/12-unpaid-app-only.png'
      }
    ]
  }
};

var APP_CAMPAIGN_APPLY_GUIDE = {
  notice: '追加特典は新規入会者様限定です\n入会月末までに必ず申請をお願いいたします\n※期間外での特典付与は出来かねます',
  noticeProminent: true,
  linkKey: 'specialPlan',
  applyLabel: 'こちらから申請してください'
};
