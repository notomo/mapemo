export const installServiceWorker = () => {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => {
      console.log("[Service Worker]: registered");
    })
    .catch(err => {
      console.log("[Service Worker]: failed to register with " + err);
    });
};
