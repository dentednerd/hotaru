import React from 'react'
import PropTypes from 'prop-types'

const Project = ({ link, image, title, caption }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="project">
        <img src={image} alt={title} className="project-image" />
        <div className="project-middle">
          <h2>{title}</h2>
          <p className="project-caption">{caption}</p>
        </div>
      </div>
    </a>
  )
}

Project.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
}

export default Project