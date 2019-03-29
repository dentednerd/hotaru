import React from 'react'
import styled from '@emotion/styled';
import Layout from '../Layout';

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
      <Layout>
        {props.children}
      </Layout>
    </WhiteBandContainer>
  )
}

export default WhiteBand