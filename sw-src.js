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
  new RegExp("/app.js$"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "mapemo-js",
    maxAgeSeconds: 60 * 60 * 24 * 30,
    maxEntries: 1,
  })
);

workbox.routing.registerRoute(
  new RegExp("/favicon.png$"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "mapemo-favicon",
    maxAgeSeconds: 60 * 60 * 24 * 30,
    maxEntries: 1,
  })
);

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
        maxEntries: 2,
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

workbox.routing.registerRoute(
  new RegExp("^https://maps.gstatic.com/mapfiles/.*"),
  new workbox.strategies.CacheFirst({
    cacheName: "google-map-gstatic",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 10,
      }),
    ],
  })
);

workbox.precaching.precacheAndRoute([]);
