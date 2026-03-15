
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cnsc-app').then(cache => {
      return cache.addAll(['index.html']);
    })
  );
});
