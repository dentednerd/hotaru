import React from 'react';
import styled from '@emotion/styled';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import GlobalStyles from '../Layout/GlobalStyles';
import CTALink from '../../atoms/CTALink';
import ContactIcons from '../../molecules/ContactIcons';
import { colors } from '../../tokens';

const Main = styled('main')`
  position: relative;
  z-index: 9999;
  margin-bottom: 100vh;
  box-shadow: 0 0 1rem rgba(0,0,0,0.5);

  h2 {
    font-size: 4rem;
  }
`;

const Block = styled('div')`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(4,1fr);
  grid-template-columns: repeat(4,1fr);
  z-index: 999;

  &.pink {
    background-color: #ffd2e9;
  }

  &.yellow {
    background-color: ${colors.yellow};
  }
`;

const BlockContent = styled('section')`
  grid-area: 2/2/4/4;
`;

const FooterBlock = styled('div')`
  position: fixed;
  bottom: 0;
  zIndex: 0;
`;

const navItems = [
  {
    link: '/portfolio',
    icon: faLaptopCode,
    text: "See the projects I've worked on.",
  },
  {
    link: '/experience',
    icon: faHistory,
    text: 'Take a trip through my work history.',
  },
  {
    link: '/journal',
    icon: faPencilAlt,
    text: 'Read my coding journal.',
  },
  {
    link: '/showreel',
    icon: faYoutube,
    text: 'Watch me talking tech.',
  },
];

const TestTemplate = () => {
  return (
    <>
      <Main>
        <GlobalStyles />
        <Block className="pink">
          <BlockContent>
            <h1>Hello, I'm Joey. I build things.</h1>
          </BlockContent>
        </Block>
        <Block className="yellow">
          <BlockContent>
            <h1>This is the second screen.</h1>
          </BlockContent>
        </Block>
      </Main>
      <FooterBlock>
        <Block>
          <BlockContent>
            {navItems.map(item => (
              <CTALink to={item.link} icon={item.icon}>
                {item.text}
              </CTALink>
            ))}
            <ContactIcons />
          </BlockContent>
        </Block>
      </FooterBlock>
    </>
  );
};

export default TestTemplate;
