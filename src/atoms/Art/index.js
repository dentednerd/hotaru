import React from 'react';
import styled from '@emotion/styled';

const Art = styled('img')`
  width: 100%;
  max-height: 100%;

  @media (max-width: 768px) {
    width: calc(100% - 1rem);
    padding: 0.5rem;
  }
`;

export default (props) => {
  const { src, alt } = props;
  return (
    <Art src={src} alt={alt} />
  );
};
