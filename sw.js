// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var dataCacheName = 'zakirSajib-v1';
var cacheName = 'zakirSajibPWA-final-1';
var filesToCache = [
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
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});