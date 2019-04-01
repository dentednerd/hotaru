import React from 'react'
// import Pie from './Pie'
import Timeline from '../../Timeline'
import Hello from './hello';
import Developer from './developer';
import LookingFor from './lookingfor';
import Skills from './skills';
import styled from '@emotion/styled';

const IntroContainer = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;

  a img {
    height: 50px;
    margin: 1em 1em 0 0;
  }
`

const StyledIntro = styled('div')`
  width: 50%;
`;

const Intro = props => {
  return (
    <IntroContainer>
      <StyledIntro>
        <Hello latestBlog={props.latestBlog} />
        <Developer />
        <LookingFor />
        <Skills />
        {/* <Pie /> */}
      </StyledIntro>
      <Timeline />
    </IntroContainer>
  )
}

export default Intro
