import React from 'react';
import styled from '@emotion/styled';
import FaIcon from '../../atoms/FaIcon';

const StyledMenuItem = styled('section')`
  margin: 2rem 0;

  @media(max-width: 767px) {
    margin: 5vh 0;
  }
  
  a {
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }

  p, h2 {
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

`;

const MenuItem = ({ page, icon, children }) => (
  <StyledMenuItem>
    <a href={`/${page}`}>
      <h2>
        <FaIcon
          icon={icon}
          inline
        />
        {page}
      </h2>
    </a>
    {children}
  </StyledMenuItem>
);

export default MenuItem;
