var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
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
    '/wp-content/themes/zsonline/static/dist/app.min.js',
    '/wp-content/themes/zsonline/assets/critical.css',
    '/wp-content/themes/zsonline/assets/noncritical.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});