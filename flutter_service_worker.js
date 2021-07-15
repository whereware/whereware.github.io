'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6d85168016f4814f4228f583538a0b19",
"index.html": "c6e17a83b4d4d01a6c1da09e391ecc5c",
"/": "c6e17a83b4d4d01a6c1da09e391ecc5c",
"main.dart.js": "3d2576f75504f6783b66d3de86c9b18a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d609a914638855f6a3ed19e3efb7b6c2",
".git/config": "c0c6c879c78c8ff5d54c6aa37d7f64cc",
".git/objects/59/9c10f4ccd96fc024f7a97f965353c96a6f6f3d": "75336d1eadc307cfcfd7e19420772538",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/51/a9eef573b77c1f956d0a97d6cf3bd65cc7e861": "0856120430027b6ef9b954ee77ea2ab8",
".git/objects/0e/8ddf9ec4470e78a31ad4bc0d9ad108ea245528": "f79f6db2740aa136534c3b817594a87d",
".git/objects/05/b20023b6fa1395a328c260cd2ba14d47d1481c": "74e50b78fa7abc6b18f51083d7d68dc7",
".git/objects/9c/30cd734f552e708d2c22df2b99dd46bc85f18a": "673d8ec27cb6ab957695a8554c24ebf5",
".git/objects/d9/513cab8f87245d11d1767a2927fe56a20e1ffd": "310d5c6f2bd23b9fd4a44aaaa29e2170",
".git/objects/be/440a7a8e69fbb3b8c41c84e29612494a325bcb": "7be56f104b1ae8e600e3f60fae8b2836",
".git/objects/b4/8ec649f368219204c28ab33ff628e1f58d47a5": "378233743040e92eaaf76b117fd609c5",
".git/objects/bd/25cbaf789dea4386029edac8c16f9e30dec166": "cf84da9c031dfe830900ac553cdb1dd0",
".git/objects/bd/d8d5da31a2fa6048b9cb492febca54243d7351": "dcc85980b8ff740bd86fd1c936f4df2f",
".git/objects/ae/77f699eb8928bb3589ec69c2393918b70020e0": "b77a034a9ba6ae03348ba85a90f5ec5d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/285b72d0c5c98753d92e618eefb9a56ad28643": "525c765f105257843218c3b861087674",
".git/objects/c9/a9540d92a7478464725a7662e628880fb89ccb": "d7852dedd08ab68fe3b79b4ee0b79c15",
".git/objects/fd/49f95ae11a47dc781449958b40193334a79fa1": "0db204954424c18743256c5e53b3f30c",
".git/objects/f2/9e02223270d50061b3b65088be273ae18aa095": "0a425c469feefaab16f1153f2bd837d9",
".git/objects/f5/4fb605b152dac2e3982b95f53c8765e968ed60": "318e1abdf15f5e388242d5527105cc9f",
".git/objects/ca/86e90118ed80771eaa2f34bf6f0414f51dc77c": "544d2f8e6d44162f2190db477117ec40",
".git/objects/c8/8e6eb4e02075a2168573b2eda6ab49c7e74f52": "1d1b003b2dc2333b6a1b852e8544b290",
".git/objects/fb/41b2ad3c2e8d548f170f68f8a498587cf906ef": "6134f85cfb442c7ab9daad2f8c34c473",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/52d6b07631dd532f42d95d191dc22c145c0bb1": "7698c4854c4aea51aa81fea72faef6da",
".git/objects/7d/7216492ea1a2c3e578423d42150836092c2190": "dfec7b67a1a3f92e982854eb5faa932d",
".git/objects/7c/35a1280c64974f772d42c13c4e3575f9008275": "89c2c739023faabde4f015c982ed73ad",
".git/objects/89/0c41326c24d0f400e4090b6baf76dd8062f1da": "e26e35d157f47cb40544d6346bd26d99",
".git/objects/45/1a18f84a1a93ce05064d992c54d21d2cdd780b": "40aad9091579d9eae4d7379473d7ad57",
".git/objects/1f/a69a666c7254ac68dac6efe490a918b2be75da": "759592d203a509d8cce8899fcd9b0f88",
".git/objects/87/a1c11d4e269871ae88eba713c8b0313126be5f": "b7f9604903d8172b78cdeaec64df991a",
".git/objects/74/0269b3f1fab2096188dd014418d1d2dd7f9f04": "fe84ee93b3cee094f8c616c2759b1742",
".git/objects/28/8247b634fa595eb91f896e41fd695e089b9c99": "7c9be3e6a8a1808df43015972d46cd54",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/5115c02fe45c90c469b5e14cac04a81269ae77": "cb168d43308eecd873fa324982db85c8",
".git/objects/86/358cae9711a3af1a3a33870c0d658f253ae0a8": "1ee6b1ee30078116813d38d6a2ad8195",
".git/objects/86/8538a262f5e45f33d75e7e2b1fd4cf4371251e": "89fa9f8dd66fb54ab08d6c53eecd3e8f",
".git/objects/72/cc638931c189eec7d227c43497f3a8af7621ad": "238abd26fa05e1964530885725e9df3b",
".git/objects/2f/1b86c869722b10171faa540bc2094dfdc2a9b3": "39cd8299140ba4c04fb1cc0c4ce45ff1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/15bd8aae285317745b185f8e12a18763c255bd": "631d3d357be2168d4f2e6be496009b6f",
".git/objects/5c/e30d4e04c2fbac6efbc918a71a012836931809": "43b811ec7b2fb18d0ccd72003291f42b",
".git/objects/54/8bcf4b9b415baefeb43e4dba0de66ee9d41eb9": "76a68889da7798b733cc4475cb50eedc",
".git/objects/30/bb29cb94de2778ac621a7408da23906bb1caa2": "8946d51a435b16dd2c8d3d91e2fbbbee",
".git/objects/5b/28a63aad41dce833cda24f6ad808371db04fab": "51b26cfa0d09adbfc60acec21897ecd2",
".git/objects/06/7dc3408fe627922042816f1ae6c18ba8e74c08": "27a89802df869d44ca87277b58a5f5f4",
".git/objects/6c/86dcf7d0f61e8042e301ee1a45dc34ee228247": "b532a34a33990fe7b4be9cd394c290e3",
".git/objects/ba/e30837274c757d61fa95fe8d056c34dfc81b56": "9355b2283891b4e9ed1417d9fce98319",
".git/objects/b6/df12b536c7606f85d173b25c65d4d55d11e794": "e6036438ffe93fe0d742dd9f5487921e",
".git/objects/a9/81e4ffc742f63c5388786b29eaef9537bfb1f9": "475de034ab3aac90b1e531cee2422c0f",
".git/objects/af/4e334199df774bee2a29860b5a7bab133254f7": "58cf6d731bf09350baf4dbec917775e3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/9a95ce94fd286223cc375cebe0f60b6ca6a421": "754673aeee91ec4abd20deb14a834ab4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f7/489b4162df82b072060644f8f4f0e44ce4a25c": "eae8bd5a41222419b28586468aa32a0f",
".git/objects/fa/33aa26f2c68b3cdbef3ed975fedcdc5186b863": "ce9aeb581a449194d1249e3c96142896",
".git/objects/c2/bd291884195dc635172b727fa3701b7916bd8c": "aa0ff44f83bd42f52c44eb4049ff0880",
".git/objects/f6/41f0c2e4299a1fb02656b6d4fb3686af08b978": "d6d2848e2a3d1a42f748e45cb58604a3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/f1d5c1a962ecac2b493198647b929b787a4801": "5064ecca66b3b73b41c3f8f0ad63b701",
".git/objects/70/3ce914f0032386c1cc6092dcbdc9cbb82ec03f": "d03bc1fea2f1e7c27ace9520158dcf4a",
".git/objects/4f/c5c8f44b70064cc3824f9d02c41ed277dc34f5": "72165ea0b84812b9602f983fe9e0cff0",
".git/objects/8d/93fb6dbd326f8e82641212e6d6f22ddc685067": "baad94baddbe43a1fedcb0946e3ddfb3",
".git/objects/76/6be2ae4e1f7a3ffc4aa84c38a571e9caf38e06": "98765317d422642ea9e36fc27aca6329",
".git/objects/2e/523b9ff3ff02e8dd82888d1f1b8dfce12705ac": "611e765cc4668f7246256a9c6ba39c16",
".git/objects/14/be6eaf620ddd4b8e2daa8587e0ab99d3794b1f": "2e27b2bf238d66312e1b4ee64c6f2861",
".git/objects/14/9bf30bf7bdef76329add27050a78ae6dcda904": "f0f80338756b2b7acf45a21d62c0ef9b",
".git/objects/8e/ee41a377af8240b3d0334b3b3ab972fd1b5255": "d1485ed235c40d6649ffecd3c3c73f7d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "2ab7675ce88e3123babddd1a1595845a",
".git/logs/refs/heads/main": "ad08b69dec2fb55fac572d6ef9d1913e",
".git/logs/refs/remotes/origin/main": "257a665e77a7d995a54adfdbeb50a4af",
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
".git/refs/heads/main": "d2af84fccb16f5be1c5956a61e2c5440",
".git/refs/remotes/origin/main": "d2af84fccb16f5be1c5956a61e2c5440",
".git/index": "9709926aed5f0b3669ef37898f3d4572",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "ced50175170d6f274de6934592c4cf1b",
"assets/AssetManifest.json": "3989627f95e00d9304487a23d75eb720",
"assets/NOTICES": "8e0691cb7ef1685ab44742f2c1eca830",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/background2.png": "df28e32d2bbeb440a616bd4c28ef7840",
"assets/assets/images/login_facebook.png": "74107afad82450171e876490517522b8",
"assets/assets/images/password_eye.png": "350d7c5c4890d4b3f9ee5d4f5242e285",
"assets/assets/images/2.0x/background2.png": "1b93f5ab6942e7e8209cc023020dbdd3",
"assets/assets/images/2.0x/login_facebook.png": "11663163587c9ad2d4f221bc5ad6e3d9",
"assets/assets/images/2.0x/password_eye.png": "82967de2d6678d20f4326ae181681c0d",
"assets/assets/images/2.0x/login_line.png": "d4a4066b347dd8088d5b291cce322986",
"assets/assets/images/2.0x/black.png": "bcdf5561753a9834e6382cec21b51399",
"assets/assets/images/2.0x/background.png": "560c314a5be8390774b5f76ce3104a41",
"assets/assets/images/2.0x/logo.png": "c203b0b5a77fa143e0e0e2ee1db25731",
"assets/assets/images/2.0x/signup_img.png": "bdc5e035365559b65f0421890c11c89b",
"assets/assets/images/2.0x/login_google.png": "80f39533be96d343020f7c1e96bd77e3",
"assets/assets/images/2.0x/box.png": "ad5e6df8bc30b6c1c2fcae74cf1606a2",
"assets/assets/images/2.0x/back.png": "9cee55ef4011da66bee4ffe96eb1a921",
"assets/assets/images/login_line.png": "23832a333348f2c3bff50b8db7590c0e",
"assets/assets/images/black.png": "4cc7f82ff1cd3c361cf73d3afd03028c",
"assets/assets/images/3.0x/background2.png": "cafc4c356c1b454d9d4275d4197081c1",
"assets/assets/images/3.0x/login_facebook.png": "98a7c64409f6797a095e375ce4f4fe96",
"assets/assets/images/3.0x/password_eye.png": "487bfc89c64a29efbc64ec5ecebae748",
"assets/assets/images/3.0x/login_line.png": "20bfb7f28d8af9047bdf32545a3d069f",
"assets/assets/images/3.0x/black.png": "93922ebacf092d83421b86ee5c1d5448",
"assets/assets/images/3.0x/background.png": "a208af8a859094a02724a8a28b105168",
"assets/assets/images/3.0x/logo.png": "08e94a664bb6c0660fbd7b9b39271382",
"assets/assets/images/3.0x/signup_img.png": "9f67497e7563ca377c663fcad1003eb7",
"assets/assets/images/3.0x/login_google.png": "5e6f41644924ab5254b500390cca9fe6",
"assets/assets/images/3.0x/box.png": "52462b99512a9d58dbfac4a244c8fba5",
"assets/assets/images/3.0x/back.png": "36a827ef3d1bbeec48d1509524efcf52",
"assets/assets/images/background.png": "e4b39dc3421b152779f19672c04ce766",
"assets/assets/images/logo.png": "1fb98eeeafe4aacad31af5171abd129a",
"assets/assets/images/signup_img.png": "f9a77b43a2256e89653847b8f3c8d0a9",
"assets/assets/images/login_google.png": "e6f37424402685819632afcdabba2fce",
"assets/assets/images/box.png": "ca3096ad45cbb72ac1b8d5af730c67e8",
"assets/assets/images/back.png": "095a0ac8d2781151268964402fbdbbca",
"assets/assets/langs/zh-TW.json": "c3f9d55b28d1b357ec36114cfe04bb36",
"assets/assets/langs/en-US.json": "9227a575aa7a1434f86f010036e34da6"
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
