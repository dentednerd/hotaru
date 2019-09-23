import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import Screen from '../atoms/Screen';
import Layout from '../templates/Layout';
import Card from '../molecules/Card';
import IconLinks from '../molecules/IconLinks';
import { GridContainer, GridItem } from '../atoms/Grid';
import './global.css';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.blogWrap = React.createRef();
  }

  scroll(ref) { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { data } = this.props;
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
            <GridContainer>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <GridItem key={node.id}>
                  <Card article={node} />
                </GridItem>
              ))}
            </GridContainer>
          </BlogWrap>
          <IconLinks />
        </div>
      </Layout>
    );
  }
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
