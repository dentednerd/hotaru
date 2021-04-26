export default {
  // ladapp: {
  //   title: 'LADbible (iOS/Android)',
  //   caption: '<p>Delivering editorial and video content to iOS and Android devices.</p><p>We took our cues from a legacy app built in Swift, and rebuilt in React Native using Expo. For most of us on the team, this was our first experience with React Native and mobile development. It\'s been  - continues to be - a great learning experience, especially around performance across devices.</p>',
  //   links: [
  //     {
  //       text: 'install LADbible on iOS',
  //       url: 'https://apple.co/2DDLgTu',
  //     },
  //     {
  //       text: 'install LADbible on Android',
  //       url: 'https://play.google.com/store/apps/details?id=com.ladbiblegroup.LADbible',
  //     },
  //   ],
  //   images: ['BumblebeeHome', 'BumblebeeArticles', 'BumblebeeVideos', 'BumblebeeBundles', 'BumblebeeBundleVideo'],
  //   stack: ['React Native', 'GraphQL'],
  //   mobile: true,
  // },

  ladbible: {
    title: 'LADbible',
    category: 'LBG',
    caption:
      "<p>A single dynamic React-based platform powers the whole LADbible family of websites.</p><p>Different variants of the LADbible homepage are displayed to viewers in Australia and Ireland. Since GAMINGbible's success in displaying five articles per page, we've recently implemented it for LADbible articles too.</p>",
    links: [
      {
        text: 'LADbible',
        url: 'https://www.ladbible.com',
      },
    ],
    images: ['LAD'],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },

  unilad: {
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
    images: ['UNILAD'],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },

  gamingbible: {
    title: 'GAMINGbible',
    category: 'LBG',
    caption:
      '<p>A single dynamic React-based platform powers the whole LADbible family of websites.</p><p>GAMINGbible is our most recent project, bringing in new features such as multiple articles per screen whose adverts update on scroll, and a fully animated menu on mobile devices.</p>',
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
    images: ['GAMING'],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },

  tyla: {
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
    images: ['Tyla'],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },

  sportbible: {
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
    images: ['SPORT', 'Tyla', 'UNILAD', 'GAMING', 'LAD'],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },

  codeninjas: {
    title: 'Code Ninjas',
    category: 'NC',
    caption:
      '<p>An educational multiple-choice game, created during the final project phase at Northcoders in a team of four. Accessibility was important to our design approach.</p><p>I tried to keep that approach to accessibility in the second version, whilst implementing a cleaner, slicker design, and adding new features such as level select, a progress bar for each level, and more ninja-themed assets!</p>',
    links: [
      {
        text: 'v2 code on Github',
        url: 'https://github.com/dentednerd/CodeNinjasv2',
      },
      {
        text: 'v1 code on Github',
        url: 'https://github.com/dentednerd/CodeNinjas',
      },
    ],
    images: ['CodeNinjas2', 'CodeNinjas'],
    relatedPosts: [
      {
        name: 'Code Ninjas: revisiting Northcoders project phase',
        slug: '/posts/code-ninjas/',
      },
    ],
    stack: ['React', 'Redux', 'Express', 'MongoDB'],
  },

  ncnews: {
    title: 'Northcoders News',
    category: 'NC',
    caption:
      "<p>A MERN-stack Reddit clone, created over two sprints at Northcoders.</p><p>The first version, created near the end of the course, was styled with Bulma. This experience taught me that I prefer not to use CSS frameworks whenever possible. No disrespect to Bulma users, obviously! But it's not for me.</p><p>Much later, I used this project to demonstrate Docker containerisation to some colleagues, and I took the opportunity to add new functionality, refactor, redesign (without Bulma this time), and redeploy.</p>",
    links: [
      {
        text: 'v2 code on Github',
        url: 'https://github.com/dentednerd/NorthcodersNewsDocker',
      },
      {
        text: 'v1 code on Github',
        url: 'https://github.com/dentednerd/NorthcodersNews',
      },
    ],
    images: ['NCNewsv2', 'NCNews'],
    stack: ['React', 'Redux', 'Bulma', 'Express', 'MongoDB'],
    relatedPosts: [
      {
        name: 'Northcoders News, revisited',
        slug: '/posts/northcoders-news-revisited/',
      },
    ],
  },

  trelljo: {
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
    images: ['TrellJo'],
    stack: ['React', 'Bulma'],
  },

  northwitter: {
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
    images: ['Northwitter'],
    stack: ['React', 'Bootstrap'],
  },

  dnreviews: {
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
    images: ['DNReviews'],
    stack: ['HTML', 'CSS', 'jQuery'],
  },

  pinpin: {
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
    images: ['PinpinDay', 'PinpinDusk'],
    relatedPosts: [
      {
        name: 'Pinpin: a calming new tab for Chrome',
        slug: '/posts/pinpin/',
      },
    ],
    stack: ['React'],
  },

  stardew: {
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
    images: ['Stardew'],
    stack: ['React'],
  },

  frontend: {
    title: 'FM: Solutions',
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
    images: ['Frontend'],
    stack: ['React'],
  },

  blogr: {
    title: 'FM: Blogr',
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
    images: ['Blogr'],
    stack: ['Sass', 'JavaScript'],
  },
};
