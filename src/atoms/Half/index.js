import React from 'react';
import styled from '@emotion/styled';

const Half = styled('div')`
  width: 50%;
  padding: 1rem;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    text-align: center;
  }
`;

export default (props) => {
  const { children } = props;
  return (
    <Half>
      {children}
    </Half>
  );
};
