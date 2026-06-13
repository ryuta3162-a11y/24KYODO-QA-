/**
 * JOYFIT24経堂 Q&A マスターデータ
 * 追記・修正はこのファイルだけ編集すれば index.html に反映されます
 * 外部リンクは linkKey（site-links.js のキー）で指定します
 */
var QA_MASTER = {
  sections: [
    {
      id: 'app',
      number: '01',
      title: 'JOYFITAPP登録方法',
      visualGuide: 'appRegistration',
      items: [],
      links: []
    },
    {
      id: 'crowd',
      number: '02',
      title: 'APP来館人数確認機能',
      visualGuide: 'crowdStatus',
      items: [],
      links: []
    },
    {
      id: 'pt',
      number: '03',
      title: 'パーソナルトレーニングについて',
      visualGuide: 'ptLine',
      items: [],
      links: []
    },
    {
      id: 'card',
      number: '04',
      title: 'クレジットカード変更・休会方法',
      visualGuide: 'creditCard',
      items: [],
      links: []
    },
    {
      id: 'option',
      number: '05',
      title: 'オプション追加・解約方法',
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
          q: '法人会員はキャンペーン併用可能ですか？',
          a: 'キャンペーンと法人会員の併用はできません\nキャンペーンで入会を希望される場合は\n通常会員として入会をお願い致します'
        }
      ],
      links: []
    },
    {
      id: 'rejoin',
      number: '07',
      title: '再入会について',
      visualGuide: 'rejoin',
      items: [],
      links: []
    },
    {
      id: 'campaign',
      number: '08',
      title: '学割・移籍・友達紹介の申請',
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
