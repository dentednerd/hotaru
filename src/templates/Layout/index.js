import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import useDarkMode from '@fisch0920/use-dark-mode';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import GlobalStyles from './GlobalStyles';
import { shadows, colors } from '../../tokens';

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
    max-width: 425px;
    margin: 0 auto;
  }

  @media(min-width: 1024px) {
    div.container {
      max-width: 800px;
      margin: 0 auto;
    }
  }
`;

const Layout = (props) => {
  const { children } = props;
  const [themeColors, setThemeColors] = useState(null);

  const isBrowser = () => typeof window !== 'undefined';
  const darkPreference = isBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const darkMode = useDarkMode(darkPreference);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const theme = darkMode.value ? 'dark' : 'light';
    setThemeColors(colors[theme]);
  }, [darkMode]);

  if (!themeColors) return null;

  return (
    <ThemeProvider theme={themeColors}>
      <StyledLayout theme={themeColors}>
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
        <GlobalStyles theme={themeColors} />
        <Header darkMode={darkMode} />
        <main>
          <div className="container">
            {children}
          </div>
        </main>
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
