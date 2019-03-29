import React from 'react'
import IconLinks from '../molecules/IconLinks';

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p>
        <a href="https://www.dropbox.com/s/fekqikh5iek86t2/Joanne%20Imlay%20CV.pdf?dl=0" target="_blank" rel="noopener noreferrer">
          Download this CV in PDF format
          </a>
      </p>
      <IconLinks />
    </footer>
  )
}

export default Footer