import React from 'react';
import { Global, css } from '@emotion/core';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import { colors, fonts } from '../../tokens';

config.autoAddCss = false;

const GlobalStyles = ({ children }) => (
  <Global
    styles={css`
      /* cyrillic-ext */
      @font-face {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('PT Serif'), local('PTSerif-Regular'), url(https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('PT Serif'), local('PTSerif-Regular'), url(https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFSzr-_dSb_nco.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* latin-ext */
      @font-face {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('PT Serif'), local('PTSerif-Regular'), url(https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFYzr-_dSb_nco.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('PT Serif'), local('PTSerif-Regular'), url(https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v12/EJRSQgYoZZY2vCFuvAnt66qfVyvVp8NAyIw.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v12/EJRSQgYoZZY2vCFuvAnt66qWVyvVp8NAyIw.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* latin-ext */
      @font-face {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v12/EJRSQgYoZZY2vCFuvAnt66qcVyvVp8NAyIw.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v12/EJRSQgYoZZY2vCFuvAnt66qSVyvVp8NA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoorCFPrcVIT9d0c-dYA.woff) format('woff');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoorCMPrcVIT9d0c-dYA.woff) format('woff');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoorCHPrcVIT9d0c-dYA.woff) format('woff');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoorCGPrcVIT9d0c-dYA.woff) format('woff');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoorCIPrcVIT9d0c8.woff) format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Sacramento';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Sacramento'), local('Sacramento-Regular'), url(https://fonts.gstatic.com/s/sacramento/v8/buEzpo6gcdjy0EiZMBUG4CMf_f5Iai0Ycw.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Sacramento';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Sacramento'), local('Sacramento-Regular'), url(https://fonts.gstatic.com/s/sacramento/v8/buEzpo6gcdjy0EiZMBUG4C0f_f5Iai0.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Ubuntu Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Ubuntu Mono'), local('UbuntuMono-Regular'), url(https://fonts.gstatic.com/s/ubuntumono/v10/KFOjCneDtsqEr0keqCMhbCc3CsTYl4BOQ3o.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Ubuntu Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Ubuntu Mono'), local('UbuntuMono-Regular'), url(https://fonts.gstatic.com/s/ubuntumono/v10/KFOjCneDtsqEr0keqCMhbCc-CsTYl4BOQ3o.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Ubuntu Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Ubuntu Mono'), local('UbuntuMono-Regular'), url(https://fonts.gstatic.com/s/ubuntumono/v10/KFOjCneDtsqEr0keqCMhbCc2CsTYl4BOQ3o.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Ubuntu Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Ubuntu Mono'), local('UbuntuMono-Regular'), url(https://fonts.gstatic.com/s/ubuntumono/v10/KFOjCneDtsqEr0keqCMhbCc5CsTYl4BOQ3o.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Ubuntu Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Ubuntu Mono'), local('UbuntuMono-Regular'), url(https://fonts.gstatic.com/s/ubuntumono/v10/KFOjCneDtsqEr0keqCMhbCc0CsTYl4BOQ3o.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Ubuntu Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Ubuntu Mono'), local('UbuntuMono-Regular'), url(https://fonts.gstatic.com/s/ubuntumono/v10/KFOjCneDtsqEr0keqCMhbCc6CsTYl4BO.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Zilla Slab';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local('Zilla Slab Light'), local('ZillaSlab-Light'), url(https://fonts.gstatic.com/s/zillaslab/v6/dFa5ZfeM_74wlPZtksIFYpEY6H2pW3pwfa3Efg.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Zilla Slab';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local('Zilla Slab Light'), local('ZillaSlab-Light'), url(https://fonts.gstatic.com/s/zillaslab/v6/dFa5ZfeM_74wlPZtksIFYpEY6HOpW3pwfa0.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Zilla Slab';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Zilla Slab Medium'), local('ZillaSlab-Medium'), url(https://fonts.gstatic.com/s/zillaslab/v6/dFa5ZfeM_74wlPZtksIFYskZ6H2pW3pwfa3Efg.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Zilla Slab';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Zilla Slab Medium'), local('ZillaSlab-Medium'), url(https://fonts.gstatic.com/s/zillaslab/v6/dFa5ZfeM_74wlPZtksIFYskZ6HOpW3pwfa0.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Zilla Slab';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Zilla Slab Bold'), local('ZillaSlab-Bold'), url(https://fonts.gstatic.com/s/zillaslab/v6/dFa5ZfeM_74wlPZtksIFYoEf6H2pW3pwfa3Efg.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Zilla Slab';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Zilla Slab Bold'), local('ZillaSlab-Bold'), url(https://fonts.gstatic.com/s/zillaslab/v6/dFa5ZfeM_74wlPZtksIFYoEf6HOpW3pwfa0.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      body, html {
        color: ${colors.purple};
        background-color: ${colors.backgroundpurple};
        font-family: ${fonts.body};
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
      }

      @media (min-width: 1024px) {
        body, html {
          font-size: 20px;
          line-height: 30px;
        }
      }

      ${dom.css()}

      p {
        margin-top: 0;
        margin-bottom: 1rem;
      }

      p:last-child {
        margin-bottom: 0;
      }

      hr {
        border-top: solid 1px ${colors.purple};
        margin: 1rem 0;
      }

      blockquote {
        width: 60%;
        padding: 1rem;
        margin: 1rem auto;
        background-color: ${colors.green};
        color: ${colors.darkpurple};
        border-radius: 1rem;
      }

      ul, ol {
        padding-left: 1rem;
        margin: 0 auto 1rem;
      }

      ul li, ol li {
        margin-bottom: 1rem;
      }

      /* headings */

      h2 {
        font-family: ${fonts.headline};
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.5rem;
        margin: 0 0 1rem;
        letter-spacing: -0.05rem;
        color: ${colors.darkpurple};
      }

      h3 {
        font-family: ${fonts.headline};
        font-weight: 500;
        font-size: 1.25em;
        line-height: 1.25rem;
        margin: 0 0 1rem;
        letter-spacing: -0.05rem;
        color: ${colors.darkpurple};
      }

      h3 svg {
        margin: 0 1rem 0 0;
        opacity: 1;
      }

      h3 svg:hover {
        cursor: auto;
      }

      h4 {
        font-family: ${fonts.headline};
        font-weight: 300;
        font-size: 1rem;
        line-height: 1rem;
        margin: 0 0 1rem;
        letter-spacing: -0.05rem;
        color: ${colors.darkpurple};
      }

      a {
        text-decoration: none;
        color: ${colors.link};
        transition: 0.5s ease;
      }

      a:hover {
        text-decoration: underline;
        transition: 0.5s ease;
      }

      .svg-inline--fa {
        height: 1rem;
        width: 1rem;
      }

      code[class*="language-"],
      pre[class*="language-"] {
        color: #fff;
        background: none;
        font-family: ${fonts.code};
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
      }

      @media(max-width: 767px) {
        code[class*="language-"] {
          font-size: 16px;
          line-height: 24px;
        }
      }

      pre code span {
        display: inline-block;
        overflow-wrap: break-word;
      }

      /* Code blocks */
      pre[class*="language-"] {
        padding: 1rem;
        margin: 1rem auto;
        width: 60%;
        border-radius: 1rem;
        overflow-x: auto;
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        word-break: break-all;
      }

      @media(max-width: 767px) {
        pre[class*="language-"] {
          width: calc(100% - 2rem);
          font-size: 0.75rem;
          padding: 1rem;
          border-radius: 1rem;
          font-size: 1rem;
          white-space: normal;
          word-wrap: normal;
        }
      }

      :not(pre) > code[class*="language-"],
      pre[class*="language-"] {
        background-color: ${colors.darkpurple} !important;
      }

      /* Inline code */
      :not(pre) > code[class*="language-"] {
        background-color: transparent !important;
        color: ${colors.darkpurple};
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 0 0.125rem;
        text-shadow: 0 0 0.125rem ${colors.blue};
      }

      .token.parameter {
        color: ${colors.yellow};
        font-style: italic;
      }

      .token.comment,
      .token.block-comment,
      .token.prolog,
      .token.doctype,
      .token.cdata {
        color: ${colors.lightpurple};
      }

      .token.punctuation {
        color: ${colors.lightpurple};
      }

      .token.tag,
      .token.attr-name,
      .token.namespace,
      .token.number,
      .token.unit,
      .token.hexcode,
      .token.deleted {
        color: ${colors.pink};
      }

      .token.property,
      .token.selector {
        color: ${colors.green};
      }

      .token.function-name,
      .token.boolean,
      .token.selector .token.id,
      .token.function {
        color: ${colors.blue};
      }

      .token.class-name {
        color: ${colors.yellow};
      }

      .token.constant,
      .token.symbol {
        color: ${colors.pink};
      }

      .token.important,
      .token.atrule,
      .token.keyword,
      .token.selector .token.class,
      .token.builtin {
        color: ${colors.yellow};
        font-style: italic;
      }

      .token.string,
      .token.char,
      .token.attr-value,
      .token.regex,
      .token.variable {
        color: ${colors.pink};
      }

      .token.operator,
      .token.entity,
      .token.url {
        color: ${colors.blue};
      }

      .token.important,
      .token.bold {
        font-weight: bold;
      }

      .token.italic {
        font-style: italic;
      }

      .token.entity {
        cursor: help;
      }

      .token.inserted {
        color: ${colors.green};
      }
  `}
  >
    {children}
  </Global>
);

export default GlobalStyles;
