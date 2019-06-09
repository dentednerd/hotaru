import React from 'react'
import styled from '@emotion/styled'

const GridItem = (props) => {
  const { children } = props
  const GridItemDiv = styled('div')`
    label: GridItem;
    margin: 0 1em 1em 0;
    padding: 0;
    vertical-align: top;
    box-sizing: border-box;
    font-size: 1rem;
    width: calc(33.33% - 1em);

    @media (max-width: 768px) {
      width: 100%;
      min-width: 100%;
      margin: 0 0 1em;
    }
  `

  // need breakpoints

  return (
    <GridItemDiv>
      {children}
    </GridItemDiv>
  )
}

export default GridItem
