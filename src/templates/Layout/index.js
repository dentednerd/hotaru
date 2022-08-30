import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import useDarkMode from '@fisch0920/use-dark-mode';
import { colors } from '../../tokens';
import Layout from './Layout';

export default props => {
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
      <Layout darkMode={darkMode}>
        {children}
      </Layout>
    </ThemeProvider>
  );
};
