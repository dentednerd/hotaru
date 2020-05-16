import React from 'react';
import styled from '@emotion/styled';

const JournalPost = ({ post }) => {
  const Post = styled('article')`
    grid-column: 4 / 10;
    padding: 0;
    font-weight: 600;
    background-color: #fffacd;
    color: #7a7495;

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
    justify-content: center;
    align-items: center;
    height: 18rem;

    @media(max-width:767px) {
      height: 8rem;
    }

    a, h2 {
      font-size: 1.5rem;
      color: #fff;
      text-shadow: 3px 3px 6px #332E4A, -3px -3px 6px #332E4A, -3px 3px 6px #332E4A, 3px -3px 6px #332E4A;
      text-align: center;
      line-height: 1.5rem;
      padding: 1rem;
    }

    h2 {
      margin-bottom: 0;
    }
  `;

  const PostContent = styled('div')`
    padding: 1rem;
    font-weight: 600;
  `;

  return (
    <Post>
      <PostTitle>
        <h2>{post.frontmatter.title}</h2>
      </PostTitle>
      <PostContent
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Post>
  );
};

export default JournalPost;
