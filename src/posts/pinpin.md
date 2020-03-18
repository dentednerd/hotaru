---
title: "Pinpin: a calming new tab for Chrome"
date: "2019-11-28"
featuredImage: "./images/pinpin.png"
tags: ["projects"]
---

[WIP] A Chrome extension built with create-react-app, localStorage and React hooks.

#### creating a Chrome extention in React

- need to update `public/manifest.json`; manifest_version, name, and version are all required, everything else optional

- [Chrome docs on Content Security Policy](https://developer.chrome.com/extensions/contentSecurityPolicy)

In `package.json`:

```json
"scripts": {
...
"build": "INLINE_RUNTIME_CHUNK=false react-scripts build"
}
```

From the CRA docs on production builds:

> `runtime-main.[hash].js`

> This is a small chunk of webpack runtime logic which is used to load and run your application. The contents of this will be embedded in your `build/index.html` file by default to save an additional network request. You can opt out of this by specifying `INLINE_RUNTIME_CHUNK=false` as documented in our advanced configuration, which will load this chunk instead of embedding it in your `index.html`.

#### moving from state to hooks

When I first started using React, hooks weren't available. The original to-do list I made used state. However, now that React 16.8.0 has graced us with hooks, I took this opportunity to learn about them by converting my class components into functional components with hooks. Goodbye `constructor`, hello `useState`.

```js
const [showForm, toggleShowForm] = useState(false);
```

[React docs on hooks](https://reactjs.org/docs/hooks-intro.html)

#### using localStorage to save data between sessions

#### dayjs for time, date and background
