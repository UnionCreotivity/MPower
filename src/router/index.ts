import { createRouter, createWebHashHistory } from 'vue-router'

// 首頁
import HomeView from '@/views/home/HomeView.vue'

// 地段環境
import MetroView from '@/views/metro/MetroView.vue'
import ArialPhotoView from '@/views/metro/aerialPhoto/ArialPhotoView.vue'
import LifeView from '@/views/metro/life/LifeView.vue'

// 建築規劃
import MaterView from '@/views/master/MaterView.vue'
import BuildingView from '@/views/master/building/BuildingView.vue'

// 貼心建材MansionIndexView
import MansionView from '@/views/mansion/MansionView.vue'
import MansionIndexView from '@/views/mansion/MansionIndex/MansionIndexView.vue'
import TlkIndexView from '@/views/mansion/Tlk/TlkIndexView.vue' //tlk
import LockView from '@/views/mansion/lock/LockView.vue' //電子鎖
import LifegearView from '@/views/mansion/lifegear/LifegearView.vue' //全熱交換機
import DuravitIndexView from '@/views/mansion/duravit/DuravitIndexView.vue' //衛浴
import EhomeView from '@/views/mansion/ehome/EhomeView.vue' //e-home
import YkkView from '@/views/mansion/ykkap/YkkIndexView.vue' //ykk
import BossView from '@/views/mansion/boss/BossIndexView.vue' //Boss

// 建築工藝
import MethodView from '@/views/method/MethodView.vue'
import MethodIndexView from '@/views/method/MethodIndex/MethodIndexView.vue' // 結構首頁
import StructureView from '@/views/method/structure/StructureView.vue' // 結構工法
import WaterproofView from '@/views/method/waterproof/WaterproofView.vue' // 防水工法
import IntimateView from '@/views/method/intimate/IntimateView.vue' // 貼心工法

//大熊建設
import MetierView from '@/views/metier/MetierView.vue'
import BuildOriginView from '@/views/metier/buildOrigin/BuildOriginView.vue'// 營建起家
import BrandValueView from '@/views/metier/brandValue/BrandValueView.vue'// 三心二藝
import PortfolioView from '@/views/metier/portfolio/PortfolioView.vue'// 歷年業績
import AfterServiceView from '@/views/metier/afterService/AfterServiceView.vue'// 售後服務

// 房貸試算
import CalculatorView from '@/views/calculator/CalculatorView.vue'

import CalculatorIndexView from '@/views/calculator/CalculatorIndexView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/calculatorIndex',

      component: CalculatorIndexView,
      children: [
        {
          path: 'calculator',
          name: 'calculator',
          component: CalculatorView,
        },

      ],
    },
    {
      path: '/metro',
      component: MetroView,
      children: [
        {
          path: 'aerial-photo',
          name: 'aerialPhoto',
          component: ArialPhotoView,
        },
        {
          path: 'life',
          name: 'life',
          component: LifeView,
        },
      ],
    },
    {
      path: '/master',
      name: 'master',
      component: MaterView,
      children: [
        {
          path: 'buildling',
          name: 'buildling',
          component: BuildingView,
        },

      ],
    },
    {
      path: '/',

      component: MansionView,
      children: [
        {
          path: 'mansionIndex',
          name: 'mansionIndex',
          component: MansionIndexView,
        },
        {
          path: 'tlkIndex',
          name: 'tlkIndex',
          component: TlkIndexView,
        },
        {
          path: 'lockIndex',
          name: 'lockIndex',
          component: LockView,
        },
        {
          path: 'lifegearIndex',
          name: 'lifegearIndex',
          component: LifegearView,
        },
        {
          path: 'duravitIndex',
          name: 'duravitIndex',
          component: DuravitIndexView,
        },
        {
          path: 'ehomeIndex',
          name: 'ehomeIndex',
          component: EhomeView,
        },
        {
          path: 'ykkIndex',
          name: 'ykkIndex',
          component: YkkView,
        },
        {
          path: 'bossIndex',
          name: 'bossIndex',
          component: BossView,
        },
      ],
    },

    {
      path: '/method',
      component: MethodView,
      children: [
        {
          path: '',
          name: 'methodIndex',
          component: MethodIndexView,
        },
        {
          path: 'structure',
          name: 'structure',
          component: StructureView,
        },
        {
          path: 'waterproof',
          name: 'waterproof',
          component: WaterproofView,
        },
        {
          path: 'intimate',
          name: 'intimate',
          component: IntimateView,
        },
      ],
    },
    {
      path: '/metier',
      component: MetierView,
      children: [
        {
          path: 'build-origin',
          name: 'build-origin',
          component: BuildOriginView,
        },
        {
          path: 'build-value',
          name: 'build-value',
          component: BrandValueView,
        },
        {
          path: 'portfolio',
          name: 'portfolio',
          component: PortfolioView,
        },
        {
          path: 'after-service',
          name: 'after-service',
          component: AfterServiceView,
        },
      ],
    },
    // 404 fallback
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
