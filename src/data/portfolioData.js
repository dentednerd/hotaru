const portfolioData = {
  LADbible: {
    title: 'LADbible',
    category: 'LBG',
    caption:
      "<p>A single dynamic React-based platform powers the whole LADbible family of websites.</p><p>Different variants of the LADbible homepage are displayed to viewers in Australia and Ireland. After GAMINGbible's success in displaying five articles per page, we implemented it for LADbible articles too.</p>",
    links: [
      {
        text: 'LADbible',
        url: 'https://www.ladbible.com',
      },
    ],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },

  UNILAD: {
    title: 'UNILAD',
    category: 'LBG',
    caption:
      '<p>A single dynamic React-based platform powers the whole LADbible family of websites.</p><p>UNILAD runs on a Wordpress CMS separately from the other channels, and its design and branding are very different from the other channels.</p>',
    links: [
      {
        text: 'UNILAD',
        url: 'https://www.unilad.co.uk',
      },
    ],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },

  GAMINGbible: {
    title: 'GAMINGbible',
    category: 'LBG',
    caption:
      '<p>A single dynamic React-based platform powers the whole LADbible family of websites.</p><p>GAMINGbible is the most recent addition to the LADbible Group websites, bringing in new features such as multiple articles per screen whose adverts update on scroll, and a fully animated menu on mobile devices.</p>',
    links: [
      {
        text: 'GAMINGbible',
        url: 'https://www.gamingbible.co.uk',
      },
    ],
    relatedPosts: [
      {
        name: "Medium: Let's go, gamers: how we built the GAMINGbible menu",
        slug: '/posts/lets-go-gamers/',
      },
    ],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },

  Tyla: {
    title: 'Tyla',
    category: 'LBG',
    caption:
      '<p>A single dynamic React-based platform powers the whole LADbible family of websites.</p><p>Tyla was the first channel to move onto the new platform that we started building in the autumn of 2018, but has since gone through a full rebranding and redesign, including a name change.</p><p>My favourite stylistic feature is the swipe animation on the navbar links.</p>',
    links: [
      {
        text: 'Tyla',
        url: 'https://www.tyla.com',
      },
      {
        text: 'my Tyla swipe effect Codepen',
        url: 'https://codepen.io/dentednerd/pen/WNNbwEo',
      },
    ],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },

  SPORTbible: {
    title: 'SPORTbible',
    category: 'LBG',
    caption:
      '<p>A single dynamic React-based platform powers the whole LADbible family of websites.</p><p>SPORTbible was the first channel to which we added video and Twitter feeds on the homepage.</p>',
    links: [
      {
        text: 'SPORTbible',
        url: 'https://www.sportbible.com',
      },
    ],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },

  CodeNinjas: {
    title: 'Code Ninjas',
    category: 'NC',
    caption:
      '<p>An educational multiple-choice game, created during the final project phase at Northcoders in a team of four. Accessibility was important to our design approach.</p><p>I tried to keep that approach to accessibility in the second version, whilst implementing a cleaner, slicker design, and adding new features such as level select, a progress bar for each level, and more ninja-themed assets!</p>',
    links: [
      {
        text: 'Code Ninjas v2 (after Northcoders)',
        url: 'https://codeninjas-v2.herokuapp.com/',
      },
      {
        text: 'Code Ninjas v1 (Northcoders)',
        url: 'https://codeninjas-nc5.herokuapp.com/',
      },
      {
        text: 'Code Ninjas API',
        url: 'https://codeninjas-api.herokuapp.com/api'
      }
    ],
    relatedPosts: [
      {
        name: 'Code Ninjas: revisiting Northcoders project phase',
        slug: '/posts/code-ninjas/',
      },
    ],
    stack: ['React', 'Redux', 'Express', 'MongoDB'],
  },

  NorthcodersNews: {
    title: 'Northcoders News',
    category: 'NC',
    caption:
      "<p>An ERN-stack Reddit clone, created over two sprints at Northcoders.</p><p>The first version of the front end, created near the end of the course, was styled with Bulma. This experience taught me that I prefer not to use CSS frameworks whenever possible. No disrespect to Bulma users, obviously! But it's not for me.</p><p>In version 2, I used this project to demonstrate Docker containerisation to some colleagues, and I took the opportunity to add new functionality, refactor, redesign (replacing Bulma with styled-components), and redeploy.</p><p>In version 3, I completely rebuilt the API in PostgreSQL instead of MongoDB, and also rebuilt the front end using hooks and context instead of Redux, and Stitches instead of styled-components.</p>",
    links: [
      {
        text: 'Northcoders News',
        url: 'https://dentednerds-northcoders-news.netlify.app/',
      },
      {
        text: 'v3 code on Github',
        url: 'https://github.com/dentednerd/nc-news-3'
      },
      {
        text: 'v2 code on Github',
        url: 'https://github.com/dentednerd/NorthcodersNewsDocker',
      },
      {
        text: 'v1 code on Github',
        url: 'https://github.com/dentednerd/NorthcodersNews',
      },
    ],
    stack: ['React', 'Redux', 'Bulma', 'styled-components', 'Stitches', 'Express', 'MongoDB', 'PostgreSQL'],
    relatedPosts: [
      {
        name: 'Northcoders News, revisited',
        slug: '/posts/northcoders-news-revisited/',
      },
      {
        name: 'The Return of Northcoders News',
        slug: '/posts/the-return-of-northcoders-news/',
      }
    ],
  },
  HouseofGames: {
    title: 'House of Games',
    category: 'NC',
    caption:
      "<p>Nowadays at Northcoders, the NC News sprint comes in two flavours: the news aggregation site that we all know and love, and a games rating and discussion site. However, the building of either of these projects is now very different to the stack we used when I was on the bootcamp. Instead of a MongoDB database, students now use PostgreSQL. On the front end, React hooks are much easier to grasp than Redux. </p><p>So I took the opportunity to build dentednerd's House of Games, getting more comfortable with SQL in the process, and using a CSS-in-JS library named Stitches for the first time on the front end. This was so successful that I went back and rebuilt NC News for the third time!</p>",
    links: [
      {
        text: "dentednerd's House of Games",
        url: 'https://dentednerds-house-of-games.netlify.app/',
      },
      {
        text: 'code on Github',
        url: 'https://github.com/dentednerd/house-of-games'
      },
    ],
    stack: ['React', 'Stitches', 'Express', 'PostgreSQL'],
    relatedPosts: [
      {
        name: 'The Return of Northcoders News',
        slug: '/posts/the-return-of-northcoders-news/',
      }
    ],
  },
  TrellJo: {
    title: 'TrellJo',
    category: 'NC',
    caption:
      "<p>A bare-bones Trello clone, created at Northcoders.</p><p>Most developers starting out in React will create a to-do list app fairly early on so as to learn the fundamentals of state management, so the Trello clone felt like the next logical step. I tried not to deviate the design too much from Trello's own, but at the time I was very proud of that stripy background.</p><p>The work I did on TrellJo informed a lot of what I did on Pinpin later on.</p>",
    links: [
      {
        text: 'TrellJo',
        url: 'https://dentednerd.github.io/Trell-Jo/',
      },
      {
        text: 'code on Github',
        url: 'https://github.com/dentednerd/Trell-Jo',
      },
    ],
    stack: ['React', 'Bulma'],
  },

  Northwitter: {
    title: 'Northwitter',
    category: 'NC',
    caption:
      "<p>A Twitter clone, based on a mock API, and created at Northcoders.</p><p>I really liked the idea of a cute, pastel version of Twitter. You may have noticed that pastel colour schemes have very much become my personal aesthetic ever since.</p><p>This was the first project in which I'd ever used a CSS framework. I can absolutely see why they're useful, particularly if you're just starting out in CSS, but for me, they feel a bit restrictive.</p><p>(Yep, this has the same stripy background as TrellJo!)</p>",
    links: [
      {
        text: 'Northwitter',
        url: 'https://dentednerd.github.io/Northwitter/',
      },
      {
        text: 'code on Github',
        url: 'https://github.com/dentednerd/Northwitter',
      },
    ],
    stack: ['React', 'Bootstrap'],
  },

  DentedNerdReviews: {
    title: 'Dented Nerd Reviews',
    category: 'NC',
    caption:
      "<p>A small pre-Northcoders project to showcase my HTML and CSS design skills, with a little jQuery animation on the navigation menu.</p><p>I based the design on a Tumblr theme I'd built a couple of years previously, which I've recently revisited and updated to be more responsive. Making Tumblr themes was great practice for my HTML and CSS skills for a number of years, before I made the decision to make web development my career.</p>",
    links: [
      {
        text: 'Dented Nerd Reviews',
        url: 'https://dentednerd.github.io/precourse-section-3/',
      },
      {
        text: 'code on Github',
        url: 'https://github.com/dentednerd/precourse-section-3',
      },
      {
        text: 'Sundae Times Tumblr theme demo',
        url: 'https://sundaetimes-theme.tumblr.com/',
      },
    ],
    stack: ['HTML', 'CSS', 'jQuery'],
  },

  Pinpin: {
    title: 'Pinpin',
    category: 'JI',
    caption:
      '<p>Every new React developer makes a to-do app, and I\'m no different. But I wanted to take mine one step further, so I turned it into an app that reports the time, date and weather, with some soothing background colours that change throughout the day.</p><p>The weather report relies upon the <a href="https://openweathermap.org/api">OpenWeatherMap API</a>, and the list of thoughts persists in the browser thanks to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</a>.</p>',
    links: [
      {
        text: 'Pinpin',
        url: 'https://pinpin.netlify.app/',
      },
      {
        text: 'code on Github',
        url: 'https://github.com/dentednerd/pinpin',
      },
    ],
    relatedPosts: [
      {
        name: 'Pinpin: a calming new tab for Chrome',
        slug: '/posts/pinpin/',
      },
    ],
    stack: ['React'],
  },

  StardewBirthdays: {
    title: 'Stardew Birthdays',
    category: 'JI',
    caption:
      "<p>During lockdown, playing Stardew Valley brought me a lot of peace. One of the objectives of the game is to befriend your neighbours by bringing them gifts, but trying to remember everyone's birthday and their favourite gifts is almost impossible without constantly flicking through the game wiki.</p><p>So I compiled all the key data into this lightweight, responsive app, using styles, fonts and graphics from the game. In fact, gathering and formatting the data and graphics was the longest part of the dev process by far.</p>",
    links: [
      {
        text: 'Stardew Birthdays',
        url: 'https://stardew-bdays.netlify.app/',
      },
      {
        text: 'code on Github',
        url: 'https://github.com/dentednerd/stardew-birthdays',
      },
    ],
    stack: ['React'],
  },

  FMSolutions: {
    title: 'FM Solutions',
    category: 'JI',
    caption:
      '<p><a href="https://www.frontendmentor.io/">Frontend Mentor</a> is a great resource for frontend developers at all levels. They provide challenges with designs, assets and style guides, and your job is to build them. The newbie-level challenges lend themselves to being individual components rather than full pages in their own right, so I\'ve collected my solutions into a single app.</p><p>Each of the challenges has their own repo and deployment; you\'ll be able to find the links in the app.</p>',
    links: [
      {
        text: "Joey's Frontend Mentor Solutions",
        url: 'https://joeysfmsolutions.netlify.app/',
      },
      {
        text: 'my Frontend Mentor profile',
        url: 'https://www.frontendmentor.io/profile/dentednerd',
      },
    ],
    stack: ['React'],
  },

  FMBlogr: {
    title: 'FM Blogr',
    category: 'JI',
    caption:
      '<p>This is another <a href="https://www.frontendmentor.io/">Frontend Mentor</a> solution, this time for a publishing platform landing page. It was a good opportunity to practise with CSS Grid. The hardest part was positioning that background image inside the header whilst keeping it responsive!</p>',
    links: [
      {
        text: 'Blogr',
        url: 'https://dentednerd.github.io/fm-blogr-sass',
      },
      {
        text: 'code on Github',
        url: 'https://github.com/dentednerd/fm-blogr-sass',
      },
    ],
    stack: ['Sass', 'JavaScript'],
  },
};

export default portfolioData;
