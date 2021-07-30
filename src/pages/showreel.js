import React, { useState } from 'react';
import styled from '@emotion/styled';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import CTALink from '../atoms/CTALink';
import PageHeader from '../molecules/PageHeader';
import Layout from '../templates/Layout';
import { Programmer } from '../assets/undraws';

const StyledShowreel = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const TV = styled('iframe')`
  display: block;
  width: calc(100vw - 2rem);
  height: calc(56.25vw - 2rem);
  margin: 0 auto 1rem;

  @media (min-width: 800px) {
    width: 50vw;
    height: 28.125vw;
  }

  @media (min-width: 1024px) {
    width: 40vw;
    height: 22.5vw;
  }
`;

const List = styled('ul')`
  list-style: none;
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const videos = [
  {
    id: 'https://www.youtube.com/embed/eaY8ovn1FzI',
    name: 'Let\'s go, gamers: how we built the GAMINGbible menu'
  },
  {
    id: 'https://youtube.com/embed/gk_5ezTqd3c',
    name: 'Automating BrowserStack screenshot generation with CircleCI',
  },
  {
    id: 'https://youtube.com/embed/l62-FZS5lGA',
    name: 'Careers in Coding - The Future of Work Webinar',
  },
  {
    id: 'https://youtube.com/embed/3Ew5dfitW6g',
    name: 'Northcoders: Jo | Student Stories',
  },
  {
    id: 'https://youtube.com/embed/SsoueiuOUbc',
    name: 'Northcoders: is coding for everyone?',
  },
  {
    id: 'https://youtube.com/embed/Ua4bVgMO8ls',
    name: 'Northcoders: a new opportunity',
  },
  {
    id: 'https://youtube.com/embed/2bA0KAGYjIc',
    name: 'Northcoders scholarship supports women programmers',
  }
];

const ShowreelTemplate = () => {
  const [currentVideo, setCurrentVideo] = useState(
    'https://www.youtube.com/embed/eaY8ovn1FzI'
  );

  return (
    <Layout>

      <StyledShowreel>
        <PageHeader>
          <Programmer />
          <>
            <p>Sometimes folks like to get me on camera saying nice things about tech. What they don&apos;t always know is that I love talking about tech, and I&apos;d talk for hours if they&apos;d let me.</p>
            <h2>Showreel</h2>
          </>
        </PageHeader>
        <TV
          title="showreel"
          src={currentVideo}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
        <List>
          {videos.map(video => (
            <CTALink icon={faYoutube} onClick={() => setCurrentVideo(video.id)}>
              {video.name}
            </CTALink>
          ))}
        </List>
      </StyledShowreel>
    </Layout>
  );
};

export default ShowreelTemplate;
