import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { hexToRGBA } from '../../../helpers';
import { colors, fonts } from '../../../tokens';

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
    background-image: url(${image}), linear-gradient(to bottom right, ${hexToRGBA(theme.accentLight, 0.25)}, ${hexToRGBA(colors.constants.purple, 0.25)});
    background-position: center top;
    background-size: cover;
    background-blend-mode: darken;

    h1 {
      text-align: center;
      width: fit-content;
      max-width: 800px;
      margin: 0 0 1rem;
      padding: 1rem;
      background-image: linear-gradient(
        130deg,
        ${theme.accentLight},
        ${theme.accentBold}
      );
      color: ${colors.constants.darkPurple};
      font-family: ${fonts.contrast};
      font-weight: 900;
      font-size: min(9vmin, 3rem);
      line-height: 1;
    }
  `;

  return (
    <StyledHero>
      <h1>{title}</h1>
    </StyledHero>
  );
};

export default Hero;
