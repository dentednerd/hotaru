import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import { colors, shadows } from '../../tokens';

const StyledLayout = styled('div')`
  position: relative;
  margin: 0 auto;
  padding: 0;

  main {
    background-color: ${colors.background};
    color: ${colors.text};
    min-height: 100vh;
    position: relative;
    z-index: 1;
    box-shadow: ${shadows.darkShadow};
    padding: 5rem 1rem 1rem;
  }

  div.container {
    max-width: 800px;
    margin: 0 auto;
  }
`;

export default props => {
  const { children } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledLayout>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Joey Imlay, software engineer in Manchester</title>
        <meta
          name="description"
          content="Joey Imlay is a software engineer in Manchester, England."
        />
      </Helmet>
      <GlobalStyles />
      <Header />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </StyledLayout>
  );
};
