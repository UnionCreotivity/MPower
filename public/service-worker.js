const CACHE_NAME = 'precache-v1'

self.addEventListener('install', (event) => {
    if (location.hostname === 'localhost') {
        console.warn('⚠️ 開發環境，不執行快取')
        // 保證 install 事件能正確完成
        event.waitUntil(Promise.resolve())
        return
    }

    event.waitUntil(
        fetch('precache-manifest.json')
            .then((res) => {
                if (!res.ok) throw new Error(`❌ 無法取得 precache-manifest.json (${res.status})`)
                return res.json()
            })
            .then((files) =>
                caches.open(CACHE_NAME).then((cache) => cache.addAll(files))
            )
            .catch((err) => {
                console.error('❌ 快取清單讀取失敗:', err)
            })
    )
})

self.addEventListener('fetch', (event) => {


    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) {
                // console.log('✅ 來自快取:', event.request.url)
                return cached
            }
            return fetch(event.request)
                .then((res) => {

                    return res
                })
                .catch((err) => {
                    console.error('❌ 請求失敗:', event.request.url, err)
                    // 失敗時回傳一個空白 Response，避免錯誤
                    return new Response('', { status: 503, statusText: 'Service Unavailable' })
                })
        })
    )
})

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key)
                    }
                    return Promise.resolve() // 確保每個分支都有 Promise
                })
            )
        )
    )
})
