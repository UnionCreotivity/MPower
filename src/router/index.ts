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


// 建築工藝
import MethodView from '@/views/method/MethodView.vue'
import MethodIndexView from '@/views/method/MethodIndex/MethodIndexView.vue' // 結構首頁
import StructureView from '@/views/method/structure/StructureView.vue' // 結構工法
import WaterproofView from '@/views/method/waterproof/WaterproofView.vue' // 防水工法
import IntimateView from '@/views/method/intimate/IntimateView.vue' // 貼心工法

// 房貸試算
import CalculatorView from '@/views/calculator/CalculatorView.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorView,
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
    // {
    //   path: '/mansion',
    //   name: 'mansion',
    //   component: '',
    // },
    // {
    //   path: '/metier',
    //   name: 'metier',
    //   component: '',
    // },
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

    // 404 fallback
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
