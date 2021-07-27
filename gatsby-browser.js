import React from 'react';
import Layout from './src/templates/Layout';

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
  <Layout>{element}</Layout>
);
