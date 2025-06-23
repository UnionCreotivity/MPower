const CACHE_NAME = 'precache-v1'
const PRECACHE_MANIFEST_URL = 'precache-manifest.json'

const DYNAMIC_CACHE_EXTENSIONS = /\.(png|jpg|jpeg|webp|svg|avif|gif|bmp|mp4)$/i

self.addEventListener('install', (event) => {
    const timeout = new Promise((resolve) => setTimeout(resolve, 10000))

    const precache = fetch(PRECACHE_MANIFEST_URL)
        .then(res => {
            if (!res.ok) throw new Error(`無法取得 ${PRECACHE_MANIFEST_URL} (${res.status})`)
            return res.json()
        })
        .then(files =>
            caches.open(CACHE_NAME).then(cache =>
                cache.addAll(files).then(() => {
                    self.clients.matchAll().then(clients => {
                        clients.forEach(client => {
                            client.postMessage({ type: 'PRECACHE_COMPLETE' })
                        })
                    })
                })
            )
        )
        .catch(err => console.error('❌ 快取清單讀取失敗:', err))

    event.waitUntil(Promise.race([precache, timeout]))
})

self.addEventListener('fetch', (event) => {
    const request = event.request
    const url = new URL(request.url)

    if (request.method !== 'GET') return

    if (DYNAMIC_CACHE_EXTENSIONS.test(url.pathname)) {
        event.respondWith(
            caches.match(request).then((cached) => {
                if (cached) return cached
                return fetch(request).then((response) => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response
                    }
                    const clone = response.clone()
                    caches.open(CACHE_NAME).then(cache => cache.put(request, clone))
                    return response
                }).catch(() => new Response('', { status: 503 }))
            })
        )
    } else {
        event.respondWith(
            caches.match(request).then((cached) => cached || fetch(request).catch(() => new Response('', { status: 503 })))
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
                })
            )
        )
    )
})

// ✅ 接收補充資源清單
self.addEventListener('message', (event) => {
    if (event.data?.type === 'CACHE_EXTRA_RESOURCES' && Array.isArray(event.data.urls)) {
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(event.data.urls).then(() => {
                console.log('📦 額外資源快取完成:', event.data.urls)
            }).catch(err => {
                console.error('❌ 額外資源快取失敗:', err)
            })
        })
    }
})
