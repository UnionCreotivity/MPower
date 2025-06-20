import '@/assets/scss/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const swUrl = `${import.meta.env.BASE_URL}service-worker.js`



if ('serviceWorker' in navigator) {
  (async () => {
    try {
      const registration = await navigator.serviceWorker.register(swUrl)
      console.log('✅ SW 註冊成功:', registration)

      await navigator.serviceWorker.ready
      console.log('✅ SW 快取已準備完成')

      await new Promise(resolve => setTimeout(resolve, 300))
    } catch (err) {
      console.warn('⚠️ 無法註冊 SW：', err)
    }
  })()
}

  // 移除 loading 畫面
  const loadingScreen = document.getElementById('loading-screen')
  if (loadingScreen) {
    loadingScreen.classList.add('fade-out')
    setTimeout(() => {
      loadingScreen.remove()
    }, 500)
  }
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
