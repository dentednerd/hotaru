import React from 'react'
import styled from '@emotion/styled'

const StyledShowreel = styled('section')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`

const VideoContainer = styled('div')`
  label: Showreel;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  width: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Showreel = () => {
  return (
    <StyledShowreel>
      <VideoContainer>
        <iframe
          title="showreel"
          src="https://www.youtube.com/embed/videoseries?list=PLAdBHMPjLXymQOXs1yxNqgKBnHKDfDBgU"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </VideoContainer>
    </StyledShowreel>
  )
}

export default Showreel
