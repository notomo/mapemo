self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.setConfig({
  debug: false,
});

workbox.core.setCacheNameDetails({
  prefix: "mapemo",
  precache: "precache",
  runtime: "runtime",
});

workbox.routing.registerRoute(
  new RegExp("^https://fonts.googleapis.com"),
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-googleapis",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  new RegExp("^https://fonts.gstatic.com"),
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-gstatic",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  })
);

workbox.precaching.precacheAndRoute([]);
