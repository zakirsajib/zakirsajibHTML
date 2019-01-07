self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('your-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/manifest.json',
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
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.url == 'https://zakirsajib.netlify.com/') {
    console.info('responding to zakir-sajib fetch with Service Worker! ');
    event.respondWith(fetch(event.request).catch(function(e) {
      let out = {Gold: 1, Size: -1, Actions: []};
      return new Response(JSON.stringify(out));
    }));
    return;
  }

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});