import {
  faCodepen,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import FaIcon from '../atoms/FaIcon';

const Codepen = () => <FaIcon icon={faCodepen} />;
const ExtLink = () => <FaIcon icon={faExternalLinkAlt} />;
const Github = () => <FaIcon icon={faGithub} />;
const LinkedIn = () => <FaIcon icon={faLinkedin} />;

export {
  Codepen, ExtLink, Github, LinkedIn
};

