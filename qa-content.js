/**
 * JOYFIT24経堂 Q&A マスターデータ
 * 追記・修正はこのファイルだけ編集すれば index.html に反映されます
 * 外部リンクは linkKey（site-links.js のキー）で指定します
 */
var QA_MASTER = {
  updatedAt: '2026-06-30',
  sections: [
    {
      id: 'app',
      number: '01',
      title: 'アプリ登録方法について',
      visualGuide: 'appRegistration',
      items: [],
      links: []
    },
    {
      id: 'crowd',
      number: '02',
      title: '混雑状況の確認',
      visualGuide: 'crowdStatus',
      items: [],
      links: []
    },
    {
      id: 'pt',
      number: '03',
      title: 'パーソナルトレーニングの予約方法',
      visualGuide: 'ptLine',
      items: [],
      links: []
    },
    {
      id: 'card',
      number: '04',
      title: 'クレジットカードの変更・休会',
      visualGuide: 'creditCard',
      items: [],
      links: []
    },
    {
      id: 'option',
      number: '05',
      title: 'オプションの追加・解約について',
      visualGuide: 'optionMenu',
      items: [],
      links: []
    },
    {
      id: 'corporate',
      number: '06',
      title: '法人入会について',
      visualGuide: 'corporateJoin',
      items: [
        {
          q: 'キャンペーンは法人会員も対象ですか？',
          a: 'JOYFIT24経堂キャンペーンでのご入会は\n法人会員様は対象外となります'
        }
      ],
      links: []
    },
    {
      id: 'rejoin',
      number: '07',
      title: '再入会について',
      visualGuide: 'rejoin',
      items: [
        {
          q: '過去に会員だった方の再入会手続きは？',
          a: '上の図解「再入会手続き」のとおり、アプリの登録を解除してログアウトしてください\nログアウト後は再度「アプリで入会」から手続きできます\nプロモーションコードはスキップし、経堂の通常キャンペーンでご入会ください\n契約前に必ず店舗HPをご確認ください',
          linkLabel: 'JOYFIT24 経堂 HP',
          linkKey: 'storeHp'
        }
      ],
      links: []
    },
    {
      id: 'campaign',
      number: '08',
      title: '学割・移籍・紹介の申請について',
      visualGuide: 'campaignApply',
      items: [],
      links: []
    },
    {
      id: 'unpaid',
      number: '09',
      title: '未納金の支払いについて',
      visualGuide: 'unpaidPayment',
      items: [],
      links: []
    }
  ]
};
