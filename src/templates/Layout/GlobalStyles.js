import React from 'react';
import { Global, css } from '@emotion/react';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import { colors, fonts } from '../../tokens';

config.autoAddCss = false;

const GlobalStyles = ({ children, theme }) => (
  <Global
    styles={css`
      body {
        background-color: ${colors.constants.footerbg};
        font-family: ${fonts.body};
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        margin: 0;
        padding: 0;
      }

      @media (min-width: 1024px) {
        body {
          font-size: 20px;
          line-height: 36px;
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
        border-top: solid 1px ${colors.constants.purple};
        margin: 1rem 0;
      }

      blockquote {
        width: 60%;
        padding: 1rem;
        margin: 1rem auto;
        color: ${theme.accentBold};
        border-left: solid 0.125rem ${theme.accentBold};
      }

      blockquote span {
        font-family: ${fonts.cursive};
        font-size: 2rem;
      }

      ul,
      ol {
        padding-left: 1rem;
        margin: 0 auto 1rem;
      }

      ul li,
      ol li {
        margin-bottom: 1rem;
      }

      /* headings */

      h1 {
        color: ${theme.accentBold};
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-family: ${fonts.cursive};
        margin: 1rem 0;
        padding: 0;
      }

      h1:hover {
        color:${theme.accentBold};
      }

      h2 {
        font-family: ${fonts.headline};
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.25rem;
        margin: 0 0 1rem;
      }

      h3 {
        display: flex;
        align-items: center;
        min-height: 3rem;
        margin: 0 0 1rem;
        padding: 0.5rem;
        background-image: linear-gradient(
          130deg,
          ${theme.accentLight},
          ${theme.accentBold}
        );
        color: ${colors.constants.darkPurple};
        font-family: ${fonts.contrast};
        font-weight: 900;
        font-size: 2rem;
        line-height: 1;
      }

      h3 svg {
        margin: 0 1rem 0 0;
        opacity: 1;
      }

      h3 svg:hover {
        cursor: auto;
      }

      h4 {
        font-family: ${fonts.contrast};
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1;
        margin: 0 0 1rem;
        letter-spacing: -0.05rem;
        color: ${theme.accentBold};
      }

      h5 {
        display: grid;
        place-items: center left;
        height: 1.5rem;
        width: fit-content;
        margin: 0 0 1rem;
        padding: 0.25rem;
        background-color: ${theme.accentLight};
        color: ${colors.constants.darkPurple} !important;
        font-family: ${fonts.contrast};
        font-weight: 700;
        font-size: 1rem;
        line-height: 1;
      }

      h6 {
        font-family: ${fonts.headline};
        font-weight: 400;
        font-size: 1rem;
        line-height: 1;
        margin: 0 0 1rem;
        letter-spacing: -0.05rem;
        color: ${theme.accentBold};
      }

      a {
        color: ${theme.accentBold};
        text-decoration: none;
      }

      p a,
      li a,
      blockquote a {
        background:
          linear-gradient(
            130deg,
            ${theme.accentLight},
            ${theme.accentBold}
          ),
          linear-gradient(
            130deg,
            ${colors.constants.pink},
            ${colors.constants.yellow},
            ${colors.constants.green},
            ${colors.constants.blue},
            ${colors.constants.purple}
          );
        background-size:
          100% 0.125rem,
          0 0.125rem;
        background-position:
          100% 100%,
          0 100%;
        background-repeat: no-repeat;
        transition: background-size 400ms;
      }

      p a:hover,
      li a:hover,
      blockquote a:hover {
        background-size:
          0 0.125rem,
          100% 0.125rem;
      }

      .dates {
        font-family: ${fonts.contrast};
        font-size: 1rem;
        line-height: 1;
        letter-spacing: 0.125rem;
        font-weight: 300;
        color: ${theme.text};
      }

      .svg-inline--fa {
        height: 1rem;
        width: 1rem;
      }

      code[class*='language-'],
      pre[class*='language-'] {
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

      @media (max-width: 767px) {
        code[class*='language-'] {
          font-size: 16px;
          line-height: 24px;
        }
      }

      pre code span {
        display: inline-block;
        overflow-wrap: break-word;
      }

      /* Code blocks */
      pre[class*='language-'] {
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

      @media (max-width: 767px) {
        pre[class*='language-'] {
          width: calc(100% - 2rem);
          font-size: 0.75rem;
          padding: 1rem;
          border-radius: 1rem;
          font-size: 1rem;
          white-space: normal;
          word-wrap: normal;
        }
      }

      :not(pre) > code[class*='language-'],
      pre[class*='language-'] {
        background-color: ${colors.constants.darkPurple} !important;
      }

      /* Inline code */
      :not(pre) > code[class*='language-'] {
        background-color: ${colors.constants.darkPurple};
        display: inline-block;
        padding: 0 0.125rem;
        border-radius: 0.125rem;
        color: ${colors.text};
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 0 0.125rem;
      }

      .token.parameter {
        color: ${colors.constants.yellow};
        font-style: italic;
      }

      .token.comment,
      .token.block-comment,
      .token.prolog,
      .token.doctype,
      .token.cdata {
        color: ${colors.lightPurple};
      }

      .token.punctuation {
        color: ${colors.lightPurple};
      }

      .token.tag,
      .token.attr-name,
      .token.namespace,
      .token.number,
      .token.unit,
      .token.hexcode,
      .token.deleted {
        color: ${colors.constants.pink};
      }

      .token.property,
      .token.selector {
        color: ${colors.constants.green};
      }

      .token.function-name,
      .token.boolean,
      .token.selector .token.id,
      .token.function {
        color: ${colors.constants.blue};
      }

      .token.class-name {
        color: ${colors.constants.yellow};
      }

      .token.constant,
      .token.symbol {
        color: ${colors.constants.pink};
      }

      .token.important,
      .token.atrule,
      .token.keyword,
      .token.selector .token.class,
      .token.builtin {
        color: ${colors.constants.yellow};
        font-style: italic;
      }

      .token.string,
      .token.char,
      .token.attr-value,
      .token.regex,
      .token.variable {
        color: ${colors.constants.pink};
      }

      .token.operator,
      .token.entity,
      .token.url {
        color: ${colors.constants.blue};
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
        color: ${colors.constants.green};
      }
    `}
  >
    {children}
  </Global>
);

export default GlobalStyles;
