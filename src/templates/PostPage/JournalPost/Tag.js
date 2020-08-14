import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const StyledTag = styled(Link)`
  display: inline-block;
  font-size: 0.75rem;
  line-height: 0.75rem;
  background-color: #fff;
  color: #7a7495;
  padding: 0.25rem;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  box-shadow: 2px 2px 8px #332E4A,
              -2px -2px 8px #332E4A,
              -2px 2px 8px #332E4A,
              2px -2px 8px #332E4A;
  transition: all 0.25s ease-in;

  &:hover {
    text-decoration: none;
    background-color: #fffacd;
    box-shadow: 1px 1px 4px #332E4A,
                -1px -1px 4px #332E4A,
                -1px 1px 4px #332E4A,
                1px -1px 4px #332E4A;
    transition: all 0.25s ease-in;
  }
  
  span {
    margin-left: 0.25rem;
    padding: 0.25rem;
    display: inline-block;
    background: #ff7dab;
    color: #fff;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;

const Tag = ({ to, children }) => (
  <StyledTag to={to}>
    {children}
  </StyledTag>
);

export default Tag;
