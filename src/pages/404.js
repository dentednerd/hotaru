import React from 'react';
import styled from '@emotion/styled';
import Screen from '../atoms/Screen';
import Layout from '../templates/Layout';

const Styled404 = styled('div')`
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Layout>
    <Screen className="purple" noIcon>
      <Styled404>
        <h1>Quoth the server, 404.</h1>
      </Styled404>
    </Screen>
  </Layout>
);
