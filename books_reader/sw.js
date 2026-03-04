// sw.js
// Service Worker Minimal pour Hylst Reader

const CACHE_NAME = 'hylst-reader-v21';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/variables.css?v=1.1.20',
    './css/base.css?v=1.1.20',
    './css/layout.css?v=1.1.20',
    './css/components.css?v=1.1.20',
    './css/modals.css?v=1.1.20',
    './css/music.css?v=1.1.20',
    './css/reader.css?v=1.1.20',
    './css/responsive.css?v=1.1.20',
    './js/db.js?v=1.1.20',
    './js/importAPI.js?v=1.1.20',
    './js/app.jsx?v=1.1.20',
    // CDNs (Optional: caching external dependencies if offline happens immediately)
    'https://unpkg.com/react@18/umd/react.production.min.js',
    'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
    'https://unpkg.com/@babel/standalone/babel.min.js',
    'https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/epub.js/0.3.88/epub.min.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Georgia&display=swap'
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
