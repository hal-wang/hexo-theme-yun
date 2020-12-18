/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "74f2bf92a272da291fd060ba5d94d906"
  },
  {
    "url": "about.html",
    "revision": "5795e20244ed4da325ab3f740618554f"
  },
  {
    "url": "assets/css/0.styles.9bcbb34f.css",
    "revision": "5b75ab49cb3eab9dd89dd14ed1e13adf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d6d97159.js",
    "revision": "1153d8ca73d80c297ad815af94b9083f"
  },
  {
    "url": "assets/js/11.a7247759.js",
    "revision": "564af5cf0d6c2cfbf757a35df59da2cc"
  },
  {
    "url": "assets/js/12.8da905a3.js",
    "revision": "72ddd29ffa8aad697708d0ea28d61153"
  },
  {
    "url": "assets/js/13.6e6ff23c.js",
    "revision": "0419e8bdfbf2a172c7ff0a0bed9880e7"
  },
  {
    "url": "assets/js/14.6ce3a875.js",
    "revision": "a02fd2dfc9f645d330fc593311cbf7cc"
  },
  {
    "url": "assets/js/15.cd1cbce8.js",
    "revision": "97cf7009de3d20b057ec049ad40897da"
  },
  {
    "url": "assets/js/16.a06b6fab.js",
    "revision": "044ea3598c2b1062db1f2f10aaed98c4"
  },
  {
    "url": "assets/js/17.2d2db7a3.js",
    "revision": "f4071750a9db45c84d2d38c169625ed1"
  },
  {
    "url": "assets/js/18.98cec7b5.js",
    "revision": "47233566c6e3f2a20b71d3a7730ff0a2"
  },
  {
    "url": "assets/js/19.6f4721cb.js",
    "revision": "b6a3ade531194298228c5bf49aa1ead2"
  },
  {
    "url": "assets/js/2.94d8c358.js",
    "revision": "9691cde35362ec84d60bce406d1cdd89"
  },
  {
    "url": "assets/js/20.fa05bbb9.js",
    "revision": "de58ab038536ca40e7cdef713de25672"
  },
  {
    "url": "assets/js/21.3f175b0b.js",
    "revision": "720f2f62891465d6000a3b683b7126ba"
  },
  {
    "url": "assets/js/22.8e694c23.js",
    "revision": "7af7b0c4f3748eeefcd9717106fc3c3e"
  },
  {
    "url": "assets/js/23.380ea46e.js",
    "revision": "e03901db4703cb65f3927517ce4fdb76"
  },
  {
    "url": "assets/js/24.8b9a8fc5.js",
    "revision": "12b8da7f20e3e82a075ed72a301eef21"
  },
  {
    "url": "assets/js/25.9606b576.js",
    "revision": "d4fb8a9d8ef7754616d9e6286478b1e0"
  },
  {
    "url": "assets/js/26.3ecf270e.js",
    "revision": "2e5d2d88acd4651146651e641f6dede0"
  },
  {
    "url": "assets/js/27.17f96ac6.js",
    "revision": "91abea161f206e24cf6661388e0b08aa"
  },
  {
    "url": "assets/js/28.37fa3033.js",
    "revision": "1b64a73ce911de93c55582b97e3858ac"
  },
  {
    "url": "assets/js/29.072c7323.js",
    "revision": "c8eaa4194ec49518babe243738617eea"
  },
  {
    "url": "assets/js/3.f0a75f0a.js",
    "revision": "262211ae4cb3f594dc456c8f1dff7894"
  },
  {
    "url": "assets/js/4.0971b6a4.js",
    "revision": "54fd06c708769d0d63697550df6f5eb4"
  },
  {
    "url": "assets/js/5.271992df.js",
    "revision": "f82bab4189b37020db7773ff3ccaa271"
  },
  {
    "url": "assets/js/6.c76e6c01.js",
    "revision": "a0265341d70f77f2504fc378963ce4cc"
  },
  {
    "url": "assets/js/7.516b2807.js",
    "revision": "962129a198a1fd99cd061c92d16cf645"
  },
  {
    "url": "assets/js/8.fb4c7b58.js",
    "revision": "f3ca9ce956f6064940d8877e7de06e1c"
  },
  {
    "url": "assets/js/9.858eb406.js",
    "revision": "ae28c11053b03e6f225bb84dc163950c"
  },
  {
    "url": "assets/js/app.610ac4fb.js",
    "revision": "91653eca424fd1021164193397f94f7a"
  },
  {
    "url": "demo.html",
    "revision": "4f5e3700be240f2f8b15725f7f9e9d70"
  },
  {
    "url": "en/about.html",
    "revision": "862b8e24ad21b96893e270fff8797255"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "f91858ed25f09172fede5aa731124878"
  },
  {
    "url": "en/guide/config.html",
    "revision": "1b418adf45f5382e9498ac72b12577f8"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "86c4154e261031e2a6e2c47be9b04867"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "99fc5209b22654689c4520f01981c400"
  },
  {
    "url": "en/guide/index.html",
    "revision": "baa038a1f14b4623b9e860523d14167c"
  },
  {
    "url": "en/guide/page.html",
    "revision": "0bf4b341f224826ee5b2d956ac957a00"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "c1055568de89eddbb5f7ac19001f9773"
  },
  {
    "url": "en/index.html",
    "revision": "4d4258714de9b2182aec79a5a79664da"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "978cc80c943c641d80d19511d1846580"
  },
  {
    "url": "guide/config.html",
    "revision": "fdf05733c75196742de51fa2ff29148b"
  },
  {
    "url": "guide/faq.html",
    "revision": "7fc5cc02a5debbaccb369cbe4d17cfb7"
  },
  {
    "url": "guide/icon.html",
    "revision": "c6f057a3b3a704ea3c25a44d044050f7"
  },
  {
    "url": "guide/index.html",
    "revision": "3d3c4cfaa82d71d589065fd4ba17b5e8"
  },
  {
    "url": "guide/migrate.html",
    "revision": "6e073ee0c3d58a2458cf0345383d4bc2"
  },
  {
    "url": "guide/page.html",
    "revision": "df7ceb9251ce16342fd4155539a9aed7"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "ae309244b6b8fe8946cb12f218ab36df"
  },
  {
    "url": "index.html",
    "revision": "2455bd980a559163186232f22ed26156"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
