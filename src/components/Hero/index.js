import React from 'react'
import IconLinks from '../IconLinks'

import './Hero.css'

class Hero extends React.Component {
  render() {
    return (
      <div className="video-hero">
        <video autoPlay width="100%" loop muted>
          <source src="hero.ogv" />
          <source src="hero.webm" />
        </video>

        <div className="icons-hero">
          <IconLinks />
        </div>

      </div>
    )
  }
}

export default Hero