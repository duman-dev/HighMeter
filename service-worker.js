const CACHE_NAME = 'bac-tracker-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Service Worker kurulumu
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Service Worker aktivasyonu
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Network first, then cache stratejisi
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Başarılı response'u cache'e kaydet
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });
        
        return response;
      })
      .catch(() => {
        // Network başarısız - cache'den al
        return caches.match(event.request)
          .then(response => {
            return response || caches.match('./index.html');
          });
      })
  );
});

// Push notifications için hazırlık
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'BAC Reminder',
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%230f172a" width="192" height="192"/><circle cx="96" cy="96" r="70" fill="%2338bdf8"/><text x="96" y="110" font-size="60" font-weight="bold" text-anchor="middle" fill="%230f172a" font-family="Arial">B</text></svg>',
    badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect fill="%2338bdf8" width="96" height="96"/><text x="48" y="60" font-size="40" font-weight="bold" text-anchor="middle" fill="%23ffffff" font-family="Arial">%</text></svg>',
    tag: 'bac-notification',
    requireInteraction: false
  };
  
  event.waitUntil(
    self.registration.showNotification('BAC Tracker', options)
  );
});
