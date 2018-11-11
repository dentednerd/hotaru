import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../templates/Layout';
import Wrapped from '../components/Wrapped';
import RedBand from '../components/RedBand';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Recruiters from '../components/Recruiters';
import Intro from '../components/Intro';
import Interests from '../components/Interests';
import Portfolio from '../components/Portfolio';

import './style.css'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Wrapped>
        <Hero />
      </Wrapped>
      <RedBand>
        <Wrapped>
          <Recruiters />
        </Wrapped>
      </RedBand>
      <Wrapped>
        <Intro latestBlog={data.allMarkdownRemark.edges[0].node}/>
      </Wrapped>
      <RedBand>
        <Wrapped>
          <Portfolio />
        </Wrapped>
      </RedBand>
      <Wrapped>
        <Interests />
      </Wrapped>
    </Layout>
  );
}

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
}
`
