import React from 'react';
import styled from '@emotion/styled';
import Card from './Card';

const SidebarSection = ({ cat }) => {
  const Section = styled('section')`
    display: flex;
    flex-flow: column nowrap;
  `;

  let backgroundColor;
  switch (cat.fieldValue) {
    case 'projects':
      backgroundColor = '#d2ddcb';
      break;
    case 'programming':
      backgroundColor = '#c2e4ff';
      break;
    case 'events':
      backgroundColor = '#ffbfef';
      break;
    default:
      backgroundColor = '#332E4A';
      break;
  }

  return (
    <Section
      key={cat.fieldValue}
    >
      <h2>
        {cat.fieldValue.charAt(0).toUpperCase() + cat.fieldValue.substring(1)}
      </h2>
      {cat.nodes.map(node => (
        <Card article={node} key={node.id} backgroundColor={backgroundColor} />
      ))}
    </Section>
  );
};

export default SidebarSection;
