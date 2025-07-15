import FaIcon from '../FaIcon';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';

import './DarkToggle.scss';

const DarkToggle = ({ darkMode }) => {
  const handleClick = () => darkMode.value ? darkMode.disable() : darkMode.enable();

  return (
    <FaIcon
      className="dark-toggle"
      icon={darkMode.value ? faSun : faMoon}
      onClick={handleClick}
      size="3x"
    />
  );
};

export default DarkToggle;
