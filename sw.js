const CACHE_NAME = 'visualiser-cache-v1';
const FILES_TO_CACHE = [
  '/',                // your index.html
  '/index.html',      // explicit HTML
  '/style.css',       // if you have a separate CSS file
  '/sw.js',           // service worker itself
  // add any other JS, images, or assets here
];

// Install event – cache everything
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate event – clean up old caches if needed
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event – serve from cache first, fallback to network
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request)
      .then(response => response || fetch(evt.request))
      .catch(() => caches.match('/index.html')) // fallback
  );
});
