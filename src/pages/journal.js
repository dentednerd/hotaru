import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import Screen from '../Screen';
import Layout from '../templates/Layout';
import Card from '../Card';
import Footer from '../Footer';
import Hero from '../Hero';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.journal = React.createRef();
  }

  scroll(ref) { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const {
      data: {
        allMarkdownRemark: { group },
      },
    } = this.props;

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

      h2 {
        color: #332E4A;
      }
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
          onClick={() => this.scroll(this.journal)}
        >
          <Hero>
            <h1>journal</h1>
            <FontAwesomeIcon
              icon={faPencilAlt}
              style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
            />
          </Hero>
        </Screen>
        <section ref={this.journal}>
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
          <Footer />
        </JournalSection>
      </Layout>
    );
  }
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
