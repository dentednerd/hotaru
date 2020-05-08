import React from 'react';
import styled from '@emotion/styled';
import FaIcon from '../../atoms/FaIcon';

const StyledMenuItem = styled('section')`
  margin: 2rem 0;
  
  a {
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }

  p, h2 {
    margin: 0;
  }
`;

const MenuItem = (props) => {
  return (
    <StyledMenuItem>
      <a href={`/${props.page}`}>
        <h2>
          <FaIcon
            icon={props.icon}
            inline
          />
          {props.page}
        </h2>
      </a>
      {props.children}
    </StyledMenuItem>
  );
};

export default MenuItem;