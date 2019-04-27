import React from 'react';
import styled from '@emotion/styled';

const GridContainer = (props) => {
  const GridContainerDiv = styled('div')`
    label: GridContainer;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    font-size: 0;
  `;

  return (
    <GridContainerDiv>
      {props.children}
    </GridContainerDiv>
  );
};

export default GridContainer;