var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  	'/',
	'/index.html',
	'/wp-content/themes/zsonline/assets/images/bg-hero-1.webp',
	'/wp-content/themes/zsonline/assets/images/bg-milestones-1.webp',
	'/wp-content/themes/zsonline/assets/images/bg-references-1.webp'
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