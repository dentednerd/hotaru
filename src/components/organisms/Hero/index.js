import React from 'react'
import styled from '@emotion/styled'
import IconLinks from '../../molecules/IconLinks'

const VideoHero = styled('div')`
  position: relative;

  &video {
    margin-bottom: -0.25em;
  }
`;

const HeroIcons = styled('div')`
  background: rgba(255,255,255,0.3);
  position: absolute;
  bottom: 1em;
  right: 1em;
  z-index:999;
  padding: 0.5em;
  border-radius: 6px;
`;

class Hero extends React.Component {
  render() {
    return (
      <VideoHero>
        <video autoPlay width="100%" loop muted>
          <source src="hero.ogv" />
          <source src="hero.webm" />
        </video>

        <HeroIcons>
          <IconLinks />
        </HeroIcons>

      </VideoHero>
    )
  }
}

export default Hero
