import React from 'react';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import Tag from '../../../atoms/Tag';
import { colors, fonts } from '../../../tokens';

const JournalPost = ({ post }) => {
  if(!post) return null;

  const StyledJournalPost = styled('article')`
    position: relative;
    width: calc(100% - 2rem);
    max-width: 800px;
    margin: 50vh auto 0;
  `;

  const PostContent = styled('div')`
    padding: 0;

    p:first-of-type:first-letter {
      font-family: ${fonts.headline};
      initial-letter: 2;
      margin-right: 0.5rem;
    }

    blockquote p:first-of-type:first-letter,
    li p:first-of-type:first-letter {
      font-family: inherit;
      initial-letter: 1;
      margin-right: 0.1rem;
    }

    ul {
      list-style: none;
      max-width: 100%;
      margin: 0;
      padding: 0;

      li:before {
        content: '» ';
      }
    }
  `;

  const Byline = styled('p')`
    font-family: ${fonts.cursive};
    font-size: 2rem;
    margin: 2rem 0 1rem;
    color: ${colors.text};
  `;

  const Tags = styled('section')`
    display: flex;
    flex-flow: row wrap;
    gap: 0.25rem;
    z-index: 2;
    border-top: solid 1px ${colors.constants.purple};
    padding: 1rem 0;
  `;

  return (
    <StyledJournalPost>
      <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <Byline>thanks for reading! Joey x</Byline>
      <Tags>
        {post.frontmatter.tags.map(tag => (
          <Tag to={`/tags/${kebabCase(tag)}/`} key={tag}>
            {tag}
          </Tag>
        ))}
      </Tags>
    </StyledJournalPost>
  );
};

export default JournalPost;
