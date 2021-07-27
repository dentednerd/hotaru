import React from 'react';
import colors from '../../tokens/colors';

const COLORS = {
  text: {
    light: colors.light.text,
    dark: colors.dark.text,
  },
  background: {
    light: colors.light.background,
    dark: colors.dark.background,
  },
  link: {
    light: colors.light.link,
    dark: colors.dark.link,
  }
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  function setColorMode(newValue) {
    const root = window.document.documentElement;

    localStorage.setItem('color-mode', newValue);

    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;

      root.style.setProperty(cssVarName, colorByTheme[newValue]);
    });

    rawSetColorMode(newValue);
  }

  React.useEffect(() => {
    const preferredScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const root = window.document.documentElement;
    let initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );

    if (initialColorValue === "") initialColorValue = preferredScheme;

    rawSetColorMode(initialColorValue);
    setColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
