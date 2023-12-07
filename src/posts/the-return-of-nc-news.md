---
title: "The Return of NC News"
date: "2021-09-16"
featuredImage: "./images/the-return-of-northcoders-news.png"
category: "projects"
tags: ["React", "Heroku", "fly.io", "Netlify", "hooks", "CSS-in-JS", "Stitches", "PostgreSQL"]
---

"Maybe one day I'll be back with NC News v3!" Remember when [I said that](https://www.joeyimlay.dev/posts/northcoders-news-revisited/)? Well, here we are. I do love when I eventually prove myself right. In this version, the data is still the same, but the code on both ends is *very* different.

## Plus ça change

It makes sense that a few things on the course have changed since my time on the bootcamp. Not only has the stack changed - SQL instead of MongoDB on the back end, and hooks replacing Redux on the React side - but the sprint now offers a choice of datasets. NC News still exists, but now there is also NC Games - still very Reddit-clone-y, but with a focus on board game reviews. My primary motivation in building first House of Games, then my third iteration of NC News, was to brush up on my SQL knowledge so I can be as supportive to current NC students as possible. But that's not to say I didn't have some fun with it too.

## SQL in the API

I'm back to using two separate repos for back end and front end, as it is on the bootcamp, and building out the API comes first. I haven't touched MongoDB since building NC News v2, and not at all in my work at LADbible, but I'd done a little bit of SQL so picking up the syntax again wasn't a struggle. I love how easy it is to host a small Postgres database on Heroku too - there's an addon called Heroku Postgres that has a free sandbox tier, which is perfect for my (and our students') needs. Seeding the database and getting the Express server up and running was smooth sailing. Maybe I'm alright with back end code after all.

## The prophecy mentioned hooks

But you know where my heart lies. The front end is where the real fun is. And for me, getting rid of Redux was the best part of the whole experience. As prophesied in [my earlier post](https://joeyimlay.dev/posts/northcoders-news-revisited/), I did indeed use a lot of `useState` and `useEffect` hooks to fetch the data from my new API via an Axios layer, and I harnessed the Context API alongside localStorage to handle the current user functionality. (It's not "login" in the truest sense, but you can change the active user so that you can post comments under different usernames.)

I also had fun with a CSS-in-JS library that I'd not used before. [Stitches](https://stitches.dev/) turns out to be the nicest library I've ever used for building out a theme. It's so simple! And it feels a lot quicker than styled-components and Emotion. Style-wise in NC News, I kept the original gradient in the header, but expanded the colour scheme with a little help from [mycolor.space](https://mycolor.space) and added in some gold accents. If you're thinking that the header now resembles that of The Guardian, you'd be right.

## From experience comes wisdom

Having spent three years working on news websites, it felt much easier to choose the routes to build in both the API and the client for the best user experience, and my design choices had a lot more purpose behind them. It turns out I can build a decent, fully-tested API from scratch after all - I just needed to refresh my skills. I also made it very easy on myself to do a lift-and-shift from House of Games to NC News v3 - the APIs are identical, apart from the datasets and the resulting variable names - which made me really happy when I got the new NC News API created, tested and deployed inside of an afternoon.

So what will the inevitable version 4 look like? Maybe I'll combine the two into one repo and Dockerise the whole thing again. Maybe I'll find another CSS-in-JS tool to play with. Maybe I'll throw out the designs and start again. (I'm already thinking of revisiting House of Games; it looks too similar to NC News!) Maybe I'll create my own dataset and start a Whole New Flavour of this sprint.

Never underestimate the power of revisiting old projects and rebuilding them. It's not just about the nostalgia hit, but it's good practice for both old and new skills, and it's a huge confidence booster to boot.

See you in NC News v4: Endgame...

## Postscript

Joey from October 2023 here. For a number of reasons there won't be a version 4, but maintenance had to be done on all my NC projects after Heroku removed their free Postgres hosting tier. With plenty of time on my hands (the subject of a future journal entry), I Dockerised the API and deployed it on [fly.io](https://fly.io) alongside their free Postgres provision, with documentation on the front page created in EJS. On the front end, I've squished all the previous codebases into one repo with separate branches for each version, with the latest version deployed on [Netlify](https://netlify.com).

I've repeated this process for House of Games. The Code Ninjas API now also lives on fly.io, but its MongoDB database is hosted on [MongoDB Atlas](https://cloud.mongodb.com) (thank goodness that's still free). Once the Code Ninjas front end has been upgraded and deployed, I'll be putting all NC projects aside for good. It's time to move on.

## Further reading

- NC News: [live](https://dentednerds-northcoders-news.netlify.app/), [API](https://nc-news-finale.fly.dev/), [front end code](https://github.com/dentednerd/ncnews), [back end code](https://github.com/dentednerd/nc-news-sql)
- House of Games: [live](https://dentednerds-house-of-games.netlify.app/), [API](https://nc-games-finale.fly.dev/), [front end code](https://github.com/dentednerd/house-of-games), [back end code](https://github.com/dentednerd/nc-games-sql)
