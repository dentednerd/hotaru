export default [
  {
    title: 'LADbible mobile app',
    caption: '<p>Delivering editorial and video content to iOS and Android devices.</p><p>We took our cues from a legacy app built in Swift, and rebuilt in React Native using Expo. For most of us on the team, this was our first experience with React Native and mobile development. It\'s been  - continues to be - a great learning experience, especially around performance across devices.</p>',
    links: [
      {
        text: 'install LADbible on iOS',
        url: 'https://apple.co/2DDLgTu'
      },
      {
        text: 'install LADbible on Android (soon)',
        url: ''
      }
    ],
    images: ['LADAPP1', 'LADAPP2'],
    stack: ['React Native', 'GraphQL'],
  },
  {
    title: 'LADbible web apps',
    caption: '<p>A single dynamic React-based platform powers the whole LADbible family of websites.</p><p>Each channel has its own unique features - UNILAD, in particular, runs on a Wordpress CMS separately from the other channels, and its design and branding are very different from the other channels.</p><p>LADbible displays different variants of its design in Australia and Ireland. Tyla was the first channel to move onto the new platform, but has since gone through a full rebranding, including a name change. SPORTbible was the first channel to which we added video and Twitter feeds on the homepage.</p>',
    links: [
      {
        text: 'visit LADbible', 
        url: 'https://www.ladbible.com'
      },
      {
        text: 'visit UNILAD',
        url: 'https://www.unilad.co.uk'
      },
      {
        text: 'visit Tyla',
        url: 'https://www.tyla.com'
      },
      {
        text: 'visit SPORTbible',
        url: 'https://www.sportbible.com'
      },
      {
        text: 'visit my Tyla swipe effect Codepen',
        url: 'https://codepen.io/dentednerd/pen/WNNbwEo'
      }
    ],
    images: ['LAD', 'UNILAD', 'Tyla', 'SPORT'],
    stack: ['React', 'Apollo', 'Koa', 'GraphQL'],
  },
  {
    title: 'Code Ninjas',
    caption: '<p>An educational multiple-choice game, created during the final project phase at Northcoders in a team of four. Accessibility was important to our design approach.</p><p>I tried to keep that approach to accessibility in the second version, whilst implementing a cleaner, slicker design, and adding new features such as level select, a progress bar for each level, and more ninja-themed assets!</p>',
    links: [
      {
        text: 'visit Code Ninjas v2',
        url: 'https://codeninjas-v2.herokuapp.com'
      },
      {
        text: 'visit Code Ninjas v1',
        url: 'https://codeninjas-nc5.herokuapp.com',
      }
    ],
    images: ['CodeNinjas2', 'CodeNinjas'],
    relatedPosts: [
      {
        name: 'Code Ninjas: revisiting Northcoders project phase',
        slug: '/posts/code-ninjas/',
      },
    ],
    stack: ['React', 'Redux', 'Express', 'MongoDB']
  },
  {
    title: 'Northcoders News',
    caption: '<p>A MERN-stack Reddit clone, created over two sprints at Northcoders.</p><p>The first version, created near the end of the course, was styled with Bulma. I\'ve learned that CSS frameworks aren\`t my favourite - I guess I\'m too much of a control freak when it comes to CSS.</p><p>Much later, I used this project to demonstrate Docker containerisation to some colleagues, and I took the opportunity to add new functionality, refactor, redesign (without Bulma this time), and redeploy.</p>',
    links: [
      {
        text: 'visit Northcoders News v2',
        url: 'https://northcoders-news-dentednerd-v2.herokuapp.com'
      },
      {
        text: 'visit Northcoders News v1',
        url: 'https://northcoders-news-dentednerd.herokuapp.com'
      }
    ],
    images: ['NCNewsv2', 'NCNews'],
    stack: ['React', 'Redux', 'Express', 'MongoDB'],
    relatedPosts: [
      {
        name: 'Northcoders News, revisited',
        slug: '/posts/northcoders-news-revisited/',
      },
    ],
  },
  {
    title: 'TrellJo',
    caption: '<p>A bare-bones Trello clone, created at Northcoders.</p><p>Most developers starting out in React will create a to-do list app fairly early on, so the Trello clone felt like the next logical step. I tried not to deviate the design too much from Trello\'s own, but at the time I was very proud of that stripy background.</p><p>The work I did on TrellJo inspired much of a later project - a Chrome extension called Pinpin.</p>',
    links: [
      {
        text: 'visit TrellJo',
        url: 'https://dentednerd.github.io/Trell-Jo/'
      }
    ],
    images: ['TrellJo'],
    stack: ['React', 'Bulma'],
  },
  {
    title: 'Northwitter',
    caption: '<p>A Twitter clone, based on a mock API, and created at Northcoders.</p><p>I really liked the idea of a cute, pastel version of Twitter. You may have noticed that pastel colour schemes have very much become my personal aesthetic ever since.</p><p>This was the first project in which I\'d ever used a CSS framework. I can absolutely see why they\'re useful, particularly if you\'re just starting out in CSS, but for me, they feel a bit restrictive.</p><p>(Yep, this has the same stripy background as TrellJo!)</p>',
    links: [
      {
        text: 'visit Northwitter',
        url: 'https://dentednerd.github.io/Northwitter/'
      }
    ],
    images: ['Northwitter'],
    stack: ['React', 'Bootstrap']
  },
  {
    title: 'Dented Nerd Reviews',
    caption: '<p>A small pre-Northcoders project to showcase my HTML and CSS design skills, with a little jQuery animation on the navigation menu.</p><p>I based the design on a Tumblr theme I\'d built a couple of years previously, which I\`ve recently revisited and updated to be more responsive. Making Tumblr themes was great practice for my HTML and CSS skills for a number of years, before I made the decision to make web development my career.</p>',
    links: [
      {
        text: 'visit Dented Nerd Reviews',
        url: 'https://dentednerd.github.io/precourse-section-3/'
      },
      {
        text: 'visit Sundae Times theme demo',
        url: 'https://sundaetimes-theme.tumblr.com/'
      }
    ],
    images: ['DNReviews'],
    stack: ['HTML', 'CSS', 'jQuery']
  },
];
