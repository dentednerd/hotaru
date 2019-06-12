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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-4ce6c61be1156a1c625b.js"
  },
  {
    "url": "app-83e767b3c2b28dbc28ad.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-13af87086aeafeed5c1f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "82f5f3d3a3b0203c8a41e86f1c8cd9e9"
  },
  {
    "url": "styles.5e71cd8ce674a9f05cb8.css"
  },
  {
    "url": "1-c36625601b12632e14c6.js"
  },
  {
    "url": "component---src-pages-404-js-672a6a17d98f6d29fe0e.js"
  },
  {
    "url": "styles-91654aa81fc64e95e71f.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "85d2c9a39451e540470d0ec2bdce11ff"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "e7b8d2b1f656ae0dced0c22c16aa3435"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/CV/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^([^.?]*|[^?]*\.([^.?]{5,}|html))(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        var request; // Some external resources don't allow
        // CORS so get an opaque response

        if (resource.match(/^https?:/)) {
          request = fetch(resource, {
            mode: "no-cors"
          });
        } else {
          request = fetch(resource);
        }

        return request.then(function (response) {
          return cache.put(resource, response);
        });
      }));
    }));
  }
});