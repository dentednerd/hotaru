import React from 'react'
import RedBand from '../atoms/RedBand'

import './BlogHeader.css'

const BlogHeader = () => {
  return (
    <div className="blog-header">
      <RedBand>
        <h2>{"<Blog />"}</h2>
      </RedBand>
    </div>
  )
}

export default BlogHeader