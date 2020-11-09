import React from 'react';
import styled from '@emotion/styled';
import TagCard from '../../TagPage/TagCard';

const Section = styled('section')`
  display: flex;
  flex-flow: column nowrap;
`;

const JournalGrid = styled('section')`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Categories = ({ cat }) => {
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
      backgroundColor = '#666699';
      break;
  }

  return (
    <Section
      key={cat.fieldValue}
    >
      <h2>
        {cat.fieldValue.charAt(0).toUpperCase() + cat.fieldValue.substring(1)}
      </h2>
      <JournalGrid>
        {cat.nodes.map(node => (
          <TagCard post={node} key={node.id} backgroundColor={backgroundColor} />
        ))}
      </JournalGrid>
    </Section>
  );
};

export default Categories;
