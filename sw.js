// Poket offline cache. Bump VERSION when you upload new files.
const VERSION='poket-v8';
const FILES=['./','index.html','app.js','dash.js','modules.js','tutorial.js','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
// Deleting old caches also removes any error pages a previous version stored.
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
const keep=(req,res)=>{if(res&&res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put(req,cp))}return res};
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    // Network first (revalidating the HTTP cache) so updates arrive on the next open. Only successful responses are cached;
    // on a network failure or an error status, fall back to the last good copy.
    e.respondWith(fetch(req,{cache:'no-cache'}).then(r=>r.ok?keep(req,r):caches.match(req).then(c=>c||(req.mode==='navigate'?caches.match('index.html'):null)).then(c=>c||r))
      .catch(()=>caches.match(req).then(r=>r||caches.match('index.html'))));
  }else if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(caches.match(req).then(r=>r||fetch(req).then(res=>keep(req,res))));
  }
});
