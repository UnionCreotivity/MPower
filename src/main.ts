import '@/assets/scss/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// if ('serviceWorker' in navigator) {
// //   navigator.serviceWorker.register('service-worker.js') 打包正式用
//     navigator.serviceWorker.register('/service-worker.js')
//     .then(() => {
//       console.log('✅ Service Worker 已註冊成功')
//     })
//     .catch((err) => {
//       console.error('❌ Service Worker 註冊失敗:', err)
//     })
// }

// service-worker.js 路徑一定要是網站根目錄，例如 https://你的網域/service-worker.js

// 若你網站部署在子目錄（例如 https://web-board.tw/MPower/），需要額外設定 scope

// 部署完，記得 F12 → Application → Service Workers 確認是否成功註冊

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => {
      console.log('✅ Service Worker 已註冊成功')
    })
    .catch((err) => {
      console.error('❌ Service Worker 註冊失敗:', err)
    })
}
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
