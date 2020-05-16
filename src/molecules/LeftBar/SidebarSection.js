import React from 'react';
import styled from '@emotion/styled';
import Card from '../Card';

const SidebarSection = ({ tag }) => {
  const Section = styled('section')`
    grid-columns: 1 / 4;
    padding: 0;
    margin-bottom: 2rem;
    width: 100%;
  `;

  return (
    <Section
      key={tag.fieldValue}
    >
      <h2>{tag.fieldValue.charAt(0).toUpperCase() + tag.fieldValue.substring(1)}</h2>
      {tag.nodes.map(node => (
        <Card article={node} key={node.id} />
      ))}
    </Section>
  );
};

export default SidebarSection;
