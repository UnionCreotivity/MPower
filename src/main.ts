import '@/assets/scss/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 放這裡👇
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => {
                console.log('Service Worker 註冊成功 ✅', reg);
            })
            .catch(err => {
                console.error('Service Worker 註冊失敗 ❌', err);
            });
    });
}