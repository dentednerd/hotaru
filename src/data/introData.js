import React from 'react';
import { faLaptopCode, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { Late, Remote, Programmer } from '../assets/undraws';

const introData = [
  {
    content:
      "<h2>Hello, I'm Joey.</h2><p>I'm a front-end software engineer, <a href='https://medium.com/@jo.imlay'>writer</a> and <a href='https://noti.st/dentednerd'>speaker</a>. I make beautiful, accessible, and highly performant websites.</p>",
      link: '/portfolio',
      icon: faLaptopCode,
      text: "Browse my portfolio.",
      svg: <Remote />,
      color: 'background'
  },
  {
    content:
      "<h2>I started young.</h2><p>I wrote my first program in BASIC aged seven. By fifteen, I was building websites. I made themes for blogging platforms as a hobby until 2017, when I was awarded a women in tech scholarship to a JavaScript bootcamp.</p>",
      link: '/journal',
      icon: faPencilAlt,
      text: 'Read my journal.',
      svg: <Programmer />,
      color: 'bg2'
  },
  {
    content:
      "<h2>Community is everything.</h2><p>Mentoring, accessibility, mental health - and, of course, getting technical about the cool things I've made. These are the sorts of topics I speak about at events.</p>",
      link: '/speaking',
      icon: faYoutube,
      text: 'Watch me talking tech.',
      svg: <Late />,
      color: 'bg3'
  },
];

export default introData;
