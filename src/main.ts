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
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
