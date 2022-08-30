import React from 'react';
import styled from '@emotion/styled';
import CTALink from '../atoms/CTALink';
import introData from '../data/introData';
import Layout from '../templates/Layout';
import { colors } from '../tokens';

const HomeSection = styled('section')`
  background-color: ${colors.background};
  height: 100vh;
  max-width: calc(100vw - 2rem);
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 1fr;
  row-gap: 1rem;
  place-items: center;

  @media(min-width: 800px) {
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr;
    column-gap: 1rem;
    row-gap: 0;
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  section,
  p {
    text-align: left;
  }

  svg {
    max-height: 10rem;
    width: auto;
  }

  section.content {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  section.cta {
    flex-flow: column;
  }
`;

const HomePage = () => (
  <Layout>
    {introData.map((entry, index) => (
      <HomeSection index={index} key={entry.text}>
        <section className="content" dangerouslySetInnerHTML={{ __html: entry.content }} />
        <div>
          {entry.svg}
          <CTALink to={entry.link} icon={entry.icon}>
            {entry.text}
          </CTALink>
        </div>
      </HomeSection>
    ))}
  </Layout>
);

export default HomePage;
