import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import Screen from '../organisms/Screen';
import Layout from '../templates/Layout';
import Card from '../molecules/Card';
import Hero from '../atoms/Hero';

const Journal = ({ data: { allMarkdownRemark: { group }} }) => {
  const topSection = useRef();
  const journal = useRef();

  const scroll = (ref) => { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  const reverseGroup = [...group].reverse();

  const JournalSection = styled('section')`
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  `;

  const Content = styled('section')`
    width: 100%;
    max-width: 50vw;

    @media (max-width: 1023px) {
      margin: 0 1rem;
      max-width: calc(100vw - 2rem);
    }

    h2 {
      color: #332E4A;
    }
  `;

  const JournalFooter = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const classnames = {
    0: 'sage',
    1: 'pink',
    2: 'sky',
    3: 'lavender',
  };

  return (
    <Layout>
      <Screen
        className="purple"
        ref={topSection}
        onClick={() => scroll(journal)}
      >
        <Hero>
          <h1>journal</h1>
          <FontAwesomeIcon
            icon={faPencilAlt}
            style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
          />
        </Hero>
      </Screen>
      <section ref={journal}>
        {reverseGroup.map((tag, index) => (
          <JournalSection
            key={tag.fieldValue}
            className={classnames[index % 4]}
            style={{ width: '100vw' }}
          >
            <Content>
              <h2>{tag.fieldValue.charAt(0).toUpperCase() + tag.fieldValue.substring(1)}</h2>
              {tag.nodes.map(node => (
                <Card article={node} />
              ))}
            </Content>
          </JournalSection>
        ))}
      </section>
      <JournalSection className={classnames[group.length % 4]}>
        <JournalFooter>
          <FontAwesomeIcon
            icon={faAngleDoubleUp}
            style={{ color: '#585273', marginBottom: '0.25rem', cursor: 'pointer' }}
            onClick={() => scroll(topSection)}
          />
        </JournalFooter>
      </JournalSection>
    </Layout>
  );
}

export default Journal;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        nodes {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp{
                sizes(maxWidth: 630) {
                  src
                }
              }
            }
            tags
          }
          fields {
            slug
          }
          excerpt(pruneLength: 90)
        }
      }
    }
  }
`;
