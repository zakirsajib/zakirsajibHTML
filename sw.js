var CACHE_NAME = 'zakirsajib-cache-v1';
var urlsToCache = [
  	'/',
	'/index.html',
	'/manifest.json',
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

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});