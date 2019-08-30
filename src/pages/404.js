import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Layout from '../templates/Layout';

const Styled404 = styled('div')`
  height: 80vh;
  text-align: center;

  h1 {
    line-height: 3em;
  }
`;

export default () => (
  <Layout>
    <Styled404>
      <h1>404!!</h1>
      <Link to="/"><h2>&laquo; Home</h2></Link>
    </Styled404>
  </Layout>
);
