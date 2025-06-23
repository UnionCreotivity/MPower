import '@/assets/scss/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

if ('serviceWorker' in navigator) {
  (async () => {
    try {
      const registration = await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}service-worker.js`)
      console.log('✅ Service Worker 註冊成功:', registration)

      // ✨ 等待 SW 完全接管控制頁面
      await navigator.serviceWorker.ready
      console.log('✅ Service Worker 準備完成')

      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data?.type === 'PRECACHE_COMPLETE') {
          console.log('🚀 收到 PRECACHE_COMPLETE，移除 loading 畫面')
          // 這邊你可以關閉 loading 畫面
        }
      })

    } catch (err) {
      console.error('❌ 註冊 Service Worker 失敗:', err)
    }
  })()
}