import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import { colors } from '../../tokens';

const StyledLayout = styled('main')`
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  overflow-y: hidden;
  overflow-x: hidden;
  padding: 0 1rem;

  @media (min-width: 800px) {
    margin: 2rem auto;
    border: solid 1px ${colors.darkpurple};
  }
`;

export default (props) => {
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;500;700&family=PT+Serif:wght@400;700&family=Raleway:wght@500&family=Sacramento&family=Ubuntu+Mono&display=swap"
        />
      </Helmet>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};
