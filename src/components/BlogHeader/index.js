import React from 'react'
import RedBand from '../RedBand'
import Layout from '../Layout'

import './BlogHeader.css'

const BlogHeader = () => {
  return (
    <div className="blog-header">
      <RedBand>
        <Layout>
          <h2>{"<Blog />"}</h2>
        </Layout>
      </RedBand>
    </div>
  )
}

export default BlogHeader