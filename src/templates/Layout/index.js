import React, { useState } from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import Sidebar from '../../molecules/Sidebar';
import MenuButton from '../../atoms/MenuButton';

const Layout = styled('div')`
  overflow-y: hidden;
  overflow-x: hidden;
`;

export default (props) => {
  const { children } = props;
  const [open, toggleOpen] = useState(false);

  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Joanne Imlay, front end developer</title>
        <meta
          name="description"
          content="Joanne Imlay is a front end developer in Manchester, England."
        />
      </Helmet>
      <MenuButton open={open} toggleOpen={toggleOpen} />
      <Sidebar open={open} />
      {children}
    </Layout>
  );
};
