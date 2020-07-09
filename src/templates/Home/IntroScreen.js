import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import Screen from '../../organisms/Screen';
import Screenshot from '../../atoms/Screenshot';

const Container = styled('section')`
  position: relative;
  width: calc(100% - 8rem);
  height: calc(100% - 8rem);
  overflow: hidden;

  @media(max-width: 767px) {
    width: 100%;
    height: calc(100% - 2rem);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

const MobileOnly = styled('section')`
  display: none;

  @media(max-width: 767px) {
    display: block;
    margin-bottom: 2rem;
  }
`;

const IntroScreen = ({
  colorScheme,
  image,
  right,
  bottom,
  passedRef,
  passedNextRef,
  content,
  flipped,
}) => {
  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const TextSection = styled('section')`
    position: absolute;
    ${bottom ? 'bottom: 0;' : 'top: 0;'}
    ${right ? 'right: 0;' : 'left: 0;'}
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1rem;
    overflow: hidden;

    p:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 767px) {
      position: relative;
      background-color: transparent;
      padding: 0;
      
      h2, p {
        text-align: center;
      }
    }
  `;

  return (
    <Screen
      className={colorScheme}
      background={image}
      ref={passedRef}
      onClick={() => scroll(passedNextRef)}
      flipped={flipped}
    >
      <Container>
        <MobileOnly>
          <Fade right>
            <Screenshot
              src={image}
              alt="Hello. I'm Joey."
            />
          </Fade>
        </MobileOnly>

        <Fade left>
          <TextSection dangerouslySetInnerHTML={{ __html: content }} />
        </Fade>
      </Container>
    </Screen>
  );
};

export default IntroScreen;
