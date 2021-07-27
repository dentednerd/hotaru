import React from 'react';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { ThemeContext } from '../../organisms/ThemeContext';
import FaIcon from '../FaIcon';
import { colors } from '../../tokens';


const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  const handleClick = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <FaIcon icon={colorMode === 'light' ? faMoon : faSun} size="3x" onClick={handleClick} style={{ color: colors.constants.purple }} />
  );
};

export default DarkToggle;
