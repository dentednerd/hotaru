import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import FaIcon from '../FaIcon';
import { colors, fonts, shadows } from '../../tokens';

const CTALink = ({
  to,
  href,
  icon,
  onClick,
  style,
  children }) => {
  let Element = 'section';
  if (to) Element = Link;
  if (href) Element = 'a';

  const theme = useTheme();

  const StyledCTALink = styled(Element)`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.accentLight};
    color: ${colors.constants.darkPurple};
    width: fit-content;
    height: 2.5rem;
    font-family: ${fonts.headline};
    font-size: 1.25rem;
    line-height: 1;
    margin: 0 auto;
    padding: 0.5rem;
    box-shadow: ${shadows.ctaShadow};
    transition: all 0.2s;
    cursor: pointer;

    &.fill {
      width: 100% !important;
    }

    @media(min-width: 1024px) {
      margin: 0;
    }

    section.center-text {
      width: 100%;
      text-align: center;
    }

    svg {
      grid-column: 1;
      color: ${colors.constants.darkPurple};
      width: 1rem;
      margin-right: 0.5rem;
    }

    &:hover {
      transform: scale(1.1);
      background-color: ${theme.accentBold};
      text-decoration: none;
      box-shadow: ${shadows.ctaHoverShadow};
      transition: all 0.2s;
    }
  `;

  return (
    <StyledCTALink
      to={to || null}
      href={href || null}
      onClick={() => onClick ? onClick() : null}
      style={style}
    >
      {icon ? <FaIcon icon={icon} /> : null}
      <section className="center-text">
        {children}
      </section>
    </StyledCTALink>
  );
};

export default CTALink;
