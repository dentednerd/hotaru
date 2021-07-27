import React from 'react';
import styled from '@emotion/styled';
import CallToAction from '../molecules/CallToAction';
import introData from '../data/introData';
import { colors } from '../tokens';

const HomeSection = styled('section')`
  background-color: ${colors.background};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  section,
  p {
    text-align: left;
  }

  section.content {
    max-width: 800px;
  }

  section.cta {
    flex-flow: column;
  }
`;

const HomePage = () =>
  introData.map((screen, index) => (
    <HomeSection index={index}>
      <section className="content" dangerouslySetInnerHTML={{ __html: screen.content }} />
    </HomeSection>
  )).concat((
    <HomeSection>
      <section className="content cta">
        <h2>Take a look around.</h2>
        <CallToAction />
      </section>
    </HomeSection>
  ));

export default HomePage;
