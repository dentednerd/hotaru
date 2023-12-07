import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import FaIcon from '../FaIcon';

const ToggleIcon = styled(FaIcon)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.text};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
    color: ${props => props.theme.accentBold};
    transition: all 0.2s ease-in-out;
  }
`;

const DarkToggle = ({ darkMode }) => {
  const theme = useTheme();
  const handleClick = () => darkMode.value ? darkMode.disable() : darkMode.enable();

  return (
    <ToggleIcon theme={theme} icon={darkMode.value ? faSun : faMoon} size="3x" onClick={handleClick} />
  );
};

export default DarkToggle;
