---
title: "Code Ninjas: revisiting Northcoders project phase"
date: "2018-05-25"
featuredImage: "./images/code-ninjas.png"
tags: ["projects"]
---

Ten months after graduation, I finally deployed our team’s final [Northcoders](https://northcoders.com/) project, [Code Ninjas](https://codeninjas-nc5.herokuapp.com/), to the web. It wasn’t easy; I had to find a way to turn our [MongoDB](https://www.mongodb.com/) database into an accessible API, which I finally managed with [mLab](https://mlab.com/) and [Heroku](https://www.heroku.com/).

I also had trouble deploying the front end, because Heroku just didn’t want to play nice with the Webpack config we’d created. To solve this problem, I created a whole new app with [create-react-app](https://github.com/facebook/create-react-app), copied all the components, assets and reducers over, and managed to deploy to Heroku without a hitch by letting CRA handle the Webpack config in the background, and cutting the list of Code Ninja's dependencies in half into the bargain.

The moral of this story is to always use CRA to start your React projects. _Always always always._

Please have fun playing our little game! I’ve realised by playing it through a few times that some of the questions are a little strangely worded and quite possibly even outdated by now, but please remember that Team JSKids (yes, that was our team name, and we love it) built this whole thing in two weeks, and half the team had never used [Redux](https://redux.js.org/introduction/getting-started) before then.

---

Since first writing this, I've deployed [Code Ninjas v2](https://codeninjas-v2.herokuapp.com), a reskinned version of the same site with the same questions, but now with level select!
