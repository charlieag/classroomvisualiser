const CACHE_NAME = 'classroom-visualiser-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  // add your PNGs/icons here
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key!==CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', evt => {
  if(evt.request.method !== 'GET') return;
  evt.respondWith(
    caches.match(evt.request).then(cached => cached || fetch(evt.request))
  );
});
