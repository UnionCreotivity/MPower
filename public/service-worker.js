const CACHE_NAME = 'precache-v1'
const PRECACHE_MANIFEST_URL = 'precache-manifest.json'

// 動態快取擴展名白名單（圖片、影片）
const DYNAMIC_CACHE_EXTENSIONS = /\.(png|jpg|jpeg|webp|svg|avif|gif|bmp|mp4)$/i

self.addEventListener('install', (event) => {


    // 安裝事件超時避免卡住
    const timeout = new Promise((resolve) => setTimeout(resolve, 10000))

    const precache = fetch(PRECACHE_MANIFEST_URL)
        .then((res) => {
            if (!res.ok) throw new Error(`無法取得 ${PRECACHE_MANIFEST_URL} (${res.status})`)
            return res.json()
        })
        .then((files) =>
            caches.open(CACHE_NAME).then((cache) =>
                cache.addAll(files).then(() => {
                    // 通知所有客戶端快取完成
                    self.clients.matchAll().then((clients) => {
                        clients.forEach((client) => {
                            client.postMessage({ type: 'PRECACHE_COMPLETE' })
                        })
                    })
                })
            )
        )
        .catch((err) => console.error('❌ 快取清單讀取失敗:', err))

    event.waitUntil(Promise.race([precache, timeout]))
})

self.addEventListener('fetch', (event) => {
    const request = event.request
    const url = new URL(request.url)

    // 只處理 GET 請求
    if (request.method !== 'GET') return

    if (DYNAMIC_CACHE_EXTENSIONS.test(url.pathname)) {
        // 動態快取圖片和影片
        event.respondWith(
            caches.match(request).then((cached) => {
                if (cached) return cached

                return fetch(request)
                    .then((response) => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response
                        }
                        const responseClone = response.clone()
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(request, responseClone)
                        })
                        return response
                    })
                    .catch(() => new Response('', { status: 503, statusText: 'Service Unavailable' }))
            })
        )
    } else {
        // 其他請求先從快取拿，拿不到再網路抓
        event.respondWith(
            caches.match(request).then((cached) => cached || fetch(request).catch(() => {
                return new Response('', { status: 503, statusText: 'Service Unavailable' })
            }))
        )
    }
})

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log(`🗑️ 刪除舊快取: ${key}`)
                        return caches.delete(key)
                    }
                    return Promise.resolve()
                })
            )
        )
    )
})
