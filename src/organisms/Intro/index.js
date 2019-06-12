import React from 'react'
import styled from '@emotion/styled'
import Timeline from '../../organisms/Timeline'
import Hello from './hello'
import Developer from './developer'
import LookingFor from './lookingfor'
import Skills from './skills'

const IntroContainer = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;

  a img {
    height: 50px;
    margin: 1em 1em 0 0;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`

const StyledIntro = styled('div')`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Intro = props => {
  const { latestBlog } = props

  return (
    <IntroContainer>
      <StyledIntro>
        <Hello latestBlog={latestBlog} />
        <Developer />
        <LookingFor />
        <Skills />
      </StyledIntro>
      <Timeline />
    </IntroContainer>
  )
}

export default Intro
