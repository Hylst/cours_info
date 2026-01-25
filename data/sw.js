// Data Science Explorer Service Worker
// Version 1.0.0

const CACHE_NAME = 'ds-explorer-v1';
const STATIC_CACHE_NAME = 'ds-explorer-static-v1';
const DYNAMIC_CACHE_NAME = 'ds-explorer-dynamic-v1';

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  // Core pages
  '/introduction',
  '/fundamentals',
  '/machine-learning',
  '/glossary',
  '/offline.html'
];

// Resources to cache on demand
const CACHE_STRATEGIES = {
  // Cache first for static assets
  CACHE_FIRST: ['css', 'js', 'woff', 'woff2', 'ttf', 'eot', 'ico', 'png', 'jpg', 'jpeg', 'gif', 'svg'],
  // Network first for API calls and dynamic content
  NETWORK_FIRST: ['api', 'json'],
  // Stale while revalidate for HTML pages
  STALE_WHILE_REVALIDATE: ['html']
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }
  
  event.respondWith(handleRequest(request));
});

// Handle different types of requests with appropriate caching strategies
async function handleRequest(request) {
  const url = new URL(request.url);
  const extension = getFileExtension(url.pathname);
  
  try {
    // Determine caching strategy based on file type
    if (CACHE_STRATEGIES.CACHE_FIRST.includes(extension)) {
      return await cacheFirst(request);
    } else if (CACHE_STRATEGIES.NETWORK_FIRST.includes(extension)) {
      return await networkFirst(request);
    } else {
      return await staleWhileRevalidate(request);
    }
  } catch (error) {
    console.error('[SW] Request failed:', error);
    return await handleOffline(request);
  }
}

// Cache First Strategy - for static assets
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache first failed:', error);
    throw error;
  }
}

// Network First Strategy - for dynamic content
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Stale While Revalidate Strategy - for HTML pages
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        const cache = caches.open(DYNAMIC_CACHE_NAME);
        cache.then((c) => c.put(request, networkResponse.clone()));
      }
      return networkResponse;
    })
    .catch((error) => {
      console.log('[SW] Network request failed:', error);
      return cachedResponse;
    });
  
  return cachedResponse || fetchPromise;
}

// Handle offline scenarios
async function handleOffline(request) {
  const url = new URL(request.url);
  
  // For navigation requests, return offline page
  if (request.mode === 'navigate') {
    const offlineResponse = await caches.match('/offline.html');
    if (offlineResponse) {
      return offlineResponse;
    }
  }
  
  // For other requests, try to find a cached version
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Return a generic offline response
  return new Response(
    JSON.stringify({
      error: 'Offline',
      message: 'Cette ressource n\'est pas disponible hors ligne'
    }),
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}

// Utility function to get file extension
function getFileExtension(pathname) {
  const parts = pathname.split('.');
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : '';
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// Handle contact form sync
async function syncContactForm() {
  try {
    // Get pending form submissions from IndexedDB
    const pendingForms = await getPendingForms();
    
    for (const form of pendingForms) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form.data)
        });
        
        if (response.ok) {
          await removePendingForm(form.id);
          console.log('[SW] Form synced successfully:', form.id);
        }
      } catch (error) {
        console.error('[SW] Failed to sync form:', error);
      }
    }
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

// IndexedDB helpers (simplified)
async function getPendingForms() {
  // Implementation would use IndexedDB to store/retrieve pending forms
  return [];
}

async function removePendingForm(id) {
  // Implementation would remove form from IndexedDB
  console.log('[SW] Removing pending form:', id);
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');
  
  const options = {
    body: 'Nouveau contenu disponible sur Data Science Explorer!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explorer',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Fermer',
        icon: '/icons/xmark.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Data Science Explorer', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Handle messages from main thread
self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

console.log('[SW] Service worker script loaded');