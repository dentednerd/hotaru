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
    flex-shrink: 1;
    background-color: ${theme.background};
    color: ${theme.text};
    width: calc(100% - 2rem);
    height: auto;
    font-family: ${fonts.contrast};
    font-size: 0.875rem;
    line-height: 1.125rem;
    margin: 0;
    padding: 0.5rem;
    border: solid 0.25rem ${theme.text};
    box-shadow: ${shadows.ctaShadow};
    transition: all 0.2s;
    cursor: pointer;

    section.center-text {
      width: 100%;
      text-align: center;
    }

    svg {
      grid-column: 1;
      color: ${theme.text};
      width: 1rem;
      margin-right: 0.5rem;
    }

    &:hover {
      color: ${colors.constants.lightpurple};
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
