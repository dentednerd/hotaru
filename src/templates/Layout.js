import React from 'react';
import Helmet from 'react-helmet';
import Wrapped from '../components/Wrapped';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RedBand from '../components/RedBand';

const Layout = (props) => {
  return (
    <div id="main">
      <Helmet>
        <title>Joanne Imlay, front end developer</title>
      </Helmet>
      <Wrapped>
        <Header />
      </Wrapped>
      {props.children}
      <RedBand>
        <Footer />
      </RedBand>
    </div>
  );
}

export default Layout;
