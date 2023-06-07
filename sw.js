const CACHE_NAME = 'my-cache-v1';
let urlsToCache = [
  '/index.html',
  '/pokedex.json'
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
  let url = '/thumbnails/' + String(i).padStart(3, '0') + '.png';
  urlsToCache.push(url);
}

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    console.log('[Service Worker] Caching all: app shell and content');
    console.log(cache)
    await cache.addAll(urlsToCache);
  })());
});

self.addEventListener('fetch', (e) => {
  console.log(e)
  // Cache http and https only, skip unsupported chrome-extension:// and file://...
  if (!(
    e.request.url.startsWith('http:') || e.request.url.startsWith('https:')
  )) {
      return; 
  }

e.respondWith((async () => {
  const r = await caches.match(e.request);
  console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
  if (r) return r;
  const response = await fetch(e.request);
  const cache = await caches.open(CACHE_NAME);
  console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
  cache.put(e.request, response.clone());
  return response;
})());
});




