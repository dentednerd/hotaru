import React from 'react';
import styled from '@emotion/styled';

const StyledOrangeBox = styled('div')`
  background: #fda;
  text-align: left;
  padding: 1em;
  margin: 1em auto;

  h2, span {
    font-family: 'Roboto Slab', serif;
    color: #c30;
    text-align: left;
    font-size: 1em;
    line-height: 1em;
    margin-bottom: 0.5em;
  }

  @media screen and (orientation: portrait) {
    font-size: 16px;
    padding: 4px;
    margin: 8px auto;
  }
`;

const OrangeBox = (props) => {
  const { children } = props;
  return (
    <StyledOrangeBox>
      {children}
    </StyledOrangeBox>
  );
};

export default OrangeBox;
