// sw.js
// Service Worker Minimal pour Hylst Reader

const CACHE_NAME = 'hylst-reader-v23';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/variables.css?v=1.1.21',
    './css/base.css?v=1.1.21',
    './css/layout.css?v=1.1.21',
    './css/components.css?v=1.1.21',
    './css/modals.css?v=1.1.21',
    './css/music.css?v=1.1.21',
    './css/reader.css?v=1.1.21',
    './css/responsive.css?v=1.1.21',
    './js/db.js?v=1.1.21',
    './js/importAPI.js?v=1.1.21',
    './js/app.jsx?v=1.1.21'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            })
        ))
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Only intercept basic GET requests
    if (event.request.method !== 'GET') return;

    // Ignore Blob URLs (IndexDB objects) and Chrome Extension URLs
    if (event.request.url.startsWith('blob:') || event.request.url.startsWith('chrome-extension:')) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Serve from cache if available
            if (cachedResponse) {
                return cachedResponse;
            }

            // Otherwise, fetch from network and cache for next time
            return fetch(event.request).then((response) => {
                // Check if valid response
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    if (event.request.url.includes('unpkg.com') || event.request.url.includes('cdn.jsdelivr.net') || event.request.url.includes('cdnjs.cloudflare.com')) {
                        // Allow cors requests for CDN caching
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                        return response;
                    }
                    return response;
                }

                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            }).catch(() => {
                // Return offline fallback if network fails
                if (event.request.url.indexOf('.html') > -1) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
