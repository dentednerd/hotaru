import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { colors, fonts } from '../../tokens';

const StyledTag = styled('div')`
  display: inline-block;
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-family: ${fonts.headline};
  font-weight: 500;
  background-color: ${colors.yellow};
  color: ${colors.darkpurple};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  transition: all 0.25s ease-in;
  text-decoration: none;

  span {
    margin-left: 0.25rem;
    padding: 0.25rem;
    display: inline-block;
    background: ${colors.pink};
    color: #fff;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  &:hover {
    text-decoration: none;
  }
`;

const Tag = ({ to, children }) => { // eslint-disable-line arrow-body-style
  return to ? (
    <Link to={to}>
      <StyledTag>
        {children}
      </StyledTag>
    </Link>
  ) : (
    <StyledTag>
      {children}
    </StyledTag>
  );
};

export default Tag;
