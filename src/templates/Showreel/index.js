import React from 'react';
import styled from '@emotion/styled';

const videos = [
  'https://youtube.com/embed/gk_5ezTqd3c',
  'https://youtube.com/embed/l62-FZS5lGA',
  'https://youtube.com/embed/3Ew5dfitW6g',
  'https://youtube.com/embed/SsoueiuOUbc',
  'https://youtube.com/embed/Ua4bVgMO8ls',
  'https://youtube.com/embed/2bA0KAGYjIc',
];

const VideoContainer = styled('div')`
  label: Showreel;
  margin: 0;
  width: calc(50vw - 2rem);
  height: calc(28.125vw - 2rem);
  background: rgba(0,0,0,0.25);

  iframe {
    
    width: calc(50vw - 2rem);
    height: calc(28.125vw - 2rem);
    margin-bottom: 0;
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-top: calc(25vh - 10.9375vw);
    width: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);
    height: calc(56.25vw - 2rem);

    iframe {
      width: calc(100vw - 2rem);
      height: calc(56.25vw - 2rem);
    }
  }
`;

const showreel = videos.map(video => (
  <VideoContainer>
    <iframe
      title="showreel"
      src={video}
      frameBorder="0"
      allow="encrypted-media"
      allowFullScreen
    />
  </VideoContainer>
));

export default showreel;
