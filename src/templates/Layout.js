import React from 'react';
import Helmet from 'react-helmet';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const Layout = (props) => {
  const { children } = props;
  return (
    <div id="main">
      <Helmet>
        <title>Joanne Imlay, front end developer</title>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
