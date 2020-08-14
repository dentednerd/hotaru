import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import SidebarSection from './SidebarSection';

const StyledJournalFooter = styled('footer')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: calc(100% - 2rem);
  padding: 1rem;

  section {
    max-width: calc(25% - 1rem);
    margin: 0 1rem;
  }

  h2 {
    margin: 1rem 0;
    text-align: right;
    font-variant: small-caps;
    letter-spacing: 0.1rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #332E4A;
  }

  @media(max-width: 1023px) {
    flex-flow: column nowrap;

    section {
      max-width: 100%;
    }
  }
`;

const StyledTag = styled(Link)`
  display: inline-block;
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: #fff;
  color: #7a7495;
  padding-left: 0.25rem;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  box-shadow: 0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5),
              -0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5);
  transition: all 0.25s ease-in;

  &:hover {
    text-decoration: none;
    background-color: #fffacd;
    box-shadow: 0.0625rem 0.0625rem 0 rgba(0,0,0,0.5),
                -0.0625rem 0.0625rem 0 rgba(0,0,0,0.5);
    transition: all 0.25s ease-in;
  }
  
  span {
    margin-left: 0.25rem;
    padding: 0.25rem;
    display: inline-block;
    background: #ff7dab;
    color: #fff;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;

const JournalFooter = React.memo(({ categories, tags }) => {
  const sortedCategories = [...categories].reverse();

  return (
    <StyledJournalFooter>
      {sortedCategories.map(cat => <SidebarSection cat={cat} key={cat.fieldValue} />)}
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
    </StyledJournalFooter>
  );
});

export default JournalFooter;
