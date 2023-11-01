---
title: "Code Ninjas"
date: "2018-05-25"
featuredImage: "./images/codeninjas.png"
category: "projects"
tags: ["MongoDB", "Heroku", "fly.io", "Netlify", "React", "Redux", "MERN"]
---

Ten months after graduation, I finally deployed our team’s final project, [Code Ninjas](https://codeninjas-nc5.herokuapp.com/), to the web. It wasn’t easy; I had to find a way to turn our [MongoDB](https://www.mongodb.com/) database into an accessible API, which I finally managed with [mLab](https://mlab.com/) and [Heroku](https://www.heroku.com/).

I also had trouble deploying the front end, because Heroku just didn’t want to play nice with the Webpack config we’d created. To solve this problem, I created a whole new app with [create-react-app](https://github.com/facebook/create-react-app), copied all the components, assets and reducers over, and managed to deploy to Heroku without a hitch by letting CRA handle the Webpack config in the background, and cutting the list of Code Ninja's dependencies in half into the bargain.

The moral of this story is to always use CRA to start your React projects. _Always always always._

Please have fun playing our little game! I’ve realised by playing it through a few times that some of the questions are a little strangely worded and quite possibly even outdated by now, but please remember that Team JSKids (yes, that was our team name, and we love it) built this whole thing in two weeks, and half the team had never used [Redux](https://redux.js.org/introduction/getting-started) before then.

## Postscript #1

Since first writing this, I've deployed [Code Ninjas v2](https://codeninjas-v2.herokuapp.com), a reskinned version of the same site with the same questions, but now with level select!

## Postscript #2

This little project is now over six years old. Imagine that! However, with the demise of both mLab and Heroku's free tier, it's had to find a new home. The database is on [MongoDB Atlas](https://cloud.mongodb.com), the API is on [fly.io](https://fly.io), and the front end will be hosted by [Netlify](https://netlify.com).

Version 3 contains some major updates to both the database and the design. Please enjoy the ninja references I've added. All previous versions of the front end are now within the same codebase, on separate branches.

## Further reading

- [Code Ninjas](https://code-ninjas-dentednerd.netlify.app/)
- [API](https://codeninjas-api.fly.dev/)
- [front end code](https://github.com/dentednerd/CodeNinjas)
- [back end code](https://github.com/dentednerd/CodeNinjasBack)
