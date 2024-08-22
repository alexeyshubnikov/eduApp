'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7b48892c8330fd09b9ec033e59618dce",
"version.json": "7a21e3c11ad7ab98bf9fc624ad806585",
"index.html": "8df8fd12ce828e964fdc6aaa7658da3b",
"/": "8df8fd12ce828e964fdc6aaa7658da3b",
"main.dart.js": "22b4853bbc508b9cd3c1f0a8ba2c4157",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
"assets/AssetManifest.json": "ac4b4ad2ff0e7732deefb6a1840f5304",
"assets/NOTICES": "6d00d5ca9b0f9de4aeda459f4a11e9f2",
"assets/FontManifest.json": "0447b1c3f67c95b530b136a985e08de3",
"assets/AssetManifest.bin.json": "7c23428441100e09369ce811fa28a7bd",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "94902c7a8dd9fbdaf37dac3c6d504a1b",
"assets/fonts/MaterialIcons-Regular.otf": "9778aaebbe4d74583f53d9352b011aa8",
"assets/assets/mock_data/mock_strategies_shorts.json": "30413ce522f50a12c43aa392eca9d366",
"assets/assets/mock_data/mock_registered_functions.json": "c65331754eab6b73ae1d14bb9b5d12b3",
"assets/assets/mock_data/components_catalogue.json": "bb1b681391e60d6330a922eee638acc1",
"assets/assets/mock_data/mock_strategies.json": "8e455cfcc688f942c0ddbf5a8bcfa871",
"assets/assets/mock_data/mock_assets.json": "7975b5de9b7ac7e34c592ce2388212d2",
"assets/assets/icons/search.svg": "2c828c927097e02e58bcde4bd8036438",
"assets/assets/icons/background.svg": "64bd3da5c925fe236c71185c3573f2b7",
"assets/assets/icons/assistant_unselected.svg": "dd3a0bd14e8c8576712af349ae7e9c22",
"assets/assets/icons/backtest_icon.svg": "b8ef0abf5fc2bf4fad8087bb6531d73f",
"assets/assets/icons/status_offline.png": "fdcb1c6fa1cd9ede13a038073fe915bc",
"assets/assets/icons/profile_unselected.svg": "a80cecb7801a4d44c5c70f2da3209b36",
"assets/assets/icons/settings.png": "5d0d69d4d85db081d7224b571736c28d",
"assets/assets/icons/back_arrow.svg": "62a60e8675a6d69802c648f4a834e719",
"assets/assets/icons/right_arrow.svg": "beb118002735ec129556dabdebcd23e2",
"assets/assets/icons/edit_icon.svg": "88253f187720ca0f69ff718f663270a6",
"assets/assets/icons/left_arrow.svg": "2dc8a18142793bb55f0a7f77e42991c7",
"assets/assets/icons/formula-fx-icon.svg": "168955d4076a633e21be85d9789560bd",
"assets/assets/icons/contest_unselected.svg": "526b313a6f3c1ebc9bac9f4833004787",
"assets/assets/icons/settings.svg": "0ac54cb8befcc8c25a19d9786ead8830",
"assets/assets/icons/strategies_unselected.svg": "68eb029c3a3ced1931d3adf33ee2ed19",
"assets/assets/icons/components_icon.svg": "8add1de05581aeaae4003f2b679eb380",
"assets/assets/icons/pnl_chart.svg": "ecdf22d40d20934426d2cbaffadc7363",
"assets/assets/icons/assistant_selected.svg": "8d9388a44e2119098f1eb381eefe9002",
"assets/assets/icons/risk.svg": "cf9b3b72a6f2eef4f09b434f230c4e97",
"assets/assets/icons/separator.svg": "306ebf8648946415fa356366303d42d4",
"assets/assets/icons/candlestick.svg": "4d7d3c6edf8c1b8b3553af8c5163f7e3",
"assets/assets/icons/status_live.svg": "dbaa1a61663d15d21edae9485278eab6",
"assets/assets/icons/edit.svg": "4fdb46c7ac58690f11183a05890e5255",
"assets/assets/icons/BTC.svg": "c29ac9d6592b53ec190f726d2bfba4a7",
"assets/assets/icons/rules_icon.svg": "a60c549d587e041faeff597f1564c30c",
"assets/assets/icons/contest_selected.svg": "36465fbad6becbccd688a8452c827084",
"assets/assets/icons/status_live.png": "4d51b5bb8365d12f802e64db9ed69132",
"assets/assets/icons/risk_assess.svg": "874225b8ac27581624a50ef84ac36fc2",
"assets/assets/icons/strategies_selected.svg": "86cbc65c2091000688612aee53370932",
"assets/assets/icons/pnl_chart.jpg": "a0858b1f2445f42cf1e5051cfd2009c5",
"assets/assets/icons/profile_selected.svg": "cfc50dfaf2b428131b8dda99f8adb3d5",
"assets/assets/icons/favorite_star.svg": "49612e1b8a63cddcb284f5b4486882a2",
"assets/assets/icons/help-circle.svg": "7b7490b4ec88cef506f38bd5458f6209",
"assets/assets/fonts/Satoshi-Bold.otf": "4a6fdcfc68ad464e8a9811e4edcacf00",
"assets/assets/fonts/Satoshi-Italic.otf": "e12f5b2bf97310399d4ab6f8919b67b0",
"assets/assets/fonts/Satoshi-Black.otf": "22d9e9fdd8728dfa00bb0f49124ce5a7",
"assets/assets/fonts/Satoshi-Regular.otf": "177a4dda04b52dedbd966942e932c5dc",
"assets/assets/fonts/Satoshi-BoldItalic.otf": "7fcee65089c5d8703104aac893cf3b66",
"assets/assets/fonts/Satoshi-Light.otf": "d1d1eaba7a325545089fa9d773459211",
"assets/assets/fonts/Satoshi-LightItalic.otf": "0f712df4c1cc0862127955e4277b533e",
"assets/assets/fonts/Satoshi-BlackItalic.otf": "6a497defaeb091055a4de4f20aefad0d",
"assets/assets/fonts/Satoshi-MediumItalic.otf": "d65b71e1365c0b1e07a7a2f3de0ebfc5",
"assets/assets/fonts/Satoshi-Medium.otf": "378def5c1f4df7eb6554a88608893391",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
