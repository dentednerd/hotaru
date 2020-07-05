import React from 'react';
import styled from '@emotion/styled';
import { JapanSvg } from '../../assets';

const Container = styled('section')`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${JapanSvg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
  
const ProjectWrapper = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  background-color: rgba(255, 250, 205, 0.75);

  h2 {
    text-align: center;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

const PortfolioExtras = () => {
  return (
    <Container>
      <ProjectWrapper>
        <div style={{
          gridArea: '1 / 1 / 3 / 2',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2>Let's see, what else?</h2>
        </div>
        <div style={{
          gridArea: '1 / 2 / 3 / 3',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <p>
            <a href="https://github.com/dentednerd/hotaru">
              joanneimlay.dev
            </a>
            : this very site, built in <a href="https://www.gatsbyjs.org">Gatsby</a> with illustrations from <a href="https://undraw.co/">unDraw</a>.
          </p>
          <p>
            <a href="https://github.com/dentednerd/pinpin">
              pinpin
            </a>
            : a Chrome extension built in React; one day I'll make this available in the Chrome Web Store.
          </p>
          <p>
            <a href="https://github.com/dentednerd/jest-katas">
              Jest katas
            </a>
            : a small resource I created to practice TDD skills using <a href="https://jestjs.io">Jest</a>.
          </p>
          <p>
            <a href="https://github.com/dentednerd/LowbarAdv">
              Lowbar
            </a>
            : an early Northcoders sprint, to reimplement functions from the <a href="https://www.lodash.com">Lodash</a> library.
          </p>
        </div>
      </ProjectWrapper>
    </Container>
  );
};

export default PortfolioExtras;
