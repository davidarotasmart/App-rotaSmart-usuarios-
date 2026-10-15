/* RotaSmart Motoboy · service worker
   - Abre o app offline (index.html e arquivos próprios em cache).
   - Nunca guarda em cache as chamadas de login e banco (Firebase/Firestore) nem a previsão do tempo. */
const CACHE = 'rotasmart-v1';
const SHELL = ['./', './index.html', './firebase-config.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

const NEVER = ['firestore.googleapis.com', 'identitytoolkit.googleapis.com', 'securetoken.googleapis.com', 'firebaseinstallations.googleapis.com', 'api.open-meteo.com', 'geocoding-api.open-meteo.com', 'wa.me', 'www.google.com'];
const LIBS = ['www.gstatic.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (NEVER.includes(url.hostname)) return;

  // Páginas e arquivos do próprio site: tenta a internet primeiro, cai para o cache se estiver offline.
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req).then(res => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : undefined)))
    );
    return;
  }

  // Bibliotecas externas (Firebase SDK, Chart.js, jsPDF, sql.js, fontes): usa o cache e atualiza em segundo plano.
  if (LIBS.includes(url.hostname)) {
    e.respondWith(
      caches.match(req).then(cached => {
        const net = fetch(req).then(res => {
          if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
          return res;
        }).catch(() => cached);
        return cached || net;
      })
    );
  }
});
