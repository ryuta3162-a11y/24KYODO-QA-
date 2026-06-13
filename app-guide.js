/**
 * アプリ登録・操作 図解ガイド
 * 赤枠は画像側に描き込み済み（CSSオーバーレイなし）
 *
 * images/app-guide/
 *   01-home.png                 … ホーム（サービス案内・各種手続き用）
 *   01-home-top.png             … 登録完了後のトップ画面（赤枠なし）
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
 *   kusaka.png    … 日下トレーナー写真（背景透過）
 *   ishida.png    … 石田トレーナー写真（背景透過）
 *   qr-kusaka.png … 日下トレーナー LINE QR（参照用・サイトではURLリンク）
 *   qr-ishida.png … 石田トレーナー LINE QR（参照用・サイトではURLリンク）
 */
var APP_REGISTRATION_GUIDE = {
  registrationSteps: [
    {
      num: '1',
      title: 'URLをスマートフォンで開く',
      linkKey: 'memberSearch',
      linkLabel: '会員検索フォームはこちらをタップ',
      text: 'お名前（漢字・カタカナ）・生年月日・入会時の電話番号を入力して検索してください',
      cardStyle: true,
      image: 'images/app-guide/07-member-search.png'
    },
    {
      num: '2',
      title: 'アプリアクティベートで登録完了',
      textHtml: '水色の<span class="guide-cyan-btn">アプリアクティベート</span>をタップしてください',
      cardStyle: true,
      image: 'images/app-guide/08-app-link-qr.png'
    },
    {
      num: '3',
      title: 'トップ画面へ',
      text: 'JOYFITアプリが起動し、トップ画面へ移動します',
      closing: '位置情報・カメラの使用を許可してください',
      closingPermission: ['location', 'camera'],
      cardStyle: true,
      image: 'images/app-guide/01-home-top.png'
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
  notice: '友だち追加後、メッセージをお願い致します\n※見逃してしまう可能性がある為',
  trainers: [
    {
      photoSide: 'right',
      nameSei: '日下',
      nameMei: '竜太',
      kana: 'クサカ リュウタ',
      photo: 'images/trainers/kusaka.png',
      lineKey: 'lineKusaka',
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
      photoSide: 'left',
      nameSei: '石田',
      nameMei: '美絵',
      kana: 'イシダ ミエ',
      photo: 'images/trainers/ishida.png',
      lineKey: 'lineIshida',
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
  footnote: 'トレーナーはJOYFIT24経堂スタッフです\n入会後に直接お声がけいただいても大丈夫です'
};

var APP_CREDIT_CARD_GUIDE = {
  stepsAnchorId: 'guide-card-steps',
  anchorNav: [
    { id: 'guide-card-steps', label: '手順' },
    { id: 'guide-card-credit', label: 'クレジットカード変更' },
    { id: 'guide-card-kyukai', label: '休会について' }
  ],
  infoPanels: [
    {
      anchorId: 'guide-card-credit',
      title: 'クレジットカード変更について',
      bullets: [
        'すでに引き落とし済みの内容は変更できません',
        '変更したカード情報は、次回請求（翌月）から適用されます'
      ]
    },
    {
      anchorId: 'guide-card-kyukai',
      title: '休会について',
      bullets: [
        '休会は月額2,000円（税込2,200円）',
        '1ヶ月から3ヶ月まで選択できます。最大3ヶ月です'
      ],
      cautionNotice: {
        badge: 'ご注意ください',
        headline: '休会中に退会することは原則できません',
        exampleTitle: '例）3月に休会していた場合',
        timeline: [
          { month: '3月', label: '休会中', status: '退会不可', statusTone: 'no' },
          { month: '4月', label: '通常会員に復帰', status: '復帰月', statusTone: 'mid' },
          { month: '4月', label: '4月中に退会手続き', status: '退会可', statusTone: 'yes' }
        ],
        summary: '最短で退会できるのは、4月末日になります'
      },
      feeGroups: [
        {
          badge: '休会中も全額負担',
          badgeTone: 'full',
          items: [
            { label: '契約ロッカー', exTax: '1,500円', incTax: '1,650円' },
            { label: 'ヨガマットロッカー', exTax: '1,000円', incTax: '1,100円' }
          ]
        },
        {
          badge: '半額負担',
          badgeTone: 'half',
          items: [
            { label: '安心サポート', exTax: '500円', incTax: '550円' },
            { label: '安心サポートVIP', exTax: '750円', incTax: '825円' }
          ]
        }
      ],
      footnote: 'その他のオプションサービスの料金は発生いたしません',
      feeExample: {
        title: '負担金額の参考例',
        subtitle: '安心サポートVIP＋ヨガマットロッカーを契約中の場合',
        lines: [
          { label: '休会費用', amount: '2,200円' },
          { label: '安心サポートVIP（半額）', amount: '412円' },
          { label: 'ヨガマットロッカー（全額）', amount: '1,100円' }
        ],
        total: '3,712円',
        note: '契約中のオプションにより金額は異なります'
      }
    }
  ],
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
      actionBanner: {
        linkKey: 'appJoin',
        label: 'APPインストール'
      },
      steps: [
        {
          num: '1',
          title: '「アプリで入会」をタップ',
          image: 'images/app-guide/11-corporate-app-top.png',
          cardStyle: true
        },
        {
          num: '2',
          title: 'プロモーションコードを入力',
          text: 'プロモーションコードを入力して「次へ」をタップ\nその後は通常入会同様の手順でございます',
          closing: '顔写真の撮影時\n必ずカメラの権限を許可してください',
          closingHtml: '顔写真の撮影時<br>必ず<span class="guide-perm-em">カメラの権限を許可</span>してください',
          closingPermission: ['camera'],
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
      stepsAnchorId: 'guide-rejoin-steps',
      noticeAnchorId: 'guide-rejoin-notice',
      anchorNav: [
        { id: 'guide-rejoin-steps', label: '手順' },
        { id: 'guide-rejoin-notice', label: 'ご入会について' }
      ],
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
  stepsAnchorId: 'guide-option-steps',
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
  infoPanels: [
    {
      anchorId: 'guide-option-cancel',
      title: '解約について',
      bullets: [
        '各種オプションは当月末解約となります',
        '解約手続きをした後も月末まではサービスをご利用いただけます'
      ]
    },
    {
      anchorId: 'guide-option-join',
      title: 'ご入会時のオプションについて',
      linkKey: 'storeHp',
      linkLabel: '詳細はHPキャンペーンページをご確認ください'
    }
  ],
  optionPricing: {
    anchorId: 'guide-option-pricing',
    title: '各種オプション料金一覧',
    items: [
      { label: 'グループピラティスリフォーマー', exTax: '3,000円', incTax: '3,300円' },
      { label: '体組成計', exTax: '500円', incTax: '550円' },
      { label: 'JOYFITオンラインレッスン', exTax: '1,000円', incTax: '1,100円', note: 'JOYFITアプリのご登録が必要です' },
      { label: '安心サポートVIP', exTax: '750円', incTax: '825円', linkKey: 'anshinSupport', linkLabel: '安心サポートの詳細はこちら' },
      { label: '安心サポート', exTax: '500円', incTax: '550円', linkKey: 'anshinSupport', linkLabel: '安心サポートの詳細はこちら' },
      { label: 'ホットスタジオ', exTax: '1,000円', incTax: '1,100円' },
      { label: '水素水', exTax: '1,000円', incTax: '1,080円' },
      { label: 'プライベートロッカー', exTax: '1,500円', incTax: '1,650円' },
      { label: 'ヨガマットロッカー', exTax: '1,000円', incTax: '1,100円' },
      { label: 'タンニング', exTax: '5,000円', incTax: '5,500円', tag: '男性会員様限定' },
      { label: 'セルフエステ', exTax: '3,000円', incTax: '3,300円', tag: '女性会員様限定' },
      { label: 'レンタルタオル', exTax: '1,500円', incTax: '1,650円' },
      { label: 'レンタルマット', exTax: '1,000円', incTax: '1,100円' },
      { label: '水素水&プロテイン（6杯/1日）', exTax: '3,000円', incTax: '3,240円' }
    ]
  }
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
  introAnchorId: 'guide-unpaid-intro',
  stepsAnchorId: 'guide-unpaid-flow',
  altPathAnchorId: 'guide-unpaid-alt',
  anchorNav: [
    { id: 'guide-unpaid-intro', label: 'ご案内' },
    { id: 'guide-unpaid-flow', label: '支払い手順' },
    { id: 'guide-unpaid-alt', label: '別の手順' }
  ],
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
