'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3b2a52fd0eb3fb030d9608c434541712",
"assets/AssetManifest.bin.json": "ac465e8f815f6f5ed1ef4bd70ccd4171",
"assets/AssetManifest.json": "9442fc052b6808da4003b16b13fd3283",
"assets/assets/alur/1.png": "fc1a83a7264e916bf80d55487c3b10ee",
"assets/assets/alur/10.png": "b6ffad342d91a852433dce97e77c6934",
"assets/assets/alur/11.png": "9b600c8f1596ba1b2f72a61680b92e29",
"assets/assets/alur/12.png": "0e08f145757e122a376fae2dc279b7ae",
"assets/assets/alur/13.png": "232bc7d6550f485ec96ffa0c0a2c8dc1",
"assets/assets/alur/14.png": "0c1fc6bbdbeba53231ac2b8ce44b3a5c",
"assets/assets/alur/15.png": "b01c2d18882941848dd868a00e347969",
"assets/assets/alur/16.png": "f5aee7246534f1dd86ee0158564980dd",
"assets/assets/alur/17.png": "c6e9a2f6c322e9381f0e5067bec829e9",
"assets/assets/alur/18.png": "edca4783b4a7c7445398e03b66f75ad5",
"assets/assets/alur/19.png": "efbc9b8d946bf7d21429cb4eb91023b0",
"assets/assets/alur/2.png": "71b5e295e2776d709012d52ce7946129",
"assets/assets/alur/20.png": "8d721ad607e509269c3a5db601f41a91",
"assets/assets/alur/21.png": "1c96943437fc016d8605960769a6dd7c",
"assets/assets/alur/22.png": "03e5e4f72f17dd729d1f1e56289330df",
"assets/assets/alur/23.png": "2dd33ac9fbed7167afdd9d7dd3e2e4e4",
"assets/assets/alur/24.png": "e3ebafca4e48c688facdc04929e50b1f",
"assets/assets/alur/25.png": "abd508ad967751228c1d0bc341256080",
"assets/assets/alur/26.png": "d29647d4408376fc1ad416eeb98e5e20",
"assets/assets/alur/27.png": "7ce1278c9ef3353e4ad26ea6b79ec204",
"assets/assets/alur/28.png": "17e4641cf2689d9eb4d525a787d89083",
"assets/assets/alur/29.png": "9c2eeac330ab032c1d5e2a38d94699fd",
"assets/assets/alur/3.png": "55a6a7d29587ff664dc973eb48aed7bf",
"assets/assets/alur/30.png": "33d27757fd2615e301653d92dce0ac67",
"assets/assets/alur/31.png": "712b51978d25b543f5b66e535fe5e0b4",
"assets/assets/alur/32.png": "ecd4e02e65cd516c426aeb1f62624c20",
"assets/assets/alur/4.png": "e20d01355c2629042dd22b4b92c45aae",
"assets/assets/alur/5.png": "5be689e1621a34b7fecd6337d34f507d",
"assets/assets/alur/6.png": "63f97c6d567a634e6cad54624b736590",
"assets/assets/alur/7.png": "fc99e967c1a5c26f95e2097fb029a893",
"assets/assets/alur/8.png": "d1c0adc5d8bb35a47f752137c19c1faa",
"assets/assets/alur/9.png": "9394542660aad40e8bbc0e616d26dc2e",
"assets/assets/fonts/NotoSans-Bold.ttf": "28c191ce33ca36e0f75106491846de68",
"assets/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/assets/form/1.png": "4b728534a69add2ecc922066dfdf63e5",
"assets/assets/form/7.png": "814496a3d3216cb6ab97695bb235f347",
"assets/FontManifest.json": "21f67364ed330952edd89471192ce356",
"assets/fonts/MaterialIcons-Regular.otf": "c8c00f8f41bb54bf029f2eccb583e6bf",
"assets/NOTICES": "3a415e2c027e4dbf0886bc23560681c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "12776dd095140aa433a1a5805f35a08d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fc0df2d79720ec02e88650aa76213270",
"/": "fc0df2d79720ec02e88650aa76213270",
"main.dart.js": "2e44818cf7fdfe8cf8c4f9c4540f4183",
"manifest.json": "2350f1ef67dab4841c4cf8a60e950c93",
"version.json": "e0ab29c7dc3b313df29ce7eff82a9bab"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
