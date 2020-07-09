import React from 'react';
import styled from '@emotion/styled';

const StyledBackdrop = styled('div')`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 3;
  top: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s;

  &.open {
    opacity: 1;
  }
`;

export default ({ open, toggleOpen }) => (
  <StyledBackdrop
    className={open ? 'open' : null}
  />
);
