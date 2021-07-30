import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../tokens';

const PageHeaderGrid = styled('header')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px ${colors.constants.purple};
  margin-bottom: 1rem;
  width: 100%;

  svg {
    width: 100%;
    max-height: 8rem;
  }

  div.text {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-end;

    h2 {
      margin-bottom: 0;
    }

    p {
      font-size: 0.8rem;
      line-height: 1rem;
    }
  }
`;

const PageHeader = ({ style, children }) => (
  <PageHeaderGrid style={style}>
    {children[0]}
    <div className="text">
      {children[1]}
    </div>
  </PageHeaderGrid>
);

export default PageHeader;
