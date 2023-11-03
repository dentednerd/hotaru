import React from 'react';
import { Link } from 'gatsby';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import FaIcon from '../FaIcon';
import { colors, fonts } from '../../tokens';

const CTALink = ({
  to,
  href,
  ghost,
  icon,
  onClick,
  style,
  children }) => {
  let Element = 'section';
  if (to) Element = Link;
  if (href) Element = 'a';

  const theme = useTheme();

  const backgroundImage = ghost ? 'none' : `linear-gradient(
    130deg,
    ${colors.constants.green},
    ${colors.constants.blue}
  )`;
  const borderImageSource = ghost ? `linear-gradient(
    130deg,
    ${colors.constants.green},
    ${colors.constants.blue}
  )` : 'none';
  const color = ghost ? theme.text : colors.constants.darkPurple;

  const StyledCTALink = styled(Element)`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    background-image: ${backgroundImage};
    color: ${color};
    width: fit-content;
    font-family: ${fonts.headline};
    font-size: 16px;
    line-height: 1;
    padding: 1rem;
    transition: all 0.2s;
    cursor: pointer;
    border-style: ${ghost ? 'solid' : 'none'};
    border-width: ${ghost ? '0.25rem' : '0'};
    border-image-slice: ${ghost ? '1' : '0'};
    border-image-source: ${borderImageSource};

    @media(min-width: 800px) {
      margin: 0;
      font-size: 1.25rem;
    }

    section.center-text {
      width: 100%;
      text-align: center;
    }

    svg {
      grid-column: 1;
      color: ${color};
      width: 1rem;
      margin-right: 0.5rem;
    }

    &:hover {
      transform: scale(1.1);
      text-decoration: none;
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
