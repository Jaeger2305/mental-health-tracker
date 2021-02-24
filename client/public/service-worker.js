"use strict";

// Copied lovingly from https://github.com/tretapey/svelte-pwa/blob/master/public/service-worker.js

// Update cache names any time any of the cached files change.
const CACHE_NAME = "static-cache-v1";

// Add list of files to cache here.
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/global.css",
  "/build/bundle.css",
  "/build/bundle.js",
  "/favicon.png",
];

self.addEventListener("install", (evt) => {
  console.log("[ServiceWorker] Install");

  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Pre-caching offline page");
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.match(event.request, { ignoreSearch: true }))
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
