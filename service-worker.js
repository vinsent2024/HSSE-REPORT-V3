const cacheName = 'HSSE-v1'; // Update cache name for new version
const staticCacheName = 'static-cache-v1'; // Cache for static assets
const dynamicCacheName = 'dynamic-cache-v1'; // Cache for dynamic content

const urlsToCache = [
  '/',
  'index.html',
  // Add more resources as needed
];

self.addEventListener('install', event => {
  // Cache static assets when installing the service worker
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Delete outdated caches when activating the service worker
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => cacheName !== staticCacheName && cacheName !== dynamicCacheName)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return caches.open(dynamicCacheName).then(cache => {
          return fetch(event.request).then(response => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
  );
});

// Listen for the 'beforeinstallprompt' event to handle the PWA install prompt
self.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  // Store the event so it can be triggered later.
  window.deferredPrompt = event;
  // Show the install prompt to the user in a custom way (e.g., a button)
  document.getElementById('installButton').style.display = 'block';
});

// Handle the install button click event to show the install prompt
document.getElementById('installButton').addEventListener('click', () => {
  const promptEvent = window.deferredPrompt;
  if (promptEvent) {
    promptEvent.prompt();
    promptEvent.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      window.deferredPrompt = null;
    });
  }
});
