---
title: "Let's make a website! 2: React client"
date: "2020-08-14"
featuredImage: "./images/tumblr.jpg"
category: "programming"
tags: ["React", "Express", "Tumblr.js"]
---

In part 1, we built an API using Express and Tumblr.js. In this post, we'll set up a React client to turn the data from API into articles in the browser.

## Creating a React app

In terminal, in the root of your project folder, run:

```sh
yarn create react-app client
yarn add path
cd client
yarn build
```

We need to make some changes to our Express server in `index.js`, so that our React components can read data from our server:

```js
const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();
const port = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, 'client/build')));
app.use('/api', router);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(port, () => console.log(`App listening on port ${port}`));
```

> At this point, it's worth having two separate terminal instances: one to keep `yarn start` running in the root directory, and one to run `yarn build` in `/client`. You'll be running `yarn build` a lot; unfortunately, one of the great downsides of this approach is that we lose hot module reloading in React, so to see any changes in our front end, we'll need to keep the contents of `/client/build` up to date. I'll give you a heads-up at good points to run `yarn build`.

With our initial React build created, and our Express server ready to display from `/client/build`, let's take a look at `https://localhost:8000`. If you see 'Edit src/App.js and save to reload.', we're on the right path.

Take a look in the `/client` directory. `create-react-app` has helpfully provided us with a lot of files - some of which are useful to us, some of which aren't, and some of which need tweaking. So let's make some changes.

In `/client/src`, go ahead and delete `App.css`, `App.test.js`, `index.css`, `logo.svg`, and `setupTests.js`.

In `/client/src/index.js`, remove the reference to `index.css`, because we've just deleted that file.

You'll be left with `index.js`, `App.js`, and `serviceWorker.js`. I'll leave the service worker to your discretion. Delete it if you don't think you'll use it later; we won't be touching it in this tutorial.

The React client is set up, and we've created a clean slate on which to build the front end. Our first step is to build the routes.

## Implementing React Router

In your `/client` terminal, run:

```sh
yarn add react-router-dom
```

In `/client/src`, create a new folder called `pages`. The idea is to create components here that correspond to the route we set up in part 1. You'll definitely need a home route, so create a component called `Home.js` in this new folder that returns some simple HTML for now. If you created the optional route for tag pages, create `Tag.js` too. Make sure the HTML in `Tag` is different from `Home`, so you can tell the difference in the browser!

Let's get those showing in the browser. In `/client/src/App.js`, we'll set up routes to these two new page components, like so:

```js
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Tag from './pages/Tag';
...
...
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/tag/:tag' component={Tag} />
      </Switch>
    </div>
  );
```

We also need to wrap our whole React app in `BrowserRouter` in `client/src/index.js`:

```js
import { BrowserRouter } from 'react-router-dom';
...
...
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

```

> Run `yarn build` now!

In your browser, `localhost:8000` will show you your Home component, and `localhost:8000/tag/cats` will show you your Tag component. So far, so good. Let's see about getting data from the API displaying on each route.

The idea here is to use the `fetch()` function to get the data, translate that data into JSON format, and then save the data in state. That way, when we change pages in the browser, we can just fetch the next page of data and update the state. To do that, we'll use the `useState` and `useEffect` hooks.

Update `client/src/Home.js` to look like this:

```js
import React, { useState, useEffect } from 'react';

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPosts([]);
    window.scrollTo(0, 0);
    fetch(`api/posts/${currentPage}`)
    .then(res => res.json())
    .then(posts => setPosts(posts));
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [props.match.params]);

  console.log('posts: ', posts);

  return (
    <h1>Home</h1>
  );
};

export default Home;
```

> Run `yarn build` now!

In the browser, you still won't see any data - just the "Home" heading should be visible. 

## Creating the Post component

In browser, navigate to `/api` and take a look at the data. You should see an array of 20 entries. Each post contains a _lot_ of data - not just the post content, but which blog created it, which blogs reblogged the post before you, and a lot of metadata.

For now, let's get the type of each post showing on the page

In the Home page, change the return to:

```js
return (
  <div>
    <h1>Home</h1>
    {posts && posts.map(post => <p>{post.type}</p>)}
  </div>
);
```

> Run `yarn build` now!

In the browser, you should see a list of words like "text", "photo", "video" etc. We'll be using these post types to inform our component selection in a little while. But taking a look at the data in `/api` again, I want to draw your attention to the `trail` array in each post.

Tumblr's ecosystem revolves heavily around reblogging, so each post may have had multiple contributors by the time you see it. Every post will have this `trail` array, whether it's been reblogged or not. With that in mind, it's a good idea to make the  `trail` data available in all our posts. So, let's make a `Post` component that we can use for all post types, that shows us the post type and the post trail. We'll swap out the post type for content that depends on the post type later.

Create `/client/src/components/Post.js` and add the following:

```js
import React from 'react';

const Post = ({ post, children }) => {
  let content;
  if (post.trail) content = post.trail.reduce((acc, reblog, index) => {
    acc.push(`<a class="reblog-byline" href="https://${reblog.blog.name}.tumblr.com">${reblog.blog.name}:</a>`);
    acc.push(`<blockquote>${reblog.content_raw}</blockquote>`);
    return acc;
  }, []).join("");

  return (
    <div>
      {children}
      {post.trail && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  );
};

export default Post;
```

We're declaring a variable `content`, that remains empty unless the `post.trail` exists. (Tumblr being what it is, the absence of a trail is an edge case, but it still needs to be covered.) We're running a `.reduce()` on each item in the trail, to return a string of HTML that we then pass into a div (that also doesn't render if `post.trail` is absent). We use the `dangerouslySetInnerHTML` prop to do this - it has [a deliberately scary name](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml), but for our purposes here it's completely safe.

Why `children` though? The child elements that we'll pass into `Post` make up the main content of the original post - the video, if it's a video post, the image or photoset if it's an image post, and so on.

Let's implement `Post` on the Home page:

```js
...
import Post from './components/Post';
...
return (
  <div>
    <h1>Home</h1>
    {posts && posts.map(post => <Post post={post} />)}
  </div>
);
```

> Run `yarn build` now!

That's a lot of "post" right there! The 'Post' component expects a 'post' prop, to which we're sending each 'post' item on the 'posts' array.

We are a long way off from getting the Home page and the Post component into their final forms, but in the next part we'll dig into each of the post types, and get the full content of each post displaying in the browser.
