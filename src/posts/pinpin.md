---
title: "Pinpin: a calming new tab for Chrome"
date: "2019-11-28"
featuredImage: "./images/pinpin.png"
category: "projects"
tags: ["WIP", "Chrome extension", "React", "hooks", "localStorage", "dayjs"]
---

Pinpin was one of those odd projects that started as something else entirely, and gradually morphed into what it is now. Originally, I was looking for a way to demo a few of those little React apps you build when you're first starting out - a calculator, a news feed, a weather tracker, and so on - but I ended up using a couple of these in another idea I had going, which was to build a new tab extension for Chrome in React.

What I've ended up creating is an extension that tells you the current date, time and weather in your area, changes the gentle background gradient to resemble what a clear sky might look like at the current time of day, and provides you with a basic to-do list that persists in the browser. It's very minimalist and, I hope, soothing. I like the idea of having a place to brain-dump right inside Chrome. Right now, I'm going to give you an insight into how I built this extension.

## creating a Chrome extention in React

[CRA](https://create-react-app.dev/) comes prepared with the key file we need to get an extension running in Chrome: `public/manifest.json`. There are four properties that are required in this context; everything else is optional;

- `manifest_version`
- `name`
- `version`
- `content_security_policy`

I really struggled with that last one! Take a look at the [Chrome docs on Content Security Policy](https://developer.chrome.com/extensions/contentSecurityPolicy)

There's one more change to make before we can get this React app working as a Chrome extension. In `package.json`, a change to the `build` script is required:

```json
"scripts": {
  ...
  "build": "INLINE_RUNTIME_CHUNK=false react-scripts build"
}
```

Why do we need this change? The [CRA docs on production builds](https://create-react-app.dev/docs/production-build/) explains for us:

> `runtime-main.[hash].js`
>
> This is a small chunk of webpack runtime logic which is used to load and run your application. The contents of this will be embedded in your `build/index.html` file by default to save an additional network request. You can opt out of this by specifying `INLINE_RUNTIME_CHUNK=false` as documented in our advanced configuration, which will load this chunk instead of embedding it in your `index.html`.

## moving from state to hooks

When I first started using React, hooks weren't available. The original to-do list I made used state. However, now that React 16.8.0 has graced us with hooks, I took this opportunity to learn about them by converting my class components into functional components with hooks. Goodbye `constructor`, hello `useState`.

```js
const [showForm, toggleShowForm] = useState(false);
```

[React docs on hooks](https://reactjs.org/docs/hooks-intro.html)

## using localStorage to save data between sessions

## dayjs for time, date and background

[Dayjs](https://github.com/iamkun/dayjs) is a time and date parser
