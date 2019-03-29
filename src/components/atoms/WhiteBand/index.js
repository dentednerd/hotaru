import React from 'react'
import styled from '@emotion/styled';
import Container from '../Container';

const WhiteBandContainer = styled('div')`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 1em 0;
  color: #333;
  margin-bottom: 0.5em;

  h2 {
    font-size: 1.5em;
    font-weight: 600;
    font-family: 'Roboto Slab', serif;
    color: #c30;
  }
`;

const WhiteBand = props => {
  return (
    <WhiteBandContainer>
      <Container>
        {props.children}
      </Container>
    </WhiteBandContainer>
  )
};

export default WhiteBand;