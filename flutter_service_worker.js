'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "4876372922748f68b7b293e6b8e03779",
"assets/AssetManifest.smcbin": "8419039407ac979986e83b5705be90ae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "52fc34a70b225832e47b13c384bc9b3e",
"assets/lib/gods_data/gods.txt": "2c2bcf8c83d0f41c1a87885ddaaace65",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D0%25B2%25D0%25B8%25D0%25BB%25D0%25B8%25D0%25BA%25D1%2581.png": "25f0eee40c85c925f64b3107daff2b16",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D0%25B3%25D0%25BD%25D0%25B8.png": "5514cc16a95b55776c81c3e04a13741d",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D0%25B8%25D0%25B4.png": "f12153f727df1a2f6f9e794380dc596d",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D0%25BB%25D0%25B0%25D0%25B4%25D0%25B4%25D0%25B8%25D0%25BD.png": "229d78f04a72fd1d90fb663ba9cef167",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D0%25BC%25D0%25B0%25D1%2582%25D1%258D%25D1%2580%25D0%25B0%25D1%2581%25D1%2583.png": "c4111d6bb42c70b230fa319fe09c07dc",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D0%25BD%25D1%2583%25D0%25B1%25D0%25B8%25D1%2581.png": "df94c061280c47ccf4ed2df88b28a9bf",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D0%25BD%25D1%2585%25D1%2583%25D1%2580.png": "55f20506803bdfb2560fc0c9702ab1a1",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D0%25BF%25D0%25BE%25D0%25BB%25D0%25BB%25D0%25BE%25D0%25BD.png": "0dbef397c44a2ecbee3859ebb06de4e1",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D1%2580%25D0%25B5%25D1%2581.png": "c5ff5e16f360cfe9412ac1d6c1122bbd",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D1%2580%25D1%2582%25D0%25B5%25D0%25BC%25D0%25B8%25D0%25B4%25D0%25B0.png": "000806b500307e11acc63f7f36ac60b9",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D1%2584%25D0%25B8%25D0%25BD%25D0%25B0.png": "aa392a92c4517f34f94fb3e7b9f8d834",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D1%2584%25D1%2580%25D0%25BE%25D0%25B4%25D0%25B8%25D1%2582%25D0%25B0.png": "24fb299db238f75a2faf7542c823d876",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2590%25D1%2585%25D0%25B8%25D0%25BB%25D0%25BB.png": "227bbc685b1f843426ef6195ec17088a",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2591%25D0%25B0%25D1%2580%25D0%25B8.png": "2baaf42d94b2f7de3a51038f176d8dc8",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2591%25D0%25B0%25D1%2580%25D0%25BE%25D0%25BD%2520%25D0%25A1%25D1%2583%25D0%25B1%25D0%25B1%25D0%25BE%25D1%2582%25D0%25B0.png": "4f23f5397845712507e49d770863a6af",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2591%25D0%25B0%25D1%2585%25D1%2583%25D1%2581.png": "160956e7ac49d1087268e64b8887abba",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2591%25D0%25B5%25D0%25BB%25D0%25BB%25D0%25BE%25D0%25BD%25D0%25B0.png": "5dfeafa3ff07b462cd620fbcd88b6c01",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2592%25D1%2583%25D0%25BB%25D0%25BA%25D0%25B0%25D0%25BD.png": "a0e0a451fb31a5129179496dc011b90b",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2593%25D0%25B0%25D0%25BD%25D0%25B5%25D1%2588%25D0%25B0.png": "0bd6cfc8d9c8cb7475b5dbfd114deb8f",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2593%25D0%25B5%25D0%25B1.png": "1a9624b8eb6af6991ae8cf14b7138959",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2593%25D0%25B5%25D0%25BA%25D0%25B0%25D1%2582%25D0%25B0.png": "6738b9bcf76a6a67f5546a7f3601fe2c",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2593%25D0%25B5%25D1%2580%25D0%25BA%25D1%2583%25D0%25BB%25D0%25B5%25D1%2581.png": "0d50eb5f8bafbe59853c5c1e22b2bd1f",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2593%25D1%2583%25D0%25B0%25D0%25BD%25D1%258C%2520%25D0%25AE%25D0%25B9.png": "34de162d7bea7fc7173cb2a9b129a863",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2594%25D0%25B0%25D0%25BD%25D0%25B7%25D0%25B0%25D0%25B1%25D1%2583%25D1%2580%25D0%25BE.png": "0e28dd7976192ffcd73eb9e6c509536f",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2597%25D0%25B5%25D0%25B2%25D1%2581.png": "aafb1331c474069c34fb5008beff04b6",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2598%25D0%25B4%25D0%25B7%25D0%25B0%25D0%25BD%25D0%25B0%25D0%25BC%25D0%25B8.png": "d17b9da9d8882edfdff9a4fc4ea4f0a6",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2598%25D0%25BC%25D0%25B8%25D1%2580.png": "2ff842557298168990f5b362787860c9",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%2599%25D0%25B5%25D0%25BC%25D0%25B0%25D0%25B9%25D1%258F.png": "cca8b7605f06071a05a75b36cff7cbfb",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259A%25D0%25B0%25D0%25B1%25D1%2580%25D0%25B0%25D0%25BA%25D0%25B0%25D0%25BD.png": "945b0a45c45c14f694a7d4c7d8ae6c91",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259A%25D0%25B0%25D0%25BB%25D0%25B8.png": "aad92be8b56fb11e04067926ab309763",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259A%25D0%25B5%25D1%2580%25D0%25BD%25D1%2583%25D0%25BD%25D0%25BD.png": "21c93726723b9a4e80c7cb86976c63aa",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259A%25D1%2583%25D0%25BA%25D1%2583%25D0%25BB%25D1%258C%25D0%25BA%25D0%25B0%25D0%25BD.png": "be180fa1983b5d34cc7d26bc91b02ed8",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259A%25D1%2583%25D0%25BF%25D0%25B8%25D0%25B4%25D0%25BE%25D0%25BD.png": "62cf9f752ac3cd734b06bdb5c91f248a",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259B%25D0%25BE%25D0%25BA%25D0%25B8.png": "a046587788bc4a4704af759268a96588",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259C%25D0%25B5%25D0%25B4%25D1%2583%25D0%25B7%25D0%25B0.png": "c3e16058801d4ceecc702a159e3c3292",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259C%25D0%25B5%25D1%2580%25D0%25BA%25D1%2583%25D1%2580%25D0%25B8%25D0%25B9.png": "bc90a8183a3dc937359277f705518e05",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259C%25D0%25B5%25D1%2580%25D0%25BB%25D0%25B8%25D0%25BD.png": "4bc53fed9ba83e96dcf3902ad76939fd",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259C%25D0%25BE%25D1%2580%25D0%25B4%25D1%2580%25D0%25B5%25D0%25B4.png": "60faca3c9b705aaf88507399bc9f9b14",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259C%25D0%25BE%25D1%2580%25D1%2580%25D0%25B8%25D0%25B3%25D0%25B0%25D0%25BD.png": "ef595a96539b05a0ca645052e9f9c13b",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259D%25D0%25B5%25D0%25B9%25D1%2582.png": "5917606f2dad328faf326821bc44ab89",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259D%25D0%25B5%25D0%25BC%25D0%25B5%25D0%25B7%25D0%25B8%25D0%25B4%25D0%25B0.png": "34ccfb5c71ad324bdaf64c98bd8a8270",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259D%25D1%258E%25D0%25B9%25D0%25B2%25D0%25B0.png": "dddc4e7e9c55d8f2b5b5d9f11938c119",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259E%25D0%25B4%25D0%25B8%25D0%25BD.png": "5aa6dfcf53bb666328e0daabafc0cce7",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259F%25D0%25B5%25D0%25BB%25D0%25B5.png": "8f430191624e3522873f6c62d70d200d",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%259F%25D0%25BE%25D1%2581%25D0%25B5%25D0%25B9%25D0%25B4%25D0%25BE%25D0%25BD.png": "e8f07fc1ed7854ff16e66beeecf2e224",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A0%25D0%25B0%25D0%25BC%25D0%25B0.png": "05ef7528f56488ac75b130c3936220eb",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A0%25D0%25B0.png": "3ba336e72007bc2b1147d71854a75ea5",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A1%25D0%25B5%25D0%25B1%25D0%25B5%25D0%25BA.png": "62e943f68463a760bf891a0d1ee58572",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A1%25D0%25BE%25D0%25BB%25D1%258C.png": "d0ad56b7e0bf8706656ded710f3ed802",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A1%25D1%2583%25D1%2581%25D0%25B0%25D0%25BD%25D0%25BE%25D0%25BE.png": "3d6535322b34a3283dc606cead4ae9de",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A1%25D1%2586%25D0%25B8%25D0%25BB%25D0%25BB%25D0%25B0.png": "00b00a4348966c222479e9140208f96a",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A2%25D0%25B0%25D0%25BD%25D0%25B0%25D1%2582%25D0%25BE%25D1%2581.png": "b6eca4f0b14d40715bd5af33d54de44b",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A2%25D0%25BE%25D1%2580.png": "49f05113b5e25c13084bcaa35bdfa2e6",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A3%25D0%25BB%25D0%25BB%25D1%258C.png": "fd152faa318530d9b0f21bc96a4dbeb5",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A4%25D0%25B5%25D0%25BD%25D1%2580%25D0%25B8%25D1%2580.png": "1e7e32e0927a53275abcbf9ce73c9dc2",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A5%25D0%25B5%25D0%25BF%25D1%2580%25D0%25B8.png": "92f4d4e6f6d0f0e70b4284631c5736b6",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A5%25D1%2583%25D0%25B0%2520%25D0%259C%25D1%2583%25D0%25BB%25D0%25B0%25D0%25BD.png": "f4b0cf85c4912f1a1b86ae259541dbd0",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A5%25D1%2583%25D0%25BD-%25D0%2591%25D0%25B0%25D1%2586.png": "96a1ac3c3cd9294a5ff526e1a7740222",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A6%25D0%25B5%25D1%2580%25D0%25B1%25D0%25B5%25D1%2580.png": "eab0eddf67a08498a7c88ecfd636c031",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A6%25D0%25B7%25D0%25B8%25D0%25BD%2520%25D0%2592%25D1%258D%25D0%25B9.png": "1a255baa9b6d9f8b1275d1a37a0c2131",
"assets/lib/gods_data/short_img/%25D0%25B1%25D0%25BE%25D0%25B3%25D0%25B8/%25D0%25A7%25D0%25B0%25D0%25B0%25D0%25BA.png": "3f871afe5b7313edd9c6f31a33d5292a",
"assets/NOTICES": "bdd87585deefb6e04728f796091ef299",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d3cfb72964ff85b53619eb78fea9859",
"/": "6d3cfb72964ff85b53619eb78fea9859",
"main.dart.js": "a507b1af5060e6c99fa28cba0959288c",
"manifest.json": "7fd7023d9baee73020932fb6eb614c11",
"version.json": "89ad63655ef5b2531f4698827c8c4ddf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
