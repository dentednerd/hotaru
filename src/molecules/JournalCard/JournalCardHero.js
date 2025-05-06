import React from 'react'
import styled from '@emotion/styled'

const JournalCardHero = ({ image }) => {
  const StyledHero = styled('header')`
    position: relative;
    width: 100%;
    aspect-ratio: 2/1;
    display: grid;
    place-items: center;
    overflow: hidden;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
  `

  return <StyledHero />
}

export default JournalCardHero
