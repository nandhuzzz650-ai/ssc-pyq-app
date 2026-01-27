const CACHE_NAME = 'ssc-online-v1';

// 1. Install Event: Just succeed immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// 2. Activate Event: Claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 3. Fetch Event: NETWORK ONLY (No caching)
// We simply pass the request through to the internet.
// If offline, it will show the standard browser "No Internet" dino.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});