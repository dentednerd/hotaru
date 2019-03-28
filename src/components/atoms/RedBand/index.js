import React from 'react'
import styled from '@emotion/styled';

const RedBandContainer = styled('div')`
  background-color: #c30;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 1em 0;
  color: white;
  margin-bottom: 0.5em;

  h2 {
    font-size: 1.5em;
    font-weight: 600;
    font-family: 'Roboto Slab', serif;
    color: white;
  }
`;

const RedBand = props => {
  return (
    <RedBandContainer>
      {props.children}
    </RedBandContainer>
  )
}

export default RedBand