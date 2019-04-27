import React from 'react';
import { graphql } from 'gatsby';
import {Helmet} from 'react-helmet';
import styled from '@emotion/styled'
import RedBand from '../components/atoms/RedBand';
import WhiteBand from '../components/atoms/WhiteBand';
import Header from '../components/organisms/Header';
import Hero from '../components/organisms/Hero';
import Recruiters from '../components/atoms/Recruiters';
import Intro from '../components/molecules/Intro';
import Interests from '../components/Interests';
import Portfolio from '../components/Portfolio';
import Footer from '../components/organisms/Footer';

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
      <WhiteBand>
        <Header />
        <Hero />
      </WhiteBand>
      <RedBand>
        <Recruiters />
      </RedBand>
      <WhiteBand>
        <Intro latestBlog={data.allMarkdownRemark.edges[0].node}/>
      </WhiteBand>
      <RedBand>
        <Portfolio />
      </RedBand>
      <WhiteBand>
        <Interests />
        <Footer />
      </WhiteBand>
    </Index>
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
