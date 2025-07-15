import { Codepen, Github, LinkedIn } from '../../assets/icons';

import "./ContactIcons.scss";

const icons = [
  {
    link: 'https://www.linkedin.com/in/joey-imlay-4a7a7056/',
    icon: <LinkedIn />,
    alt: 'LinkedIn',
  },
  {
    link: 'https://github.com/dentednerd',
    icon: <Github />,
    alt: 'Github',
  },
  {
    link: 'https://codepen.io/dentednerd',
    icon: <Codepen />,
    alt: 'Codepen',
  },
];

const ContactIcons = () => (
  <div className="contact-icons">
    {icons.map((icon) => (
      <a
        href={icon.link}
        key={icon.link}
        aria-label={`Visit my ${icon.alt} profile`}
      >
        {icon.icon}
      </a>
    ))}
  </div>
);

export default ContactIcons;
