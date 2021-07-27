import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

const MenuButton = ({ open, toggleOpen }) => {
  const StyledMenuButton = styled('div')`
    position: fixed;
    top: 0;
    right: 0;
    background: transparent;
    color: #fff;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    padding: 1rem;
    border: none;
    height: 2rem;
    width: 2rem;
    transform-origin: 1px;

    &:focus {
      border: none;
    }

    svg {
      height: 2rem;
      width: 2rem;
      filter: drop-shadow(-2px 2px 2px #6e6191);
    }
  `;

  return (
    <StyledMenuButton onClick={() => toggleOpen(!open)}>
      <FontAwesomeIcon icon={faBars} />
    </StyledMenuButton>
  );
};

export default MenuButton;
