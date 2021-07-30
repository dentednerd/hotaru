import React from 'react';
import styled from '@emotion/styled';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { ThemeContext } from '../../organisms/ThemeContext';
import FaIcon from '../FaIcon';
import { colors } from '../../tokens';

const ToggleIcon = styled(FaIcon)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  color: ${colors.constants.purple};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
    color: var(--color-link);
    transition: all 0.2s ease-in-out;
  }
`;

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  const handleClick = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ToggleIcon icon={colorMode === 'light' ? faMoon : faSun} size="3x" onClick={handleClick} />
  );
};

export default DarkToggle;
