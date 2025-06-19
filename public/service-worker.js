self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('precache-v1').then((cache) => {
            return cache.addAll([
                '/videos/test.mp4',

            ])
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cached) => {
            return cached || fetch(event.request)
        })
    )
})