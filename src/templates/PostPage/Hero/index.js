import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Hero = ({ image, alt }) => {
  const theme = useTheme();

  const StyledHero = styled('header')`
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 100vw;
    height: 50vh;
    overflow: hidden;

    div {
      width: 100vw;
      height: 50vh;
    }

    img {
      object-fit: cover !important;
      object-position: center;
    }
  `;

  const Overlay = styled('div')`
    position: absolute;
    z-index: 9999;
    background-image: linear-gradient(to bottom, transparent, ${theme.background} 50vh);
  `;

  return (
    <StyledHero>
      <Overlay>
        &nbsp;
      </Overlay>
      <GatsbyImage
        image={image}
        alt={alt}
      />
    </StyledHero>
  );
};

export default Hero;
