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
 *   11-reopen-app-settings.png    … 復会・サービス一覧→アプリ設定
 *   11-reopen-unregister.png      … 復会・アプリの登録を解除
 *   12-unpaid-flowchart.png       … 未納金支払いフロー（全体図）
 *   12-unpaid-app-only.png        … アプリ専用手続き・未納金のお支払い
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
  footnote: '予約やご案内の方法は、トレーナーLINEなどで承っております\nこちらは決済時の画面・ウェブ予約になります\n詳細は店舗スタッフもしくはトレーナーLINEにお問い合わせください',
  footnoteProminent: true
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
  notice: '【法人会員としてJOYFIT Appからご入会される方へ】\n入会には12桁のプロモーションコードが必要です\n企業様ごとにコードが異なるため、こちらではご案内ができかねます\n恐れ入りますが、ご所属の企業様へ直接お問い合わせください',
  noticeProminent: true,
  blocks: [
    {
      blockTitle: '法人入会方法です',
      steps: [
        {
          num: '1',
          title: '「アプリで入会」をタップ',
          image: 'images/app-guide/11-corporate-app-top.png'
        },
        {
          num: '2',
          title: 'プロモーションコードを入力',
          text: 'プロモーションコードを入力して「次へ」をタップ\nその後は通常入会同様の手順でございます',
          image: 'images/app-guide/11-corporate-promo-code.png'
        }
      ]
    },
    {
      blockTitle: '復会手続き',
      intro: '過去にJOYFIT会員だった方で、再度入会したい場合の手順',
      notice: '【復会手続き後のご入会について】\n上記方法でログアウトできたら再度アプリで入会になります\nそのままプロモーションコードはスキップして経堂で実施している通常のキャンペーンでご入会ください\n必ず契約前にHPをご確認ください',
      noticeProminent: true,
      noticeLinkKey: 'storeHp',
      noticeLinkLabel: 'https://joyfit.jp/kyodo/',
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
        }
      ]
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
  intro: '未納金がある間は施設をご利用いただけません\n月会費を2ヶ月滞納されますと規約退会になります\nアプリからお支払い頂ければ、再度施設をご利用いただけます',
  cardUpdateNote: 'クレジットカード情報は更新されないため、再登録が必要です',
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
      title: 'プッシュ通知',
      text: 'スマートフォンにJOYFITアプリからプッシュ通知が届きます'
    },
    {
      num: '2',
      title: 'アプリで未納バナーをタップ'
    },
    {
      num: '3',
      title: '表示されているお支払い内容を確認し「次へ」を押してください'
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
