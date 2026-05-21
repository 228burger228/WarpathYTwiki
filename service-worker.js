// Service Worker для PWA — кэширование и офлайн поддержка
const CACHE_NAME = 'warpath-v1';
const OFFLINE_URL = '/offline.html';

// Файлы для кэширования при установке
const CACHE_URLS = [
  '/',
  '/index.html',
  '/style.css',
  '/nav.js',
  '/theme-manager.js',
  '/i18n.js',
  '/data.js',
  '/officers-data.js',
  '/faq.html',
  '/faq.js',
  '/faq-data.js',
  '/wiki.html',
  '/unit-builder.html',
  '/army-builder.html',
  '/tier-list.html',
  '/daily.html',
  '/community.html',
  '/youtubers.html',
  '/leaderboard.html',
  '/feedback.html',
  '/ai-chat.html',
  '/admin.html',
  '/offline.html'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app shell');
      return cache.addAll(CACHE_URLS).catch((err) => {
        console.warn('[SW] Some files failed to cache:', err);
        // Кэшируем только доступные файлы
        return Promise.all(
          CACHE_URLS.map(url => 
            cache.add(url).catch(() => console.warn(`[SW] Failed to cache: ${url}`))
          )
        );
      });
    })
  );
  self.skipWaiting();
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Перехват запросов
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Пропускаем запросы к внешним сервисам
  if (url.origin !== location.origin) {
    return;
  }

  // Стратегия: Cache first, fallback to network
  event.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        // Обновляем кэш в фоне
        fetch(request).then((freshResponse) => {
          if (freshResponse && freshResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, freshResponse);
            });
          }
        }).catch(() => {
          // Сетевой запрос не удался, используем кэш
        });
        return response;
      }

      // Нет в кэше, пытаемся получить из сети
      return fetch(request)
        .then((response) => {
          // Кэшируем успешные ответы
          if (response && response.status === 200 && request.method === 'GET') {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Офлайн и нет в кэше
          if (request.destination === 'document') {
            return caches.match(OFFLINE_URL);
          }
          return new Response('Offline', { status: 503 });
        });
    })
  );
});

// Обработка сообщений от клиента
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
