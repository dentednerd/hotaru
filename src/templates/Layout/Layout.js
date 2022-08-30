import React from 'react';
import { useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import { shadows } from '../../tokens';

const StyledLayout = styled('div')`
  position: relative;
  margin: 0 auto;
  padding: 0;

  main {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    min-height: 100vh;
    max-width: 100vw;
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

const Layout = ({ darkMode, children }) => {
  const theme = useTheme();

  return (
    <StyledLayout theme={theme}>
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
      <Header darkMode={darkMode} />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
