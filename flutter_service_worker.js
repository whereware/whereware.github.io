'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6d85168016f4814f4228f583538a0b19",
"index.html": "b5653ee5e97e82d8a647e1a6c56c792f",
"/": "b5653ee5e97e82d8a647e1a6c56c792f",
"main.dart.js": "8465c1298a41215dbe66862c8a6cf830",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d609a914638855f6a3ed19e3efb7b6c2",
".git/config": "c0c6c879c78c8ff5d54c6aa37d7f64cc",
".git/objects/59/9c10f4ccd96fc024f7a97f965353c96a6f6f3d": "75336d1eadc307cfcfd7e19420772538",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/d9/513cab8f87245d11d1767a2927fe56a20e1ffd": "310d5c6f2bd23b9fd4a44aaaa29e2170",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c9/a9540d92a7478464725a7662e628880fb89ccb": "d7852dedd08ab68fe3b79b4ee0b79c15",
".git/objects/fd/49f95ae11a47dc781449958b40193334a79fa1": "0db204954424c18743256c5e53b3f30c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/1f/a69a666c7254ac68dac6efe490a918b2be75da": "759592d203a509d8cce8899fcd9b0f88",
".git/objects/74/0269b3f1fab2096188dd014418d1d2dd7f9f04": "fe84ee93b3cee094f8c616c2759b1742",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/e30d4e04c2fbac6efbc918a71a012836931809": "43b811ec7b2fb18d0ccd72003291f42b",
".git/objects/ba/e30837274c757d61fa95fe8d056c34dfc81b56": "9355b2283891b4e9ed1417d9fce98319",
".git/objects/b6/df12b536c7606f85d173b25c65d4d55d11e794": "e6036438ffe93fe0d742dd9f5487921e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/9a95ce94fd286223cc375cebe0f60b6ca6a421": "754673aeee91ec4abd20deb14a834ab4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/14/9bf30bf7bdef76329add27050a78ae6dcda904": "f0f80338756b2b7acf45a21d62c0ef9b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "3c030604ef181a690e453f651cf090a3",
".git/logs/refs/heads/main": "00275681d49687b071e67998e938b725",
".git/logs/refs/remotes/origin/main": "47a66ac3308de4bd6e8732d73cdd4809",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "eea6faf2f23948916a851c85173122a5",
".git/refs/remotes/origin/main": "eea6faf2f23948916a851c85173122a5",
".git/index": "72740c24d642cca52c5b4b319537e051",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "ced50175170d6f274de6934592c4cf1b",
"assets/AssetManifest.json": "a807719d7bed0942eab9bf0e6ce52c0e",
"assets/NOTICES": "8e0691cb7ef1685ab44742f2c1eca830",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/background2.png": "1ebd53b0412a2c9a3f9a1cf9811c27bf",
"assets/assets/images/login_facebook.png": "74107afad82450171e876490517522b8",
"assets/assets/images/password_eye.png": "350d7c5c4890d4b3f9ee5d4f5242e285",
"assets/assets/images/2.0x/background2.png": "8dc80db06db37403e862cf3bb97493b9",
"assets/assets/images/2.0x/login_facebook.png": "11663163587c9ad2d4f221bc5ad6e3d9",
"assets/assets/images/2.0x/password_eye.png": "82967de2d6678d20f4326ae181681c0d",
"assets/assets/images/2.0x/login_line.png": "d4a4066b347dd8088d5b291cce322986",
"assets/assets/images/2.0x/background.png": "560c314a5be8390774b5f76ce3104a41",
"assets/assets/images/2.0x/logo.png": "c203b0b5a77fa143e0e0e2ee1db25731",
"assets/assets/images/2.0x/signup_img.png": "bdc5e035365559b65f0421890c11c89b",
"assets/assets/images/2.0x/login_google.png": "80f39533be96d343020f7c1e96bd77e3",
"assets/assets/images/2.0x/back.png": "9cee55ef4011da66bee4ffe96eb1a921",
"assets/assets/images/login_line.png": "23832a333348f2c3bff50b8db7590c0e",
"assets/assets/images/3.0x/background2.png": "7bfe4f00bdb444729322e94220dc50e6",
"assets/assets/images/3.0x/login_facebook.png": "98a7c64409f6797a095e375ce4f4fe96",
"assets/assets/images/3.0x/password_eye.png": "487bfc89c64a29efbc64ec5ecebae748",
"assets/assets/images/3.0x/login_line.png": "20bfb7f28d8af9047bdf32545a3d069f",
"assets/assets/images/3.0x/background.png": "a208af8a859094a02724a8a28b105168",
"assets/assets/images/3.0x/logo.png": "08e94a664bb6c0660fbd7b9b39271382",
"assets/assets/images/3.0x/signup_img.png": "9f67497e7563ca377c663fcad1003eb7",
"assets/assets/images/3.0x/login_google.png": "5e6f41644924ab5254b500390cca9fe6",
"assets/assets/images/3.0x/back.png": "36a827ef3d1bbeec48d1509524efcf52",
"assets/assets/images/background.png": "e4b39dc3421b152779f19672c04ce766",
"assets/assets/images/logo.png": "1fb98eeeafe4aacad31af5171abd129a",
"assets/assets/images/signup_img.png": "f9a77b43a2256e89653847b8f3c8d0a9",
"assets/assets/images/login_google.png": "e6f37424402685819632afcdabba2fce",
"assets/assets/images/back.png": "095a0ac8d2781151268964402fbdbbca",
"assets/assets/langs/zh-TW.json": "c52a0ef1575c04e8bde827ff581d921a",
"assets/assets/langs/en-US.json": "a7265fd73b74961184d5b6c2165af6eb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
