import React from 'react';
import styled from '@emotion/styled';
import Categories from './Categories';
import JournalTag from './JournalTag';

const StyledJournalHome = styled('article')`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const JournalHome = React.memo(({ categories, tags }) => {
  const sortedCategories = [...categories].reverse();

  return (
    <StyledJournalHome>
      {sortedCategories.map(cat => (
        <Categories cat={cat} key={cat.fieldValue} />
      ))}
      <section>
        <h2>Tags</h2>
        {tags.map(thisTag => (
          <JournalTag tag={thisTag} />
        ))}
      </section>
    </StyledJournalHome>
  );
});

export default JournalHome;
