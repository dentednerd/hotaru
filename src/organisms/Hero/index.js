import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Screen from '../Screen';
import GlowHeading from '../../atoms/GlowHeading';

const StyledHeroContainer = styled('section')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;

  p {
    margin: 0;

    svg {
      display: inline;
      opacity: 1;
      margin: 0 1rem 0 0;
    }
  }

  @media (max-width:768px) {
    h1 {
      height: 4rem;
      font-size: 4rem;
      line-height: 4rem;
    }

    .svg-inline--fa {
      height: 25vw;
      width: 25vw;
    }
  }
`;

const Hero = ({
  text,
  passedRef,
  passedNextRef,
  icon,
  scrollFunc,
}) => (
  <Screen
    className="purple"
    ref={passedRef}
    onClick={() => scrollFunc(passedNextRef)}
  >
    <StyledHeroContainer>
      <GlowHeading text={text} />
      <FontAwesomeIcon
        icon={icon}
        style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
      />
    </StyledHeroContainer>
  </Screen>
);

export default Hero;
