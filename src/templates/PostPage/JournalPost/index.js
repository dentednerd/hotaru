import React from 'react';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import Tag from './Tag';

const JournalPost = ({ post }) => {
  const Post = styled('article')`
    padding: 0;
    font-weight: 200;
    background-color: transparent;
    color: #7a7495;
    height: auto;

    @media (max-width: 1023px) {
      margin-top: 0;
      grid-column-end: 2;
      width: 100%;

      ul {
        text-align: left;
      }
    }

    p {
      margin-bottom: 1em;
      letter-spacing: -0.025em;
      width: 100vw;
    }
  `;

  const PostHeader = styled('header')`
    background-image: url(${post.frontmatter.featuredImage.childImageSharp.fluid.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: lighten;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1rem;
    height: 450px;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #828dac;
      content: '';
      opacity: 0.5;
      pointer-events: none;
    }

    @media(max-width: 1023px) {
      width: 100vw;
      height: 56.25vw;
      padding: 0;
    }
  `;

  const PostTitle = styled('h2')`
    max-width: calc(100% - 2rem);
    font-size: 2rem;
    color: #fff;
    text-shadow: 3px 3px 6px #332E4A,
                -3px -3px 6px #332E4A,
                -3px 3px 6px #332E4A,
                3px -3px 6px #332E4A;
    text-align: center;
    line-height: 2rem;
    padding: 0;
    margin-bottom: 0;
    z-index: 2;

    @media(max-width: 1279px) {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }

    @media(max-width: 767px) {
      font-size: 1.25rem;
      line-height: 1.25rem;
    }
  `;

  const PostDate = styled('h3')`
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    z-index: 999;
    text-shadow: 2px 2px 4px #332E4A,
                -2px -2px 4px #332E4A,
                -2px 2px 4px #332E4A,
                2px -2px 4px #332E4A;
    margin: 0.5rem 0;
  `;

  const PostContent = styled('div')`
    padding: 1rem;
    font-weight: 200;
    background-color: #fffacd;
    line-height: 1.5rem;

    p, li {
      max-width: 100%;
    }

    a {
      color: #ff7dab;
    }

    @media(max-width: 1023px) {
      max-width: calc(100vw - 2rem);
    }

    @media(max-width: 767px) {
      p, li {
        font-size: 16px;
        line-height: 20px;
      }
  
      h2 {
        font-size: 20px;
        line-height: 24px;
        margin-top: 36px;
      }
    }

  `;

  const Tags = styled('section')`
    text-align: center;
    z-index: 2;
  `;

  return (
    <Post>
      <PostHeader>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDate>{post.frontmatter.date}</PostDate>
        <Tags>
          {post.frontmatter.tags.map(tag => (
            <Tag to={`/tags/${kebabCase(tag)}/`} key={tag}>
              {tag}
            </Tag>
          ))}
        </Tags>
      </PostHeader>
      <PostContent
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Post>
  );
};

export default JournalPost;
