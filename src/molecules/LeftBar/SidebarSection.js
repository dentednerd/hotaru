import React from 'react';
import styled from '@emotion/styled';
import Card from '../Card';
import JournalHeading from '../JournalHeading';

const SidebarSection = ({ tag }) => {
  const Section = styled('section')`
    grid-column: 1 / 4;
    padding: 0;
    margin-bottom: 2rem;
    width: 100%;
  `;

  let backgroundColor;
  switch (tag.fieldValue) {
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
      key={tag.fieldValue}
    >
      <JournalHeading>
        {tag.fieldValue.charAt(0).toUpperCase() + tag.fieldValue.substring(1)}
      </JournalHeading>
      {tag.nodes.map(node => (
        <Card article={node} key={node.id} backgroundColor={backgroundColor} />
      ))}
    </Section>
  );
};

export default SidebarSection;
