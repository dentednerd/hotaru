import React from 'react';
import { graphql } from 'gatsby';
import {Helmet} from 'react-helmet';
import Layout from '../components/Layout';
import RedBand from '../components/RedBand';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Recruiters from '../components/Recruiters';
import Intro from '../components/Intro';
import Interests from '../components/Interests';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

import './style.css'

const IndexPage = ({ data }) => {
  return (
    <div id="main">
      <Helmet>
        <title>Joanne Imlay, front end developer</title>
      </Helmet>
      <Layout>
        <Header />
        <Hero />
      </Layout>
      <RedBand>
        <Layout>
          <Recruiters />
        </Layout>
      </RedBand>
      <Layout>
        <Intro latestBlog={data.allMarkdownRemark.edges[0].node}/>
      </Layout>
      <RedBand>
        <Layout>
          <Portfolio />
        </Layout>
      </RedBand>
      <Layout>
        <Interests />
        <Footer />
      </Layout>
    </div>
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