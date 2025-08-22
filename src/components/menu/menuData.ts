export const menuData = [
  {
    id: 'metro',
    zhName: '地段環境',
    enName: 'METRO',
    pathName: 'metro',
    jumpToChild: true, // 要跳子頁第一個
    list: [
      { id: 'aerialphoto', name: '空拍鳥瞰', link: 'aerialPhoto', tab: 0 },
      { id: 'aerialphoto', name: '軌道經濟', link: 'aerialPhoto', tab: 1 },
      { id: 'aerialphoto', name: '金軸核心', link: 'aerialPhoto', tab: 2 },
      { id: 'aerialphoto', name: '繁華商圈', link: 'aerialPhoto', tab: 3 },
      { id: 'aerialphoto', name: '門牌價值', link: 'aerialPhoto', tab: 4 },
      { id: 'life', name: '生活機能', link: 'life' },
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
        name: '建築團隊',
        link: '',

      },
      {
        id: 'buildling',
        name: '樓層規劃',
        link: 'buildling',

      },
    ],
  },
  {
    id: 'mansion',
    zhName: '貼心建材',
    enName: 'MANSION',
    pathName: 'mansion',
    jumpToChild: true, // 跳主頁面
    list: [
      {
        id: 'mansionIndex',
        name: '嚴選建材',
        link: 'mansionIndex',
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
        id: 'structure',
        name: '結構工法',
        link: 'structure',

      },
      {
        id: 'waterproof',
        name: '防水工法',
        link: 'waterproof',

      },
      {
        id: 'intimate',
        name: '貼心工法',
        link: 'intimate',

      },
    ],
  },
  {
    id: 'metier',
    zhName: '大熊建設',
    enName: 'METIER',
    pathName: 'metier',
    jumpToChild: true, // 要跳子頁第一個
    list: [
      {
        id: 'build-origin',
        name: '營建起家',
        link: 'build-origin',

      },

      {
        id: 'build-origin',
        name: '三心二藝',
        link: 'build-origin',

      },
      {
        id: 'portfolio',
        name: '歷年業績',
        link: '',

      },
      {
        id: 'after-service',
        name: '售後服務',
        link: '',
      },
      {
        id: '',
        name: '房貸試算',
        link: '',
      },
    ],
  },
]
