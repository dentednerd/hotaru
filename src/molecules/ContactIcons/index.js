import React from 'react';

const icons = [
  {
    link: 'mailto:jo.imlay@gmail.com',
    image: 'new-post',
    alt: 'Mail',
  },
  {
    link: 'https://twitter.com/dentednerd',
    image: 'twitter-circled',
    alt: 'Twitter',
  },
  {
    link: 'https://www.linkedin.com/in/joanne-imlay-4a7a7056/',
    image: 'linkedin',
    alt: 'LinkedIn',
  },
  {
    link: 'https://github.com/dentednerd',
    image: 'github',
    alt: 'Github',
  },
];

const ContactIcons = () => icons.map(icon => (
  <a href={icon.link} key={icon.link}>
    <img
      src={`https://img.icons8.com/bubbles/64/000000/${icon.image}.png`}
      alt={icon.alt}
    />
  </a>
));

export default ContactIcons;
