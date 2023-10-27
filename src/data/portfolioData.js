const portfolioData = {
  LADbible: {
    title: 'LADbible',
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

  FMBlogr: {
    title: 'FM Blogr',
    caption:
      '<p>This is another <a href="https://www.frontendmentor.io/">Frontend Mentor</a> solution, this time for a publishing platform landing page. It was a good opportunity to practise with CSS Grid. The hardest part was positioning that background image inside the header whilst keeping it responsive!</p>',
    links: [
      {
        text: 'Blogr',
        url: 'https://dentednerd.github.io/fm-blogr-sass',
      },
      {
        text: 'code',
        url: 'https://github.com/dentednerd/fm-blogr-sass',
      },
    ],
    stack: ['Sass', 'JavaScript'],
  },

  FMSpaceTourism: {
    title: 'FM Space Tourism',
    caption:
      '<p>I took this on during my return to work (journal entry forthcoming). It was a good opportunity to learn the basics of NextJS and to play with Sass modules. I don\'t consider this my finest work, but it was a good boost to my confidence after so much time away from code.</p>',
    links: [
      {
        text: 'FM Space Tourism',
        url: 'https://fm-space-tourism-eight.vercel.app/'
      },
      {
        text: 'code',
        url: 'https://github.com/dentednerd/fm-space-tourism'
      }
    ],
    stack: ['React', 'NextJS', 'CSS', 'Sass']
  },

  FMSolutions: {
    title: 'FM Solutions',
    caption:
      '<p><a href="https://www.frontendmentor.io/">Frontend Mentor</a> is a great resource for frontend developers at all levels. They provide challenges with designs, assets and style guides, and your job is to build them. The newbie-level challenges lend themselves to being individual components rather than full pages in their own right, so I\'ve collected my solutions into a single app.</p><p>Each of the challenges has their own repo and deployment; you\'ll be able to find the links in the app.</p>',
    links: [
      {
        text: "Joey's Frontend Mentor Solutions",
        url: 'https://joeysfmsolutions.netlify.app/',
      },
    ],
    stack: ['React'],
  },

  DeSoto: {
    title: 'DeSoto',
    caption:
      '<p>My contribution to Steph Eckles\' <a href="https://stylestage.dev/">StyleStage</a> community project. A chance to stretch my Sass wings, and to get as pernickety as I please about accessibility. Inspired by <a href="https://store.steampowered.com/app/1440440/Sam__Max_Save_the_World/">Sam and Max Save the World</a>.</p>',
    links: [
      {
        text: 'DeSoto',
        url: 'https://stylestage.dev/styles/desoto/'
      },
      {
        text: 'code',
        url: 'https://github.com/dentednerd/desoto'
      }
    ],
    relatedPosts: [
      {
        name: 'DeSoto: a StyleStage contribution',
        slug: '/posts/desoto-stylestage-contribution/',
      },
    ],
    stack: ['CSS', 'Sass'],
  },

  DentedNerdReviews: {
    title: 'Dented Nerd Reviews',
    caption:
      "<p>A small pre-bootcamp project to showcase my HTML and CSS design skills, with a little jQuery animation on the navigation menu.</p><p>I based the design on a Tumblr theme I'd built a couple of years previously, which I've recently revisited and updated to be more responsive. Making Tumblr themes was great practice for my HTML and CSS skills for a number of years, before I made the decision to make web development my career.</p>",
    links: [
      {
        text: 'Dented Nerd Reviews',
        url: 'https://dentednerd.github.io/precourse-section-3/',
      },
      {
        text: 'code',
        url: 'https://github.com/dentednerd/precourse-section-3',
      },
      {
        text: 'Sundae Times demo',
        url: 'https://sundaetimes-theme.tumblr.com/',
      },
      {
        text: 'Sundae Times theme',
        url: 'https://www.tumblr.com/theme/38862'
      }
    ],
    stack: ['HTML', 'CSS', 'jQuery'],
  },

  Pinpin: {
    title: 'Pinpin',
    caption:
      '<p>Every new React developer makes a to-do app, and I\'m no different. But I wanted to take mine one step further, so I turned it into an app that reports the time, date and weather, with some soothing background colours that change throughout the day.</p><p>The weather report relies upon the <a href="https://openweathermap.org/api">OpenWeatherMap API</a>, and the list of thoughts persists in the browser thanks to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</a>.</p>',
    links: [
      {
        text: 'Pinpin',
        url: 'https://pinpin.netlify.app/',
      },
      {
        text: 'code',
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
    caption:
      "<p>During lockdown, playing Stardew Valley brought me a lot of peace. One of the objectives of the game is to befriend your neighbours by bringing them gifts, but trying to remember everyone's birthday and their favourite gifts is almost impossible without constantly flicking through the game wiki.</p><p>So I compiled all the key data into this lightweight, responsive app, using styles, fonts and graphics from the game. In fact, gathering and formatting the data and graphics was the longest part of the dev process by far.</p>",
    links: [
      {
        text: 'Stardew Birthdays',
        url: 'https://stardew-bdays.netlify.app/',
      },
      {
        text: 'code',
        url: 'https://github.com/dentednerd/stardew-birthdays',
      },
    ],
    stack: ['React'],
  },

  CodeNinjas: {
    title: 'Code Ninjas',
    caption:
      '<p>An educational multiple-choice game, created during the final project phase at NC in a team of four. Accessibility was important to our design approach.</p><p>I tried to keep that approach to accessibility in the second version, whilst implementing a cleaner, slicker design, and adding new features such as level select, a progress bar for each level, and more ninja-themed assets!</p>',
    links: [
      {
        text: 'Code Ninjas',
        url: 'https://code-ninjas-dentednerd.netlify.app/',
      },
      {
        text: 'codeninjas-api',
        url: 'https://codeninjas-api.fly.dev/'
      },
      {
        text: 'front end code',
        url: 'https://github.com/dentednerd/CodeNinjas'
      },
      {
        text: 'back end code',
        url: 'https://github.com/dentednerd/CodeNinjasBack'
      }
    ],
    relatedPosts: [
      {
        name: 'Code Ninjas',
        slug: '/posts/code-ninjas/',
      },
    ],
    stack: ['React', 'Redux', 'Express', 'MongoDB'],
  },

  NCNews: {
    title: 'NC News',
    caption:
      "<p>An ERN-stack Reddit clone, created over two sprints at NC.</p><p>The first version of the front end, created near the end of the course, was styled with Bulma. This experience taught me that I prefer not to use CSS frameworks whenever possible. No disrespect to Bulma users, obviously! But it's not for me.</p><p>In version 2, I used this project to demonstrate Docker containerisation to some colleagues, and I took the opportunity to add new functionality, refactor, redesign (replacing Bulma with styled-components), and redeploy.</p><p>In version 3, I completely rebuilt the API in PostgreSQL instead of MongoDB, and also rebuilt the front end using hooks and context instead of Redux, and Stitches instead of styled-components.</p>",
    links: [
      {
        text: 'NC News',
        url: 'https://dentednerds-northcoders-news.netlify.app/',
      },
      {
        text: 'nc-news-finale API',
        url: 'https://nc-news-finale.fly.dev/',
      },
      {
        text: 'front end code',
        url: 'https://github.com/dentednerd/ncnews'
      },
      {
        text: 'back end code',
        url: 'https://github.com/dentednerd/nc-news-sql',
      },
    ],
    stack: ['React', 'Redux', 'Bulma', 'styled-components', 'Stitches', 'Express', 'MongoDB', 'PostgreSQL'],
    relatedPosts: [
      {
        name: 'NC News, revisited',
        slug: '/posts/nc-news-revisited/',
      },
      {
        name: 'The Return of NC News',
        slug: '/posts/the-return-of-nc-news/',
      }
    ],
  },
  HouseofGames: {
    title: 'House of Games',
    caption:
      "<p>Nowadays at NC, the individual project comes in two flavours: the news aggregation site that we all know and love, and a games rating and discussion site. However, the building of either of these projects is now very different to the stack we used when I was on the bootcamp. Instead of a MongoDB database, students now use PostgreSQL. On the front end, React hooks are much easier to grasp than Redux. </p><p>So I took the opportunity to build dentednerd's House of Games, getting more comfortable with SQL in the process, and using a CSS-in-JS library named Stitches for the first time on the front end. This was so successful that I went back and rebuilt NC News for the third time!</p>",
    links: [
      {
        text: "dentednerd's House of Games",
        url: 'https://dentednerds-house-of-games.netlify.app/',
      },
      {
        text: 'nc-games-finale API',
        url: 'https://nc-games-finale.fly.dev/',
      },
      {
        text: 'front end code',
        url: 'https://github.com/dentednerd/house-of-games'
      },
      {
        text: 'back end code',
        url: 'https://github.com/dentednerd/nc-games-sql'
      }
    ],
    stack: ['React', 'Stitches', 'Express', 'PostgreSQL'],
    relatedPosts: [
      {
        name: 'The Return of NC News',
        slug: '/posts/the-return-of-nc-news/',
      }
    ],
  },

};

export default portfolioData;
