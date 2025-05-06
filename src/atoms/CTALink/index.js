import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import { ExtLink } from '../../assets/icons'
import { colors, fonts, shadows } from '../../tokens'

const CTALink = ({ to, href, onClick, style, children }) => {
  let Element = 'span'
  if (to) Element = Link
  if (href) Element = 'a'

  const StyledCTALink = styled(Element)`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-content: center;
    text-wrap: nowrap;
    width: fit-content;
    color: ${colors.constants.ctaText};
    font-family: ${fonts.headline};
    line-height: 1;
    padding: 0.5lh;
    box-shadow: ${shadows.cta};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background-attachment: fixed;
    background-clip: border-box;
    background-color: transparent;
    background-image: linear-gradient(
      to bottom,
      ${colors.constants.blue},
      ${colors.constants.purple},
      ${(props) => props.theme.accentBold} 60%,
      ${(props) => props.theme.accentBold} 100%
    );
    background-origin: padding-box;
    background-repeat: repeat;
    background-size: 100vh;
    background-position: center;

    svg {
      color: ${colors.constants.ctaText};
      width: 1lh;
      margin-right: 0.5rem;
      z-index: 2;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      box-shadow: ${shadows.ctaHover};
      color: ${colors.constants.ctaHoverText};

      svg {
        color: ${colors.constants.ctaHoverText};
        transition: all 0.3s ease-in-out;
      }
    }
  `

  return (
    <StyledCTALink
      to={to || null}
      href={href || null}
      onClick={() => (onClick ? onClick() : null)}
      style={style}
    >
      <ExtLink />
      {children}
    </StyledCTALink>
  )
}

export default CTALink
