import React from 'react'
import PropTypes from 'prop-types'

import './Flipcard.css'

const Flipcard = ({ title, content }) => {
  return (
    <div
      className="flip-container"
      ontouchstart="this.classList.toggle('hover');"
    >
      <div className="flipper">
        <div className="front">
          <h2>{title}</h2>
        </div>
        <div className="back">
          <div className="back-content">
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

Flipcard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

export default Flipcard