self.addEventListener("Install", (event)=>{
    console.log("[Service Worker] Installed", event)
    self.skipWaiting();
})

self.addEventListener("Activate", (event)=>{
    console.log("[Service Worker] Activated", event)
});

self.addEventListener("fetch",(event)=>{
    console.log("[Service Worker] Fetching:", event)
});