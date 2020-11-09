import React from 'react';
import { Global, css } from '@emotion/core';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import { colors, fonts } from '../../tokens';

config.autoAddCss = false;

const GlobalStyles = ({ children }) => (
  <Global
    styles={css`
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
