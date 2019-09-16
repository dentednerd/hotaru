import React from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import SideBar from '../organisms/Sidebar';

const Layout = styled('div')`
  overflow-y: hidden;
  overflow-x: hidden;
`;

export default (props) => {
  const { children } = props;
  return (
    <Layout>
      <Helmet>
        <title>Joanne Imlay, front end developer</title>
      </Helmet>
      <SideBar width="50%" />
      {children}
    </Layout>
  );
};
