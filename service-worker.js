const CACHE_NAME = "campus-bite-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/home.html",
  "/signup.html",
  "/manifest.json",
  "/icons/icon.png",
  "/icons/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
