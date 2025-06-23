import '@/assets/scss/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

// 🌀 loading 畫面 DOM
const loadingScreen = document.getElementById('loading-screen')
  const swUrl = `${import.meta.env.BASE_URL}service-worker.js`;
// ✅ 註冊 Service Worker
if ('serviceWorker' in navigator) {


  (async () => {
    try {
      const registration = await navigator.serviceWorker.register(swUrl)
      console.log('✅ Service Worker 註冊成功:', registration)

      await navigator.serviceWorker.ready
      console.log('✅ Service Worker 準備完成')

      // ✅ 註冊成功後才監聽訊息
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'PRECACHE_COMPLETE') {
          console.log('🚀 收到 PRECACHE_COMPLETE，移除 loading 畫面')

          if (loadingScreen) {
            loadingScreen.classList.add('fade-out')
            setTimeout(() => loadingScreen.remove(), 500)
          }
        }
      })

      // ⏳ 最多等 10 秒，避免 loading 永久卡住
      setTimeout(() => {
        if (loadingScreen) {
          console.warn('⏰ 超時自動移除 loading')
          loadingScreen.classList.add('fade-out')
          setTimeout(() => loadingScreen.remove(), 500)
        }
      }, 10000)
    } catch (err) {
      console.error('❌ 註冊 Service Worker 失敗:', err)
      if (loadingScreen) {
        loadingScreen.classList.add('fade-out')
        setTimeout(() => loadingScreen.remove(), 500)
      }
    }
  })()
} else {
  // ❗ 不支援 SW 的瀏覽器，也要移除 loading
  if (loadingScreen) {
    loadingScreen.classList.add('fade-out')
    setTimeout(() => loadingScreen.remove(), 500)
  }
}
