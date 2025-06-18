import { createRouter, createWebHashHistory } from 'vue-router'

//首頁
import HomeView from '@/views/home/HomeView.vue'

//地段環境
import MetroView from '@/views/metro/MetroView.vue'
import ArialPhotoView from '@/views/metro/aerialPhoto/ArialPhotoView.vue'

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
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
