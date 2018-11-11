import React from 'react'
import IconLinks from '../IconLinks'

import './Hero.css'

class Hero extends React.Component {
  render() {
    return (
      <section className="video-hero">
        <video autoPlay width="100%" loop muted>
          <source src="hero.ogv" />
          <source src="hero.webm" />
        </video>

        <div className="icons-hero">
          <IconLinks />
        </div>

      </section>
    )
  }
}

export default Hero