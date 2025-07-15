import { Link } from 'gatsby';

import ContactIcons from '../../molecules/ContactIcons';
import MixedText from '../../atoms/MixedText';
import { Remote } from '../../assets/undraws';

import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="flex-container align-to-start">
      <div className="name">
        <Link to="/">
          <h1>Joey Imlay</h1>
        </Link>
        <ContactIcons />

          <MixedText>
            Hello there! I'm a <span>senior front end engineer</span> in{' '}
            <span>Manchester, England</span>, experienced in{' '}
            <span>design systems</span>, <span>accessibility</span> and{' '}
            <span>Scrum</span>.
          </MixedText>

      </div>
      <Remote id="illustration" />
    </div>
  </header>
);

export default Header;
