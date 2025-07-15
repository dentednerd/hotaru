import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import useDarkMode from '@fisch0920/use-dark-mode';

import DarkToggle from '../../atoms/DarkToggle';
import Footer from '../../organisms/Footer';

import '../../scss/main.scss';

const Layout = ({ children }) => {
  const isBrowser = () => typeof window !== 'undefined';
  const darkPreference =
    isBrowser() &&  window.matchMedia('(prefers-color-scheme: dark)').matches;

  const darkMode = useDarkMode(darkPreference);
  const mainRef = useRef();

  useEffect(() => {
    mainRef.current?.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, [mainRef]);

  return (
    <div>
      <div className="container">
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
          bodyAttributes={{
            'data-theme': darkMode.value ? 'dark' : 'light',
            class: darkMode.value ? 'dark-mode' : 'light-mode'
          }}
        >
          <title>Joey Imlay</title>
          <meta
            name="description"
            content="Joey Imlay is a front end engineer in Manchester, England."
          />
        </Helmet>

        <main ref={mainRef}>
          <DarkToggle darkMode={darkMode} />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
