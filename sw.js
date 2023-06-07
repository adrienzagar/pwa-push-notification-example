const CACHE_NAME = 'my-cache-v1';
let urlsToCache = [
  './index.html',
  './pokedex.json'
];

// Fonction utilitaire pour formater l'ID avec des zéros devant
function pad(num, size) {
  let padded = num.toString();
  while (padded.length < size) {
    padded = "0" + padded;
  }
  return padded;
}

for (let i = 1; i <= 10; i++) {
  let url = './thumbnails/' + String(i).padStart(3, '0') + '.png';
  urlsToCache.push(url);
}

console.log(urlsToCache)


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
      );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});