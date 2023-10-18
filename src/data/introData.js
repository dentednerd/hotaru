import React from 'react';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { Late, Remote, Programmer } from '../assets/undraws';

const introData = [
  {
    content:
      "<h2>Hello, I'm Joey.</h2><p>I'm a software engineer, specialising in React and React Native. My favourite thing about web development is that there's always something new to learn. Every day's a school day.</p>",
      link: '/portfolio',
      icon: faLaptopCode,
      text: "See the projects I've worked on.",
      svg: <Remote />,
  },
  {
    content:
      "<h2>I've been writing code for a long time.</h2><p>I wrote my first program in BASIC on my dad's Amiga 500 when I was seven. At fourteen, I made my first website. By fifteen, I'd taught myself HTML, CSS, Flash and Photoshop. For a long time after that, I made themes for blogging platforms as a hobby - first Blogger, then Tumblr.</p>",
      link: '/experience',
      icon: faHistory,
      text: 'Take a trip through my work history.',
      svg: <Programmer />,
  },
  {
    content:
      "<h2>I'm a career changer.</h2><p>In 2017, I won a women in tech scholarship to <a href='http://www.northcoders.com'>Northcoders</a>, and trained as a JavaScript developer. My career in tech progressed from there, and right now I'm a consultant with Accenture Next Gen Engineering.</p>",
      link: '/showreel',
      icon: faYoutube,
      text: 'Watch me talking tech.',
      svg: <Late />,
  },
];

export default introData;
