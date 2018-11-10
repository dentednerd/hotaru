---
title: "Code Ninjas"
date: "2018-05-25"
---

[Code Ninjas](https://codeninjas-nc5.herokuapp.com/)

Ten months on, I finally deployed our team’s final Northcoders project to the web.

This wasn’t easy. I had to find a way to turn our MongoDB database into an accessible API, which I finally managed with mLab and Heroku.

Then I had trouble deploying the front end, because Heroku just didn’t want to play nice with the Webpack config we’d created. So I created a whole new app with create-react-app, copied all the components, assets and reducers over, and managed to deploy to Heroku without a hitch.

The upside to this is that by using create-react-app, I managed to cut the list of dependencies in our package.json by half.

The moral of this sordid tale is to always use create-react-app to start your React projects. Always always always.

Anyways, have fun playing our little game! I’ve realised by playing it through a few times that some of the questions are a little janky, but please remember that Team JSKids (yes, that was our team name, and we love it) built this whole thing in two weeks, and half the team had never used Redux before then.

Also, I can’t let this pass without mentioning that I’m returning to Northcoders as a mentor tomorrow, helping out on the part-time course with the front-end block. Super excited!

EDIT:

I've since deployed a reskinned version of [Code Ninjas](https://codeninjas-v2.herokuapp.com), still with the same questions but now with level select!
