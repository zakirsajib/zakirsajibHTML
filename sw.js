const version = "1.0";
const cacheName = 'zakirsajib-${version}';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/wp-content/themes/zsonline/assets/images/bg-hero-1.webp',
        '/wp-content/themes/zsonline/assets/images/bg-milestones-1.webp',
        '/wp-content/themes/zsonline/assets/images/bg-references-1.webp',
        '/wp-includes/js/jquery/jquery-1.12.4.js',
        '/wp-content/themes/zsonline/assets/plugins/lazysizes/ls.bgset.min.js',
        '/wp-content/themes/zsonline/assets/plugins/lazysizes/lazysizes.min.js',
        '/wp-content/themes/zsonline/assets/plugins/smoothscroll.js',
        '/wp-content/themes/zsonline/assets/plugins/bootstrap/js/bootstrap.min.js',
        '/wp-content/themes/zsonline/static/dist/js/app.min.js',
        '/wp-content/themes/zsonline/assets/critical.css',
        '/wp-content/themes/zsonline/assets/noncritical.css',
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});