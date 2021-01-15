export default [
  {
    title: 'LADbible (iOS/Android)',
    caption: '<p>Delivering editorial and video content to iOS and Android devices. We took our cues from a legacy app built in Swift, and rebuilt in React Native using Expo. For most of us on the team, this was our first experience with React Native and mobile development. It continues to be a great learning experience, especially as we work to optimise performance across devices.</p>',
    links: [
      {
        text: 'install LADbible on iOS',
        url: 'https://apple.co/2DDLgTu',
      },
      {
        text: 'install LADbible on Android',
        url: 'https://play.google.com/store/apps/details?id=com.ladbiblegroup.LADbible',
      },
    ],
    images: ['LADAPP2', 'LADAPP1'],
    stack: ['React Native', 'GraphQL'],
    mobile: true,
  },
  {
    title: 'LADbible (web)',
    caption: '<p>A single dynamic React-based platform powers the whole LADbible family of websites.</p><p>Each channel has its own unique features - UNILAD, in particular, runs on a Wordpress CMS separately from the other channels, and its design and branding are very different from the other channels.</p><p>GAMINGbible is our most recent project, showcasing some ambitious designs from which we hope to apply elements to our other sites. LADbible displays different variants of its design in Australia and Ireland. Tyla was the first channel to move onto the new platform, but has since gone through a full rebranding, including a name change. SPORTbible was the first channel to which we added video and Twitter feeds on the homepage.</p>',
    links: [
      {
        text: 'LADbible',
        url: 'https://www.ladbible.com',
      },
      {
        text: 'GAMINGbible',
        url: 'https://www.gamingbible.co.uk',
      },
      {
        text: 'UNILAD',
        url: 'https://www.unilad.co.uk',
      },
      {
        text: 'Tyla',
        url: 'https://www.tyla.com',
      },
      {
        text: 'SPORTbible',
        url: 'https://www.sportbible.com',
      },
      {
        text: 'my Tyla swipe effect Codepen',
        url: 'https://codepen.io/dentednerd/pen/WNNbwEo',
      },
    ],
    images: ['SPORT', 'Tyla', 'UNILAD', 'GAMING', 'LAD'],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },
  {
    title: 'Pinpin',
    caption: '<p>A Chrome new tab extension, built with React.</p><p>Every new React developer makes a to-do app, and I\'m no different. But I wanted to take mine one step further, so I turned it into a friendly extension for Chrome, with some soothing background colours that change throughout the day.</p><p>(I haven\'t deployed it to the Chrome web store yet, but the code is available for you to view.)</p>',
    links: [
      {
        text: 'the Pinpin repo',
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
  {
    title: 'Code Ninjas',
    caption: '<p>An educational multiple-choice game, created during the final project phase at Northcoders in a team of four. Accessibility was important to our design approach.</p><p>I tried to keep that approach to accessibility in the second version, whilst implementing a cleaner, slicker design, and adding new features such as level select, a progress bar for each level, and more ninja-themed assets!</p>',
    links: [
      {
        text: 'Code Ninjas v2',
        url: 'https://codeninjas-v2.herokuapp.com',
      },
      {
        text: 'Code Ninjas v1',
        url: 'https://codeninjas-nc5.herokuapp.com',
      },
    ],
    images: ['CodeNinjas', 'CodeNinjas2'],
    relatedPosts: [
      {
        name: 'Code Ninjas: revisiting Northcoders project phase',
        slug: '/posts/code-ninjas/',
      },
    ],
    stack: ['React', 'Redux', 'Express', 'MongoDB'],
  },
  {
    title: 'Northcoders News',
    caption: '<p>A MERN-stack Reddit clone, created over two sprints at Northcoders.</p><p>The first version, created near the end of the course, was styled with Bulma. This experience taught me that I prefer not to use CSS frameworks whenever possible. No disrespect to Bulma users, obviously! But it\'s not for me.</p><p>Much later, I used this project to demonstrate Docker containerisation to some colleagues, and I took the opportunity to add new functionality, refactor, redesign (without Bulma this time), and redeploy.</p>',
    links: [
      {
        text: 'Northcoders News v2',
        url: 'https://northcoders-news-dentednerd-v2.herokuapp.com',
      },
      {
        text: 'Northcoders News v1',
        url: 'https://northcoders-news-dentednerd.herokuapp.com',
      },
    ],
    images: ['NCNews', 'NCNewsv2'],
    stack: ['React', 'Redux', 'Bulma', 'Express', 'MongoDB'],
    relatedPosts: [
      {
        name: 'Northcoders News, revisited',
        slug: '/posts/northcoders-news-revisited/',
      },
    ],
  },
  {
    title: 'TrellJo',
    caption: '<p>A bare-bones Trello clone, created at Northcoders.</p><p>Most developers starting out in React will create a to-do list app fairly early on so as to learn the fundamentals of state management, so the Trello clone felt like the next logical step. I tried not to deviate the design too much from Trello\'s own, but at the time I was very proud of that stripy background.</p><p>The work I did on TrellJo informed a lot of what I did on Pinpin later on.</p>',
    links: [
      {
        text: 'TrellJo',
        url: 'https://dentednerd.github.io/Trell-Jo/',
      },
    ],
    images: ['TrellJo'],
    stack: ['React', 'Bulma'],
  },
  {
    title: 'Northwitter',
    caption: '<p>A Twitter clone, based on a mock API, and created at Northcoders.</p><p>I really liked the idea of a cute, pastel version of Twitter. You may have noticed that pastel colour schemes have very much become my personal aesthetic ever since.</p><p>This was the first project in which I\'d ever used a CSS framework. I can absolutely see why they\'re useful, particularly if you\'re just starting out in CSS, but for me, they feel a bit restrictive.</p><p>(Yep, this has the same stripy background as TrellJo!)</p>',
    links: [
      {
        text: 'Northwitter',
        url: 'https://dentednerd.github.io/Northwitter/',
      },
    ],
    images: ['Northwitter'],
    stack: ['React', 'Bootstrap'],
  },
  {
    title: 'Dented Nerd Reviews',
    caption: '<p>A small pre-Northcoders project to showcase my HTML and CSS design skills, with a little jQuery animation on the navigation menu.</p><p>I based the design on a Tumblr theme I\'d built a couple of years previously, which I\'ve recently revisited and updated to be more responsive. Making Tumblr themes was great practice for my HTML and CSS skills for a number of years, before I made the decision to make web development my career.</p>',
    links: [
      {
        text: 'Dented Nerd Reviews',
        url: 'https://dentednerd.github.io/precourse-section-3/',
      },
      {
        text: 'Sundae Times theme demo',
        url: 'https://sundaetimes-theme.tumblr.com/',
      },
    ],
    images: ['DNReviews'],
    stack: ['HTML', 'CSS', 'jQuery'],
  },
];
