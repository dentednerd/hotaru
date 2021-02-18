import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { colors, fonts, shadows } from '../../tokens';

const StyledTag = styled('div')`
  display: inline-block;
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-family: ${fonts.headline};
  font-weight: 500;
  background-color: #fff;
  color: ${colors.darkpurple};
  padding: 0;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  transition: all 0.25s ease-in;
  text-decoration: none;
  box-shadow: ${shadows.dropShadow};
  overflow: hidden;

  &:hover {
    text-decoration: none;
    background-color: ${colors.yellow};
    box-shadow: none;
    transition: all 0.25s ease-in;
    cursor: pointer;
  }
`;

const FlexWrapper = styled('div')`
  display: flex;
  flex-flow: row nowrap;

  span {
    padding: 0.25rem;
    display: inline-block;
    background: ${colors.pink};
    color: #fff;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    height: 100%;
  }
`;

const PadWrapper = styled('div')`
  padding: 0.25rem;
`;

const Tag = ({ to, children }) => { // eslint-disable-line arrow-body-style
  let tagName = null;
  let tagCount = null;

  if (typeof children === 'object') {
    tagName = children[0]; // eslint-disable-line prefer-destructuring
    tagCount = children[1]; // eslint-disable-line prefer-destructuring
  } else {
    tagName = children;
  }

  return to ? (
    <Link to={to}>
      <StyledTag>
        <FlexWrapper>
          <PadWrapper>{tagName}</PadWrapper>
          {tagCount && tagCount}
        </FlexWrapper>
      </StyledTag>
    </Link>
  ) : (
    <StyledTag>
      <PadWrapper>{children}</PadWrapper>
    </StyledTag>
  );
};

export default Tag;
