import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import WhiteBand from '../../atoms/WhiteBand';
import RedBand from '../../atoms/RedBand';
import Timeline from '../Timeline';
import Hello from './hello';
import Developer from './developer';
import LookingFor from './lookingfor';
import Skills from './skills';

const IntroContainer = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;

  a img {
    height: 50px;
    margin: 1em 1em 0 0;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

const StyledIntro = styled('div')`
  width: 50%;

  @media (max-width: 768px) {
    width: calc(100% - 2em);
    padding: 0 1em;
  }
`;

const StyledRecruiters = styled('div')`
  text-align: center;

  span {
    font-weight: 600;
    font-family: 'Roboto Slab', serif;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 1em;
  }
`;

const Intro = (props) => {
  const { latestBlog } = props;
  const jobHunt = false;

  return (
    <Fragment>
      <RedBand>
        <StyledRecruiters>
          <h2>Recruiters...</h2>
          I am
          <span>
            {!jobHunt ? ' not open ' : ' open '}
          </span>
          to new opportunities right now.
        </StyledRecruiters>
      </RedBand>
      <WhiteBand>
        <IntroContainer>
          <StyledIntro>
            <Hello latestBlog={latestBlog} />
            <Developer />
            <LookingFor jobHunt={jobHunt} />
            <Skills jobHunt={jobHunt} />
          </StyledIntro>
          <Timeline jobHunt={jobHunt} />
        </IntroContainer>
      </WhiteBand>
    </Fragment>
  );
};

export default Intro;
