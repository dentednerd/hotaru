import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Remote from '../../assets/undraws/remote';
import { colors, fonts } from '../../tokens';

const StyledIdentity = styled('section')`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  svg {
    display: block;
    height: 2rem;
    width: 4rem;
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: ${colors.constants.purple};

    h1 {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-family: ${fonts.cursive};
      margin: 1rem 0;
      padding: 0;
    }

    &:hover {
      color: var(--color-link);
    }
  }
`;

const Identity = () => (
  <StyledIdentity>
    <Remote />
    <Link to="/">
      <h1>Joey Imlay</h1>
    </Link>
  </StyledIdentity>
);

export default Identity;
