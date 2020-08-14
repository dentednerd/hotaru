import React from 'react';
import styled from '@emotion/styled';
import timelineData from '../../data/timelineData';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import ExperienceScreen from './ExperienceScreen';

const ExperienceTemplate = () => {
  const StyledExperience = styled('section')`
    background: linear-gradient(90deg, #c2e4ff 50%, #828dac 50%);

    @media(max-width: 767px) {
      background: #c2e4ff;
    }
  `;

  return (
    <>
      <Header text="experience" />
      <StyledExperience>
        {timelineData.map((job, index) => (
          <ExperienceScreen job={job} index={index} />
        ))}
      </StyledExperience>
      <Footer />
    </>
  );
};

export default ExperienceTemplate;
