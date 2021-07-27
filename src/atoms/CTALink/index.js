import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
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

  const StyledCTALink = styled(Element)`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background-color: ${colors.constants.darkpurple};
    color: #fff;
    font-family: ${fonts.contrast};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: #fff;
    text-align: left;
    margin: 0;
    font-size: 0.75rem;
    line-height: 0.75rem;
    letter-spacing: 0.05rem;
    box-shadow: ${shadows.darkShadow};
    transition: box-shadow 0.2s;
    cursor: pointer;

    svg {
      color: #fff;
      width: 1rem;
      margin-right: 1rem;
    }

    &:hover {
      text-decoration: none;
      box-shadow: ${shadows.slimShadow};
      transition: box-shadow: 0.2s;
    }
  `;

  return (
    <StyledCTALink
      to={to || null}
      href={href || null}
      onClick={() => onClick()}
      style={style}
    >
      {icon && <FaIcon icon={icon} />}
      {children}
    </StyledCTALink>
  );
};

export default CTALink;
