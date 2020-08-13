import React from 'react';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import Tag from '../../atoms/Tag';

const JournalPost = ({ pageContext, post }) => {
  const Post = styled('article')`
    grid-column: 4 / 10;
    padding: 0;
    font-weight: 600;
    background-color: transparent;
    color: #7a7495;
    height: auto;
    margin-top: 1rem;

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
  
    h3 {
      font-weight: 600;
      font-size: 1rem;
    }
  `;

  const PostTitle = styled('div')`
    background-image: url(${post.frontmatter.featuredImage.childImageSharp.fluid.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: lighten;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: calc((50vw / 16) * 9);
    box-shadow: 0.25rem 0 0.5rem rgba(0,0,0,0.5), -0.25rem 0 0.5rem rgba(0,0,0,0.5);
    padding: 0;
    position: relative;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #332E4A;
      content: '';
      opacity: 0.75;
      pointer-events: none;
    }

    @media(max-width: 1023px) {
      width: 100vw;
      height: 56.25vw;
    }

    h2 {
      font-size: 2rem;
      color: #fff;
      text-shadow: 3px 3px 6px #332E4A,
                  -3px -3px 6px #332E4A,
                  -3px 3px 6px #332E4A,
                  3px -3px 6px #332E4A;
      text-align: center;
      line-height: 2rem;
      padding: 1rem;
      margin-bottom: 0;
      z-index: 2;
    }

    @media(max-width: 1279px) {
      h2 {
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
    }

    @media(max-width: 767px) {
      h2 {
        font-size: 1.25rem;
        line-height: 1.25rem;
      }
    }

    h3 {
      color: #fff;
      weight: 600;
      z-index: 2;
      text-shadow: 2px 2px 4px #332E4A,
                  -2px -2px 4px #332E4A,
                  -2px 2px 4px #332E4A,
                  2px -2px 4px #332E4A;
    }
  `;

  const PostContent = styled('div')`
    padding: 1rem;
    font-weight: 600;
    background-color: #fffacd;
    box-shadow: 0.25rem 0.25rem 0.5rem rgba(0,0,0,0.5), -0.25rem 0.25rem 0.5rem rgba(0,0,0,0.5);
    line-height: 1.125rem;

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
    margin-top: 1rem;
    z-index: 2;
  `;

  return (
    <Post>
      <PostTitle>
        <h2>{post.frontmatter.title}</h2>
        <h3>{post.frontmatter.date}</h3>
        <Tags>
          {post.frontmatter.tags.map(tag => (
            <Tag to={`/tags/${kebabCase(tag)}/`} key={tag}>
              {tag}
            </Tag>
          ))}
        </Tags>
      </PostTitle>
      <PostContent
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Post>
  );
};

export default JournalPost;
