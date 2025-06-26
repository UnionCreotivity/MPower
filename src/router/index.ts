import { createRouter, createWebHashHistory } from 'vue-router'

//首頁
import HomeView from '@/views/home/HomeView.vue'

//地段環境
import MetroView from '@/views/metro/MetroView.vue'
import ArialPhotoView from '@/views/metro/aerialPhoto/ArialPhotoView.vue'

//建築規劃
import MaterView from '@/views/master/MaterView.vue'
import TestView from '@/views/master/test/TestView.vue'

//建築工藝
import MethodView from '@/views/method/MethodView.vue'
import MethodMenuView from '@/views/method/methodMenu/MethodMenuView.vue' //結構工法

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
      ],
    },
    {
      path: '/master',
      component: MaterView,
      children: [
        {
          path: 'test',
          name: 'test',
          component: TestView,
        },
      ],
    },
     {
      path: '/method',
      component: MethodView,
      children: [
        {
          path: 'methodMenu',
          name: 'methodMenu',
          component: MethodMenuView,
        },
       
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
