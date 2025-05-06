import { Global, css } from '@emotion/react'
import { config, dom } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { colors, fonts, sizes } from '../../tokens'

config.autoAddCss = false

const GlobalStyles = ({ children, theme }) => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
      }

      body {
        background-color: ${colors.constants.footerBg};
        font-family: ${fonts.body};
        font-size: ${sizes.md};
        line-height: 1.25;
        font-weight: 400;
        overscroll-behavior-y: none;
        overflow-x: hidden;
      }

      #___gatsby,
      #gatsby-focus-wrapper {
        width: 100%;
        height: 100%;
      }

      ${dom.css()}

      p {
        margin-top: 0;
        margin-bottom: 1lh;
      }

      p:last-child {
        margin-bottom: 0;
      }

      hr {
        border-top: solid 1px ${colors.constants.purple};
        margin: 1lh 0;
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
        color: ${theme.accentBold};
      }

      h2 {
        background-attachment: fixed;
        background-clip: text;
        background-color: transparent;
        background-image: linear-gradient(
          to bottom,
          ${colors.constants.blue},
          ${theme.accentBold}
        );
        background-origin: padding-box;
        background-repeat: repeat;
        background-size: auto;
        text-fill-color: transparent;
        -webkit-text-fill-color: transparent;
        color: ${theme.accentBold};
        font-family: ${fonts.headline};
        font-weight: 700;
        font-size: ${sizes.xl};
        line-height: 1.25;
        margin: 0 0 1rem;
      }

      h3 {
        color: ${colors.text};
        font-family: ${fonts.contrast};
        font-weight: 900;
        font-size: ${sizes.xl};
        line-height: 1.25;
        margin: 0 0 1lh;
      }

      h3 svg {
        margin: 0 1lh 0 0;
        opacity: 1;
      }

      h3 svg:hover {
        cursor: auto;
      }

      h4 {
        font-family: ${fonts.contrast};
        font-weight: 400;
        font-size: ${sizes.lg};
        line-height: 1.25;
        margin: 0 0 1lh;
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
        background: linear-gradient(
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
        background-size: 100% 0.125rem, 0 0.125rem;
        background-position: 100% 100%, 0 100%;
        background-repeat: no-repeat;
        transition: background-size 400ms;
      }

      p a:hover,
      li a:hover,
      blockquote a:hover {
        background-size: 0 0.125rem, 100% 0.125rem;

        &:not(a:hover) {
          color: black;
        }
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

      // TODO: joey wtf
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
)

export default GlobalStyles
