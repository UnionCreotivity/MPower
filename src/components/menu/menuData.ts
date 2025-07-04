export const menuData = [
  {
    id: 'metro',
    zhName: '地段環境',
    enName: 'METRO',
    pathName: 'metro',
    jumpToChild: true, // 要跳子頁第一個
    list: [
      {
        id: 'aerial-photo',
        name: '空拍鳥瞰',
        link: 'aerialPhoto',
      },
      {
        id: '',
        name: '軌道經濟',
        link: 'comingsoon',
      },
      {
        id: 'life',
        name: '生活機能',
        link: 'life',
      },
      {
        id: '',
        name: '門牌價值',
        link: 'comingsoon',
      },
    ],
  },
  {
    id: 'master',
    zhName: '建築規劃',
    enName: 'MASTER',
    pathName: '',
    jumpToChild: true, // 要跳子頁第一個
    list: [
      {
        id: '',
        name: '樓層規劃',
        link: 'comingsoon',
      },
    ],
  },
  {
    id: 'mansion',
    zhName: '貼心建材',
    enName: 'MANSION',
    pathName: '',
    jumpToChild: true, // 要跳子頁第一個
    list: [
      {
        id: '',
        name: '嚴選建材',
        link: 'comingsoon',
      },
    ],
  },
  {
    id: 'method',
    zhName: '建築工藝',
    enName: 'METHOD',
    pathName: 'method',
    jumpToChild: false, // 跳主頁面
    list: [
      {
        id: '',
        name: '結構工法',
        link: 'structure',
      },
      {
        id: '',
        name: '防水工法',
        link: 'waterproof',
      },
      {
        id: '',
        name: '貼心工法',
        link: 'intimate',
      },
    ],
  },
  {
    id: 'metier',
    zhName: '大熊建設',
    enName: 'METIER',
    pathName: '',
    jumpToChild: true, // 要跳子頁第一個
    list: [
      {
        id: '',
        name: '營建起家',
        link: 'comingsoon',
      },
      {
        id: '',
        name: '建築團隊',
        link: 'comingsoon',
      },
      {
        id: '',
        name: '三心二藝',
        link: 'comingsoon',
      },
      {
        id: '',
        name: '歷年業績',
        link: 'comingsoon',
      },
      {
        id: '',
        name: '售後服務',
        link: 'comingsoon',
      },
    ],
  },
]
