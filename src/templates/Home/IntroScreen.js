import React from 'react';
import styled from '@emotion/styled';
import Screen from '../../organisms/Screen';
import Screenshot from '../../atoms/Screenshot';

const Container = styled('section')`
  position: relative;
  width: 100%;
  height: 100%;
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
    background-color: #fff;
    padding: 1rem;
    overflow: hidden;
    width: calc(50vw - 4rem);

    p {
      max-width: 100%;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media(max-width: 1023px) {
      font-size: 16px;
      line-height: 24px;
    }

    @media (max-width: 767px) {
      position: relative;
      background-color: transparent;
      width: calc(100% - 2rem);
      padding: 0;
      
      h2 {
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
          <Screenshot
            src={image}
            alt="Hello. I'm Joey."
          />
        </MobileOnly>

        <TextSection dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </Screen>
  );
};

export default IntroScreen;
