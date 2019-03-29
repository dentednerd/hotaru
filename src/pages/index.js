import React from 'react';
import { graphql } from 'gatsby';
import {Helmet} from 'react-helmet';
import styled from '@emotion/styled'
import Layout from '../components/atoms/Layout';
import RedBand from '../components/atoms/RedBand';
import Header from '../components/organisms/Header';
import Hero from '../components/organisms/Hero';
import Recruiters from '../components/atoms/Recruiters';
import Intro from '../components/Intro';
import Interests from '../components/Interests';
import Portfolio from '../components/Portfolio';

import './style.css'
import './global.css'

const Index = styled('div')`
  box-sizing: border-box;
  height: 100%;
`;

const IndexPage = ({ data }) => {
  return (
    <Index>
      <Helmet>
        <title>Joanne Imlay, front end developer</title>
      </Helmet>
      <Layout>
        <Header />
        <Hero />
      </Layout>
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
<<<<<<< HEAD
      </Wrapped>
    </Layout>
=======
        <Footer />
      </Layout>
    </Index>
>>>>>>> 184f151961c15639bbd514f0352e702326de4ef3
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
