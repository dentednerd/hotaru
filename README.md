# joanneimlay.dev

My resume, portfolio and blog, built in [Gatsby](https://www.gatsbyjs.org/) and hosted on [Netlify](https:///www.netlify.com).

[![Netlify Status](https://api.netlify.com/api/v1/badges/5dafda63-13c3-41e3-bd7d-68c386fca16f/deploy-status)](https://app.netlify.com/sites/joanneimlay/deploys)

## Installation

```sh
git clone https://github.com/dentednerd/CV.git
cd ./CV
yarn
```

## Usage

```sh
yarn develop
```

In browser, navigate to [localhost:8000](http://localhost:8000).

## File Structure

    .
    ├── .cache
    ├── node_modules
    ├── public
    ├── src
        ├── atoms
        ├── molecules
        ├── organisms
        ├── pages
        ├── posts
        └── templates
    ├── .gitignore
    ├── .prettierrc
    ├── CNAME
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn.lock

## Deployment

```sh
yarn deploy
```

## To Do

* Figure out bugs with media
