import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { hexToRGBA } from '../../../helpers';
import { colors } from '../../../tokens';

const Hero = ({ image, title }) => {
  const theme = useTheme();

  const StyledHero = styled('header')`
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 100vw;
    height: 50vh;
    display: grid;
    place-items: center;
    overflow: hidden;
    background-image: url(${image}), linear-gradient(to bottom right, ${hexToRGBA(theme.accentLight, 0.75)}, ${hexToRGBA(colors.constants.purple, 0.75)});
    background-position: center;
    background-size: cover;
    background-blend-mode: darken;

    h2 {
      max-width: 800px;
      text-align: center;
      padding: 1rem;
      margin: 0 1rem;
      background-color: ${theme.accentLight};
      color: ${colors.constants.purple};
      border: solid 0.5rem ${colors.constants.purple};
    }
  `;

  return (
    <StyledHero>
      <h2>{title}</h2>
    </StyledHero>
  );
};

export default Hero;
