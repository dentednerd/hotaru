import React from 'react';
import styled from '@emotion/styled';
import SidebarSection from './SidebarSection';

const LeftBar = ({ pageContext, categories }) => {
  let hideOnPage = false;
  if (pageContext) hideOnPage = true;

  const Sidebar = styled('aside')`
    grid-column: 1 / 4;
    grid-template-columns: repeat(4, 1fr);
    margin: 1rem 1rem 0 0;

    @media(max-width: 1023px) {
      background-color: #332e4a;
      order: 2;
      ${hideOnPage ? 'display: none;' : 'grid-column: 2 / 12;'}
      margin: 0;
      padding: 1rem 0.5rem 0;
      display: flex;
      flex-flow: row nowrap;
    }
  `;

  const sortedCategories = [...categories].reverse();

  return (
    <Sidebar>
      {sortedCategories.map(cat => <SidebarSection tag={cat} key={cat.fieldValue} />)}
    </Sidebar>
  );
};

export default LeftBar;
