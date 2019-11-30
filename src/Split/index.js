import React from 'react';
import styled from '@emotion/styled';

const Split = styled('div')`
  label: Split;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    max-height: calc(100vh - 2rem);
  }
`;

export default (props) => {
  const { children } = (props);
  return (
    <Split>
      {children}
    </Split>
  );
};
