import React from 'react'
import IntroSection from '../../atoms/IntroSection'
import KeyData from '../KeyData'

const Hello = props => {
  const { latestBlog } = props

  return (
    <IntroSection className="hello">
      <h2>Hello, I&apos;m Jo.</h2>

      <KeyData latestBlog={latestBlog} />

      <p>I&apos;ve been interested in coding ever since the age of seven, when I first started writing programs in BASIC on my dad&apos;s Amiga 500. When my family got our first PC a few years later, the first thing I made with it was my first website. Within a year, I had taught myself HTML and CSS and done two week&apos;s work experience with a web design startup where I learned basic Flash and Photoshop. But that was only the beginning.</p>
    </IntroSection>
  )
}

export default Hello
