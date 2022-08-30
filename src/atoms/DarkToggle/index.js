import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
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
    color: ${props => props.theme.link};
    transition: all 0.2s ease-in-out;
  }

  @media(max-width: 767px) {
    color: ${props => props.theme.link};

    &:hover {
      transform: none;
      transition: none;
    }
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
