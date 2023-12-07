import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../tokens';

const PageHeaderGrid = styled('header')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 0;
  padding-bottom: 2rem;
  border-bottom: solid 1px ${colors.constants.purple};
  margin-bottom: 1rem;
  height: auto;
  width: 100%;

  @media(min-width: 425px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    height: 12rem;
  }

  svg {
    width: 100%;
    max-height: 10rem;
    margin: 0;

    @media(min-width: 425px) {
      margin: 1rem 0;
    }
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
      font-size: 1rem;
      line-height: normal;
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
