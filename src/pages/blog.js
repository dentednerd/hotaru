import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, graphql } from 'gatsby';
import Screen from '../atoms/Screen';
import Layout from '../templates/Layout';
import Card from '../molecules/Card';
import { GridContainer, GridItem } from '../atoms/Grid';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.blogWrap = React.createRef();
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

    const Hero = styled('div')`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `;

    const BlogWrap = styled('div')`
      label: BlogWrap;
      width: 50vw;
      margin: 0 auto;
      padding: 1rem 0;

      a:hover {
        text-decoration: none;
      }

      @media (max-width: 768px) {
        width: calc(100% - 2rem);
        margin: 0 1rem;
      }
    `;

    return (
      <Layout>
        <Screen
          className="purple"
          onClick={() => this.scroll(this.blogWrap)}
        >
          <Hero>
            <h1>blog</h1>
            <FontAwesomeIcon
              icon={faPencilAlt}
              style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
            />
          </Hero>
        </Screen>
        <div style={{ background: '#332E4A', width: '100vw', paddingBottom: '1rem' }}>
          <BlogWrap ref={this.blogWrap}>
            {group.map(tag => (
              <Fragment key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue.charAt(0).toUpperCase() + tag.fieldValue.substring(1)}
                </Link>
                <GridContainer>
                  {tag.nodes.map(node => (
                    <GridItem key={node.id}>
                      <Card article={node} />
                    </GridItem>
                  ))}
                </GridContainer>
              </Fragment>
            ))}
          </BlogWrap>
        </div>
      </Layout>
    );
  }
}

export default BlogPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
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
          excerpt(pruneLength: 125)
        }
      }
    }
  }
`;
