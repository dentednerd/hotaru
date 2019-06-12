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
    "url": "webpack-runtime-665cc5b4b2f8c5c0ca29.js"
  },
  {
    "url": "app-4afb47fcecf138623d2a.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1befdc66a894052da190.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8fc437289792ef8d0f812baedd5be8ed"
  },
  {
    "url": "styles.5e71cd8ce674a9f05cb8.css"
  },
  {
    "url": "1-d06de640ed7318896590.js"
  },
  {
    "url": "component---src-pages-404-js-883997bd4b4a0f71c1a8.js"
  },
  {
    "url": "styles-e49e859a95d372f6efe0.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "f77a4a74afb325385ee4e9ddaa644f16"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "5c4733ed5d436454f1f40a9cb75472e0"
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