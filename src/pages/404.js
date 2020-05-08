import React from 'react';
import styled from '@emotion/styled';
import Screen from '../organisms/Screen';
import Layout from '../templates/Layout';

const Styled404 = styled('div')`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: #ffffff;
  }
`;

export default () => (
  <Layout>
    <Screen className="purple" noIcon>
      <Styled404>
        <h1>Quoth the server, 404.</h1>
        <a href="/"><p>home</p></a>
        <a href="/journal"><p>journal</p></a>
      </Styled404>
    </Screen>
  </Layout>
);
