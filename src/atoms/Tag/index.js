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
  box-shadow: 0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5),
              -0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5);
  transition: all 0.25s ease-in;

  &:hover {
    text-decoration: none;
    background-color: #fffacd;
    box-shadow: 0.0625rem 0.0625rem 0 rgba(0,0,0,0.5),
                -0.0625rem 0.0625rem 0 rgba(0,0,0,0.5);
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

const Tag = ({ children }) => (
  <StyledTag>
    {children}
  </StyledTag>
);

export default Tag;
