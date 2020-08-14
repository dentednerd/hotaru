---
title: "Pinpin: a calming new tab for Chrome"
date: "2019-11-28"
featuredImage: "./images/pinpin.png"
category: "projects"
tags: ["Chrome extension", "React", "hooks", "localStorage", "dayjs"]
---

Pinpin was one of those odd projects that started as something else entirely, and gradually morphed into what it is now. Originally, I was looking for a way to demo a few of those little React apps you build when you're first starting out - a calculator, a news feed, a weather tracker, and so on - but I ended up using just a couple of these and combining then with another idea I had, which was to build a new tab extension for Chrome in React.

The result is an extension that tells you the current date, time and weather in your area, changes the gentle background gradient to resemble what a clear sky might look like at the current time of day, and provides you with a basic to-do list that persists in the browser. It's very minimalist and, I hope, soothing. I like the idea of having a place to brain-dump right inside Chrome. Right now, I'm going to give you an insight into how I built this extension.

## Chrome extensions with React

[CRA](https://create-react-app.dev/) comes prepared with the key file we need to get an extension running in Chrome: `public/manifest.json`. Four properties are required for a Chrome extension:

- `manifest_version`
- `name`
- `version`
- `content_security_policy`

> I really struggled to implement that last one! Take a look at the [Chrome docs on Content Security Policy](https://developer.chrome.com/extensions/contentSecurityPolicy).

There's also a required change you need to make to the `build` script in `package.json`:

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

## from state to hooks

When I first started learning to use React, hooks weren't available. The original to-do list app that I made, the same sort of to-do app that all React beginners make, used state. However, React 16.8.0 graced us with hooks, so I took this opportunity to convert my class components into functional components, and replace state with hooks. Goodbye `constructor`, hello `useState`.

```js
const [showForm, toggleShowForm] = useState(false);
```

> Take a look at the [React docs on hooks](https://reactjs.org/docs/hooks-intro.html).

## localStorage: saving between sessions

Persisting data between sessions was something I needed to learn for this project to be successful. Enter `localStorage`. It exists on the `window` object, and you can write key-value pairs - 'localStorage.setItem()' to it to be read later with `localStorage.getItem()`. In Pinpin, I've used it to store the user's name and location, the current weather condition in said location, and the array of items on the to-do list.

## dayjs: time, date... and colour?

[Dayjs](https://github.com/iamkun/dayjs) is a time and date parser. It's a lot more lightweight than Moment.js, which is why it appealed to me for this project. I used it to display the time and date, but also for a more subtle effect...

```js
const hour = dayjs().format('HH');

...

if (hour <= 3 || hour >= 21) {
  document.body.classList.add('night');
}

if ( hour >= 4 && hour <= 8) {
  document.body.classList.add('dawn');
}

if (hour > 8 && hour <= 16) {
  document.body.classList.add('day');
}

if (hour > 16 && hour <= 20) {
  document.body.classList.add('dusk');
}
```

Each of these classes applies a different colour gradient to the background, mimicking the sky at any given time of day. (Assuming clear skies, of course. Maybe I'll use the weather feature to implement a more accurate background in a later release.)

## a word about weather

Speaking of weather, finding the current local weather condition was straightforward. I got an API key for [openweathermap.org](https://openweathermap.org/), used Axios to fetch data from the API URL, including my key and the user's location, and then set the result as `weatherCondition` in `localStorage`.

And that, in a nutshell, is Pinpin. Clean, simple, and good practice of React basics. Let me know if you use it!
