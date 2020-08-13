---
title: "Let's make a website! 1: API with Express & Tumblr"
date: "2020-08-13"
featuredImage: "./images/tumblr.jpg"
category: "programming"
tags: ["Express", "Tumblr.js"]
---

A few years ago, the height of my development abilities was creating Tumblr themes. It was a lot of fun, and it kept me sane through a difficult period of my life. Most of the themes I made were hot garbage, in hindsight, but recently I've revived a couple, just to show off what I can do with all the knowledge I've acquired since. It got me thinking: is it possible to create a Tumblr theme using React?

In theory, yes, but Tumblr's theming capabilities aren't really set up to handle huge chunks of user-created Javascript. It's something I want to research more - but what I want to share with you today is my first step towards reaching Tumblr-React nirvana.

## What are we doing here?

This is a walkthrough, start to finish, of a web app with an Express-powered API, using Tumblr as a CMS, with a React client on the front end. I'm affectionately referring to this stack as TERN: Tumblr, Express, React, Nodejs. I'll show you how to set up your Express server to pull your Tumblr data, wire it up to a React app, and deploy it all to Heroku at the end. Is it overkill? Absolutely. Is it fun? You bet.

One caveat with this approach: the way this app is set up, we unfortunately lose the hot module reloading capability of React. When we get to the design stage, you'll be running the `build` script a LOT. One way of avoiding this would be to build this app in [Next.js](https://nextjs.org), but this isn't a Next.js tutorial, it's a TERN-stack tutorial!

To follow along, you'll need a Tumblr account, with at least a few posts on your primary blog. Otherwise we'll have nothing to show on our pretty new website! On your machine, you'll need to have Nodejs installed globally, a terminal window, and your IDE of choice, ready to write some code.

I also have one recommendation: `git commit` at the end of every section. That way, you'll be able to see your progress through your commit history.

## Setting up

In terminal, let's create a new app, and install our first two dependencies:

```sh
mkdir tern-app
cd tern-app
yarn init
touch index.js
yarn add express nodemon
```

Inside `index.js`, let's set up a basic "Hello world" server:

```js
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
```

> We've just replicated the [Hello world example](http://expressjs.com/en/starter/hello-world.html) from the Express docs.

In `package.json`, add some scripts:

```js
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

In terminal, run `yarn dev` to get Nodemon continuously running our app as we develop. In browser, navigate to `localhost:8000` - our port will default to `8000` in the absence of an env var telling us otherwise. You should see the text 'Hello world!', so our basic Express server is working as intended, and it's ready to start fetching data from Tumblr.

## Accessing the Tumblr API

In browser, head over to [https://www.tumblr.com/oauth/apps](https://www.tumblr.com/oauth/apps), and click '+ Register application'. Follow the instructions, and you'll be provided with four keys. Keep them handy.

Create three new files alongside `index.js`: `.env`, `.gitignore`, and `router.js`.

Set up your Tumblr API keys as environment variables in `.env`:

```js
CONSUMER_KEY=<your consumer key>
CONSUMER_SECRET=<your consumer secret>
OAUTH_TOKEN=<your OAuth token>
OAUTH_SECRET=<your OAuth secret>
BLOG_NAME=<the name of the Tumblr blog you want to work with>
```

> Each Tumblr account has at least one blog associated with it, but it's possible to run many blogs from one account.

Keep those env vars secret by adding `.env` inside `.gitignore`.

With our env vars set up and protected, we can use them to create a route in our server that fetches data from Tumblr. We need to add a couple of packages to achieve this. In terminal:

```sh
yarn add tumblr.js dotenv
```

In `router.js`, let's set up a route to fetch a list of all the blogs under your Tumblr account:

```js
const express = require('express');
const router = express.Router();
const tumblr = require('tumblr.js');
require('dotenv').config();

const client = tumblr.createClient({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.OAUTH_TOKEN,
  token_secret: process.env.OAUTH_SECRET
});

router.get('/', (req, res) => {
  client.userInfo((err, data) => {
    try {
      const names = data.user.blogs.map(blog => blog.name);
      res.send(names);
    } catch (err) {
      console.log('ERROR: ', err);
      res.status(500);
    }
  });
});

module.exports = router;
```

> The [Tumblr.js docs](https://tumblr.github.io/tumblr.js/index.html) are going to be important in setting up our routes.

Finally, add a new route, `/api`, to `index.js`:

```js
...
const router = require('./router');
...
app.use('/api', router);
```

> This StackOverflow entry neatly explains the [difference between app.use and app.get in Express](https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js).

In browser, you'll still be able to see "Hello world!" on `localhost:8000`. Navigate to your new route, `localhost:8000/api`. You'll see a list of your Tumblr blogs, including one that matches your `BLOG_NAME` variable. This is important for our next step, where we'll be fetching data from your chosen blog instead of your whole Tumblr account.

## Adding routes to the API

In `router.js`, we're going to replace the route we created in our last step - we don't need it anymore. Instead, we're going to get posts back from our chosen blog, one page of 20 posts at a time.

```js
const express = require('express');
const router = express.Router();
const tumblr = require('tumblr.js');
require('dotenv').config();

const client = tumblr.createClient({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.OAUTH_TOKEN,
  token_secret: process.env.OAUTH_SECRET
});

router.get('/posts/:page', (req, res) => {
  client.blogPosts(process.env.BLOG_NAME, {offset: (req.params.page * 20) - 20}, (err, data) => {
    try {
      res.send(data.posts);
    } catch (err) {
      console.log('ERROR: ', err);
      res.status(500);
    }
  });
});

module.exports = router;
```

In your browser, check out `localhost:8000/api/posts/1`. Do you see an array of objects containing a lot of post data? Change that `1` to a `2`. Do you see different data? We've got paginating data! This is going to come in handy in the front end of our app - instead of having one loooong page of posts, we'll be able to navigate between shorter pages of posts for a nicer user experience.

Now, you could end this part of the walkthrough here. We've got an API returning the data we need. However, there are some optional routes we can add to enhance the navigation of our blog.

For example, here's a route that returns posts by tag.

```js
router.get('/tag/:tag/:page', (req, res) => {
  client.blogPosts(process.env.BLOG_NAME, {tag: req.params.tag, offset: (req.params.page * 20) - 20}, (err, data) => {
    try {
      res.send(data.posts);
    } catch (err) {
      console.log('ERROR: ', err);
      res.status(500);  
    }
  })
});
```

Notice that very little has changed. It's a new route for our API, `/tag/:tag/:page`, which in the browser would look something like `localhost:8000/api/tag/cats/3`. The `options` object, which is the second argument we're passing to the `client.blogPosts` function, has a new `tag` property, which receives `req.params.tag` - the `:tag` part of our route.

The first time I built this app, I added a `type` route too. To my disappointment, I've discovered that Tumblr hasn't supported their original seven (eight, really) post types since 2018 - all posts now have the type `text`. However, the blog I was working with had posts dating back to 2010, so I wanted to add support for the old-school post types too. This has more of an impact on the front end than on the API, but it's something to consider if your chosen blog has pre-2018 content.

## Good job!

That's how you make an API with Express and Tumblr.js! Coming up in part 2, we'll look at creating a React client to display our posts.
