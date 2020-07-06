import React from 'react';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';

const JournalPost = ({ pageContext, post }) => {
  const Post = styled('article')`
    grid-column: 4 / 10;
    padding: 0;
    font-weight: 600;
    background-color: transparent;
    color: #7a7495;
    height: auto;

    @media (max-width: 1023px) {
      grid-column: 1 / 13;

      ul {
        text-align: left;
      }
    }

    p {
      margin-bottom: 1em;
      letter-spacing: -0.025em;
      width: 100vw;
    }

    a {
      color: #ff7dab;
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
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: calc((50vw / 16) * 9);
    box-shadow: 0.25rem 0 0.5rem rgba(0,0,0,0.5), -0.25rem 0 0.5rem rgba(0,0,0,0.5);
    padding: 0;

    @media(max-width: 767px) {
      height: calc((100vw / 16) * 9) ;
    }

    h2 {
      font-size: 2rem;
      color: #fff;
      text-shadow: 3px 3px 6px #332E4A, -3px -3px 6px #332E4A, -3px 3px 6px #332E4A, 3px -3px 6px #332E4A;
      text-align: center;
      line-height: 2rem;
      padding: 1rem;
    }

    h2 {
      margin-bottom: 0;
    }

    h3 {
      color: #fff;
      weight: 600;
      text-shadow: 2px 2px 4px #332E4A, -2px -2px 4px #332E4A, -2px 2px 4px #332E4A, 2px -2px 4px #332E4A;
    }
  `;

  const PostContent = styled('div')`
    padding: 1rem;
    font-weight: 600;
    background-color: #fffacd;
    box-shadow: 0.25rem 0.25rem 0.5rem rgba(0,0,0,0.5), -0.25rem 0.25rem 0.5rem rgba(0,0,0,0.5);
    line-height: 1.125rem;
  `;

  const Tags = styled('section')`
    text-align: center;
    margin-top: 1rem;
    
    a {
      color: #fff;
    }
  `;

  const Tag = styled(Link)`
    display: inline-block;
    font-size: 0.75rem;
    line-height: 0.75rem;
    color: #fff;
    background-color: #7a7495;
    padding: 0.25rem 0.25rem 0.1rem;
    border-radius: 0.25rem;
    margin-bottom: 0.25rem;
    margin-right: 0.25rem;
    box-shadow: 0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5),
                -0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5);
    transition: all 0.25s ease-in;

    &:hover {
      text-decoration: none;
      background-color: #fffacd;
      color: #7a7495;
      box-shadow: 0.0625rem 0.0625rem 0 rgba(0,0,0,0.5),
                  -0.0625rem 0.0625rem 0 rgba(0,0,0,0.5);
      transition: all 0.25s ease-in;
    }
  `;

  console.log('JournalPost post data', post);

  return (
    <Post>
      <PostTitle>
        <h2>{post.frontmatter.title}</h2>
        <h3>{post.frontmatter.date}</h3>
        <Tags>
          <p>
            {post.frontmatter.tags.map(tag => (
              <Tag to={`/tags/${kebabCase(tag.fieldValue)}/`} key={tag}>
                {tag}
              </Tag>
            ))}
          </p>
        </Tags>
      </PostTitle>
      <PostContent
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      >

      </PostContent>
    </Post>
  );
};

export default JournalPost;
