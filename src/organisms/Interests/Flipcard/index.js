import React from 'react';

import './Flipcard.css';

const Flipcard = ({ title, content }) => (
  <div
    className="flip-container"
    onTouchStart={() => this.classList.toggle('hover')} // eslint-disable-line
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
);

export default Flipcard;
