import React from 'react'
import RedBand from '../atoms/RedBand'
import Layout from '../atoms/Layout'

import './BlogHeader.css'

const BlogHeader = () => {
  return (
    <div className="blog-header">
      <RedBand>
        <Wrapped>
          <h2>{"<Blog />"}</h2>
        </Wrapped>
      </RedBand>
    </div>
  )
}

export default BlogHeader