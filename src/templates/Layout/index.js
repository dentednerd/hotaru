import React from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import SideBar from '../../Sidebar';

const Layout = styled('div')`
  overflow-y: hidden;
  overflow-x: hidden;
`;

export default (props) => {
  const { children } = props;
  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Joanne Imlay, front end developer</title>
        <meta name="description" content="Joanne Imlay is a front end developer in Manchester, England." />
      </Helmet>
      <SideBar width="50%" />
      {children}
    </Layout>
  );
};
