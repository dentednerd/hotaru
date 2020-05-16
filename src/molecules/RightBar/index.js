import React from 'react';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';

const JournalRightBar = styled('aside')`
  grid-column: 10 / 13;
  height: 90vh;
  margin-left: 1rem;

  a {
    display: inline-block;
    font-size: 0.75rem;
    line-height: 0.75rem;
    background: #fff;
    color: #7a7495;
    padding: 0 0 0 0.25rem;
    border-radius: 0.25rem;
    margin-bottom: 0.25rem;
    margin-right: 0.25rem;

    span {
      margin-left: 0.25rem;
      padding: 0.35rem 0.25rem 0.25rem;
      display: inline-block;
      background: #ff7dab;
      color: #fff;
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }

  @media(max-width: 1023px) {
    grid-column: 1 / 13;
    height: auto;
    margin: 2rem;
  }
`;

const IntroSection = styled('section')`
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 0.75rem;
  line-height: 0.75rem;

  @media(max-width: 1023px) {
    display: none;
  }
`;

const RightBar = ({ tags }) => {
  const sortedTags = tags.group.sort((a, b) => a.fieldValue.localeCompare(b.fieldValue, 'en', { sensitivity: 'base' }));

  return (
    <JournalRightBar>
      <IntroSection className="sky">
        {"My journal is a collection of observations on programming, reports on events I've participated in, and commentaries on projects I've created. It isn't a blog in the traditional sense. I prefer getting a lot of ideas out at once, then working on them one by one, rather than writing a perfectly polished entry in one sitting. That's why you'll see a few incomplete entries tagged 'WIP' in here."}
      </IntroSection>
      <h2>Tags</h2>
      {sortedTags.map(tag => (
        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue}>
          {tag.fieldValue}
          <span>{tag.totalCount}</span>
        </Link>
      ))}
    </JournalRightBar>
  );
};

export default RightBar;
