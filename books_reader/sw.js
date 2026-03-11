// sw.js - Service Worker Hylst Reader v1.1.29
// Stratégie: Network-First avec fallback cache (robuste)

const CACHE_NAME = 'hylst-reader-v34';

// Lors de l'activation, nettoyer les anciens caches
self.addEventListener('install', (event) => {
    // Pas de cache.addAll() bloquant - on laisse le réseau servir les assets
    // et on les met en cache au fil des requêtes dans le fetch handler
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[SW] Suppression de l\'ancien cache:', key);
                    return caches.delete(key);
                }
            })
        ))
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Ignorer les méthodes non-GET
    if (event.request.method !== 'GET') return;

    // Ignorer les URLs non-HTTP (blob:, chrome-extension:, etc.)
    const url = event.request.url;
    if (!url.startsWith('http')) return;

    // Ignorer les requêtes cross-origin (CDN, fonts, etc.) sauf jsdelivr/unpkg
    // pour les CDNs on fait un simple passthrough sans mise en cache SW
    const isCDN = url.includes('fonts.googleapis.com') ||
        url.includes('fonts.gstatic.com') ||
        url.includes('unpkg.com') ||
        url.includes('cdn.jsdelivr.net');

    // Pour les CDNs, simple passthrough
    if (isCDN) return;

    // NETWORK-FIRST pour tous les assets locaux
    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                // Mettre en cache si réponse valide
                if (networkResponse && networkResponse.ok && networkResponse.type === 'basic') {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                // Fallback sur le cache en cas d'erreur réseau
                return caches.match(event.request).then((cached) => {
                    if (cached) return cached;
                    // Pour les navigations HTML, retourner index.html
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                });
            })
    );
});
