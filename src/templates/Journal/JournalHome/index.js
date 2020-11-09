import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import Categories from './Categories';
import { colors, fonts, shadows } from '../../../tokens';

const StyledJournalHome = styled('footer')`
  section {
    margin: 1rem 0;
  }
`;

const StyledTag = styled(Link)`
  display: inline-block;
  font-family: ${fonts.headline};
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: #fff;
  color: ${colors.darkpurple};
  padding-left: 0.25rem;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  box-shadow: ${shadows.dropShadow};
  transition: all 0.25s ease-in;

  &:hover {
    text-decoration: none;
    background-color: ${colors.yellow};
    box-shadow: none;
    transition: all 0.25s ease-in;
  }

  span {
    margin-left: 0.25rem;
    padding: 0.25rem;
    display: inline-block;
    background: ${colors.pink};
    color: #fff;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;

const JournalHome = React.memo(({ categories, tags }) => {
  const sortedCategories = [...categories].reverse();

  return (
    <StyledJournalHome>
      {sortedCategories.map(cat => <Categories cat={cat} key={cat.fieldValue} />)}
      <section>
        <h2>
          Tags
        </h2>
        {tags.map(thisTag => (
          <StyledTag to={`/tags/${kebabCase(thisTag.fieldValue)}/`} key={thisTag.fieldValue}>
            {thisTag.fieldValue}
            <span>{thisTag.totalCount}</span>
          </StyledTag>
        ))}
      </section>
    </StyledJournalHome>
  );
});

export default JournalHome;
