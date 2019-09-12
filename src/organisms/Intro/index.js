import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import WhiteBand from '../../atoms/WhiteBand';
import Timeline from '../Timeline';
import Hello from './hello';
import Developer from './developer';
import LookingFor from './lookingfor';

const IntroContainer = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  a img {
    height: 50px;
    margin: 1em 1em 0 0;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

const StyledIntro = styled('div')`
  width: 100%;

  @media (max-width: 768px) {
    width: calc(100% - 2em);
    padding: 0 1em;
  }
`;

const Intro = (props) => {
  const { latestBlog } = props;
  const jobHunt = false;

  return (
    <Fragment>
      <WhiteBand>
        <IntroContainer>
          <StyledIntro>
            <Hello latestBlog={latestBlog} />
            <Developer />
            <LookingFor jobHunt={jobHunt} />
          </StyledIntro>
          <Timeline jobHunt={jobHunt} />
        </IntroContainer>
      </WhiteBand>
    </Fragment>
  );
};

export default Intro;
