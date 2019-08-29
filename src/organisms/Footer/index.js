import React from 'react'
import styled from '@emotion/styled'
import WhiteBand from '../../atoms/WhiteBand'
import IconLinks from '../../molecules/IconLinks'

const StyledFooter = styled('footer')`
  width: 100%;
  height: 2em;

  a {
    color: #c30;
  }

  .icons {
    height: 2em;
  }
` 

const Footer = () => {
  return (
    <WhiteBand>
      <StyledFooter>
        <IconLinks />
      </StyledFooter>
    </WhiteBand>
  )
}

export default Footer