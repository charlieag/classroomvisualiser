self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // Just pass through all requests (prevents offline errors for static files)
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
