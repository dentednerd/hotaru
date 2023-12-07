---
title: "NC News, revisited"
date: "2020-03-10"
featuredImage: "./images/northcoders-news-revisited.png"
category: "projects"
tags: ["React", "Redux", "MongoDB", "Heroku", "hooks", "CSS-in-JS", "MERN"]
---

It's a nice, quiet day. I'm working on this very site, paying attention to all sorts of details in my never-ending quest for perfection. Right now, I'm looking at my portfolio. Can I improve the presentation? Would animation give each project a boost? _Do all the links work?_

As it turns out, not all of the links worked. In one of my portfolio project screens, the link took you to an empty shell of perfectly pretty React-generated UI, with absolutely no data to display. NC News, my dear old friend and among the earliest of my portfolio pieces, was busted.

Now, here's one thing that I've learned whilst revisiting this project: the NC News that my cohort and I built is a _completely different animal_ to the project that more recent cohorts have created. Totally different stack! So if you, dear friendly Northcoder, are thinking of refactoring your own NC News, be aware this story of mine may only be of limited use to you!

For my non-NC readers, who most likely have no idea what NC News is: the project is to create a Reddit clone, with a small dataset that you're provided with. My version of NC News is a MERN-stack app; that is, MongoDB, Express, React and Nodejs.

## When two become one

The project that became one of my first portfolio pieces, NC News, was constructed over two sprints. In the first sprint, at the end of the back-end block, we created a local MongoDB database, seeded it with data, and wrote an Express server to fetch that data. In the second, we created a client app using React and Redux to present that data to the world.

I didn't want to deploy an API app and a client app. I wanted to deploy a single full-stack app. Now, there are plenty of tutorials out there that will walk you through the construction of a MERN app from the ground up, and I'm not about to add to that list. What I can tell you is that I did two things: firstly, I moved my React client into the back-end repo, in its own `/client` sub-directory, complete with its own `package.json`; secondly, I tweaked my `server.js` to point its root towards the client's `/build` folder, like so:

```js
app.use('/', express.static(
  path.join(__dirname, '/client/build'
)));
```

## Sowing the seeds

As with my final NC project, [Code Ninjas](https://joeyimlay.dev/posts/code-ninjas/), I needed a way to host my Mongo database. [mLab](https://mlab.com) is MongoDB's database-as-a-service that offers a free "sandbox" plan - a single database, with 0.5GB storage on a shared server. It's way more than this project required. Setup was nice and easy, and seeding the database was painless - I changed my dev database URL in `config.js` to the mLab database, then ran my seed script.

One thing I figured out quite early on was to leave the test database URL alone - otherwise, when running tests, the mLab database would be seeded with test data and break the website. Yikes!

## Laying down routes

The instructions for the back-end sprint required us to create specific routes in Express to fetch data out of the Mongo database. This was great for creating a home page to show all articles on the home page, or a topic page to show only articles within that topic. I wanted to create a new feature for this incarnation - a user page, showing each user's avatar, username and real name, as well as all the articles and comments they'd created.

This would require some new routes; I didn't have anything to pull back user data yet, nor did I have routes to pull back articles or comments filtered by a particular username. So I had to create them. On the server, creating a new route in Express wasn't tricky. The fiddly part was setting each route up in Redux - so many changes in so many different places! I don't miss working with Redux one bit! Honestly, I can't wait until app-wide state management can be controlled by React hooks.

Besides the Redux donkey work, there was one major issue I couldn't overcome: I couldn't get a route to `api/users/:user` to work. What I had to do instead was to grab all users out of the database at once, then filter by username in the client. This proved useful, as I could use the given username to run the `fetchArticlesByUser` and `fetchCommentsByUser` queries in the client, pulling back the rest of the content for the page. For any other project, I absolutely wouldn't recommend this approach. However, this is a tiny project, so it works with no performance issues.

## Restyling and profiling

On the front-end, I'd originally used Bulma, alongside an extensive separate stylesheet to cover all my custom styles. For the sake of simplicity and sanity, I stripped out all references to Bulma, narrowed down the external stylesheet, and used [styled-components](https://styled-components.com/) instead. I love CSS-in-JS; it keeps styles close to their components, so you can see everything in context, and theming is really easy - not that this project requires theming.

Stripping out Bulma was easy; after removing the dependency, it was just a case of removing the classnames in each component. Shrinking down the external CSS was a little more painstaking. I had to figure out which styles were global and which were component-specific, then moving the component-specific styles into CSS-in-JS. Between you and me, though, I find this sort of thing fun.

After refactoring came a true restyling. I gave article cards images based upon their topic (an idea I got from my colleague Paulina), rounded corners on all visual sections, shrank the header down a little bit and moved the topic tabs into the sidebar as a list of links.

Taking my cues from the work I've been doing on the [LADbible](https://www.ladbible.com) websites, I created some new components for the homepage. The first article in each topic would feature in a row of three article cards across the top of the page. Then, for each topic, I'd have a group of four cards - a full-width card across the top, and three smaller cards in a row underneath.

I guess, in the end, this project has become a hybrid of Reddit and LADbible.

## Bonus section: containerising

Around this time, a few of us on the dev team were practising our Docker skills on old projects. I'd managed to Dockerise my old NC News sprints, back-end and front-end, but I wanted to make sure I could Dockerise the full-stack app too.

There's actually not a whole lot of difference - each package requires its own Dockerfile, so in this instance there's a Dockerfile in the project root that covers the server, and a Dockerfile in the `/client` subdirectory to cover the React package. Finally, there's the `docker-compose.yml` in the root that sets up both the server and the client, along with a Mongo service to take care of the database.

## To the future!

I've got some ideas about future iterations. I'd like to go back and tidy up the components a bit more - the structure isn't as neat as I'd like, and a few things need splitting out in the name of separation of concerns. It would be nice to bring vote counts back into article cards, as they were a huge part of the cards in the first iteration, but totally absent in this version. I'd like to add a footer to match the header! Most of all, I want to see if it's possible to strip out Redux and control the state entirely with `useState`, `useEffect` and `useContext` hooks.

Maybe one day I'll be back with [NC News v3](http://joeyimlay.dev/posts/the-return-of-northcoders-news/)!

## Postscript

This entry has been edited to remove some dead links. For further context, read [The Return of NC News](http://joeyimlay.dev/posts/the-return-of-northcoders-news/).
