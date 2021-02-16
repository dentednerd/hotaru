import React from 'react';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import Tag from '../../../atoms/Tag';
import { colors, fonts } from '../../../tokens';

const JournalPost = ({ post }) => {
  const PostContent = styled('div')`
    padding: 0;

    p:first-child:first-letter {
      font-family: ${fonts.headline};
      font-size: 3.5rem;
      line-height: 3.5rem;
      font-weight: 700;
      float: left;
      margin-right: 0.25rem;
    }

    blockquote p:first-child:first-letter {
      font-family: inherit;
      text-shadow: inherit;
      font-size: 1rem;
      line-height: 1.25rem;
      font-weight: 400;
      clear: both;
      float: none;
      margin-right: 0;
    }

    ul {
      list-style: none;
      max-width: 100%;
      margin: 0;
      padding: 0;

      li:before {
        content: "» ";
      }
    }
  `;

  const PostTitle = styled('h2')`
    border-bottom: solid 1px ${colors.darkpurple};
    padding-bottom: 1rem;
  `;

  const Byline = styled('p')`
    font-family: ${fonts.cursive};
    font-size: 2rem;
    margin: 2rem 0;
    color: ${colors.darkpurple};
  `;

  const Tags = styled('section')`
    z-index: 2;
  `;

  const FeaturedImage = styled('img')`
    float: right;
    width: 50%;
    margin: 0.25rem 0 0.25rem 0.5rem;
    border: solid 1px ${colors.darkpurple};
  `;

  return (
    <article>
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <FeaturedImage
        src={post.frontmatter.featuredImage.childImageSharp.fluid.src}
        alt={post.frontmatter.title}
      />
      <PostContent
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Byline>
        thanks for reading! Joey x
      </Byline>
      <Tags>
        {post.frontmatter.tags.map(tag => (
          <Tag to={`/tags/${kebabCase(tag)}/`} key={tag}>
            {tag}
          </Tag>
        ))}
      </Tags>
    </article>
  );
};

export default JournalPost;
