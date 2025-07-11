export const lifeData = [
  {
    tag: 'green-park',
    id: 'central-park-area', // 中央公園
    className: 'park-point-1',
    image: [
      new URL('@/assets/img/life/park/central_01.webp', import.meta.url).href,
      new URL('@/assets/img/life/park/central_02.webp', import.meta.url).href,
      new URL('@/assets/img/life/park/central_03.webp', import.meta.url).href,
    ],
    txt: '中央公園',
  },
  {
    tag: 'green-park',
    id: 'sanfenpu-entrance', // 三分埔公園
    className: 'park-point-2',
    image:
      [new URL('@/assets/img/life/park/sanfenpu_01.webp', import.meta.url).href,
      new URL('@/assets/img/life/park/sanfenpu_02.webp', import.meta.url).href,
      new URL('@/assets/img/life/park/sanfenpu_03.webp', import.meta.url).href
      ],
    txt: '三分埔公園',
  },
  {
    tag: 'green-park',
    id: 'shanxi-north-zone', // 山西公園
    className: 'park-point-3',
    image: [new URL('@/assets/img/life/park/shanxi_01.webp', import.meta.url).href],
    txt: '山西公園',
  },
  {
    tag: 'green-park',
    id: 'shuinan-east-gate', // 水湳生態公園
    className: 'park-point-4',
    image: [new URL('@/assets/img/life/park/shuinan_01.webp', import.meta.url).href,
    new URL('@/assets/img/life/park/shuinan_02.webp', import.meta.url).href,
    new URL('@/assets/img/life/park/shuinan_03.webp', import.meta.url).href
    ],
    txt: '水湳生態公園',
  },

  //優質學區
  {
    tag: 'cultural-district',
    id: 'chongde', // 崇德國中.
    className: 'cultural-point-1',
    image: new URL('@/assets/img/life/school_district/chongde_01.webp', import.meta.url).href,
    txt: '崇德國中',
  },
  {
    tag: 'cultural-district',
    id: 'princeton', // 普霖斯頓小學.
    className: 'cultural-point-2',
    image: new URL('@/assets/img/life/school_district/princeton_01.webp', import.meta.url).href,
    txt: '普霖斯頓小學',
  },
  {
    tag: 'cultural-district',
    id: 'wenxin', // 文心國小.
    className: 'cultural-point-3',
    image: new URL('@/assets/img/life/school_district/wenxin_01.webp', import.meta.url).href,
    txt: '文心國小',
  },
  {
    tag: 'cultural-district',
    id: 'xiaoming', // 曉明女中.
    className: 'cultural-point-4',
    image: new URL('@/assets/img/life/school_district/xiaoming_01.webp', import.meta.url).href,
    txt: '曉明女中',
  },
  {
    tag: 'cultural-district',
    id: 'cmu', // 中國醫藥大學.
    className: 'cultural-point-5',
    image: [new URL('@/assets/img/life/school_district/cmu_1.webp', import.meta.url).href,
    new URL('@/assets/img/life/school_district/cmu_2.webp', import.meta.url).href,
    ],
    txt: '中國醫藥大學',
  },
  //繁華商圈
  {
    tag: 'shopping-district',
    id: 'beiping-market', // 北平黃昏市場
    className: 'shopping-point-1',
    image: new URL('@/assets/img/life/shopping_district/beiping_market_01.webp', import.meta.url).href,
    txt: '北平黃昏市場',
  },
  {
    tag: 'shopping-district',
    id: 'chongde-market', //崇德路商圈
    className: 'shopping-point-2',
    image: new URL('@/assets/img/life/shopping_district/chongde_market.webp', import.meta.url).href,
    txt: '崇德路商圈',
  },
  {
    tag: 'shopping-district',
    id: 'kfc-wenxin', //肯德基文心店
    className: 'shopping-point-3',
    image: new URL('@/assets/img/life/shopping_district/kfc_wenxin_01.webp', import.meta.url).href,
    txt: '肯德基文心店',
  },
  {
    tag: 'shopping-district',
    id: 'shangjing', // 上景興市場
    className: 'shopping-point-4',
    image: new URL('@/assets/img/life/shopping_district/shangjing_01.webp', import.meta.url).href,
    txt: '上景興市場',
  },
  {
    tag: 'shopping-district',
    id: 'tianjin', //天津路商圈
    className: 'shopping-point-5',
    image: new URL('@/assets/img/life/shopping_district/tianjin_01.webp', import.meta.url).href,
    txt: '天津路商圈',
  },
  {
    tag: 'shopping-district',
    id: 'home-shopping', //中清路家樂福
    className: 'shopping-point-6',
    image: [new URL('@/assets/img/life/shopping_district/home_shopping_1.webp', import.meta.url).href,
    new URL('@/assets/img/life/shopping_district/home_shopping_2.webp', import.meta.url).href,
    ],
    txt: '中清路家樂福',
  },

  //交通樞紐
  {
    tag: 'rapid-transit',
    id: 'zhonggang', // 國一中港交流道
    className: 'transit-point-1',
    image: new URL('@/assets/img/life/traffic/highway1_zhonggang_01.webp', import.meta.url).href,
    txt: '國一中港交流道',
  },
  {
    tag: 'rapid-transit',
    id: 'mrt-wenxin-chongde', // 捷運文心崇德站
    className: 'transit-point-2',
    image: new URL('@/assets/img/life/traffic/mrt_wenxin_chongde_01.webp', import.meta.url).href,
    txt: '捷運文心崇德站',
  },
  {
    tag: 'rapid-transit',
    id: 'road74-chongde', // 台74崇德匝道
    className: 'transit-point-3',
    image: new URL('@/assets/img/life/traffic/road74_chongde_01.webp', import.meta.url).href,
    txt: '台74崇德匝道',
  },
  {
    tag: 'rapid-transit',
    id: 'shuinan-road', // 水湳轉運中心
    className: 'transit-point-4',
    image: new URL('@/assets/img/life/traffic/highway1_zhonggang_01.webp', import.meta.url).href,
    txt: '水湳轉運中心',
  },

  {
    tag: 'rapid-transit',
    id: 'g07', // 中清文心站
    className: 'transit-point-5',
    image: [new URL('@/assets/img/life/traffic/g07_1.webp', import.meta.url).href,
    new URL('@/assets/img/life/traffic/g07_2.webp', import.meta.url).href,
    new URL('@/assets/img/life/traffic/g07_3.webp', import.meta.url).href,
    ],
    txt: '中清文心站',
  },

  //地標新篇
  {
    tag: 'major-construction',
    id: 'convention', //國際會展中心
    className: 'major-point-1',
    image: new URL('@/assets/img/life/major_construction/convention_01.webp', import.meta.url).href,
    txt: '國際會展中心',
  },
  {
    tag: 'major-construction',
    id: 'dome', //24台中巨蛋
    className: 'major-point-2',
    image: new URL('@/assets/img/life/major_construction/dome_01.webp', import.meta.url).href,
    txt: '台中巨蛋',
  },
  {
    tag: 'major-construction',
    id: 'green', //44綠美圖
    className: 'major-point-3',
    image: new URL('@/assets/img/life/major_construction/green_01.webp', import.meta.url).href,
    txt: '台中綠美圖',
  },
  {
    tag: 'major-construction',
    id: 'hanshin', //41漢神購物廣場
    className: 'major-point-4',
    image: new URL('@/assets/img/life/major_construction/hanshin_01.webp', import.meta.url).href,
    txt: '漢神購物中心',
  },
  {
    tag: 'major-construction',
    id: 'popmedia', //47流行影音中心
    className: 'major-point-5',
    image: new URL('@/assets/img/life/major_construction/popmedia_01.webp', import.meta.url).href,
    txt: '中台灣電影中心',
  },
  {
    tag: 'major-construction',
    id: 'stadium', //34洲際棒球場
    className: 'major-point-6',
    image: [new URL('@/assets/img/life/major_construction/stadium_01.webp', import.meta.url).href,
    new URL('@/assets/img/life/major_construction/stadium_02.webp', import.meta.url).href,
    new URL('@/assets/img/life/major_construction/stadium_03.webp', import.meta.url).href,
    ],
    txt: '洲際棒球場',
  },

]
