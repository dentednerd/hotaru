import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import * as illustrations from '../../assets';
import Screen from '../../organisms/Screen';
import timelineOldData from '../../data/timelineOldData';

const GridContainer = styled('section')`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin: 0;
  padding: 0;

  @media(max-width: 767px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const LeftHalf = styled('section')`
  grid-area: 1 / 1 / 3 / 2;
  padding: 0 1rem;
  text-align: right;

  @media(max-width: 767px) {
    grid-area: 1 / 1 / 2 / 2;
    text-align: center;
    width: 100%;
    padding: 0;
  }
`;

const RightHalf = styled('section')`
  grid-area: 1 / 2 / 3 / 3;
  padding: 0 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  @media(max-width: 767px) {
    grid-area: 2 / 1 / 3 / 2;
    text-align: right;
    padding: 0;
  }
`;

const JobTitle = styled('section')`
  text-align: right;
  margin-bottom: 1rem;
  padding: 0;

  @media (max-width: 767px) {
    margin: 2rem auto 0;
    text-align: left;
    line-height: 1.25rem;
  }
`;

const StyledAncientHistory = styled(GridContainer)`
  background-color: rgba(255, 250, 205, 0.75);

  &:after {
    top: 0;
    left: 1rem;
    bottom: 1.5rem;
    right: 1rem;
    position: absolute;
    opacity: 0.25;
    content: "";
    background-image: url(${illustrations.JapanSvg});
    background-blend-mode: lighten;
    background-size: contain;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const AncientHistory = ({ passedRef, passedTopRef }) => {
  const scroll = (ref) => { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Screen
      backToTop
      className="lemon"
      ref={passedRef}
      onClick={() => scroll(passedTopRef)}
    >
      <StyledAncientHistory>
        <LeftHalf>
          <Fade left>
            <JobTitle style={{ marginBottom: '1rem' }}>
              <h2 style={{ marginBottom: 0 }}>Before I was a developer...</h2>
            </JobTitle>
          </Fade>
        </LeftHalf>
        <RightHalf>
          {timelineOldData.map(job => (
            <Fade right>
              <h2 style={{ marginBottom: '0', textAlign: 'left' }}>{job.companyName}</h2>
              <h3 style={{ textAlign: 'left' }}>{job.jobTitle}</h3>
              <p style={{ textAlign: 'left' }}>{job.dates}</p>
            </Fade>
          ))}
        </RightHalf>
      </StyledAncientHistory>
    </Screen>
  );
};

export default AncientHistory;
