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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

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
    "url": "webpack-runtime-471b4c222fb43fa9247d.js"
  },
  {
    "url": "app-528fe1344fdc0851e549.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-77171c94ad9f36caab8f.js"
  },
  {
    "url": "index.html",
    "revision": "7c5a8e417f43cd1c480ba5f0c549fc09"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9f8e12a48974f3734b94c500e4ceda1c"
  },
  {
    "url": "component---src-pages-index-js.96be85aa6d109c0eb9d4.css"
  },
  {
    "url": "component---src-pages-index-js-e270f44ba2b875ede276.js"
  },
  {
    "url": "9-ee767fc171b98387e552.js"
  },
  {
    "url": "1-eeecedef4aae2ac0d7b1.js"
  },
  {
    "url": "0-5d0ea8e9f96b4237b7be.js"
  },
  {
    "url": "static/d/577/path---index-6a9-EyZB5gla5u3RBY8iTQdleJx0kQ.json",
    "revision": "0f01df7a21ece48670aa53b7966b8361"
  },
  {
    "url": "component---src-pages-404-js.b10e4716d40d8a12a831.css"
  },
  {
    "url": "component---src-pages-404-js-60c99561d9523698b99d.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});