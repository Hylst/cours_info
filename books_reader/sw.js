// sw.js
// Service Worker Minimal pour Hylst Reader

const CACHE_NAME = 'hylst-reader-v29';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/variables.css?v=1.1.29',
    './css/base.css?v=1.1.29',
    './css/layout.css?v=1.1.29',
    './css/components.css?v=1.1.29',
    './css/modals.css?v=1.1.29',
    './css/music.css?v=1.1.29',
    './css/reader.css?v=1.1.29',
    './css/responsive.css?v=1.1.29',
    './js/db.js?v=1.1.29',
    './js/importAPI.js?v=1.1.29',
    './js/app.jsx?v=1.1.29'
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

    // NETWORK FIRST STRATEGY (solves the issue of old content sticking around)
    event.respondWith(
        fetch(event.request).then((networkResponse) => {
            // Cache the new response if valid
            if (networkResponse && networkResponse.status === 200) {
                if (networkResponse.type === 'basic' || event.request.url.includes('cdn.jsdelivr.net') || event.request.url.includes('unpkg.com')) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
                }
            }
            return networkResponse;
        }).catch(() => {
            // Fallback to cache if offline
            return caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                // Offline fallback for HTML
                if (event.request.url.includes('.html') || event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
