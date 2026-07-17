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
 *   07-member-search.png        … APPログイン設定
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
 *   13-online-lesson-service-list.png … オンラインレッスン・サービス一覧
 *   13-online-lesson-login.png        … オンラインレッスン・ログイン
 *   13-online-lesson-email.png        … オンラインレッスン・メール認証
 *   13-online-lesson-top.png          … オンラインレッスン・トップ
 *   13-online-lesson-genre.png        … オンラインレッスン・ジャンル選択
 *   13-online-lesson-watch.png        … オンラインレッスン・視聴する
 *
 * images/dokodemo-joy/  … （テキスト版に移行済み・画像は未使用）
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
      title: 'APPログイン設定',
      linkKey: 'memberSearch',
      linkLabel: 'APPログインはこちらをタップ',
      instructionBox: {
        lead: 'APP入会時と同じ情報を入力',
        fields: ['お名前', '生年月日', '電話番号'],
        action: '検索'
      },
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
      text: 'JOYFITアプリが起動しトップ画面へ移動します',
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
  notice: '友だち追加後メッセージをお願い致します\n※見逃してしまう可能性がある為',
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
  infoPanels: [
    {
      anchorId: 'guide-card-credit',
      title: 'クレジットカード変更について',
      bullets: [
        '次回請求から適用です'
      ]
    },
    {
      anchorId: 'guide-card-kyukai',
      title: '休会について',
      bullets: [
        '休会は月額2,000円（税込2,200円）',
        '1ヶ月から3ヶ月まで選択できます',
        '最大3ヶ月です'
      ],
      cautionNotice: {
        headline: '休会月に退会することはできません',
        exampleTitle: '例）3月に休会していた場合',
        timeline: [
          { month: '3月', label: '休会中', status: '退会不可', statusTone: 'no' },
          { month: '4月', label: '通常会員に復帰', status: '復帰月', statusTone: 'mid' },
          { month: '4月', label: '4月中に退会手続き', status: '退会可能', statusTone: 'yes' }
        ],
        summary: '最短で退会できるのは4月末日になります'
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

var GUIDE_CAMERA_PERMISSION = {
  closing: '顔写真の撮影時\n必ずカメラの権限を許可してください',
  closingHtml: '顔写真の撮影時<br>必ず<span class="guide-perm-em">カメラの権限を許可</span>してください',
  closingPermission: ['camera']
};

var APP_CORPORATE_SECTION = {
  noticeHtml: '<span class="guide-notice-u">12桁のプロモーションコードが必須です</span><br>企業様ごとにコードが異なるため事前にご所属の企業様へお問い合わせください',
  noticeProminent: true,
  blocks: [
    {
      blockTitle: 'JOYFIT Appインストール',
      actionBanner: {
        linkKey: 'appJoin',
        label: 'こちらからAPPインストール'
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
          textHtml: 'プロモーションコードを入力して「次へ」をタップ<br>その後は通常入会同様の手順でございます<br>必要事項を入力しご入会ください',
          closing: GUIDE_CAMERA_PERMISSION.closing,
          closingHtml: GUIDE_CAMERA_PERMISSION.closingHtml,
          closingPermission: GUIDE_CAMERA_PERMISSION.closingPermission,
          afterClosing: {
            panelLink: {
              panel: 'app',
              label: 'こちらからAPP登録へ進む',
              bannerStyle: 'action'
            }
          },
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
      leadPanel: {
        panelStyle: 'unified',
        introHtml: '<span class="guide-notice-u">過去にJOYFIT会員だった方は</span><br>新規会員として再入会いただきます<br>店舗での再入会手続きは出来かねます',
        campaignNote: 'キャンペーン内容は随時変更しますので<br>必ず店舗HPでご確認ください',
        bannerCaption: '上記バナーをタップしてご確認ください',
        linkKey: 'storeHp',
        linkStyle: 'campaign-banner',
        campaignBanner: {
          main: 'キャンペーン実施中！',
          sub: 'こちらをチェック！'
        }
      },
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
      afterSteps: {
        promoNoteHtml: 'プロモーションコードの入力は<br>法人限定のため該当しない場合はスキップしてください',
        closing: GUIDE_CAMERA_PERMISSION.closing,
        closingHtml: GUIDE_CAMERA_PERMISSION.closingHtml,
        closingPermission: GUIDE_CAMERA_PERMISSION.closingPermission
      },
      icCardPanel: {
        title: '会員証（ICカード）について',
        bodyHtml: '前の会員証をお持ちの方は再登録いたします<span class="guide-iccard-free">『無料』</span><br><br>捨ててしまった方も再発行が可能です<br>再発行1,000円（税込1,100円）<br><br>詳細は店舗スタッフにお声がけください'
      }
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
      titleHtml: '「オプション追加」または<br>「オプションの解約」をタップ',
      image: 'images/app-guide/09-option-menu.png'
    }
  ],
  infoPanels: [
    {
      anchorId: 'guide-option-cancel',
      title: 'オプションの解約について',
      noteHtml: '各種オプションは当月末解約となります<br>解約後も月末までご利用できます',
    }
  ],
  optionPricing: {
    anchorId: 'guide-option-pricing',
    title: 'オプション料金一覧表',
    items: [
      { label: 'ピラティスリフォーマー', exTax: '3,000円', incTax: '3,300円', image: 'images/options/pilates-reformer.png' },
      { label: '体組成計', exTax: '500円', incTax: '550円', image: 'images/options/body-composition.png' },
      { label: 'JOYFITオンラインレッスン', exTax: '1,000円', incTax: '1,100円', image: 'images/options/online-lesson.png', panelLink: { panel: 'onlineLesson', label: 'オンラインレッスンの詳細はこちら' } },
      { label: '安心サポートVIP', exTax: '750円', incTax: '825円', linkKey: 'anshinSupport', linkLabel: '安心サポートの詳細はこちら', image: 'images/options/anshin-support-vip.png' },
      { label: '安心サポート', exTax: '500円', incTax: '550円', image: 'images/options/anshin-support-vip.png' },
      { label: 'ホットスタジオ', exTax: '1,000円', incTax: '1,100円', image: 'images/options/hot-studio.png' },
      { label: '水素水', exTax: '1,000円', incTax: '1,080円', image: 'images/options/hydrogen-water.png' },
      { label: 'プライベートロッカー', exTax: '1,500円', incTax: '1,650円', image: 'images/options/private-locker.png' },
      { label: 'ヨガマットロッカー', exTax: '1,000円', incTax: '1,100円', image: 'images/options/yoga-mat-locker.png' },
      { label: 'タンニング', exTax: '5,000円', incTax: '5,500円', tag: '男性会員様限定', image: 'images/options/tanning.png' },
      { label: 'セルフエステ', exTax: '3,000円', incTax: '3,300円', tag: '女性会員様限定', image: 'images/options/self-esthe.png' },
      { label: 'レンタルタオル', exTax: '1,500円', incTax: '1,650円', image: 'images/options/rental-towel.png' },
      { label: 'レンタルマット', exTax: '1,000円', incTax: '1,100円', image: 'images/options/rental-mat.png' },
      { label: '水素水&プロテイン', exTax: '3,000円', incTax: '3,240円', note: '6杯/1日', image: 'images/options/hydrogen-water.png' }
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
  introPanelStyle: 'featured',
  introBullets: [
    '未納金がある間は施設をご利用いただけません',
    '月会費を2ヶ月滞納されますと規約退会になります',
    'APP入金後は再度施設をご利用いただけます'
  ],
  cardUpdateNote: '支払い後クレジットカード情報は更新されないため別途再登録が必要です',
  cardUpdateLink: {
    panel: 'card',
    stepId: 'guide-card-step-4',
    label: 'こちらからクレジットカード変更',
    bannerStyle: 'action'
  },
  flowchart: 'images/app-guide/12-unpaid-flowchart.png',
  flowTitle: 'JOYFITアプリお支払い手順',
  flowItems: [
    { title: 'JOYFIT APPプッシュ通知をタップ' },
    { title: '表示されている未納バナーをタップ' },
    { title: 'お支払い内容を確認し「次へ」' },
    { title: 'カード情報を入力し「確認」で完了' }
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

var APP_ONLINE_LESSON_GUIDE = {
  introPanelStyle: 'featured',
  introBullets: [
    'JOYFITオンラインレッスンはオプション契約とAPP登録が必要です',
    'アプリ右上「サービス」からOnline Lessonサイトへ進みます'
  ],
  steps: [
    {
      num: '1',
      title: 'ホーム画面右上の「サービス」をタップ',
      image: 'images/app-guide/01-home.png',
      cardStyle: true
    },
    {
      num: '2',
      title: '「オンラインレッスン」をタップ',
      image: 'images/app-guide/13-online-lesson-service-list.png',
      cardStyle: true
    },
    {
      num: '3',
      title: 'メールアドレス・パスワードでログイン',
      text: '初回は新規登録から進みます',
      image: 'images/app-guide/13-online-lesson-login.png',
      cardStyle: true
    },
    {
      num: '4',
      title: 'メール内URLにアクセスして登録完了',
      text: '【JOYFIT Online Lesson】確認メールが届きます',
      image: 'images/app-guide/13-online-lesson-email.png',
      cardStyle: true
    },
    {
      num: '5',
      title: 'オンラインレッスン登録完了',
      text: 'おすすめは「動画レッスン」をタップ',
      image: 'images/app-guide/13-online-lesson-top.png',
      cardStyle: true
    },
    {
      num: '6',
      title: '好きなジャンルを選択',
      text: 'ジャンルを選ぶとアーカイブが閲覧可能です',
      image: 'images/app-guide/13-online-lesson-genre.png',
      cardStyle: true
    },
    {
      num: '7',
      title: '「視聴する」をタップ',
      text: '視聴するをタップしてご覧ください',
      image: 'images/app-guide/13-online-lesson-watch.png',
      cardStyle: true
    }
  ]
};

var APP_DOKODEMO_JOY_GUIDE = {
  blocks: [
    {
      title: 'どこでもJOYとは',
      paragraphs: [
        'どの店舗で入会しても、全国のJOYFIT・JOYFIT24・JOYFIT YOGA・JOYFIT+をご利用いただけます。',
        '利用開始には登録店舗での簡単な手続きが必要です（無料）。'
      ],
      bullets: [
        '会社帰り・出張先・帰省先など、どこからでも利用可能',
        '店舗ごとのプログラムや24時間ジムも利用できる店舗があります',
        '一部店舗は利用不可、または別途料金がかかる場合があります。事前に利用店舗へご確認ください'
      ],
      notes: [
        'タイム会員・ジムLITE会員は対象外です',
        '既存会員：登録店舗で手続き／新規会員：入会手続きの際に手続き'
      ]
    },
    {
      title: '他店舗の利用料金',
      paragraphs: [
        '登録店舗のブランドによって、他店舗の利用料金が異なります。'
      ],
      feeRows: [
        { from: 'JOYFIT / JOYFIT24', toJoy: '無料', toYoga: '1日3,300円（税込）※女性限定', toPlus: '不可' },
        { from: 'JOYFIT YOGA', toJoy: '無料', toYoga: '無料', toPlus: '不可' },
        { from: 'JOYFIT+', toJoy: '無料', toYoga: '無料 ※女性限定', toPlus: '契約による（登録店舗へ確認）' }
      ],
      feeHeaders: {
        from: '登録店舗',
        toJoy: 'JOYFIT / JOYFIT24',
        toYoga: 'JOYFIT YOGA',
        toPlus: 'JOYFIT+'
      }
    },
    {
      title: '有料エリアのご利用',
      paragraphs: [
        '一部施設の有料エリアは、ICカードリーダーにタッチすると都度料金が発生します。料金は翌月の月会費と一緒に引き落とされます。'
      ],
      priceList: [
        { name: '女性専用エリア', price: '1日550円（税込）※女性限定' },
        { name: 'JOYFIT YOGA（女性専用ヨガスタジオ）', price: '1日3,300円（税込）※女性限定' },
        { name: 'ホットスタジオ', price: '1日550円（税込）' },
        { name: '特別有料エリア（J+など）', price: '1日3,300円（税込）' }
      ],
      notes: [
        '「どこでもJOY 有料エリア OK」のアイコンがある施設が対象です',
        '利用開始日の23:59までが1日の期限です',
        'オリコ・りそな銀行・FD引き落としの会員様は都度課金をご利用できません',
        'オープンから半年未満の店舗は、どこでもJOY自体が使えない場合があります'
      ]
    },
    {
      title: '移籍の条件',
      paragraphs: [
        '登録店舗より他店の利用が多い場合、登録店舗が移籍されることがあります。',
        '入会後満6ヶ月未満は移籍対象外です。調査期間は累計2ヶ月以上（1ヶ月単位）です。'
      ],
      conditions: [
        {
          num: '1',
          text: 'いちばん多く利用した店舗が、登録店舗ではない'
        },
        {
          num: '2',
          text: 'いちばん多く利用した他店の利用が、月5回以上'
        },
        {
          num: '3',
          text: 'その他店の利用時間が、全体の51%以上'
        }
      ],
      paragraphsAfter: [
        '上記3つをすべて満たした会員様が移籍対象です。JOYFITからハガキまたはDMでお知らせします。'
      ],
      notes: [
        '移籍時のオプション：あんしんサポートは移籍先で自動継続／それ以外のオプションは自動解除'
      ]
    }
  ]
};
