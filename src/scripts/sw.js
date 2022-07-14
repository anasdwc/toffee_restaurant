import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker');

  // TODO: Caching App Shell Resources
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker...');

  // TODO: Delete Old Cache
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  // TODO: Add/get fetch request to/from caches
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
